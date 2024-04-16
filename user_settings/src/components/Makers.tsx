import React, { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Switch from '@radix-ui/react-switch';
import * as Slider from '@radix-ui/react-slider';
import "./styles.css"

type Field = {
    htmlfor : string,
    label : string,
    type : string
  }

type Button_props = {
    button_vals : string
};

type Radio = {
    label : string,
    htmlfor : string,
    values : string[]
};

// function to make fieldset with given field values
export const Make_fieldset = (field_vals : Field) => {
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
export const Make_button = (props : Button_props) => {
    return (
    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Confirm-button">
            {props.button_vals}
        </button>
      </div>
    );
}

// small making function for tab header
export const Make_tab_header = (props : any) => {
    return (
        <p className="Text">
            {props.text}
        </p>

    );
}

// function to make radio with given radio type, values passed
// as array of string

export const Make_radio = (props) => {
    return (
        <fieldset className="RadioFieldset">
            <legend className="RadioLegend">{props.label}</legend>
            <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
                {props.values.map((value) => (
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

export const Make_slider = (props : any) => {
    const [value, setValue] = useState(50); 

    const handleChange = (newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    return (
        <fieldset className="SliderFieldset">
            <label className='Label' htmlFor={props.htmlfor}> {props.label}</label>
                <Slider.Root className="SliderRoot" 
                defaultValue={[50]} 
                max={100} 
                step={1}
                onValueChange={handleChange}>
                    <Slider.Track className="SliderTrack">
                    <Slider.Range className="SliderRange" />
                    </Slider.Track>
                    <Slider.Thumb className="SliderThumb" aria-label="Volume" />
                </Slider.Root>
        </fieldset>
    );
}

export const Make_select = (props : any) => {
    return (
        <fieldset className="SelectFieldset">
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
                {props.values.map((value : string) => 
                (<Select.Item key={value} value={value}>{value}</Select.Item>))
            }
            </Select.Viewport>
        </Select.Content>
        </Select.Portal>
    </Select.Root>
    </fieldset>
  );
}

export const Make_switch = (props : any) => {
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