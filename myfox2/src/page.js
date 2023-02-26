const buttons = document.querySelector('.sort_buttons');
const meals = document.querySelectorAll('.meal_all');
const button = document.querySelectorAll('.button');

function filter() {
    buttons.addEventListener('click', evt => {
        const targetId = evt.target.dataset.id;
        const target = evt.target;
        console.log(targetId);
       if(target.classList.contains('button')) {
            button.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }

        getMeals(targetId);
    })
}

filter();

function getMeals(meal) {
    meals.forEach(meals => {
        if (meals.classList.contains(meal)) {
            meals.style.display = 'flex';
        } else {
            meals.style.display = 'none';
        }
    })
}