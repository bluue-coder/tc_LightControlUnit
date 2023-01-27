/*
 * Generated 1/17/2023 5:07:30 PM
 * Copyright (C) 2023
 */
module TcHmi {
    export module Controls {
        export module Framework_LightControlUnit {
            enum LightDisplayName {
                Light_ONE = 1,
                Light_TWO,
                Light_THREE,
                Light_FOUR,
                Light_FIVE,
                Light_SIX,
                Light_SEVEN,
                Light_EIGHT
            }

            export class controlLightMinimal extends TcHmi.Controls.System.TcHmiControl {
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
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;

                private __ellipse: TcHmi.Controls.Beckhoff.TcHmiEllipse | undefined;

                private __destroyOnResized: DestroyFunction | undefined;
                private __destroyOnPressed: DestroyFunction | undefined;
                private __destroyLightWatch: DestroyFunction | undefined;

                private __light: Symbol | null | undefined;

                private __lightid: number | null | undefined;

                private __isDimmable: boolean;

                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */

                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Framework_LightControlUnit_controlLightMinimal-Template');
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
                public __init() {
                    super.__init();

                    if (Controls.get(this.__id + '.ellipse') == null) {
                        this.__ellipse = ControlFactory.create<TcHmi.Controls.Beckhoff.TcHmiEllipse>('TcHmi.Controls.Beckhoff.TcHmiEllipse', this.__id + '.ellipse', this);

                        if (this.__ellipse != null) {
                            this.__ellipse.setFillColor({ color: 'rgba(255,179,0,1)' });
                            this.__elementTemplateRoot.append(this.__ellipse.getElement());
                        } else {
                            throw Error('Light-Circle was not created!');
                        }
                    } else {
                        throw Error('Light-Circle already exists!');
                    }
                }

                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */

                public __attach() {
                    super.__attach();

                    this.__destroyOnResized = EventProvider.register(this.__id + '.onResized', () => {
                        if (this.__ellipse != null) {
                            const width = this.getRenderedWidth();
                            const height = this.getRenderedHeight();
                            if (width == null || height == null)
                                throw Error();

                            if (width >= height) {
                                this.__ellipse.setWidth(height * 0.8);
                                this.__ellipse.setLeft((width - this.__ellipse.getWidth()!) / 2);
                                this.__ellipse.setHeight(height * 0.8);
                                this.__ellipse.setTop(height * 0.1);
                            } else {
                                this.__ellipse.setWidth(width * 0.8);
                                this.__ellipse.setLeft(width * 0.1);
                                this.__ellipse.setHeight(width * 0.8);
                                this.__ellipse.setTop((height - this.__ellipse.getHeight()!) / 2);
                            }
                        }

                        //console.log('Resized!');
                    });

                    this.__destroyOnPressed = EventProvider.register(this.__id + '.onPressed', () => {
                        if (this.__light != null) {
                            let popup = ControlFactory.create<Framework_LightControlUnit.controlPopUpLightDetails>('TcHmi.Controls.Framework_LightControlUnit.controlPopUpLightDetails', this.__id + '-popup', this);
                            if (popup) {
                                popup.setWidth(100);
                                popup.setWidthUnit('%');
                                popup.setHeight(100);
                                popup.setHeightUnit('%');
                                popup.setLight(this.__light);
                                popup.__isDimmable = this.__isDimmable;
                                BuildingAutomation.DialogWindow.openDialogWindow({
                                    appearance: {
                                        content: popup.getElement(),
                                        headline: {
                                            textAttributes: {
                                                text: LightDisplayName[this.__lightid!]
                                            }
                                        },
                                        buttons: BuildingAutomation.DialogWindow.Buttons.Cancel,
                                        layout: {
                                            height: 500,
                                            maxHeight: 616,
                                            minHeight: 128,
                                            width: 800,
                                            minWidth: 250,
                                            maxWidth: 1400
                                        }
                                    },
                                    callbacks: {
                                        cbClosed: () => {
                                            popup?.destroy();
                                        }
                                    }
                                });
                            }
                        } else {
                            BuildingAutomation.DialogWindow.alert('Light was not set!');
                        }
                    });
                }

                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    if (this.__destroyOnResized != null)
                        this.__destroyOnResized();

                    if (this.__destroyLightWatch != null)
                        this.__destroyLightWatch();

                    if (this.__destroyOnPressed != null)
                        this.__destroyOnPressed();
                }

                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                public destroy() {
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
                public setLight(light: Symbol | null): void {
                    // check if the converted value is valid
                    if (!(light instanceof Symbol) || light == null) {
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
                protected __processLight() {
                    // process actions with Value
                    // ...
                    if (this.__light == null) {
                        // reset ellipse
                    } else {
                        this.__destroyLightWatch = this.__light.watch((data) => {
                            if (this.__ellipse != null) {
                                if (data.value != null) {
                                    if (isILight(data.value)) {
                                        if (data.value.nBrightness != null) {
                                            this.__isDimmable = true;

                                            // process opacity
                                            this.__ellipse.setFillColor({ color: 'rgba(255,179,0,1)' });
                                            this.__ellipse.setOpacity(data.value.nBrightness / 100);

                                            if (data.value.nBrightness == 0) {
                                                this.__ellipse.setOpacity(0.5);
                                                this.__ellipse.setFillColor({ color: 'black' });
                                            }
                                        } else {
                                            this.__isDimmable = false;

                                            // process opacity if no brightness is available
                                            this.__ellipse.setOpacity(1);
                                        }
                                        //process state and visibility
                                        if (data.value.bState != null) {
                                            if (data.value.bState) {
                                                this.__ellipse.setFillColor({ color: 'rgba(255,179,0,1)' });
                                            } else {
                                                this.__ellipse.setOpacity(0.5);
                                                this.__ellipse.setFillColor({ color: 'black' });
                                            }
                                        }
                                        //process id
                                        if (data.value.nLightID != null) {
                                            this.__lightid = data.value.nLightID;
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
                /**
                * @description Getter function for 'data-tchmi-value' attribute.
                */
                public getLight() {
                    return this.__light;
                }
            }
        }
    }
}
/**
* Register Control
*/
TcHmi.Controls.registerEx('controlLightMinimal', 'TcHmi.Controls.Framework_LightControlUnit', TcHmi.Controls.Framework_LightControlUnit.controlLightMinimal);