import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const products = [
    {
      name: "Kit Cola",
      price: 12.50,
      image: "https://boa.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fboa.vtexassets.com%2Farquivos%2Fids%2F575433%2FCoca-Cola-Original---Fanta-Laranja-2L-Cada.jpg%3Fv%3D638550511805100000"
    },
    {
      name: "Kit Cola",
      price: 12.50,
      image: "https://boa.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fboa.vtexassets.com%2Farquivos%2Fids%2F575433%2FCoca-Cola-Original---Fanta-Laranja-2L-Cada.jpg%3Fv%3D638550511805100000"
    },
    {
      name: "Kit Cola",
      price: 12.50,
      image: "https://boa.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fboa.vtexassets.com%2Farquivos%2Fids%2F575433%2FCoca-Cola-Original---Fanta-Laranja-2L-Cada.jpg%3Fv%3D638550511805100000"
    },
   
  ]
  const array = products.map((produto)=> {
    return (
    <div className="container">
    <div className="product">
      <img src={produto.image} className="image__product" />
      <div className="description">
        <h1>{produto.name}</h1>
        <p>R${produto.price}</p>
      </div>
    </div>
  </div>)
  })
  return (
    array
  )
}

export default App
