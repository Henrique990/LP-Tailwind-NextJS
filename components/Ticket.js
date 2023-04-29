import React from 'react'

function Ticket() {
  return (
    <div className='mx-auto max-w-screen-lg'>
        <h2>Tickets</h2>

        <table className='mt-5 table w-full border-collapse border-zinc-500'>
            <thead className='text-lg font-bold'>
                <tr>
                    <td className='border border-zinc-500 p-3'>Ticket</td>
                    <td className='border border-zinc-500 p-3'>Preço</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-zinc-500 px-3 py-2'>
                        Ticket para 1 dia
                    </td>
                    <td className='border border-zinc-500 px-3 py-2'>2.500 Mzn</td>
                </tr>
                <tr>
                    <td className='border border-zinc-500 px-3 py-2'>
                        Ticket para 7 dias
                    </td>
                    <td className='border border-zinc-500 px-3 py-2'>8.000 Mzn</td>
                </tr>
            </tbody>
            <caption className='my-5 caption-bottom'>
                Uma vez que eles acabarem, eles acabaram!
            </caption>
        </table>
    </div>
  )
}

export default Ticket