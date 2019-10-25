import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () =>{
    return(
        <header>
            <h1>Expensify</h1>
            <ul>
              <NavLink to = '/' activeClassName='is-active' exact>  Dashboard       </NavLink>     
              <NavLink to = '/create' activeClassName='is-active'>  Create          </NavLink>     
              <NavLink to = '/edit:id' activeClassName='is-active'> Expense         </NavLink>     
              <NavLink to = '/redux101'>                            Redux101        </NavLink>     
              <NavLink to = '/redux-expensify'>                     ReduxExpensify  </NavLink>     


            </ul>
        </header>
    )
}

export default Header;