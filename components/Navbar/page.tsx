'use client'
import Image from 'next/image'
import toogle from '@/public/toogle.svg'
import Google from '@/public/assets/google.png'
import { useRouter } from 'next/navigation'
import { MagnifyingGlass, ShoppingCartSimple, User } from '@phosphor-icons/react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Cookies from 'js-cookie';
import logo from '@/public/assets/logo.png'
import NextNProgress from 'nextjs-progressbar';

interface Props {
  is_admin: string | undefined
}

const Navbar = ({ is_admin }: Props) => {
  const router = useRouter()
  const handleClickHome = () => {
    router.push('/home')
  }
  const handleClickShop = () => {
    router.push('/home/cars')
  }
  const handleClickOrder = () => {
    router.push('/home/cars/order')
  }

  const handleClickAdminUser = () => {
    router.push('/home/admin/users')
  }
  const handleClickAdminCars = () => {
    router.push('/home/admin/cars')
  }
  const handleClickAdminOrders = () => {
    router.push('/home/admin/orders')
  }



  const handleClickSignOut = () => {
    Cookies.remove('token')
    localStorage.clear()
    location.reload()
  }
  return (
    <div className='bg-color-white'>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <nav className="flex justify-between items-center py-4 mx-64 ">
        <div className=''>
          <p className='font-bold text-color'>Rental Aja</p>
        </div>
        <div className=' flex gap-20 items-center'>
          <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickHome}>Home</button>
          </div>
          <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickShop}>Cars</button>
          </div>
          <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickOrder}>Order</button>
          </div>
          {
            is_admin == "true" ?
            <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickShop}>
              <Dropdown>
                <DropdownTrigger>
                  Admin Panel
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem onClick={handleClickAdminCars}>Cars</DropdownItem>
                  <DropdownItem onClick={handleClickAdminOrders}>Orders</DropdownItem>
                  <DropdownItem onClick={handleClickAdminUser}>User</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </button>
          </div> : <></>
          }
          {/* <div>
            <button type='button' className='hover:text-color-green font-semibold' onClick={handleClickShop}>About Us</button>
          </div> */}
        </div>
        <div className='flex gap-4 items-center'>
          {/* <div className='bg-color-E2F4C5 p-2 rounded-full'>
            <MagnifyingGlass size={25} className='opacity-60' />
          </div> */}
          <button className='hover:opacity-70'>
            <div className='bg-color-DFF5FF p-2 rounded-full'>
              <Dropdown>
                <DropdownTrigger>
                  <User size={25} className='opacity-60' />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">Profle</DropdownItem>
                  <DropdownItem onClick={handleClickSignOut} key="delete" className="text-danger" color="danger">
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </button>
          {/* <div className='bg-color-EEF5FF p-2 rounded-full'>
            <button type='button'>
              <ShoppingCartSimple size={25} className='opacity-70' />
            </button>
          </div> */}
        </div>
      </nav>
    </div>

  )
}

export default Navbar