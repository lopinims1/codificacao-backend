const cars = [
    {id: 1, mark: 'Honda', model: 'Civic', year: 2017},
    {id: 2, mark: 'BMW', model: 'XM5', year: 2018},
    {id: 3, mark: 'Fiat', model: 'Argo', year: 2019},
]

class CarsServices  {
    getAll() {
        return cars
    }
}

export const carsService = new CarsServices