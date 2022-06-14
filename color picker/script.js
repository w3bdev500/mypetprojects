const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const colors =["red", "green", "blue", "yellow"]
const genearateButton = document.getElementById('btn')
const color = document.getElementById('color')
 const copyButton = document.getElementById('copy')

genearateButton.addEventListener("click", function() {
   let hexColor = "#"
   for (let i = 0; i < 6; i++) {
       hexColor += hex[getRandomNumber()]
   }
   color.textContent = hexColor;
   document.body.style.backgroundColor = hexColor 
   
   
   
   
   
    // const hexColors = []
    // for (let i = 0; i < 6; i++) {
    //     hexColors.push = (Math.floor(Math.random() * hex.length))
    //     document.body.style.backgroundColor = hexColors 
    // }
       
    
    // chosenColor = color.textContent = colors[((Math.floor(Math.random(color) * 4)))]
    // document.body.style.backgroundColor = chosenColor
    

})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

