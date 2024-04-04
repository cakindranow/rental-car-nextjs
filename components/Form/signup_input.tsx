'use client'
import { ArrowRight } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { postSignup } from '@/lib/user'
import { Progress } from '@nextui-org/react'

const SignUpForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "", name: "" });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const data = await postSignup(formData)
        if (data.header.error == false) {
            setTimeout(() => {
                router.push('/auth/login');
            }, 2000);
            // setIsLoading(false);
        }
        else {
            setError(data.header.message)
            setIsLoading(false);
        }
    }

    return (
        <div>
            {
                isLoading ? 
                <Progress
                size="sm"
                isIndeterminate
                aria-label="Loading..."
                className="max-w-md mt-2"
              /> :
              <></>
            }
            {error ?
                <div className="flex items-center p-4 mt-5 text-sm text-color-red border border-color-red rounded-lg bg-color-red-bg-alert" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Danger alert!</span> {error}
                    </div>
                </div>
                :
                <></>
            }
            <form onSubmit={handleSubmit} className="rounded w-[450px] mb-4 h-[260px] ">
                <div className='flex flex-col '>
                    <div className='flex my-4 gap-3 '>
                        <div className='flex-col h-[40px] my-4'>
                            <div className='flex justify-end'>
                                <label className="font-light text" htmlFor="fullname">
                                    Full Name
                                </label>
                            </div>
                            <div className='flex justify-end mt-6'>
                                <label className="font-light text" htmlFor="email">
                                    Email
                                </label>
                            </div>
                            <div className='flex justify-end my-7'>
                                <label className="font-light text" htmlFor="password">
                                    Password
                                </label>
                            </div>
                        </div>

                        <div className='h-[120px] my-3 w-[300px] '>
                            <div className=''>
                                <input required onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="appearance-none border rounded w-full py-1.5 px-3 text-color-primary y leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" />
                            </div>
                            <div className='mt-4'>
                                <input required onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="appearance-none border rounded w-full py-1.5 px-3 text-color-primary y leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
                            </div>
                            <div className='mt-4'>
                                <input required onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="appearance-none border border-red-500 rounded w-full py-1.5 px-3 text-color-primary mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                            </div>
                        </div>
                    </div>

                    {/* <a href="#" className='font-light ml-[70px]'>Forgot your password ?</a> */}
                    <div className='flex ml-[15%]'>
                        <button type='submit' className='w-[330px] mt-2 flex flex-row items-center gap-2 text-color-white font-light justify-center bg-color-primary hover:opacity-80 h-10 rounded'>
                            Submit
                            <ArrowRight size={19} className='mt-0.5' />
                        </button>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default SignUpForm