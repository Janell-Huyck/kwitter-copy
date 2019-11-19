import React from "react";
import { NewMessageBox } from ".";


class TheKweed extends React.Component {
    render() {
        return (
            <React.Fragment className='body'>
            <NewMessageBox placeholder='Whats Happening'/>
            </React.Fragment>
        )
    }
}

export default TheKweed;