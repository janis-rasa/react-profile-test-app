import React from 'react'
import NotFound from "../NotFound/NotFound"
import ProfilesContainer from '../Profiles/ProfilesContainer'
import UserContainer from '../User/UserContainer'
import Home from '../Home/Home'
import { Route, Switch } from "react-router-dom"

const App = (props) => {
    return (
        <main className="container py-5">
            <Switch>
                <Route
                    path='/profiles/:userId'
                    render={() => <UserContainer />}
                />

                <Route
                    path='/profiles'
                    render={() => <ProfilesContainer />}
                />

                <Route
                    path='/'
                    exact
                    render={() => <Home />}
                />


                <Route
                    render={() => <NotFound />}
                />

            </Switch>
        </main>
    )
}

export default App