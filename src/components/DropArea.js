import React from 'react';
import Draggable from 'react-draggable';

const DropArea = ({ currentPageIndex, pages }) => {
  return (
    <>
      <h3 className="font-bold text-lg mb-2">Form Layout</h3>
      {pages[currentPageIndex].components.length === 0 ? (
        <p className="text-gray-500">Drag and drop components here.</p>
      ) : (
        pages[currentPageIndex].components.map((component) => (
          <Draggable key={component.id}>
            <div className="draggable-component border border-gray-300 rounded p-2 mb-2 bg-white shadow-sm">
              {component.type === 'input' && (
                <input
                  type="text"
                  placeholder={component.label}
                  className="border p-2 rounded w-full"
                />
              )}
              {component.type === 'textarea' && (
                <textarea
                  placeholder={component.label}
                  className="border p-2 rounded w-full"
                />
              )}
              {component.type === 'select' && (
                <select className="border p-2 rounded w-full">
                  <option value="">{component.label}</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              )}
              {component.type === 'checkbox' && (
                <div className="flex items-center">
                  <input type="checkbox" id={component.id} />
                  <label htmlFor={component.id} className="ml-2">
                    {component.label}
                  </label>
                </div>
              )}
              {component.type === 'date' && (
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  placeholder={component.label}
                />
              )}
              {component.type === 'file' && (
                <input
                  type="file"
                  className="border p-2 rounded w-full"
                  placeholder={component.label}
                />
              )}
              {component.type === 'number' && (
                <input
                  type="number"
                  placeholder={component.label}
                  className="border p-2 rounded w-full"
                />
              )}
              {component.type === 'email' && (
                <input
                  type="email"
                  placeholder={component.label}
                  className="border p-2 rounded w-full"
                />
              )}
              {component.type === 'button' && (
                <button className="bg-blue-500 text-white rounded p-2 w-full">
                  {component.label}
                </button>
              )}
            </div>
          </Draggable>
        ))
      )}
    </>
  );
};

export default DropArea;
