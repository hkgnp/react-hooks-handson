import React, { useContext } from 'react';
import Context from './Context';

export default class StudentsListing extends React.Component {
  static contextType = Context;

  state = {
    id: '',
    yearOfStudy: '',
    gender: '',
    graduated: '',
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addStudent = () => {
    const { id, yearOfStudy, gender, graduated } = this.state;
    this.context.addStudent(id, yearOfStudy, gender, graduated);
    this.setState({
      id: '',
      yearOfStudy: '',
      gender: '',
      graduated: '',
    });
  };

  deleteStudent = (e) => {
    this.context.deleteStudent(e.target.name);
  };

  render() {
    const { id, yearOfStudy, gender, graduated } = this.state;
    return (
      <React.Fragment>
        <section>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Year of Study</th>
                <th>Gender</th>
                <th>Graduated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.context.students().map((s) => {
                return (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.yearOfStudy}</td>
                    <td>{s.gender}</td>
                    <td>{s.graduated.toString()}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        name={s.id}
                        onClick={this.deleteStudent}
                      >
                        Delete Student
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        <section>
          <h1>Add Student</h1>
          <div>
            <label className="form-label">Student ID:</label>
            <input
              className="form-control "
              type="text"
              name="id"
              value={id}
              onChange={this.updateFormField}
            />
          </div>
          <div>
            <label class="form-label">Year of Study:</label>
            <input
              type="text"
              className="form-control"
              name="yearOfStudy"
              value={yearOfStudy}
              onChange={this.updateFormField}
            />
          </div>
          <div>
            <label class="form-label">Gender:</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              value={gender}
              onChange={this.updateFormField}
            />
          </div>
          <div>
            <label class="form-label">Graduated:</label>
            <input
              type="text"
              className="form-control"
              name="graduated"
              value={graduated}
              onChange={this.updateFormField}
            />
          </div>

          <button className="btn btn-primary mt-3" onClick={this.addStudent}>
            Add Product
          </button>
        </section>
      </React.Fragment>
    );
  }
}
