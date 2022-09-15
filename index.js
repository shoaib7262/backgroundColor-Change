const button = document.querySelector("button");
const body   = document.querySelector("body");
const colors  = ['red','green','yellow','pink','white','purple'];
let count = -1; 

const myFunc = ()=>{
    // const bColor = parseInt(Math.random()*colors.length);
    count++    
    if (count == colors.length){
        count = 0
    }
    // }

    console.log(count)
    body.style.backgroundColor = colors[count];
    
}