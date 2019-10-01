const nameDiv = document.querySelector('#name')
// const homeWorld = document.querySelector('#homeworld')
const hairDiv = document.querySelector('#hair')
// const gender = document.querySelector('#gender')


fetch ('https://swapi.co/api/people/85/')
    .then (response => response.json())
    .then (function (data) {
        const name = data.name
        const hair = data.hair_color
        console.log(hair)
        nameDiv.innerText = `Hello, my name is ${ name }.`
        hairDiv.innerText = `My hair color is ${ hair }.`
    })
    
    