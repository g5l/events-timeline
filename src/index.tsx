import Timeline from "components/Timeline/Timeline";
import React from 'react';
import ReactDOM from 'react-dom/client';
import timelineItems from './timelineItems';
import './styles.css';

const App = () => (
  <div className="app-container">
    <h1 className="app-title">Event Timeline</h1>
    <h3>{timelineItems.length} timeline items to render</h3>
    <Timeline events={timelineItems}/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);