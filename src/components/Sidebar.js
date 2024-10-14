import React from 'react';

const Sidebar = ({ components, onAddComponent }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Components</h2>
      <ul>
        {components.map((component, index) => (
          <li key={index}>
            <button
              className="w-full text-left bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded mb-1"
              onClick={() => onAddComponent(index)}
            >
              {component.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
