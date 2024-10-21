import { Page } from '@playwright/test';
import { getDate } from './getDate';

export const handleSearch = async (page: Page, input: string) => {
  await page.getByPlaceholder('Поиск', { exact: true }).click();
  await page.getByPlaceholder('Поиск', { exact: true }).click();
  await page.getByPlaceholder('Поиск', { exact: true }).fill(input);

  await page.getByPlaceholder('Поиск', { exact: true }).press('Enter');
  await page.getByRole('button', { name: 'Люди' }).click();

  console.log(`${getDate(Date.now())} Searching for ${input}...`);
};
