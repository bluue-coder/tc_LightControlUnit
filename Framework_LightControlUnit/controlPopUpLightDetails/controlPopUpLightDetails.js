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
            let TextboxIdentifier;
            (function (TextboxIdentifier) {
                TextboxIdentifier[TextboxIdentifier["Status"] = 0] = "Status";
                TextboxIdentifier[TextboxIdentifier["Name"] = 1] = "Name";
                TextboxIdentifier[TextboxIdentifier["Address"] = 2] = "Address";
                TextboxIdentifier[TextboxIdentifier["ID"] = 3] = "ID";
                TextboxIdentifier[TextboxIdentifier["Brightness"] = 4] = "Brightness";
            })(TextboxIdentifier || (TextboxIdentifier = {}));
            let Boolean;
            (function (Boolean) {
                Boolean[Boolean["TRUE"] = 0] = "TRUE";
                Boolean[Boolean["FALSE"] = 1] = "FALSE";
            })(Boolean || (Boolean = {}));
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
                    //private __textbox1: TcHmi.Controls.Beckhoff.TcHmiTextbox | undefined;
                    //private __textbox2: TcHmi.Controls.Beckhoff.TcHmiTextbox | undefined;
                    //private __textbox3: TcHmi.Controls.Beckhoff.TcHmiTextbox | undefined;
                    //private __textbox4: TcHmi.Controls.Beckhoff.TcHmiTextbox | undefined;
                    //private __textbox5: TcHmi.Controls.Beckhoff.TcHmiTextbox | undefined;
                    this.__readwriteables = new Map();
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
                    //if (this.__value == null)
                    //    throw new Error("Cannot read Light data!");
                    if (this.__readwriteables.size == 0) {
                        for (let i = TextboxIdentifier.Status; i <= TextboxIdentifier.Brightness; i++) {
                            const label = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiTextblock', this.__id + '.textblock-' + TextboxIdentifier[i], this);
                            const wtch_ipt = TcHmi.ControlFactory.create('TcHmi.Controls.Beckhoff.TcHmiTextbox', this.__id + '.textbox-' + TextboxIdentifier[i], this);
                            if (wtch_ipt == null || label == null)
                                throw new Error("Textbox couldn't be created!");
                            label.setText('Lamp ' + TextboxIdentifier[i] + ':');
                            label.setTextVerticalAlignment("Center");
                            label.setTextHorizontalAlignment("Right");
                            //wtch_ipt.setPlaceholder(this.__value?.nLightID.toString());
                            //wtch_ipt.setTextHorizontalAlignment("Center");
                            wtch_ipt.setContentPadding({ left: 10, top: 0, right: 0, bottom: 0 });
                            const container = $("<div>").addClass(`value-container ${TextboxIdentifier[i]}`);
                            container.append(label.getElement());
                            container.append(wtch_ipt.getElement());
                            this.__elementTemplateRoot.append(container);
                            this.__readwriteables.set(i, {
                                container: container,
                                read_write: wtch_ipt,
                                label: label
                            });
                            this.__elementTemplateRoot.append(container);
                        }
                    }
                    else {
                        throw Error('Textbox already exists!');
                    }
                    //if (this.__textboxes != null) {
                    //    for (let [key, value] of this.__textboxes) {
                    //        value.textbox.setText(TextboxIdentifier[key]);
                    //        const container = $<HTMLDivElement>("<div>").addClass('value-container');
                    //        container.append(value.textbox.getElement());
                    //        container.append(value.label.getElement());
                    //        this.__elementTemplateRoot.append(container);
                    //    }
                    //} else {
                    //    throw Error('Textbox was not created!');
                    //}
                }
                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    //if (this.__light == null)
                    //    throw new Error("Cannot link instance of Light!");
                    //if (this.__value == null)
                    //    throw new Error("Cannot read Light data!");
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
                    let brightnessInput = this.__readwriteables.get(TextboxIdentifier.Brightness).read_write;
                    this.__destroyBrightnessSetter = TcHmi.EventProvider.register(brightnessInput.getId() + '.onUserInteractionFinished', () => {
                        if (check()) {
                            if (brightnessInput.getText() != "") {
                                this.__value.nBrightness = Number(brightnessInput.getText());
                                this.__light.write(this.__value, (result) => {
                                    if (result.error != 0)
                                        TcHmi.Log.warnEx(TcHmi.Log.buildMessage(result.details));
                                });
                            }
                        }
                    });
                    let nameInput = this.__readwriteables.get(TextboxIdentifier.Name).read_write;
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
                    let addressInput = this.__readwriteables.get(TextboxIdentifier.Address).read_write;
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
                    //let stateInput = this.__readwriteables.get(TextboxIdentifier.Status)!.read_write;
                    //  this.__destroyStateSetter = EventProvider.register(stateInput.getId() + '.onUserInteractionFinished', () => {
                    //       if (check()) {if (stateInput.getText() != "") {
                    //          this.__value!.Status = stateInput.getText();
                    //          this.__light!.write(this.__value, (result) => {
                    //              if (result.error != 0)
                    //                  TcHmi.Log.warnEx(TcHmi.Log.buildMessage(result.details));
                    //          })
                    //      }
                    //  });
                    //}
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
                    //if (tchmi_equal(light, this.__light)) {
                    //    // skip processing when the value has not changed
                    //    return;
                    //}
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
                            var _a, _b, _c, _d, _e, _f;
                            if (this.__readwriteables != null) {
                                if (__instanceOfLight.value != null) {
                                    if (Framework_LightControlUnit.isILight(__instanceOfLight.value)) {
                                        this.__value = __instanceOfLight.value;
                                        if (__instanceOfLight.value.bState != null) {
                                            (_a = this.__readwriteables.get(TextboxIdentifier.Status)) === null || _a === void 0 ? void 0 : _a.read_write.setPlaceholder(__instanceOfLight.value.bState.toString());
                                        }
                                        if (__instanceOfLight.value.sName != null) {
                                            (_b = this.__readwriteables.get(TextboxIdentifier.Name)) === null || _b === void 0 ? void 0 : _b.read_write.setPlaceholder(__instanceOfLight.value.sName);
                                        }
                                        if (__instanceOfLight.value.sAddress != null) {
                                            (_c = this.__readwriteables.get(TextboxIdentifier.Address)) === null || _c === void 0 ? void 0 : _c.read_write.setPlaceholder(__instanceOfLight.value.sAddress);
                                        }
                                        if (__instanceOfLight.value.nLightID != null) {
                                            (_d = this.__readwriteables.get(TextboxIdentifier.ID)) === null || _d === void 0 ? void 0 : _d.read_write.setPlaceholder(__instanceOfLight.value.nLightID.toString());
                                        }
                                        if (__instanceOfLight.value.nBrightness != null && __instanceOfLight.value.nBrightness != undefined) {
                                            (_e = this.__readwriteables.get(TextboxIdentifier.Brightness)) === null || _e === void 0 ? void 0 : _e.read_write.setPlaceholder(__instanceOfLight.value.nBrightness.toString());
                                        }
                                        else {
                                            (_f = this.__readwriteables.get(TextboxIdentifier.Brightness)) === null || _f === void 0 ? void 0 : _f.read_write.setPlaceholder("not applicable");
                                            //this.__elementTemplateRoot.remove(this.__id + '.textbox-Brightness');
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