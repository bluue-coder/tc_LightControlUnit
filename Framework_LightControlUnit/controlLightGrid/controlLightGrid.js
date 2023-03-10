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
            function isILight(p) {
                if (p == null) {
                    console.log("Instance not linked properly!");
                    return false;
                }
                if (Object.keys(p).length <= 1)
                    return false;
                if (p['bState'] == null || typeof p['bState'] != 'boolean') {
                    console.log("Instance not linked properly!");
                    return false;
                }
                if (p['nBrightness'] != null && typeof p['nBrightness'] != 'number') {
                    console.log("Instance not linked properly!");
                    return false;
                }
                console.log("Instance linked!");
                return true;
            }
            Framework_LightControlUnit.isILight = isILight;
            function containsLightArray(p) {
                if (p == null) {
                    console.log("Instance not linked properly!");
                    return false;
                }
                if (Object.keys(p).length <= 1)
                    return false;
                if (p['aOriginalInstanceOfLightFB'] == null) {
                    console.log("Instance not linked properly! Instance doesn't contain aOriginalInstanceOfLightFB!");
                    return false;
                }
                if (p['aOriginalInstanceOfDimmableLightFB'] == null) {
                    console.log("Instance not linked properly! Instance doesn't contain aOriginalInstanceOfDimmableLightFB!");
                    return false;
                }
                console.log("Instance linked!");
                return true;
            }
            Framework_LightControlUnit.containsLightArray = containsLightArray;
            function isLightArray(p) {
                if (p == null) {
                    console.log("Instance not linked properly! Array is undefined!");
                    return false;
                }
                if (Object.keys(p).length <= 1) {
                    console.log("Instance is empty!");
                    return false;
                }
                if (p[0] == null) {
                    console.log("Instance not linked properly! Array is empty!");
                    return false;
                }
                if (isILight(p[0]) != true) {
                    console.log("Instance is of incorrect data type!!");
                    return false;
                }
                console.log("Instance linked!");
                return true;
            }
            Framework_LightControlUnit.isLightArray = isLightArray;
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
                    this.__gridExists = false;
                    this.__lightArray = [];
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
                    // */
                    if (this.__destroyLightControllerWatch != null)
                        this.__destroyLightControllerWatch();
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
                * @description Setter function for 'data-tchmi-lightcontroller' attribute.
                * @param lightcontroller the new value or null
                */
                setLightController(lightcontroller) {
                    // check if the converted value is valid
                    if (!(lightcontroller instanceof TcHmi.Symbol) || lightcontroller == null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        lightcontroller = this.getAttributeDefaultValueInternal('LightArray');
                    }
                    // remember the new value
                    this.__lightController = lightcontroller;
                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'LightArray' });
                    // call process function to process the new value
                    this.__processLightController();
                }
                /**
                * @description Processor function for 'data-tchmi-lightarray' attribute.
                */
                __processLightController() {
                    // process actions with Value
                    if (this.__lightController == null) {
                        //reset array to default
                    }
                    else {
                        this.__destroyLightControllerWatch = this.__lightController.watch((data) => {
                            if (data.value != null) {
                                if (containsLightArray(data.value)) {
                                    if (isLightArray(data.value.aOriginalInstanceOfLightFB)) {
                                        this.__indexPointOfArraySplit = data.value.aOriginalInstanceOfLightFB.length;
                                        for (var i = 0; i < data.value.aOriginalInstanceOfLightFB.length;) { //iterate through non dimmable light array
                                            i = this.__lightArray.push(data.value.aOriginalInstanceOfLightFB[i]);
                                        }
                                    }
                                    if (isLightArray(data.value.aOriginalInstanceOfDimmableLightFB)) {
                                        for (i = this.__indexPointOfArraySplit; i - this.__indexPointOfArraySplit < data.value.aOriginalInstanceOfDimmableLightFB.length;) { //iterate through non dimmable light array
                                            i = this.__lightArray.push(data.value.aOriginalInstanceOfDimmableLightFB[i - this.__indexPointOfArraySplit]);
                                        }
                                    }
                                    console.log("LightArray linked!");
                                    if (this.__gridExists == false) {
                                        const gridContainer = $("<div>").addClass(`grid-container`);
                                        for (var i = 0; i < this.__lightArray.length; i++) {
                                            let lightinstance = TcHmi.ControlFactory.create('TcHmi.Controls.Framework_LightControlUnit.controlLightMinimal', this.__id + '-light' + i, this);
                                            const gridItem = $("<div>").addClass(`grid-item`);
                                            if (lightinstance) {
                                                gridItem.append(lightinstance.getElement());
                                                lightinstance.setWidth(100);
                                                lightinstance.setWidthUnit('%');
                                                lightinstance.setHeight(100);
                                                lightinstance.setHeightUnit('%');
                                                lightinstance.setLight(this.__lightArray[i]);
                                            }
                                            if (gridContainer)
                                                gridContainer.append(gridItem);
                                        }
                                        this.__elementTemplateRoot.append(gridContainer);
                                    }
                                }
                            }
                            else {
                                throw new Error("No instance  linked! Is PLC running?");
                            }
                        });
                    }
                }
                /**
                * @description Getter function for 'data-tchmi-value' attribute.
                */
                getLightController() {
                    return this.__lightController;
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