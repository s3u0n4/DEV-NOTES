"use client";

import React, { useState } from "react";

export default function Sidebar() {
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
    <div className="shinSidebar">
      {/* Search Section */}
      <div className="shinSidebarCard">
        <h3 className="shinSidebarTitle">Search</h3>
        <div className="shinSearchWrapper">
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
            className="shinSearchIcon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input className="shinSearchInput" placeholder="Search posts..." />
        </div>
      </div>

      {/* Categories Section */}
      <div className="shinSidebarCard">
        <h3 className="shinSidebarTitle">Categories</h3>
        <div className="shinCategoryList">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`shinCategoryItem ${
                activeCategory === cat.name ? "shinActive" : ""
              }`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <span>{cat.name}</span>
              <span className="shinCategoryCount">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="shinStatBar">
        <h3 className="shinStatBarTitle">Blog Stats</h3>
        <div className="shinStatsItem">
          <div className="shinStatsNumber">12</div>
          <div className="shinStatsLabel">Total Posts</div>
        </div>

        <div className="shinStatsDivider"></div>

        <div className="shinStatsItem">
          <div className="shinStatsNumber">11</div>
          <div className="shinStatsLabel">Categories</div>
        </div>
      </div>
    </div>
  );
}
