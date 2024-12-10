import React, { useState } from 'react'
import {itemData} from "../data"
const ItemsDisplay = () => {
    // const [displayItems,setDisplayItems] = useState(itemData)
    //  console.log(displayItems);
     
    return (
    <div>
      <div className="itemSection">
        {itemData.map((item,index) =>{
            return(
                <div className='gallery' key={index}>
                    <img src={item.item_img} alt={item.item_img} />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ItemsDisplay
