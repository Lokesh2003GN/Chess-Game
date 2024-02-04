function change(positionx, positiony, piece1,piece2, box, className, color1,color2) {
    if ((select1 && select2) && (temp_positionx !== positionx || temp_positiony !== positiony)) {
        if (temp_color1 === color1 && temp_color2 === color2) {
        select1 = '';
        select2 = '';
        mainloop();
        
        } else {
            if (conditions(temp_positionx, temp_positiony, positionx, positiony, temp_color1,temp_color2, select1,select2)) {
                chess1[positionx][positiony] = select1;
                chess2[positionx][positiony] = select2;
                colors1[positionx][positiony] = temp_color1;
                colors2[positionx][positiony] = temp_color2;
                select1 = '';
                select2 = '';
                colors1[temp_positionx][temp_positiony] = '';
                colors2[temp_positionx][temp_positiony] = '';
                chess1[temp_positionx][temp_positiony] = '';
                chess2[temp_positionx][temp_positiony] = '';
                board.innerHTML = '';
                if (type_c==1){
                    box.style.color = temp_color1;
                }
                else {
                    box.style.color = temp_color2;
                }
                change_move();
                mainloop();
            }
            else {
            select1 = '';
                select2 = '';
                newClass = className;
        box.className = newClass;
                mainloop();
            }

            
        }
    }
    else if(temp_positionx === positionx || temp_positiony === positiony){
        select1 = '';
        select2 = '';
        mainloop();
    }
     else {
        // Ensure temp_color and temp are updated even when there's no piece selected
        if (color1==move) {
        temp_positionx = positionx;
        temp_positiony = positiony;
        temp_color1= color1;
        temp_color2= color2;
        select1 = piece1;
        select2 = piece2;
        
            let newClass = className + ' select';
        box.className = newClass;
        if (isvalid){ valid_move(temp_positionx,temp_positiony,temp_color1,temp_color2,select1,select2,className);
        }}
        else{
            // this is other players move
            alert('Now opposite player move')
        }
        
    }
   
}
let select

function selectPiece(option){
    if (option=="Bishop") {
        select1="♝"
        select2="♗"
    }
    else if (option=="Queen") {
        select1="♛"
        select2="♕"
    }
    else if (option=="Rook") {
        select1="♜"
        select2="♖"
    }
    else if (option=='Knight') {
        select1="♞"
        select2="♘"
    }
    Xx=promotion_box.value[0]
    Yy=promotion_box.value[1]
    promotePawn(Xx,Yy,select1,select2)
    promotion_box.style.display='none'
}
function promotePawn(positionx, positiony,select1,select2){
chess1[positionx][positiony] = select1;
chess2[positionx][positiony] =select2;
   mainloop() 
}