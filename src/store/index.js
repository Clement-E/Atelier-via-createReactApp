import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

// import logMiddleware from './logMiddleware';
import ajaxMiddleware from './ajaxMiddleware';

const appliedMiddlewares = applyMiddleware(ajaxMiddleware);

const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// On se crée une variable pour "composer" avec notre propre middleware
// et celui fourni par les devTools. Les enhancers représentent TOUS les 
// middlewares utilisés par mon app, internes, comme externes

const enhancers = compose(appliedMiddlewares, ...devTools);

const store = createStore(reducer, enhancers);


export default store;