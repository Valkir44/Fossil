window.onload=function(){
    var menuElem = document.querySelector('#dropdown-menu'),
        titleElem = menuElem.querySelector('.default-lang');
    document.onclick = function(event) {
        var target = elem = event.target;
        while (target != this) {
            console.log(this);
            if (target == menuElem) {
                if(elem.tagName == 'A') {
                    titleElem.innerHTML = elem.textContent;
                    titleElem.style.backgroundImage =  getComputedStyle(elem, null)['backgroundImage']
                }
                menuElem.classList.toggle('open');
                return;
            }
            target = target.parentNode;
        }
        menuElem.classList.remove('open');
    }
}