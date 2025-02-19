
import { loginPage, inventoryPage, pageURLs, yourCartPage, globalComponents, checkOutPage } from '../../support/constant-specifications/product-constants';

describe("Simulate Multiple Users Logging In & Adding Items", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToSauceDemo();
    });

    it("TEST 2.1: Handle multiple clicks of add to cart and remove button (100 Items)", () => {
        Cypress._.times(100, () => {
            cy.get(inventoryPage.allInventoryItemsList).first().within(() => {
                cy.get("button").then(($btn) => {
                    if ($btn.text().includes("Add to cart")) {
                        cy.wrap($btn).should("be.visible").click();
                        cy.log("Clicked Add to Cart");
                    } else if ($btn.text().includes("Remove")) {
                        cy.wrap($btn).should("be.visible").click();
                        cy.log("Clicked Remove");
                    } else {
                        cy.log("No valid button found.");
                    }
                });
            });

        });


    });
});