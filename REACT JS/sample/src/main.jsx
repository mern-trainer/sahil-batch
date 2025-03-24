import { createRoot } from 'react-dom/client' // default import, named import
import { App } from "./App"

// camelCase -> firstName
// PascalCase -> FirstName

createRoot(document.getElementById('root')).render(<App />)
