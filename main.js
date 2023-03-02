let slider = document.getElementById('slider')
let rangeDisplay = document.getElementById('range-display')
let grid = document.getElementById('grid')
let erase = document.getElementById('erase')
let borderBtn = document.getElementById('border-btn')

slider.addEventListener('input', () => {
    rangeDisplay.innerHTML = `${slider.value}x${slider.value}` 
    let area = slider.value * slider.value
    let items = []

    for (let i = 0; i < area; i++){
        let div = document.createElement('div')
        div.setAttribute('class', 'square')
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "#8791a1"
        })
        items.push(div)
    }

    grid.replaceChildren(...items)
    grid.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`

})

erase.addEventListener('click', (e) => {
    let squares = grid.childNodes
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].nodeName.toLowerCase() == 'div') {
            squares[i].style.background = 'none';
        }
    }
})

borderBtn.addEventListener('click', () => {
    let squares = grid.childNodes
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].nodeName.toLowerCase() == 'div') {
                squares[i].style.border = 'none';
        }
    }
})
