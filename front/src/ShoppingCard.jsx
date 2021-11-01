import React, { Component } from 'react'
import Product from './Product'

export default class ShoppingCard extends Component{
    state={
        products:[
            {
                id:1,
                name:'scissors',
                price:900
            },
            {
                id:2,
                name:'pencil',
                price:200
            },
            {
                id:3,
                name:'cPainting canvas',
                price:400
            },
            {
                id:4,
                name:'sticky notes',
                price:200
            },
        ]
    }
    render()
    {
        return(
            <div className="container-fluid">
            <h4>Shopping Card </h4>
            <div className="row">
            {
                 this.state.products.map((item)=>{
                    return(
                             <Product key={item.id} id={item.id} name={item.name} price={item.price} />
                    )
                })
            }

            </div>
            </div>
)
}}