var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name:'Default',
      message:'This is from a component as a variable.'
    }
  },
  getInitialState: function(){
    return{
      name: this.props.name
    };
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return(
      <span>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="nameBox"></input>
          <button>Set Name</button>
        </form>
      </span>
    );
  },
  // the button click
  onButtonClick: function(e){
    e.preventDefault();
    var name = this.refs.nameBox.value;
    this.refs.nameBox.value='';

    if (typeof name === 'string' && name.length > 0){
      this.setState({
        name: name
      });
    } else {
      alert ("no name");
    }



  }
});

var theName = 'Dave Danner';

ReactDOM.render(
  <Greeter name={theName} message='facinating'/>,
  document.getElementById('app')
);
