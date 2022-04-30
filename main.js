const board = document.querySelector('#board')
const COUNT_OF_SQUARES = 500
const colors = ['#FFCC70', '#E0C3FC', '#3EECAC', '#FF6A88', '#2BD2FF', '#F76B1C']

console.log(COUNT_OF_SQUARES)

for (let i = 0; i < COUNT_OF_SQUARES; i++) {
    const square = document.createElement('div')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    square.classList.add('square')
    board.append(square)
}

function setColor(element) {
    const color = generateColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 10px ${color}, 0 0 10px`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 10px #000'
}

function generateColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
