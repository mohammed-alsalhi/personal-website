import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const BlogCard = ({ post, index }) => {
  const formattedDate = format(new Date(post.date), 'MMM d, yyyy');

  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`} className="blog-card-link">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>

        <div className="blog-card-meta">
          <span className="blog-date">{formattedDate}</span>
          <span className="blog-separator">•</span>
          <span className="blog-read-time">{post.readTime}</span>
        </div>

        <div className="blog-card-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
