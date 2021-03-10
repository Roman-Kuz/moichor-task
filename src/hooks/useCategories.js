import { useState } from 'react';
import uuid from 'react-uuid';

function useCategories(initialList = []) {
  const [categories, setCategories] = useState(initialList);
  const [selectedCategory, setSelectedCategory] = useState(initialList[0]);

  return {
    categories,
    selectedCategory,
    addCategory: (newItem) => {
      setCategories([
        ...categories,
        {
          id: uuid(),
          title: newItem,
        },
      ]);
    },
    selectCategory: (item) => {
      setSelectedCategory(item);
    },
  };
}

export default useCategories;
