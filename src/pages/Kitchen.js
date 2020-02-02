import firebase from '../utils/firebase.js';
import React, { useState, useEffect } from 'react';
import ConfirmButton from '../components/ConfirmButton/ConfirmButton.js';
import OrderKitchen from '../components/Order/OrderKitchen';
import Nav from '../components/Nav/Nav';
import './Kitchen.css';


const Kitchen = () => {

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
                status: 'Pronto',
            })

        setClient(client.filter(item => item.id !== doc.id))
    };
    return (

        <>    
            <Nav />       
            <div className={'cozinha-tudo'}>
                {client.map((doc, index) =>
                    doc.status === 'Em Andamento' ?
                        <div key={index} className={'cozinha'}>
                            <OrderKitchen
                                client={doc.client}
                                table={doc.table}
                                total={doc.total}
                                products={doc.products}
                            />

                            <ConfirmButton className={'btn-cozinha'} text={'Pedido Pronto'} handleClick={() => updateStatus(doc)} />

                        </div>
                        : null
                )}
            </div>
        </>
    )

}

export default Kitchen;