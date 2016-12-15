import React from 'react';

const data = {
  'cu': {
    'name': 'Cuba',
    'icon': 'flag-cu.png',
  },
  'fr': {
    'name': 'France',
    'icon': 'flag-fr.png',
  },
  'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png',
  },
  'nl': {
    'name': 'Netherlands',
    'icon': 'flag-nl.png',
  },
  'uz': {
    'name': 'Uzbekistan',
    'icon': 'flag-uz.png',
  }
};

export default class Flag extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { code, showName } = this.props;
    const name = data[code].name;
    const icon = data[code].icon;

    return (
      <div className='flag'>
        <img className='icon' title={name} src={`/img/${icon}`} />
        {showName && <span className='name'>{name}</span>}
      </div>
    )
  }
}