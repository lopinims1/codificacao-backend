import films from '../config/dbFilms.js'

class FilmsService {
    getAll() {
        return films
    }

    getById(id) {
        return films.find(f => f.id === parseInt(id))
    }
}

export const filmsServices = new FilmsService()