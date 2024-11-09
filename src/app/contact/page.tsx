import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

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
          <h1 style={headerStyle}>Get In Touch</h1>
          <p style={introTextStyle}>
            We’re here to help you with all your interior design needs.
          </p>
          <div style={contactInfoStyle}>
            <h2 style={subHeaderStyle}>Contact Information</h2>
            <ul style={infoListStyle}>
              <li><strong>Address:</strong> Block 6 Lot 5, Alta Tierra, Napolan, Pagadian City, 7016</li>
              <li><strong>Phone:</strong> (+63) 9101617695</li>
              <li><strong>Email:</strong> info@moonpi.com</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '3.5rem',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: '20px',
};

const introTextStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#fff',
  marginBottom: '30px',
  maxWidth: '600px',
  textAlign: 'center',
  margin: '0 auto',
  fontFamily: 'Helvetica',
};

const contactInfoStyle: React.CSSProperties = {
  marginTop: '40px',
  color: '#fff',
  textAlign: 'center',
};

const subHeaderStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: '20px',
  fontFamily: 'Brandon Grotesque',
};

const infoListStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  color: '#fff',
  fontFamily: 'Helvetica',
};

const contentStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 10,
  textAlign: 'center',
  padding: '40px 20px',
  maxWidth: '900px',
  color: '#fff',
  fontFamily: 'Brandon Grotesque',
};

export default Page;
