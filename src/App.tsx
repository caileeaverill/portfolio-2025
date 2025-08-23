import { ModeToggle } from './components/ModeToggle'
import { ThemeProvider } from './components/ThemeProvider'
import Hero from './sections/Hero'
import CardSection from './sections/CardSection'
import EmploymentTimeline from './sections/EmploymentTimeline'

const children = (
  <>
    <ModeToggle />
    <Hero />
    <div className='p-4'>
      <CardSection />
      <EmploymentTimeline />
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