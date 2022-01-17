const Patient = ({ patient, setPatient, deletePatient }) => {

    const { id, name, owner, email, dateDischarge, symptoms } = patient

    const handleDelete = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')
        if (respuesta) {
            deletePatient(id)
        }
    }

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {' '}
                <span className='font-normal normal-case'>{name}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {' '}
                <span className='font-normal normal-case'>{owner}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {' '}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha Alta: {' '}
                <span className='font-normal normal-case'>{dateDischarge}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Síntomas: {' '}
                <span className='font-normal normal-case'>{symptoms}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button
                    type='button'
                    className='py-2 px-10 hover:bg-indigo-700 bg-indigo-600 rounded-lg text-white font-bold uppercase'
                    onClick={() => { setPatient(patient) }}
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 hover:bg-indigo-700 bg-indigo-600 rounded-lg text-white font-bold uppercase'
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Patient