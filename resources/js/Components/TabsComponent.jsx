import { CodeAmber, CodeViolet } from './CodeColors';
import { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabContents = {
    javascript: <div className="p-4 bg-blue-50">Home Content: Welcome to the main page!</div>,
    php: <div className="p-4 bg-green-50">Profile Content: User details and settings</div>,
    python: <div className="p-4 bg-purple-50">Messages Content: Your recent conversations</div>
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#232635]">
      <div className="flex border-b">
        {Object.keys(tabContents).map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-100'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default TabComponent;
