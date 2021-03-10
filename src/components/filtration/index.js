import React, { useState } from 'react';
import CreateCategoryModal from '../modals/create-category';
import CategorySelect from '../category/select';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Filtration = ({
  categories,
  selectedCategory,
  selectCategory,
  addCategory,
  isInHeader,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const categoryProps = { categories, selectedCategory, selectCategory };

  return (
    <div style={{ textAlign: 'right' }}>
      <CategorySelect isInHeader={isInHeader} {...categoryProps} />
      <Button
        onClick={() => setIsModalVisible(true)}
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
      />
      <CreateCategoryModal
        addCategory={addCategory}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default Filtration;