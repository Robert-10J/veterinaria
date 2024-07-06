import { createContext, useState } from 'react'
import { DraftPatient, Patient } from '../types'


type PatientContextType = {
  patients: Patient[]
  setPatient: React.Dispatch<React.SetStateAction<Patient[]>>
  addPatient: (data: DraftPatient) => Patient
}

const PatientsContext = createContext({} as PatientContextType)

const PatientsProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [patients, setPatient] = useState<Patient[]>([])

  const addPatient = (data: DraftPatient): Patient => {
    const id = crypto.randomUUID()
    return { ...data, id }
  }
  
  return (
    <PatientsContext.Provider
      value={{
        patients,
        addPatient,
        setPatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

export { PatientsProvider }

export default PatientsContext