class Model {
    constructor() {
        this.api = new CatAPIService()
    }
    getBreed(breedId) {
        return this.api.getBreed(breedId)
    }
    getAllBreeds() {
        return this.api.getBreeds()
    }
}