let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
for(let i = 1; i <= 9; i++){
    switch(i){
        case 1:
            btn1 = document.querySelector("#btn" + i.toString());
            btn1.innerHTML = i.toString();
            break;
        case 2:
            btn2 = document.querySelector("#btn" + i.toString());
            btn2.innerHTML = i.toString();
            break;
        case 3:
            btn3 = document.querySelector("#btn" + i.toString());
            btn3.innerHTML = i.toString();
            break;
        case 4:
            btn4 = document.querySelector("#btn" + i.toString());
            btn4.innerHTML = i.toString();
            break;
        case 5:
            btn5 = document.querySelector("#btn" + i.toString());
            btn5.innerHTML = i.toString();
            break;
        case 6:
            btn6 = document.querySelector("#btn" + i.toString());
            btn6.innerHTML = i.toString();
            break;
        case 7:
            btn7 = document.querySelector("#btn" + i.toString());
            btn7.innerHTML = i.toString();
            break;
        case 8:
            btn8 = document.querySelector("#btn" + i.toString());
            btn8.innerHTML = i.toString();
            break;
        case 9:
            btn9 = document.querySelector("#btn" + i.toString());
            btn9.innerHTML = i.toString();
            break;
    }
}

btn5.addEventListener('click', () => {
    let previousBtn1Value=btn1.innerHTML; 
    btn1.innerHTML=btn4.innerHTML; 
    btn4.innerHTML=btn7.innerHTML; 
    btn7.innerHTML=btn8.innerHTML; 
    btn8.innerHTML=btn9.innerHTML; 
    btn9.innerHTML=btn6.innerHTML; 
    btn6.innerHTML=btn3.innerHTML; 
    btn3.innerHTML=btn2.innerHTML;
    btn2.innerHTML=previousBtn1Value; 
});

// **Notes**
// let nums=[1,2,3,6,9,8,7,4];
// const ids=[1,2,3,6,9,8,7,4];

// let btn5=document.getElementById("btn5");

// btn5.onclick=function() {
//     nums.unshift(nums.pop());
//     for (i=0; i<=7; i++) {
//         document.getElementById("btn"+ids[i]).innerHTML=nums[i];
//     }
// }