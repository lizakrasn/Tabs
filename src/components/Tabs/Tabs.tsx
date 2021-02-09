import React from 'react';
import { TabItem, TabsModelBase } from '../TabIteam/TabIteam';

function calculateTransform<TabsModel>(tabs: TabsModel[], activeTab: TabsModel) {
  const tabWidth = 100 / tabs.length;
  const tabIndex = tabs.indexOf(activeTab);

  return tabWidth * tabIndex * tabs.length;
}

interface TabsProps<TabsModel> {
  tabs: TabsModel[];
  activeTab: TabsModel;
  handleOnClick: (tab: TabsModel) => void;
  renderTab?: (tab: TabsModel, index: number) => React.ReactNode;
}

export const Tabs = <TabsModelType extends TabsModelBase, >({
  tabs,
  activeTab,
  handleOnClick,
  renderTab
}: TabsProps<TabsModelType>) => (
  <div className="tabs">
    <ul className="tabs__list">
      {tabs.map((tab, index) => (
        <TabItem
          isActive={Object.is(activeTab, tab)}
          tab={tab}
          index={index}
          handleOnClick={() => handleOnClick(tab)}
          renderTab={renderTab}
          key={index}
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