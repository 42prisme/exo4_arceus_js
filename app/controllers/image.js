class ImageController extends BaseController {
    constructor() {
        super()
        this.displayBreedImage(indexController.breedId)
    }
    async displayBreedImage(breedId) {
        const breed = await this.model.getBreed(breedId)
        if (breed !== null) {
            $('#breedTitle').innerText = breed.breeds[0].name
            $('#breedImage').src = breed.url
        }
    }
}

window.imageController = new ImageController()