import React from 'react';
import { Link } from 'react-router-dom';
import { BsEmojiDizzy } from 'react-icons/bs';

function Logo() {
  return (
    <Link to="/">
      <div
        className="flex items-center text-pink-400 
        hover:text-pink-500 transition-colors 
        duration-500 ease-in-out"
      >
        <BsEmojiDizzy className="text-4xl md:text-4xl mr-2" />
        <h4 className="text-2xl md:text-3xl font-semibold">Moodly</h4>
      </div>
    </Link>
  );
}

export default Logo;
