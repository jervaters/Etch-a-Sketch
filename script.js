let BOARD_SIZE = 16
let DEFAULT_COLOR = 'blue'

let color = DEFAULT_COLOR
let color_choice = document.querySelector("#color-choice")
color_choice.addEventListener("change", function() {
    color = color_choice.value
})

let rainbowMode =  false
rainbowButton = document.querySelector(".rainbow-mode")
rainbowButton.addEventListener("click", () => rainbowMode=true)

colorButton = document.querySelector(".color-mode")
colorButton.addEventListener("click", () => rainbowMode=false)

//Track mouse button is up or down
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function colorCell(e) {
    if (e.type === 'mouseover' && !mouseDown ) {
        return
    }
    if (rainbowMode == true) {
        randomColor = () => {
            return "#" + Math.floor(Math.random() * 16777215).toString(16);
            }
        e.target.style.backgroundColor = randomColor()
    } else {
        e.target.style.backgroundColor = color
    }
    
}

function drawBoard(gridSize) {
    boardContainer = document.querySelector(".container-div")
    document.querySelector(".game").replaceChildren()
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const row = document.createElement("div");
            row.classList.add(i, j)
            boardContainer.appendChild(row);
            row.addEventListener("mousedown", colorCell)    
            row.addEventListener("mouseover", colorCell)
        }        
    }
    setNumberOfColumns(gridSize)
}

function setNumberOfColumns(numberOfColumns) {
    const root = document.querySelector(":root");
    root.style.setProperty('--numberOfColumns',numberOfColumns)
    document.querySelector('.slider-label').textContent = numberOfColumns
}

function clearBoard() {
    drawBoard(gridSlider.value)
}





//Clear button
let resetButton = document.querySelector(".clear")
resetButton.addEventListener("click", clearBoard)

drawBoard(BOARD_SIZE)


let gridSlider = document.querySelector("#grid-size-slider")
gridSlider.addEventListener("change", function() {
    document.querySelector(".slider-label").textContent = gridSlider.value;
    drawBoard(gridSlider.value) 
})
