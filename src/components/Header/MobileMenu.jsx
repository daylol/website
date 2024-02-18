import React from 'react';
import { MENU } from '../utils/constants';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
const MobileMenu = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <nav>
      <ul>
        <Modal
          width={300}
          centered={true}
          open={isModalOpen}
          onOk={handleOk}
          footer={null}
          onCancel={handleCancel}>
          {MENU.map((menu, i) => (
            <li onClick={handleCancel} key={i}>
              <Link to={`${menu.link}`}>{menu.name}</Link>
            </li>
          ))}
        </Modal>
      </ul>
    </nav>
  );
};

export default MobileMenu;
