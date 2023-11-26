import {Nav, Todo, InProgress, Done} from './components'
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  return (
    <div>
      <Nav />
      <DndProvider backend={HTML5Backend}>
        <Todo />
      </DndProvider>
      <DndProvider backend={HTML5Backend} > 
        <InProgress />
      </DndProvider>
      <DndProvider backend={HTML5Backend} > 
        <Done />
      </DndProvider>
    </div>
  );
};

export default App;
