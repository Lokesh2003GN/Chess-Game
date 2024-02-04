function conditions(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2){
if (temp_positionx===positionx && temp_positiony===positiony) {
return false;
}

else if (temp_color1===color1 && temp_color2===color2){
    return false;
}

// conditions for pawn
else if (select2 === "♙" && select1 ==="♟") {
const conditions=pawn(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2);
if (conditions){
    return true
}
}


// conditions for rook
else if (select2 === "♖" && select1==="♜") {
const conditions=rook(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2)
    if (conditions){
    return true

}
}    
// conditions for knight
else if (select2 === "♘" && select1 === "♞") {
    const conditions=knight(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2)
    if (conditions){
    return true

}
}

// conditions for bishop
else if (select2 === "♗" && select1=== "♝"){
const conditions=bishop(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2)
    if (conditions){
    return true

}
 
}
else if (select2 === "♕" && select1 === "♛") {
let conditions=false
    if (Math.abs(positionx-temp_positionx)===Math.abs(positiony-temp_positiony)){
                conditions=bishop(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2)
                }
            else{
            conditions=rook(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2)
            }
            if (conditions){
    return true

}
}
else if (select2 === "♔" && select1 === "♚"){
const conditions=king(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2)
    if (conditions){
    return true

}
    
}

return false
}
