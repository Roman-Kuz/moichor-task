import React, { useEffect } from 'react';
import { Select } from 'antd';
import s from 'styled-components';

const StyledSelect = s(Select)`
  margin-right: 20px;
`;

const { Option } = Select;

const CategorySelect = ({ categories, selectedCategory, selectCategory, isInHeader = false }) => {

  const filteredCategories = isInHeader ? categories : categories.filter((item) => item.id);

  const handleChange = (value) => {
    selectCategory(categories.find((item) => item.id === value));
  };

  useEffect(() => {
    if (!isInHeader && !selectedCategory.id) selectCategory(filteredCategories[0]);
  }, [selectedCategory, isInHeader, filteredCategories, selectCategory])

  return (
    <StyledSelect
      value={selectedCategory.id}
      style={{ minWidth: 300 }}
      onChange={handleChange}
    >
      {filteredCategories.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.title}
        </Option>
      ))}
    </StyledSelect>
  );
};

export default CategorySelect;
