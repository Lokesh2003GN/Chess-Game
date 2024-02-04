function valid_move(temp_positionx, temp_positiony, temp_color1,temp_color2 ,select1, select2, className) {

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            const check_color1 = colors1[x][y];
            const check_color2 = colors2[x][y];
            const valid = conditions(temp_positionx, temp_positiony, x, y, temp_color1,temp_color2, select1, select2, check_color1,check_color2);

            if (valid) {
            if (temp_color1!==check_color1 && temp_color2!==check_color2 && check_color1!=="" && check_color2!==""){
                const box_valid = document.getElementsByClassName(`b_${y}_${x}`)[0];
                if (box_valid.innerHTML=="♚"){
                    box_valid.classList.add('check');
                    
                }
                else {
                if (className!=='check'){
                box_valid.classList.add('mark');}
            }}
            else{
                const box_valid = document.getElementsByClassName(`b_${y}_${x}`)[0];
                if (className!=='check') {
                    box_valid.classList.add('valid');
                }
                
                }

            }
        }
    }
    
    }
