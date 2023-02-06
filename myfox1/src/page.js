const change_button = document.querySelector(".change_button");
const color_name = document.querySelector(".color_name");
const colors = ['#B9F3FC', '#AEE2FF', '#93C6E7', '#FEDEFF', '#C0EEE4', '#F8F988', '#FFCAC8', '#FF9E9E'];

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
        change_button.addEventListener("click", () => {
            const randomColor = getRandomNumber();

            document.body.style.backgroundColor = colors[randomColor];
            color_name.textContent = colors[randomColor];
            console.log(randomColor);
        });

getRandomNumber();