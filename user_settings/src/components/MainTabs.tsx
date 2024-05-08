import * as Tabs from '@radix-ui/react-tabs';
import * as Field from './Fieldsets';
import "./styles.css"

export const Account = () => {

    return (
      <Tabs.Content className="TabsContent" value="account">
        <Field.Header_fieldset text="Make changes to your account here. Click save when you're done." />
  
        <Field.Input_fieldset htmlfor="name" label="Name" type="text" />
        <Field.Input_fieldset htmlfor="username" label="Username" type="text" />
        <Field.Radio_fieldset label="Gender" htmlfor="gender" values={["Male", "Female", "Other"]} />
        <Field.Button_fieldset button_vals="Save changes" />
  
      </Tabs.Content>
    );
  }
  
export const Password = () => {
    return (
      <Tabs.Content className="TabsContent" value="password">
        <Field.Header_fieldset text="Change your password here. After saving, you'll be logged out." />
  
        <Field.Input_fieldset htmlfor="currentPassword" label="Current password" type="password" />
        <Field.Input_fieldset htmlfor="newPassword" label="New password" type="password" />
        <Field.Input_fieldset htmlfor="confirmPassword" label="Confirm password" type="password" />
  
        <Field.Button_fieldset button_vals="Change password" />
      
      </Tabs.Content>
    );
  }
  
export const Preferences = () => {
    return (
        <Tabs.Content className="TabsContent" value="preferences">
            <Field.Header_fieldset text="Change preferences here. Click save when you're done." />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Field.Select_fieldset label="Notification frequency" htmlfor="select" 
                values={["All", "Only followed", "None"]} />

            <Field.Switch_fieldset label="Collect additional data?" htmlfor="switch" />
            <Field.Slider_fieldset label="Notification frequency" htmlfor="slider" />
          </div>
            <Field.Button_fieldset button_vals="Save preferences" />
        </Tabs.Content>
        );
  }

export const Location = () => {
  return (
    <Tabs.Content className="TabsContent" value="location">
      <Field.Header_fieldset text="Change your location here. Click save when you're done." />

      <Field.Input_fieldset htmlfor="country" label="Country" type="text" />
      <Field.Input_fieldset htmlfor="city" label="City" type="text" />
      <Field.Input_fieldset htmlfor="zip-code" label="Zip-code" type="text" />

      <Field.Button_fieldset button_vals="Save location" />
    </Tabs.Content>
  );

}