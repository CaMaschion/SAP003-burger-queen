import React from 'react'


const MenuList = (props) => {

    return (

        <section>
            {props.menuItens.map((menu) =>
                <button key="{menu.id}" onClick={() => props.handleClick(menu)}>
                    <div className="burger">
                        {menu.name}
                        <h3 className="price">R${menu.price},00</h3>
                    </div>
                </button>
            )}
        </section>

    )
}

export default MenuList

