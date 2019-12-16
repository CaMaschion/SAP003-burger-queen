import React from 'react'


const MenuList = (props) => {

    return (
       
        <ol>
           
            {props.menuItens.map((menu) =>
            <li key="{menu.id}">                     
                <div className="burger">
                    {menu.name}
                <h3 className="price">{menu.price}</h3>
                <button>adicionar ao pedido</button>  
                </div>
            </li>         
        )}   
            </ol>
                             

    )
}

export default MenuList

