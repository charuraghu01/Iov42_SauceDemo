
import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

describe("Validate Sorting Feature on SauceDemo", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
    });

    // Test description: Written test cases for each sorting items.  

    it("TEST 2.1:  Verify if user can sort products by name (A to Z)", () => {
        let uiNames = [];
        cy.get(inventoryPage.sortContainer)
            .should("be.visible")
            .select("az")
            .percySnapshot('Capture sorting selection');
        cy.get(inventoryPage.inventoryItem).each(($el) => {
            uiNames.push($el.text().trim());
        });
        cy.then(() => {
            const sortedNames = [...uiNames].sort();
            expect(uiNames).to.deep.equal(sortedNames);
        });
    });


    it("TEST 2.2: Verify if user can sort products by name (Z to A)", () => {
        let uiNames = [];
        cy.get(inventoryPage.sortContainer)
            .should("be.visible")
            .select("za");
        cy.get(inventoryPage.inventoryItem).each(($el) => {
            uiNames.push($el.text().trim());
            cy.log(uiNames);
        });
        cy.log(uiNames);
        cy.then(() => {
            const sortedNames = [...uiNames].sort().reverse();
            expect(uiNames).to.deep.equal(sortedNames);
            cy.log(uiNames);
        });
        cy.log(uiNames)
    });


    it("TEST 2.3: Verify if user can sort products by price (Low to High)", () => {
        let uiPrices = [];
        cy.get(inventoryPage.sortContainer)
            .should("be.visible")
            .select("lohi");
        cy.get(inventoryPage.inventoryItemPrice).each(($el) => {
            uiPrices.push(parseFloat($el.text().replace("$", "")));
        });
        cy.then(() => {
            const sortedPrices = [...uiPrices].sort((a, b) => a - b);
            expect(uiPrices).to.deep.equal(sortedPrices);
        });
    });


    it("TEST 2.4: Verify if user can sort products by price (High to Low)", () => {
        let uiPrices = [];
        cy.get(inventoryPage.sortContainer)
            .should("be.visible")
            .select("hilo");

        // Extract sorted product prices
        cy.get(inventoryPage.inventoryItemPrice).each(($el) => {
            uiPrices.push(parseFloat($el.text().replace("$", "")));
        });

        cy.then(() => {
            const sortedPrices = [...uiPrices].sort((a, b) => b - a);
            expect(uiPrices).to.deep.equal(sortedPrices);
        });
    });
});
