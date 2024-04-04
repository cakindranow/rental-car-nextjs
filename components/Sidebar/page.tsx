"use client"
import { ClockCounterClockwise, DotsNine, House, Notebook, PlusCircle, PlusSquare, User, UserCircle } from '@phosphor-icons/react'
import { ChartPolar } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React from 'react'
const Sidebar = (active : number) => {
    const router = useRouter()
    const handleClickListProject = ()=> {
        router.push('/project')
    }
    const handleClickHome = ()=> {
        router.push('/home')
    }
    return (
        <aside className='default-sidebar fixed top-0 left-0 bg-color-white w-64 h-screen transition-transform shadow-xl'>
            <div className='p-8'>
                <ul className=''>
                    <li className='flex p-2 rounded-lg bg-color-secondary'>
                        <DotsNine size={32} />
                        <button type='button' onClick={handleClickHome} className='ml-2 font-poppins font-light'>Dashboard</button>
                    </li>
                    <li className='mt-2 flex hover:bg-color-secondary p-2 hover:rounded-lg'>
                        <ChartPolar size={32} className='opacity-60'/>
                        <a href="#" className='ml-2 font-poppins font-light'>Tracking</a>
                    </li>
                    <li className='mt-2 flex hover:bg-color-secondary p-2 hover:rounded-lg'>
                        <Notebook size={32}  className='opacity-60'/>
                        {/* <a href="#" className='ml-2 font-poppins font-light'>Project</a> */}
                        <button type='button' onClick={handleClickListProject} className='ml-2 font-poppins font-light' >Project</button>
                    </li>
                    <li className='mt-2 flex hover:bg-color-secondary p-2 hover:rounded-lg'>
                        <ClockCounterClockwise size={32}  className='opacity-60'/>
                        <a href="#" className='ml-2 font-poppins font-light'>Work Story</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-color-primary w-44 bottom-10 absolute h-32 rounded-3xl '>
                <PlusCircle size={34} className='text-color-white mx-auto my-1' />
                <span className='text-color-white text-sm'>Add New Task</span>
                </button>
            </div>

        </aside>
    )
}

export default Sidebar