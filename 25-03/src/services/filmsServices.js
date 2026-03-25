import films from '../config/dbFilms.js'

const getFilms = () => films

const getById = (id) => { 
    return films.find(film => film.id === parseInt(id))
}

export default { getFilms, getById }