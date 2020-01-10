import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase.js'
import Input from '../components/Input/Input';
import Button from '../components/Button/';
import MenuList from '../components/Menu/menu.js'
import Nav from '../components/Nav/Nav';
import { NavStyled } from '../Styles/styles'


const Restaurant = () => {

    const [menu, setMenu] = useState([])
    const [client, setClient] = useState('')
    const [table, setTable] = useState('')
    const [filterMenu, setFilterMenu] = useState([])
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState('')



    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('orders')
            .add({
                client,
                table,
                products,
                totalPrice: total,

            })
            .then(() => {
                setClient('')
                setTable('')
                setProducts([])
                setTotal('')

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

    const addProducts = (menuItem) => {
        setProducts([...products, menuItem]);

    }


    const removeItem = (item) => {
        const index = (products.indexOf(item))
        products.splice(index, 1)
        setProducts([...products])
    }

    const totalPrice = products.reduce((accum, products) => accum + products.price, 0)
    const [modal, setModal] = useState({ status: false })
    const [options, setOptions] = useState(" ")
    const [extras, setExtras] = useState(" ")



    const verifyOptions = (menu) => {
        if (menu.options.length !== 0) {
            setModal({ status: true, item: menu })
        } else {
            addProducts(menu)
        }
    }

    const addOptionsExtras = () => {
        const updatedItem = { ...modal.item, name: `${modal.item.name} ${options} ${extras}` }
        addProducts(updatedItem)
        setModal({ status: false })
    }


    return (
        <div className="App">
            
            <NavStyled>
                <Nav text={'Burger Queen'} />
            </NavStyled>
            <Button text={'Café da Manhã'} handleClick={() => showFilteredMenu('breakfast')} />
            <Button text={'Lanches'} handleClick={() => showFilteredMenu('lunch')} />

            <form onSubmit={onSubmit}>
                <h4>Dados do cliente</h4>
                <Input title="Nome: " type="text" val={client} handleChange={e => setClient(e.currentTarget.value)} />
                <Input title="Número da mesa: " type="number" val={table} handleChange={e => setTable(e.currentTarget.value)} />

            </form>
            <div>
                <h2>Menu</h2>
                <MenuList menuItens={filterMenu} handleClick={verifyOptions} />
            </div>
            <section>
                {modal.status ? (
                    <div>
                        <h3>Extras</h3>
                        {modal.item.extra.map((elem => (
                            <div key={modal}>
                                <input onChange={() => setExtras(elem)} type="radio" name="extras" value={elem} />
                                <label>{elem}</label>
                            </div>
                        )))}
                        <h3>Opções</h3>
                        {modal.item.options.map((elem => (
                            <div key={modal}>
                                <input onChange={() => setOptions(elem)} type="radio" name="options" vaulue={elem} />
                                <label>{elem}</label>
                            </div>
                        )))}


                        <button onClick={addOptionsExtras}>Adicionar</button>
                    </div>

                ) : false}
            </section>
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

                        <p><strong>Total: {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p>
                        <Button id='btn-send' handleClick={onSubmit} text="Enviar Pedido" />

                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Restaurant;


