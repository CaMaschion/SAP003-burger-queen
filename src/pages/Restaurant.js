import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase.js';
import Input from '../components/Input/Input';
import ButtonRemove from '../components/ButtonRemove/ButtonRemove';
import MenuList from '../components/Menu/Menu.js';
import Nav from '../components/Nav/Nav';
import ButtonMenu from '../components/ButtonMenu/ButtonMenu';
import Order from '../components/Order/Order';

const Restaurant = () => {

    const [menu, setMenu] = useState([])
    const [client, setClient] = useState('')
    const [table, setTable] = useState('')
    const [filterMenu, setFilterMenu] = useState([])
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState('')
    const [modal, setModal] = useState({ status: false })
    const [options, setOptions] = useState(" ")
    const [extras, setExtras] = useState("")
    const [order, setOrder] = useState([]);

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
        <div className="App">

            <Nav text={'Burger Queen'} />

            <div className="container"
                style={{

                }}>

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

                <div>

                    <section>

                        <ButtonMenu text={'Café da Manhã'}
                            handleClick={() => showFilteredMenu('breakfast')} />
                        <ButtonMenu text={'Lanches'}
                            handleClick={() => showFilteredMenu('lunch')} />

                    </section>

                    <div>

                        <MenuList menuItens={filterMenu}
                            handleClick={verifyOptions} id={'breakfast'} />

                    </div>
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
                                            vaulue={elem} />
                                        <label>{elem}</label>
                                    </div>
                                )))}

                                <button onClick={addOptionsExtras} type='button'
                                    style={{

                                        backgroundColor: '#FF3127',
                                        color: 'white',
                                        fontSize: '15pt',
                                        cursor: 'pointer',
                                        padding: '10px',
                                        marginTop: '15px',
                                        marginBottom: '30px',
                                        border: 'none',
                                        borderRadius: '10px'

                                    }}>Adicionar ao pedido</button>

                                <ButtonMenu
                                    id={'voltar'}
                                    handleClick={() => setModal({ status: false })}
                                    text='Voltar'
                                />
                            </div>

                        ) : false}
                    </section>
                </div>
                
                    <aside>
                        <div>
                            <ul>
                                <h1>Resumo do Pedido</h1>
                                {products.map((products, index) => (
                                    <ul key={index}>{products.name} R$ {products.price},00</ul>
                                ))}

                                <ButtonRemove text={'Remover'}
                                    handleClick={(e) => {
                                        e.preventDefault();
                                        removeItem(products);
                                    }}></ButtonRemove>

                                <p><strong> Total: {totalPrice.toLocaleString('pt-BR',
                                    { style: 'currency', currency: 'BRL' })}</strong></p>

                                <ButtonMenu id='btn-send'
                                    handleClick={onSubmit}
                                    text="Enviar Pedido" />
                            </ul>
                        </div>
                    </aside>
                
            </div>
        </div>
    )
}

export default Restaurant;


