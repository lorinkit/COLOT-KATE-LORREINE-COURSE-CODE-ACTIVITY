// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between h-10 bg-black-300 items-center px-4">
      <h1>Moonpi</h1>
      <nav>
        <ul className="flex gap-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/users">Users</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/sign">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
