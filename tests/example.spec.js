const { test, expect } = require('@playwright/test');


test('Register form test',  async ({ page }) => {
  let username = 'user';
  let password = 'password';
    new RegisterPage(page)
      .clickHeaderLoginLink()
      .fillUsername(username)
      .fillPassword(password)
      .clickLoginButton()
      .assertWelcomeMessage();
});
