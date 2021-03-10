import React, { useState } from 'react';
import { Card } from 'antd';
import s from 'styled-components';
import { EditOutlined, DeleteOutlined, CopyOutlined } from '@ant-design/icons';
import ConfirmationModal from '../modals/confirmation';
import { useHistory } from 'react-router-dom';

const StyledCard = s(Card)`
  margin-bottom: 20px;
`;

const Item = ({ item, removeNote, duplicateNote }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const handleEditNote = () => {
    history.push('/edit/' + item.id);
  };

  const handleDeleteNote = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <StyledCard
        title={item.category_name}
        actions={[
          <CopyOutlined key="duplicate" onClick={() => duplicateNote(item.id)} />,
          <EditOutlined key="edit" onClick={() => handleEditNote()} />,
          <DeleteOutlined key="delete" onClick={() => handleDeleteNote()} />,
        ]}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: '<svg width="300" height="300">' + item.content + '</svg>',
          }}
        />
      </StyledCard>
      <ConfirmationModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        removeNote={removeNote}
        idToDelete={item.id}
      />
    </>
  );
};

export default Item;
