import React from "react";

function FunctionalGreeting() {
    return <h1>Hello from React!</h1>
}

const FunctionalGreetingWithProps = (props) => {
    return <h1>welcome, {props.greeting}</h1>;
}

export default FunctionalGreetingWithProps