var React = require ('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm')

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {name: 'Default', message: 'This is from a component as a variable.'}
  },
  getInitialState: function() {
    return {name: this.props.name, message: this.props.message};
  },
  handleNewData: function(update) {
    this.setState({name: update.name, message: update.message});
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports=Greeter;
