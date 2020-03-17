class IndexController extends BaseController{
    constructor() {
        super()
        this.displayBreeds()
    }

    async displayBreedImage(breedId) {
        const breedImaheModalImage = $('#breedImageModalImage')
        breedImaheModalImage.src = "#"
        /*this.model.getBreed(breedId)
            .then( breed => {
                $('#breedImageModalTitle').innerText = breed.breeds[0].name
                breedImaheModalImage.src =  breed.url
                this.breedImageModal.open()
            })*/
        const breed = await this.model.getBreed(breedId)
        if (breed !== null) {
            $('#breedImageModalTitle').innerText = breed.breeds[0].name
            breedImaheModalImage.src = breed.url
            this.getModal('#breedImageModal').open()
        }
    }
    navigateBreedImage(breedId) {
        this.breedId = breedId
        navigate("image")
    }
    async displayBreeds() {
        /*this.model.getAllBreeds()
            .then(breeds => {
                let content = ''
                for (const breed of breeds) {
                    content += `<tr><td><a href="#" onclick="indexController.displayBreedImage('${breed.id}', '${breed.name}')">${breed.name}</a></td><td>${breed.description}</td></tr>`
                }
                $('#breedsTable').innerHTML = content
            })*/

        const breeds = await this.model.getAllBreeds()
        let content = ''
        for (const breed of breeds) {
            content += `<tr><td><a href="#" onclick="indexController.displayBreedImage('${breed.id}')">${breed.name}</a></td>
                            <td>${breed.description}</td>
                            <td><a class="btn" onclick="indexController.navigateBreedImage('${breed.id}')"><i class="material-icons">more_horiz</i></a></td></tr>`        }
        $('#breedsTable').innerHTML = content
    }

}

window.indexController = new IndexController()
