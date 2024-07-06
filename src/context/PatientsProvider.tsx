import { createContext, useState } from 'react'
import { DraftPatient, Patient } from '../types'
import { toast } from 'react-toastify'

type PatientContextType = {
  patients: Patient[]
  activeId: Patient['id']
  setActiveId: React.Dispatch<React.SetStateAction<string>>
  setPatient: React.Dispatch<React.SetStateAction<Patient[]>>
  addPatient: (data: DraftPatient) => Patient
  getPatientById: (id: Patient["id"]) => void
  deletePatient: (id: Patient["id"]) => void
  updatePatient: (data: DraftPatient) => void
}

const PatientsContext = createContext({} as PatientContextType)

const PatientsProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [patients, setPatient] = useState<Patient[]>([])
  const [activeId, setActiveId] = useState<Patient['id']>('')

  const addPatient = (data: DraftPatient): Patient => {
    const id = crypto.randomUUID()
    const datapatient = { ...data, id }
    localStorage.setItem('patients-data', JSON.stringify(datapatient))
    toast.success('Paciente registrado correctamente')
    return datapatient
  }

  const getPatientById = (id: Patient['id']) => {
    setActiveId(id)
  }

  const deletePatient = (id: Patient['id']) => {
    const patientDelete = patients.filter(patient => patient.id !== id)
    setPatient(patientDelete)
    toast.error('El paciente ha sido eliminado')
  }

  const updatePatient = (data: DraftPatient) => {
    const updatePatient = patients.map(patient => patient.id === activeId ? { id: activeId, ...data } : patient)
    setPatient(updatePatient)
    toast.success('El paciente ha sido actualizado correctamente')
    setActiveId('')
  }
  
  return (
    <PatientsContext.Provider
      value={{
        patients,
        activeId,
        setPatient,
        setActiveId,
        addPatient,
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