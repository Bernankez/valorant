import type { InjectionKey } from "vue";

export type FloatingIndicatorValue = string | number;

export const activeKey: InjectionKey<Ref<FloatingIndicatorValue | undefined>> = Symbol("activeKey");
export const setActiveValueKey: InjectionKey<(value: FloatingIndicatorValue) => void> = Symbol("setActiveValueKey");

export const addValueKey: InjectionKey<(value: FloatingIndicatorValue) => void> = Symbol("addValueKey");
export const removeValueKey: InjectionKey<(value: FloatingIndicatorValue) => void> = Symbol("removeValueKey");
