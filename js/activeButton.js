var buttonContainer = document.getElementsByClassName('selector_container');
var buttons = document.getElementsByClassName('org');

for (var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', function()
    {
        var activeButton = document.getElementsByClassName('active');
        activeButton[0].className = activeButton[0].className.replace(' active', '');
        this.className += ' active'
    })
}