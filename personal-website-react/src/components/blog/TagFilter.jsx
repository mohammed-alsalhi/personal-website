import { getAllTags } from '../../content/blog/blog-metadata';

const TagFilter = ({ selectedTags, onTagToggle, onClearAll }) => {
  const allTags = getAllTags();

  return (
    <div className="tag-filter">
      <div className="tag-filter-header">
        <span className="filter-label">Filter by tags:</span>
        {selectedTags.length > 0 && (
          <button className="clear-filters-btn" onClick={onClearAll}>
            Clear all
          </button>
        )}
      </div>
      <div className="tag-pills">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`tag-pill ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
