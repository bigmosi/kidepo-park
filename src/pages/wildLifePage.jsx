import React from 'react';
import './wildlifePage.css';

const WildlifePage = () => {
  const wildlifeData = [
    {
      name: 'Lion',
      description: 'The king of the jungle, lions are majestic creatures known for their strength and pride.',
      image: '/images/image4.jpg'
    },
    {
      name: 'Elephant',
      description: 'Gentle giants of the savanna, elephants are intelligent and social animals.',
      image: '/images/image5.jpg'
    },
    {
        name: 'Elephant',
        description: 'Gentle giants of the savanna, elephants are intelligent and social animals.',
        image: '/images/image6.jpg'
      },
      {
        name: 'Elephant',
        description: 'Gentle giants of the savanna, elephants are intelligent and social animals.',
        image: '/images/image5.jpg'
      },
  ];

  return (
    <div className="wildlife-page">
      <header>
        <h1>Wildlife</h1>
        <p>Discover the amazing wildlife of our park.</p>
      </header>
      <main>
        <section>
          <h2>Key Species</h2>
          <div className="wildlife-gallery">
            {wildlifeData.map((species, index) => (
              <div key={index} className="species-card">
                <img src={species.image} alt={species.name} />
                <h3>{species.name}</h3>
                <p>{species.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WildlifePage;
