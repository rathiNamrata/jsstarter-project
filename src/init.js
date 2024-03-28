alert('init.js loaded!');

let counters = 0;

const dom  = { 
    increment : document.getElementById('increment-btn'),
    counter : document.querySelector('#counter-value'),
    decrement : document.getElementById('decrement-btn'),
    reset : document.getElementById('reset-btn')
};

const resetBtn = () => {
    counters = 0;
    dom.counter.innerHTML = counters;
}

dom.increment.addEventListener('click',() => {
    counters++;
   dom.counter.innerHTML = counters;

});
 dom.decrement.addEventListener('click',() => {
    counters--;
    dom.counter.innerHTML = counters;
 });

dom.reset.addEventListener('click' ,resetBtn);