import React from 'react';
import './categoryitem.css';
import { Link } from 'react-router-dom';
import categories from '../serchbycotegorylogo/images/helpercode';

export default function Categoryitems() {
  return (
    <div className="categoryimageconatiner">
      {categories.map((group, groupIndex) => (
        <div key={groupIndex} className="category-group">
          <h1>{group.title}</h1>
          <div className="categoryitems1">
            {group.items.map((item, itemIndex) => (
              <div key={itemIndex} className="category-card">
                <Link to={item.path}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                  
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
