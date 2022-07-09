
import React from 'react';
import './stylesheet/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import client from './apollo/apolloClient';
import {ApolloProvider} from '@apollo/react-hooks';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './routes/Home';
import User from './routes/User';
import Header from "./components/Header";

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/user">
                            <User/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </ApolloProvider>
    );
}

export default App;