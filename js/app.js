/*
 * Listen for pressed button
 */
document.getElementById('firefighters').addEventListener("click", function(){var id = getPhotosetId('firefighters');});
document.getElementById('army').addEventListener("click", function(){getPhotosetId('army');});
document.getElementById('police').addEventListener("click", function(){getPhotosetId('police');});

/*
 * Get photoset ID based on pressed button
 */
function getPhotosetId(orgName) 
{
    const FIREFIGHTERS = '72157716045261781'
    const ARMY = '72157716049805487'
    const POLICE = '72157716049853952'

    switch(orgName)
    {
        case 'firefighters':
            var photosetId = FIREFIGHTERS;
            break;
        case 'army':
            var photosetId = ARMY;
            break;
        case 'police':
            var photosetId = POLICE;
            break;
    }

    console.log(photosetId);
    return photosetId;
}