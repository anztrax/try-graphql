import React from 'react';

class AwesomeComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likesCount : 0
    };

    this.onLike = this._onLike.bind(this);
  }

  _onLike(){
    let likesCount = this.state.likesCount + 1;
    this.setState({likesCount});
  }

  render(){
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <button onClick={this.onLike}>Like me !</button>
      </div>
    );
  }
}

export default AwesomeComponent;