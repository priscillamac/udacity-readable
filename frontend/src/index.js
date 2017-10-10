import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { compose, applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      ReduxThunk
    ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
