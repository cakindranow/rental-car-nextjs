import React from 'react'

const SidebarListCar = () => {
  return (
    <div className=' w-[560px]'> 
    <div className='w-[280px] h-[700px] mx-64 mt-16 rounded-xl bg-color-white flex flex-col'>
      <p className='ml-10 mt-10 text-sm font-bold opacity-70'>PRODUCT CATEGORIES</p>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Vegetable <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Fresh Fruits <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Fruit Drink <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Fresh Bakery <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Biscuits Snack <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Fresh Meat <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Fresh Milk <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Sea Foods <span>(7)</span></p>
      </div>

      <hr className="h-px my-8 bg-color-primary opacity-40 w-[70%] ml-10"/>

      <p className='ml-10 text-sm font-bold opacity-70'>FILTER BY BRANDS</p>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Vegetable <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Fresh Fruits <span>(7)</span></p>
      </div>
      <div className='mt-5 ml-10 flex gap-2'>
        <input type="checkbox" className='opacity-50' value="" name='vegetable'/>
        <p className='text-sm font-light'>Fruit Drink <span>(7)</span></p>
      </div>
    </div>
    </div>
  )
}

export default SidebarListCar