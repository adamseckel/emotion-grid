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
function times(times) {
    var i;
    var output = [];
    for (i = 0; i < times; i++) {
        output.push(i);
    }
    return output;
}
var makeGap = function (_a) {
    var gap = _a.gap;
    return (gap ? gap : '0');
};
var makeColumns = function (_a) {
    var columns = _a.columns;
    return times(columns)
        .map(function (x) { return '1fr'; })
        .join(' ');
};
exports.default = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-columns: ", ";\n  grid-gap: ", ";\n"], ["\n  display: grid;\n  grid-columns: ", ";\n  grid-gap: ", ";\n"])), makeColumns, makeGap);
var makeColSpan = function (_a) {
    var _b = _a.x, x = _b === void 0 ? 1 : _b;
    return (x ? "span " + x + ";" : '');
};
var makeRowSpan = function (_a) {
    var _b = _a.x, x = _b === void 0 ? 1 : _b;
    return (x ? "span " + x + ";" : '');
};
exports.Item = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  grid-column: ", ";\n  grid-row: ", ";\n"], ["\n  grid-column: ", ";\n  grid-row: ", ";\n"])), makeColSpan, makeRowSpan);
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map