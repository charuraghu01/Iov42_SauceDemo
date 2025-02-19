import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

describe("Session Handling - User Should Stay Logged In", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');
        cy.get(loginPage.usernameInput).type(Cypress.env("USERNAME"));
        cy.get(loginPage.passwordInput).type(Cypress.env("PASSWORD"));
        cy.get(loginPage.loginButton).click();
        cy.url().should("include", pageURLs.inventoryHomePage);
    });

    /** Test desscription: Ensure User Remains Logged In When Navigating **/
    it("TEST 4.1: User should be logged in when navigating to cart page", () => {
        cy.get(globalComponents.shoppingCart).click();
        cy.url().should("include", pageURLs.yourCart);
        cy.go("back");
        cy.url().should("include", pageURLs.inventoryHomePage);
    });

    it("TEST 4.2: User should be logged in when navigating to each items in HP and coming back", () => {


        cy.get(inventoryPage.allInventoryItemsList).then(($products) => {
            for (let i = 0; i < $products.length; i++) {
                cy.get(inventoryPage.allInventoryItemsList).eq(i).find(inventoryPage.inventoryItem).should("be.visible").click();
                cy.url().should("include", pageURLs.inventoryDescription);
                cy.go("back");
                cy.url().should("include", pageURLs.inventoryHomePage);
                cy.get((inventoryPage.allInventoryItemsList), { timeout: 5000 }).should("be.visible");
            }
        });
    });
    it("TEST 4.3: User should remain logged in even after multiple page navigations", () => {
        cy.get(inventoryPage.allInventoryItemsList).first().find(inventoryPage.inventoryItem).click();
        cy.url().should("include", pageURLs.inventoryDescription);
        cy.get(globalComponents.shoppingCart).click();
        cy.url().should("include", pageURLs.yourCart);
        cy.get(yourCartPage.checkoutButton).click();
        cy.get(checkOutPage.cancelButton).click();
        cy.go("back").go("back");
        cy.url().should("include", pageURLs.yourCart);
        cy.get(globalComponents.shoppingCart).should("be.visible");
    });

    it("TEST 4.4: User should stayed logged in after reset app state", () => {

        cy.get(globalComponents.mainNavIcon).click();
        cy.get(globalComponents.resetAppState).click();
        cy.get(globalComponents.closeMainNav).click({ force: true });
        cy.url().should("include", pageURLs.inventoryHomePage);
        cy.get(globalComponents.shoppingCart).should("be.visible");

    });


    /**  Test description:  Ensure Session Persists After Refresh **/
    it("TEST 4.5: User should remain logged in after hard refreshing the page", () => {
        cy.reload();
        cy.url().should("include", "/inventory.html");
        cy.get(globalComponents.shoppingCart).should("be.visible");
    });

    /** Test description:  Validate Session Storage and Cookies Persist Login State **/
    it("TEST 4.6:Verify if user cookies should persist after login", () => {
        cy.getCookies()
            .should('have.length', 1)
            .then((cookies) => {
                expect(cookies[0]).to.have.property('name', 'session-username')
            })

    });

    /** Test description:  Validate Session Storage and Cookies does not Persist Logout **/
    it("TEST 4.7: Verify if user related cookies should not after logout", () => {
        cy.get(globalComponents.mainNavIcon).click();
        cy.get(globalComponents.logoutMenu).click();
        cy.getCookies().then((cookies) => {
            cy.log("🍪 All Cookies:", cookies);
            expect(cookies.some(cookie => cookie.name === "session-username")).to.be.false;
        });
    });



    /** Test description:  Ensure User Doesn't Need to Re-login on Direct Page Load with preserving session **/
    it("TEST 4.8: Verify if user should not redirect to login page when accessing protected pages", () => {
        cy.visit("https://www.saucedemo.com/inventory.html", { failOnStatusCode: false });
        cy.url().should("include", "/inventory.html");
    });

});










