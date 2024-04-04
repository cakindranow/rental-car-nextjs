'use client'
import { PlusCircle } from '@phosphor-icons/react'
import React from 'react'

const HomeProject = () => {
    return (
        <div className='pt-14 pl-16 mr-11'>
            <h1 className='font-light text-2xl'>List project</h1>
            <div className='flex items-center justify-end'>
                <button className='bg-color-primary w-44 bottom-10 fixed h-32 rounded-3xl'>
                <PlusCircle size={34} className='text-color-white mx-auto my-1' />
                <span className='text-color-white text-sm'>Add New Project</span>
                </button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-7">
                <div className='border-color-primary border-2 h-64 rounded-xl'>
                    <div className='flex justify-center  h-40'>Imge</div>
                    <h1 className='mt-3 ml-5 font-bold text-m'>My Project</h1>
                    <p className='mt-3 ml-5 font-light text-m'>work management Main workspace</p>
                </div>
                <div className='border-color-primary border-2 h-64 rounded-xl'>
                    <div className='flex justify-center  h-40'>Imge</div>
                    <h1 className='mt-3 ml-5 font-bold text-m'>My Project</h1>
                    <p className='mt-3 ml-5 font-light text-m'>work management Main workspace</p>
                </div>
                <div className='border-color-primary border-2 h-64 rounded-xl'>
                    <div className='flex justify-center  h-40'>Imge</div>
                    <h1 className='mt-3 ml-5 font-bold text-m'>My Project</h1>
                    <p className='mt-3 ml-5 font-light text-m'>work management Main workspace</p>
                </div>
                <div className='border-color-primary border-2 h-64 rounded-xl'>
                    <div className='flex justify-center  h-40'>Imge</div>
                    <h1 className='mt-3 ml-5 font-bold text-m'>My Project</h1>
                    <p className='mt-3 ml-5 font-light text-m'>work management Main workspace</p>
                </div>
                
            </div>

        </div>
    )
}

export default HomeProject