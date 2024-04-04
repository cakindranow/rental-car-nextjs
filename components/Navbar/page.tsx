'use client'
import Image from 'next/image'
import toogle from '@/public/toogle.svg'
import Google from '@/public/assets/google.png'
import { useRouter } from 'next/navigation'
import { MagnifyingGlass, ShoppingCartSimple, User } from '@phosphor-icons/react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Cookies from 'js-cookie';
import logo from '@/public/assets/logo.png'

const Navbar = () => {
  const router = useRouter()
  const handleClickHome = () => {
    router.push('/home')
  }
  const handleClickShop = () => {
    router.push('/home/cars')
  }
  const handleClickCart = () => {
    router.push('/home/cart')
  }
  const handleClickSignOut = () => {
    Cookies.remove('token')
    localStorage.clear()
    location.reload()
  }
  return (
    <div className='bg-color-white'>
      <nav className="flex justify-between items-center py-4 mx-64 ">
        <div className=''>
          <Image src={logo} alt='' className='w-20' />
        </div>
        <div className=' flex gap-20 items-center'>
          <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickHome}>Home</button>
          </div>
          <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickShop}>Shop</button>
          </div>
          <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickShop}>Blog</button>
          </div>
          <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickShop}>Pages</button>
          </div>
          <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickShop}>About Us</button>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='bg-color-E2F4C5 p-2 rounded-full'>
            <MagnifyingGlass size={25} className='opacity-60' />
          </div>
          <button>
          <div className='bg-color-DFF5FF p-2 rounded-full'>
            <Dropdown>
              <DropdownTrigger>
                  <User size={25} className='opacity-60' />
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem onClick={handleClickSignOut} key="delete" className="text-danger" color="danger">
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          </button>
          <div className='bg-color-EEF5FF p-2 rounded-full'>
            <button type='button' onClick={handleClickCart}>
              <ShoppingCartSimple size={25} className='opacity-70' />
            </button>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar