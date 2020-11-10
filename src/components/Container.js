import React from 'react'



function Container(props) {

    return (
        <section className={"wrap"}>
            {props.children}
        </section>
    )
}

export default Container;
