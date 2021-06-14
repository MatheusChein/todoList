import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DonePage } from './pages/DonePage';
import { TodoPage } from './pages/TodoPage';

import { Header } from "./components/Header";

import { ItemListProvider } from './hooks/useItemList';

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Router>
      <Header />
      <ItemListProvider>
        <Switch>
          <Route path='/' exact component={TodoPage}/>
          <Route path='/done'component={DonePage}/>
        </Switch>
        <GlobalStyle />
      </ItemListProvider>
    </Router>
  );
}

export default App;
