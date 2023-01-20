var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let Framework_LightControlUnit;
        (function (Framework_LightControlUnit) {
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
            Framework_LightControlUnit.GetBrightness = GetBrightness;
        })(Framework_LightControlUnit = Functions.Framework_LightControlUnit || (Functions.Framework_LightControlUnit = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('GetBrightness', 'TcHmi.Functions.Framework_LightControlUnit', TcHmi.Functions.Framework_LightControlUnit.GetBrightness);
//# sourceMappingURL=GetBrightness.js.map