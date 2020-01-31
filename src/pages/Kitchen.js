import firebase from '../utils/firebase.js';
import React, { useState, useEffect } from 'react';
import ButtonMenu from '../components/ButtonMenu/ButtonMenu.js';
import MenuList from '../components/Menu/Menu.js';
import Nav from '../components/Nav/Nav';
//import './kitchen.css';


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
            <div className={'cozinha-tudo'}>
                {client.map((doc, index) =>
                    doc.status === 'Em Andamento' ?
                        <div key={index} className={'cozinha'}>
                            <MenuList
                                name={doc.client}
                                mesa={doc.table}
                                total={doc.total}
                                productSelect={doc.productSelect}
                            />

                            <ButtonMenu className={'btn-cozinha'} text={'Pedido Pronto'} handleClick={() => updateStatus(doc)} />

                        </div>
                        : null
                )}
            </div>
        </>
    )

}

export default Kitchen;