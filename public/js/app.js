const photobox = new Photobox();
var elements = document.getElementsByClassName('org');

photobox.initiatePhotobox();

/*
 * attach event listener to button elements and 
 * listen for click event
 */
Array.from(elements).forEach(element => {
    element.addEventListener('click', function()
    {
        var photoset = new FlickrApi();
        var photosetId = photoset.getPhotosetId(element.id);
    
        document.getElementById('gallery').innerHTML = "";
        photobox.initiatePhotobox(photosetId);
    });
});