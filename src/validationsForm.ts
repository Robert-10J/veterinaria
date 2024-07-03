const today = new Date();
const todayString = today.toISOString().split('T')[0]; // today date in format YYYY-MM-DD

export const VALIDATION_FORM_PATIENT = {
  name: {
    required: 'El nombre del paciente es requerido',
    minLength: {
      value: 3,
      message: 'El nombre del paciente debe tener al menos 3 caracteres'
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: 'El nombre del paciente solo puede contener letras'
    }
  },
  caretaker: {
    required: 'El nombre del propietario es requerido',
    minLength: {
      value: 3,
      message: 'El nombre del propietario debe tener al menos 3 caracteres'
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: 'El nombre del paciente solo puede contener letras'
    }
  },
  email: {
    required: 'El email del propietario es requerido',
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'El email del propietario no es válido'
    }
  },
  date: {
    required: 'La fecha de registro es requerida',
    validate: {
      isToday: (value: string) => value === todayString || "Date must be today",
      notYesterdayOrTomorrow: (value: string) => {
        const inputDate = new Date(value);
        const isNotYesterday = inputDate > new Date(today.setDate(today.getDate() - 1));
        const isNotTomorrow = inputDate < new Date(today.setDate(today.getDate() + 1));
        return isNotYesterday && isNotTomorrow || "Date must be today and not yesterday or tomorrow";
      }
    }
  },
  symptoms: {
    required: 'Los sintomás son obligatorios',
    minLength: {
      value: 10,
      message: 'Debe escribir al menos un sintoma'
    }
  }
}