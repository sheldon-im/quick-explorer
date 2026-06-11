// eslint-disable @typescript-eslint/no-namespace
import { RedomComponent } from "redom";

declare global {
    namespace JSX {
        export type IntrinsicElements = {
            [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K] & {
                class: string
            }>
        }
        export type ElementClass = RedomComponent
        export type Element = HTMLElement
    }
}
