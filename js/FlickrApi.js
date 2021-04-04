class FlickrApi
{
    /*
     * declaring static read-only properties to declare constants 
     * that are scoped to this class
     */ 
    static get FIREFIGHTERS()
    {
        return '72157718601587952';
    }

    static get ARMY()
    {
        return '72157718596543881';
    }

    static get POLICE()
    {
        return '72157718601716672';
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
        return photosetId;
    }
}