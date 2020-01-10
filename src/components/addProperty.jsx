import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from 'axios';
class AddProperty extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyName: "",
      propertyLocation: "",
      propertyDescription: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.addProperty = this.addProperty.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  addProperty(event) {
    console.log(this.state);
    axios.post('http://localhost:4500/addProperty', this.state,
    {
      headers: {
          'Content-Type': 'multipart/form-data',
      }
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render() {
    return (
      <div className="container">
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Property Name</Form.Label>
              <Form.Control
                type="PropertyName"
                placeholder="Property Name"
                name="propertyName"
                value={this.state.propertyName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Property Location</Form.Label>
              <Form.Control
                type="PropertyLocation"
                placeholder="Property Location"
                name="propertyLocation"
                value={ this.state.propertyLocation}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Property Discription</Form.Label>
            <Form.Control
            type="text"
              style={{ height: "200px" }}
              name="PropertyDiscription"  value={this.state.propertyDiscription} 
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>PROPERTY INFORMATION</Form.Label>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="For Rent"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="For Sale"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label></Form.Label>
              <Form.Control type="Price/Rent" placeholder="Price/Rent" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Bedrooms</Form.Label>
              <Form.Control type="Bedrooms" placeholder="Bedrooms" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Squrefit</Form.Label>
              <Form.Control type="Squrefit" placeholder="Squrefit" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Car Parking</Form.Label>
              <Form.Control type="CarParkin" placeholder="Car Parking" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Year Buil</Form.Label>
              <Form.Control type="PropertyLocation" placeholder="Year Built" />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Property Adress</Form.Label>
            <Form.Control
              style={{ height: "100px" }}
              componentClass="textarea"
            />
          </Form.Group>
          <Form.Text>DIMENSIONS</Form.Text>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type="DiningRoom" placeholder="Dining Room" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="Kitchen" placeholder="Kitchen" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="LivingRoom" placeholder="Living Room" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="MasterRoom" placeholder="Master Room" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="BedRoom2" placeholder="BedRoom2" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="OtherRoom" placeholder="OtherRoom" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="button"  onClick={this.addProperty}>
            Submit
          </Button>

          <Button type="cancel" style={{ "margin-left": "7px" }}>
            cancel
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddProperty;
