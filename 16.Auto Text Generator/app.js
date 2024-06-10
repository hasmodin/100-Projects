const typedTextSpan = document.querySelector('.typed-text');


const words = ['Awesome', 'Fun', 'Cool', 'Famouse', 'Werd']; 


let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 2000);
})

function type() {
    if(charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);

        charIndex ++;
        setTimeout(type, 200);
    }else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1);

        charIndex --;
        setTimeout(erase, 200);
    }else {
        index ++;
        if(index >= words.length) {
            index = 0;
        }

        setTimeout(type, 1300);
    }

}