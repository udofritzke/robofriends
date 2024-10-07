import React from 'react';

const Scroll = (props) => {
    // "children" é o elemento html interno ao elemento Scroll
    // em App.js ( <CardList robots={filteredRobots} />)
    //console.log(props);
    return (
        <div style ={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
    //return <h1>OlA</h1>

}

export default Scroll;
