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
  const [apiData, setApiData] = useState([]); // 서버에서 받아온 API 데이터를 저장할 상태 추가
  const [filteredItems, setFilteredItems] = useState([]); // API 데이터를 필터링하여 저장할 상태 추가

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

  const handleSearchClick = async () => {
    // 서버에서 API 데이터를 가져오는 함수 호출
    const apiResult = await fetchApiData();
    setApiData(apiResult);

    // 이하 동일한 코드
    let filtered = apiResult;

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

  const fetchApiData = async () => {
    try {
      // 실제 API 엔드포인트를 사용하고 필요에 따라 적절한 옵션을 설정하세요.
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching API data:', error);
      return [];
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치와 페이지의 높이를 계산하여 페이지의 끝까지 스크롤되었을 때 추가 로드 또는 처리를 할 수 있습니다.
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight) {
        // 여기에 처리할 내용 추가
        console.log('스크롤이 페이지 끝에 도달했습니다!');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
      <br />
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