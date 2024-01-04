import React from 'react';

const ContestItem = ({ contest }) => {
  const { contestId, name, categoryName, locationType, contestType, nationInfo, period, imgUrl } = contest;

  return (
    <div className="contest-item" key={contestId}>
      <div className='contest-box'>
        <img src={imgUrl} alt={`Contest ${contestId}`} style={{ width: '50%', height: 'auto' }} />
        <p>{name}</p>
        <p>Category: {categoryName}</p>
        <p>Location Type: {locationType}</p>
        <p>Contest Type: {contestType}</p>
        <p>Nation: {nationInfo.nation}</p>
        <p>City: {nationInfo.city}</p>
        <p>Period: {period}</p>
      </div>
      
    </div>
  );
};

export default ContestItem;