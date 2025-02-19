import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

describe("Confirm images and descriptions are displayed correctly.", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
    });


    // Test description:  I invoked fake DOM status and tested below negative cases. 

    it("TEST 4.1: Check how it handle no products displayed on the frontend", () => {
        cy.get(inventoryPage.inventoryList).invoke("empty");
        cy.get(inventoryPage.inventoryItem).should("not.exist");
    });

    it("TEST 4.2: Check how it handle with broken image when product images fail to load", () => {
        cy.get(inventoryPage.inventoryEachImage).each(($img) => {
            cy.wrap($img).invoke("attr", "src", "broken-image.png");
        });
        cy.get(inventoryPage.inventoryEachImage).each(($img) => {
            cy.wrap($img)
                .invoke("attr", "src")
                .should("include", "broken-image.png");
        });
    });

    it("TEST 4.3: Check how it handle missing product names on the frontend", () => {
        cy.get(inventoryPage.inventoryItem).invoke("text", "");
        cy.get(inventoryPage.inventoryItem).each(($name) => {
            cy.wrap($name).should("have.text", "");
        });
    });
})
