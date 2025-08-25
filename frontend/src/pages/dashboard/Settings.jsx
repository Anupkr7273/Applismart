import React from 'react';
import SettingsLayout from '../../components/settings/SettingsLayout';
import ProfileSettings from '../../components/settings/ProfileSettings';

const Settings = () => {
  // This would typically use React Router to show different settings sections
  // For now, we'll demonstrate with the ProfileSettings
  return (
    <SettingsLayout>
      <ProfileSettings />
    </SettingsLayout>
  );
};

export default Settings;