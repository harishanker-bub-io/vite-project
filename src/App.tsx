import { AgentPanel } from '@agilecrm/500ux-core'
import './App.css'

function App() {
  return (
    <div className='w-full h-full' >
        <AgentPanel
          title={import.meta.env.VITE_AGENT_TITLE || ''}
          subtitle={import.meta.env.VITE_AGENT_SUBTITLE || ''}
          logo={
            <img
              src="https://r-one.co.in/wp-content/uploads/2025/10/rone-logo-1.png"
              alt="Robot Logo"
              style={{
                width: 100,
                height: 36,
                borderRadius: 10,
                objectFit: 'contain',
              }}
            />
          }
          context={{
            appId: import.meta.env.VITE_AGENT_APP_ID || '',
            metadata: {
              jug_prompt: import.meta.env.VITE_AGENT_JUG_PROMPT || ''
            }
          }}
          placeholder="Ask the agent anything..."
          appLabel={import.meta.env.VITE_AGENT_APP_LABEL || ''}
        />
    </div>
  )
}

export default App
