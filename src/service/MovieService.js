export default class MovieService {

    async getMovies() {
        return fetch('http://localhost:8080/movies').then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status);
            }

            return response.json().then((data) => {
                return data;
              }).catch((err) => {
                console.log(err);
              }) 
        });
    }
}