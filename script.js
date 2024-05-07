document.getElementById('videoPlaceholder').addEventListener('click', function () {
    this.style.display = 'none';
    let iframe = document.getElementById('videoIframe');
    iframe.src = "https://www.youtube.com/embed/Mdcw3Sb98DA?si=7S2cISYFoz-j7bzm&autoplay=1";
    iframe.classList.add('visible');
});