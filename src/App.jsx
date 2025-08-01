import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SpendingList from './components/SpendingList';

function App() {
  const [activeSection, setActiveSection] = useState('revenue');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <SpendingList />
        </main>
      </div>
    </div>
  );
}

export default App;