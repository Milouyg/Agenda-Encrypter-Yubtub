class Api{
    
    async getData(url){ // Haalt data op vanuit json
        let dataToBeReturned = {}; // Een variabele die een object opslaat
        await fetch(url).then(
            (response) => {
                return response.json();
            }
        ).then((data) => {
            dataToBeReturned = data.data;
        });
        return dataToBeReturned;
    }
}
