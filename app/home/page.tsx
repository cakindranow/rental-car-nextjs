import FooterComponent from '@/components/Footer/page'
import HomeComponent from '@/components/Main/home'
import Main from '@/components/Main/page'
import Navbar from '@/components/Navbar/page'
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const Dashboard = () => {
  if(cookies().has('token')) {
    return (
      <div className='bg-color-secondary'>
        <Navbar/>
        <HomeComponent/>
        <FooterComponent/>
      </div>
    )
  } else {
    redirect('auth/login')
  }
  
}

export default Dashboard