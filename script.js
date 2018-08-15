const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
let size = prompt("How many pixels on each side do you want");
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


function draw() {
    const grid = document.querySelectorAll('.grid-item');
      grid.forEach(element =>
    element.addEventListener('mouseover', e => {
              e.target.style.backgroundColor = input.value;
    }))
  }
  

draw();

function reset() {
    gridContainer.innerHTML = "";
    createGrid();
    draw();
}

reset();

btn.addEventListener('click', reset);

const headerOne = document.getElementById('hdr');

headerOne.textContent = "The size of the grid is: " + size + " x " + size 