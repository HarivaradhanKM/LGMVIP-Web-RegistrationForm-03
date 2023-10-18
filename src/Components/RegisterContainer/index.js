import { Component } from "react";
import "./index.css";
import RegistrationForm from "../RegistrationForm";
import EnrolledList from "../EnrolledList";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { enrArray: [] };
  }

  getEnrolledList = (data) => {
    this.setState({ enrArray: data });
  };
  render() {
    return (
      <div className="register-container">
        <RegistrationForm getEnrolledList={this.getEnrolledList} />
        <div className="vertical-line"> </div>
        <EnrolledList enrArray={this.state.enrArray} />
      </div>
    );
  }
}

export default RegisterContainer;
