import CartComponent from '@/components/Cart/page';
import FooterComponent from '@/components/Footer/page';
import Navbar from '@/components/Navbar/page';
import OrderCarComponent from '@/components/Shop/order_car';
import CarDetailComponent from '@/components/Shop/product_detail';
import ProductDetailComponent from '@/components/Shop/product_detail';
import { CarResponseInterface } from '@/interface/car';
import { ProductDetailProps, ProductInterface } from '@/interface/product';
import { getCarById } from '@/lib/car';
import { ProductType, getProductByIdResponse } from '@/lib/product';
import Cookies from 'js-cookie';
import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';

const Page = async ({ params }: ProductDetailProps) => {
  const {id} = params
  const token = cookies().get('token')?.value
  const car : CarResponseInterface = await getCarById(id, token)

  if (car) {
    return (
      <div className='flex flex-col h-full bg-color-gray'>
            <Navbar/>
            <OrderCarComponent car={car} token={token}/>
            <FooterComponent/>
        </div>
    )
  } else {
    return (
      <div>NOT FOUND</div>
    )
  }
 
}

export default Page