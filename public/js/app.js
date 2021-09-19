const photobox = new Photobox();
var elements = document.getElementsByClassName('org');
const stopLoadingEvent = new Event('stopLoading');

photobox.initiatePhotobox();

/*
 * attach event listener to button elements,
 * listen for click event and
 * attach/detach "active" property to "org" class elements
 */
Array.from(elements).forEach(element => {
    element.addEventListener('click', function()
    {
        var photoset = new FlickrApi();
        var photosetId = photoset.getPhotosetId(element.id);

        // active button
        var activeButton = document.getElementsByClassName('active');
        activeButton[0].className = activeButton[0].className.replace(' active', '');
        this.className += ' active';

        /*
         * dispatching "stopLoading" event,
         * clearing gallery and
         * initiating new photobox object
         */ 
        document.dispatchEvent(stopLoadingEvent);
        document.getElementById('gallery').innerHTML = "";
        photobox.initiatePhotobox(photosetId);
    });
});