import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Row, Label, Col } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from "react-router-dom";
import { TESTRESPONSE } from '../shared/testResponse';

const mapStateToProps = state => {
    return {
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            testResponse: TESTRESPONSE
        };
    }

    handleSubmit(values, props) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values) + " Input String: " + values.from + '-' + values.to);
        alert(typeof (this.state.testResponse.totals.distance_nm));
        this.renderDistance(this.props);

    }

    renderDistance() {
        const dist = this.state.testResponse.totals.distance_nm;

    }

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2>Great Circle Distance</h2>
                            <hr />
                        </div>
                    </div>
                    <div className='row row-content'>
                        <div className='col-12'>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className='form-group'>
                                    <Col className='col-12 col-md-6'>
                                        <Label md={12}> From </Label>
                                        <Control.text model='.from' id='from' name='from' placeholder='ICAO code'
                                        />
                                    </Col>
                                    <Col className='col-12 col-md-6'>
                                        <Label md={12}> To </Label>
                                        <Control.text model='.to' id='to' name='to' placeholder='ICAO code'
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col-12 col-md-offset-3'>
                                        <Button type='submit' color='primary'>Calculate!</Button>
                                    </Col>
                                </Row>
                            </LocalForm>

                        </div>
                    </div>
                </div>
            </React.Fragment >


        );
    }
}
export default Main;