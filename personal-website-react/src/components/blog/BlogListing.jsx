import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../content/blog/blog-metadata';
import BlogSearch from './BlogSearch';
import TagFilter from './TagFilter';
import BlogCard from './BlogCard';

const BlogListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('date-desc');

  const filteredAndSortedPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const matchesSearch =
          searchTerm === '' ||
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.some((tag) => post.tags.includes(tag));

        return matchesSearch && matchesTags;
      })
      .sort((a, b) => {
        if (sortBy === 'date-desc') {
          return new Date(b.date) - new Date(a.date);
        }
        if (sortBy === 'date-asc') {
          return new Date(a.date) - new Date(b.date);
        }
        return a.title.localeCompare(b.title);
      });
  }, [searchTerm, selectedTags, sortBy]);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="blog-listing-page">
      <motion.div
        className="blog-header-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="blog-page-title">Blog</h1>
        <p className="blog-page-subtitle">
          Thoughts on web development, programming, and technology
        </p>
      </motion.div>

      <div className="blog-controls">
        <BlogSearch onSearch={setSearchTerm} />

        <div className="blog-sort">
          <label htmlFor="sort-select" className="sort-label">
            Sort by:
          </label>
          <select
            id="sort-select"
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </div>

      <TagFilter
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        onClearAll={handleClearAllTags}
      />

      {filteredAndSortedPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredAndSortedPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      ) : (
        <motion.div
          className="blog-empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>No posts found matching your criteria.</p>
          <button className="clear-filters-btn" onClick={() => { setSearchTerm(''); setSelectedTags([]); }}>
            Clear all filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default BlogListing;
