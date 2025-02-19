import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';
import { generateCheckoutDetails } from "../../support/utils";

describe("Confirm images and descriptions are displayed correctly.", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
        cy.addToCart();
    });

    /** Covered both valid and invalid Checkout scenarios **/

    it("TEST 3.1:Validation of successful checkout process", () => {
        const user = generateCheckoutDetails();
        cy.get(checkOutPage.firstNameText).type(user.firstName);
        cy.get(checkOutPage.lastNameText).type(user.lastName);
        cy.get(checkOutPage.postalCodeText).type(user.zipCode);
        cy.get(checkOutPage.continueButton).click();
        cy.url().should("include", pageURLs.checkOutStepTwo);
        cy.get(checkOutPage.finishButton).click();

        //Validate successful checkout
        cy.url().should("include", pageURLs.checkOutSuccessful);
        cy.contains("Thank you for your order!").should("be.visible");
    });


    it("TEST 3.2: Verify error message when first name is missing", () => {
        const user = generateCheckoutDetails(true);
        cy.get(checkOutPage.lastNameText).type(user.lastName);
        cy.get(checkOutPage.postalCodeText).type(user.zipCode);
        cy.get(checkOutPage.continueButton).click();
        cy.get(checkOutPage.errorMessage).should("be.visible")
            .and("contain", "Error: First Name is required");
    });


    it("TEST 3.3: Verify error message when last name is missing", () => {
        const user = generateCheckoutDetails(true);
        cy.get(checkOutPage.firstNameText).type(user.firstName);
        cy.get(checkOutPage.postalCodeText).type(user.zipCode);
        cy.get(checkOutPage.continueButton).click();
        cy.get(checkOutPage.errorMessage).should("be.visible")
            .and("contain", "Error: Last Name is required");
    });

    it("TEST 3.4: Verify error message when Zipcode is missing", () => {
        const user = generateCheckoutDetails(true);
        cy.get(checkOutPage.firstNameText).type(user.firstName);
        cy.get(checkOutPage.lastNameText).type(user.lastName);
        cy.get(checkOutPage.continueButton).click();
        cy.get(checkOutPage.errorMessage).should("be.visible")
            .and("contain", "Error: Postal Code is required");
    });

    it("TEST 3.5: Verify error messages when all fields are missing", () => {
        cy.get(checkOutPage.continueButton).click();
        cy.get(checkOutPage.errorMessage).should("be.visible")
            .and("contain", "Error: First Name is required")

    });

    afterEach(() => {
        cy.logoutFromSauceDemo();
    });

});
