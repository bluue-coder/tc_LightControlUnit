var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let HMI_LightControlUnit;
        (function (HMI_LightControlUnit) {
            function GetBrightness(sym, circle) {
                sym.readEx((data) => {
                    if (data.value['nBrightness'] != null) {
                        circle.setOpacity(data.value['nBrightness'] / 100);
                    }
                    else {
                        circle.setOpacity(1);
                    }
                });
            }
            HMI_LightControlUnit.GetBrightness = GetBrightness;
        })(HMI_LightControlUnit = Functions.HMI_LightControlUnit || (Functions.HMI_LightControlUnit = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('GetBrightness', 'TcHmi.Functions.HMI_LightControlUnit', TcHmi.Functions.HMI_LightControlUnit.GetBrightness);
//# sourceMappingURL=GetBrightness.js.map