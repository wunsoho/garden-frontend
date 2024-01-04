import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from "../image/Banner1.png";
import Banner2 from "../image/Banner2.png";
import Banner3 from "../image/Banner3.png";
import Banner4 from "../image/Banner4.png";
import Banner5 from "../image/Banner5.png";
import Banner6 from "../image/Banner6.png";
import axios from 'axios';

const categories = ['AI', 'ICT', 'IT solutions'];
const categories1 = ['국내', '해외', '온라인'];
const categories2 = ['학회', '컨퍼런스'];

const ExampleComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [items, setItems] = useState([]);

  const [filteredItems, setFilteredItems] = useState(items);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2500, 
  };

  const apiUrl = 'http://43.200.230.191:8080/api/v1/contest'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const port = response.data;

        setItems(port);
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
    <div className ="HomeBody">
      <h2>Logo</h2>
      <br/>
      <Slider {...settings}>
          <div>
            <img src={Banner1} alt="Banner1" />
          </div>
          <div>
            <img src={Banner2} alt="Banner2"/>
          </div>
          <div>
            <img src={Banner3} alt="Banner3"/>
          </div>
          <div>
            <img src={Banner4} alt="Banner4"/>
          </div>
          <div>
            <img src={Banner5} alt="Banner5"/>
          </div>
          <div>
            <img src={Banner6} alt="Banner6"/>
          </div>
        </Slider>
      <div className = "title">
        <h2>카테고리 선택</h2> 
        <button onClick={handleSearchClick}>검색하기</button>
      </div>
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

      <div>
      {items && (
        <p>{items}</p>
      )}
      </div>
      <ul>
        {filteredItems.map(item => (
      <li key={item.contestId}>
        {items && (
        <p>{items}</p>
      )}
      </li>
      ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;