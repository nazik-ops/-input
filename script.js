let html_input=document.getElementById('html_input')
let html_p=document.getElementById('html_p')
html_input.addEventListener("input",function () {
    html_p.innerHTML=html_input.value;
})