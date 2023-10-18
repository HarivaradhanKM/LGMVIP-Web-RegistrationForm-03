import { Component } from "react";
import "./index.css";

class EnrolledList extends Component {
  render() {
    return (
      <div>
        {this.props.enrArray.length > 0 ? (
          <div className="enroll-list">
            <h1>Enrolled Students</h1>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.props.enrArray.map((item, index) => {
                  return (
                    <tr key={index} className="output-card">
                      <td className="output-list">
                        <p>{item.name}</p>
                        <p>{item.gender[0]}</p>
                        <p>{item.email}</p>
                        <p>{item.website}</p>
                        <p>{item.skills.toString()}</p>
                      </td>
                      <td className="output-image">
                        <img src={item.imageLink} alt="avatar" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default EnrolledList;
