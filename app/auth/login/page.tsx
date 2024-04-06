import Main from '@/components/Main/page'
import RighBar from '@/components/RightBar/page'
import React from 'react'
import LoginForm from '@/components/Form/login_input'
const Dashboard = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='w-[90%] h-screen '>
        <div className=' flex justify-center my-36'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold  flex justify-center gap-2 mb-1'>
              Log <span className='font-light'>In</span>
            </h1>
            <h1 className='text-lg font-light '>
            <span className='flex justify-center'>Rental Cars Login Account</span>
            </h1>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard