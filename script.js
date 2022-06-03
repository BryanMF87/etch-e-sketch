let container = document.getElementById("container");
let reset = document.getElementById("reset");

function makeRows(rows, cols) { // Create the grid
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

container.addEventListener("mouseover", function( event ) {
  event.target.style.backgroundColor = 'grey'; // change background color when user scrolls over square
});

reset.addEventListener("click", function( event ) {
  window.location.reload(); // reset the grid after clicking "reset"
});
