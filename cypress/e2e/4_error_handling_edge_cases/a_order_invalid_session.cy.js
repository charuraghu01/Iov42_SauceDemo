import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

describe("Edge Case: Place Order with Invalid Session", () => {

    it("TEST 1.1: Attempt adding to cart after session expires", () => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
        cy.get(inventoryPage.firstProductAddToCart).first().click();
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();

        // Attempt to continue checkout
        cy.url().should("include", '/');
        cy.get(loginPage.errorMessage).should("be.visible").and("contain", "Epic sadface: You can only access '/inventory.html' when you are logged in.");
    });


    it("TEST 1.2: Attempt checkout after session expires", () => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
        cy.addToCart();
        cy.get(globalComponents.shoppingCart).click();
        cy.url().should("include", pageURLs.yourCart);

        cy.get(yourCartPage.checkoutButton).click();
        cy.url().should("include", pageURLs.checkOutStepOne);

        // Simulate session expiration (clear cookies & storage)
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();

        // Attempt to continue checkout
        cy.url().should("include", '/');
        cy.get(loginPage.errorMessage).should("be.visible").and("contain", "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.");
    });

    it("TEST 1.3: Trigger your Cart URL without logging in", () => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(pageURLs.yourCart, { failOnStatusCode: false });
        cy.url().should("include", '/');
        cy.get(loginPage.errorMessage)
            .should("be.visible")
            .and("contain", "Epic sadface: You can only access '/cart.html' when you are logged in.");
    });

    it("TEST 1.4: Trigger Checkout URL without logging in", () => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(pageURLs.checkOutStepOne, { failOnStatusCode: false });
        cy.url().should("include", '/');
        cy.get(loginPage.errorMessage)
            .should("be.visible")
            .and("contain", "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.");
    });

    it("TEST 1.5: Without clearing user session user should stay logged in after reload", () => {
        cy.loginToSauceDemo();
        cy.addToCart();
        cy.get(globalComponents.shoppingCart).click();
        cy.get(yourCartPage.checkoutButton).click();
        cy.reload();
        cy.url().should("include", pageURLs.checkOutStepOne);
    });

});
