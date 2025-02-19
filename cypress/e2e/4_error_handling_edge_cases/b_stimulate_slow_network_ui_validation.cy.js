import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

//NOTE: There is no BE calls made in the application, hence triggered delay and verified in UI.   

describe("Simulate Slow Network and Validate UI Handling", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
    });

    it("TEST 1.1: Simulate slow UI response and verify items should load as expected", () => {
        cy.loginToSauceDemo();
        cy.wait(10000);
        cy.get(inventoryPage.allInventoryItemsList, { timeout: 8000 }).should("be.visible");
        cy.get(inventoryPage.inventoryItem).should("have.length.greaterThan", 0);
    });

    afterEach(() => {
        cy.logoutFromSauceDemo();
    });
});

