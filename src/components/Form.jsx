import { useState, useEffect } from 'react'
import Error from './error';

const Form = ({ patients, setPatients, patient, setPatient }) => {

    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [dateDischarge, setDateDischarge] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDateDischarge(patient.dateDischarge)
            setSymptoms(patient.symptoms)
        }
    }, [patient])

    const generateId = () => {
        const random = Math.random().toString(36).substr(2)
        const date = Date.now().toString(36)
        return date + random;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //validate form
        if ([name, owner, email, dateDischarge, symptoms].includes('')) {
            setError(true);
            return;
        }
        setError(false)

        const objPatient = {
            name,
            owner,
            email,
            dateDischarge,
            symptoms
        }

        if (patient.id) {
            objPatient.id = patient.id
            const updatedPatients = patients.map(
                patientState => patientState.id === patient.id ? objPatient : patientState
            );
            setPatients(updatedPatients);
            setPatient({})
        } else {
            objPatient.id = generateId();
            setPatients([...patients, objPatient]);
        }

        setName('')
        setOwner('')
        setEmail('')
        setDateDischarge('')
        setSymptoms('')
    };

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-center'>
                Seguimiento Pacientes
            </h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {' '}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
                onSubmit={handleSubmit}
            >
                {error &&
                    <Error
                        message='Todos los campos son obligatorios'
                    />
                }

                <div className='mb-5'>
                    <label
                        className='block text-gray-700 uppercase'
                        htmlFor='pet'>Nombre mascota</label>
                    <input
                        id='pet'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type='text'
                        placeholder='Nombre de la mascota'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className='block text-gray-700 uppercase'
                        htmlFor='owner'>Nombre del propietario</label>
                    <input
                        id='owner'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type='text'
                        placeholder='Nombre del propietario'
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className='block text-gray-700 uppercase'
                        htmlFor='email'>Email</label>
                    <input
                        id='email'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type='email'
                        placeholder='Email contacto del propietario'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className='block text-gray-700 uppercase'
                        htmlFor='discharge'>Alta</label>
                    <input
                        id='discharge'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type='date'
                        placeholder='Fecha de alta'
                        value={dateDischarge}
                        onChange={(e) => setDateDischarge(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        className='block text-gray-700 uppercase'
                        htmlFor='symptoms'>Síntomas</label>
                    <textarea
                        id='symptoms'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los sintomas'
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>
                <input
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded hover:bg-indigo-700 cursor-pointer'
                    type='submit'
                    value={patient.id ? 'Editar paciente' : 'Agregar paciente'}
                />
            </form>
        </div>
    )
}


export default Form