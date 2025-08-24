import { ModeToggle } from './components/ModeToggle'
import { ThemeProvider } from './components/ThemeProvider'
import Hero from './sections/Hero'
import CardSection from './sections/CardSection'
import EmploymentTimeline from './sections/EmploymentTimeline'
import PortfolioSection from './sections/PortfolioSection'

const children = (
  <>
    <ModeToggle />
    <Hero />
    <div className='p-4'>
      <CardSection />
      <EmploymentTimeline />
      <PortfolioSection />
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