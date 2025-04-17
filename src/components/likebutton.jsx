import React, { useState } from 'react';
function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleClick}>
      {isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}

export default LikeButton;