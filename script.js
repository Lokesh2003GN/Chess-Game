// Load saved chess state from localStorage
const savedChess1 = localStorage.getItem('savedChess1');
const savedChess2 = localStorage.getItem('savedChess2');
const savedColors1 = localStorage.getItem('savedColors1');
const savedColors2 = localStorage.getItem('savedColors2');
const savedtype = localStorage.getItem('savedType');

// variable declare 
let type=1,type_c=1;
let select1,select2 ,temp;
let positionx,positiony,temp_positionx,temp_positiony;
let isvalid=true;
let first_color="white";
let second_color="black";
let move=first_color;
const board = document.getElementById('board');
const promotion_box=document.getElementById("promotion-box");

const chess1 = savedChess1 ? JSON.parse(savedChess1) : [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜']
];

const chess2 = savedChess2 ? JSON.parse(savedChess2) : [
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];


const colors1 = savedColors1 ? JSON.parse(savedColors1) : [
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black']
];

const colors2 = savedColors2 ? JSON.parse(savedColors2) : [
    ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
];


// save chess status in localStorage
function saveChessState() {
    localStorage.setItem('savedChess1', JSON.stringify(chess1));
    localStorage.setItem('savedChess2', JSON.stringify(chess2));
    localStorage.setItem('savedColors1', JSON.stringify(colors1));
    localStorage.setItem('savedColors2', JSON.stringify(colors2));
}



// rest button function 
function reset(){
const reset_chess=confirm('Are you sure you want to refresh? This will reset the chessboard.');
if (reset_chess) {
    localStorage.removeItem('savedChess1');
    localStorage.removeItem('savedChess2');
    localStorage.removeItem('savedColors1');
    localStorage.removeItem('savedColors2');
    
    // Reload the page
    location.reload();
}
}



// change pieces button function 
function change_pieces(){

const change_type=confirm('Are you sure you want to change pieces type?');
if (change_type){
    if (type===1){
        type=2;
    }
    else{
        type=1;
    }
    mainloop()
}}



// change color button function 
function change_color(){
const change_color=confirm('Are you sure you want to change pieces color?');
if (change_color){
    if (type_c===1){
        type_c=2;
    }
    else{
        type_c=1;
    }
    mainloop()
}}


function valid_moves(){
    valid_id=document.getElementById('valid_moves');
    if (valid_id.checked==true){
        isvalid=true;
    }
    else {
        isvalid=false;
    }
}


function change_move(){
    if (move==first_color) {
        move=second_color;
    }
    else {
        move=first_color;
    }
}
