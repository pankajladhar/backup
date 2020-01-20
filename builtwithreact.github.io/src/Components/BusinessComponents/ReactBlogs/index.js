import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'
import BlogItem from './../../BaseComponents/BlogItem'
import BlogItemLoader from './../../BaseComponents/BlogItemLoader'
import './ReactBlogs.css'

class ReactBlogs extends Component {
    render() {
        const blogItemProps = {
            title: "some title",
            content: "some content some content some content some content some content some content some content some content some content some content some content some content",
            readMoreLink: "https://someremorelink.url",
        }
        return (
            <main className="ReactBlogs">
                <InnerSubHeader title="Blog Posts"/>
                <div className="container App__Body">
                    <BlogItem {...blogItemProps}/>
                    <BlogItem {...blogItemProps}/>
                    <BlogItem {...blogItemProps}/>
                    <BlogItemLoader />
                    <BlogItemLoader />
                    {/* <BlogItem /> */}
                </div>
            </main>
        );
    }
}

ReactBlogs.propTypes = {

};

export default ReactBlogs;