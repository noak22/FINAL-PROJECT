import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './view/pages/login/1.jsx';
import Signup from './view/pages/signup/2.jsx';
import Home from './view/pages/home/3.jsx';
import Forums from './view/pages/forums/4.jsx';
import Summaries from './view/pages/summaries/5.jsx';
import SavedSummaries from './view/pages/savedSummaries/6.jsx';
import HelpCenter from './view/pages/helpCenter/7.jsx';
import PersonalZone from './view/pages/personalZone/8.jsx';
import Setting from './view/pages/setting/9.jsx';
import Management from './view/pages/management/10.jsx';
import Navigation from './view/components/navigate/navigate.jsx';

function App() {
  const location = useLocation();
  const hideNav = location.pathname === '/' || location.pathname === '/signup';

  return (
    <>
      {!hideNav && <Navigation />}
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
    </>
  );
}

export default App;
