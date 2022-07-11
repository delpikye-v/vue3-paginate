import "./styles.scss";
interface IPageData {
    showFirst: boolean;
    showLast: boolean;
    isOverPage: boolean;
    disabledFirstBack: boolean;
    disabledForwardLast: boolean;
    arrayNumber?: number[];
}
export declare const minSection = 3;
declare const _default: import("vue").DefineComponent<{
    totalCount: {
        required: true;
        type: (NumberConstructor | StringConstructor)[];
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: () => number;
    };
    limit: {
        type: (NumberConstructor | StringConstructor)[];
        default: () => number;
    };
    section: {
        type: (NumberConstructor | StringConstructor)[];
        default: () => number;
    };
    type: {
        type: StringConstructor;
        default: () => string;
    };
    labelFirst: {
        type: StringConstructor;
        default: () => string;
    };
    labelLast: {
        type: StringConstructor;
        default: () => string;
    };
    labelBack: {
        type: StringConstructor;
        default: () => string;
    };
    labelForward: {
        type: StringConstructor;
        default: () => string;
    };
    showFirstLast: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    showForwardBack: BooleanConstructor;
    hideFirstLastIfActive: BooleanConstructor;
}, unknown, {}, {
    hasData(): boolean;
    numberPages(): number;
    pageData(): IPageData;
    isDefault(): boolean;
}, {
    fixPageNumber(): void;
    makePager(): IPageData;
    makeFirstLastclass(isOverPage: boolean, show: boolean): string;
    makePageclass(isActive: boolean): string;
    onChangepage(page: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    totalCount: {
        required: true;
        type: (NumberConstructor | StringConstructor)[];
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: () => number;
    };
    limit: {
        type: (NumberConstructor | StringConstructor)[];
        default: () => number;
    };
    section: {
        type: (NumberConstructor | StringConstructor)[];
        default: () => number;
    };
    type: {
        type: StringConstructor;
        default: () => string;
    };
    labelFirst: {
        type: StringConstructor;
        default: () => string;
    };
    labelLast: {
        type: StringConstructor;
        default: () => string;
    };
    labelBack: {
        type: StringConstructor;
        default: () => string;
    };
    labelForward: {
        type: StringConstructor;
        default: () => string;
    };
    showFirstLast: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    showForwardBack: BooleanConstructor;
    hideFirstLastIfActive: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    limit: string | number;
    section: string | number;
    type: string;
    labelFirst: string;
    labelLast: string;
    labelBack: string;
    labelForward: string;
    showFirstLast: boolean;
    showForwardBack: boolean;
    hideFirstLastIfActive: boolean;
}>;
export default _default;
