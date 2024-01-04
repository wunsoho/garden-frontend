import React from 'react';

const ContestItem = ({ contest }) => {
  const { contestId, name, categoryName, locationType, contestType, nationInfo, period, imgUrl } = contest;

  return (
    <div className="contest-item" key={contestId}>
        <div className='contest-box'>
          <img className='contest-Img' src={imgUrl} alt={`Contest ${contestId}`} style={{ width: '50%', height: 'auto' }} />
            <div className='contest-Info'>
              <p className='contest-title'>{name}</ p>
              {/* <p>Category: {categoryName}</p> */}
              <p>Location Type: {locationType}</p>
              {/* <p>Contest Type: {contestType}</p> */}
              <p>Nation: {nationInfo.nation} {nationInfo.city}</p>
              <p>{period}</p>
            </div>
        </div>
    </div>
  );
};

export default ContestItem;