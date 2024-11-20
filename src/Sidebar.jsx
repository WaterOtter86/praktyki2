import React from 'react';

const Sidebar = ({ position }) => {
  return (
    <aside style={{
      width: '20%',
      backgroundColor: '#f1f1f1',
      padding: '15px',
      textAlign: 'center',
    }}>
      <p>{position} Sidebar</p>
    </aside>
  );
};

export default Sidebar;
