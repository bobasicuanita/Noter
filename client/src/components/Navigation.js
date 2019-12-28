import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <div className="ui inverted segment">
                <div className="ui inverted secondary menu">
                    <Link to="/" className="active item">
                        My Notes
                    </Link>
                    <Link to="/new" className="item">
                        New Note
                    </Link>
                </div>
            </div>
        );
    }
};

export default Navigation;