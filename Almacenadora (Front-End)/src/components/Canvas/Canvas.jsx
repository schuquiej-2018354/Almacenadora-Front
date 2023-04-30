import { useState, useEffect } from 'react'
import React from 'react'
import { Cellars } from '../Cellars/Cellars'
import axios from 'axios';

const Canvas = () => {

  const [cellars, setCellars] = useState([{}]);

  const getCellars = async () => {
    try {
      const { data } = await axios.get('http://localhost:3200/cellar/getCellars');
      setCellars(data.cellars);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => getCellars, [])


  return (
    <>
      {
        cellars.map(({ _id, name, description, location, size, availability, price }, index) => {
          return (
            <div key={index}>
              <Cellars
                name={name}
                description={description}
                location={location}
                size={size}
                availability={availability}
                price={price}
              ></Cellars>
            </div>
          )
        })
      }
    </>
  )
}

export default Canvas
