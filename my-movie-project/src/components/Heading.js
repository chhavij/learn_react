import React from 'react'

function Heading(props) {
    const HeadingTag = `h${props.level}`;
    return (
        <HeadingTag className="heading-color">{props.heading}</HeadingTag>
    )
}

export default Heading