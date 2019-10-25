import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//*importing playground components
// import Redux101 from '../playground/Redux101'
import ReduxExpensify from '../playground/Redux-expensify';
//* importing components
 
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

const AppRouter = () =>{
    return <Router>
        <>
            <Header />
            <Switch>
                <Route path='/' exact   component= { Dashboard } />
                <Route path = '/create' component = { AddExpensePage } />
                <Route path = '/edit:id' component = { EditExpensePage } /> 
                {/* <Route path = '/redux101' component = { Redux101 } /> */}
                <Route path = '/redux-expensify' component = { ReduxExpensify } /> 
            </Switch>
        </>
    </Router>
}

export default AppRouter;