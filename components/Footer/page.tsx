'use client'
import { ChatDots, Hamburger, Tag, Truck, Wallet } from "@phosphor-icons/react"

const FooterComponent = () => {
    return (
        <footer className="h-[490px] w-full bg-color-blue-dark mt-28 bottom-0">
            <div className="flex flex-col">
                <div className="flex  mx-auto gap-28 mt-10">
                    <div className="text-color-white  flex flex-col items-center">
                        <Truck size={32} className="" />
                        <p className="text-sm mt-2">FAST DELIVERY</p>
                        <p className="font-light">Across West & East Sulawesi</p>
                    </div>
                    <div className="text-color-white  flex flex-col items-center">
                        <Wallet size={32} />
                        <p className="text-sm mt-2">SAFE PAYMENT</p>
                        <p className="font-light">100% Secure Payment</p>
                    </div>
                    <div className="text-color-white  flex flex-col items-center">
                        <Tag size={32} />
                        <p className="text-sm mt-2">ONLINE DISCOUNT</p>
                        <p className="font-light">Add Multi-buy Discounts</p>
                    </div>
                    <div className="text-color-white  flex flex-col items-center">
                        <ChatDots size={32} />
                        <p className="text-sm mt-2">HELP CENTER</p>
                        <p className="font-light">Dedicated 24/7 Support</p>
                    </div>
                    <div className="text-color-white  flex flex-col items-center">
                        <Hamburger size={32} />
                        <p className="text-sm mt-2">CURATED ITEMS</p>
                        <p className="font-light">From Handpicked Sellers</p>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-color-white mt-10 opacity-20"></div>
                <div className="flex mx-auto gap-20 mt-5">
                    <div className="text-color-white w-[250px]">
                        <p>LET US HELP YOU</p>
                        <p className="opacity-90 mt-10 font-light">If you have any question, please</p>
                        <p className="opacity-90 font-light mt-2">contact us <span className="text-color-green-brown">at:support@example.com</span></p>
                    </div>
                    <div className="text-color-white w-[250px]">
                        <p>LOOKING FOR CAR</p>
                        <p className="opacity-90 mt-10 font-light">68 St. Vicent Place, Glasgow, Greater Newyork NH2012, UK.</p>
                        <p className="opacity-90 font-light mt-2 flex gap-1">Monday – Friday: 8:10 AM – 6:10 PM</p>
                        <p className="opacity-90 font-light mt-2 flex gap-1">Saturday: 10:10 AM – 06:10 PM</p>
                        <p className="opacity-90 font-light mt-2 flex gap-1">Sunday: Close</p>
                    </div>
                    <div className="text-color-white w-[250px]">
                        <p>HOT BRAND</p>
                        <p className="opacity-90 font-light mt-10 flex gap-1">Toyota</p>
                        <p className="opacity-90 font-light mt-2 flex gap-1">Mitsubishi</p>
                        <p className="opacity-90 font-light mt-2 flex gap-1">Honda</p>
                        <p className="opacity-90 font-light mt-2 flex gap-1">Nissan</p>
                        <p className="opacity-90 font-light mt-2 flex gap-1">Hyundai</p>

                    </div>
                    <div className="h-[220px] w-[1px] bg-color-white opacity-20"></div>
                    <div className="text-color-white w-[250px]">
                        <p>OUR NEWSLETTER</p>
                        <p className="opacity-90 mt-10 font-light">Subscribe to the Orfarm mailing list to receive updates on new arrivals & other information.</p>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-color-white mt-5 opacity-20"></div>
                <div className="text-color-white flex flex-row justify-center mt-5">
                <p className="flex gap-1">Copyright © <span className="text-color-green-brown">ORFARM</span>  all rights reserved. Powered by <span className="text-color-green-brown">ThemePure.</span> </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent