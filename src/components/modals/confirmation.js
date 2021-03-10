import React from 'react';
import { Modal } from 'antd';

const ConfirmationModal = ({ idToDelete, removeNote, isModalVisible, setIsModalVisible }) => {

    const handleOk = () => {
        removeNote(idToDelete);
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <Modal okButtonProps={{ danger: true }} title="Delete Note" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Are you sure you want to delete this note?</p>
        </Modal>
    )
};


export default ConfirmationModal;
