import React from 'react';
import ReactDOM from 'react-dom/client';

// Css
import './index.css';

// Components
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root')!
);

if (root) {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
