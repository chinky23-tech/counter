let counter = 0;
document.getElementById('increase').addEventListener('click',function(){
    counter += 2;
document.getElementById('count').textContent = counter;
});

document.getElementById('reset').addEventListener('click',function(){
    counter = 0;
    document.getElementById('count').textContent = counter;
});

document.getElementById('decrease').addEventListener('click',function(){
    if(counter>0){

    
counter -= 1;
    }
document.getElementById('count').textContent = counter;
});

