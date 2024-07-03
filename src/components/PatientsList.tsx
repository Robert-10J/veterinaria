import { usePatientStore } from '../store/store'
import PatientCard from './PatientCard'

const PatientsList = () => {
 
  const patients = usePatientStore(state => state.patients) // Otra forma de acceder al state con zustand

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      { patients.map(patient => (
        <div key={patient.id} className="p-5 rounded-md bg-gray-100 shadow-md">
          <PatientCard patient={patient} />
        </div>
      ))}
    </div>
  )
}

export default PatientsList