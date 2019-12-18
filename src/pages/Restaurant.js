import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase.js'
//import Header from '../components/Header';
import Input from '../components/Input/Input';
import Button from '../components/Button/';
import MenuList from '../components/Menu/menu.js'
//import Nav from '../components/Nav/Nav';

import '../styles.css';

const Restaurant = () => {

    const [menu, setMenu] = useState([])
    const [client, setClient] = useState('')
    const [table, setTable] = useState('')
    const [filterMenu, setFilterMenu] = useState([])

    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('client')
            .add({
                client,
                table,
            })
            .then(() => {
                setClient('')
                setTable('')
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


    return (
        <div className="App">
            {/* <Header /> */}
            <Button text={'Café da Manhã'} handleClick={() => showFilteredMenu('breakfast')} />
            <Button text={'Lanches'} handleClick={() => showFilteredMenu('lunch')} />
            <form onSubmit={onSubmit}>
                <h4>Dados do cliente</h4>
                <Input title="Nome: " type="text" val={client} handleChange={e => setClient(e.currentTarget.value)} />
                <Input title="Numero da mesa: " type="number" val={table} handleChange={e => setTable(e.currentTarget.value)} />
                <Button id='btn-send' handleClick={onSubmit} text="Enviar Pedido" />
            </form>
            <aside>
                <div>
                    <h2>Menu</h2>
                    <MenuList menuItens={filterMenu} />
                </div>
            </aside>

        </div>
    )
}

export default Restaurant;


