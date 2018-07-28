(function () {

    var getButton = document.getElementsByClassName('btn-loader') || []
    var elementArray = [].slice.call(getButton);
    elementArray.forEach(function (element) {
        element.addEventListener('click', handleClick)
    })

    function handleClick(event) {

        var timer = this.getAttribute('timer')
        var size = this.getAttribute('size')
        var thickness = this.getAttribute('thickness')
        var colorOfLoader = this.getAttribute('color-head')

        this.style.display = 'None'

        var tempDiv = document.createElement('div')
        tempDiv.classList.add('loader')

        if (size === 'sm') {
            tempDiv.classList.add('sm-loader')
        }
        else if (size === 'md') {
            tempDiv.classList.add('md-loader')
        }
        else if (size === 'lg') {
            tempDiv.classList.add('lg-loader')
        }

        if (thickness) {
            tempDiv.style.borderWidth = thickness.toString() + 'px';
            tempDiv.style.borderTopWidth = thickness.toString() + 'px';
        }

        if (colorOfLoader) {
            tempDiv.style.borderTopColor = colorOfLoader.toString()
        }

        this.insertAdjacentElement('beforebegin', tempDiv);

        var that = this
        setTimeout(function () {
            that.style.display = 'inline'
            tempDiv.style.display = 'None'
        }, timer * 1000);
    }

})()