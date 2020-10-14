'use strict';

class Photobox
{
    initiatePhotobox(albumId='72157716049805487')
    {
        var numOfImages = window.location.search ? parseInt(window.location.search.match(/\d+$/)[0]) : 70,
            gallery = $('#gallery'),
            
            videos = [
                /*
                {
                    title: "Rob Zombie - Dragula",
                    url:   "https://www.youtube.com/embed/EqQuihD0hoI",
                    thumb: "http://i3.ytimg.com/vi/EqQuihD0hoI/maxresdefault.jpg"
                },
                */
            ];
              
        // Get photos from Flickr
        $.ajax
        ({
            url: 'https://api.flickr.com/services/rest/',
            data: {
                format: 'json',
                method: 'flickr.photosets.getPhotos',
                per_page: numOfImages,
                photoset_id: albumId,
                api_key: 'b51d3a7c3988ba6052e25cb152aecba2'
            },
            dataType: 'jsonp',
            jsonp: 'jsoncallback'
        })
        .done(function (data)
        {
            var loadedIndex = 1, isVideo;
            
            console.log(data);
            
            // add the videos to the collection
            data.photoset.photo = data.photoset.photo.concat(videos);
            
            $.each( data.photoset.photo, function(index, photo)
            {
                isVideo = photo.thumb ? true : false;
                // http://www.flickr.com/services/api/misc.urls.html
                var url = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret,
                    img = document.createElement('img');
                
                // lazy show the photos one by one
                img.onload = function(e)
                {
                    img.onload = null;
                    var link = document.createElement('a'),
                    li = document.createElement('li')
                    link.href = this.largeUrl;

                    link.appendChild(this);
                    if( this.isVideo )
                    {
                        link.rel = 'video';
                        li.className = 'video'
                    }
                    li.appendChild(link);
                    gallery[0].appendChild(li);
                
                    setTimeout( function()
                    { 
                        $(li).addClass('loaded');
                    }, 25*loadedIndex++);
                };
                
                img['largeUrl'] = isVideo ? photo.url : url + '_b.jpg';
                img['isVideo'] = isVideo;
                img.src = isVideo ? photo.thumb : url + '_t.jpg';
                img.title = photo.title;
            });

            // finally, initialize photobox on all retrieved images
            $('#gallery').photobox('a', { thumbs:true }, callback);
            // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
            setTimeout(window._photobox.history.load, 1000);
            function callback()
            {
                console.log('callback for loaded content:', this);
            };
        });
    }
}