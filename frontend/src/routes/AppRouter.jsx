// src/routes/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AuthPage from '../pages/AuthPage';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardOverview from '../pages/dashboard/Overview';
import Resumes from '../pages/dashboard/Resumes';
import AITools from '../pages/dashboard/AITools';
import RewriteTool from '../components/ai-tools/RewriteTool';
import AIToolsLayout from '../components/ai-tools/AIToolsLayout';
import Settings from '../pages/dashboard/Settings';
import ProfileSettings from '../components/settings/ProfileSettings';
import SettingsLayout from '../components/settings/SettingsLayout';
import PreferencesSettings from '../components/settings/PreferencesSettings';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardLayout><DashboardOverview /></DashboardLayout>} />
      <Route path="/resumes" element={<DashboardLayout><Resumes /></DashboardLayout>} />
      <Route path="/ai-tools" element={<DashboardLayout><AITools /></DashboardLayout>} />
<Route path="/ai-tools/rewrite" element={<DashboardLayout><AIToolsLayout><RewriteTool /></AIToolsLayout></DashboardLayout>} />
      <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
<Route path="/settings/profile" element={<DashboardLayout><SettingsLayout><ProfileSettings /></SettingsLayout></DashboardLayout>} />
<Route path="/settings/preferences" element={<DashboardLayout><SettingsLayout><PreferencesSettings /></SettingsLayout></DashboardLayout>} />{/* You can add more routes here later */}
    </Routes>
  );
};

export default AppRouter;