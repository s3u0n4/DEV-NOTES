"use client";

import React, { useState } from "react";
import "./sidebar.css";

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
    <div className="sunSidebar">
      {/* Search Section */}
      <div className="sunSidebarCard">
        <h3 className="sunSidebarTitle">Search</h3>
        <div className="sunSearchWrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sunSearchIcon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input className="sunSearchInput" placeholder="Search posts..." />
        </div>
      </div>

      {/* Categories Section */}
      <div className="sunSidebarCard">
        <h3 className="sunSidebarTitle">Categories</h3>
        <div className="sunCategoryList">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`sunCategoryItem ${
                activeCategory === cat.name ? "sunActive" : ""
              }`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <span>{cat.name}</span>
              <span className="sunCategoryCount">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="sunStatBar">
        <h3 className="sunStatBarTitle">Blog Stats</h3>
        <div className="sunStatsItem">
          <div className="sunStatsNumber">12</div>
          <div className="sunStatsLabel">Total Posts</div>
        </div>

        <div className="sunStatsDivider"></div>

        <div className="sunStatsItem">
          <div className="sunStatsNumber">11</div>
          <div className="sunStatsLabel">Categories</div>
        </div>
      </div>
    </div>
  );
}
