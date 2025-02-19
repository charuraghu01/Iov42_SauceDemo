export const loginPage = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]',
    loginLogo: '[class="login_logo"]',
    closeErrorMessage: '[data-test="error-button"]',
    loginFormContainer: '[class="login-box"]'
};

export const inventoryPage = {
    allInventoryItemsList: '[data-test="inventory-item"]',
    inventoryItem: '[data-test="inventory-item-name"]',
    inventoryList: '[data-test="inventory-list"]',
    sortContainer: '[data-test="product-sort-container"]',
    firstProductAddToCart: '.inventory_item button',
    inventoryItemPrice: '[data-test="inventory-item-price"]',
    addToCart: '[class="btn btn_primary btn_small btn_inventory "]',
    removeFromCart: '[class="btn btn_secondary btn_small btn_inventory "]',
    inventoryImages: '.inventory_item_img',
    inventoryEachImage: '.inventory_item_img img',
    productDescriptionHp: '[data-test="inventory-item-desc"]',

};

export const yourCartPage = {
    continueShopping: '[data-test="continue-shopping"]',
    checkoutButton: '[data-test="checkout"]',
    totalCartItems: '[data-test="cart-list"]',
    removeItemFromCart: '[class="btn btn_secondary btn_small cart_button"]',



}

export const checkOutPage = {
    cancelButton: '[data-test="cancel"]',
    firstNameText: '[data-test="firstName"]',
    lastNameText: '[data-test="lastName"]',
    postalCodeText: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    errorMessage: '[data-test="error"]',
    closeErrorMessageButton: '[data-test="error-button"]',
    thankYouText: '[data-test="complete-header"]',
    dispatchText: '[data-test="complete-text"]',
    backHomeButton: '[data-test="back-to-products"]',
    finishButton: '[data-test="finish"]',

}

export const globalComponents = {
    mainNavIcon: '#react-burger-menu-btn',
    allItemsLink: '[data-test="inventory-sidebar-link"]',
    aboutLink: '[data-test="about-sidebar-link"]',
    resetAppState: '[data-test="reset-sidebar-link"]',
    logoutMenu: '#logout_sidebar_link',
    closeMainNav: '[data-test="close-menu"]',
    shoppingCart: '[data-test="shopping-cart-link"]',
    backToProductButton: '[data-test="back-to-products"]',
    shoppingCartBadge: '[data-test="shopping-cart-badge"]',



}

export const pageURLs = {
    inventoryHomePage: '/inventory.html',
    yourCart: '/cart.html',
    inventoryDescription: '/inventory-item.html',
    checkOutStepOne: '/checkout-step-one.html',
    checkOutStepTwo: '/checkout-step-two.html',
    checkOutSuccessful: 'checkout-complete.html',

}


