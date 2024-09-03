let BOARD_SIZE = 16

function drawBoard(gridSize) {
    boardContainer = document.querySelector(".container-div")
    //console.log(typeof(boardContainer));
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const row = document.createElement("div");
            row.classList.add(i, j)
            boardContainer.appendChild(row);
            //row.textContent = `${i}, ${j}`    
        }        
    }
    setNumberOfColumns(gridSize)
}

function setNumberOfColumns(numberOfColumns) {
    const root = document.querySelector(":root");
    root.style.setProperty('--numberOfColumns',numberOfColumns)
}

drawBoard(BOARD_SIZE)