import { Page } from '@playwright/test';
import { getDate } from './getDate';

export const handleLogin = async (page: Page) => {
  await page.locator('[data-test-id="home-hero-sign-in-cta"]').click();

  const email = process.env.USER_EMAIL;
  const password = process.env.USER_PASSWORD;

  console.log(`${getDate(Date.now())} Filling login fields...`);

  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('ivan.kanashenko.kr@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Solncev225348');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

  console.log(`${getDate(Date.now())} Logining...`);
};
