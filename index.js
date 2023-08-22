// creation a 16x16 grid of square divs

// when domContentLoads then the initial 16x16 grid would appear
document.addEventListener('DOMContentLoaded', function () {
    let size = 16;
    displaySize(size);
    makeGrid(size);
    // adding pen effect
    penEffect();
    // when user click on newGrid btn 
    let newGridBtn = document.getElementById('newGridBtn');
    let newSize;
    newGridBtn.addEventListener('click', () => {
        let containers = document.querySelectorAll('.container');
        containers.forEach((container) => {
            container.style.display = 'none';
        })
        do {
            newSize = parseInt(prompt(("Enter new size between 16 and 100: ")))
        } while (newSize < 16 || newSize > 100);
        displaySize(newSize);
        makeGrid(newSize);
        penEffect();
        console.log(newSize)
    })

})

// grid function
function makeGrid(size) {
    const container = document.createElement('div');
    container.className = "container";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            var div = document.createElement('div');
            div.classList.add(`childDiv`);
            div.setAttribute('id', `${i}:${j}`);
            div.style.width = `${100/size}%`;
            div.style.paddingBottom = `${100/size}%`;

            container.appendChild(div)
        }
    }
    document.body.appendChild(container);
}

function penEffect() {
    // newcolor function 
    let newColor = document.getElementById('color');
    let newValue = '#000';
    newColor.addEventListener('change', (event) => {
        newValue = event.target.value;
        console.log(newValue)
    })
    
    const childDivs = document.querySelectorAll('.childDiv')
    childDivs.forEach(childDiv => {
        let opacity = 0.1;
        childDiv.addEventListener('mouseover', function () {
            childDiv.style.backgroundColor = newValue;
            childDiv.style.opacity = opacity;
            opacity = opacity + 0.1;
            
        });
    });
}

function displaySize(size) {
    let displaySizeDiv = document.getElementById('sizeDisplay');
    if (isNaN(size)) {
        displaySizeDiv.innerText = "You've not entered a number";
    }
    else {
        displaySizeDiv.innerText = size;
    }
}

