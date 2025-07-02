document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('grid');
  const colorPicker = document.getElementById('colorPicker');
  const clearButton = document.getElementById('clearButton');
  const randomColorBtn = document.getElementById('randomColor');
  let currentColor = colorPicker.value;
  
  // Create 10x10 grid
  function createGrid() {
      grid.innerHTML = '';
      for (let i = 0; i < 100; i++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          
          // Click to paint
          cell.addEventListener('click', function(e) {
              if (e.shiftKey) {
                  // Shift+click to erase
                  this.style.backgroundColor = 'white';
              } else {
                  this.style.backgroundColor = currentColor;
              }
              this.classList.add('active');
              setTimeout(() => this.classList.remove('active'), 300);
          });
          
          grid.appendChild(cell);
      }
  }
  
  // Update current color when color picker changes
  colorPicker.addEventListener('input', function() {
      currentColor = this.value;
  });
  
  // Clear the grid
  clearButton.addEventListener('click', function() {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
          cell.style.backgroundColor = 'white';
          cell.classList.add('active');
          setTimeout(() => cell.classList.remove('active'), 300);
      });
  });
  
  // Random color generator
  randomColorBtn.addEventListener('click', function() {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      currentColor = randomColor;
      colorPicker.value = randomColor;
  });
  
  // Initialize the grid
  createGrid();
});