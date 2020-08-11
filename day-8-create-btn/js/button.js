var btn = document.querySelector("#btn");
let btnClicks = 0;
btn.addEventListener('click', () => {
    btnClicks += 1;
    btn.innerText = btnClicks.toString();
});
