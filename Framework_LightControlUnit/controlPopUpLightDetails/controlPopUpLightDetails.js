/*
 * Generated 1/18/2023 4:58:19 PM
 * Copyright (C) 2023
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let Framework_LightControlUnit;
        (function (Framework_LightControlUnit) {
            let DataRowIdentifier;
            (function (DataRowIdentifier) {
                DataRowIdentifier[DataRowIdentifier["Status"] = 0] = "Status";
                DataRowIdentifier[DataRowIdentifier["Name"] = 1] = "Name";
                DataRowIdentifier[DataRowIdentifier["Address"] = 2] = "Address";
                DataRowIdentifier[DataRowIdentifier["ID"] = 3] = "ID";
                DataRowIdentifier[DataRowIdentifier["Brightness"] = 4] = "Brightness";
            })(DataRowIdentifier || (DataRowIdentifier = {}));
            class controlPopUpLightDetails extends TcHmi.Controls.System.TcHmiControl {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                    this.__readwriteables = new Map;
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Framework_LightControlUnit_controlPopUpLightDetails-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                    let css_uniqueclass;
                    if (this.__readwriteables.size == 0) {
                        for (let i = DataRowIdentifier.Status; i <= DataRowIdentifier.ID; i++) {
                            css_uniqueclass = false;
                            const label = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiTextblock', this.__id + '.label-' + DataRowIdentifier[i], this);
                            let wtch_ipt;
                            switch (i) {
                                case 0:
                                    wtch_ipt = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiToggleSwitch', this.__id + '.switch-' + DataRowIdentifier[i], this);
                                    break;
                                case 1:
                                    wtch_ipt = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiTextbox', this.__id + '.textbox-' + DataRowIdentifier[i], this);
                                    break;
                                case 2:
                                    wtch_ipt = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiTextbox', this.__id + '.textbox-' + DataRowIdentifier[i], this);
                                    break;
                                case 3:
                                    wtch_ipt = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiTextblock', this.__id + '.unique-' + DataRowIdentifier[i], this);
                                    css_uniqueclass = true;
                                    break;
                                default:
                                    wtch_ipt = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiTextbox', this.__id + '.textbox-' + DataRowIdentifier[i], this);
                                    break;
                            }
                            if (wtch_ipt == null || label == null)
                                throw new Error("Textbox couldn't be created!");
                            label.setText('Lamp ' + DataRowIdentifier[i] + ':');
                            label.setTextVerticalAlignment("Center");
                            label.setTextHorizontalAlignment("Right");
                            const container = $("<div>").addClass(`value-container ${DataRowIdentifier[i]}`);
                            container.append(label.getElement());
                            if (css_uniqueclass == false)
                                container.append(wtch_ipt.getElement());
                            else
                                container.append(wtch_ipt.getElement().addClass("unique"));
                            this.__readwriteables.set(i, {
                                container: container,
                                read_write: wtch_ipt,
                                label: label
                            });
                            this.__elementTemplateRoot.append(container);
                        }
                    }
                    else {
                        throw Error('Data Field already exists!');
                    }
                }
                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    const check = () => {
                        if (this.__light == null)
                            throw new Error("Cannot link instance of Light!");
                        if (this.__value == null)
                            throw new Error("Cannot read Light data!");
                        return true;
                    };
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    if (this.__isDimmable) {
                        const label = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiTextblock', this.__id + '.label-' + DataRowIdentifier[DataRowIdentifier.Brightness], this);
                        const wtch_ipt = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiNumericInput', this.__id + '.unique-' + DataRowIdentifier[DataRowIdentifier.Brightness], this);
                        const container = $("<div>").addClass(`value-container ${DataRowIdentifier[DataRowIdentifier.Brightness]}`);
                        if (wtch_ipt == null || label == null)
                            throw new Error("Textbox couldn't be created!");
                        label.setText('Lamp ' + DataRowIdentifier[DataRowIdentifier.Brightness] + ':');
                        label.setTextVerticalAlignment("Center");
                        label.setTextHorizontalAlignment("Right");
                        container.append(label.getElement());
                        container.append(wtch_ipt.getElement().addClass("unique"));
                        this.__readwriteables.set(DataRowIdentifier.Brightness, {
                            container: container,
                            read_write: wtch_ipt,
                            label: label
                        });
                        this.__elementTemplateRoot.append(container);
                        let brightnessInput = this.__readwriteables.get(DataRowIdentifier.Brightness).read_write;
                        this.__destroyBrightnessSetter = TcHmi.EventProvider.register(brightnessInput.getId() + '.onUserInteractionFinished', () => {
                            if (check()) {
                                if (brightnessInput.getValue() != null) {
                                    this.__value.nBrightness = Number(brightnessInput.getValue());
                                    this.__light.write(this.__value, (result) => {
                                        if (result.error != 0)
                                            TcHmi.Log.warnEx(TcHmi.Log.buildMessage(result.details));
                                    });
                                }
                            }
                        });
                    }
                    let nameInput = this.__readwriteables.get(DataRowIdentifier.Name).read_write;
                    this.__destroyNameSetter = TcHmi.EventProvider.register(nameInput.getId() + '.onUserInteractionFinished', () => {
                        if (check()) {
                            if (nameInput.getText() != "") {
                                this.__value.sName = String(nameInput.getText());
                                this.__light.write(this.__value, (result) => {
                                    if (result.error != 0)
                                        TcHmi.Log.warnEx(TcHmi.Log.buildMessage(result.details));
                                });
                            }
                        }
                    });
                    let addressInput = this.__readwriteables.get(DataRowIdentifier.Address).read_write;
                    this.__destroyAddressSetter = TcHmi.EventProvider.register(addressInput.getId() + '.onUserInteractionFinished', () => {
                        if (check()) {
                            if (addressInput.getText() != "") {
                                this.__value.sAddress = String(addressInput.getText());
                                this.__light.write(this.__value, (result) => {
                                    if (result.error != 0)
                                        TcHmi.Log.warnEx(TcHmi.Log.buildMessage(result.details));
                                });
                            }
                        }
                    });
                    let stateInput = this.__readwriteables.get(DataRowIdentifier.Status).read_write;
                    this.__destroyStateSetter = TcHmi.EventProvider.register(stateInput.getId() + '.onUserInteractionFinished', () => {
                        if (check()) {
                            if (stateInput.getToggleState() != undefined) {
                                this.__value.bState = Boolean(stateInput.getToggleState());
                                this.__light.write(this.__value, (result) => {
                                    if (result.error != 0)
                                        TcHmi.Log.warnEx(TcHmi.Log.buildMessage(result.details));
                                });
                            }
                        }
                    });
                }
                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                    if (this.__destroyLightWatch != null)
                        this.__destroyLightWatch();
                    if (this.__destroyStateSetter != null)
                        this.__destroyStateSetter();
                    if (this.__destroyNameSetter != null)
                        this.__destroyNameSetter();
                    if (this.__destroyAddressSetter != null)
                        this.__destroyAddressSetter();
                    if (this.__destroyBrightnessSetter != null)
                        this.__destroyBrightnessSetter();
                }
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                    * Free resources like child controls etc.
                    */
                }
                /**
                * @description Setter function for 'data-tchmi-light' attribute.
                * @param light the new value or null
                */
                setLight(light) {
                    // check if the converted value is valid
                    if (!(light instanceof TcHmi.Symbol) || light == null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        light = this.getAttributeDefaultValueInternal('Light');
                    }
                    // remember the new value
                    this.__light = light;
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Light' });
                    // call process function to process the new value
                    this.__processLight();
                }
                /**
                * @description Processor function for 'data-tchmi-light' attribute.
                */
                __processLight() {
                    // process actions with Value
                    // ...
                    if (this.__light == null) {
                    }
                    else {
                        this.__destroyLightWatch = this.__light.watch((__instanceOfLight) => {
                            if (this.__readwriteables != null) {
                                if (__instanceOfLight.value != null) {
                                    if (Framework_LightControlUnit.isILight(__instanceOfLight.value)) {
                                        this.__value = __instanceOfLight.value;
                                        if (__instanceOfLight.value.bState != null) {
                                            let light_switch = this.__readwriteables.get(DataRowIdentifier.Status);
                                            if (!light_switch)
                                                return;
                                            if (light_switch.read_write instanceof TcHmi.Controls.Beckhoff.TcHmiToggleSwitch) {
                                                if (__instanceOfLight.value.bState) {
                                                    light_switch.read_write.setToggleState("Active");
                                                }
                                                else {
                                                    light_switch.read_write.setToggleState("Normal");
                                                }
                                                //if (this.__isDimmable)
                                                //    light_switch.read_write.setToggleState("Active");
                                            }
                                        }
                                        if (__instanceOfLight.value.sName != null) {
                                            let light_name = this.__readwriteables.get(DataRowIdentifier.Name);
                                            if (!light_name)
                                                return;
                                            if (light_name.read_write instanceof TcHmi.Controls.Beckhoff.TcHmiTextbox) {
                                                light_name.read_write.setPlaceholder(__instanceOfLight.value.sName);
                                                light_name.read_write.setContentPadding({ left: 10, top: 0, right: 0, bottom: 0 });
                                            }
                                        }
                                        if (__instanceOfLight.value.sAddress != null) {
                                            let light_address = this.__readwriteables.get(DataRowIdentifier.Address);
                                            if (!light_address)
                                                return;
                                            if (light_address.read_write instanceof TcHmi.Controls.Beckhoff.TcHmiTextbox) {
                                                light_address.read_write.setPlaceholder(__instanceOfLight.value.sAddress);
                                                light_address.read_write.setContentPadding({ left: 10, top: 0, right: 0, bottom: 0 });
                                            }
                                        }
                                        if (__instanceOfLight.value.nLightID != null) {
                                            let light_id = this.__readwriteables.get(DataRowIdentifier.ID);
                                            if (!light_id)
                                                return;
                                            if (light_id.read_write instanceof TcHmi.Controls.Beckhoff.TcHmiTextblock) {
                                                light_id.read_write.setText(__instanceOfLight.value.nLightID.toString());
                                                light_id.read_write.setContentPadding({ left: 10, top: 0, right: 0, bottom: 0 });
                                                light_id.read_write.setTextVerticalAlignment("Center");
                                            }
                                        }
                                        if (__instanceOfLight.value.nBrightness != null && __instanceOfLight.value.nBrightness != undefined) {
                                            this.__isDimmable = true;
                                            let light_brightness = this.__readwriteables.get(DataRowIdentifier.Brightness);
                                            if (!light_brightness)
                                                return;
                                            if (light_brightness.read_write instanceof TcHmi.Controls.Beckhoff.TcHmiNumericInput) {
                                                light_brightness.read_write.setPlaceholder(__instanceOfLight.value.nBrightness.toString());
                                                light_brightness.read_write.setContentPadding({ left: 10, top: 0, right: 0, bottom: 0 });
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
                /**
                * @description Getter function for 'data-tchmi-light' attribute.
                */
                getLight() {
                    return this.__light;
                }
            }
            Framework_LightControlUnit.controlPopUpLightDetails = controlPopUpLightDetails;
        })(Framework_LightControlUnit = Controls.Framework_LightControlUnit || (Controls.Framework_LightControlUnit = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('controlPopUpLightDetails', 'TcHmi.Controls.Framework_LightControlUnit', TcHmi.Controls.Framework_LightControlUnit.controlPopUpLightDetails);
//# sourceMappingURL=controlPopUpLightDetails.js.map