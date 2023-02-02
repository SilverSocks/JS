const change_button = document.getElementById("change_button");
const color_name = document.querySelector(".color_name");
const colors = ['#B9F3FC', '#AEE2FF', '#93C6E7', '#FEDEFF'];
change_button.addEventListener("click", () => {
    console.log('click');
});


function randomNumber(){
console.log(Math.random());
}

randomNumber();