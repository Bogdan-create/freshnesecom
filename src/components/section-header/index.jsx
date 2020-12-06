import React from 'react'

const SectionHeader = (props) => {
    return (
        <div className="section-header flex">
            <h2 className="section-header__title">{props.title}</h2>
            <button className="section-header__btn">Button</button>
        </div>
    )
}

export default SectionHeader
