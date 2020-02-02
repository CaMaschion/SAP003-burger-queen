import firebase from '../utils/firebase.js';
import React, { useState, useEffect } from 'react';
import ButtonMenu from '../components/ButtonMenu/ButtonMenu.js';
import OrderKitchen from '../components/Order/OrderKitchen.js';
import Nav from '../components/Nav/Nav';
import './Delivery.css';
import ConfirmButton from '../components/ConfirmButton/ConfirmButton.js';


const Delivery = () => {

    const [client, setClient] = useState([])

    useEffect(() => {
        const order = []
        firebase.firestore()
            .collection('orders')
            .get().then((querySnapshot) => {
                querySnapshot.forEach(doc => {
                    order.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setClient(order)

            })
    }, [])


    const updateStatus = (doc) => {

        firebase.firestore()
            .collection('orders').doc(doc.id).update({
                status: 'Entregue',

            })
        setClient(client.filter(item => item.id !== doc.id))
    };
    return (

        <>
           <Nav />
            <div className={'all'}>
                {client.map((doc, index) =>
                    doc.status === 'Pronto' ?
                        <div key={index} className={'delivery'}>
                            <OrderKitchen
                                client={doc.client}
                                table={doc.table}
                                total={doc.total}
                                products={doc.products}

                            />
                            <ConfirmButton className={'btn-cozinha'} text={'Pedido Entregue'} handleClick={() => updateStatus(doc)} />


                        </div>
                        : null

                )}
            </div>
        </>
    )

}

export default Delivery;