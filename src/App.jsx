import React from 'react'
import Smartphone from './components/Smartphone'

const smartphones = [
  {
    name: "Samsung S22 ultra",
    image: "https://carisinyal.com/wp-content/uploads/2022/02/Samsung-Galaxy-S22-Ultra_.webp",
    color: "midnight purple",
    price: "Rp 19.990.000",
    description: "memory : 8/128, prossesor : Snapdragon 8+ gen2"
  },
  {
    name: "Asus Zenfone 9",
    image: "https://dlcdnwebimgs.asus.com/gain/cf4f48f6-b62f-4a29-aa0e-623a24d9b532/w800",
    color: "moonlight white",
    price: "Rp 7.990.000",
    description: "memory : 12/256, prossesor : Snapdragon 8+ gen2"
  },
  {
    name: "Xiaomi 13 Pro",
    image: "https://carisinyal.com/wp-content/uploads/2022/12/Xiaomi-13-Pro_.webp",
    color: "ceramic white",
    price: "Rp 4.990.000",
    description: "memory : 8/128, prossesor : Snapdragon 8+ gen2"
  },
  {
    name: "Infinix Zero 5G",
    image: "https://carisinyal.com/wp-content/uploads/2022/11/Infinix-Zero-2023_.webp",
    color: "clear white",
    price: "Rp 4.590.000",
    description: "memory : 8/128, prossesor : Dimensity 9000"
  },
  {
    name: "Vivo X60 Pro",
    image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1617853014870/b9e0c75c593bc52d202992d8dcab73fc.png",
    color: "stone grey",
    price: "Rp 6.990.000",
    description: "memory : 8/128, prossesor : Snapdragon 870 5G"
  },
]

const style = {
  display: "flex",
  gap: 10,
}

const App = () => {
  return (
    <div style={style}>
      {
        smartphones.map((value, index) => {
          return <Smartphone key={index} src={value.image} desc = {value.description} name={value.name} price={value.price} color = {value.color} />
        })
      }
    </div>
  )
}

export default App