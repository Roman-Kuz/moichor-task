import { useState } from 'react';
import uuid from 'react-uuid';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function useNotes(initialList = [], categoryId) {
  const [list, setList] = useState(initialList);
  const filteredList = categoryId ? list.filter((item) => item.category_id === categoryId) : list;

  return {
    initialList: list || [],
    list: filteredList || [],
    addNote: (newItem) => {
      setList([
        ...list,
        {
          id: uuid(),
          content: newItem.content,
          category_id: newItem.category_id,
          category_name: newItem.category_name,
        },
      ]);
    },
    removeNote: (itemId) => {
      const updatedNotes = list.filter((item) => item.id !== itemId);
      setList(updatedNotes);
    },
    duplicateNote: (itemId) => {
      const duplicated = list.find((item) => item.id === itemId);
      setList([
        ...list,
        {
          id: uuid(),
          content: duplicated.content,
          category_id: duplicated.category_id,
          category_name: duplicated.category_name,
        },
      ]);
    },
    editNote: (updatedItem) => {
      const updatedNotes = list.map((item) => {
        return item.id === updatedItem.id ? { ...item, ...updatedItem } : item;
      });
      setList(updatedNotes);
    },
    exportNotes: async () => {
      const zip = new JSZip();

      if (categoryId) {
        filteredList.forEach((item, index) => {
          zip.file(`img${index + 1}-${item.id}.svg`, '<svg width="300" height="300">' + item.content + '</svg>');
        });
      } else {
        list.forEach((item, index) => {
          zip.file(`img${index + 1}-${item.id}.svg`, '<svg width="300" height="300">' + item.content + '</svg>');
        });
      }

      zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, 'images.zip');
      });
    },
  };
}

export default useNotes;
