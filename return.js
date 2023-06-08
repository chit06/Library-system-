var libTechBookNum=[]; 
var bookAvail=[];
var returnBookNumIndex;
var returnBookNum;
function returnBk(returnoutForm){
    // Retrieving the stored values from localStorage and assigning them to variables
    libTechBookNum = JSON.parse(localStorage.getItem("libTecBookNumKey"));
    bookAvail = JSON.parse(localStorage.getItem("BookTechKey"));

    // Checking if libTechBookNum is not null
    if (libTechBookNum != null) {
        // Getting the value entered in an input field with the id "bookNum"
        returnBookNum = document.getElementById("bookNum").value;

        // Finding the index of the entered book number in the libTechBookNum array
        returnBookNumIndex = libTechBookNum.indexOf(returnBookNum);

        // Updating the book availability status at the corresponding index in the bookAvail array
        bookAvail[returnBookNumIndex] = true;

        // Storing the updated book availability array back to localStorage
        localStorage.setItem("BookTechKey", JSON.stringify(bookAvail));
    }
}