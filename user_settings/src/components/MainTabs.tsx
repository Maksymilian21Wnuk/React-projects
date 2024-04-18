import * as Tabs from '@radix-ui/react-tabs';
import { Make_button, Make_fieldset, Make_tab_header, Make_radio, Make_switch, Make_slider, Make_select } from './Makers';
import "./styles.css"

export const Account = () => {

    return (
      <Tabs.Content className="TabsContent" value="account">
        <Make_tab_header text="Make changes to your account here. Click save when you're done." />
  
        <Make_fieldset htmlfor="name" label="Name" type="text" />
        <Make_fieldset htmlfor="username" label="Username" type="text" />
        <Make_radio label="Gender" htmlfor="gender" values={["Male", "Female", "Other"]} />
        <Make_button button_vals="Save changes" />
  
      </Tabs.Content>
    );
  }
  
export const Password = () => {
    return (
      <Tabs.Content className="TabsContent" value="password">
        <Make_tab_header text="Change your password here. After saving, you'll be logged out." />
  
        <Make_fieldset htmlfor="currentPassword" label="Current password" type="password" />
        <Make_fieldset htmlfor="newPassword" label="New password" type="password" />
        <Make_fieldset htmlfor="confirmPassword" label="Confirm password" type="password" />
  
        <Make_button button_vals="Change password" />
      
      </Tabs.Content>
    );
  }
  
export const Preferences = () => {
    return (
        <Tabs.Content className="TabsContent" value="preferences">
            <Make_tab_header text="Change preferences here. Click save when you're done." />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Make_select label="Notification frequency" htmlfor="select" 
                values={["All", "Only followed", "None"]} />

            <Make_switch label="Collect additional data?" htmlfor="switch" />
            <Make_slider label="Notification frequency" htmlfor="slider" />
          </div>
            <Make_button button_vals="Save preferences" />
        </Tabs.Content>
        );
  }

export const Location = () => {
  return (
    <Tabs.Content className="TabsContent" value="location">
      <Make_tab_header text="Change your location here. Click save when you're done." />

      <Make_fieldset htmlfor="country" label="Country" type="text" />
      <Make_fieldset htmlfor="city" label="City" type="text" />
      <Make_fieldset htmlfor="zip-code" label="Zip-code" type="text" />

      <Make_button button_vals="Save location" />
    </Tabs.Content>
  );

}