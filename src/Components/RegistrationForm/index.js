import { Component } from "react";
import "./index.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      website: "",
      imageLink: "",
      enrolledListArray: [],
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    let dataList = {};
    const { name, email, website, imageLink, enrolledListArray } = this.state;
    const data = new FormData(event.target);

    dataList.name = name;
    dataList.email = email;
    dataList.website = website;
    dataList.imageLink = imageLink;

    const gender = data.getAll("Gender");
    dataList.gender = gender;

    const skills = data.getAll("Skills");
    dataList.skills = skills;

    enrolledListArray.push(dataList);
    this.props.getEnrolledList(enrolledListArray);
  };

  onClear = () => {
    this.setState({
      name: "",
      email: "",
      website: "",
      imageLink: "",
    });
  };
  render() {
    const { name, email, website, imageLink } = this.state;

    return (
      <div className="register-bg-container">
        <h1> Enter your details below </h1>
        <form id="registrationForm" onSubmit={this.onSubmitForm}>
          <table>
            <tbody>
              <tr>
                <td> Name </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td> Email </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td> Website </td>
                <td>
                  <input
                    type="url"
                    name="website"
                    value={website}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td> Image Link </td>
                <td>
                  <input
                    type="url"
                    name="imageLink"
                    value={imageLink}
                    onChange={this.onChange}
                  />
                </td>
              </tr>

              <tr>
                <td>Gender </td>
                <td>
                  <input type="radio" name="Gender" value="Male" />
                  Male
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="radio" name="Gender" value="Female" />
                  Female
                </td>
              </tr>

              <tr>
                <td> Skills </td>
                <td>
                  <input type="checkbox" name="Skills" value="Java" />
                  Java
                  <input type="checkbox" name="Skills" value="HTML" />
                  HTML
                  <input type="checkbox" name="Skills" value="CSS" />
                  CSS
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>
                  <button className="submit-btn" type="submit">
                    Enroll Student
                  </button>
                </td>
                <td>
                  <button
                    className="clear-btn"
                    type="reset"
                    onClick={this.onClear}
                  >
                    Clear
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
