import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

describe("Confirm images and descriptions are displayed correctly.", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
    });

    it("Test 2.1: Verification of only few items removals and count validation in UI", () => {
        let selectedProducts = [];
        cy.get(inventoryPage.allInventoryItemsList).each(($el, index) => {
            if (index < 3) {
                const productName = $el.find(inventoryPage.inventoryItem).text().trim();
                selectedProducts.push(productName);
                cy.wrap($el).find(inventoryPage.addToCart).click();
                cy.wrap($el).find(inventoryPage.removeFromCart).should("have.text", "Remove");
            }
        });
        // cart count validation
        cy.get(globalComponents.shoppingCartBadge)
            .should("be.visible")
            .and("have.text", "3");

        // Navigate to your cart page and check count
        cy.get(globalComponents.shoppingCart).click();
        cy.url().should("include", pageURLs.yourCart);
        cy.get(inventoryPage.allInventoryItemsList)
            .should("have.length", 3);
        cy.get(inventoryPage.inventoryItem).each(($el) => {
            const cartProductName = $el.text().trim();
            expect(selectedProducts).to.include(cartProductName);
        });

        //  Remove only first 2 products
        cy.get(inventoryPage.allInventoryItemsList).each(($el, index) => {
            if (index < 2) {
                cy.wrap($el).find(yourCartPage.removeItemFromCart).click();
            }
        });

        //  Cart count validation
        cy.get(globalComponents.shoppingCartBadge).then(($badge) => {
            if ($badge.length > 0) {
                cy.wrap($badge).should("have.text", "1");
            } else {
                cy.log("Cart is empty, badge is not visible");
            }
        });

        // Ensure only 1 product remains in the cart
        cy.get(inventoryPage.allInventoryItemsList).should("have.length", 1);
    });


    it("Test 2.2: After empty the cart and verify no products remain", () => {
        // Add first 2 products
        cy.get(inventoryPage.allInventoryItemsList).each(($el, index) => {
            if (index < 2) {
                cy.wrap($el).find(inventoryPage.addToCart).click();
            }
        });
        cy.get(globalComponents.shoppingCart).click();
        cy.url().should("include", "/cart.html");

        // Remove all products
        cy.get(inventoryPage.allInventoryItemsList).each(($el) => {
            cy.wrap($el).find(yourCartPage.removeItemFromCart).click();
        });

        // Validate cart is empty
        cy.get(globalComponents.shoppingCartBadge).should("not.exist");
        cy.get(inventoryPage.inventoryItem).should("not.exist");
    });
});



