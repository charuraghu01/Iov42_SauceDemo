import { loginPage, inventoryPage, pageURLs, globalComponents } from '../../support/constant-specifications/product-constants';


describe('User Authentication test- Test successful login with valid credentials.', () => {

    beforeEach(() => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');
    })
    /** Test description: I stored all valid usernames in fixtures and validated all users via 'forEach' loop. I stored password in .env file and added to .gitignore.
    validated 5 valid users login  **/
    it('TEST 1: Verify if test successful login with valid credentials.', () => {
        cy.fixture("valid_users").then((data) => {
            data.users.forEach((user) => {
                cy.get(loginPage.usernameInput).clear().type(user.username);
                cy.get(loginPage.passwordInput).clear().type(Cypress.env("PASSWORD"));
                cy.get(loginPage.loginButton).should('be.visible').click();
                cy.url().should("include", pageURLs.inventoryHomePage);
                cy.get(globalComponents.mainNavIcon).click();
                cy.get(globalComponents.logoutMenu).click();
                cy.url().should("include", "/");
            })
            cy.visit('/');
        });
    });

});