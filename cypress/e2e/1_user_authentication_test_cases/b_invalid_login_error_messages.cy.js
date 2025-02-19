import { loginPage, inventoryPage } from '../../support/constant-specifications/product-constants';


describe('User Authentication test - Test login failure (invalid username/password).', () => {

    beforeEach(() => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');
    })

    /** Test description:  For Test login failure scenario, I have added 3 tests with 9 test data from fixture files and validated error messages for each invalid logins.  **/

    it("TEST 2.1: Verify Test login failure with invalid or empty username/password.", () => {
        cy.fixture("invalid_users").then((data) => {
            data.invalidUsers.forEach((user) => {
                cy.get(loginPage.usernameInput).clear().should("not.be.disabled").type(user.username);
                cy.get(loginPage.passwordInput).clear().should("not.be.disabled").clear().type(user.password);
                cy.get(loginPage.loginButton).click();
                cy.get(loginPage.errorMessage).should("be.visible").and("contain", user.expectedMessage);
                cy.get(loginPage.closeErrorMessage).click();
            });
        })
    });
    it("TEST 2.2: Verify if Test login failure with locked out user.", () => {
        cy.fixture("invalid_users").then((data) => {
            data.lockedUser.forEach((user) => {
                cy.get(loginPage.usernameInput).clear().should("not.be.disabled").type(user.username);
                cy.get(loginPage.passwordInput).clear().should("not.be.disabled").type(Cypress.env("PASSWORD"));
                cy.get(loginPage.loginButton).click();
                cy.get(loginPage.errorMessage).should("be.visible").and("contain", user.expectedMessage);
                cy.get(loginPage.closeErrorMessage).click();
            });
        })
    });
    it("TEST 2.3: Verify if Test login failure with blank username/password.", () => {
        cy.fixture("invalid_users").then((data) => {
            data.blankInputs.forEach((user) => {
                if (user.username === "") {
                    cy.get(loginPage.usernameInput).clear();
                } else {
                    cy.get(loginPage.usernameInput).clear().type(user.username);
                }

                if (user.password === "") {
                    cy.get(loginPage.passwordInput).clear();
                } else {
                    cy.get(loginPage.passwordInput).clear().type(user.password);
                }

                cy.get(loginPage.loginButton).click();
                cy.get(loginPage.errorMessage).should("be.visible").and("contain", user.expectedMessage);
                cy.get(loginPage.closeErrorMessage).click();
            });
        });
    });


});
