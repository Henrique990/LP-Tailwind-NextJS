import React from 'react'

function Lineup() {
  return (
    <div className='mx-auto max-w-screen-lg'>
        <h2 className='mt-20'>Programação</h2>

        <p>Siga o horário e o palco para ter a certeza que você não vai perder o seus artistas favoritos</p>

        <div className='relative mt-5 rounded-lg bg-zinc-800 py-4 px-2 text-zinc-200'>
            <div className='absolute top-0 left-1/2 -ml[8px] h-full w-4 rounded-full bg-gradient-to-b from-sky-900 to-teal-900'>
                <div className='sticky top-1/2'>
                    <div className='relative h-4 w-4'>
                        <div className='absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75'></div>
                        <div className='relative h-4 w-4 rounded-full bg-rosa-500'></div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-8'>
                <div>
                    <h4 className='my-4 rounded-lg bg-zinc-900 p-2'>1 de Junho</h4>
                </div>
                <div></div>

                <div className='text-right'>
                    <div className='font-bold'>Jackie Chaston</div>
                    <div className='text-zinc-400'>¨horas - Palco do Sage</div>
                </div>

                <div></div>
                <div></div>

                <div>
                    <div className='font-bolt'>Jackie Chaston</div>
                    <div className='text-zinc-400'>6horas - Palco do Sage</div>
                </div>

                <div>
                    <h4 className='my-4 rounded-lg bg-zinc-900 p-2'>1 de Junho</h4>
                </div>
                <div></div>

                <div className='text-right'>
                    <div className='font-bold'>Jackie Chaston</div>
                    <div className='text-zinc-400'>¨horas - Palco do Sage</div>
                </div>

                <div></div>
                <div></div>

                <div>
                    <div className='font-bolt'>Jackie Chaston</div>
                    <div className='text-zinc-400'>6horas - Palco do Sage</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lineup