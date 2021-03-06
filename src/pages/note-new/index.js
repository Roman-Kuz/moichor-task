import React, { useState } from 'react';
import { Button } from 'antd';
import { Whiteboard, EventStream, EventStore } from '@ohtomi/react-whiteboard';
import { useHistory } from 'react-router-dom';
import Filtration from '../../components/filtration';

const NewNote = ({ categoryProps, addNote }) => {
  const history = useHistory();
  const [params] = useState({ store: new EventStore(), stream: new EventStream() })

  return (
    <div>
      <Filtration {...categoryProps} />

      <div id="anchor">
        <Whiteboard
          events={params.stream}
          eventStore={params.store}
          width={300}
          height={300}
          style={{ backgroundColor: '#FFFFF0' }}
        />
      </div>

      <Button
        style={{ marginTop: 20 }}
        onClick={() => {
          const svg = document
            .getElementById('anchor')
            .getElementsByTagName('svg');
          addNote({
            content: svg[0].innerHTML,
            category_id: categoryProps.selectedCategory.id,
            category_name: categoryProps.selectedCategory.title,
          });
          history.push('/');
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default NewNote;
