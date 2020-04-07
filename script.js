let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g",
            "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R",
            "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "/", "*", "@", "!",
            "%", "$", "#", "&"
        ];
    
        let cvb = "";
        function gonder() {
            cvb = "";
            let dovr =  document.getElementById("bir").value;
            for (let i = 1; i <= dovr; i++) {
                console.log(i);
                    let d = arr[Math.floor(Math.random() * arr.length)];
                    cvb += d;
              
                    document.getElementById("iki").innerHTML = cvb;
                
            }

        }