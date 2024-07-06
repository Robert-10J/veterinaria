import { createContext, useState } from 'react'
import { DraftPatient, Patient } from '../types'
import { toast } from 'react-toastify'


type PatientContextType = {
  patients: Patient[]
  activeId: string
  setPatient: React.Dispatch<React.SetStateAction<Patient[]>>
  addPatient: (data: DraftPatient) => Patient
  getPatientById: (id: Patient["id"]) => void
  deletePatient: (id: Patient["id"]) => void
  updatePatient: (data: DraftPatient) => void
}

const PatientsContext = createContext({} as PatientContextType)

const PatientsProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [patients, setPatient] = useState<Patient[]>([])

  const addPatient = (data: DraftPatient): Patient => {
    const id = crypto.randomUUID()
    toast.success('Paciente registrado correctamente')
    return { ...data, id }
  }

  const getPatientById = (id: Patient['id']) => {

  }

  const deletePatient = (id: Patient['id']) => {

  }

  const updatePatient = (data: DraftPatient) => {

  }
  
  return (
    <PatientsContext.Provider
      value={{
        patients,
        activeId: '',
        addPatient,
        setPatient,
        getPatientById,
        deletePatient,
        updatePatient
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

export { PatientsProvider }

export default PatientsContext