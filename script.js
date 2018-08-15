const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
let size = 16;
const btn = document.getElementById('btn');

let input = document.querySelector('input');

function createGrid() {
    for (let i = 0; i < size * size; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        gridItem.style.height = (680 / size) + "px";
        gridItem.style.width = (680 / size) + "px";
    }
}

createGrid();

const grid = document.querySelectorAll('.grid-item');
function draw() {
    grid.forEach(element =>
  element.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = input.value;
  }));
}

draw();

    function reset() {
    gridContainer.innerHTML = " ";
    createGrid();
    draw();
}

btn.addEventListener('click', reset);