import { createContext, useState } from 'react'
import { Patient } from '../types'


type PatientContextType = {
  patients: Patient[]
}

const PatientsContext = createContext({} as PatientContextType)

const PatientsProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [patients, setPatients] = useState<Patient[]>([])
  
  return (
    <PatientsContext.Provider
      value={{
        patients
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

export { PatientsProvider }

export default PatientsContext