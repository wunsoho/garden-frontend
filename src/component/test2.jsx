import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = ['AI', 'ICT', 'IT solutions'];
const categories1 = ['국내', '해외', '온라인'];
const categories2 = ['학회', '컨퍼런스'];


const ExampleComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [items, setItems] = useState([ // eslint-disable-next-line
    { id: 1, title: '리액트 입문', category: 'AI' },
    { id: 2, title: '맛있는 음식 만들기', category: 'ICT' },
    { id: 3, title: '세계 여행기', category: 'IT solutions' },

    // 추가적인 아이템들
  ]);

  const [filteredItems, setFilteredItems] = useState(items);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchClick = () => {
    if (selectedCategory === '전체') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.category === selectedCategory);
      setFilteredItems(filtered);
    }
  };

//   const filteredItems = selectedCategory === '전체'
//     ? items
//     : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h2>Logo</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <h2>카테고리 선택</h2>
      <h3>분야</h3>
      <div>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', cursor: 'pointer' }}
          >
            {category}
          </button>
        ))}
      <h3>위치</h3>
      {categories1.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', cursor: 'pointer' }}
          >
            {category}
          </button>
        ))}
      <h3>구분</h3>
      {categories2.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', cursor: 'pointer' }}
          >
            {category}
          </button>
        ))}
      </div>
      <button onClick={handleSearchClick}>조회</button>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.title} - {item.category}</li>
        ))}
      </ul> 
    </div>
  );
};

export default ExampleComponent;