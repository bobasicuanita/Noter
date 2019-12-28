import React from 'react';
import Navigation from './Navigation';
import { Router, Route } from 'react-router-dom';
import NewNote from './NewNote';
import Note from './Note';
import MyNotes from './MyNotes';
import history from '../history';
import Edit from './Edit';
import Title from './Title';

const App = () => {
    return (
        <Router history={history}>
                <Navigation />
                <Title />
                <Route path="/" exact component={MyNotes} />
                <Route path="/new" exact component={NewNote} />
                <Route path="/note/:id" exact component={Note} />
                <Route path="/note/:id/edit" exact component={Edit} />
        </Router>
    );
};

export default App;