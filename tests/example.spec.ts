import { test } from '@playwright/test';

import { inviteMembersFlow } from '../utils/inviteMembersFlow';

// npx playwright test --debug

test('test a website creating flow', async ({ page }) => {
  await inviteMembersFlow(
    {
      page,
      localStorageData: {},
      origin: 'https://www.linkedin.com/',
      href: 'https://www.linkedin.com/',
    },
    'recruiter'
  );
});
