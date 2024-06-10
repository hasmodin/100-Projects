const btn = document.querySelector('button');
const heading = document.querySelector('h1');

const colorContainer = document.querySelector('.color-container');

//color generator with hexadecimal value

// function getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for(let i=0; i<6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];

//     }
//     return color;
// }

// btn.addEventListener('click', () => {
//     heading.innerText = getRandomColor();
//     colorContainer.style.backgroundColor = getRandomColor();
// });


//color generator with rgb value

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}

btn.addEventListener('click', () => {
    colorContainer.style.backgroundColor = getRandomColor();
    heading.innerText = getRandomColor();
})


