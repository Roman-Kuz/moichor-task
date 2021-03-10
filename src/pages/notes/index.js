import React from 'react';
import NotesList from '../../components/notes-list';
import { Button } from 'antd';
import s from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const StyledButton = s(Button)`
  position: fixed;
  bottom: 50px;
  left: 50px;
  width: 70px !important;
  height: 70px !important;
`;

const Notes = ({ list, ...props }) => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push('/new');
  };

  return (
    <>
      {!!list.length && <NotesList list={list} {...props} />}
      {!list.length && <div>No notes yet.</div>}
      <StyledButton
        onClick={handleButtonClick}
        type="primary"
        size="large"
        shape="circle"
        icon={<PlusOutlined />}
      />
    </>
  );
};

export default Notes;
