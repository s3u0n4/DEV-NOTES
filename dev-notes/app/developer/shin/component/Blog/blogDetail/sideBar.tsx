import React, { useState } from "react";

export default function Sidebar() {
  // 선택된 카테고리를 관리하는 상태 (기본값: 'All')
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", count: 12 },
    { name: "React", count: 2 },
    { name: "TypeScript", count: 1 },
    { name: "Architecture", count: 1 },
    { name: "CSS", count: 1 },
    { name: "Cloud", count: 5 },
  ];

  return (
    <div className="sidebar">
      {/* Search Section */}
      <div className="sidebarCard">
        <h3 className="sidebarTitle">Search</h3>
        <div className="searchWrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="searchIcon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input className="searchInput" placeholder="Search posts..." />
        </div>
      </div>

      {/* Categories Section */}
      <div className="sidebarCard">
        <h3 className="sidebarTitle">Categories</h3>
        <div className="categoryList">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`categoryItem ${
                activeCategory === cat.name ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <span>{cat.name}</span>
              <span className="categoryCount">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="statBar">
        <h3 className="statBarTitle">Blog Stats</h3>
        <div className="statsItem">
          <div className="statsNumber">12</div>
          <div className="statsLabel">Total Posts</div>
        </div>

        <div className="statsDivider"></div>

        <div className="statsItem">
          <div className="statsNumber">11</div>
          <div className="statsLabel">Categories</div>
        </div>
      </div>
    </div>
  );
}
