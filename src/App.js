import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Sidebar from './components/Sidebar';
import DropArea from './components/DropArea';
import './styles.css'; // Import the CSS file for additional styles

const App = () => {
  const [pages, setPages] = useState([{ id: 'page-1', components: [] }]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const components = [
    { type: 'input', label: 'Input Field' },
    { type: 'textarea', label: 'Textarea' },
    { type: 'select', label: 'Select Dropdown' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'date', label: 'Date Picker' },
    { type: 'file', label: 'File Upload' },
    { type: 'number', label: 'Number Input' },
    { type: 'email', label: 'Email Input' },
    { id: 'button-1', label: 'Button', type: 'button', required: false },
  ];

  const handleAddComponent = (index) => {
    const newPages = [...pages];
    const newComponent = { ...components[index], id: `${components[index].type}-${Date.now()}` };
    newPages[currentPageIndex].components.push(newComponent);
    setPages(newPages);
  };

  const handleAddPage = () => {
    const newPage = { id: `page-${pages.length + 1}`, components: [] };
    setPages([...pages, newPage]);
    setCurrentPageIndex(pages.length); // Automatically go to the new page
  };

  const handlePageChange = (index) => {
    setCurrentPageIndex(index);
  };

  return (
    <div className="app-container flex h-screen">
      <div className="sidebar-container w-64 border-r border-gray-300 p-4">
        <Sidebar components={components} onAddComponent={handleAddComponent} />
      </div>

      <div className="drop-area-container flex-grow p-4 border-dashed border-2 border-gray-400">
        <DropArea currentPageIndex={currentPageIndex} pages={pages} />
      </div>

      <div className="footer p-4 flex justify-between items-center bg-gray-200">
        <div className="page-navigation flex gap-2">
          {pages.map((page, index) => (
            <button
              key={page.id}
              className={`px-4 py-2 ${currentPageIndex === index ? 'bg-blue-500 text-white' : 'bg-white text-black'} border`}
              onClick={() => handlePageChange(index)}
            >
              Page {index + 1}
            </button>
          ))}
        </div>
        <button className="button bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddPage}>
          Add Page
        </button>
      </div>
    </div>
  );
};

export default App;
