import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';

import './styles.css';

const App = () => (
    <div className="App">
     <Header />
     <Input placeholder={'Nome'}/>
     <Input placeholder={'número da mesa'}/>
     <Button text={'Café da Manhã'}/>
     <Button text={'Almoço'}/>
    </div>
)

export default App;