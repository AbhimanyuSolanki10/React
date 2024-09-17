import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    let id = sessionStorage.getItem("id")
    return( <Fragment>
            {id?<Fragment>{children}</Fragment>:<Navigate to="login}"/>}
    </Fragment>)
}

export default PrivateRoute