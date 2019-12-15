import React, {useState, useEffect} from 'react'

import firebase from '../../utils/firebase.js'
//import { format } from 'util'

function useMenu() {
    const [menu, setMenu] = useState([])
    
    useEffect(() => {
        firebase
        .firestore()
        .collection('menu')
        .onSnapshot((snapshot) => {
            const newMenu = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setMenu(newMenu)
        })

    }, [])

    return menu

}


const MenuList = () => {
    const menu = useMenu()

    return (
        <div>
            <h2>Faça seu pedido</h2>
            <ol>
                <h2>Menu</h2>
                {menu.map((menu) =>
                <li key="{menu.id}">                     
                    <div className="burger">
                        {menu.name}
                    <h3 className="price">{menu.price}</h3>
                    <button>adicionar ao pedido</button>  
                    </div>
                </li>         
            )}   
               </ol>
        </div>                        

    )
}

export default MenuList

