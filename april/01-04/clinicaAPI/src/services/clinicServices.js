import patients from '../database/dataClinic.js'

class clinicServices {

    getAllPatients() {
        return patients;
    }

    getPatientsById(id) {
        return patients.find(patient => patient.id === parseInt(id));
    }

    createPatient(data) {
        const newPatient = { id: patients.length + 1, ...data };
        patients.push(newPatient);
        return newPatient;
    }

    updatePatch(id, data) {
        const index = patients.findIndex(patient => patient.id === parseInt(id));

        if (index === -1) {
            return null;
        }

        if (data) {
            patients[index] = { ...patients[index], ...data };
            return patients[index];
        }
    }

    deletePatient(id) {
        const index = patients.findIndex(patient => patient.id === parseInt(id));
        if (index === -1) return false;

        patients.splice(index, 1);
        return true;
    }
}

export const clinicService = new clinicServices();