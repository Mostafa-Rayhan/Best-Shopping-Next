import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'
import Slider from '@/components/Slider'
// import Dummy from '@/components/Dummy'

export default function Home() {
  const { products } = data
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className='mt-16'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>  
      </div>
       
      {/* <div>
        <Dummy />
      </div> */}
    </div>
  )
}
