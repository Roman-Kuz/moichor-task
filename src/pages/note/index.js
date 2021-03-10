import React, { useEffect, useMemo, useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import '../../globals.css';
import { Whiteboard, EventStream, EventStore } from '@ohtomi/react-whiteboard';
import { useParams, useHistory } from 'react-router-dom';
import Filtration from '../../components/filtration';

const Note = ({ categoryProps, editNote, initialList }) => {
  const { id } = useParams();
  const [params] = useState({ store: new EventStore(), stream: new EventStream() })

  const currNote = useMemo(() => initialList.find((item) => item.id === id), [id, initialList]);

  useEffect(() => {
    const svgWrapper = document.getElementById('anchor');
    const elem = svgWrapper.firstChild.lastChild.firstChild;

    elem.innerHTML = currNote.content;
  }, [currNote.content]);

  const history = useHistory();


  return (
    <>
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
          editNote({
            id: currNote.id,
            content: svg[0].innerHTML,
            category_id: categoryProps.selectedCategory.id,
            category_name: categoryProps.selectedCategory.title,
          });
          history.push('/');
        }}
      >
        Save
      </Button>
    </>
  );
};

export default Note;
