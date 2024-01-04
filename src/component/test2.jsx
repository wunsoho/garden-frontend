import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = ['AI', 'ICT', 'IT solutions'];
const categories1 = ['국내', '해외', '온라인'];
const categories2 = ['학회', '컨퍼런스'];

const ExampleComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [items, setItems] = useState([
    { id: 1, title: '리액트 입문', category: 'AI', area: '국내', type: '학회' },
    { id: 2, title: '맛있는 음식 만들기', category: 'ICT', area: '해외', type: '컨퍼런스' },
    { id: 3, title: '세계 여행기', category: 'IT solutions', area: '온라인', type: '학회' },
  ]);

  const [filteredItems, setFilteredItems] = useState(items);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://43.200.230.191:8080/');
        const data = await response.json();

        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight) {
        console.log('스크롤이 페이지 끝에 도달했습니다!');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAreaClick = (area) => {
    if (selectedArea.includes(area)) {
      setSelectedArea(selectedArea.filter(a => a !== area));
    } else {
      setSelectedArea([...selectedArea, area]);
    }
  };

  const handleTypeClick = (type) => {
    if (selectedType.includes(type)) {
      setSelectedType(selectedType.filter(t => t !== type));
    } else {
      setSelectedType([...selectedType, type]);
    }
  };

  const handleSearchClick = () => {
    let filtered = items;

    if (selectedCategory !== '전체') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedArea.length > 0) {
      filtered = filtered.filter(item => selectedArea.includes(item.area));
    }

    if (selectedType.length > 0) {
      filtered = filtered.filter(item => selectedType.includes(item.type));
    }

    setFilteredItems(filtered);
  };

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
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', cursor: 'pointer', backgroundColor: selectedCategory === category ? 'lightblue' : 'initial' }}
        >
          {category}
        </button>
      ))}
      <h3>위치</h3>
      {categories1.map(area => (
        <button
          key={area}
          onClick={() => handleAreaClick(area)}
          style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', cursor: 'pointer', backgroundColor: selectedArea.includes(area) ? 'lightblue' : 'initial' }}
        >
          {area}
        </button>
      ))}
      <h3>구분</h3>
      {categories2.map(type => (
        <button
          key={type}
          onClick={() => handleTypeClick(type)}
          style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', cursor: 'pointer', backgroundColor: selectedType.includes(type) ? 'lightblue' : 'initial' }}
        >
          {type}
        </button>
      ))}
      <br/>
      <button onClick={handleSearchClick}>검색하기</button>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.title} - {item.category} - {item.area} - {item.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;