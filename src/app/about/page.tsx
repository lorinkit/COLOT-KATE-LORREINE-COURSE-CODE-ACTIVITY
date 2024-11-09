import React from 'react'
import MainLayout from '@/components/layout/MainLayout';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  margin: '20px 0',
  fontSize: '3.5rem',
  fontFamily: 'Times New Roman'
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 20px',
};

const introStyle: React.CSSProperties = {
  marginBottom: '30px',
  fontSize: '1.1rem',
  fontFamily: 'Brandon Grotesque',
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '40px',
  padding: '20px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const sectionHeaderStyle: React.CSSProperties = {
  marginBottom: '10px',
  fontSize: '1.8rem',
  color: '#0070f3',
};

const contentStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 10, 
  textAlign: 'center',
  padding: '20px', 
  fontFamily: 'Times New Roman, Brandon Grotesque, sans-serif',
};

const Page: React.FC = () => {
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
          <h1 style={headerStyle}>About Us</h1>
          <div style={containerStyle}>
            <p style={introStyle}>
              Discover the art of contemporary home interiors where minimalism meets functionality. From sleek lines to sophisticated finishes, our designs transform your space into a modern sanctuary. Explore a world of innovative layouts, luxurious textures, and intelligent solutions that redefine comfort and style for the modern home. Moonpi, Your Home is My Home!
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
