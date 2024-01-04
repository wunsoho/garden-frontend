import React from 'react';

const RankingItem = ({ contest }) => {
  const { name, imgUrl } = contest;

  return (
    <div className="contest-item">
      <div className='contest-box'>
        <img src={imgUrl} alt={`Contest`} style={{ width: '50%', height: 'auto' }} />
        <p>{name}</p>
      </div>
      
    </div>
  );
};

export default RankingItem;