import React, { useState } from 'react';
import ToDoPastEvent from './pastEvent';
import ToDoUpcomingEvent from './upcomingEvent';
import ".//cart.css"

const ToggleCartEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('Past events');

  const toggleTab = (tabName: string) => {
    setActiveTab(activeTab === tabName ? null : tabName);
  };

  const tabData = [
    { name: 'Past events', backgroundColor: '#263238', content: <ToDoPastEvent/>},
    { name: 'Upcoming event', backgroundColor: '#263238', content: <ToDoUpcomingEvent/>},
  ];

  return (
    <>
        <div className="toggleToDoListContainer">
            <div className="toggleToDoButtonTabButtonContainer">
                {tabData.map((tab, index) => (
                    <button
                    key={index}
                    className={`tablink${activeTab === tab.name ? ' active' : ''}`}
                    onClick={() => toggleTab(tab.name)}
                    style={{
                        backgroundColor: activeTab === tab.name ? tab.backgroundColor : '',
                        color: activeTab === tab.name ? '#FFF' : '#263238',
                        border:  activeTab === tab.name ? 'none' : '',
                    }}
                    >
                    {tab.name}
                    </button>
                ))}
            </div>

            <>
                {tabData.map((tab, index) => (
                    <div
                    key={index}
                    id={tab.name}
                    className={`tabcontent${activeTab === tab.name ? ' active' : ''}`}
                    style={{
                        display: activeTab === tab.name ? 'block' : 'none',
                        padding: '50px',
                        textAlign: 'center',
                        marginTop: '3%',
                    }}
                    >
                    <>
                    {tab.content}
                    </>
                    
                    </div>
                ))}  
            </>
      </div>
    </>
  );
};

export default ToggleCartEvents;
