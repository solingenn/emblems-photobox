class FlickrApi
{
    /*
     * declaring static read-only properties to declare constants 
     * that are scoped to this class
     */ 
    static get FIREFIGHTERS()
    {
        return '72157716045261781';
    }

    static get ARMY()
    {
        return '72157716049805487';
    }

    static get POLICE()
    {
        return '72157716049853952';
    }

    getPhotosetId(elementId)
    {
        switch(elementId)
        {
            case 'firefighters':
                var photosetId = FlickrApi.FIREFIGHTERS;
                break;
            case 'army':
                var photosetId = FlickrApi.ARMY;
                break;
            case 'police':
                var photosetId = FlickrApi.POLICE;
                break;
        }

        console.log(photosetId);
        return photosetId;
    }
}