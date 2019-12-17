// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Input from '../components/Input/Input';
// import Button from '../components/Button/index';
// import MenuList from '../components/Menu/menu.js'
// import firebase from '../utils/firebase.js'


// import '../styles.css';
// //import { functionTypeAnnotation } from '@babel/types';

// const App = () => {

//     //const [menu, setMenu] = useState([])
//     const [client, setClient] = useState('')
//     const [table, setTable] = useState('')
//     const [item1, setItem1] = useState([]);
//     const [item2, setItem2] = useState([]);
//     const [productSelect, setProductSelect] = useState([]);

//     function onSubmit(e) {
//         e.preventDefault()

//         firebase
//             .firestore()
//             .collection('client')
//             .add({
//                 client,
//                 table,
//             })
//             .then(() => {
//                 setClient('')
//                 setTable('')
//             })
//     }


//     useEffect(() => {
//         firebase.firestore()
//         .collection('menu')      
//             .get().then((snapshot) => {
//                 const products = snapshot.docs.filter(doc => doc.data().breakfast).map((doc) => ({
//                     id: doc.id,
//                     ...doc.data()
//                 }))
//                 setItem1(products)

//                 const products2 = snapshot.docs.filter(doc => doc.data().lunch).map((doc) => ({
//                     id: doc.id,
//                     ...doc.data()
//                 }))

//                 setItem2(products2)
//             })

//     }, [])

//     const AddOrder = (item) => {
//         setProductSelect([...productSelect, item])
//     }

//     return (

//         <div className="App">
//             <Header />
//             <form onSubmit={onSubmit}>
//                 <h4>Dados do cliente</h4>
//                 <Input title="Nome: " type="text" val={client} handleChange={e => setClient(e.currentTarget.value)} />
//                 <Input title="Numero da mesa: " type="number" val={table} handleChange={e => setTable(e.currentTarget.value)} />
//                 <Button id='btn-send' handleClick={onSubmit} text="Enviar Pedido" />
//             </form>
//             </div>
//               {/* <p>Breakfast</p>
//                 {item1.map((teste) => <Button handleClick={() => AddOrder(teste)} name={teste.text} price={teste.price} key={teste.id} />)}
//             </div>
//             <div>
//                 <p>All Day</p>
//                 {item2.map((teste) => <Button handleClick={() => AddOrder(teste)} name={teste.text} price={teste.price} key={teste.id} />)}
//             </div> */}

//             {
//                 productSelect.map(product => <div>{product.text}</div>)
//             }
        

//     )


//     {/* // return (
//     //     <div className="App">
//     //         <Header />
//     //         <Button text={'Café da Manhã'} />
//     //         <Button text={'Lanches'} />
//     //         <form onSubmit={onSubmit}>
//     //             <h4>Dados do cliente</h4>
//     //             <Input title="Nome: " type="text" val={client} handleChange={e => setClient(e.currentTarget.value)} />
//     //             <Input title="Numero da mesa: " type="number" val={table} handleChange={e => setTable(e.currentTarget.value)} />
//     //             <Button id='btn-send' handleClick={onSubmit} text="Enviar Pedido" />
//     //         </form>
//     //         <div>
//     //             <h2>Menu</h2>
//     //             <MenuList menuItens={menu} />
//     //         </div>

//     //     </div>
//     // ) */}
// }

// export default App;