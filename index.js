const nameDiv = document.querySelector('#name')
const hairDiv = document.querySelector('#hair')
const eyeDiv = document.querySelector('#eyes')
const genderDiv = document.querySelector('#gender')
// const homeWorld = document.querySelector('#homeworld')


fetch ('https://swapi.co/api/people/85/')
    .then (response => response.json())
    .then (function (data) {
        const name = data.name
        const hair = data.hair_color
        const eyes = data.eye_color
        const gender = data.gender

        console.log(eyes)
        nameDiv.innerText = `Name: ${ name }`
        hairDiv.innerText = `Hair Color: ${ hair }`
        eyeDiv.innerText = `Eye Color: ${ eyes } eyes`
        genderDiv.innerText = `Gender: ${ gender }`
    })
    
    