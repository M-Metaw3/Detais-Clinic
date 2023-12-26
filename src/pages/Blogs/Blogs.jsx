import React from 'react';
import SectionOneAboutus from '../aboutUs/SectionOneAboutus';
import SectionTwoBlog from './SectionTwoBlog';
import SectionThreeBlog from './SectionThreeBlog';
import SectionFourBlog from './SectionFourBlog';
import SectionOneBlog from './SectionOneBlog';

const Blogs = () => {
    return (
        <div>
            <SectionOneBlog/>
            <SectionTwoBlog/>
            <SectionThreeBlog/>
            <SectionFourBlog/>
        </div>
    );
}

export default Blogs;
