import React from 'react'

const Order = (props) => {   
    return (                
            {orders.length === 0 ? (
                <OrderContent> Your order...</OrderContent>
            ) : (
                    <OrderContent>
                        {" "}
                        <OrderContainer>Your Order:</OrderContainer> {" "}
                        {orders.map(order =>(
                            <OrderContainer>
                                <OrderItem key={order}>
                                    {order.name}
                                </OrderItem>
                            </OrderContainer>
                        ))}
                    </OrderContent>
                )}
            <DialogFooter>
                <ConfirmButton>Enviar Pedido</ConfirmButton>
            </DialogFooter>
        
                    );
}