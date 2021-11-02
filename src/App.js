//App.js

import React, { Component } from "react";
import {
  Button,
  Form,
  Container,
  Header,
  Grid,
  Message,
} from "semantic-ui-react";
import "./App.css";
import axios from "axios";
import { DatesRangeInput } from "semantic-ui-calendar-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeName: "",
      employeeID: "",
      currentProject: "",
      leaveCount: "",
      leaveReason: "",
      leaveFrom: "",
      employeeNameError: false,
      employeeIDError: false,
      currentProjectError: false,
      leaveCountError: false,
      leaveReasonError: false,
      leaveFromError: false,
      formError: false,
      submitError: false,
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = {
      employeeName: this.state.employeeName,
      employeeID: this.state.employeeID,
      currentProject: this.state.currentProject,
      leaveCount: this.state.leaveCount,
      leaveReason: this.state.leaveReason,
      leaveFrom: this.state.leaveFrom,
    };
    let error = false;
    if (this.state.employeeName === "") {
      this.setState({ employeeNameError: true });
      error = true;
    } else {
      this.setState({ employeeNameError: false });
    }
    if (this.state.employeeID === "") {
      this.setState({ employeeIDError: true });
      error = true;
    } else {
      this.setState({ employeeIDError: false });
    }
    if (this.state.currentProject === "") {
      this.setState({ currentProjectError: true });
      error = true;
    } else {
      this.setState({ currentProjectError: false });
    }
    if (this.state.leaveCount === "") {
      this.setState({ leaveCountError: true });
      error = true;
    } else {
      this.setState({ leaveCountError: false });
    }
    if (this.state.leaveReason === "") {
      this.setState({ leaveReasonError: true });
      error = true;
    } else {
      this.setState({ leaveReasonError: false });
    }
    if (this.state.leaveFrom === "") {
      this.setState({ leaveFromError: true });
      error = true;
    } else {
      this.setState({ leaveFromError: false });
    }
    /* if (this.state.leaveTo === "") {
      this.setState({ leaveToError: true });
      error= true;
    } else {
      this.setState({ leaveToError: false });
    } */

    if (error) {
      this.setState({ formError: true });
    }
    this.setState({ formError: false });
    axios
      .post(
        "https://sheet.best/api/sheets/8deae7c8-43ac-438f-8ec5-1b129312a1f2",
        data
      )
      .then((response) => {
        //  alert("Leave application submitted");
        toast.success("Leave application submitted ", { autoClose: 3000 });
        console.log(response);
      })
      .catch((response) => {
        this.setState({ submitError: true });
        //alert("something went wrong");
        toast.error("something went wrong", { autoClose: 3000 });
        console.log(response);
      });
  };

  handleLeaveDates = (event, { name, value }) => {
    // this.setState({ formError: false });
    let from = "";
    let to = [];
    let count = "";
    //eslint-disable-next-line
    if (this.state.hasOwnProperty(name)) {
      from = value;
      to = value.split("-");
      if (typeof to[3] != "number") {
        this.setState({ leaveFromError: true });
        this.setState({ formError: true });
      }
      count = to[3] - to[0];
      if (count > 0) {
        this.setState({ leaveCount: count }, () => {
          this.setState({ leaveFromError: false });
          this.setState({formError:false})
        });
      }
      this.setState({ [name]: value });
      console.log(from, to);
    }
  };
  render() {
    //  const { name, age, salary, hobby } = this.state;    (*)
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Container fluid className="container">
            <Header as="h2">Leave Request Portal!</Header>
            <Form
              className="form"
              error={this.state.formError || this.state.submitError}
            >
              {this.state.submitError ? (
                <Message
                  error
                  header="Something went wrong!! Try again"
                  content="Server load exceeded try again after sometime"
                />
              ) : null}
              {this.state.formError ? (
                <Message
                  error
                  header="Alright!! Fill Up The Details Properly &#128517;"
                />
              ) : null}
              <Form.Field>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Enter your name"
                  type="text"
                  error={this.state.employeeNameError}
                  onChange={(e) =>
                    this.setState({ employeeName: e.target.value })
                  }
                  validators={["required"]}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  icon="id card"
                  iconPosition="left"
                  validators={["minStringLength:5", "matchRegexp:^TY.[0-9]$"]}
                  placeholder="Enter your employee id"
                  type="text"
                  error={this.state.employeeIDError}
                  onChange={(e) =>
                    this.setState({ employeeID: e.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  icon="archive"
                  iconPosition="left"
                  placeholder="Enter your current project"
                  type="text"
                  error={this.state.currentProjectError}
                  onChange={(e) =>
                    this.setState({ currentProject: e.target.value })
                  }
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  fluid
                  icon="envelope open outline"
                  iconPosition="left"
                  type="text"
                  placeholder="Enter your leave reason"
                  error={this.state.leaveReasonError}
                  onChange={(e) =>
                    this.setState({ leaveReason: e.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <DatesRangeInput
                  fluid
                  name="leaveFrom"
                  icon="calendar"
                  iconPosition="left"
                  placeholder="Leave from-to date"
                  value={this.state.leaveFrom}
                  error={this.state.leaveFromError}
                  onChange={this.handleLeaveDates}
                  closable
                  closeOnMouseLeave
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  icon="plus circle"
                  iconPosition="left"
                  placeholder="Enter your total count"
                  validators={[
                    "isNumber",
                    "minNumber:0",
                    "maxNumber:30",
                    "isPositive",
                  ]}
                  readOnly={true}
                  type="number"
                  value={this.state.leaveCount}
                  error={this.state.leaveCountError}
                  onChange={(e) =>
                    this.setState({ leaveCount: e.target.value })
                  }
                />
              </Form.Field>
              {/* <Form.Field>
                <Form.Input
                  fluid
                  icon="calendar"
                  iconPosition="left"
                  placeholder="Leave to date"
                  error={this.state.leaveToError}
                  onChange={(e) => this.setState({ leaveTo: e.target.value })}
                />
         </Form.Field> */}
              <Button
                color="blue"
                type="submit"
                onClick={this.submitHandler}
                disabled={
                  !this.state.leaveCount ||
                  !this.state.employeeID ||
                  !this.state.employeeName ||
                  !this.state.currentProject ||
                  !this.state.leaveReason
                }
              >
                Submit
              </Button>
              <Button color="red" type="clear">
                Cancel
              </Button>
            </Form>
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
}