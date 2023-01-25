/*
 * Generated 1/24/2023 1:50:30 PM
 * Copyright (C) 2023
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let Framework_LightControlUnit;
        (function (Framework_LightControlUnit) {
            class controlLightGrid extends TcHmi.Controls.System.TcHmiControl {
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
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Framework_LightControlUnit_controlLightGrid-Template');
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
                    if (Controls.get(this.__id + '.grid') == null) {
                        this.__grid = TcHmi.ControlFactory.create('TcHmi.Controls.System.TcHmiGrid', this.__id + '.grid', this);
                        if (this.__grid != null) {
                            this.__elementTemplateRoot.append(this.__grid.getElement());
                        }
                        else {
                            throw Error('Grid was not created!');
                        }
                    }
                    else {
                        throw Error('Grid already exists!');
                    }
                }
                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
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
                    if (this.__destroyLightArrayWatch != null)
                        this.__destroyLightArrayWatch();
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
                * @description Setter function for 'data-tchmi-lightarray' attribute.
                * @param lightarray the new value or null
                */
                setLightArray(lightarray) {
                    // check if the converted value is valid
                    if (!(lightarray instanceof TcHmi.Symbol) || lightarray == null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        lightarray = this.getAttributeDefaultValueInternal('LightArray');
                    }
                    // remember the new value
                    this.__lightArray = lightarray;
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'LightArray' });
                    // call process function to process the new value
                    this.__processLightArray();
                }
                /**
                * @description Processor function for 'data-tchmi-lightarray' attribute.
                */
                __processLightArray() {
                    // process actions with Value
                    if (this.__lightArray == null) {
                        //reset array to default
                    }
                    else {
                        this.__destroyLightArrayWatch = this.__lightArray.watch((data) => {
                            if (this.__grid != null) {
                                if (data.value != null) {
                                }
                            }
                        });
                    }
                }
                /**
                * @description Getter function for 'data-tchmi-value' attribute.
                */
                getLightArray() {
                    return this.__lightArray;
                }
            }
            Framework_LightControlUnit.controlLightGrid = controlLightGrid;
        })(Framework_LightControlUnit = Controls.Framework_LightControlUnit || (Controls.Framework_LightControlUnit = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('controlLightGrid', 'TcHmi.Controls.Framework_LightControlUnit', TcHmi.Controls.Framework_LightControlUnit.controlLightGrid);
//# sourceMappingURL=controlLightGrid.js.map