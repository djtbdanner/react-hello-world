var React = require ('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!
        </h1>
        <p>{message}</p>
      </div>
    );
  }

});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.nameBox.value;
    var message = this.refs.textBox.value;

    var update = {
      name: '',
      message: ''
    }

    if (name.length > 0) {
      this.refs.nameBox.value = '';
      update.name = name;
    }
    if (message.length > 0) {
      this.refs.textBox.value = '';
      update.message = message;
    }
    this.props.onNewData(update);

  },

  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="nameBox" placeholder="Enter Name"></input>
        </div>
        <div>
          <textarea ref="textBox" placeholder="Enter Message"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }

});

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

ReactDOM.render(
  <Greeter/>, document.getElementById('app'));
