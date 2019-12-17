import React from 'react'


const MenuList = (props) => {

    return (

        <ol>
            {props.menuItens.map((menu) =>
                <button key="{menu.id}" onClick={props.handleClick}>
                    <div className="burger">
                        {menu.name}
                        <h3 className="price">R${menu.price},00</h3>
                    </div>
                </button>
            )}
        </ol>

    )
}

export default MenuList

