import React from 'react';
import './home.css';

const HomePage = () => {
    const imageSrc = process.env.PUBLIC_URL + '/images/image1.jpg';
    const imageSrc2 = process.env.PUBLIC_URL + '/images/image2.jpg';

  return (
    <div className="home-page">
      <header>
        <h1 style={{color: "darkblue"}}>Welcome to Kidepo National Parks</h1>
        <p>Explore the beauty of our national parks</p>
      </header>
      <main>
        <section>
          <h2 style={{textAlign: "center", color: "darkblue"}}>Featured Parks</h2>
          <div className="featured-parks">
            <div className="park-card">
              <img src={imageSrc} alt="Park 1" width={200} height={600} />
              <h3>Mau National Park</h3>
              <p>Welcome to our beautiful park nestled in the heart of nature. With lush greenery, towering trees, and vibrant flowers, our park offers a serene escape from the hustle and bustle of city life. Take a leisurely stroll along winding pathways, breathe in the fresh air, and immerse yourself in the tranquil surroundings. Listen to the melodies of chirping birds and the gentle rustle of leaves in the breeze. Our park provides a peaceful sanctuary where you can relax, rejuvenate, and connect with nature. Whether you're seeking solitude, enjoying a picnic with loved ones, or simply admiring the natural beauty, our park welcomes you with open arms. Come and experience the enchanting charm of our beloved park today!</p>
            </div>
            <div className="park-card">
            <img src={imageSrc2} alt="Park 1" width={200} height={600} />
              <h3>Murchesion Fall National Park</h3>
              <p>Step into a world of natural splendor at our enchanting park. Nestled amidst rolling hills and shaded groves, our park beckons you to explore its scenic wonders. Wander along meandering pathways lined with colorful blooms, where every turn reveals a new vista of breathtaking beauty. Pause by tranquil ponds where graceful swans glide serenely across the water, or find a quiet spot beneath the shade of towering trees to unwind and reflect. With vibrant flora and fauna thriving in every corner, our park is a haven for wildlife enthusiasts and nature lovers alike. Whether you're seeking adventure or seeking solace, our park offers something for everyone. Come and discover the magic of nature at our beloved park today!</p>
            </div>
          </div>
        </section>
        <section style={{textAlign: "center"}}>
          <h2  style={{color: "darkblue"}}>About Us</h2>
          <p>Learn more about our organization and mission.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 National Parks</p>
      </footer>
    </div>
  );
};

export default HomePage;
