
    const canvas = document.getElementById("grid");
    const ctx = canvas.getContext("2d");

    const cellSize = 50;
    const rows = 12;
    const cols = 24;

    // Draw the grid
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Set a row from left to right
    function setRowByLeft(row, characters) {
      for (let col = 0; col < characters.length; col++) {
        const cellX = col * cellSize + cellSize / 2;
        const cellY = row * cellSize + cellSize / 2;
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(characters[col], cellX, cellY);
      }
    }

    // Set a row from right to left
    function setRowByRight(row, characters) {
      for (let col = characters.length - 1; col >= 0; col--) {
        const cellX = (cols - col - 1) * cellSize + cellSize / 2;
        const cellY = row * cellSize + cellSize / 2;
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(characters[col], cellX, cellY);
      }
    }


    // Attach click event listener to the canvas
    canvas.addEventListener("click", handleClick);

    drawGrid();
    setRowByLeft(1,"GABY");

