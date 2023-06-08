// Declaring Global Variables and using them in the whole program
var libTechBookNum = [];
var bookAvail = [];
var CheckoutBookNumIndex;
var CheckoutBookNum;

// Using onclick and declaring the function in the HTML
function CheckingOut(checkoutForm) {
    // Retrieving the stored values from localStorage and assigning them to variables
    libTechBookNum = JSON.parse(localStorage.getItem("libTecBookNumKey"));
    bookAvail = JSON.parse(localStorage.getItem("BookTechKey"));

    // Checking if libTechBookNum is not null
    if (libTechBookNum != null) {
        // Getting the value entered in an input field with the id "BookNum"
        CheckoutBookNum = document.getElementById("BookNum").value;

        // Finding the index of the entered book number in the libTechBookNum array
        CheckoutBookNumIndex = libTechBookNum.indexOf(CheckoutBookNum);

        // Checking if the CheckoutBookNumIndex is greater than 0
        if (CheckoutBookNumIndex > 0) {
            // Updating the book availability status at the corresponding index in the bookAvail array
            bookAvail[CheckoutBookNumIndex] = false;

            // Storing the updated book availability array back to localStorage
            localStorage.setItem("BookTechKey", JSON.stringify(bookAvail));
        }
    }
}
