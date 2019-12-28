import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MyNotes extends React.Component {

    state = { data: [] };

    async componentDidMount() {
        const response = await axios.get('http://localhost:3001/notes?_sort=id&_order=DESC');
        this.setState({ data: response.data });
    };

    filterContent( content, limit = 90) {
        const shortContent = [];
        if (content.length > limit) {
            content.split(' ').reduce((acc, cur) => {
                if ( acc + cur.length <= limit) {
                    shortContent.push(cur);
                }
                return acc + cur.length;
            }, 0);

            return `${shortContent.join(' ')} ...`;
        } else {
            return `${content}`;
        }
    };

    renderList() {
        return this.state.data.map(item => {
            return (
                <div key={item.id} className="item">
                    <div className="content">
                        <Link to={`/note/${item.id}`} className="header">{item.title}</Link>
                        <div className="description">{this.filterContent(item.content)}</div>
                    </div>
                </div>
            );
        });
    };


    render() {
        return (
            <div className="ui container">
                <div className="ui divided list">
                    {this.renderList()}
                </div>
            </div>
        );
    };
};

export default MyNotes;