import { Patient } from "./Patient"


const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {

    
    return (
        <div className=' mx-5 md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll'>

            {pacientes && pacientes.length ? (

                <>

                    <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
                    <p className='mt-5 text-xl mb-10 text-center'>
                        Administra tus {''}
                        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>

                    </p>

                    {pacientes.map((paciente) => (
                        <Patient
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente={eliminarPaciente}

                        />

                    ))}

                </>




            ) : <>

                <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
                <p className='mt-5 text-xl mb-10 text-center'>
                    Comienza agregando pacientes y {''}
                    <span className='text-indigo-600 font-bold'>aparecerán en este lugar</span>

                </p>

                {pacientes.map((paciente) => (
                    <Patient
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente = {setPaciente}
                        eliminarPaciente={eliminarPaciente}


                    />

                ))}

            </>




            }





        </div>
    )
}

export default PatientList