
// Declaration of variables
var bookNumStu;
var bookTitleStu;
var bookAuthorStu;
var bookFstu;
var bookNFstu;
var bookGNSstu;
var bookPubDatestu;
var bookGenreStu;
var bookNumPagestu;
var bookTitleLib = [];
var bookAuthorLib = [];
var bookNumLib = [];
var bookTypeLib = [];
var bookPubDateLib = [];
var bookGenreLib = [];
var bookDateId = [];
var bookPagesLib = [];
var bookImglib=[];
var counter = bookNumLib.length ;

// Function to display search results
function displayFinalResults() {
  // Retrieve values from local storage
  bookTitleStu = localStorage.getItem("stuTecBookNumKey2");
  bookAuthorStu = localStorage.getItem("stuTecBookNumKey4");
  bookFstu = localStorage.getItem("stuTecBookFKey");
  bookNFstu = localStorage.getItem("stuTecBookNFKey");
  bookGNSstu = localStorage.getItem("stuTecBookGNKey");
  bookPubDatestu = localStorage.getItem("stuTecBookNumKey6");
  bookGenreStu = localStorage.getItem("stuTecBookNumKey5");
  bookNumPagestu = localStorage.getItem("stuTecBookNumKey3");
  bookTitleLib = JSON.parse(localStorage.getItem("libTecBookNumKey5"));
  bookAuthorLib = JSON.parse(localStorage.getItem("libTecBookNumKey3"));
  bookNumLib = JSON.parse(localStorage.getItem("libTecBookNumKey"));
  bookTypeLib = JSON.parse(localStorage.getItem("libTecBookNumKey6"));
  bookPubDateLib = JSON.parse(localStorage.getItem("libTecBookNumKey2"));
  bookGenreLib = JSON.parse(localStorage.getItem("libTecBookNumKey4"));
  bookDateId = JSON.parse(localStorage.getItem("libTecBookNumKey2"));
  bookPagesLib = JSON.parse(localStorage.getItem("libTechBookNumKey8"));
  bookImglib =JSON.parse(localStorage.getItem("libTechBookNumKey9")); 

  






  

  
        var SearchResultsHolder='';
          
          //var resultString = "Book Number :" + bookNumLib + "<br>" + "Book Title :" + bookTitleLib + "<br>" + "book author" + bookAuthorLib + bookPagesLib + "<br>"+"Number Of Pages:"+bookGenreLib + "<br>"+"Genre of the Book:"+bookPubDateLib+"<br>"+"Publication Date";
          document.getElementById("bookResults").innerHTML = resultString;          
        for(var i = 0 ;i <bookNumLib.length ;i++){
         var resultString=
         SearchResultsHolder += "Book author :"+ bookAuthorLib[i] + "<br>";
         SearchResultsHolder += "Book Genre :"+bookGenreLib[i] + "<br>";
         SearchResultsHolder += "Book pages:"+bookPagesLib[i] + "<br>";
         SearchResultsHolder += "Book Pub Date :"+ bookPubDateLib[i] + "<br>";
         SearchResultsHolder += "Book Title :"+bookTitleLib[i] + "<br>";
         SearchResultsHolder += "Book Number :"+ bookNumLib[i] + "<br>";
         SearchResultsHolder +=  "Book Type ="+bookTypeLib[i]+ "<br>" + "<br>"
            document.getElementById("bookResults").innerHTML = resultString;

        
          if (!bookNumStu|| !bookTitleStu|| bookAuthorStu||bookGenreStu||bookNumPagestu||bookPubDatestu||bookFstu||bookNFstu||bookGNSstu){
           //alert("1")
            if (bookNumLib[i]==bookNumStu||bookAuthorLib[i]==bookAuthorStu||bookGenreStu== bookGenreLib[i]||bookPubDateLib[i]==bookPubDatestu||bookNumPagestu==bookPagesLib[i]||bookTitleStu==bookTitleLib[i]||
                 bookTypeLib[i]==bookFstu||bookTypeLib[i]==bookNFstu||bookTypeLib[i]==bookGNSstu){
                  SearchResultsHolder += "Book author :"+ bookAuthorLib[i] + "<br>";
                  SearchResultsHolder += "Book Genre :"+bookGenreLib[i] + "<br>";
                  SearchResultsHolder += "Book pages:"+bookPagesLib[i] + "<br>";
                  SearchResultsHolder += "Book Pub Date :"+ bookPubDateLib[i] + "<br>";
                  SearchResultsHolder += "Book Title :"+bookTitleLib[i] + "<br>";
                  SearchResultsHolder += "Book Number :"+ bookNumLib[i] + "<br>";
                  SearchResultsHolder +=  "Book Type ="+bookTypeLib[i]+ "<br>"

//alert("2")
                      document.getElementById("bookResults").innerHTML = resultString;
                 }
         else if (bookNumLib[i]==bookNumStu||bookTitleLib[i]===bookTitleStu||bookAuthorStu===bookAuthorLib[i]||bookPagesLib[i]===bookNumLib||bookGenreStu===bookGenreLib[i]||bookPubDateLib[i]===bookPubDatestu||bookTypeLib[i]===bookFstu){
           //alert("3")
           SearchResultsHolder += "Book author :"+ bookAuthorLib[i] + "<br>";
           SearchResultsHolder += "Book Genre :"+bookGenreLib[i] + "<br>";
           SearchResultsHolder += "Book pages:"+bookPagesLib[i] + "<br>";
           SearchResultsHolder += "Book Pub Date :"+ bookPubDateLib[i] + "<br>";
           SearchResultsHolder += "Book Title :"+bookTitleLib[i] + "<br>";
           SearchResultsHolder += "Book Number :"+ bookNumLib[i] + "<br>";
           SearchResultsHolder +=  "Book Type ="+bookTypeLib[i]+ "<br>"
            document.getElementById("bookResults").innerHTML = resultString;}
          else if(bookNumLib[i]===bookNumStu||bookTitleLib[i]===bookTitleStu||bookAuthorStu===bookAuthorLib[i]||bookPagesLib[i]===bookNumLib||bookGenreStu===bookGenreLib[i]||bookPubDateLib[i]===bookPubDatestu||bookTypeLib[i]===bookNFstu){
            ///alert("4")
            SearchResultsHolder += "Book author :"+ bookAuthorLib[i] + "<br>";
            SearchResultsHolder += "Book Genre :"+bookGenreLib[i] + "<br>";
            SearchResultsHolder += "Book pages:"+bookPagesLib[i] + "<br>";
            SearchResultsHolder += "Book Pub Date :"+ bookPubDateLib[i] + "<br>";
            SearchResultsHolder += "Book Title :"+bookTitleLib[i] + "<br>";
            SearchResultsHolder += "Book Number :"+ bookNumLib[i] + "<br>";
            SearchResultsHolder +=  "Book Type ="+bookTypeLib[i]+ "<br>"
            document.getElementById("bookResults").innerHTML = resultString;}
          else if (bookNumLib[i]===bookNumStu||bookTitleLib[i]===bookTitleStu||bookAuthorStu===bookAuthorLib[i]||bookPagesLib[i]===bookNumLib||bookGenreStu===bookGenreLib[i]||bookPubDateLib[i]===bookPubDatestu||bookTypeLib[i]===bookNFstu){
           // alert("5")
           SearchResultsHolder += "Book author :"+ bookAuthorLib[i] + "<br>";
            SearchResultsHolder += "Book Genre :"+bookGenreLib[i] + "<br>";
            SearchResultsHolder += "Book pages:"+bookPagesLib[i] + "<br>";
            SearchResultsHolder += "Book Pub Date :"+ bookPubDateLib[i] + "<br>";
            SearchResultsHolder += "Book Title :"+bookTitleLib[i] + "<br>";
            SearchResultsHolder += "Book Number :"+ bookNumLib[i] + "<br>";
            SearchResultsHolder +=  "Book Type ="+bookTypeLib[i]+ "<br>"
            document.getElementById("bookResults").innerHTML = resultString;

     }
             else{
             // alert("")
                 alert("Sorry there are no results") 
               }
     
          }}}

