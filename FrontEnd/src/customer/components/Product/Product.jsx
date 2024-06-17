import React from 'react'
import ProductCard from './ProductCard'
const data=[
  
  {
  
     brand:"Vikas",
      decrription:"Mens blue Kurta",
      img:"https://www.tistabene.com/cdn/shop/products/KRT-0312A.jpg?v=1694081057&width=5000",
      
      title:"Kurta",
      o_price:"100",
      ac_price:"1000",
      dis:"71",
  },
  {   
      
      brand:"Aikas",
      decrription:"Mens White Kurta",
      
      title:"Kurta",
      o_price:"109",
      ac_price:"100",
      dis:"49",
      img:"https://www.tistabene.com/cdn/shop/files/KRT-0286A.jpg?v=1702894114&width=5000"
  },
  {   brand:"Nitofir",
      decrription:"Mens red Kurta",
      title:"Kurta",
      o_price:"190",
      ac_price:"400",
      dis:"52",
      img:"https://www.tistabene.com/cdn/shop/files/KRT-0314A_720x_773448e8-81b8-4a54-9aa7-0f08dabdd0db.webp?v=1702484034&width=5000"
  },
  {   brand:"Vikas",
      decrription:"Mens blue Kurta",
      title:"Kurta",
      o_price:"100",
      ac_price:"1000",
      dis:"71",
      img:"https://www.tistabene.com/cdn/shop/files/KRT-0311A.jpg?v=1702039279&width=5000"
  },
  {
      brand:"Vikas",
       decrription:"Mens blue Kurta",
       title:"Kurta",
       o_price:"100",
       ac_price:"1000",
       dis:"71",
       img:"https://www.tistabene.com/cdn/shop/products/KRT-0312A.jpg?v=1694081057&width=5000"
   },
   {   
       
       brand:"Aikas",
       decrription:"Mens White Kurta",
       title:"Kurta",
       o_price:"100",
       ac_price:"1000",
       dis:"71",
       img:"https://www.tistabene.com/cdn/shop/files/KRT-0286A.jpg?v=1702894114&width=5000"
   },
   {   brand:"Nitofir",
       decrription:"Mens red Kurta",
       title:"Kurta",
       o_price:"100",
       ac_price:"1000",
       dis:"71",
       img:"https://www.tistabene.com/cdn/shop/files/KRT-0314A_720x_773448e8-81b8-4a54-9aa7-0f08dabdd0db.webp?v=1702484034&width=5000"
   },
   {   brand:"Vikas",
       decrription:"Mens blue Kurta",
       title:"Kurta",
       o_price:"100",
       ac_price:"1000",
       dis:"71",
       img:"https://www.tistabene.com/cdn/shop/files/KRT-0311A.jpg?v=1702039279&width=5000"
   },
 

]
// const Product = () => {
//   return (
//     <div className="grid justify-center grid-cols-1 gap-4 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {data.map((item, index) => (
//         <div key={index} className="w-[15rem] m-3 transition-all cursor-pointer hover:scale-105">
//           <ProductCard item={item} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Product

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { filters, singleFilters } from './ProductData'

const sortOptions = [
 
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen}>
          <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                  
                  

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="px-4 py-6 border-t border-gray-200">
                        {({ open }) => (
                          <>
                            <h3 className="flow-root -mx-2 -my-3">
                              <DisclosureButton className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="flex items-center ml-6">
                                  {open ? (
                                    <MinusIcon className="w-5 h-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="w-5 h-5" aria-hidden="true" />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="flex-1 min-w-0 ml-3 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                     {singleFilters.map((section) => (
                      <Disclosure as="div" key={section.id} className="px-4 py-6 border-t border-gray-200">
                        {({ open }) => (
                          <>
                            <h3 className="flow-root -mx-2 -my-3">
                              <DisclosureButton className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="flex items-center ml-6">
                                  {open ? (
                                    <MinusIcon className="w-5 h-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="w-5 h-5" aria-hidden="true" />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="flex-1 min-w-0 ml-3 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          {({ focus }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                focus ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>

              <button type="button" className="p-2 ml-5 -m-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
               

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="py-6 border-b border-gray-200">
                    {({ open }) => (
                      <>
                        <h3 className="flow-root -my-3">
                          <DisclosureButton className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="flex items-center ml-6">
                              {open ? (
                                <MinusIcon className="w-5 h-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="w-5 h-5" aria-hidden="true" />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {singleFilters.map((section) => (
                  <Disclosure as="div" key={section.id} className="py-6 border-b border-gray-200">
                    {({ open }) => (
                      <>
                        <h3 className="flow-root -my-3">
                          <DisclosureButton className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="flex items-center ml-6">
                              {open ? (
                                <MinusIcon className="w-5 h-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="w-5 h-5" aria-hidden="true" />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className='flex flex-row flex-wrap justify-center' >
                {data.map((item)=>(<div>
                  <ProductCard item={item}/>
                  </div>))}
                  </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
