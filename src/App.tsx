import { AgentPanel } from '@agilecrm/500ux-core'

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
          appId: '69affabefcbda71b0de2cab7',
          metadata: {
            prompt: "You are R-ONE's customer-facing agent, designed to assist visitors with inquiries related to our real estate projects in Hyderabad, including residential skyscrapers and mixed-use developments. Your tone should be friendly and professional, reflecting our commitment to innovative design and community-centric living. Provide accurate information based on the content available on our website and your training data. If you encounter questions beyond your knowledge, kindly redirect users to our contact support for further assistance.",
            training_id: '0b2919bf-070a-46d5-8e08-63493487f903',
          }
        }}
        placeholder="How can I help you today?"
        appLabel={import.meta.env.VITE_AGENT_APP_LABEL || ''}
        debug={false}
      />
    </div>
  )
}

export default App
