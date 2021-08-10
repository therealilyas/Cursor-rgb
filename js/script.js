let main = document.getElementById('main')
let circleMouse = document.getElementById('rgbCircle');

document.addEventListener('mousemove', (e) => {
    circle(e);
});



function circle(e) {
    circleMouse.style.left = e.pageX + 'px';
    circleMouse.style.top = e.pageY + 'px';

    let a = circleMouse.cloneNode(true);

    main.appendChild(a);

    let random = Math.floor(Math.random() * 999);
    let letter = 'ABCDEF';
    let letterRandom = letter[Math.floor(Math.random() * 6)]
    circleMouse.style.backgroundColor = "#" + letterRandom + random + letterRandom;


    setTimeout(() => {
        a.className = 'hide';
    }, 1000);

}