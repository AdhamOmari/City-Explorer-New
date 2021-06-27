import React, { Component } from 'react'
import { Form, Button, Image } from 'react-bootstrap'
// import Apifiled from './Apifiled';
import axios from 'axios'
export class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            latitude: "",
            longitude: "",
            // erorrs: "",
            // alert:false
        }

    }

    submitData = async (e) => {
        e.preventDefault()
        let axiosResponse = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.60346fba30221450f0bd55e67928ff53&city=${this.state.displayName}&format=json`)
        this.setState({
            displayName: axiosResponse.data[0].display_name,
            longitude: axiosResponse.data[0].lon,
            latitude: axiosResponse.data[0].lat,
            // alert:true,

        })
        // console.log(this.setState.longitude)
        // console.log(this.setState.latitude)


    }

    ghngeHandlerSubmit = (e) => {
        this.setState({
            displayName: e.target.value

        })
    }
    render() {
        return (
            <>
                {/* <Apifiled alert ={this.state.Apifiled}></Apifiled> */}
                <Form onSubmit={this.submitData}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> City Name </Form.Label>
                        <Form.Control type="text" placeholder="City Name" onChange={(e) => { this.submitData(e) }} size={'sm'}
                        />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>

                <div>
                    <Image alt="" src={`https://maps.locationiq.com/v3/staticmap?key=pk.88bdc34a015f169659efd4fa8583736c&center=${this.state.latitude.lat},${this.state.longitude.lon}&zoom=10`} rounded/>

                zoom=14`} rounded />
                    {/* https://maps.locationiq.com/v3/staticmap?key=pk.f4b79e178c396da16af306c66309dd25&center=17.450419,78.381149&si
{`https://maps.locationiq.com/v3/staticmap?key=pk.f4b79e178c396da16af306c66309dd25&center=${this.state.latitude.lat},${this.state.longitude.lon}`}

 */}
                </div>
            </>
        )
    }
}

export default Forms
