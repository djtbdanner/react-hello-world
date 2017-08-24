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
  onFormSubmit: function (e){
    e.preventDefault();
    var name = this.refs.nameBox.value;
    if (name.length > 0){
      this.refs.nameBox.value = '';
      this.props.onNewName(name);
    }
  },

  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="nameBox"></input>
        <button>Set Name</button>
      </form>
    );
  }

});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Default',
      message: 'This is from a component as a variable.'
    }
  },
 getInitialState: function() {
    return {name: this.props.name};
  },
  handleNewName: function(name){
    this.setState({
      name: name
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>, document.getElementById('app'));
