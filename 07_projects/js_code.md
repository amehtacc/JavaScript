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


## Project 2 - 
[Project Link](https://)