import React from 'react';
import axios from 'axios';
import history from '../history';

class NewNote extends React.Component {

    state = { title: '', content: '', isEnabled: false };

    onSubmit = async event => {
        event.preventDefault();

        const response = await axios.post('http://localhost:3001/notes', {title: this.state.title, content: this.state.content});

        history.push(`/note/${response.data.id}`);
    };

    validation = () => {
        const { title, content } = this.state;

        const isEnabled = title.length > 0 && content.length > 0;

        return !isEnabled;

    };


    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">
                    Create New Note
                </h1>
                <form ref={this.formRef} className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <input onChange={event => this.setState({ title: event.target.value })} type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="field">
                        <label>Content</label>
                        <textarea onChange={event => this.setState({ content: event.target.value })} placeholder="Content"></textarea>
                    </div>
                    <button disabled={this.validation()} onClick={this.onSubmit} className="ui button primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default NewNote;