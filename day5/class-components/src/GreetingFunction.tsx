import React from "react";

interface GreetiongProps {
    message: string;
}
export default function Greeting(props: GreetiongProps) {
    console.log("renderging Greeting")

    return (
        <div>
            {props.message}
        </div>
    )
}
