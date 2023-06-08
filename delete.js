var libTechBookNum=[];
var libTechTitle=[];
var libPubDate=[];
var libBookType=[];
var libTechAuthor=[];
var libTechType=[];
var libDateAdd=[];
var libNumPages=[];
var libGenre=[];
var bookAvail
var deleteBooknum;
var deleteBooknumIndex;

function deleteBook(deleteForm){
    bookTitleLib = JSON.parse(localStorage.getItem("libTecBookNumKey5"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTecBookNumKey3"));
    bookNumLib = JSON.parse(localStorage.getItem("libTecBookNumKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTecBookNumKey6"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTecBookNumKey2"));
    bookGenreLib = JSON.parse(localStorage.getItem("libTecBookNumKey4"));
    bookDateId = JSON.parse(localStorage.getItem("libTecBookNumKey2"));
    bookPagesLib = JSON.parse(localStorage.getItem("libTechBookNumKey8"));
    bookAvail = (JSON.parse(localStorage.getItem("BookTechKey")))
    

    returnBookNum = document.getElementById("bookno").value
    deleteBooknumIndex= libTechBookNum.indexOf(deleteBooknum)
    if (libTechBookNum!=null){
        if(deleteBooknumIndex>=0){
            libTechBookNum.splice(deleteBookNumIndex, 1);
            libTechTitle.splice(deleteBookNumIndex, 1);
            libPubDate.splice(deleteBookNumIndex, 1);
            libBookType.splice(deleteBookNumIndex, 1);
            libTechAuthor.splice(deleteBookNumIndex, 1);
            libDateAdd.splice(deleteBookNumIndex, 1);
            libNumPages.splice(deleteBookNumIndex, 1);
            libGenre.splice(deleteBookNumIndex, 1);
           

        }
       
        
    }
    localStorage.setItem("libTechBookNum", JSON.stringify(libTechBookNum));
  localStorage.setItem("libTechTitle", JSON.stringify(libTechTitle));
  localStorage.setItem("libTechAuthor", JSON.stringify(libTechAuthor));
  localStorage.setItem("libPubDate", JSON.stringify( libPubDate));
  localStorage.setItem("libBookType", JSON.stringify(libBookType));
  localStorage.setItem(" libDateAdd", JSON.stringify( libDateAdd));
  localStorage.setItem(" libNumPages", JSON.stringify( libNumPages));
  localStorage.setItem( "libGenre", JSON.stringify(libGenre))}
