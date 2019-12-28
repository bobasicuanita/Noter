import React from 'react';
import Axios from 'axios';
import history from '../history';

class Edit extends React.Component {

    state = { title: '', content: '', isEnabled: false };

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await Axios.get(`http://localhost:3001/notes/${id}`);

        this.setState({ title: response.data.title, content: response.data.content });

    };

    onSubmit = async event => {
        event.preventDefault();

        const { id } = this.props.match.params;

        const { title, content } = this.state;

        await Axios.put(`http://localhost:3001/notes/${id}`, { title, content });

        history.push(`/note/${id}`);

    };

    validation = () => {
        const { title, content } = this.state;

        const isEnabled = title.length > 0 && content.length > 0;

        console.log(title);
        console.log(content);
        return !isEnabled;

    };

    render() {

        const { title,content } = this.state;

        return (
            <div className="ui container">
                <h1 className="ui header">
                    Create New Note
                </h1>
                <form className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <input defaultValue={title} onChange={event => this.setState({ title: event.target.value })} type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="field">
                        <label>Content</label>
                        <textarea defaultValue={content} onChange={event => this.setState({ content: event.target.value })} placeholder="Content"></textarea>
                    </div>
                    <button disabled={this.validation()} onClick={this.onSubmit} className="ui button primary" type="submit">Submit</button>
                </form>
            </div>
        );
    };
};

export default Edit;