import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import ReactStreetview from 'react-streetview';


export default class Game extends React.Component {

    componentDidMount() {
        let panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'),
            {
                position: {lat: 27.175321, lng: 78.042134},
                pov: {heading: 165, pitch: 0},
                zoom: 1
            });
    }
   
   render() {
        return (
            <div>
                <div id="street-view"></div>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                    <ControlLabel>City/Town</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="Paris" />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                    <ControlLabel>Country</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="France" />
                    </FormGroup>
                    {' '}
                    <Button type="submit">
                        Guess
                    </Button>
                </Form>
            </div>
        )
   }
}

