function getStudentSearchData(searchBookForm){
    // Retrieving values from the form fields and assigning them to variables
    StuBookNum = searchBookForm.bookNumS.value;                 // Student's book number
    StuTechTitle = searchBookForm.bookTitleY.value;             // Student's book title
    StuTecHNumberofpages = searchBookForm.PNumber.value;        // Number of pages in the book
    StuTechAuthor = searchBookForm.authorL.value;               // Author of the book
    StuTechGenre = searchBookForm.genreC.value;                 // Genre of the book
    StucanPubdate = searchBookForm.pubDateL.value;              // Publication date of the book
    stuBookTypeF = searchBookForm.bookTypeFS.checked;           // Whether the book is fiction (checkbox)
    stuBookTypeNFS = searchBookForm.bookTypeNFS.checked;        // Whether the book is non-fiction (checkbox)
    stuBookTypeGNS = searchBookForm.bookTypeGNS.checked;        // Whether the book is graphic (checkbox)

    // Mapping checkbox values to human-readable strings if checked
    if (stuBookTypeF) {
        stuBookTypeF = "Fiction";
    }
    if (stuBookTypeGNS) {
        stuBookTypeGNS = "Graphic";
    }
    if (stuBookTypeNFS) {
        stuBookTypeNFS = "Non-Fiction";
    }

    // Storing the values in the browser's local storage using key-value pairs
    localStorage.setItem('stuTecBookNumKey', StuBookNum);         // Student's book number
    localStorage.setItem('stuTecBookNumKey2', StuTechTitle);      // Student's book title
    localStorage.setItem('stuTecBookNumKey3', StuTecHNumberofpages);  // Number of pages
    localStorage.setItem('stuTecBookNumKey4', StuTechAuthor);     // Author of the book
    localStorage.setItem('stuTecBookNumKey5', StuTechGenre);      // Genre of the book
    localStorage.setItem('stuTecBookNumKey6', StucanPubdate);     // Publication date
    localStorage.setItem('stuTecBookFKey', stuBookTypeF);         // Fiction type
    localStorage.setItem('stuTecBookNFKey', stuBookTypeNFS);      // Non-fiction type
    localStorage.setItem('stuTecBookGNKey', stuBookTypeGNS);      // Graphic novel type
}
