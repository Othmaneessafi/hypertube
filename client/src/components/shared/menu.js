import React from 'react';
import Menu from '@material-ui/core/Menu';

const MyMenu = (props) => {
  const {handleClose, isOpen, children} = props;
  return (
    <>
      <Menu
        id="custom-menu"
        anchorEl={isOpen}
        keepMounted
        open={isOpen}
        onClose={handleClose}
        elevation={10}
        PaperProps={{
          style: {
            width: '70vh',
            padding: 0,
            margin: 0,
            background: 'rgb(65, 64, 65)',
            background: 'linear-gradient(143deg, rgba(65, 64, 65, 1) 0%, rgba(30, 29, 32, 1) 69%)',
          },
        }}
      >
        <div>
            {children}
        </div>
      </Menu>
    </>
  );
};
export default MyMenu;