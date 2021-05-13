import React from 'react'

function Header(props) {
    const HeadingTag = `h${props.level}`;
    return (
        <HeadingTag className="heading-color">{props.heading}</HeadingTag>
    )
}

export default Header