import config from './config.json' assert {type: 'json'};
console.log(config);

    const canvas = document.getElementById("grid");
    const ctx = canvas.getContext("2d");

    const cellSize = config.display.canvas.cell_size;
    const rows = config.display.canvas.rows;
    const cols = config.display.canvas.columns;

    const gridData = createGridData(); // Initial grid data

    // Create initial grid data
    function createGridData() {
      const grid = [];
      for (let row = 0; row < rows; row++) {
        const rowData = [];
        for (let col = 0; col < cols; col++) {
          rowData.push("Z");
        }
        grid.push(rowData);
      }
      return grid;
    }

    // Draw the grid
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGridData();
    }

    // Draw the grid data
    function drawGridData() {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cellValue = gridData[row][col];
          ctx.font = config.display.canvas.font_value;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "white"; // Set the text color to white
          ctx.fillText(cellValue, col * cellSize + cellSize / 2, row * cellSize + cellSize / 2);
        }
      }
    }

    // Handle click events on the canvas
    function handleClick(event) {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((event.clientX - rect.left) / cellSize);
      const y = Math.floor((event.clientY - rect.top) / cellSize);

      const cellValue = prompt("Enter a character:"); // Prompt user for a character

      // Update the grid data
      gridData[y][x] = cellValue;

      drawGrid();
    }

    // Set a row by the left
    function setRowByLeft(row, valuesArray, color, isTitle=false) {
      for (let col = 0; col < valuesArray.length; col++) {
        const cellValue = valuesArray[col] || "";

        // Update the grid data
        gridData[row][col] = cellValue;

        // clear the cell
        ctx.clearRect(col * cellSize, row * cellSize, cellSize, cellSize);

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = color;

        if(isTitle) {
            ctx.font = config.display.canvas.font_label;
        }
        else{
            ctx.font = config.display.canvas.font_value;
        }

        ctx.fillText(cellValue, col * cellSize + cellSize / 2, row * cellSize + cellSize / 2);
      }
    }

    // Set a row by the right
    function setRowByRight(row, valuesArray, color, isTitle=false) {
      valuesArray = valuesArray.reverse();
      for (let col = cols - 1; col >= cols - valuesArray.length; col--) {
        const cellValue = valuesArray[cols - 1 - col] || "";

        // Update the grid data
        gridData[row][col] = cellValue;

        // clear the cell
        ctx.clearRect(col * cellSize, row * cellSize, cellSize, cellSize);

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = color;

        if(isTitle) {
            ctx.font = config.display.canvas.font_label;
        }
        else{
            ctx.font = config.display.canvas.font_value;
        }

        ctx.fillText(cellValue, col * cellSize + cellSize / 2, row * cellSize + cellSize / 2);
      }
    }

    // Attach click event listener to the canvas
    canvas.addEventListener("click", handleClick);

    drawGrid();

   setRowByLeft(2, ["T","h","i","s",":"], "white", true);
   setRowByLeft(3, ["1","1","2","4","6"], "green");

   setRowByRight(3, ["1","1","2","4","6"], "red");
