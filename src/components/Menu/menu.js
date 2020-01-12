import React from 'react'
import styled from 'styled-components'

const MenuList = (props) => {    

    return (
        <>
        <section>
            {props.menuItens.map((menu) =>
                <button key="{menu.id}" type='button' style={{backgroundColor:' #ffde59'}} onClick={() => { props.handleClick(menu) }}>
                    <div className="allMenu">
                        {menu.name}
                        <h3 className="price">R${menu.price},00</h3>
                    </div>
                </button>
            )}
        </section>
        </>
    )
}

export default MenuList

