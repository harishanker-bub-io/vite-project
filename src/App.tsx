import { AgentPanel } from '@agilecrm/500ux-core'
import './App.css'
import roboImage from './assets/robo.jpg'

function App() {
  return (
    <div className='w-full h-full' >
        <AgentPanel
          title={import.meta.env.VITE_AGENT_TITLE || ''}
          subtitle={import.meta.env.VITE_AGENT_SUBTITLE || ''}
          logo={
            <img
              src={roboImage}
              alt="Robot Logo"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                objectFit: 'cover',
              }}
            />
          }
          context={{
            appId: import.meta.env.VITE_AGENT_APP_ID || '',
          }}
          placeholder="Ask the agent anything..."
          appLabel={import.meta.env.VITE_AGENT_APP_LABEL || ''}
        />
    </div>
  )
}

export default App
