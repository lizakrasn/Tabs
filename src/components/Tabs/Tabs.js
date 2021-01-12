import React from 'react';
import Proptypes from 'prop-types';
import { TabItem } from '../TabIteam/TabIteam';

function calculateTransform(tabs, activeTab) {
  const tabWidth = 100 / tabs.length;
  const tabIndex = tabs.indexOf(activeTab);

  return tabWidth * tabIndex * tabs.length;
}

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  renderTab
}) => (
  <div className="tabs">
    <ul className="tabs__list">
      {tabs.map((tab, index) => (
        <TabItem
          isActive={Object.is(activeTab, tab)}
          tab={tab}
          index={index}
          onClick={() => onChange(tab)}
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

Tabs.defaultProps = {
  renderTab: null,
}

Tabs.propTypes = {
  tabs: Proptypes.arrayOf(Proptypes.shape({
    value: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
  })),
  activeTab: Proptypes.shape({
    value: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
  }),
  onChange: Proptypes.func.isRequired,
  renderTab: Proptypes.func,
}