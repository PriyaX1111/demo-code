const nav = document.querySelector('.navbar')
fetch('./HeaderFooter.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
    })