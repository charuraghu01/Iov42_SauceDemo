import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

describe("Confirm images and descriptions are displayed correctly.", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
    });

    // Test description:  Confirm images and descriptions are displayed correctly 

    it("TEST 3.1: Verify in HP if product images are displayed and loaded properly", () => {
        cy.get(".inventory_item_img img").each(($img) => {
            cy.wrap($img)
                .should("be.visible")
                .and(($el) => {
                    expect($el[0].naturalWidth).to.be.greaterThan(100);
                });
        });

    });

    it("TEST 3.2: Verify if product descriptions are present and not empty", () => {
        cy.get(inventoryPage.productDescriptionHp)
            .should("have.length", 6)
            .each(($desc) => {
                cy.wrap($desc)
                    .should("be.visible")
                    .and("not.be.empty");
            });
    });


    it("TEST 3.3: Verify if all product images have a valid source URL", () => {
        cy.get(inventoryPage.inventoryEachImage).each(($img) => {
            cy.wrap($img)
                .invoke("attr", "src")
                .should("include", "/static/media");
        });
    });


});



