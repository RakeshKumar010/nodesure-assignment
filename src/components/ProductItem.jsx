import React from 'react'

const ProductItem = ({value}) => {
  return (
    <div className="lg:w-1/6 w-1/2  bg-white lg:rounded-xl">
    <img
      src={value.imgUrl}
      alt=".."
      className="w-full bg-blend-multiply rounded-t-xl"
    />
    <div className="flex items-start flex-col lg:p-4 p-3  gap-3">
      <p className="text-lg ">{value.name}</p>

      <div className="flex items-center gap-2">
          <p className="text-lg">${value.price}</p>
          <p className="text-green-600 font-semibold">{Math.floor(Math.random() * 100)}% off</p>
        </div>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 lg:items-center justify-between w-full">
      <div className="flex  items-center gap-1">
        <p className="text-start bg-green-600 text-white p-1 rounded-sm">
          {(Math.random() * 5).toFixed(1)}★
        </p>
        <p>({Math.floor(Math.random() * 1000)})</p>
      </div>

        <button className="uppercase p-2 border-2 rounded-lg bg-indigo-400 text-white font-bold shadow-md">
          Add to cart
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProductItem;