
let button=document.querySelectorAll('button');
let input=document.querySelector('input');
let equal=document.querySelector('#equal');
let reset=document.querySelector('#reset');
let valider=false;
let del=document.querySelector('#del')


function show(num){
    if(valider){
        input.value=''
        input.value+=num;
        valider=false;
    }else{
        input.value+=num;
    }
    
}

equal.addEventListener('click',()=>{
    try{
        input.value=eval(input.value);
    }
    catch{
        input.value='NaN'
    }
    valider=true;
    
})

reset.addEventListener('click',()=>{
    input.value=''
})

del.addEventListener('click',()=>{
    input.value=input.value.slice(0,-1);
})