var image = document.getElementById('tital_pic');


let randomnumber_title = Math.floor(Math.random() * 10) + 1;
switch(randomnumber_title){
    case 1:
        document.title = 'Welcome!!!';
        break;
    case 2:
        document.title = 'Hello there!';
        break;
    case 3:
        document.title = ':)';
        break;
    case 4:
        document.title = 'Hi';
        break;
    case 5:
        document.title = 'Good evening';
        break;
}



let randomnumber = Math.floor(Math.random() * 3) + 1;
console.log(randomnumber);


switch(randomnumber){
    case 1:
        image.src = 'future-students-campus-shot_0.jpg';
        break;

    case 2:
        image.src = 'another_pic.jpg';
        break;

    default:
        image.src = 'us-new-drone-shot.jpg';
}
