import firebase from '../utils/firebase.js';
import React, { useState, useEffect } from 'react';
import ButtonMenu from '../components/ButtonMenu/ButtonMenu.js';
import MenuList from '../components/Menu/Menu.js';
import Nav from '../components/Nav/Nav.js';
import './Delivery.css';


const Delivery = () => {

    const [client, setClient] = useState([])

    useEffect(() => {
        const order = []
        firebase.firestore()
            .collection('client')
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
            .collection('client').doc(doc.id).update({
                status: 'Entregue',

            })
        setClient(client.filter(item => item.id !== doc.id))
    };
    return (

        <>
            
            <div className={'all'}>
                {client.map((doc, index) =>
                    doc.status === 'Pronto' ?
                        <div key={index} className={'delivery'}>
                            <MenuList
                                name={doc.client}
                                mesa={doc.table}
                                total={doc.total}
                                productSelect={doc.productSelect}

                            />
                            <ButtonMenu className={'btn-cozinha'} text={'Pedido Entregue'} handleClick={() => updateStatus(doc)} />


                        </div>
                        : null

                )}
            </div>
        </>
    )

}

export default Delivery;