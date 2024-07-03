import React from 'react';

interface GreetingProps {
    name?: string; //?를 쓰는 이유는 string이지만 null 허용한다는 의미
}
interface GreetingState {
    message: string;
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {

    constructor(props: GreetingProps) {
        super(props);
        this.state = { 
            message: `Hello from, ${props.name}`
        }
    }

    static getDerivedStateFromProps(props:GreetingProps, state:GreetingState):GreetingState {
        console.log(props, state);
        if(props.name && props.name !== state.message) {
            const newState = {...state };
            newState.message = Greeting.getNewMessage(props.name);
            return newState;
        }
        return state;
    }
    static getNewMessage (name:string): string {
        return `Hello from, ${name}`;
    }

    render() {
        if(!this.props.name){
            return <div>no name given</div>;
        }
        return <div>{this.state.message}</div>
    }
}

