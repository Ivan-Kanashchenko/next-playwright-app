import { chromium, Page } from '@playwright/test';

import { getDate } from '../helpers';

import {
  handleInvite,
  handleLogin,
  handleSearch,
  handleSetNextPage,
} from '../helpers';

// npx playwright codegen /link/

type InviteMembersFlowParams = {
  localStorageData: Record<string, any>;
  origin: string;
  href: string;
  page?: Page;
  cookies?: string;
};

export const inviteMembersFlow = async (
  { page: browsePage, origin }: InviteMembersFlowParams,
  responseData: string
) => {
  let page = browsePage as Page;
  let browser;
  let context;

  let retries = 5;
  let success = false;
  let hasAbility = true;

  while (retries > 0 && !success && hasAbility) {
    console.log(`${getDate(Date.now())} Opening browser...`);

    browser = await chromium.launch();
    context = await browser.newContext();

    page = await context.newPage();

    try {
      await page.goto(origin);

      await handleLogin(page);

      await handleSearch(page, responseData);

      while (hasAbility) {
        await page.waitForTimeout(7000);

        const memberInvitations = await page
          .locator('button:has-text("Установить контакт")')
          .count();

        if (!memberInvitations) {
          await handleSetNextPage(page);
        } else {
          const { isSuccess, isEmptyPage } = await handleInvite(page);

          if (isEmptyPage || memberInvitations === 1) {
            await handleSetNextPage(page);
          }

          if (!isSuccess) {
            hasAbility = false;
          }
        }
      }

      success = true;

      await context.clearCookies();
      await context.clearPermissions();

      const pages = context.pages();
      for (const page of pages) {
        await page.evaluate(() => {
          localStorage.clear();
          sessionStorage.clear();
        });
      }

      console.log(`${getDate(Date.now())} Temporary data was cleaned`);

      await context.close();
      await browser.close();
      console.log(`${getDate(Date.now())} browser was closed`);
    } catch (error) {
      console.log(`${getDate(Date.now())} Error: ${error}`);

      await context.clearCookies();
      await context.clearPermissions();

      const pages = context.pages();
      for (const page of pages) {
        await page.evaluate(() => {
          localStorage.clear();
          sessionStorage.clear();
        });
      }

      console.log(`${getDate(Date.now())} Temporary data was cleaned`);

      await context.close();
      await browser.close();
      console.log(`${getDate(Date.now())} browser was closed`);

      retries--;
      if (retries === 0) {
        throw error;
      }
      console.log(`${getDate(Date.now())} retry`);
    }
  }
};
