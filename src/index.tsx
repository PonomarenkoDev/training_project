import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";

import "./shared/config/i18n/i18n"
import {ErrorBoundary} from "app/providers/ErrorBoundary";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<div>
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
</div>);