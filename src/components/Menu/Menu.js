import React from 'react'

const MenuList = (props) => {

    return (
        <>
            <section>
                {props.menuItens.map((menu) =>
                    <button key="{menu.id}" type='button'
                        style={{

                            backgroundColor: 'black',
                            color: 'white',
                            width: '150px',
                            height: '150px',
                            fontSize: '15pt',
                            cursor: 'pointer',
                            padding: '10px',
                            textAlign: 'center',                            
                            margin: '20px',
                            border: 'none',
                            borderRadius: '10px',
                                                                                              
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

// export function Menu({setOpenFood}) {
//     return ( 
//         <MenuStyled>
//         {Object.entries(foods).map(([sectionName, foods], index) => (
//           <div key={index}>
//                 <h1>{sectionName}</h1>
//                 <FoodGrid>
//                     {foods.map(food => (
//                         <Food img={food.img} key={food.name} 
//                         onClick={() => {
//                             setOpenFood(food);
//                         }}>
//                             <FoodLabel>{food.name}</FoodLabel>
//                         </Food>
//                     ))}
//                 </FoodGrid>
//             </div>
//         ))}
//       </MenuStyled>
//     );

// }
