import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase.js'
//import Header from '../components/Header';
import Input from '../components/Input/Input';
import Button from '../components/Button/';
import MenuList from '../components/Menu/menu.js'
//import Nav from '../components/Nav/Nav';

import '../styles.css';
import AddOrder from '../components/Order/index.js';

const Restaurant = () => {

    const [menu, setMenu] = useState([])
    const [client, setClient] = useState('')
    const [table, setTable] = useState('')
    const [filterMenu, setFilterMenu] = useState([])
    const [products, setProducts] = useState([])
    

    function onSubmit(e) {
        e.preventDefault()
        
        firebase
            .firestore()
            .collection('orders')         
            .add({
                client,
                table, 
                products,        
               
            })
            .then(() => {
                setClient('')
                setTable('')
                setProducts([])
                
            })
    }

    useEffect(() => {
        firebase.firestore()
            .collection('menu').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    setMenu((currentState) => [...currentState, doc.data()]);
                })
            })
    }, [])

    function showFilteredMenu(type) {
        if (type === "breakfast") {
            const filteredMenu = menu.filter(elem => elem.breakfast);
            setFilterMenu(filteredMenu);
        } else {
            const filteredMenu = menu.filter(elem => !elem.breakfast);
            setFilterMenu(filteredMenu);
        }
    }

    const addProducts = (item) => {
        setProducts([...products, item]);
        
    }

    const removeItem = (item) => {
        const index = (products.indexOf(item))
        products.splice(index, 1)
        setProducts([...products])
    }
   
    const total = products.reduce((accum, products) => accum + products.price, 0)
       

    return (
        <div className="App">
            {/* <Header /> */}
            <Button text={'Café da Manhã'} handleClick={() => showFilteredMenu('breakfast')} />
            <Button text={'Lanches'} handleClick={() => showFilteredMenu('lunch')} />
            <form onSubmit={onSubmit}>
                <h4>Dados do cliente</h4>
                <Input title="Nome: " type="text" val={client} handleChange={e => setClient(e.currentTarget.value)} />
                <Input title="Numero da mesa: " type="number" val={table} handleChange={e => setTable(e.currentTarget.value)} />
                
            </form>
            <div>
                <h2>Menu</h2>
                <MenuList menuItens={filterMenu} handleClick={addProducts} />
            </div>
            <aside>
                <div>
                    <ul>
                    <h1>Resumo do Pedido</h1>
                        {products.map((products, index) => (
                            <li key={index}>{products.name} R$ {products.price},00                            
                            <Button text={'Remover Item'} handleClick={(e) => {
                                e.preventDefault();
                                removeItem(products);
                            }} /></li>
                            ))}
                            
                            <p><strong>Total: {total}</strong></p>  
                            <Button id='btn-send' handleClick={onSubmit} text="Enviar Pedido" />
                                              
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Restaurant;


