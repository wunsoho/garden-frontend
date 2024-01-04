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
import CategoryChoose from "../image/CategoryChoose.png";
import Logo from "../image/Logo.png";
import ContestItem from "./ContestItem";


const categories = ['AI', 'ICT', 'IT solutions'];
const categories1 = ['국내', '해외', '온라인'];
const categories2 = ['학회', '컨퍼런스'];

const Home = () => {
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
        console.log(response.data)
        console.log('Fetched Data:', port);

        setItems(port);
        setFilteredItems(port);

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
      <div className='header'>
        <img src={Logo} alt='Logo'/>
      </div>
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
        <img id='CategoryIm' src={CategoryChoose} alt='CategoryChoose'/>
        <h2 id='choose1'>카테고리</h2><h2 id='choose2'>선택</h2> 
        <button id='search' onClick={handleSearchClick}>검색</button>
      </div>

      <div className='Categories'>
        <h2 id='session'>분야</h2>
        {categories.map(category => (
        <button
            className='CircleButt'
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', 
            cursor: 'pointer', backgroundColor: selectedCategory === category ? '#03AA5A' : 'initial',
            color: selectedCategory === category ? 'white' : 'initial'}}
        >
          {category}
        </button>
        ))}
          
          <br/>

        <h3 id='Cago1'>위치</h3>
        {categories1.map(area => (
          <button
            className='CircleButt'
            key={area}
            onClick={() => handleAreaClick(area)}
            style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', cursor: 'pointer', 
            backgroundColor: selectedArea.includes(area) ? '#03AA5A' : 'initial',
            color: selectedArea.includes(area) ? 'white' : 'initial'}}
          >
            {area}
          </button>
        ))}

          <br/>

        <h3 id='Cago2'>구분</h3>
        {categories2.map(type => (
          <button
            className='CircleButt'
            key={type}
            onClick={() => handleTypeClick(type)}
            style={{ marginRight: '8px', marginBottom: '8px', padding: '4px 8px', cursor: 'pointer', 
            backgroundColor: selectedType.includes(type) ? '#03AA5A' : 'initial',
            color: selectedType.includes(type) ? 'white' : 'initial'}}
          >
            {type}
          </button>
        ))}
      </div>
      {filteredItems.map(item => (
  <ContestItem key={item.contestId} contest={item} />
))}
      
    </div>
  );
};

export default Home;