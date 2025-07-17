let counter = 0;
document.getElementById('increase').addEventListener('click',function(){
    counter += 1;
document.getElementById('count').textContent = counter;
});