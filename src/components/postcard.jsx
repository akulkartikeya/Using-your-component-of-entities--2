import PropTypes from 'prop-types';
import LikeButton from './likebutton';

function PostCard({ profilePic, username, content }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profilePic} alt={username} className="profile-pic" />
        <h3 className="username">{username}</h3>
      </div>
      <p className="content">{content}</p>
      <div className="post-actions">
        <LikeButton />
      </div>
    </div>
  );
}

PostCard.propTypes = {
  profilePic: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PostCard;