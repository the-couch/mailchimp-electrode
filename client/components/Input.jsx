import React from 'react'
import Formsy from 'formsy-react'

const Input = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue(event) {
    this.setValue(event.currentTarget.value)
  },
  render() {
    const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
    const errorMessage = this.getErrorMessage();
    return (
      <div className={className}>
        <label>{this.props.label}
          <input type={this.props.type || 'text'} name={this.props.name} onChange={this.changeValue} value={this.getValue()} />
        </label>
      </div>
    )
  }
})

export default Input
