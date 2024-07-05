import { useForm } from 'react-hook-form'
import { VALIDATION_FORM_PATIENT } from '../validationsForm'
import Error from './Error'
import { DraftPatient } from '../types'

const PatientForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<DraftPatient>()

  const registerPatien = (data: DraftPatient) => {
    // addPatient(data)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatien)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100 mt-1 rounded-md"
            type="text"
            placeholder="Nombre del Paciente"
            { ...register('name', VALIDATION_FORM_PATIENT.name) }
          />
          { errors.name && (
            <Error>{errors.name.message}</Error> 
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100 mt-1 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
            { ...register('caretaker', VALIDATION_FORM_PATIENT.caretaker) }
          />
          { errors.caretaker && (
            <Error>{errors.caretaker.message}</Error> 
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100 mt-1 rounded-md"
            type="email"
            placeholder="Email de Registro"
            { ...register('email', VALIDATION_FORM_PATIENT.email) }
          />
          { errors.email && (
            <Error>{errors.email.message}</Error> 
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100 mt-1 rounded-md"
            type="date"
            { ...register('date', VALIDATION_FORM_PATIENT.date) }
          />
          { errors.date && (
            <Error>{errors.date.message}</Error> 
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100 mt-1 rounded-md"
            placeholder="Síntomas del paciente"
            { ...register('symptoms', VALIDATION_FORM_PATIENT.symptoms) }
          ></textarea>
          { errors.symptoms && (
            <Error>{errors.symptoms.message}</Error> 
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          value='Guardar Paciente'
        />
      </form>
    </div>
  )
}

export default PatientForm