import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div style={contentStyle}>
          <h1 style={headerStyle}>Modern Home Interior</h1>
          <div style={containerStyle}>
            <p style={introStyle}>
              We design interior spaces that don't simply look good, we design them to feel good too. 
              And we’re bloody great at it.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const headerStyle = {
  textAlign: 'center' as 'center',
  margin: '20px 0',
  fontSize: '3rem',
  color: '#fff',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 20px',
};

const introStyle = {
  marginBottom: '30px',
  fontSize: '1.2rem',
  color: '#fff',
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 10,
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Times New Roman, Brandon Grotesque, sans-serif',
};


export default Home;
