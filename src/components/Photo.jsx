import React from 'react';

const Photo = (props) => {
    return ( <section>
        <img src={props.url} alt="animal portrait"/>
    </section> );
}
 
export default Photo;