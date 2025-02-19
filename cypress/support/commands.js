
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { loginPage, inventoryPage, globalComponents, pageURLs, yourCartPage } from "./constant-specifications/product-constants";

Cypress.Commands.add("loginToSauceDemo", () => {
    const username = Cypress.env("USERNAME");
    const password = Cypress.env("PASSWORD");
    cy.visit("/");
    cy.get(loginPage.usernameInput).type(username, { log: false }, { force: true });
    cy.get(loginPage.passwordInput).type(password, { log: false }), { force: true };
    cy.get(loginPage.loginButton).click();
    cy.url().should("include", pageURLs.inventoryHomePage);
});

Cypress.Commands.add("logoutFromSauceDemo", () => {
    cy.get(globalComponents.mainNavIcon).click();
    cy.get(globalComponents.logoutMenu).click();
    cy.url().should("include", "/");
})

Cypress.Commands.add("addToCart", () => {
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

    cy.get(yourCartPage.checkoutButton).click();


})
