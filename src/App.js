import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Registration from './components/Registration'
import SetupOrganisation from './components/SetupOrganisation'
import ShowWebpages from './components/ShowWebpages'
import ChatbotIntegration from './components/ChatbotIntegration'
import IntegrationSuccess from './components/IntegrationSuccess'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Registration} />
        <Route path="/setup-organisation" component={SetupOrganisation} />
        <Route path="/show-webpages" component={ShowWebpages} />
        <Route path="/chatbot-integration" component={ChatbotIntegration} />
        <Route path="/integration-success" component={IntegrationSuccess} />
      </Switch>
    </Router>
  )
}

export default App
