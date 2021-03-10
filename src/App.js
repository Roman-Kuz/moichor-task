import React from 'react';
import { useErrorBoundary } from 'use-error-boundary';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Note from './pages/note';
import Notes from './pages/notes';
import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
import './globals.css';
import useNotes from './hooks/useNotes';
import useCategories from './hooks/useCategories';
import NewNote from './pages/note-new';
import uuid from 'react-uuid';
import Filtration from './components/filtration';

const { Header, Footer, Content } = Layout;

const categoriesList = [
  {
    id: null,
    title: 'All'
  },
  {
    id: uuid(),
    title: 'First test category',
  },
  {
    id: uuid(),
    title: 'Second test category',
  },
  {
    id: uuid(),
    title: 'Third test category',
  },
];

const MainRouter = ({ list, categoryProps, ...props }) => (
  <Switch>
    <Route exact path="/">
      <Notes list={list} {...props} />
    </Route>
    <Route path="/new">
      <NewNote categoryProps={categoryProps} list={list} {...props} />
    </Route>
    <Route path="/edit/:id">
      <Note categoryProps={categoryProps} list={list} {...props} />
    </Route>
  </Switch>
);

const HeaderWrapper = ({
  categories,
  selectedCategory,
  selectCategory,
  addCategory,
  exportNotes
}) => {
  const categoryProps = { categories, selectedCategory, selectCategory, addCategory };
  const location = useLocation();
  const history = useHistory();
  if (location.pathname === '/new' || location.pathname.includes('edit'))
    return (
      <Header>
        <Button onClick={() => history.goBack()} type="primary">
          Back
        </Button>
      </Header>
    );

  return (
    <Header>
      <Filtration isInHeader={true} {...categoryProps} />
      <Button
        onClick={exportNotes}
        type="primary"
        style={{ marginLeft: '20px' }}
      >
        Download
      </Button>
    </Header>
  );
};

function App() {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();
  const categoryProps = useCategories(categoriesList);
  const { list, ...props } = useNotes([], categoryProps.selectedCategory.id);

  return (
    <>
      {didCatch ? (
        <p>An error has been catched: {error.message}</p>
      ) : (
        <Router>
          <Layout>
            <ErrorBoundary>
              <HeaderWrapper {...categoryProps} list={list} {...props} />
              <Content>
                <MainRouter list={list} categoryProps={categoryProps} {...props} />
              </Content>
              <Footer style={{ textAlign: 'center' }}>Notes App</Footer>
            </ErrorBoundary>
          </Layout>
        </Router>
      )}
    </>
  );
}

export default App;
