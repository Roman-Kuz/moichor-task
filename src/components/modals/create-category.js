import React from 'react';
import { Modal, Input } from 'antd';
import useInput from '../../hooks/useInput';


const CreateCategoryModal = ({ isModalVisible, setIsModalVisible, addCategory }) => {
    const [value, setValue, resetValue] = useInput("");

    const handleOk = () => {
        addCategory(value);
        setIsModalVisible(false);
        resetValue();
    }

    const handleCancel = () => {
        setIsModalVisible(false);
        resetValue();
    }

    return (
        <Modal title="Create Category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input placeholder="Input category name here..." onChange={setValue} value={value} />
        </Modal>
    )
};


export default CreateCategoryModal;
