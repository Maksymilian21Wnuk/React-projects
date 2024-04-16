import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import TabListGetter from './components/TabListGetter';
import { Account, Password, Preferences, Location } from './components/MainTabs';




const App = () => {
  return (
  <Tabs.Root className="TabsRoot" defaultValue="account" orientation='vertical'>
    <TabListGetter />
    

    <Account />
    
    <Password />

    <Preferences />

    <Location />
  
  </Tabs.Root>

  );
};

export default App;
