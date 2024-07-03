interface Props {
  label: string
  property: string
}

const PatientDetailsItem = (
  { label, property }: Props
) => {
  return (
    <p className='text-lg mb-2 text-gray-700'>
      <span className='font-semibold uppercase'>{label}:</span> {property}
    </p>
  )
}

export default PatientDetailsItem