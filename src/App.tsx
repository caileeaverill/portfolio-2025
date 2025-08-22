import React from 'react'
import Hero from './sections/Hero'
import { ThemeProvider } from './components/ThemeProvider'
import { ModeToggle } from './components/ModeToggle'

const children = (
  <>
    <ModeToggle />
    <Hero />
    <div className='h-screen'>

    </div>
  </>
)

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App