const btnRefresh = document.querySelector(".refresh_button");
const holes = document.querySelectorAll(".hole");
const label = document.querySelector(".label");

let firstArr = new Array();
for (let i = 0; i < 4; i++){
    firstArr[i] = holes[i];
}

let secondArr = new Array();
for (let i = 0; i < 4; i++){
    secondArr[i] = holes[i + 4];
}

let thirdArr = new Array();
for (let i = 0; i < 4; i++){
    thirdArr[i] = holes[i + 8];
}

let forthArr = new Array();
for (let i = 0; i < 4; i++){
    forthArr[i] = holes[i + 12];
}

let holesArr = new Array(firstArr, secondArr, thirdArr, forthArr);

for (let i = 0; i < holesArr.length; i++){
    for (let j = 0; j < holesArr[i].length; j++){
        holesArr[i][j].addEventListener("click", () => {
            for (let t = 0; t < holesArr.length; t++){
                if (holesArr[t][j].style.backgroundColor != "rgb(108, 74, 131)"){
                    holesArr[t][j].style.backgroundColor = "rgb(108, 74, 131)";
                }
                else {
                    holesArr[t][j].style.backgroundColor = "rgb(208, 176, 230)";
                }
            }

            for(let t = 0; t < holesArr[i].length; t++){
                if(j == t){
                    continue;
                }

                if (holesArr[i][t].style.backgroundColor != "rgb(108, 74, 131)"){
                    holesArr[i][t].style.backgroundColor = "rgb(108, 74, 131)";
                }
                else {
                    holesArr[i][t].style.backgroundColor = "rgb(208, 176, 230)";
                }
            }

            if (checkHoles()){
                label.innerText = "Ураааа!";
                paint();
            }   
        })
    }
}

btnRefresh.addEventListener("click", () => { refresh(); })

function refresh(){
    for (let i = 0; i < holesArr.length; i++){
        for (let j = 0; j < holesArr[i].length; j++){
            if (holesArr[i][j].style.backgroundColor != "rgb(208, 176, 230)"){
                holesArr[i][j].style.backgroundColor = "rgb(208, 176, 230)";
            }
        }
    }

    label.innerText = "";
}

function checkHoles(){

    for (let i = 0; i < holesArr.length; i++){
        for (let j = 0; j < holesArr[i].length; j++){
            if (holesArr[i][j].style.backgroundColor != "rgb(108, 74, 131)"){
                return false;
            }
        }
    }

    return true;
}

function paint(){
    for (let i = 0; i < holesArr.length; i++){
        for (let j = 0; j < holesArr[i].length; j++){
            if (holesArr[i][j].style.backgroundColor === "rgb(108, 74, 131)"){
                holesArr[i][j].style.backgroundColor = "rgb(108, 74, 131)";
            }
        }
    }
}