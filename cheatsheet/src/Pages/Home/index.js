import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <section className="Home__LeftPanel">
                    <div className="Home__LeftPanel__Content">
                        <h1 className="Home__LeftPanel__Title">
                            <span className="sr-only">Cheatsheet</span>
                        </h1>
                        <div className="Home__LeftPanel__Content__SocialIcons">
                            <a href="https://github.com/pankajladhar/cheatsheet"
                                rel="noopener noreferrer"
                                className="Home__LeftPanel__Content__SocialIcons__GitHub"
                                target="_blank">
                                <span className="sr-only"> Github | Pankaj Ladhar </span>
                            </a>
                            <a href="https://www.linkedin.com/in/pankajladhar/"
                                rel="noopener noreferrer"
                                className="Home__LeftPanel__Content__SocialIcons__LinkedIn"
                                target="_blank">
                                <span className="sr-only"> LinkedIn | Pankaj Ladhar </span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="Home__RightPanel">
                    <div className="Home__RightPanel__Content">
                        <h2 className="Home__RightPanel__Title">Collection of Cheatsheet:</h2>
                        <ul>
                            <li>
                                <Link className="btn" to="/cheatsheet/markdown">Markdown</Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;