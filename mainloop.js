function mainloop() {
board.innerHTML = '';
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
        if (chess1[0][i-1] === "♟" && chess2[0][i-1] === '♙') {
        promotion_box.value=[0,i-1];
        
        promotion_box.style.display='block'
        
        }
        if (chess2[7][i-1] === "♙" && chess1[7][i-1] === '♟') {
        promotion_box.value=[7,i-1];
        
        promotion_box.style.display='block'
        }
        let color=''
            const square = document.createElement('div');
            square.style.gridColumn = i;
            square.style.gridRow = j;

            if ((i + j) % 2 === 0) {
                const piece1 = chess1[j - 1][i - 1];
                const piece2 = chess2[j - 1][i - 1];
                const color1=colors1[j - 1][i - 1];
                const color2=colors2[j - 1][i - 1];
                const black = document.createElement('div');
                let className = `white b_${i-1}_${j-1}`;
                
                black.className = className;
                black.style.gridColumn = i;
                black.style.gridRow = j;
                
                if (type==1){
                    black.innerHTML = piece1;
                }
                else{
                    black.innerHTML = piece2;
                };
                if (type_c==1){
                    black.style.color=color1;
                }
                else{
                    black.style.color=color2;
                }
                board.appendChild(black);

                const positiony = i - 1;
                const positionx = j - 1;
                black.addEventListener('click', () => {
                    change(positionx, positiony, piece1,piece2, black, className, color1,color2);
                });
            } else {
                const piece1 = chess1[j - 1][i - 1];
                const piece2 = chess2[j - 1][i - 1];
                const color1=colors1[j - 1][i - 1];
                const color2=colors2[j - 1][i - 1];
                const white = document.createElement('div');
                let className = `black b_${i-1}_${j-1}`;
                
                white.className = className;
                white.style.gridColumn = i;
                white.style.gridRow = j;
                
                if (type==1){
                white.innerHTML = piece1;
                }
                else{
                    white.innerHTML = piece2;
                };
                if (type_c==1){
                    white.style.color=color1;
                }
                else{
                    white.style.color=color2;
                }
                board.appendChild(white);

                const positiony = i - 1;
                const positionx = j - 1;
                white.addEventListener('click', () => {
                    change(positionx, positiony, piece1,piece2, white, className, color1,color2);
                });
            }
        }
    }
    
    temp_positionx=''
    temp_positiony=''
    positionx=''
    positiony=''
    saveChessState()
    check();
}
mainloop();
