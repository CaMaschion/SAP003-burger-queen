import React,{ useState } from 'react';

import firebase from '../../utils/firebase.js'

const OrderClient = () => {

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

  return (
      <form onSubmit={onSubmit}>
          <h4>Dados do cliente</h4>
          <div>
              <label>Nome:</label>
              <input type="text" value={client} onChange={e => setClient(e.currentTarget.value)}/>
          </div>
          <div>
          <label>Mesa:</label>
        <input type="number" value={table} onChange={e => setTable(e.currentTarget.value)} />
      </div>
      <button id='btn-send' onClick={onSubmit}>Enviar Pedido</button>
    </form>
  )
}

export default OrderClient;