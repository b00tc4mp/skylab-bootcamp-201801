//Template Card
function addArtistTemplate(res) {
    var listArtistTemplate = '';

    res.forEach(function (el) {
        if (!el.images.length) el.images = [{
            "url": "somthing"
        }, {
            "url": "./img/defauldImage.png"
        }]

        listArtistTemplate += `
        <div class="card card-artist " id="${el.id}">
            <img class="card-img-top" src="${ el.images[1].url }" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
            </div>
        </div>   
        `;
    });
    return listArtistTemplate
}