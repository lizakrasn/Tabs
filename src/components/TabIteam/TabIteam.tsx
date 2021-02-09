import React from 'react';
import Proptypes from 'prop-types';

interface TabItemProps<TabsModel> {
  tab: TabsModel;
  index: number;
  isActive: boolean;
  handleOnClick: () => void;
  renderTab?: (tab: TabsModel, index: number) => React.ReactNode;
}

export interface TabsModelBase {
  label : string
}

export const TabItem = <TabsModel extends TabsModelBase, > ({
  tab,
  index,
  handleOnClick,
  isActive,
  renderTab
}: TabItemProps<TabsModel>) => (
  <li
    className={isActive
      ? 'tabs__tab tabs__tab--is-active'
      : 'tabs__tab'}
    onClick={handleOnClick}
  >
    {!renderTab
      ? tab.label
      : renderTab(tab, index)
    }
  </li>
);