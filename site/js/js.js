/*show other info in prices*/
var boutton1 = document.querySelector('div#button.top');
var boutton2 = document.querySelector('div#button.bottom');
console.log('boutton1 : ' + boutton1);
console.log(' boutton2 : ' + boutton2)

boutton1.addEventListener('click', function() {
    var suprimerButtonTop = document.querySelector('#button.top');
    var contentToShow = document.querySelector('div#show');
    var butoonToShow = document.querySelector('div.bottom');
    suprimerButtonTop.classList.add('hide_me');
    contentToShow.classList.remove('hide_me');
    butoonToShow.classList.remove('hide_me');
    console.log('button1 is clicked');
});

boutton2.addEventListener('click', function() {
    var ajouterButtonTop = document.querySelector('#button.top');
    var contentToHide = document.querySelector('div#show');
    var butoonToHide = document.querySelector('div.bottom');
    ajouterButtonTop.classList.remove('hide_me');
    contentToHide.classList.add('hide_me');
    butoonToHide.classList.add('hide_me');
});

/*end show other info in prices*/

var linkToClick = document.querySelectorAll('.lien');
var contentToShow = document.querySelectorAll('.contenu');


function showContent(e) {
    removeActive();
    removeShow();
    this.classList.add('active');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');

}

function removeActive() {
    linkToClick.forEach(item => {
        item.classList.remove('active');
    });
}

function removeShow() {
    contentToShow.forEach(item => {
        item.classList.remove('show');
    });
}

linkToClick.forEach(item => {
    item.addEventListener('click', showContent);
});