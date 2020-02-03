import React from 'react';
import './OrderKitchen.css';

const OrderKitchen = (props) => (
        <div className='card'>   
            
            <h3>Nome: {props.client}</h3>
            <p>Mesa: {props.table} </p>
            <section>Itens: 
                {props.products.map((item, index) =>
                    <p key={index} className='itens'>{item.contador} {item.name}</p> 
                 )} 
            </section>
            <h4>Total: {props.total}</h4>                       
        </div>
)

export default OrderKitchen