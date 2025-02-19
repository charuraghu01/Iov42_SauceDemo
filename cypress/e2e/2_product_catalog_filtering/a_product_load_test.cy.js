import { inventoryPage, pageURLs } from '../../support/constant-specifications/product-constants';

describe("Ensure all products load correctly on SauceDemo", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
    });

    /** Test description: Validate inventory homepage and items **/
    it("TEST 1.1: Verify if homepage should load all products with images, names, prices, and buttons", () => {
        cy.get(inventoryPage.allInventoryItemsList).should("have.length", 6);
        cy.get(inventoryPage.allInventoryItemsList).each(($el) => {
            cy.wrap($el).find(inventoryPage.inventoryItem).should("be.visible").and("not.be.empty").percySnapshot('Capture Inventory Item');
            cy.wrap($el).find(inventoryPage.inventoryItemPrice).should("be.visible").and("contain", "$").percySnapshot('Capture Inventory Price');
            cy.wrap($el).find(inventoryPage.addToCart).should("be.visible").and("be.enabled");
            cy.get(".inventory_item_img img").each(($img) => {
                cy.wrap($img)
                    .should("be.visible")
                    .and(($el) => {
                        expect($el[0].naturalWidth).to.be.greaterThan(100);
                    });
            });

        });
    });

    //Test description:  I stored product name in fixture file and verified if it is existed. 

    it("TEST 1.2: Verify if user should log, compare, and ensure product names are unique", () => {
        cy.fixture("product_catalog").then((data) => {
            let uiProductNames = [];
            cy.get(inventoryPage.inventoryItem).each(($el) => {
                uiProductNames.push($el.text().trim());
            });
            cy.then(() => {
                for (let i = 0; i < data.expectedProductNames.length; i++) {
                    expect(uiProductNames).to.include(data.expectedProductNames[i]);
                }
            });
        });
    });

});




