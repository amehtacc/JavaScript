# Projects related to DOM

In this file I am just adding the JavaScript code or logic of the project. To access the complete project file just click on the link below each project title.

<br>

# Solution code in javascript

## Project 1 - Color Changer

[Project Link](https://)

```javascript
const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach((button) => {
  button.addEventListener('click', (e) => {
    
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }


    //using switch case
    // switch(e.target.id) {
    //   case 'grey': body.style.backgroundColor = e.target.id
    //                break;
    //   case 'white': body.style.backgroundColor = e.target.id
    //                break;
    //   case 'blue': body.style.backgroundColor = e.target.id
    //                break;
    //   case 'yellow': body.style.backgroundColor = e.target.id
    //                break;     
    // } 
  })
})


```


## Project 2 - BMI Calculator

[Project Link](https://)

```javascript

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    if(bmi < 18.6) {
      results.innerHTML = `${bmi} Under Weight`
    }
    else if(bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `${bmi} Normal Range`
    }
    else {
      results.innerHTML = `${bmi} Over Weight`
    }
  }
})


```


## Project 3 - 

[Project Link](https://)