import { getDate } from '.';
import { Page } from '@playwright/test';

export const handleInvite = async (page: Page) => {
  const memberInvitation = await page
    .locator('button:has-text("Установить контакт")')
    .first();

  if (!memberInvitation) {
    return { isSuccess: true, isEmptyPage: true };
  }
  await page.waitForTimeout(2000);

  const ariaLabel = await memberInvitation.getAttribute('aria-label');

  const nameMatch =
    ariaLabel &&
    ariaLabel.match(/Пригласить участника (.+?) установить контакт/);

  const isName = nameMatch && nameMatch[1];

  await memberInvitation.click();

  const isNotesModal = await page
    .getByRole('button', { name: 'Отправить без заметки' })
    .count();

  if (isNotesModal) {
    await page.getByRole('button', { name: 'Отправить без заметки' }).click();
  }

  // const isModal = await page
  //   .getByRole('heading', {
  //     name: 'Вы расширяете свою сеть контактов!',
  //   })
  //   .count();

  await page.waitForTimeout(2000);

  const isModal = await page
    .locator('h2:has-text("Вы расширяете свою сеть контактов")')
    .count();

  // const isModal = await page
  //   .getByRole('heading', {
  //     name: 'Вы расширяете свою сеть контактов!',
  //   })
  //   .count();

  if (isModal) {
    await page.getByRole('button', { name: 'ОК' }).click();
  }

  const isLimitsWarning = await page
    .locator(
      'h2:has-text("Вы почти достигли еженедельного лимита на отправку приглашений")'
    )
    .count();

  // const isWarning = await page
  //   .getByRole('heading', {
  //     name: 'Вы почти достигли еженедельного лимита на отправку приглашений',
  //   })
  //   .count();

  if (isLimitsWarning) {
    await page.getByRole('button', { name: 'ОК' }).click();
  }

  const isWeeklyLimitsWarning = await page
    .locator(
      'h2:has-text("Вы почти достигли максимально допустимого числа приглашений в неделю")'
    )
    .count();

  // const isWarning2 = await page
  //   .getByRole('heading', {
  //     name: 'Вы почти достигли максимально допустимого числа приглашений в неделю',
  //   })
  //   .count();

  if (isWeeklyLimitsWarning) {
    await page.getByRole('button', { name: 'ОК' }).click();
  }

  // const isRejection = await page
  //   .getByRole('heading', {
  //     name: 'Достигнуто максимально допустимое число приглашений в неделю',
  //   })
  //   .count();

  const isRejection = await page
    .locator(
      'h2:has-text("Достигнуто максимально допустимое число приглашений в неделю")'
    )
    .count();

  if (isRejection) {
    console.log(
      `${getDate(
        Date.now()
      )} The maximum number of invitations has been reached...`
    );

    await page.waitForTimeout(2000);
    return { isSuccess: false, isEmptyPage: false };
  }

  if (isName) {
    const name = nameMatch[1];

    console.log(`${getDate(Date.now())} ${name} successfully invited...`);
  } else {
    console.log(`${getDate(Date.now())} New member successfully invited...`);
  }

  await page.waitForTimeout(2000);

  return { isSuccess: true, isEmptyPage: false };
};
