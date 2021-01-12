import React from 'react';
import Proptypes from 'prop-types';

export const TabItem = ({
  tab,
  index,
  onClick,
  isActive,
  renderTab
}) => (
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

TabItem.defaultProps = {
  renderTab: null,
}

TabItem.propTypes = {
  tab: Proptypes.shape({
    value: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
  }),
  activeTab: Proptypes.shape({
    value: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
  }),
  index: Proptypes.number.isRequired,
  onClick: Proptypes.func.isRequired,
  renderTab: Proptypes.func,
}