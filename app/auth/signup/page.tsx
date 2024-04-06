'use client'
import Main from '@/components/Main/page'
import RighBar from '@/components/RightBar/page'
import React, { FormEvent, useState } from 'react'
import LoginForm from '@/components/Form/login_input'
import SignUpForm from '@/components/Form/signup_input'
import { postSignup } from '@/lib/user'
import { useRouter } from 'next/router'



const Dashboard = () => {
  return (
    <>
    <div className='flex h-screen justify-center items-center'>
      <div className='w-[90%] h-screen '>
        <div className=' flex justify-center my-36'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold  flex justify-center gap-2 mb-1'>
              Sign <span className='font-light'>Up</span>
            </h1>
            <h1 className='text-lg font-light '>
            <span className='flex justify-center'>Rental Cars Registration Account</span>
            </h1>
            <SignUpForm/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard