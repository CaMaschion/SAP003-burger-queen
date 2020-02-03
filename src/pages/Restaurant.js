import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase.js';
import Input from '../components/Input/Input';
import ButtonRemove from '../components/ButtonRemove/ButtonRemove';
import MenuList from '../components/Menu/Menu.js';
import ButtonMenu from '../components/ButtonMenu/ButtonMenu';
import Nav from '../components/Nav/Nav'
import ConfirmButton from '../components/ConfirmButton/ConfirmButton.js';
import "./Restaurant.css";


const Restaurant = () => {

    const [menu, setMenu] = useState([])
    const [client, setClient] = useState('')
    const [table, setTable] = useState('')
    const [filterMenu, setFilterMenu] = useState([])
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState('')
    const [modal, setModal] = useState({ status: false })
    const [options, setOptions] = useState('')
    const [extras, setExtras] = useState('')


    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('orders')
            .add({
                client,
                table,
                products,
                total:totalPrice,
                status: "Em Andamento",

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


    const showFilteredMenu = (type) => {
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


    const verifyOptions = (menu) => {
        if (menu.options.length !== 0) {
            setModal({ status: true, item: menu })
        } else {
            addProducts(menu)
        }
    }

    const addOptionsExtras = () => {
        const updatedItem = { ...modal.item, name: `${modal.item.name} ${options} ${extras}`, price: modal.item.price + 1 }
        addProducts(updatedItem)
        setModal({ status: false })
    }


    const totalPrice = products.reduce((accum, products) => accum + products.price, 0)

    return (
        <>
            <div>
                <Nav
                    alt={'Burger Queen'}
                />

                <div className="container">

                    <div className="formContainer">
                        <form onSubmit={onSubmit}>

                            <h4>Dados do cliente</h4>

                            <Input title="Nome: "
                                type="text" val={client}
                                handleChange={e => setClient(e.currentTarget.value)} />
                            <Input title="Número da mesa: "
                                type="number" val={table}
                                handleChange={e => setTable(e.currentTarget.value)} />

                        </form>
                    </div>

                    <section className='button-menu'>

                        <ButtonMenu text={'Café da Manhã'}
                            handleClick={() => showFilteredMenu('breakfast')} />
                        <ButtonMenu text={'Lanches'}
                            handleClick={() => showFilteredMenu('lunch')} />

                    </section>

                    <div className="">

                        <MenuList menuItens={filterMenu}
                            handleClick={verifyOptions} id={'breakfast'} />

                        <section>

                            {modal.status ? (
                                <div>

                                    <h3>Extras</h3>

                                    {modal.item.extra.map((elem => (
                                        <div key={modal}>
                                            <input
                                                onChange={() => setExtras(elem)}
                                                type="radio"
                                                name="extras"
                                                value={elem} />
                                            <label>{elem}</label>
                                        </div>
                                    )))}

                                    <h3>Opções de Hambúrguer</h3>

                                    {modal.item.options.map((elem => (
                                        <div key={modal}>
                                            <input
                                                onChange={() => setOptions(elem)}
                                                type="radio"
                                                name="options"
                                                value={elem} />
                                            <label>{elem}</label>
                                        </div>
                                    )))}

                                    <button className="addOrder" onClick={addOptionsExtras} type='button'>Adicionar ao pedido</button>

                                    <ConfirmButton
                                        id={'voltar'}
                                        handleClick={() => setModal({ status: false })}
                                        text='Fechar'
                                    />
                                </div>

                            ) : false}
                        </section>

                    </div>
                </div>

            </div>

            <div className="order-list">

                <h1> Resumo do Pedido </h1>

                {products.map((products, index) => (
                    <li className='list' key={index}>{products.name} R$ {products.price},00
                        <ButtonRemove
                            text={'X'}
                            handleClick={(e) => {
                                e.preventDefault();
                                removeItem(products);
                            }}
                        ></ButtonRemove>
                    </li>
                ))}

                <p><strong> Total: {totalPrice.toLocaleString('pt-BR',
                    { style: 'currency', currency: 'BRL' })}</strong></p>

                <div>
                    <ConfirmButton
                        handleClick={onSubmit}
                        text="Enviar Pedido" />
                </div>
            </div>
        </>
    )
}

export default Restaurant;


