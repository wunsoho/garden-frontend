import React from 'react';

const ContestItem = ({ contest }) => {
  const { contestId, name, categoryName, locationType, contestType, nationInfo, period, imgUrl } = contest;

  return (
    <div className="contest-item" key={contestId}>
      <h3>{name}</h3>
      <p>Category: {categoryName}</p>
      <p>Location Type: {locationType}</p>
      <p>Contest Type: {contestType}</p>
      <p>Nation: {nationInfo.nation}</p>
      <p>City: {nationInfo.city}</p>
      <p>Period: {period}</p>
      <img src={imgUrl} alt={`Contest ${contestId}`} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ContestItem;