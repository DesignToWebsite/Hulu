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

// var link1 = document.getElementById('live');
// var link2 = document.getElementById('breaking');
// var link3 = document.getElementById('biggest');

// var contentToChange = document.getElementById('background');

// link1.addEventListener('click', () => {
//     body.style.background = " url('../img/live-sports.jpg') ";
// });
// link2.addEventListener('click', () => {
//     contentToChange.style.backgroundImage = "url('img/biggest-Event.jpg')";
// });
// link3.addEventListener('click', () => {
//     contentToChange.style.backgroundImage = "url('img/biggest-Event.jpg')";
// });