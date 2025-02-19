export function generateCheckoutDetails() {
    const firstNames = ["Maya", "Arna", "Ara", "Bobby", "Charlie", "David", "Emma", "Frank"];
    const lastNames = ["Raj", "Bala", "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis"];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const zipCode = Math.floor(10000 + Math.random() * 90000).toString();
    return { firstName, lastName, zipCode };
}