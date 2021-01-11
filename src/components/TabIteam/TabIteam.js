import React from 'react';

export const TabItem = ({ tab, index, onClick, isActive, renderTab }) => (
  <li
    className={isActive
      ? 'tabs__tab tabs__tab--is-active'
      : 'tabs__tab'}
    onClick={() => onClick()}
  >
    {!renderTab
      ? tab.label
      : renderTab(tab, index)
    }
  </li>
);