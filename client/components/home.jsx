import React, {PropTypes, Component} from 'react'
import Formsy from 'formsy-react'
import Input from './Input'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
  }

  enableButton() {
    this.setState({
      canSubmit: true
    })
  }

  disableButton() {
    this.setState({
      canSubmit: false
    })
  }

  handleSubmit(data) {
    fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        // Do whatever you would like, display a thank you message, or inform the user if they are already a member
      })
  }

  render() {
    return (
      <div>
        <h1>Mailchimp subscribe</h1>
        <div>
          <Formsy.Form onValidSubmit={this.handleSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <Input name="email" validations="isEmail" validationError="Non-valid Email" required label="Email Address" />
            <button type="submit" disabled={!this.state.canSubmit} className="btn btn--black">Subscribe</button>
          </Formsy.Form>
        </div>
      </div>
    );
  }
}

export default Home;
