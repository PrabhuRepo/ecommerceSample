import { Navigate, Route  } from "react-router-dom"

const PrivateRoute = (Component) => {
    const isAuthenticated = true

    return (
        <Route
            render={() => isAuthenticated
                ? <Component />
                : <Navigate to="/login" />
            }
        />
    )
}


export default PrivateRoute