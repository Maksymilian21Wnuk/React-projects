import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import "./styles.css"



const TabsTriggerGet = (props: any) => {
  return (
    <Tabs.Trigger className="TabsTrigger" value={props.value}>
      {props.name}
    </Tabs.Trigger>
  );
}
  
const TabListGetter = () => {
  return (
  <Tabs.List className="TabsList" aria-label="Manage your account">
    <TabsTriggerGet value="account" name="Account" />
    <TabsTriggerGet value="password" name="Password" />
    <TabsTriggerGet value="preferences" name="Preferences" />
  </Tabs.List>
  );
}

export default TabListGetter;