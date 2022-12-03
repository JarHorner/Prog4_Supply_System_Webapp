import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Add() {
    const navigate =  useNavigate();

    const [itemName, setItemName] = useState()
    const [itemId, setItemID] = useState()
    const [itemQuantity, setItemQuantity] = useState()
    const [itemPrice, setItemPrice] = useState()
    const [supplierID, setSupplierID] = useState()


    const updateItemName = (e) => {
        setItemName(e.target.value)
    }

    const updateItemID = (e) => {
        setItemID(e.target.value)
    }
    const updateItemQuantity = (e) => {
        setItemQuantity(e.target.value)
    }
    const updateItemPrice = (e) => {
        setItemPrice(e.target.value)
    }
    const updateSupplierID = (e) => {
        setSupplierID(e.target.value)
    }
   


    return (
        <div id="bodyContent" className=" w-screen h-screen flex flex-col bg-neutral-100">
            <div id="header" className=" p-5 h-16 items-center flex text-2xl ">
                <button onClick={() => { navigate(-1) }} >{"<  Assignment 3"}</button>
            </div>
            <form onSubmit={() => { }} className='flex flex-col'>


            <div className='flex p-2'>
                Item ID:
                <input
                    type="text"
                    onChange={updateItemID}
                />
            </div>

            <div className='flex p-2'>
                Item Name:
                <input
                    type="text"
                    onChange={updateItemName}
                />
            </div>
            <div className='flex p-2'>
                Item Quantity:
                <input
                    type="text"
                    onChange={updateItemQuantity}
                />
            </div>

            <div className='flex p-2'>
                Item Price:
                <input
                    type="text"
                    onChange={updateItemPrice}
                />
            </div>

            <div className='flex p-2'>
                Supplier ID:
                <input
                    type="text"
                    onChange={updateSupplierID}
                />
            </div>


            {console.log(itemName)}
        </form>
        </div>

        

    )
}

export default Add