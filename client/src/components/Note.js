import React from 'react';
import axios from 'axios';
import history from '../history';


class Note extends React.Component {

    state = {title: null, content: null};

    async componentDidMount() {

        const { id } = this.props.match.params; 

        const response = await axios.get(`http://localhost:3001/notes/${id}`);
        
        this.setState({ title: response.data.title, content: response.data.content });
    };

    async handleDelete(id) {

        await axios.delete(`http://localhost:3001/notes/${id}`);

        history.push('/');
    };

    editPage(id) {
        history.push(`/note/${id}/edit`);
    };

    render() {

        const { id } = this.props.match.params;

        return (
        <div className="ui container">
            <h1 className="ui container">
                {this.state.title}
            </h1>
            <div className="ui message">
                {this.state.content}
            </div>
            <button onClick={() => this.editPage(id)} className="ui button blue" type="submit">Edit</button>
            <button onClick={() => this.handleDelete(id)} className="ui button red" type="submit">Delete</button>
        </div>
        );
    }
};

export default Note;