import { loginPage } from '../../support/constant-specifications/product-constants';


describe('User Authentication test - Verify UI elements like error messages, button states, and URL redirects..', () => {

    beforeEach(() => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');
    })

    /** Test description:  Verify the Login Page Loads Correctly **/
    it("TEST 3.1: Verify if login page should display all login elements properly", () => {
        cy.get(loginPage.usernameInput).should("be.visible");
        cy.get(loginPage.passwordInput).should("be.visible");
        cy.get(loginPage.passwordInput).should("be.visible").and("be.enabled");
        cy.get(loginPage.loginLogo).should("be.visible").and("have.text", "Swag Labs");
        cy.get(loginPage.loginFormContainer).should("be.visible");
    });

    /** Test description: Verify Placeholder Texts in Inputs **/
    it("TEST 3.2: Verify if login page should display correct placeholder texts", () => {
        cy.get(loginPage.usernameInput).should("have.attr", "placeholder", "Username");
        cy.get(loginPage.passwordInput).should("have.attr", "placeholder", "Password");
    });

    /** Test description: Verify Input Fields Accept Text and Are Not Disabled **/
    it("TEST 3.3: Verify if login page should allow typing into username and password fields", () => {
        cy.get(loginPage.usernameInput).should("not.be.disabled").type("test_user");
        cy.get(loginPage.passwordInput).should("not.be.disabled").type("test_password");
    });

    /** Test description: Verify Password Field Type (Should be Password) **/
    it("TEST 3.4: Verify if login page should mask password input", () => {
        cy.get(loginPage.passwordInput).should("have.attr", "type", "password");
    });

    /** Test description: Verify Login Button Has Correct Styling and enabled **/
    it("TEST 3.5: Verify if login page should have correct button styles", () => {
        cy.get(loginPage.loginButton).then(($btn) => {
            cy.log("Actual Background Color:", $btn.css("background-color"));
            cy.log("Actual Border Radius:", $btn.css("border-radius"));
            cy.log("font-family:", $btn.css("font-family"));
        })
        cy.get(loginPage.loginButton).should("have.css", "background-color", "rgb(61, 220, 145)")
            .and("have.css", "border-radius", "4px").should("be.enabled");
    });

    /** Test description:  Verify Login Error Message UI colour **/
    it("TEST 3.6: Verify if login page should show error messages with correct styling", () => {
        cy.get(loginPage.usernameInput).type("invalid_user");
        cy.get(loginPage.passwordInput).type("wrong_password");
        cy.get(loginPage.loginButton).click();
        cy.get(loginPage.errorMessage)
            .should("be.visible")
            .and("have.css", "color", "rgb(255, 255, 255)");
    });

    /** Test description: Verify Error Message Can Be Dismissed by cross Button**/
    it("TEST 3.7: Verify if error message should clear when closed", () => {
        cy.get(loginPage.usernameInput).type("invalid_user");
        cy.get(loginPage.passwordInput).type("wrong_password");
        cy.get(loginPage.loginButton).click();
        cy.get(loginPage.errorMessage).should("be.visible");
        cy.get(loginPage.closeErrorMessage).click().should("not.exist");

    });

    /** Note: Few URL validations and error message validations already added in successful and unsuccessful login test**/

});

