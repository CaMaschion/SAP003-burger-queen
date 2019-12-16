import React, { useState } from 'react';
import firebase from '../../utils/firebase.js'
//import MenuList from './components/Menu/menu.js'


const AddOrder = () => {
    const [item, setItem] = useState('')
    const [item2, setItem2] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        firebase.firestore()
        .collection('menu')
        .add({
            name,
            price
        })
        .then(() => {
            setItem('')
            setItem2('')
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Fazer pedido</h2>
            <div>
                <label>Pedido</label>
                <div type="text" id="pedido" value={item} onChange={e => setItem(e.currentTarget.value)}></div>
            </div>            
            <div>
                <label>Valor</label>
                <div id="price" value={item2} onChange={e => setItem(e.currentTarget.value)}></div>
            </div>
            <button>Finalizar pedido</button>
        </form>
    )
}

export default AddOrder; 