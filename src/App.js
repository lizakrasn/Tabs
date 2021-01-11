import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabList = [
  {
    'value': '1',
    'label': 'Tab One'
  },
  {
    'value': '2',
    'label': 'Tab Two'
  },
  {
    'value': '3',
    'label': 'Tab Tree'
  },
  {
    'value': '4',
    'label': 'Tab Four'
  },
]

const customRender = (tab) => {
  return `${tab.label} \u{1F384}`
}

const customRenderSecond = (tab, index) => {
  if (index % 2 === 0) {
    return `${tab.label} \u{1F427}`
  } else {
    return `${tab.label} \u{1F98A}`
  }
}

function App() {
  const [tabs, setTabs] = useState(tabList)
  const [activeTab, setActiveTab] = useState(tabList[0]);

  const onTabSelected = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="app">
      <h1 className="app__title">React tabs</h1>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={onTabSelected}
      />
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={onTabSelected}
        renderTab={customRender}
      />
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={onTabSelected}
        renderTab={customRenderSecond}
      />
    </div>
  );
}

export default App;
