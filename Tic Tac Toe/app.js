                var player="X";
                function one() {
                    if(document.getElementById("1").innerHTML==""&&player=="X") {
                        document.getElementById("1").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("1").innerHTML==""&&player=="O") {
                        document.getElementById("1").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                function two() {
                    if(document.getElementById("2").innerHTML==""&&player=="X") {
                        document.getElementById("2").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("2").innerHTML==""&&player=="O") {
                        document.getElementById("2").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                function three() {
                    if(document.getElementById("3").innerHTML==""&&player=="X") {
                        document.getElementById("3").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("3").innerHTML==""&&player=="O") {
                        document.getElementById("3").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                function four() {
                    if(document.getElementById("4").innerHTML==""&&player=="X") {
                        document.getElementById("4").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("4").innerHTML==""&&player=="O") {
                        document.getElementById("4").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                function five() {
                    if(document.getElementById("5").innerHTML==""&&player=="X") {
                        document.getElementById("5").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("5").innerHTML==""&&player=="O") {
                        document.getElementById("5").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                function six() {
                    if(document.getElementById("6").innerHTML==""&&player=="X") {
                        document.getElementById("6").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("6").innerHTML==""&&player=="O") {
                        document.getElementById("6").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                function seven() {
                    if(document.getElementById("7").innerHTML==""&&player=="X") {
                        document.getElementById("7").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("7").innerHTML==""&&player=="O") {
                        document.getElementById("7").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                function eight() {
                    if(document.getElementById("8").innerHTML==""&&player=="X") {
                        document.getElementById("8").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("8").innerHTML==""&&player=="O") {
                        document.getElementById("8").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                function nine() {
                    if(document.getElementById("9").innerHTML==""&&player=="X") {
                        document.getElementById("9").innerHTML="X";
                        player="O";
                    }
                    else if(document.getElementById("9").innerHTML==""&&player=="O") {
                        document.getElementById("9").innerHTML="O";
                        player="X";
                    }
                    win();
                }
                
            function win() {
                var b1=document.getElementById("1").innerHTML;
                var b2=document.getElementById("2").innerHTML;
                var b3=document.getElementById("3").innerHTML;
                var b4=document.getElementById("4").innerHTML;
                var b5=document.getElementById("5").innerHTML;
                var b6=document.getElementById("6").innerHTML;
                var b7=document.getElementById("7").innerHTML;
                var b8=document.getElementById("8").innerHTML;
                var b9=document.getElementById("9").innerHTML;
                if(b1===b2 && b1===b3 && b2===b3 &&b1!=="" && b2!=="" && b3!==""){
                    if(b1=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
                else if(b4===b5 && b4===b6 && b5===b6 &&b4!=="" && b5!=="" && b6!==""){
                    if(b4=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
                else if(b7===b8 && b7===b9 && b8===b9 &&b7!=="" && b8!=="" && b9!==""){
                    if(b7=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
                else if(b1===b4 && b1===b7 && b4===b7 &&b1!=="" && b4!=="" && b7!==""){
                    if(b1=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
                else if(b2===b5 && b2===b8 && b5===b8 &&b2!=="" && b5!=="" && b8!==""){
                    if(b2=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
                else if(b3===b6 && b3===b9 && b6===b9 &&b3!=="" && b6!=="" && b9!==""){
                    if(b3=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
                else if(b1===b5 && b1===b9 && b5===b9 &&b1!=="" && b5!=="" && b9!==""){
                    if(b1=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
                else if(b3===b5 && b3===b7 && b5===b7 &&b3!=="" && b5!=="" && b7!==""){
                    if(b3=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
                else if(b7===b8 && b7===b9 && b8===b9 &&b7!=="" && b8!=="" && b9!==""){
                    if(b7=="X"){
                    document.getElementById("notif").innerHTML="Player X Won!!";
                    }
                    else {
                        document.getElementById("notif").innerHTML="Player Y Won!!";
                    }
                }
            }