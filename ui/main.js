console.log('Loaded!');
//change the textt of main-text div
var element=document.getElementById('main-text')
;
element.innerHTML='New Value';

//move the image
var img=document.getElementById('modi');
var marginLeft=0;
function moveRight () {
marginLeft=marginLeft +10;
img.style.marginLeft=marginLeft+'px';
}
img.oneclick = function(){
    img.style.marginLeft='100px';
};