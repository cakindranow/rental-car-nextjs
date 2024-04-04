"use client"
import Image from "next/image"
import PeopleMain from '@/public/assets/people.png'
import ClipPath from '@/public/assets/Clip path group.svg'
import ClipPathMini from '@/public/assets/Path 734.svg'
import { Question, RocketLaunch } from "@phosphor-icons/react"
import CheckBrokenMark from '@/public/assets/check-broken.svg'
import ProgressMark from '@/public/assets/progress.svg'
import AlarmMark from '@/public/assets/alarm-plus.svg'
import CheckBrokenCompleteMark from '@/public/assets/check-broken (1).svg'
import { TotalWorkAreaChart } from "../Chart/Area/total_work"
import { TotalProgressAreaChart } from "../Chart/Area/total_progress"
import { ProgressDoughnutChart } from "../Chart/Doughnut/progress"
ProgressDoughnutChart


const Main = () => {
    return (
        <div className="col-span-9 h-full rounded-2xl">
            <div className="bg-color-white pt-7 rounded-3xl mx-4 mb-10 shadow-xl">
                <div className="ml-10">
                    <h1 className="font-bold text-2xl m-7">Dashboard</h1>
                    <section className="flex mt-10 w-full h-60 rounded-3xl">
                        <div className="flex-col-12 p-7">
                            <h2 className="font-light text-4xl">Welcome to</h2>
                            <h2 className="font-bold text-4xl mt-2">Your Task Management Area</h2>
                            <p className="mt-3 font-light text-xl">Lorem ipsum dolor sit amet consectetur. Bibendum risus urna tortor praesent.</p>
                            <button className="bg-color-primary w-24 h-10 mt-6 text-sm rounded-full text-color-white">Learn More</button>
                        </div>
                        <div className="flex-col ml-18">
                            <Image className="mt-7 w-20" src={ClipPath} alt="clip path" />
                            <Image className="mt-12 w-16" src={ClipPathMini} alt="clip path mini" />
                        </div>
                        <Image className="my-auto w-[350px] h-[280px] ml-4" src={PeopleMain} alt="people main" />

                    </section>
                </div>

                <div className="flex justify-around mx-5 mt-28 pb-10">
                    <a href="" className=" mt-10 flex h-[90px] w-[210px] shadow-xl bg-color-primary rounded-full items-center justify-center gap-2">
                        <div className=" ml-1 w-12 h-12 rounded-full bg-color-white flex items-center justify-center">
                            <Image src={CheckBrokenMark} className="w-8" alt="check broken mark" />
                        </div>

                        <div className="ml-2 flex flex-col ">
                            <span className="text-lg text-color-white flex justify-center">1220</span>
                            <span className="text-m text-color-white flex justify-center">Total Task</span>
                        </div>
                    </a>
                    <a href="" className=" mt-10 flex h-[90px] w-[210px] shadow-xl bg-color-blue-green rounded-full items-center justify-center gap-2">
                        <div className=" ml-1 w-12 h-12 rounded-full bg-color-white flex items-center justify-center">
                            <Image src={ProgressMark} className="w-8" alt="check broken mark" />
                        </div>

                        <div className="ml-2 flex flex-col ">
                            <span className="text-lg text-color-white flex justify-center">1220</span>
                            <span className="text-m text-color-white flex justify-center">InProgress</span>
                        </div>
                    </a>
                    <a href="" className=" mt-10 flex h-[90px] w-[210px] shadow-xl bg-color-pink-red rounded-full items-center justify-center gap-2">
                        <div className=" ml-1 w-12 h-12 rounded-full bg-color-white flex items-center justify-center">
                            <Image src={AlarmMark} className="w-8" alt="check broken mark" />
                        </div>

                        <div className="ml-2 flex flex-col ">
                            <span className="text-lg text-color-white flex justify-center">1220</span>
                            <span className="text-m text-color-white flex justify-center">Pending</span>
                        </div>
                    </a>
                    <a href="" className=" mt-10 flex h-[90px] w-[210px] shadow-xl bg-color-green-white rounded-full items-center justify-center gap-2">
                        <div className=" ml-1 w-12 h-12 rounded-full bg-color-white flex items-center justify-center">
                            <Image src={CheckBrokenCompleteMark} className="w-8" alt="check broken mark" />
                        </div>

                        <div className="ml-2 flex flex-col ">
                            <span className="text-lg text-color-white flex justify-center">1220</span>
                            <span className="text-m text-color-white flex justify-center">Completed</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="flex justify-between mx-5">
                <div className="bg-color-white p-8 rounded-3xl shadow-xl">
                    <span className="text-2xl font-bold">Total Work</span>
                    <div className="w-[450px] h-[280px] mt-5">
                        <TotalWorkAreaChart />
                    </div>
                </div>
                <div className="bg-color-white p-8 rounded-3xl shadow-xl">
                    <span className="text-2xl font-bold">Total Progress</span>
                    <div className="w-[430px] h-[300px] mt-5 ">
                        <ProgressDoughnutChart />
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Main