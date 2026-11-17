/* tslint:disable */
/* eslint-disable */

/**
 * Chroma subsampling format
 */
export enum ChromaSampling {
    /**
     * Both vertically and horizontally subsampled.
     */
    Cs420 = 0,
    /**
     * Horizontally subsampled.
     */
    Cs422 = 1,
    /**
     * Not subsampled.
     */
    Cs444 = 2,
    /**
     * Monochrome.
     */
    Cs400 = 3,
}

/**
 * A finalized Ranim project exported to JavaScript.
 *
 * Creating a preview transfers the project into that session. Call the
 * project's exported `app()` constructor again for another independent preview.
 */
export class WasmApp {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Create a preview of a registered scene on an explicit canvas.
     *
     * Resolves after GPU and scene initialization. This does not start a clock
     * or an event loop: the host calls [`WasmPreview::render_at`] to draw.
     * A valid scene selection consumes the project, including if GPU setup fails.
     */
    createPreview(canvas: HTMLCanvasElement, name: string): Promise<WasmPreview>;
    /**
     * The registered scene names, one per line.
     */
    sceneNames(): string;
}

/**
 * A canvas renderer with its own scene evaluator and GPU resources.
 *
 * Playback controls and scheduling belong to the host. Neither egui nor
 * eframe participates in this session.
 */
export class WasmPreview {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Copy the scene's baked mix into JavaScript-owned PCM channel arrays.
     *
     * Returns `null` for scenes without audio, otherwise `{ sampleRate,
     * channels }`, where each channel is a `Float32Array`. Fetch once per
     * session; the snapshot remains valid after disposal. Playback and its
     * audio clock belong to the host.
     */
    audio(): any;
    /**
     * Release the scene, surface, and GPU device. Safe to call more than once.
     */
    dispose(): void;
    /**
     * Evaluate and present the requested time, clamped to the scene duration.
     * Returns false if the surface is temporarily unavailable; retry next frame.
     */
    renderAt(seconds: number): boolean;
    /**
     * Resize the drawing buffer, in physical pixels. Render again afterwards.
     */
    resize(width: number, height: number): void;
    /**
     * Snapshot the animation tree used by the native timeline.
     *
     * Returns `{ duration, roots }`. Each node has `name`, `kind` (`anim`,
     * `children`, or `audio`), `range` in parent-local seconds,
     * `contentDuration`, `enabled`, `simStep`, and `children`.
     * The snapshot contains ordinary JavaScript objects, independent of the
     * renderer's lifetime. Fetch once when a scene is ready, not each frame.
     */
    timeline(): any;
    /**
     * Scene duration in seconds.
     */
    readonly duration: number;
}

export function app(): WasmApp;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_wasmapp_free: (a: number, b: number) => void;
    readonly main: (a: number, b: number) => number;
    readonly __wbg_wasmpreview_free: (a: number, b: number) => void;
    readonly app: () => number;
    readonly wasmapp_createPreview: (a: number, b: any, c: number, d: number) => any;
    readonly wasmapp_sceneNames: (a: number) => [number, number];
    readonly wasmpreview_audio: (a: number) => [number, number, number];
    readonly wasmpreview_dispose: (a: number) => void;
    readonly wasmpreview_duration: (a: number) => [number, number, number];
    readonly wasmpreview_renderAt: (a: number, b: number) => [number, number, number];
    readonly wasmpreview_resize: (a: number, b: number, c: number) => [number, number];
    readonly wasmpreview_timeline: (a: number) => [number, number, number];
    readonly wasm_bindgen_70d2627e4f11c1ce___convert__closures_____invoke___js_sys_7e4bef556d998905___Function_fn_wasm_bindgen_70d2627e4f11c1ce___JsValue_____wasm_bindgen_70d2627e4f11c1ce___sys__Undefined___js_sys_7e4bef556d998905___Function_fn_wasm_bindgen_70d2627e4f11c1ce___JsValue_____wasm_bindgen_70d2627e4f11c1ce___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_70d2627e4f11c1ce___convert__closures_____invoke___wasm_bindgen_70d2627e4f11c1ce___JsValue__core_e8e77cc1e90bd3b0___result__Result_____wasm_bindgen_70d2627e4f11c1ce___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_70d2627e4f11c1ce___convert__closures_____invoke___wasm_bindgen_70d2627e4f11c1ce___sys__JsNullable_wgpu_36dcde8f8d08d667___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_e8e77cc1e90bd3b0___result__Result_____wasm_bindgen_70d2627e4f11c1ce___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_70d2627e4f11c1ce___convert__closures_____invoke___wasm_bindgen_70d2627e4f11c1ce___sys__JsNullable_wgpu_36dcde8f8d08d667___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_e8e77cc1e90bd3b0___result__Result_____wasm_bindgen_70d2627e4f11c1ce___JsError___true__12: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_70d2627e4f11c1ce___convert__closures_____invoke___wasm_bindgen_70d2627e4f11c1ce___sys__JsNullable_wgpu_36dcde8f8d08d667___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_e8e77cc1e90bd3b0___result__Result_____wasm_bindgen_70d2627e4f11c1ce___JsError___true__13: (a: number, b: number, c: any) => [number, number];
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
