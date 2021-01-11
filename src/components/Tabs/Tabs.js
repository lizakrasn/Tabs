import React from 'react';
import { TabItem } from '../TabIteam/TabIteam';

function calculateTransform(tabs, activeTab) {
  const tabWidth = 100 / tabs.length;
  const tabIndex = tabs.indexOf(activeTab);

  return tabWidth * tabIndex * tabs.length;
}

export const Tabs = ({ tabs, activeTab, onChange, renderTab }) => (
  <div className="tabs">
    <ul className="tabs__list">
      {tabs.map((tab, index) => (
        <TabItem
          isActive={Object.is(activeTab, tab)}
          tab={tab}
          index={index}
          onClick={() => onChange(tab)}
          renderTab={renderTab}
        />
      ))}
    </ul>
    <div
      className="tabs__slider"
      style={{
        width: `calc(100% / ${tabs.length}`,
        transform: `translate(${calculateTransform(tabs, activeTab)}%, 0)`
      }}
    >
    </div>
  </div>
);