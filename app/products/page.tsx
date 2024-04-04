import { getProducts } from '@/lib/data'

const product = () => {
  const products = getProducts()
  console.log(products)
  return (
    <div>
       {products.map((product,index) => (
        <div key={product.id}>
            <h1>Index :{index+1}</h1>
            <h1>ID : {product.id}</h1>
            <h1>Price : {product.price}</h1>
            <h1>Product Name : {product.productName}</h1>
        </div>
       ))}
    </div>
  )
}

export default product