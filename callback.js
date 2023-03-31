function greeting(greetingHandler, name) {
    greetingHandler(name);
}
// greeting(45);
// greeting('Halim mama');
const number = [24, 45, 67];
const laptop = { price: 45000, brand: 'lenovo' }

function greetingHandler(name) {
    console.log('Good morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name)
}

function greetNight(name) {
    console.log('Good Night', name)
}
greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetNight, 'Tom Salman');

function submitHandler() {
    console.log('Submit button clicked');
}

document.getElementById('btn-submit').addEventListener('click', submitHandler)