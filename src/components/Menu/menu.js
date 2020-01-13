import React from 'react'

const MenuList = (props) => {

    return (
        <>
            <section>
                {props.menuItens.map((menu) =>
                    <button key="{menu.id}" type='button'
                        style={{
                            backgroundColor: ' black',
                            color: 'white',
                            fontSize: '15pt',
                            cursor: 'pointer',
                            padding: '10px',                            
                            textAlign: 'center',                                                                                    
                            margin: '20px'                           
                        }}
                        onClick={() => { props.handleClick(menu) }}>
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

