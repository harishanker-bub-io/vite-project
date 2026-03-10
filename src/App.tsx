import { AgentPanel } from '@agilecrm/500ux-core'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        backgroundColor: '#09090b',
        color: '#fafafa',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', width: '100%', height: '100%' }}>
        <AgentPanel
          title={import.meta.env.VITE_AGENT_TITLE || ''}
          subtitle={import.meta.env.VITE_AGENT_SUBTITLE || ''}
          logo={
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: '#fafafa',
                color: '#09090b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              500
            </div>
          }
          context={{
            appId: import.meta.env.VITE_AGENT_APP_ID || '',
            journeyId: import.meta.env.VITE_AGENT_JOURNEY_ID || '',
          }}
          placeholder="Ask the agent anything..."
          appLabel={import.meta.env.VITE_AGENT_APP_LABEL || ''}
        />
      </div>
    </div>
  )
}

export default App
