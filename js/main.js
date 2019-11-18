function handleSelect(elm) {
    window.location = elm.value + ".html";
};


const pro_left = document.querySelectorAll('.test');
const pro_right = document.querySelectorAll('.test2');

let options = {
    root: null,
    rootMargin: '30% 0px 0px 70%',
    threshold: 1.0
};

function callback_1(entries) {
    entries.forEach(entrie => {
        console.log(entrie);
        if (entrie.intersectionRatio > 0.0) {
            entrie.target.style.animation = 'anim1 0.8s forwards ease-out';
        } else {
            entrie.target.style.animation = 'none';
        }
    });
}

function callback_2(entries) {
    entries.forEach(entrie => {
        console.log(entrie);
        if (entrie.intersectionRatio > 0.0) {
            entrie.target.style.animation = 'anim2 0.8s forwards ease-out';
        } else {
            entrie.target.style.animation = 'none';
        }
    });
}


observer_1 = new IntersectionObserver(callback_1, options);
observer_2 = new IntersectionObserver(callback_2, options);

pro_left.forEach(pros => {
    observer_1.observe(pros);
});

pro_right.forEach(con => {
    observer_2.observe(con);
});