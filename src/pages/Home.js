import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Mock image data for demonstration
  const imageData = {
    1: [
      { id: 1, src: 'https://picsum.photos/300/200?random=1', alt: 'Recent Image 1' },
      { id: 2, src: 'https://picsum.photos/300/200?random=2', alt: 'Recent Image 2' },
      { id: 3, src: 'https://picsum.photos/300/200?random=3', alt: 'Recent Image 3' },
      { id: 4, src: 'https://picsum.photos/300/200?random=4', alt: 'Recent Image 4' },
      { id: 5, src: 'https://picsum.photos/300/200?random=5', alt: 'Recent Image 5' },
      { id: 6, src: 'https://picsum.photos/300/200?random=6', alt: 'Recent Image 6' },
    ],
    2: [
      { id: 7, src: 'https://picsum.photos/300/200?random=7', alt: 'Popular Image 1' },
      { id: 8, src: 'https://picsum.photos/300/200?random=8', alt: 'Popular Image 2' },
      { id: 9, src: 'https://picsum.photos/300/200?random=9', alt: 'Popular Image 3' },
      { id: 10, src: 'https://picsum.photos/300/200?random=10', alt: 'Popular Image 4' },
    ],
    3: [
      { id: 11, src: 'https://picsum.photos/300/200?random=11', alt: 'Category Image 1' },
      { id: 12, src: 'https://picsum.photos/300/200?random=12', alt: 'Category Image 2' },
      { id: 13, src: 'https://picsum.photos/300/200?random=13', alt: 'Category Image 3' },
      { id: 14, src: 'https://picsum.photos/300/200?random=14', alt: 'Category Image 4' },
      { id: 15, src: 'https://picsum.photos/300/200?random=15', alt: 'Category Image 5' },
    ],
  };

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__header__title">홈페이지</h1>
        <p className="home__header__description">환영합니다! 이미지 갤러리를 둘러보세요.</p>
      </div>

      <div className="home__content">
        <div className="home__content__tabs">
          <div className="home__content__tabs__navigation">
            <button
              className={`home__content__tabs__navigation__item ${activeTab === 1 ? 'active' : ''}`}
              onClick={() => setActiveTab(1)}
            >
              최근 이미지
            </button>
            <button
              className={`home__content__tabs__navigation__item ${activeTab === 2 ? 'active' : ''}`}
              onClick={() => setActiveTab(2)}
            >
              인기 이미지
            </button>
            <button
              className={`home__content__tabs__navigation__item ${activeTab === 3 ? 'active' : ''}`}
              onClick={() => setActiveTab(3)}
            >
              카테고리
            </button>
          </div>

          <div className="home__content__tabs__panel">
            <div className={`home__content__tabs__panel__content ${activeTab === 1 ? 'active' : ''}`}>
              <div className="home__content__tabs__panel__content__grid">
                {imageData[1].map((image) => (
                  <div key={image.id} className="home__content__tabs__panel__content__grid__item">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="home__content__tabs__panel__content__grid__item__image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={`home__content__tabs__panel__content ${activeTab === 2 ? 'active' : ''}`}>
              <div className="home__content__tabs__panel__content__grid">
                {imageData[2].map((image) => (
                  <div key={image.id} className="home__content__tabs__panel__content__grid__item">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="home__content__tabs__panel__content__grid__item__image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={`home__content__tabs__panel__content ${activeTab === 3 ? 'active' : ''}`}>
              <div className="home__content__tabs__panel__content__grid">
                {imageData[3].map((image) => (
                  <div key={image.id} className="home__content__tabs__panel__content__grid__item">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="home__content__tabs__panel__content__grid__item__image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 