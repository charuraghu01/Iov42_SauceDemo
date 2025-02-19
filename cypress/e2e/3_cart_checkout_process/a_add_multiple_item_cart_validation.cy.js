import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

describe("Confirm images and descriptions are displayed correctly.", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
    });


    it("TEST 1.1 : Verify if user can add all products to cart & validation in UI", () => {
        let selectedProducts = [];
        cy.get(inventoryPage.allInventoryItemsList).each(($el, index) => {
            if (index < 6) {
                const productName = $el.find(inventoryPage.inventoryItem).text().trim();
                selectedProducts.push(productName);
                cy.wrap($el).find(inventoryPage.addToCart).click();
                cy.wrap($el).find(inventoryPage.removeFromCart).should("have.text", "Remove");
            }
        });
        // validation in cart

        cy.get(globalComponents.shoppingCartBadge)
            .should("be.visible")
            .and("have.text", "6");


        cy.get(globalComponents.shoppingCart).click();
        cy.url().should("include", pageURLs.yourCart);

        //  Validate if all products are in the cart

        cy.get(inventoryPage.inventoryItem)
            .should("have.length", 6);
        cy.get(inventoryPage.inventoryItem).each(($el) => {
            const cartProductName = $el.text().trim();
            expect(selectedProducts).to.include(cartProductName);
        });
    });

    it("TEST 1.2: Verify if user can add only few products to cart & validation in UI", () => {
        let selectedProducts = [];
        cy.get(inventoryPage.allInventoryItemsList).each(($el, index) => {
            if (index < 3) {
                const productName = $el.find(inventoryPage.inventoryItem).text().trim();
                selectedProducts.push(productName);
                cy.wrap($el).find(inventoryPage.addToCart).click();
                cy.wrap($el).find(inventoryPage.removeFromCart).should("have.text", "Remove");
            }
        });
        cy.get(globalComponents.shoppingCartBadge)
            .should("be.visible")
            .and("have.text", "3");


        cy.get(globalComponents.shoppingCart).click();
        cy.url().should("include", pageURLs.yourCart);
        cy.get(inventoryPage.inventoryItem)
            .should("have.length", 3);
        cy.get(inventoryPage.inventoryItem).each(($el) => {
            const cartProductName = $el.text().trim();
            expect(selectedProducts).to.include(cartProductName);
        });
    });

});




