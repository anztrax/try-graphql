import React from 'react';

const typeMap = {
  'G' : 'Gold',
  'S' : 'Silver',
  'B' : 'Bronze'
};

export default class Medal extends React.Component{
  render(){
    const { type, year, city, event, category } = this.props;
    return (
      <li className='medal'>
        <span className={`symbol symbol-${type}`} title={typeMap[type]}>{type}</span>
        <span className='year'>{year}</span>
        <span className='city'>{city}</span>
        <span className='event'>{event}</span>
        <span className='category'>{category}</span>
      </li>
    )
  }
}