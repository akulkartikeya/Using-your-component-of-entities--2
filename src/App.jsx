import React from 'react';
import PostCard from './components/PostCard';
import './App.css'; // Optional: For App-level styling

function App() {
  const posts = [
    {
      id: 1,
      profilePic: 'https://via.placeholder.com/40?text=A',
      username: 'Alice',
      content: 'Enjoying a beautiful day!',
    },
    {
      id: 2,
      profilePic: 'https://via.placeholder.com/40?text=B',
      username: 'Bob',
      content: 'Coding is my therapy.',
    },
    {
      id: 3,
      profilePic: 'https://via.placeholder.com/40?text=C',
      username: 'Charlie',
      content: 'Just finished reading a great book.',
    },
    {
      id: 4,
      profilePic: 'https://via.placeholder.com/40?text=D',
      username: 'Diana',
      content: 'Exploring new places.',
    },
  ];

  return (
    <div className="app-container">
      <h1>My Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          profilePic={post.profilePic}
          username={post.username}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default App;