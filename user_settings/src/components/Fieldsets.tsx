import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Switch from '@radix-ui/react-switch';
import * as Slider from '@radix-ui/react-slider';
import "./styles.css"
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import "./types"



// function to make fieldset with given field values
export const Input_fieldset = (field_vals : Field) => {
    return (
    <fieldset className="Fieldset">
        <label className="Label" htmlFor={field_vals.htmlfor}>
        {field_vals.label}
        </label>
        <input className="Input" id={field_vals.htmlfor} type={field_vals.type} />
    </fieldset>
    );
}
// function to make button with given button values
export const Button_fieldset = (props : Button_props) => {
    return (
    <fieldset className="ButtonFieldset">
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Confirm-button">
            {props.button_vals}
        </button>
      </div>
    </fieldset>
    );
}

// small making function for tab header
export const Header_fieldset = (props : Header) => {
    return (
        <p className="Text">
            {props.text}
        </p>

    );
}

// function to make radio with given radio type, values passed
// as array of string

export const Radio_fieldset = (props : Radio) => {
    return (
        <fieldset className="RadioFieldset">
            <legend className="RadioLegend">{props.label}</legend>
            <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
                {props.values.map((value : string) => (
                    <div key={value} className="RadioItemContainer">
                        <RadioGroup.Item value={value} className="RadioGroupItem">
                            <RadioGroup.Indicator className="RadioGroupIndicator" />
                        </RadioGroup.Item>
                        <label htmlFor={value} className="RadioLabel">{value}</label>
                    </div>
                ))}
            </RadioGroup.Root>
        </fieldset>
    );
}

export const Slider_fieldset = (props : Basic_label) => {

    return (
        <fieldset className="SliderFieldset">
            <label className='Label' htmlFor={props.htmlfor}> {props.label}</label>
                <Slider.Root className="SliderRoot" 
                defaultValue={[50]} 
                max={100} 
                step={1}>
                    <Slider.Track className="SliderTrack">
                    <Slider.Range className="SliderRange" />
                    </Slider.Track>
                    <Slider.Thumb className="SliderThumb" aria-label="Volume" />
                </Slider.Root>
        </fieldset>
    );
}

const SelectItem = React.forwardRef<React.ComponentRef<typeof Select.Item>, React.ComponentPropsWithoutRef<typeof Select.Item>>(({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={className} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  });

export const Select_fieldset = (props : SelectType) => {
    return (
        <fieldset className="SelectFieldset">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label className="Label" htmlFor={props.htmlfor}> {props.label} </label>
        <Select.Root>
        <Select.Trigger className="SelectTrigger" aria-label="Options">
        <Select.Value placeholder="Select an option…" />
        <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
        </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
        <Select.Content className="SelectContent">
            <Select.Viewport className="SelectViewport">
                <Select.Group>
                    <SelectItem className="SelectItem" value={"0"}>{props.values[0]}</SelectItem>
                    <SelectItem className="SelectItem" value={"1"}>{props.values[1]}</SelectItem>
                    <SelectItem className="SelectItem" value={"2"}>{props.values[2]}</SelectItem>
            </Select.Group>
            </Select.Viewport>
        </Select.Content>
        </Select.Portal>
    </Select.Root>
    </div>
    </fieldset>
  );
}

export const Switch_fieldset = (props : Basic_label) => {
    return (
        <fieldset className="SwitchFieldset">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label className="Label" htmlFor={props.htmlfor}> {props.label} </label>
            <Switch.Root className="SwitchRoot" id={props.htmlfor}>
                <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
            </div>
        </fieldset>
    );
}