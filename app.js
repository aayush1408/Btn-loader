(function () {
    var getButton = document.getElementsByClassName('btn-loader') || []
    var elementArray = [].slice.call(getButton);
    elementArray.forEach(function (element) {
        element.addEventListener('click', handleClick)
    })
    function handleClick(event) {
        this.style.display = 'None'
        var tempDiv = document.createElement('div')
        tempDiv.classList.add('loader')
        this.insertAdjacentElement('beforebegin', tempDiv);
    }
})()