const image = document.getElementById('tital_pic');

let randomnumber = Math.floor(Math.random() * 2) + 1;
console.log(randomnumber);


image.onclick = function(){
    
    image.src = 'giphy.gif';
    
}
