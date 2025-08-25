import { ThemeProvider } from './components/ThemeProvider'
import { Outlet } from 'react-router'
import TopNav from './components/TopNav'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TopNav />
      <Outlet />
    </ThemeProvider>
  )
}

export default App