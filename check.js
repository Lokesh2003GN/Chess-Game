function check(color1,color2){
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
        const check_color1 = colors1[x][y];
        const check_color2 = colors2[x][y];
        let select_check_1=chess1[x][y];
        let select_check_2=chess2[x][y];
        if (color1!==check_color1 && color2!==check_color2 && check_color1!=="" && check_color2!=="")
        
             verify=valid_move(x,y, check_color1,check_color2 ,select_check_1, select_check_2, 'check')
             
        else if(color2!==check_color1 && color1!==check_color2 && check_color1!=="" && check_color2!=="")
            verify= valid_move(x,y, check_color1,check_color2 ,select_check_1, select_check_2, 'check')
  
            
        }
        }
     }

