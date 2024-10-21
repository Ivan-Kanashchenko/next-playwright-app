import { Page } from '@playwright/test';

export const handleSetNextPage = async (page: Page) => {
  const nextButton = await page.getByRole('button', { name: 'Далее' });

  const isNextButton = await nextButton.count();

  if (isNextButton) {
    await nextButton.click();
  } else {
    await page.evaluate(() => window.scrollTo(0, 1000));

    await page.waitForTimeout(3000);
  }
};
