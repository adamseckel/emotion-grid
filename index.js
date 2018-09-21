"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_emotion_1 = __importDefault(require("react-emotion"));
exports.default = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  ", "\n  grid-columns: ", ";\n"], ["\n  display: grid;\n  ", "\n  grid-columns: ", ";\n"])), function (_a) {
    var gap = _a.gap;
    return (gap ? "grid-gap: " + gap + ";" : '');
}, function (props) { return Array.from({ length: props.columns }).map(function (_) { return '1fr'; }); });
exports.Item = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", " ", ";\n"], ["\n  ", " ",
    ";\n"])), function (_a) {
    var x = _a.x;
    return (x ? "grid-column: span " + x + ";" : '');
}, function (_a) {
    var y = _a.y;
    return y ? "grid-row: span " + y + ";" : '';
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map