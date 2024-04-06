import FooterComponent from '@/components/Footer/page'
import HomeComponent from '@/components/Main/home'
import Main from '@/components/Main/page'
import Navbar from '@/components/Navbar/page'
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const Dashboard = () => {
  if(cookies().has('token')) {
    const isAdmin = cookies().get('is_admin')?.value
    return (
      <div className='bg-color-secondary'>
        <Navbar is_admin={isAdmin}/>
        <HomeComponent/>
        <FooterComponent/>
      </div>
    )
  } else {
    redirect('auth/login')
  }
  
}

export default Dashboard