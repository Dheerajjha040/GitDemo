const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        // Selectors
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = 'button[type="submit"]';
        this.errorMessage = '.error-message';
        this.successMessage = '.success-message';
    }

    /**
     * Navigate to the login page
     */
    async navigateToLoginPage() {
        await this.page.goto('/login');
    }

    /**
     * Enter username in the username field
     * @param {string} username - The username to enter
     */
    async enterUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    /**
     * Enter password in the password field
     * @param {string} password - The password to enter
     */
    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    /**
     * Click the login button
     */
    async clickLoginButton() {
        await this.page.click(this.loginBu  tton);
    }

    /**
     * Perform login with username and password
     * @param {string} username - The username to enter
     * @param {string} password - The password to enter
     */
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    /**
     * Check if error message is visible
     * @returns {boolean} - True if error message is visible
     */
    async isErrorMessageVisible() {
        return await this.page.isVisible(this.errorMessage);
    }

    /**
     * Get the error message text
     * @returns {string} - The error message text
     */
    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }

    /**
     * Check if success message is visible
     * @returns {boolean} - True if success message is visible
     */
    async isSuccessMessageVisible() {
        return await this.page.isVisible(this.successMessage);
    }

    /**
     * Get the success message text
     * @returns {string} - The success message text
     */
    async getSuccessMessage() {
        return await this.page.textContent(this.successMessage);
    }

    /**
     * Verify that the user is on the login page
     */
    async verifyLoginPage() {
        await expect(this.page).toHaveURL(/.*login/);
        await expect(this.page.locator(this.usernameInput)).toBeVisible();
        await expect(this.page.locator(this.passwordInput)).toBeVisible();
        await expect(this.page.locator(this.loginButton)).toBeVisible();
    }
}

module.exports = LoginPage;
