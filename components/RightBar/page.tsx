import Image from 'next/image'
import React from 'react'
import Rocket from '@/public/assets/rocket.png'
import QuestionMark from '@/public/assets/question-mark.png'

const RighBar = () => {
  return (
    <div className="col-span-3 h-screen bg-color-white p-4 rounded-3xl">
    <h1 className="font-bold text-xl m-5">Learn & Get Inspired</h1>
    <div className=" mt-4 flex flex-col gap-10 ">
        <a href="#" className="flex flex-row bg-color-white w-60 py-2 rounded-xl">
            <Image src={Rocket} alt="rocket" className="w-8 h-8 mx-2 my-auto" />
            <div className="flex flex-col ml-1 justify-start">
                <span className="font-bold text-sm ">Getting Started</span>
                <span className="text-sm font-light">Learn how monday works</span>
            </div>
        </a>

        <a href="#" className="flex flex-row bg-color-white w-60 py-2 rounded-xl">
            <Image src={QuestionMark} alt="question mark" className="w-8 h-8 mx-2 my-auto" />
            <div className="flex flex-col ml-1 justify-start">
                <span className="font-bold text-sm ">Help Center</span>
                <span className="text-sm font-light">Learn and get support</span>
            </div>
        </a>
    </div>

</div>
  )
}

export default RighBar