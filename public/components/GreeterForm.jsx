var React = require ('react');

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

module.exports=GreeterForm;
