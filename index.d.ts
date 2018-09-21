/// <reference path="node_modules/create-emotion/types/index.d.ts" />
/// <reference types="react" />
interface GapProps {
    gap: string;
}
interface ColumnProps {
    columns: number;
}
interface GridProps extends ColumnProps, GapProps {
}
declare const _default: import("create-emotion-styled/types/react").StyledOtherComponent<GridProps, import("eac").DetailedHTMLProps<import("eac").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
export default _default;
interface ItemProps {
    x: number;
    y: number;
}
export declare const Item: import("create-emotion-styled/types/react").StyledOtherComponent<ItemProps, import("eac").DetailedHTMLProps<import("eac").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
//# sourceMappingURL=index.d.ts.map