import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './view/pages/login/1';
import Signup from './view/pages/signup/2';
import Home from './view/pages/home/3';
import Forums from './view/pages/forums/4';
import Summaries from './view/pages/summaries/5';
import SavedSummaries from './view/pages/savedSummaries/6';
import HelpCenter from './view/pages/helpCenter/7';
import PersonalZone from './view/pages/personalZone/8';
import Setting from './view/pages/setting/9';
import Management from './view/pages/management/10';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/summaries" element={<Summaries />} />
        <Route path="/saved-summaries" element={<SavedSummaries />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/personal-zone" element={<PersonalZone />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </Router>
  );
}

export default App;