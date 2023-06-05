"use strict";



let inp = document.getElementById('inp');
let eyes = document.getElementById('eyes');

function show() {


    if(inp.type === 'password'){
        inp.type = 'text';
        eyes.className='fa-solid fa-eye';

    }
    else{
        inp.type='password';
        eyes.className='fa-solid fa-eye-slash';
        

    }
    
}
show();






