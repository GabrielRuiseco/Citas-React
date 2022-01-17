import Patient from "./Patient"

const PatientList = ({ patients, setPatient, deletePatient }) => {



    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

            {patients && patients.length ? (
                <>
                    <h2 className='text-center font-black'>Listado Pacientes</h2>
                    <p className='text-xl text-center mt-5 mb-10'>
                        Administra tus {' '}
                        <span className='text-indigo-600 font-bold'>Pacientes</span>
                    </p>
                    {patients.map((patient) => (
                        <Patient
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                        />
                    ))}
                </>
            ) : (
                <>
                <h2 className='text-center font-black'>No hay pacientes</h2>
                    <p className='text-xl text-center mt-5 mb-10'>
                        Comienza agregando pacientes {' '}
                        <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default PatientList