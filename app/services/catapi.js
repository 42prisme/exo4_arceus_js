class CatAPIService {
    getBreeds() {
        //return fetchJSON("https://api.thecatapi.com/v1/breeds")
        return new Promise((resolve, reject) =>
            fetch("https://api.thecatapi.com/v1/breeds")
                .then(res => resolve(res.json()))
                .catch(reject))
    }
    getBreed(breedId) {
        return new Promise((resolve, reject) =>
            fetchJSON(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
            .then(breeds => fonctionasync1(breeds))
            .catch(err => reject(err)))
    }
}

function fonctionasync1(breeds) {
    return new Promise((resolve, reject) => {
        if (breeds.length > 0) {
            resolve(breeds[0])
        } else {
            reject(null)
        }
    })
}

/*
// Sans promesses :
function traiterErreur(error) {
    //...
}

fonctionasync1(result => {
    fonctionasync2(result, result2 => {
        fonctionasync3(result2, result3 => {
            console.log(`résultat final ${result3}`)
        }, traiterErreur)
    }, traiterErreur)
}, traiterErreur)

// Avec promesses :

fonctionasync1()
    .then(result => fonctionasync2(result))
    .then(result2 => fonctionasync3(result2))
    .then(result3 => {
        console.log(`résultat final ${result3}`)
    })
    .catch(traiterErreur)

// async/await
// dans une fonction déclarée async :
try {
    const result = await fonctionasync1()
    const result2 = await fonctionasync2(result)
    const result3 = await fonctionasync3(result2)
    console.log(`résultat final ${result3}`)
} catch (e) { traiterErreur(e) }

fonctionasync1()
    .then(result => fonctionasync2(result))
    .then(result2 => fonctionasync3(result2))
    .then(result3 => {
        console.log(`résultat final ${result3}`)
    })
    .catch(traiterErreur)

// Une promesse
function fonctionasync1() {
    return new Promise((resolve, reject) => {
        // traitement
        if (traitement réussi) {
            resolve("Réussite");
        } else {
            reject("Échec");
        }
    })
}
*/
