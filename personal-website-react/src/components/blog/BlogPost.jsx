import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostBySlug, getAdjacentPosts } from '../../content/blog/blog-metadata';
import BlogHeader from './BlogHeader';
import MarkdownRenderer from './MarkdownRenderer';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const post = getPostBySlug(slug);
  const { prev, next } = getAdjacentPosts(slug);

  useEffect(() => {
    if (!post) {
      setLoading(false);
      return;
    }

    // Load the markdown content
    const loadContent = async () => {
      try {
        const module = await import(`../../content/blog/${slug}.md?raw`);
        setContent(module.default);
      } catch (error) {
        console.error('Error loading blog post:', error);
        setContent('# Error\n\nFailed to load blog post content.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [slug, post]);

  const handleShare = () => {
    setShowCopiedMessage(true);
    setTimeout(() => setShowCopiedMessage(false), 2000);
  };

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="loading-spinner"></div>
        <p>Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <motion.div
      className="blog-post-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BlogHeader post={post} onShare={handleShare} />

      {showCopiedMessage && (
        <motion.div
          className="copied-message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Link copied to clipboard!
        </motion.div>
      )}

      <div className="blog-post-content">
        <MarkdownRenderer content={content} />
      </div>

      <div className="blog-post-navigation">
        <div className="nav-links-container">
          {prev && (
            <Link to={`/blog/${prev.slug}`} className="blog-post-nav-link prev-link">
              <span className="nav-label">← Previous</span>
              <span className="nav-title">{prev.title}</span>
            </Link>
          )}
          {next && (
            <Link to={`/blog/${next.slug}`} className="blog-post-nav-link next-link">
              <span className="nav-label">Next →</span>
              <span className="nav-title">{next.title}</span>
            </Link>
          )}
        </div>
      </div>

      <div className="back-to-blog">
        <Link to="/blog" className="back-link">
          ← Back to all posts
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogPost;
