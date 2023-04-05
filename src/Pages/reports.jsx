import { useState } from 'react';

function Tab1() {
    return <h2>Tab 1 content</h2>;
}

function Tab2() {
    return <h2>Tab 2 content</h2>;
}

function Tab3() {
    return <h2>Tab 3 content</h2>;
}

function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'All quotations Report', content: <Tab1 /> },
        { label: 'Tab 2', content: <Tab2 /> },
        { label: 'Tab 3', content: <Tab3 /> },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="container">
            <div className="tabs">
                <ul>
                    {tabs.map((tab, index) => (
                        <li className='sidebar-item' key={index}>
                            <button
                                className={index === activeTab ? 'active' : ''}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tab-content">{tabs[activeTab].content}</div>
        </div>
    );
}

export default Tabs;
