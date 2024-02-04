// conditions for pawn
function pawn(temp_positionx,temp_positiony,positionx,     positiony,temp_color1,temp_color2,select1,select2,color1,color2){
    if ((positionx === temp_positionx - 1 ||  (positionx === temp_positionx - 2 && temp_positionx==6 && chess1[temp_positionx-1][positiony]=='')) && (temp_color1 === second_color && temp_color2===first_color)) {
        if (positiony === temp_positiony) {
            if (colors1[positionx][positiony] === first_color && colors2[positionx][positiony] === second_color) {
                return false;
            } else {
                return true;
            }
        } else {
            if ((colors1[positionx][positiony] === first_color && colors2[positionx][positiony] === second_color) && (temp_color1 === second_color && temp_color2 === first_color) && positionx === temp_positionx - 1 && (positiony === temp_positiony - 1 || positiony === temp_positiony + 1)) {
                return true;
            } else {
                return false; // Added condition
            }
        }
    } else if ((positionx === temp_positionx + 1 ||(positionx === temp_positionx + 2 && temp_positionx==1 && chess1[temp_positionx+1][positiony]==''))&& (temp_color1 === first_color && temp_color2===second_color)) {
        if (positiony === temp_positiony) {
            if (colors1[positionx][positiony] === second_color && colors2[positionx][positiony] === first_color) {
                return false;
            } else {
                return true;
            }
        } else {
            if ((colors1[positionx][positiony] === second_color && colors2[positionx][positiony] === first_color) && (temp_color1 === first_color && temp_color2===second_color) && positionx === temp_positionx + 1 && (positiony === temp_positiony + 1 || positiony === temp_positiony - 1)) {
                return true;
            } else {
                return false; // Added condition
            }
        }
    }
    }


// conditions for rook
function rook(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2){
    if ((positionx === temp_positionx && positiony !== temp_positiony) || (positiony === temp_positiony && positionx !== temp_positionx)) {
        // Check if there are any pieces in the way horizontally
        if (positionx === temp_positionx) {
            const step = positiony > temp_positiony ? 1 : -1;
            for (let y = temp_positiony + step; y !== positiony; y += step) {
                if (colors1[positionx][y]) {
                    return false; // There is a piece in the way
                }
            }
        }
        // Check if there are any pieces in the way vertically
        else if (positiony === temp_positiony) {
            const step = positionx > temp_positionx ? 1 : -1;
            for (let x = temp_positionx + step; x !== positionx; x += step) {
                if (colors1[x][positiony]) {
                    return false; // There is a piece in the way
                }
            }
        }
        return true; // No pieces in the way
    }
}

// conditions for knight
function knight(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2){
    const X = Math.abs(positionx - temp_positionx);
    const Y = Math.abs(positiony - temp_positiony);

    if (((X === 1 && Y === 2) || (X === 2 && Y === 1)) && ((temp_color1 !== color1 && temp_color2 !== color2))){
            return true;
        
    }
    return false;
}


// conditions for bishop
function bishop(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2){
    if (Math.abs(positionx-temp_positionx)===Math.abs(positiony-temp_positiony)){
     const dif=Math.abs(positionx-temp_positionx);
     const X = positionx > temp_positionx ? 1 : -1;
     const Y = positiony > temp_positiony ? 1 : -1;
     for(i=1;i<dif;i++){
         if ((chess1[temp_positionx+(i*X)][temp_positiony+(i*Y)]) && (chess2[temp_positionx+(i*X)][temp_positiony+(i*Y)])){
             return false
         }
     }
     return true
 }
}


// conditions for king

function king(temp_positionx,temp_positiony,positionx, positiony,temp_color1,temp_color2,select1,select2,color1,color2){
    if ((Math.abs(positionx-temp_positionx)===0 || Math.abs(positionx-temp_positionx)==1) && (Math.abs(positiony-temp_positiony)==0 || Math.abs(positiony-temp_positiony)==1)){
        return true
    }
}



