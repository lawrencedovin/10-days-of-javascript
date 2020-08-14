window.onload = function() {
    let result = document.querySelector("#res");
    let btn0 = document.querySelector("#btn0");
    let btn1 = document.querySelector("#btn1");
    let btnClr = document.querySelector("#btnClr");
    let btnEql = document.querySelector("#btnEql");
    let btnSum = document.querySelector("#btnSum");
    let btnSub = document.querySelector("#btnSub");
    let btnMul = document.querySelector("#btnMul");
    let btnDiv = document.querySelector("#btnDiv");
    result.innerHTML = "Lawrence Pogi";

    btn0.addEventListener('click', () => {
        result.innerHTML += "0";
    });

    btn1.addEventListener('click', () => {
        result.innerHTML += "1";
    });

    btnClr.addEventListener('click', () => {
        result.innerHTML = "";
    });

    btnEql.addEventListener('click', () => {
        result.innerHTML = "";
    });

    btnSum.addEventListener('click', () => {
        result.innerHTML += "+";
    });

    btnSub.addEventListener('click', () => {
        result.innerHTML += "-";
    });

    btnMul.addEventListener('click', () => {
        result.innerHTML += "*";
    });

    btnDiv.addEventListener('click', () => {
        result.innerHTML += "/";
    });
}