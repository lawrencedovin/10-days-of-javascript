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
    let expression = "";
    let temp = "";


    btn0.addEventListener('click', () => {
        expression += "0";
        result.innerHTML = expression;
    });

    btn1.addEventListener('click', () => {
        expression += "1";
        result.innerHTML = expression;
    });

    btnClr.addEventListener('click', () => {
        expression = "";
        result.innerHTML = expression;
    });

    btnEql.addEventListener('click', () => {
        expression = result.innerHTML;
            var nums = /(\d+)/g;
            // Replace all base 2 nums with base 10 equivs
            expression = expression.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // eval in base 10 and convert to base 2
            result.innerHTML = eval(expression).toString(2);
    });

    btnSum.addEventListener('click', () => {
        temp = expression.substr(-1);
        temp == "+" || temp == "-" || temp == "*" || temp == "/" ? 
        expression = expression.replace(/.$/, "+") : 
        expression += "+";
        result.innerHTML = expression;
    });

    btnSub.addEventListener('click', () => {
        temp = expression.substr(-1);
        temp == "+" || temp == "-" || temp == "*" || temp == "/" ? 
        expression = expression.replace(/.$/, "-") : 
        expression += "-";
        result.innerHTML = expression;
    });

    btnMul.addEventListener('click', () => {
        temp = expression.substr(-1);
        temp == "+" || temp == "-" || temp == "*" || temp == "/" ? 
        expression = expression.replace(/.$/, "*") : 
        expression += "*";
        result.innerHTML = expression;
    });

    btnDiv.addEventListener('click', () => {
        temp = expression.substr(-1);
        temp == "+" || temp == "-" || temp == "*" || temp == "/" ? 
        expression = expression.replace(/.$/, "/") : 
        expression += "/";
        result.innerHTML = expression;
    });
}