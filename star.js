let k = "";//定义空格
for (let row = 1; row <= 4; row++) {//行数
    for (let j = 1; j <= 4 - row; j++) { 
        k = k + " "
        }
        for (let i = 1; i <= row; i++) {//星星数
            k = k + "* ";
            }
            k = k + "\n";
            }
            for (let row = 1; row <= 3; row++) {//下半部分行数
                for (let j = 1; j <= row; j++) {
                    k = k + " "
                    }                    
                    for (let i = 1; i <= 4 - row; i++) {//星星数                       
                        k = k + "* ";                                          
                        }
                        k = k + "\n";
                        }
                        console.log(k);