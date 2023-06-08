//IN this part of code we defined Variables 

var libTechBookNum=[];
var libTechTitle=[];
var libPubDate=[];
var libBookType=[];
var libTechAuthor=[];
var libTechType=[];
var libDateAdd=[];
var libNumPages=[];
var libGenre=[];
var libBookImg=[];

var availablity = [];
var counter =0;

function getExistingBooks(){
   
 if (JSON.parse(localStorage.getItem("libTecBookNumKey"))!=null){
libTechBookNum = JSON.parse(localStorage.getItem("libTecBookNumKey"));
libTechTitle= JSON.parse(localStorage.getItem("libTecBookNumKey5"));
libTechAuthor= JSON.parse(localStorage.getItem("libTecBookNumKey3"));
libTechType = JSON.parse(localStorage.getItem("libTecBookNumKey6"));
libPubDate= JSON.parse(localStorage.getItem("libTecBookNumKey2"));
libGenre = JSON.parse(localStorage.getItem("libTecBookNumKey4"));
libDateAdd = JSON.parse(localStorage.getItem("libTecBookNumKey2"));
libNumPages = JSON.parse(localStorage.getItem("libTechBookNumKey8"));
availablity = JSON.parse(localStorage.getItem("BookTechKey"))
    counter=libTechBookNum.length
 }  
}

//  I defined a function and linked it to the html  
function addNewBook(addBookForm){

 libTechBookNum[counter] = addBookForm.bookNumL.value
 libTechAuthor[counter] = addBookForm.authorL.value
 libTechTitle[counter] = addBookForm.titleL.value
 libBookType[counter] = addBookForm.bookTypeS.value
 libPubDate[counter] = addBookForm.pubDateL.value
 libDateAdd[counter]= addBookForm.BookFS.value
 libGenre[counter]= addBookForm.GenreL.value
 libNumPages[counter]= addBookForm.pagesC.value
 libBookImg[counter]=addBookForm.img.value

 availablity[counter]= true; 
 
 counter++;
// I am getting the values to the  local storage 

 localStorage.setItem('libTecBookNumKey', JSON.stringify(libTechBookNum))
 localStorage.setItem('libTecBookNumKey2',JSON.stringify (libPubDate))
 localStorage.setItem('libTecBookNumKey3',JSON.stringify  (libTechAuthor))
 localStorage.setItem('libTecBookNumKey6',JSON.stringify (libBookType))
 localStorage.setItem('libTecBookNumKey5',JSON.stringify (libTechTitle))
 localStorage.setItem('libTecBookNumKey4',JSON.stringify (libGenre))
 localStorage.setItem('libTecBookNumKey7',JSON.stringify (libDateAdd))
 localStorage.setItem('libTechBookNumKey8',JSON.stringify(libNumPages))
 localStorage.setItem('libTecBookNumKey9', JSON.stringify(libBookImg))
 localStorage.setItem('BookTechKey', JSON.stringify(availablity))




}
