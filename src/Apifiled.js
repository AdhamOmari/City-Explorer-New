import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class Apifiled extends Component {
    render() {
        return (
            <div>
                <Alert variant={'danger'}>
                    Error: 'Wrong Input! Enter City Name'
                </Alert>

            </div>
        )
    }
}

export default Apifiled
