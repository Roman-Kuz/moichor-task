import axios from 'axios';
import hash from 'hash-object';
import { useEffect, useState } from 'react';

const { CancelToken } = axios;

function useAPI(url, config = {}, initialFetch = true) {
  const [state, setState] = useState({
    response: undefined,
    error: undefined,
    isLoading: true,
  });

  const configHash = hash(config);

  const source = CancelToken.source();

  function fetch() {
    axios(url, {
      ...config,
      cancelToken: source.token,
    })
      .then((response) => {
        setState({ error: undefined, response, isLoading: false });
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled by cleanup: ', error.message);
        } else {
          setState({ error, response: undefined, isLoading: false });
        }
      });
  }

  useEffect(() => {
    setState({ ...state, isLoading: true });

    if (initialFetch) fetch();

    return () => {
      source.cancel('useEffect cleanup.');
    };
  }, [url, configHash]);

  const { response, error, isLoading } = state;

  function setData(newData) {
    const newResponse = { ...response, data: newData };
    setState({ ...state, response: newResponse });
  }

  const data = response ? response.data : undefined;
  return { data, response, error, isLoading, setData, fetch };
}

export default useAPI;
