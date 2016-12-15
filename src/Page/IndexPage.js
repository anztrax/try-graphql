import React from 'react';
import AthletePreview from '../Components/AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component{
  render(){
    return (
      <div className='home'>
        <div className='athletes-selector'>
          <h1>Test data </h1>
          <h1>Test data2 </h1>
          {athletes.map(athleteData => {
            return <AthletePreview key={athleteData.id} {...athleteData} />
          })}
        </div>
      </div>
    )
  }
}