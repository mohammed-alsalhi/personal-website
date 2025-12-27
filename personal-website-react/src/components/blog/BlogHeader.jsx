import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const BlogHeader = ({ post, onShare }) => {
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    if (onShare) onShare();
  };

  return (
    <motion.div
      className="blog-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="blog-breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/blog" className="breadcrumb-link">Blog</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{post.title}</span>
      </div>

      <h1 className="blog-post-title">{post.title}</h1>

      <div className="blog-post-meta">
        <span className="blog-date">{formattedDate}</span>
        <span className="blog-separator">•</span>
        <span className="blog-read-time">{post.readTime}</span>
      </div>

      <div className="blog-post-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="blog-tag">
            {tag}
          </span>
        ))}
      </div>

      <button className="share-button" onClick={handleShare}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 8l4-2M6 8l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Copy Link
      </button>
    </motion.div>
  );
};

export default BlogHeader;
