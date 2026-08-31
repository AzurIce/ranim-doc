/* tslint:disable */
/* eslint-disable */

/**
 * A scene descriptor bundling a constructor, config, and outputs.
 */
export class Scene {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

/**
 * Return a scene with matched name
 */
export function find_scene(name: string): Scene | undefined;

/**
 * WASM wrapper: preview a scene (accepts owned [`Scene`] from `find_scene`)
 */
export function preview_scene(scene: Scene): void;

export function wasm_start(): Promise<void>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly find_scene: (a: number, b: number) => number;
    readonly get_scene: (a: number) => number;
    readonly scene_cnt: () => number;
    readonly __wbg_scene_free: (a: number, b: number) => void;
    readonly preview_scene: (a: number) => void;
    readonly wasm_start: () => void;
    readonly wasm_bindgen_deda887ccf6d20f5___convert__closures_____invoke___wasm_bindgen_deda887ccf6d20f5___JsValue__core_3929dc75095e48e2___result__Result_____wasm_bindgen_deda887ccf6d20f5___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_deda887ccf6d20f5___convert__closures_____invoke___wasm_bindgen_deda887ccf6d20f5___sys__JsNullable_wgpu_e578a31479fffc82___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_3929dc75095e48e2___result__Result_____wasm_bindgen_deda887ccf6d20f5___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_deda887ccf6d20f5___convert__closures_____invoke___wasm_bindgen_deda887ccf6d20f5___sys__JsNullable_wgpu_e578a31479fffc82___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_3929dc75095e48e2___result__Result_____wasm_bindgen_deda887ccf6d20f5___JsError___true__4: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_deda887ccf6d20f5___convert__closures_____invoke___wasm_bindgen_deda887ccf6d20f5___sys__JsNullable_wgpu_e578a31479fffc82___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_3929dc75095e48e2___result__Result_____wasm_bindgen_deda887ccf6d20f5___JsError___true__5: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_deda887ccf6d20f5___convert__closures_____invoke___js_sys_26e50e6fe9a8a205___Array______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_deda887ccf6d20f5___convert__closures_____invoke___js_sys_26e50e6fe9a8a205___Array______true__2: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_deda887ccf6d20f5___convert__closures_____invoke___core_3929dc75095e48e2___result__Result_____wasm_bindgen_deda887ccf6d20f5___JsValue___true_: (a: number, b: number) => [number, number];
    readonly __wbindgen_malloc_command_export: (a: number, b: number) => number;
    readonly __wbindgen_realloc_command_export: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc_command_export: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store_command_export: (a: number) => void;
    readonly __wbindgen_free_command_export: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure_command_export: (a: number, b: number) => void;
    readonly __externref_table_dealloc_command_export: (a: number) => void;
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
