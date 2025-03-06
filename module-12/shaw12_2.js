// Rachel Shaw - 3/6/2025 - module 12.2 Assignment 


//Array that holds books 
const books = ['One Piece', 'Chainsaw Man', 'DanDaDan', 'Dune', 'The Call of Cthullu and Other Weird Stories', 'Skeleton Crew', 'Lord of The Flies', 'I have no Mouth, And I Must Scream', 'Little Women', 'Wuthering Heights'];

//place items in descending order
function descending(){
   text = [];
   text.push('<ol reversed>')
   for (i = 10; i > 0; i--){
        text.push((i) + ". " + books[i-1] + '<br>');
   }
   text.push('</ol>')

   document.getElementById('list').innerHTML = text.join('');
}

//place items in ascending order
function ascending(){
    text = [];
    text.push('<ol>');
    for (i = 0; i < books.length; i++){
        text.push('<li>' + books[i] + '</li>');
    }
    text.push('</ol>');
 
    document.getElementById('list').innerHTML = text.join('');
 }