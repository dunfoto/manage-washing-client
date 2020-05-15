import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Todo from '../components/todo';
import Address from '../components/address';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/todo' component={Todo} />
            <Route exact path='/address' component={Address} />
        </Switch>
    )
}

export default Main;