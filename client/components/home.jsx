import React, {PropTypes, Component} from "react";
import {connect} from "react-redux";
import {toggleCheck, incNumber, decNumber} from "../actions";

class Home extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('hey dude whatup');
    let data = {
      email: 'kevin@bagel.com'
    }
    fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })

  }

  render() {
    return (
      <div>
        <h1>Mailchimp subscribe</h1>
        <div>
          <div>
          <form onSubmit={this.onSubmit}>
            <input type="email" name="email" />
            <button type="submit">Submit Email</button>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

export default connect()(Home);
