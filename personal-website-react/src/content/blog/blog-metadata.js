export const blogPosts = [
  {
    slug: 'my-first-post',
    title: 'My First Blog Post',
    date: '2024-01-15',
    tags: ['React', 'JavaScript', 'Web Dev'],
    excerpt: 'Learning React has been an incredible journey. Here are my thoughts on getting started with React development.',
    readTime: '5 min read',
  },
  {
    slug: 'react-hooks-explained',
    title: 'React Hooks Explained',
    date: '2024-02-01',
    tags: ['React', 'JavaScript', 'Tutorial'],
    excerpt: 'A deep dive into React Hooks and how they revolutionized functional components in modern React development.',
    readTime: '8 min read',
  },
  {
    slug: 'web-performance-tips',
    title: 'Web Performance Optimization Tips',
    date: '2024-02-20',
    tags: ['Performance', 'Web Dev', 'Best Practices'],
    excerpt: 'Practical tips to make your web applications faster and more efficient for better user experience.',
    readTime: '6 min read',
  },
];

// Helper to get all unique tags
export const getAllTags = () => {
  const tags = new Set();
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
};

// Helper to get posts by tag
export const getPostsByTag = (tag) => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

// Helper to get post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper to get adjacent posts (for prev/next navigation)
export const getAdjacentPosts = (slug) => {
  const currentIndex = blogPosts.findIndex(post => post.slug === slug);
  return {
    prev: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
    next: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
  };
};
