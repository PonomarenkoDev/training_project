import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<div>
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
</div>);