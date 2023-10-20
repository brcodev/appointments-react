import Swal from 'sweetalert2'


export const Patient = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {

        Swal.fire({
            title: '¿Estás seguro?',
            text: `Se eliminara el paciente ${nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
                Swal.fire(
                    'Eliminado',
                    'El paciente fue eliminado',
                    'success'
                )
            }
        })

    }


    return (
        <div className=' my-10 bg-white shadow-md px-5 py-10 rounded-xl mr-3'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                <span className='font-normal normal-case'>
                    {sintomas}</span>
            </p>

            <div className="flex justify-between">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase cursor-pointer rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase cursor-pointer rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>


            </div>

        </div>
    )
}
