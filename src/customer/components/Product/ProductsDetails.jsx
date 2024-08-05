
import { useEffect, useState } from 'react'
import { data } from './ProductData'
import { Radio, RadioGroup } from '@headlessui/react'

import { Button, Grid, LinearProgress, Rating,Box } from '@mui/material'
import ProductReveiwCard from './ProductReveiwCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductById } from '../../../state/Product/Action.js'
import { addItemToCart } from '../../../state/Cart/Action.js'

const produc = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
   
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ProductsDetails() {
  const dispatch=useDispatch()
  const [selectedSize, setSelectedSize] = useState(produc.sizes[2])
  const {product} =useSelector(store=>store)  
  const navigate=useNavigate()
  
  const params=useParams();
  console.log("-----------",params)
  
  useEffect(()=>{
    dispatch(findProductById(params))
  },[params.productId])  

  const locat=useParams()
  
  const handleAddToCart=()=>{
    console.log(locat)
    dispatch(addItemToCart(locat))
    navigate("/cart")
  }
  

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            {produc.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

<section className='grid grid-cols-1 px-4 pt-10 lg:grid-cols-2 gap-x-8 gap-y-10' >
        {/* Image gallery */}
        <div className="flex flex-col items-center ">
          <div className='overflow-hidden max-w-[30rem] max-h-[35rem] rounded-lg mb-1' >
            <img
              src={product.product?.imageUrl}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex flex-wrap justify-between gap-5 px-20 ">
                {
                    product.product?.images?.map((item)=>
                    <div className="max-w-[5rem] max-h-[5rem]  ">
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
                    )
                }
            
            
           
          </div>
         
        </div>

        {/* Product info */}
        <div className="max-w-2xl px-4 pb-16 lg:col-span-1 maxt-auto sm:px-6 lg:max-w-7xl lg:pb-24">
          <div className="lg:col-span-2 ">
            <h1 className="text-lg font-semibold text-gray-900 lg:text-xl">{product.product?.brand}</h1>
            <h1 className="pt-1 text-lg font-semibold text-gray-900 lg:text-xl opacity-60">{product.product?.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className='flex items-center mt-6 space-x-5 text-lg text-gray-900 lg:text-xl' >
              <p className='font-bold' >{`₹ ${product.product?.discountedPrice}`}</p>
              <p className='text-lg font-thin line-through' >{`₹ ${product.product?.price}`}</p>
              <p className='text-2xl text-green-500 font-2extrabold' >{`₹ ${product.product?.discount}`}</p>
            </div>-

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className='flex flex-wrap items-center space-x-3 ' >
              <Rating value={4} readOnly={true}/>
              <p className='opacity-50 mtext-sm' >3450 Ratings</p>
              <p className='text-sm font-medium text-indigo-500 cursor-pointer hover:text-indigo-800' >1344 Reveiws</p>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              {/* <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={({ focus, checked }) =>
                          classNames(
                            color.selectedClass,
                            focus && checked ? 'ring ring-offset-1' : '',
                            !focus && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div> */}

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.product?.sizes?.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ focus }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            focus ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ checked, focus }) => (
                          <>
                            <span>{size.name}</span>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  focus ? 'border' : 'border-2',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>  
                              </span>
                            )}
                          </>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

             <Button  onClick={handleAddToCart} variant='contained' sx={{mt:"1rem", p:".65rem"}} >
              Add to Cart
             </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900"> ${product.product?.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  {product.highlights?.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
</section>

{/* Rating and Review */}
<section>
  <h1 className='pl-4 text-lg font-semibold'   > Recent Review & Rating</h1>
  <div className='flex flex-wrap p-5 border' >
  <Grid container spacing={2} className='flex flex-wrap'>
      <Grid item xs={12} md={7}>
        <Box className='space-y-5'>
          {[1, 2].map((item) => (
            <ProductReveiwCard 
            key={item} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <h1 className='text-lg font-bold'>Product Ratings</h1>
        <Box className='flex flex-wrap items-center space-x-3'>
          <Rating value={3.5} precision={0.5} readOnly />
          <p className='opacity-50'>23443 Ratings</p>
        </Box>
        <Box className="m-4">
          <Grid container alignItems="center" gap={2}>
            <Grid item xs={4} sm={2}>
              <p>Excellent</p>
            </Grid>
            <Grid item xs={8} sm={10}>
              <LinearProgress sx={{ borderRadius: 3, height: 7 }} variant='determinate' value={40} color='success' />
            </Grid>
          </Grid>
          <Grid container alignItems="center" gap={2}>
            <Grid item xs={4} sm={2}>
              <p>V. Good</p>
            </Grid>
            <Grid item xs={8} sm={10}>
              <LinearProgress sx={{ borderRadius: 3, height: 7 }} variant='determinate' value={20} color='success' />
            </Grid>
          </Grid>
          <Grid container alignItems="center" gap={2}>
            <Grid item xs={4} sm={2}>
              <p>Good</p>
            </Grid>
            <Grid item xs={8} sm={10}>
              <LinearProgress sx={{ borderRadius: 3, height: 7 }} variant='determinate' value={30} color='warning' />
            </Grid>
          </Grid>
          <Grid container alignItems="center" gap={2}>
            <Grid item xs={4} sm={2}>
              <p>Average</p>
            </Grid>
            <Grid item xs={8} sm={10}>
              <LinearProgress sx={{ borderRadius: 3, height: 7 }} variant='determinate' value={30} color='info' />
            </Grid>
          </Grid>
          <Grid container alignItems="center" gap={2}>
            <Grid item xs={4} sm={2}>
              <p>Poor</p>
            </Grid>
            <Grid item xs={8} sm={10}>
              <LinearProgress sx={{ borderRadius: 3, height: 7 }} variant='determinate' value={30} color='error' />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
    
  </div>
</section>

{/* Similar Products */}
<section>
  <h1 className='p-10 text-xl font-bold' >Similar Products</h1>
  <div className='flex flex-wrap items-center justify-center' >
  {data.map((item)=> <div className='w-[12rem] m-3 transition-all cursor-pointer hover:scale-105'>
      <div  className='h-[13rem]  bg-red-200  rounded-lg  '>
        <img className='object-cover object-left-top w-full h-full rounded-md' src={item.img} alt="" />
      </div>
      <div className='p-3 bg-gray-200 rounded-md ' >
        <p className='font-bold opacity-60'  >{item.brand}</p>
        <p className='' >{item.title}</p>
        
      
      <p> <span className='text-xl font-semibold' >₹{item.o_price} </span> 
      <span className='line-through' >₹{item.ac_price}</span>
      <span className='text-xl text-red-400' > {item.dis}%  off</span>
      </p>
      </div>

    </div>)}
  </div>
</section>
      </div>
    </div>
  )
}
