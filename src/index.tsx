import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // TODO: solved the drag-n-drop issue 
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

reportWebVitals();
