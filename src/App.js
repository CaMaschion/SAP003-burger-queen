import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Input from './components/Input/Input';
import Button from './components/Button/index';
import MenuList from './components/Menu/menu.js'
import firebase from './utils/firebase.js'


import './styles.css';

const App = () => {

    const [menu, setMenu] = useState([])
    const [client, setClient] = useState('')
    const [table, setTable] = useState('')

    function onSubmit(e){
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


 return (
    <div className="App">
     <Header />     
     <Button text={'Café da Manhã'}/>
     <Button text={'Lanches'}/>
     <form onSubmit={onSubmit}>
          <h4>Dados do cliente</h4>
          <Input title="Nome: " type="text" val={client} handleChange={e => setClient(e.currentTarget.value)}/>
          <Input title="Numero da mesa: " type="number" val={table} handleChange={e => setTable(e.currentTarget.value)}/>
          <Button id='btn-send' handleClick={onSubmit} text="Enviar Pedido" />
    </form>
     <div>
        <h2>Menu</h2>
        <MenuList menuItens={menu}/>    
    </div>     
              
    </div>
)
    }
export default App;