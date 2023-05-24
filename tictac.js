//nasper
var arrbuttons = Array.from(document.getElementsByClassName('buttons'));
var count = 0;
var king = 1;
var player = false;
var player1array = [];
var player2array = [];
var offed = 0;
let sleep = milliseconds => {
return new Promise(resolve => setTimeout(resolve,milliseconds));
};

function conditions(ary,a,b,c,d,e,f) {
    if (ary.includes(String(a)) && ary.includes(String(b))) {
        if (player){
            alert('PLAYER #1 , WINNER!');
        } else {
            alert('PLAYER #2 , WINNER!');
        }
        king = 0;
    } else if (ary.includes(String(c)) && ary.includes(String(d))) {
        if (player){
            alert('PLAYER #1 , WINNER!');
        } else {
            alert('PLAYER #2 , WINNER!');
        }
        king = 0;
    } else if (ary.includes(String(e)) && ary.includes(String(f))) {
        if (player){
            alert('PLAYER #1 , WINNER!');
        } else {
            alert('PLAYER #2 , WINNER!');
        }
        king = 0;
    };
}

function checkwinner (ary) {
    for (let z = 0 ; z < ary.length ; z++) {
        if (ary.at(-1) == 1) {
            conditions(ary,2,3,4,7,5,9);
            break;
        } else if (ary.at(-1) == 2) {
            conditions(ary,1,3,5,8,0,0);
            break;
        } else if (ary.at(-1) == 3) {
            conditions(ary,1,2,5,7,6,9);
            break;
        } else if (ary.at(-1) == 4) {
            conditions(ary,1,7,5,6,0,0);
            break;
        } else if (ary.at(-1) == 5) {
            conditions(ary,2,8,4,6,1,9);
            conditions(ary,3,7,0,0,0,0);
            break
        } else if (ary.at(-1) == 6) {
            conditions(ary,3,9,4,5,0,0);
            break;
        } else if (ary.at(-1) == 7) {
            conditions(ary,1,4,3,5,8,9);
            break;
        } else if (ary.at(-1) == 8) {
            conditions(ary,2,5,7,9,0,0);
            break;
        } else if (ary.at(-1) == 9) {
            conditions(ary,1,5,3,6,7,8);
            break;
        }
    };
}

function changecolor(elemente){
    if (count < 9 && king == 1) {
        if (player) {
            if (document.getElementById(elemente).style.backgroundColor == "orangered") {
                document.getElementById(elemente).style.backgroundColor = "beige";
                document.getElementById(elemente).style.borderColor = "beige";
                player = false;
                offed = 1;
            } else if (document.getElementById(elemente).style.backgroundColor == "lightgreen") {
                document.getElementById(elemente).style.backgroundColor = "beige";
                document.getElementById(elemente).style.borderColor = "beige";
                player = true;
                offed = 1;
            } else {
                document.getElementById(elemente).style.backgroundColor = "orangered";
                document.getElementById(elemente).style.borderColor = "orangered";
                player = false;
                offed = 0;
            }
        } else if (player == false) {
            if (document.getElementById(elemente).style.backgroundColor == "lightgreen") {
                document.getElementById(elemente).style.backgroundColor = "beige";
                document.getElementById(elemente).style.borderColor = "beige";
                player = true;
                offed = 1;
            } else if (document.getElementById(elemente).style.backgroundColor == "orangered") {
                document.getElementById(elemente).style.backgroundColor = "beige";
                document.getElementById(elemente).style.borderColor = "beige";
                player = false;
                offed = 1;
            } else {
                document.getElementById(elemente).style.backgroundColor = "lightgreen";
                document.getElementById(elemente).style.borderColor = "lightgreen";
                player = true;
                offed = 0;
            }
        };
    };
}

arrbuttons.map( iterate => {
    iterate.addEventListener('click' , (evt) => {
    sleep(100).then(() => {    
        changecolor(evt.target.id);
            if (count == 9) {
                king = 0;   
            }
            if (king == 1) {
                if (player) {
                    if (offed == 1) {
                        player1array = player1array.slice(0,-1);
                        console.log('Player 1 (GREEN)',player1array);
                        count -= 1;
                    } else if (offed == 0) {
                        player1array.push(evt.target.id);
                        console.log('Player 1 (GREEN)',player1array);
                        checkwinner(player1array);
                        count += 1;
                    }
                } else if (player == false) {
                    if (offed == 1) {
                        player2array = player2array.slice(0,-1);
                        console.log('Player 2 (ORANGE)',player2array);
                        count -= 1;
                    } else if (offed == 0) {
                        player2array.push(evt.target.id);
                        console.log('Player 2 (ORANGE)',player2array);
                        checkwinner(player2array);
                        count += 1;
                    }
                }
            }
        console.log('count',count);
    });
    });
})
