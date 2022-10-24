console.clear()
const doc = document
let c = 0;
const menu = doc.createElement('div');
menu.className = 'menu';
addEventListener("click", e => {
    if(!e.target.alt){
        return;
    }
   
    c++;

    menu.style.top  = `${ e.layerY + (  e.layerY + 500 >= doc.body.clientWidth   ) * -150 }px`;
    menu.style.left = `${ e.layerX + (  e.layerX * 2   >= doc.body.clientHeight  ) * -300 }px`;

    menu.innerHTML = des[e.target.alt];


    c % 2 === 0 ? doc.body.append(menu) : doc.getElementsByClassName('menu')[0] = null;
    console.log( e.layerY - (-menu.style.top.slice(0,-2)) );
    console.log( e.layerY * 2 )
    
})
