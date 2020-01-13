import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase.js'
import Input from '../components/Input/Input';
import Button from '../components/Button/';
import MenuList from '../components/Menu/menu.js'
import Nav from '../components/Nav/Nav';
import { NavStyled, FormStyled } from '../Styles/styles'
import { GlobalStyle } from '../Styles/styles'


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
            <GlobalStyle />
            <NavStyled>
                <Nav text={'Burger Queen'} />
            </NavStyled>
            <div className="container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginLeft: '50px',
                    marginRight: '100px'
                }}>
                <FormStyled>
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
                </FormStyled>
                <div>

                    <div className='containerMenu' style={{ textAlign: 'center' }}>

                        <Button text={'Café da Manhã'}
                            handleClick={() => showFilteredMenu('breakfast')} />
                        <Button text={'Lanches'}
                            handleClick={() => showFilteredMenu('lunch')} />

                    </div>

                    <div>

                        <MenuList menuItens={filterMenu}
                            handleClick={verifyOptions} id={'breakfast'} />

                    </div>
                    <section>
                        {modal.status ? (
                            <div>
                                <h3 style={{ fontSize: '20pt' }}>Extras</h3>
                                {modal.item.extra.map((elem => (
                                    <div style={{ fontSize: '20pt' }} key={modal}>
                                        <input
                                            onChange={() => setExtras(elem)}
                                            type="radio"
                                            name="extras"
                                            value={elem} />
                                        <label>{elem}</label>
                                    </div>
                                )))}
                                <h3 style={{ fontSize: '20pt' }}>Opções de Hambúrguer</h3>
                                {modal.item.options.map((elem => (
                                    <div style={{ fontSize: '20pt' }} key={modal}>
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
                                        fontSize: '25pt',
                                        cursor: 'pointer',
                                        padding: '10px',
                                        marginTop: '15px',
                                        marginBottom: '30px'
                                    }}>Adicionar ao pedido</button>

                                <Button
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
                            <h1 style={{ fontSize: '35px' }}>Resumo do Pedido</h1>
                            {products.map((products, index) => (
                                <li style={{ fontSize: '35px', color: '#595E5A' }} key={index}>{products.name} R$ {products.price},00
                            <Button text={'Remover Item'} handleClick={(e) => {
                                        e.preventDefault();
                                        removeItem(products);
                                    }} /></li>
                            ))}
                            <p><strong style={{ fontSize: '35px' }}>Total: {totalPrice.toLocaleString('pt-BR',
                                { style: 'currency', currency: 'BRL' })}</strong></p>


                            <Button id='btn-send'
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


