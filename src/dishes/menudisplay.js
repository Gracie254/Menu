import React, {useState, useEffect} from 'react'

import CheckMenu from './food'


const MyObjectArray = () =>{
    const [order, setOrder] = useState(CheckMenu)
    let menuItems = []
    useEffect(()=>{
        setOrder(order)
    }, [order])
  
        const handleClick = (event) => {
            if(event.target.value === "all"){
                return setOrder(CheckMenu)
            }
            else {
                menuItems = setOrder(CheckMenu.filter(elem => elem.type === event.target.value))
                return menuItems
            }
        }
        console.log(order)
        
    
    return (
        <>
        
            
                    <div className="btns">
                    <button value="all" onClick={handleClick}>All</button>
                    <button value="breakfast" onClick={handleClick}>Breakfast</button>
            <button value="lunch" onClick={handleClick}>Lunch</button>
            <button value="shakes" onClick={handleClick}>Shakes</button>
                    </div>
                
             
        
           
        {order.map((meal)=>{
            const { image, name, price, description} = meal
            

            return (
                
                <div id="content">
                <div className="image">
                <img src={image} alt={name} />
                </div>
                <div>
                <h4>{name}</h4>
                <h5>{price}</h5>
                <p>{description}</p>
                </div>
                </div>
                
            )
        })}
        </>
    )


}
export default MyObjectArray