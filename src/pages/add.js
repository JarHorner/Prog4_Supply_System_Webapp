import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AddNewItem} from '../calls/ItemCalls'


function Add() {
    const navigate =  useNavigate();

    const [itemName, setItemName] = useState()
    const [itemId, setItemID] = useState()
    const [itemQuantity, setItemQuantity] = useState()
    const [itemPrice, setItemPrice] = useState()
    const [supplierID, setSupplierID] = useState()
    const [clickState, setClick]  = useState(false)
    const [successMessage, setSuccess] = useState();


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
   
    async function addItem() {
        var response = await AddNewItem(itemName, itemId, itemPrice, itemQuantity, supplierID)
        if (response.status !== 200 ){
            setSuccess(<h1 color='red'>Something went wrong : {response.message}</h1>)
          } else {
            setSuccess(<h1 color='green'>Item Added Successfully</h1>)
            setItemName('')
            setItemID('')
            setItemQuantity('')
            setItemPrice('')
            setSupplierID('')
          }  
    }


    return (
        <div id="bodyContent" className=" w-screen h-screen flex flex-col bg-neutral-100 " >
            <div id="header" className=" p-5 h-16 items-center flex text-2xl ">
                <button onClick={() => { navigate(-1) }} >{"<"}</button>
                <h1 className='content-center'>Assignment 3</h1>
            </div>
            
            <form onSubmit={() => { }} className='flex flex-col'>


            <div className='flex p-2'>
                Item ID:
                <input
                    type="text"
                    onChange={updateItemID}
                    className=" drop-shadow-xl p-2 rounded-2xl"
                    value={itemId}
                />
            </div>

            <div className='flex p-2'>
                Item Name:
                <input
                    type="text"
                    onChange={updateItemName}
                    className=" drop-shadow-xl p-2 rounded-2xl"
                    value={itemName}
                />
            </div>
            <div className='flex p-2'>
                Item Quantity:
                <input
                    type="text"
                    onChange={updateItemQuantity}
                    className=" drop-shadow-xl p-2 rounded-2xl"
                    value={itemQuantity}
                />
            </div>

            <div className='flex p-2'>
                Item Price:
                <input
                    type="text"
                    onChange={updateItemPrice}
                    className=" drop-shadow-xl p-2 rounded-2xl"
                    value={itemPrice}
                />
            </div>

            <div className='flex p-2'>
                Supplier ID:
                <input
                    type="text"
                    onChange={updateSupplierID}
                    className=" drop-shadow-xl p-2 rounded-2xl"
                    value={supplierID}
                />
            </div>

            <div id='submit' >
                <div onClick={()=>{setClick(!clickState); addItem()}} className=" bg-blue-700 text-white p-2 w-30 rounded-full drop-shadow-xl">Add Item </div>
            </div>
            <div>
                {successMessage}
            </div>
        </form>
        </div>

        

    )
}

export default Add