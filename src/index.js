import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import { App } from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <audio autoPlay controls loop>
        <source src="new_Lady.mp3" type="audio/mpeg" />
      </audio>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        ac
        <br />
        adc
      </a>
      
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
    
  </>
)
