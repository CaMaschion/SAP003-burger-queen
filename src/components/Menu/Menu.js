import React from 'react';
import './MenuStyle.css';

const MenuList = (props) => {

    return (
        <>
            <section className="teste">
                {props.menuItens.map((menu) =>
                    <button key="{menu.id}" type='button' className="allMenu"
                        onClick={() => { props.handleClick(menu) }}>
                        <div>
                            {menu.name}
                            <h3>R${menu.price},00</h3>
                        </div>
                    </button>
                )}
            </section>
        </>
    )
}

export default MenuList


