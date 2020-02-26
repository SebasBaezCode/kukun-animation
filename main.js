let controls = document.getElementsByClassName('controls'),
    add_button = document.getElementsByClassName('add-button'),
    quantity = document.getElementsByClassName('quantity'),
    add_button_2 = document.getElementsByClassName('add-img'),
    remove_button = document.getElementsByClassName('remove-img');


const add = (item, e) => {
    if (!controls[item].classList.contains('toggle-controls-button')) {
        controls[item].classList.add('toggle-controls-button');
        setTimeout(() => {
            controls[item].classList.add('toggle-controls');
        }, 400);
    }
    let current_quantity = parseInt(quantity[item].innerHTML);
    quantity[item].innerHTML = current_quantity + 1;
}

const remove = (item, e) => {
    let current_quantity = parseInt(quantity[item].innerHTML),
        next_quantity =  current_quantity - 1;

    if (next_quantity <= 0) {
        next_quantity = 0;
        controls[item].classList.remove('toggle-controls');
        setTimeout(() => {
            controls[item].classList.remove('toggle-controls-button');
        }, 400);
    }

    quantity[item].innerHTML = next_quantity;
}


document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < add_button.length; i++) {
        add_button[i].addEventListener('click', function(e) {
            add(i, e)
        })
        add_button_2[i].addEventListener('click', function(e) {
            add(i, e)
        })
        remove_button[i].addEventListener('click', function(e) {
            remove(i, e)
        })
    }
})
