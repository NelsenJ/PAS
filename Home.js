let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');


function handleScroll(){
    let value = window.scrollY || document.documentElement.scrollTop;
    leaf.style.top = value* -1.5 + 'px';
    leaf.style.left = value* 1.5 + 'px';
    hill5.style.left = value* 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    text.style.marginTop = value * 2.5 + 'px';
    var scrollHeight = window.scrollY;
    var scrollMaks1 = 500;
    if(scrollHeight > scrollMaks1){
        leaf.style.display = "none";
        hill5.style.display = "none";
        hill4.style.display = "none";
        hill1.style.display = "none";
        text.style.display = "none";
    }
    else{
        leaf.style.display = "block";
        hill5.style.display = "block";
        hill4.style.display = "block";
        hill1.style.display = "block";
        text.style.display = "block";
    }

}
window.addEventListener('scroll', handleScroll);