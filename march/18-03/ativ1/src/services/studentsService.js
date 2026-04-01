const students = [
    { id: 1, name: 'Kacetoide', age: 17 },
    { id: 2, name: 'Kacetudo', age: 18 },
    { id: 3, name: 'Kalybronha', age: 67 },
]

class studentsServices {

    getAll() {
        return students
    }
}

export const studentsService = new studentsServices()