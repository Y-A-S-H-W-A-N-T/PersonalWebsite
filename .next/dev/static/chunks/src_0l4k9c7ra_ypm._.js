(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimatedBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ---------- helpers ---------- */ // Deterministic pseudo-random (0..1), rounded so values are stable
const rnd = (i, salt)=>{
    const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
    return Math.round((x - Math.floor(x)) * 1000) / 1000;
};
const NOISE = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";
const GLOW_STYLE = (color, size)=>({
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
        opacity: "var(--blob-opacity)"
    });
_c = GLOW_STYLE;
/** Two big soft glows so every scene keeps the section's color mood */ function Glows() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-[10%] -left-[10%] rounded-full blur-[100px]",
            style: GLOW_STYLE("var(--blob-1)", "45vmax")
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -right-[10%] -bottom-[15%] rounded-full blur-[100px]",
                    style: GLOW_STYLE("var(--blob-2)", "50vmax")
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 40,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c1 = Glows;
/* ---------- Scene 1: Profile, retro checks ---------- */ function ChecksScene() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: "conic-gradient(color-mix(in srgb, var(--primary) 16%, transparent) 25%, transparent 0 50%, color-mix(in srgb, var(--primary) 16%, transparent) 0 75%, transparent 0), linear-gradient(color-mix(in srgb, var(--primary) 10%, transparent) 1px, transparent 1px)",
                        backgroundSize: "64px 64px, 32px 32px",
                        animation: "checks-move 14s linear infinite",
                        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 66,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c2 = ChecksScene;
/* ---------- Scene 2: Experience, rising bubbles ---------- */ function BubblesScene() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 91,
                    columnNumber: 12
                }, this),
                Array.from({
                    length: 20
                }).map(_BubblesSceneAnonymous)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c3 = BubblesScene;
/* ---------- Scene 3: Skills, dot matrix + scan line ---------- */ function _BubblesSceneAnonymous(_, i) {
    const size = 18 + Math.round(rnd(i, 1) * 80);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "absolute rounded-full",
        style: {
            left: `${Math.round(rnd(i, 2) * 96)}%`,
            bottom: -130,
            width: size,
            height: size,
            border: "1px solid color-mix(in srgb, var(--primary) 45%, transparent)",
            background: "radial-gradient(circle at 30% 28%, color-mix(in srgb, var(--blob-3) 55%, transparent), color-mix(in srgb, var(--blob-1) 10%, transparent) 60%, transparent 72%)",
            animation: `bubble-rise ${10 + Math.round(rnd(i, 3) * 14)}s linear ${-Math.round(rnd(i, 4) * 20)}s infinite`
        }
    }, i, false, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 104,
        columnNumber: 10
    }, this);
}
function DotsScene() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            style: {
                backgroundImage: "radial-gradient(circle, color-mix(in srgb, var(--primary) 55%, transparent) 1.6px, transparent 1.8px)",
                backgroundSize: "30px 30px",
                maskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 top-0 h-[30vh]",
                    style: {
                        background: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--primary-2) 22%, transparent), transparent)",
                        animation: "scan 7s linear infinite"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 143,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c4 = DotsScene;
/* ---------- Scene 4: Projects, floating geometric shapes ---------- */ function ShapesScene() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "triangle",
            "square",
            "ring",
            "circle"
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const kinds = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "var(--primary)",
            "var(--primary-2)",
            "var(--secondary)",
            "var(--blob-4)"
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const colors = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 181,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-50",
                    style: {
                        backgroundImage: "repeating-linear-gradient(45deg, color-mix(in srgb, var(--primary) 7%, transparent) 0 2px, transparent 2px 28px)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 188,
                    columnNumber: 16
                }, this),
                Array.from({
                    length: 16
                }).map({
                    "ShapesScene[(anonymous)()]": (_, i)=>{
                        const kind = kinds[i % kinds.length];
                        const color = colors[i % colors.length];
                        const size = 24 + Math.round(rnd(i, 5) * 56);
                        const base = {
                            left: `${Math.round(rnd(i, 6) * 94)}%`,
                            top: `${Math.round(rnd(i, 7) * 90)}%`,
                            width: size,
                            height: size,
                            animation: `spin-float ${8 + Math.round(rnd(i, 8) * 8)}s ease-in-out ${-Math.round(rnd(i, 9) * 10)}s infinite`
                        };
                        const shape = kind === "triangle" ? {
                            background: color,
                            opacity: 0.35,
                            clipPath: "polygon(50% 0, 100% 100%, 0 100%)"
                        } : kind === "square" ? {
                            background: color,
                            opacity: 0.28,
                            borderRadius: 8
                        } : kind === "ring" ? {
                            border: `3px solid ${color}`,
                            opacity: 0.45,
                            borderRadius: "9999px"
                        } : {
                            background: color,
                            opacity: 0.3,
                            borderRadius: "9999px"
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute",
                            style: {
                                ...base,
                                ...shape
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/AnimatedBackground.tsx",
                            lineNumber: 221,
                            columnNumber: 18
                        }, this);
                    }
                }["ShapesScene[(anonymous)()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 188,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c5 = ShapesScene;
/* ---------- Scene 5: Resume, gold sparkles + ruled lines ---------- */ function SparklesScene() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 245,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 39px, color-mix(in srgb, var(--primary) 12%, transparent) 39px 40px)",
                        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 252,
                    columnNumber: 16
                }, this),
                Array.from({
                    length: 36
                }).map(_SparklesSceneAnonymous)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 252,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c6 = SparklesScene;
/* ---------- Scene 6: Chatbot, GenZ aurora ---------- */ function _SparklesSceneAnonymous(_, i) {
    const size = 3 + Math.round(rnd(i, 10) * 7);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "absolute",
        style: {
            left: `${Math.round(rnd(i, 11) * 98)}%`,
            top: `${Math.round(rnd(i, 12) * 96)}%`,
            width: size,
            height: size,
            background: i % 3 === 0 ? "var(--secondary)" : "var(--primary)",
            clipPath: "polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%)",
            transform: "scale(3)",
            animation: `twinkle ${2 + Math.round(rnd(i, 13) * 4)}s ease-in-out ${-Math.round(rnd(i, 14) * 6)}s infinite`
        }
    }, i, false, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 269,
        columnNumber: 10
    }, this);
}
const AURORA = [
    {
        color: "var(--blob-1)",
        size: "46vmax",
        top: "-10%",
        left: "-8%",
        dur: "18s",
        delay: "0s"
    },
    {
        color: "var(--blob-2)",
        size: "50vmax",
        top: "30%",
        left: "55%",
        dur: "22s",
        delay: "-6s"
    },
    {
        color: "var(--blob-3)",
        size: "40vmax",
        top: "60%",
        left: "5%",
        dur: "20s",
        delay: "-3s"
    },
    {
        color: "var(--blob-4)",
        size: "34vmax",
        top: "-15%",
        left: "60%",
        dur: "24s",
        delay: "-9s"
    }
];
function AuroraScene() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                AURORA.map(_AuroraSceneAURORAMap),
                [
                    {
                        top: "14%",
                        left: "8%",
                        size: 46,
                        ring: true,
                        delay: "0s"
                    },
                    {
                        top: "72%",
                        left: "14%",
                        size: 18,
                        ring: false,
                        delay: "-2s"
                    },
                    {
                        top: "22%",
                        left: "62%",
                        size: 14,
                        ring: false,
                        delay: "-4s"
                    },
                    {
                        top: "80%",
                        left: "55%",
                        size: 38,
                        ring: true,
                        delay: "-1s"
                    },
                    {
                        top: "48%",
                        left: "30%",
                        size: 12,
                        ring: false,
                        delay: "-3s"
                    }
                ].map(_AuroraSceneAnonymous)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 319,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c7 = AuroraScene;
/* ---------- Scene registry (same order as SECTIONS) ---------- */ function _AuroraSceneAnonymous(s, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "absolute rounded-full",
        style: {
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            border: s.ring ? "2px solid var(--primary)" : "none",
            background: s.ring ? "transparent" : "var(--primary-2)",
            opacity: s.ring ? 0.4 : 0.55,
            animation: `shape-float 9s ease-in-out ${s.delay} infinite`
        }
    }, i_0, false, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 359,
        columnNumber: 10
    }, this);
}
function _AuroraSceneAURORAMap(b, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute",
        style: {
            top: b.top,
            left: b.left
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-full blur-[90px]",
            style: {
                ...GLOW_STYLE(b.color, b.size),
                animation: `blob-float ${b.dur} ease-in-out ${b.delay} infinite`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 374,
            columnNumber: 6
        }, this)
    }, i, false, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 371,
        columnNumber: 10
    }, this);
}
const SCENES = [
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChecksScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 379,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BubblesScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 379,
            columnNumber: 67
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DotsScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 379,
            columnNumber: 91
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShapesScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 379,
            columnNumber: 112
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparklesScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 379,
            columnNumber: 135
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 379,
            columnNumber: 160
        }, ("TURBOPACK compile-time value", void 0))
];
function AnimatedBackground(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f299dfd558640d7326577110b900896085622ae79a09cce63b3bfc6aabc46a0";
    }
    const { activeIndex } = t0;
    const mx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-500);
    const my = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-500);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            stiffness: 90,
            damping: 20,
            mass: 0.6
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const sx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mx, t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            stiffness: 90,
            damping: 20,
            mass: 0.6
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const sy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(my, t2);
    let t3;
    let t4;
    if ($[3] !== mx || $[4] !== my) {
        t3 = ({
            "AnimatedBackground[useEffect()]": ()=>{
                if (!window.matchMedia("(pointer: fine)").matches) {
                    return;
                }
                const move = {
                    "AnimatedBackground[useEffect() > move]": (e)=>{
                        mx.set(e.clientX);
                        my.set(e.clientY);
                    }
                }["AnimatedBackground[useEffect() > move]"];
                window.addEventListener("mousemove", move);
                return ()=>window.removeEventListener("mousemove", move);
            }
        })["AnimatedBackground[useEffect()]"];
        t4 = [
            mx,
            my
        ];
        $[3] = mx;
        $[4] = my;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0
        };
        t6 = {
            opacity: 1
        };
        t7 = {
            opacity: 0
        };
        t8 = {
            duration: 1.1,
            ease: "easeInOut"
        };
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
    } else {
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
    }
    let t9;
    if ($[11] !== activeIndex) {
        t9 = SCENES[activeIndex]?.();
        $[11] = activeIndex;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== activeIndex || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0",
                initial: t5,
                animate: t6,
                exit: t7,
                transition: t8,
                children: t9
            }, activeIndex, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 485,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[13] = activeIndex;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== sx || $[17] !== sy) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute top-0 left-0 hidden size-[420px] rounded-full opacity-30 blur-3xl md:block",
            style: {
                x: sx,
                y: sy,
                translateX: "-50%",
                translateY: "-50%",
                background: "radial-gradient(circle, var(--primary-2), transparent 65%)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[16] = sx;
        $[17] = sy;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-[0.07] mix-blend-overlay dark:opacity-[0.12]",
            style: {
                backgroundImage: NOISE
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            style: {
                background: "radial-gradient(ellipse at center, transparent 40%, var(--background) 115%)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 518,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t10 || $[22] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
            children: [
                t10,
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 527,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t11;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    return t14;
}
_s(AnimatedBackground, "5JaZqcQF8pvXbVldMgmvKLtKmbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c8 = AnimatedBackground;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "GLOW_STYLE");
__turbopack_context__.k.register(_c1, "Glows");
__turbopack_context__.k.register(_c2, "ChecksScene");
__turbopack_context__.k.register(_c3, "BubblesScene");
__turbopack_context__.k.register(_c4, "DotsScene");
__turbopack_context__.k.register(_c5, "ShapesScene");
__turbopack_context__.k.register(_c6, "SparklesScene");
__turbopack_context__.k.register(_c7, "AuroraScene");
__turbopack_context__.k.register(_c8, "AnimatedBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PortfolioShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sections.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSectionScroll.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SideNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedBackground.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const IDS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].map(_c = (s)=>s.id);
_c1 = IDS;
const elId = (id)=>`section-${id}`;
function PortfolioShell(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "3cedb869d3554e1e977cc1d0777306c78168c6f3e72b4de18434d77c6bbc7c09") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3cedb869d3554e1e977cc1d0777306c78168c6f3e72b4de18434d77c6bbc7c09";
    }
    const { content } = t0;
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 767px)");
    const t1 = !isMobile;
    let t2;
    if ($[1] !== t1) {
        t2 = {
            ids: IDS,
            enabled: t1
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const { index, goTo, syncIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionScroll"])(t2);
    const scrollerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_PortfolioShellUseEffect, t3);
    let t4;
    let t5;
    if ($[4] !== isMobile) {
        t4 = ({
            "PortfolioShell[useEffect()]": ()=>{
                if (isMobile) {
                    return;
                }
                const root = scrollerRef.current;
                if (!root) {
                    return;
                }
                const reset = {
                    "PortfolioShell[useEffect() > reset]": ()=>{
                        if (root.scrollTop !== 0) {
                            root.scrollTop = 0;
                        }
                        if (root.scrollLeft !== 0) {
                            root.scrollLeft = 0;
                        }
                    }
                }["PortfolioShell[useEffect() > reset]"];
                reset();
                root.addEventListener("scroll", reset);
                return ()=>root.removeEventListener("scroll", reset);
            }
        })["PortfolioShell[useEffect()]"];
        t5 = [
            isMobile
        ];
        $[4] = isMobile;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[7] !== isMobile || $[8] !== syncIndex) {
        t6 = ({
            "PortfolioShell[useEffect()]": ()=>{
                if (!isMobile) {
                    return;
                }
                const root_0 = scrollerRef.current;
                if (!root_0) {
                    return;
                }
                const hash = window.location.hash.slice(1);
                if (hash) {
                    document.getElementById(elId(hash))?.scrollIntoView({
                        behavior: "auto"
                    });
                }
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "PortfolioShell[useEffect() > <anonymous> > entries.forEach()]": (entry)=>{
                            if (entry.isIntersecting) {
                                syncIndex(Number(entry.target.dataset.index));
                            }
                        }
                    }["PortfolioShell[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    root: root_0,
                    threshold: 0.6
                });
                root_0.querySelectorAll("section[data-index]").forEach({
                    "PortfolioShell[useEffect() > (anonymous)()]": (el)=>observer.observe(el)
                }["PortfolioShell[useEffect() > (anonymous)()]"]);
                return ()=>observer.disconnect();
            }
        })["PortfolioShell[useEffect()]"];
        t7 = [
            isMobile,
            syncIndex
        ];
        $[7] = isMobile;
        $[8] = syncIndex;
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[11] !== goTo || $[12] !== isMobile) {
        t8 = ({
            "PortfolioShell[handleSelect]": (i)=>{
                if (isMobile) {
                    document.getElementById(elId(IDS[i]))?.scrollIntoView({
                        behavior: "smooth"
                    });
                } else {
                    goTo(i);
                }
            }
        })["PortfolioShell[handleSelect]"];
        $[11] = goTo;
        $[12] = isMobile;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const handleSelect = t8;
    const t9 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"][index];
    let t10;
    if ($[14] !== index) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeIndex: index
        }, void 0, false, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[14] = index;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== handleSelect || $[17] !== index) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeIndex: index,
            onSelect: handleSelect
        }, void 0, false, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[16] = handleSelect;
        $[17] = index;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const t12 = `h-full overscroll-none ${isMobile ? "snap-y snap-mandatory overflow-y-auto" : "overflow-hidden"}`;
    let t13;
    if ($[19] !== index || $[20] !== isMobile) {
        t13 = isMobile ? undefined : {
            transform: `translate3d(0, -${index * 100}dvh, 0)`,
            transition: `transform ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_MS"]}ms cubic-bezier(0.76, 0, 0.24, 1)`
        };
        $[19] = index;
        $[20] = isMobile;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== content || $[23] !== handleSelect || $[24] !== index || $[25] !== isMobile) {
        t14 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].map({
            "PortfolioShell[SECTIONS.map()]": (section, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: section.id,
                    index: i_0,
                    label: section.label,
                    title: section.title,
                    subtitle: section.subtitle,
                    active: i_0 === index,
                    inert: !isMobile && i_0 !== index,
                    isLast: i_0 === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].length - 1,
                    onNext: {
                        "PortfolioShell[SECTIONS.map() > <SectionWrapper>.onNext]": ()=>handleSelect(i_0 + 1)
                    }["PortfolioShell[SECTIONS.map() > <SectionWrapper>.onNext]"],
                    children: content[section.id]
                }, section.id, false, {
                    fileName: "[project]/src/components/PortfolioShell.tsx",
                    lineNumber: 190,
                    columnNumber: 59
                }, this)
        }["PortfolioShell[SECTIONS.map()]"]);
        $[22] = content;
        $[23] = handleSelect;
        $[24] = index;
        $[25] = isMobile;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t13 || $[28] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "will-change-transform",
            style: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t14;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t12 || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollerRef,
            className: t12,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[30] = t12;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t10 || $[34] !== t11 || $[35] !== t16 || $[36] !== t9.id) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-section": t9.id,
            className: "theme-root relative isolate h-dvh w-full overflow-hidden bg-background",
            children: [
                t10,
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t11;
        $[35] = t16;
        $[36] = t9.id;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    return t17;
}
_s(PortfolioShell, "/a5OCmoTdrDGa7c7ddIco9HHaKg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionScroll"]
    ];
});
_c2 = PortfolioShell;
function _PortfolioShellUseEffect() {
    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "IDS$SECTIONS.map");
__turbopack_context__.k.register(_c1, "IDS");
__turbopack_context__.k.register(_c2, "PortfolioShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollHint.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollHint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-down.mjs [app-client] (ecmascript) <export default as ChevronsDown>");
"use client";
;
;
;
;
function ScrollHint(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "b9209406b38a9cb2564cde88ae50d560fb6dbc864663ad373613fb033487ac18") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9209406b38a9cb2564cde88ae50d560fb6dbc864663ad373613fb033487ac18";
    }
    const { visible, onClick } = t0;
    const t1 = visible ? 1 : 0;
    const t2 = visible ? 0 : 12;
    let t3;
    if ($[1] !== t1 || $[2] !== t2) {
        t3 = {
            opacity: t1,
            y: t2
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = visible ? 1.1 : 0;
    let t5;
    if ($[4] !== t4) {
        t5 = {
            duration: 0.6,
            delay: t4
        };
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDown$3e$__["ChevronsDown"], {
            className: "size-5",
            style: {
                animation: "hint-bounce 1.6s ease-in-out infinite"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ScrollHint.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== onClick || $[8] !== t3 || $[9] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center pr-20 md:bottom-5 md:pr-32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: onClick,
                "aria-label": "Scroll to next section",
                initial: false,
                animate: t3,
                transition: t5,
                className: "glass pointer-events-auto flex size-10 items-center justify-center rounded-full text-primary shadow-lg transition-colors hover:text-foreground",
                children: t6
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollHint.tsx",
                lineNumber: 59,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ScrollHint.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = onClick;
        $[8] = t3;
        $[9] = t5;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_c = ScrollHint;
var _c;
__turbopack_context__.k.register(_c, "ScrollHint");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SectionWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollHint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollHint.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const container = {
    hide: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.25
        }
    }
};
const item = {
    hide: {
        opacity: 0,
        y: 28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
function SectionWrapper(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "22cd3fc1d56f21211a397368997f714a4364fcacca3405494b2ce18908ba1d99") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "22cd3fc1d56f21211a397368997f714a4364fcacca3405494b2ce18908ba1d99";
    }
    const { id, index, label, title, subtitle, active, inert, isLast, onNext, children } = t0;
    const t1 = `section-${id}`;
    const t2 = active ? "show" : "hide";
    const t3 = String(index + 1);
    let t4;
    if ($[1] !== t3) {
        t4 = t3.padStart(2, "0");
        $[1] = t3;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] !== label || $[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 font-display text-sm tracking-[0.3em] text-primary uppercase",
            children: [
                t4,
                " / ",
                label
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-display text-4xl font-bold text-gradient sm:text-5xl md:text-6xl",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[6] = title;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== subtitle) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 max-w-xl text-muted",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[8] = subtitle;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t5 || $[11] !== t6 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            variants: item,
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== children) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: item,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[14] = children;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t2 || $[17] !== t8 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: container,
            initial: "hide",
            animate: t2,
            className: "mx-auto flex min-h-full max-w-6xl flex-col justify-center gap-8",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[16] = t2;
        $[17] = t8;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== active || $[21] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-section-scroll": true,
            "data-active": active,
            className: "no-scrollbar h-full overflow-y-auto pt-12 pr-20 pb-10 pl-5 sm:pl-8 sm:pr-24 md:pt-16 md:pr-32 md:pl-16 lg:pr-36 lg:pl-24",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[20] = active;
        $[21] = t10;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== active || $[24] !== isLast || $[25] !== onNext) {
        t12 = !isLast && onNext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollHint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            visible: active,
            onClick: onNext
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 137,
            columnNumber: 32
        }, this);
        $[23] = active;
        $[24] = isLast;
        $[25] = onNext;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== index || $[28] !== inert || $[29] !== label || $[30] !== t1 || $[31] !== t11 || $[32] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t1,
            "aria-label": label,
            "data-index": index,
            inert: inert,
            className: "relative h-dvh w-full shrink-0 snap-start",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[27] = index;
        $[28] = inert;
        $[29] = label;
        $[30] = t1;
        $[31] = t11;
        $[32] = t12;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    return t13;
}
_c = SectionWrapper;
var _c;
__turbopack_context__.k.register(_c, "SectionWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SideNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sections.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SideNav(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "74104673a0bac7b6a6e38ec661b9ab238cc2cf340224db801fc63de2ae486c85") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74104673a0bac7b6a6e38ec661b9ab238cc2cf340224db801fc63de2ae486c85";
    }
    const { activeIndex, onSelect } = t0;
    const progress = activeIndex / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].length - 1);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/SideNav.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== progress) {
        t2 = {
            scaleY: progress
        };
        $[2] = progress;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            duration: 0.8,
            ease: [
                0.76,
                0,
                0.24,
                1
            ]
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "absolute inset-y-[28px] left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-card-border md:inset-y-[36px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "h-full w-full origin-top rounded-full bg-linear-to-b from-primary to-secondary",
                animate: t2,
                transition: t3
            }, void 0, false, {
                fileName: "[project]/src/components/SideNav.tsx",
                lineNumber: 53,
                columnNumber: 148
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideNav.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== activeIndex || $[8] !== onSelect) {
        t5 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].map({
            "SideNav[SECTIONS.map()]": (section, i)=>{
                const Icon = section.icon;
                const active = i === activeIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "SideNav[SECTIONS.map() > <button>.onClick]": ()=>onSelect(i)
                    }["SideNav[SECTIONS.map() > <button>.onClick]"],
                    "aria-label": `Go to ${section.label}`,
                    "aria-current": active ? "true" : undefined,
                    className: `group relative flex size-14 shrink-0 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 md:size-18 ${active ? "border-transparent text-white" : "border-card-border bg-background text-muted hover:scale-110 hover:text-foreground"}`,
                    children: [
                        active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            layoutId: "nav-active-pill",
                            className: "absolute inset-0 rounded-full bg-linear-to-br from-primary to-primary-2 shadow-[0_0_28px_var(--primary)]",
                            transition: {
                                type: "spring",
                                stiffness: 380,
                                damping: 30
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideNav.tsx",
                            lineNumber: 67,
                            columnNumber: 434
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "relative z-10 size-7 md:size-9",
                            strokeWidth: active ? 2.2 : 1.8
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideNav.tsx",
                            lineNumber: 71,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "glass pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap text-foreground opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block",
                            children: section.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideNav.tsx",
                            lineNumber: 71,
                            columnNumber: 101
                        }, this)
                    ]
                }, section.id, true, {
                    fileName: "[project]/src/components/SideNav.tsx",
                    lineNumber: 65,
                    columnNumber: 16
                }, this);
            }
        }["SideNav[SECTIONS.map()]"]);
        $[7] = activeIndex;
        $[8] = onSelect;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Section navigation",
            className: "fixed top-0 right-1.5 z-50 flex h-dvh flex-col items-center gap-3 py-3 md:right-5 md:gap-5 md:py-5",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex w-full flex-1 flex-col items-center justify-between",
                    children: [
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SideNav.tsx",
                    lineNumber: 82,
                    columnNumber: 162
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideNav.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c = SideNav;
var _c;
__turbopack_context__.k.register(_c, "SideNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "0796ff42060aa31ce0d612e6f5de79b89c723aa4c98e5fc55b859573020cc827") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0796ff42060aa31ce0d612e6f5de79b89c723aa4c98e5fc55b859573020cc827";
    }
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>setMounted(true)
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const isDark = resolvedTheme === "dark";
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    let t2;
    if ($[3] !== isDark || $[4] !== setTheme) {
        t2 = ({
            "ThemeToggle[<button>.onClick]": ()=>setTheme(isDark ? "light" : "dark")
        })["ThemeToggle[<button>.onClick]"];
        $[3] = isDark;
        $[4] = setTheme;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== isDark || $[7] !== mounted) {
        t3 = mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            initial: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    rotate: -90,
                    scale: 0.5,
                    opacity: 0
                },
                animate: {
                    rotate: 0,
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    rotate: 90,
                    scale: 0.5,
                    opacity: 0
                },
                transition: {
                    duration: 0.25
                },
                className: "flex",
                children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "size-7 text-amber-400 md:size-9"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 64,
                    columnNumber: 37
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    className: "size-7 text-primary md:size-9"
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 64,
                    columnNumber: 91
                }, this)
            }, isDark ? "sun" : "moon", false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 50,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 50,
            columnNumber: 21
        }, this);
        $[6] = isDark;
        $[7] = mounted;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const t4 = isDark ? "Light mode" : "Dark mode";
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "glass pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap text-foreground opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== label || $[12] !== t2 || $[13] !== t3 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t2,
            "aria-label": label,
            className: "group relative flex size-14 shrink-0 items-center justify-center rounded-full border border-card-border bg-background text-foreground shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 md:size-18",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = label;
        $[12] = t2;
        $[13] = t3;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_s(ThemeToggle, "b1Q7oOBxBU62ucwZcZgel2Hl7S4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profile",
    ()=>profile
]);
const profile = {
    name: "Yashwant",
    roles: [
        "Full Stack Developer",
        "Mobile Developer",
        "Problem Solver"
    ],
    tagline: "I build fast, clean, and delightful web experiences.",
    photo: "/images/profile.jpg",
    about: "I'm a developer who loves turning ideas into polished products. Replace this with a short, personal paragraph about who you are and what drives you.",
    description: "A longer description of your work, your approach, and what you're looking for. Replace this with your own text.",
    email: "you@example.com",
    phone: "+91 00000 00000",
    location: "Hyderabad, India",
    socials: [
        {
            platform: "github",
            label: "GitHub",
            url: "https://github.com/yourusername"
        },
        {
            platform: "linkedin",
            label: "LinkedIn",
            url: "https://linkedin.com/in/yourusername"
        },
        {
            platform: "twitter",
            label: "Twitter",
            url: "https://twitter.com/yourusername"
        },
        {
            platform: "email",
            label: "Email",
            url: "mailto:you@example.com"
        }
    ],
    domains: [
        "Web Development",
        "Frontend Engineering",
        "API Design",
        "Cloud"
    ],
    industries: [
        "FinTech",
        "E-commerce",
        "Healthcare",
        "EdTech"
    ],
    education: [
        {
            degree: "B.Tech in Computer Science",
            institution: "Your University",
            startDate: "2018-08",
            endDate: "2022-05",
            grade: "8.5 CGPA"
        },
        {
            degree: "Intermediate (MPC)",
            institution: "Your College",
            startDate: "2016-06",
            endDate: "2018-04",
            grade: "95%"
        }
    ],
    languages: [
        {
            name: "English",
            proficiency: "Fluent"
        },
        {
            name: "Hindi",
            proficiency: "Fluent"
        },
        {
            name: "Telugu",
            proficiency: "Native"
        }
    ],
    hobbies: [
        {
            name: "Photography",
            icon: "Camera"
        },
        {
            name: "Gaming",
            icon: "Gamepad2"
        },
        {
            name: "Music",
            icon: "Music"
        },
        {
            name: "Travel",
            icon: "Plane"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMediaQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useMediaQuery(query) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "4f51d23f7e7d92d5a202667b2db1c7e194e5444bc3201bcbcb0efe70d3d85e74") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4f51d23f7e7d92d5a202667b2db1c7e194e5444bc3201bcbcb0efe70d3d85e74";
    }
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== query) {
        t0 = ({
            "useMediaQuery[useEffect()]": ()=>{
                const mql = window.matchMedia(query);
                setMatches(mql.matches);
                const handler = {
                    "useMediaQuery[useEffect() > handler]": (e)=>setMatches(e.matches)
                }["useMediaQuery[useEffect() > handler]"];
                mql.addEventListener("change", handler);
                return ()=>mql.removeEventListener("change", handler);
            }
        })["useMediaQuery[useEffect()]"];
        t1 = [
            query
        ];
        $[1] = query;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSectionScroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANIMATION_MS",
    ()=>ANIMATION_MS,
    "useSectionScroll",
    ()=>useSectionScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ANIMATION_MS = 850;
const INERTIA_GAP_MS = 150; // quiet time required after a change before new gestures count
const SWIPE_THRESHOLD = 50; // touch swipe distance in px
const WHEEL_TRIGGER = 10; // accumulated delta needed to change section
const WHEEL_RESET_MS = 120; // pause that counts as a new gesture
/** Can this element scroll further in the given direction? */ function canScrollEl(el, dir) {
    if (el.scrollHeight <= el.clientHeight + 1) return false;
    if (dir === 1) return el.scrollTop + el.clientHeight < el.scrollHeight - 1;
    return el.scrollTop > 0;
}
/** Walk up from the event target looking for a scrollable ancestor that can still scroll. */ function canScrollInside(target, dir) {
    let el = target instanceof HTMLElement ? target : null;
    while(el && el !== document.body){
        const { overflowY } = getComputedStyle(el);
        if ((overflowY === "auto" || overflowY === "scroll") && canScrollEl(el, dir)) {
            return true;
        }
        el = el.parentElement;
    }
    return false;
}
function useSectionScroll(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "911aae28f8fc0ab3b313fbfc8692f7bbc666664b1ca386da7dc97af80d024b3f") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "911aae28f8fc0ab3b313fbfc8692f7bbc666664b1ca386da7dc97af80d024b3f";
    }
    const { ids, enabled } = t0;
    const count = ids.length;
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const indexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lockUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t1;
    if ($[1] !== ids) {
        t1 = ({
            "useSectionScroll[updateHash]": (i)=>{
                window.history.replaceState(null, "", `#${ids[i]}`);
            }
        })["useSectionScroll[updateHash]"];
        $[1] = ids;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const updateHash = t1;
    let t2;
    if ($[3] !== count || $[4] !== updateHash) {
        t2 = ({
            "useSectionScroll[goTo]": (target)=>{
                const next = Math.max(0, Math.min(count - 1, target));
                if (next === indexRef.current) {
                    return;
                }
                indexRef.current = next;
                setIndex(next);
                lockUntil.current = performance.now() + ANIMATION_MS;
                updateHash(next);
            }
        })["useSectionScroll[goTo]"];
        $[3] = count;
        $[4] = updateHash;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const goTo = t2;
    let t3;
    if ($[6] !== updateHash) {
        t3 = ({
            "useSectionScroll[syncIndex]": (next_0)=>{
                if (next_0 === indexRef.current) {
                    return;
                }
                indexRef.current = next_0;
                setIndex(next_0);
                updateHash(next_0);
            }
        })["useSectionScroll[syncIndex]"];
        $[6] = updateHash;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const syncIndex = t3;
    let t4;
    let t5;
    if ($[8] !== ids) {
        t4 = ({
            "useSectionScroll[useEffect()]": ()=>{
                const readHash = {
                    "useSectionScroll[useEffect() > readHash]": ()=>{
                        const i_0 = ids.indexOf(window.location.hash.slice(1));
                        if (i_0 >= 0 && i_0 !== indexRef.current) {
                            indexRef.current = i_0;
                            setIndex(i_0);
                        }
                    }
                }["useSectionScroll[useEffect() > readHash]"];
                readHash();
                window.addEventListener("hashchange", readHash);
                return ()=>window.removeEventListener("hashchange", readHash);
            }
        })["useSectionScroll[useEffect()]"];
        t5 = [
            ids
        ];
        $[8] = ids;
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[11] !== count || $[12] !== enabled || $[13] !== goTo) {
        t6 = ({
            "useSectionScroll[useEffect()]": ()=>{
                if (!enabled) {
                    return;
                }
                const getActiveScroller = _useSectionScrollUseEffectGetActiveScroller;
                let wheelAcc = 0;
                let lastWheelTime = 0;
                const onWheel = {
                    "useSectionScroll[useEffect() > onWheel]": (e)=>{
                        if (e.ctrlKey) {
                            return;
                        }
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                            return;
                        }
                        if (e.deltaY === 0) {
                            return;
                        }
                        const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
                        const dir = delta > 0 ? 1 : -1;
                        const now = performance.now();
                        if (canScrollInside(e.target, dir)) {
                            lockUntil.current = Math.max(lockUntil.current, now + 200);
                            wheelAcc = 0;
                            return;
                        }
                        e.preventDefault();
                        if (now < lockUntil.current) {
                            lockUntil.current = Math.max(lockUntil.current, now + INERTIA_GAP_MS);
                            wheelAcc = 0;
                            lastWheelTime = now;
                            return;
                        }
                        if (now - lastWheelTime > WHEEL_RESET_MS || Math.sign(wheelAcc) !== dir) {
                            wheelAcc = 0;
                        }
                        lastWheelTime = now;
                        wheelAcc = wheelAcc + delta;
                        wheelAcc;
                        if (Math.abs(wheelAcc) >= WHEEL_TRIGGER) {
                            wheelAcc = 0;
                            goTo(indexRef.current + dir);
                        }
                    }
                }["useSectionScroll[useEffect() > onWheel]"];
                let touchStartY = null;
                let edgeDown = true;
                let edgeUp = true;
                const onTouchStart = {
                    "useSectionScroll[useEffect() > onTouchStart]": (e_0)=>{
                        touchStartY = e_0.touches[0].clientY;
                        edgeDown = !canScrollInside(e_0.target, 1);
                        edgeUp = !canScrollInside(e_0.target, -1);
                    }
                }["useSectionScroll[useEffect() > onTouchStart]"];
                const onTouchEnd = {
                    "useSectionScroll[useEffect() > onTouchEnd]": (e_1)=>{
                        if (touchStartY === null) {
                            return;
                        }
                        const dy = touchStartY - e_1.changedTouches[0].clientY;
                        touchStartY = null;
                        if (Math.abs(dy) < SWIPE_THRESHOLD) {
                            return;
                        }
                        if (performance.now() < lockUntil.current) {
                            return;
                        }
                        const dir_0 = dy > 0 ? 1 : -1;
                        if (dir_0 === 1 && !edgeDown) {
                            return;
                        }
                        if (dir_0 === -1 && !edgeUp) {
                            return;
                        }
                        goTo(indexRef.current + dir_0);
                    }
                }["useSectionScroll[useEffect() > onTouchEnd]"];
                const onKeyDown = {
                    "useSectionScroll[useEffect() > onKeyDown]": (e_2)=>{
                        const target_0 = e_2.target;
                        if (target_0.closest("input, textarea, select, [contenteditable='true']")) {
                            return;
                        }
                        if (e_2.altKey || e_2.ctrlKey || e_2.metaKey) {
                            return;
                        }
                        let dir_1 = null;
                        let jump = null;
                        let step = 0;
                        bb103: switch(e_2.key){
                            case "ArrowDown":
                                {
                                    dir_1 = 1;
                                    step = 120;
                                    break bb103;
                                }
                            case "ArrowUp":
                                {
                                    dir_1 = -1;
                                    step = 120;
                                    break bb103;
                                }
                            case "PageDown":
                                {
                                    dir_1 = 1;
                                    step = -1;
                                    break bb103;
                                }
                            case "PageUp":
                                {
                                    dir_1 = -1;
                                    step = -1;
                                    break bb103;
                                }
                            case " ":
                                {
                                    if (target_0.closest("button, a")) {
                                        return;
                                    }
                                    dir_1 = e_2.shiftKey ? -1 : 1;
                                    step = -1;
                                    break bb103;
                                }
                            case "Home":
                                {
                                    jump = 0;
                                    break bb103;
                                }
                            case "End":
                                {
                                    jump = count - 1;
                                    break bb103;
                                }
                            default:
                                {
                                    return;
                                }
                        }
                        e_2.preventDefault();
                        if (performance.now() < lockUntil.current) {
                            return;
                        }
                        if (jump !== null) {
                            goTo(jump);
                            return;
                        }
                        const scroller = getActiveScroller();
                        if (dir_1 && scroller && canScrollEl(scroller, dir_1)) {
                            const amount = step === -1 ? scroller.clientHeight * 0.9 : step;
                            scroller.scrollBy({
                                top: dir_1 * amount,
                                behavior: "smooth"
                            });
                            return;
                        }
                        if (dir_1) {
                            goTo(indexRef.current + dir_1);
                        }
                    }
                }["useSectionScroll[useEffect() > onKeyDown]"];
                window.addEventListener("wheel", onWheel, {
                    passive: false
                });
                window.addEventListener("touchstart", onTouchStart, {
                    passive: true
                });
                window.addEventListener("touchend", onTouchEnd, {
                    passive: true
                });
                window.addEventListener("keydown", onKeyDown);
                return ()=>{
                    window.removeEventListener("wheel", onWheel);
                    window.removeEventListener("touchstart", onTouchStart);
                    window.removeEventListener("touchend", onTouchEnd);
                    window.removeEventListener("keydown", onKeyDown);
                };
            }
        })["useSectionScroll[useEffect()]"];
        t7 = [
            enabled,
            count,
            goTo
        ];
        $[11] = count;
        $[12] = enabled;
        $[13] = goTo;
        $[14] = t6;
        $[15] = t7;
    } else {
        t6 = $[14];
        t7 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[16] !== goTo || $[17] !== index || $[18] !== syncIndex) {
        t8 = {
            index,
            goTo,
            syncIndex
        };
        $[16] = goTo;
        $[17] = index;
        $[18] = syncIndex;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_s(useSectionScroll, "CdoKgl8XvvGG2YUk8E/AArKUG4U=");
function _useSectionScrollUseEffectGetActiveScroller() {
    return document.querySelector("[data-section-scroll][data-active=\"true\"]");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTypewriter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTypewriter",
    ()=>useTypewriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useTypewriter(words, t0, t1, t2) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "cf4da2a041330a9f934ff27dffeaf4203fb6a18d0b6b10c7f327921736482bda") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf4da2a041330a9f934ff27dffeaf4203fb6a18d0b6b10c7f327921736482bda";
    }
    const typeMs = t0 === undefined ? 70 : t0;
    const deleteMs = t1 === undefined ? 40 : t1;
    const pauseMs = t2 === undefined ? 1400 : t2;
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t3;
    let t4;
    if ($[1] !== deleteMs || $[2] !== deleting || $[3] !== pauseMs || $[4] !== text || $[5] !== typeMs || $[6] !== wordIndex || $[7] !== words) {
        t3 = ({
            "useTypewriter[useEffect()]": ()=>{
                if (words.length === 0) {
                    return;
                }
                const current = words[wordIndex % words.length];
                const delay = !deleting && text === current ? pauseMs : deleting ? deleteMs : typeMs;
                const timer = setTimeout({
                    "useTypewriter[useEffect() > setTimeout()]": ()=>{
                        if (!deleting && text === current) {
                            setDeleting(true);
                        } else {
                            if (deleting && text === "") {
                                setDeleting(false);
                                setWordIndex({
                                    "useTypewriter[useEffect() > setTimeout() > setWordIndex()]": (i)=>(i + 1) % words.length
                                }["useTypewriter[useEffect() > setTimeout() > setWordIndex()]"]);
                            } else {
                                setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
                            }
                        }
                    }
                }["useTypewriter[useEffect() > setTimeout()]"], delay);
                return ()=>clearTimeout(timer);
            }
        })["useTypewriter[useEffect()]"];
        t4 = [
            text,
            deleting,
            wordIndex,
            words,
            typeMs,
            deleteMs,
            pauseMs
        ];
        $[1] = deleteMs;
        $[2] = deleting;
        $[3] = pauseMs;
        $[4] = text;
        $[5] = typeMs;
        $[6] = wordIndex;
        $[7] = words;
        $[8] = t3;
        $[9] = t4;
    } else {
        t3 = $[8];
        t4 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    return text;
}
_s(useTypewriter, "JTq2sAws8+FnGQ/wAS20mQvRnsg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialIcon",
    ()=>SocialIcon,
    "getHobbyIcon",
    ()=>getHobbyIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.mjs [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eighth$2d$notes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eighth-notes.mjs [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.mjs [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.mjs [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dumbbell.mjs [app-client] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bike.mjs [app-client] (ecmascript) <export default as Bike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.mjs [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.mjs [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.mjs [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.mjs [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mountain.mjs [app-client] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.mjs [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
;
;
/* ---------- Hobby icons: add more here if you need them ---------- */ const HOBBY_ICONS = {
    Camera: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    Gamepad2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
    Music: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eighth$2d$notes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
    Plane: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
    Book: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
    BookOpen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    Dumbbell: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    Bike: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__["Bike"],
    Coffee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
    Film: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"],
    Palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    Code2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
    Headphones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"],
    Mountain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"],
    Utensils: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
    Heart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
};
function getHobbyIcon(name) {
    return HOBBY_ICONS[name] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"];
}
const svgProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
function GithubIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6";
    }
    const { className } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 18c-4.51 2-5-2-7-2"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...svgProps,
            className: className,
            "aria-hidden": true,
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[3] = className;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = GithubIcon;
function LinkedinIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            width: "4",
            height: "12",
            x: "2",
            y: "9"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "4",
            cy: "4",
            r: "2"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...svgProps,
            className: className,
            "aria-hidden": true,
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[4] = className;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c1 = LinkedinIcon;
function TwitterIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...svgProps,
            className: className,
            "aria-hidden": true,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c2 = TwitterIcon;
function InstagramIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5"
        }, void 0, false, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ...svgProps,
            className: className,
            "aria-hidden": true,
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/icons.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[4] = className;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c3 = InstagramIcon;
function SocialIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f47850b278509733a91ce21f4eea34f736de490bf124ca9eab56ce2a79ab7b6";
    }
    const { platform, className } = t0;
    switch(platform){
        case "github":
            {
                let t1;
                if ($[1] !== className) {
                    t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GithubIcon, {
                        className: className
                    }, void 0, false, {
                        fileName: "[project]/src/lib/icons.tsx",
                        lineNumber: 189,
                        columnNumber: 16
                    }, this);
                    $[1] = className;
                    $[2] = t1;
                } else {
                    t1 = $[2];
                }
                return t1;
            }
        case "linkedin":
            {
                let t1;
                if ($[3] !== className) {
                    t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedinIcon, {
                        className: className
                    }, void 0, false, {
                        fileName: "[project]/src/lib/icons.tsx",
                        lineNumber: 201,
                        columnNumber: 16
                    }, this);
                    $[3] = className;
                    $[4] = t1;
                } else {
                    t1 = $[4];
                }
                return t1;
            }
        case "twitter":
            {
                let t1;
                if ($[5] !== className) {
                    t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TwitterIcon, {
                        className: className
                    }, void 0, false, {
                        fileName: "[project]/src/lib/icons.tsx",
                        lineNumber: 213,
                        columnNumber: 16
                    }, this);
                    $[5] = className;
                    $[6] = t1;
                } else {
                    t1 = $[6];
                }
                return t1;
            }
        case "instagram":
            {
                let t1;
                if ($[7] !== className) {
                    t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramIcon, {
                        className: className
                    }, void 0, false, {
                        fileName: "[project]/src/lib/icons.tsx",
                        lineNumber: 225,
                        columnNumber: 16
                    }, this);
                    $[7] = className;
                    $[8] = t1;
                } else {
                    t1 = $[8];
                }
                return t1;
            }
        case "email":
            {
                let t1;
                if ($[9] !== className) {
                    t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                        className: className,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/lib/icons.tsx",
                        lineNumber: 237,
                        columnNumber: 16
                    }, this);
                    $[9] = className;
                    $[10] = t1;
                } else {
                    t1 = $[10];
                }
                return t1;
            }
        default:
            {
                let t1;
                if ($[11] !== className) {
                    t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                        className: className,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/lib/icons.tsx",
                        lineNumber: 249,
                        columnNumber: 16
                    }, this);
                    $[11] = className;
                    $[12] = t1;
                } else {
                    t1 = $[12];
                }
                return t1;
            }
    }
}
_c4 = SocialIcon;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "GithubIcon");
__turbopack_context__.k.register(_c1, "LinkedinIcon");
__turbopack_context__.k.register(_c2, "TwitterIcon");
__turbopack_context__.k.register(_c3, "InstagramIcon");
__turbopack_context__.k.register(_c4, "SocialIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/sections.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SECTIONS",
    ()=>SECTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.mjs [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase-business.mjs [app-client] (ecmascript) <export default as BriefcaseBusiness>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.mjs [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/profile.ts [app-client] (ecmascript)");
;
;
const SECTIONS = [
    {
        id: "profile",
        label: "Profile",
        title: `Hello, I'm ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name}`,
        subtitle: "A quick look at who I am.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"]
    },
    {
        id: "experience",
        label: "Experience",
        title: "Where I've worked",
        subtitle: "Professional roles and internships.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"]
    },
    {
        id: "skills",
        label: "Skills",
        title: "What I work with",
        subtitle: "Technologies, frameworks, and strengths.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
    },
    {
        id: "projects",
        label: "Projects",
        title: "Things I've built",
        subtitle: "Personal work, org projects, and achievements.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
    },
    {
        id: "resume",
        label: "Resume",
        title: "My resume",
        subtitle: "Download it or share the link.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        id: "chatbot",
        label: "Chatbot",
        title: "Ask me anything",
        subtitle: "A slightly sarcastic version of me.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/ProfileHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTypewriter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTypewriter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProfileHero(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "ff93b6dec3c35940510b240c3fe0b096710f41df825b46f671c7027abdad047a") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ff93b6dec3c35940510b240c3fe0b096710f41df825b46f671c7027abdad047a";
    }
    const { profile } = t0;
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTypewriter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypewriter"])(profile.roles);
    const t1 = `mailto:${profile.email}`;
    let t2;
    if ($[1] !== profile.email || $[2] !== t1) {
        t2 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            text: profile.email,
            href: t1
        };
        $[1] = profile.email;
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== profile.phone) {
        t3 = profile.phone ? [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                text: profile.phone,
                href: `tel:${profile.phone.replace(/\s/g, "")}`
            }
        ] : [];
        $[4] = profile.phone;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== profile.location) {
        t4 = {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            text: profile.location,
            href: undefined
        };
        $[6] = profile.location;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = [
            t2,
            ...t3,
            t4
        ];
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const chips = t5;
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-primary via-primary-2 to-secondary opacity-40 blur-2xl"
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            y: [
                0,
                -10,
                0
            ]
        };
        t8 = {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[13] = t7;
        $[14] = t8;
    } else {
        t7 = $[13];
        t8 = $[14];
    }
    let t9;
    if ($[15] !== profile.name || $[16] !== profile.photo) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto md:mx-0",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: t7,
                    transition: t8,
                    className: "relative rounded-[2rem] bg-linear-to-br from-primary via-primary-2 to-secondary p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative size-44 overflow-hidden rounded-[1.8rem] bg-background sm:size-52 md:size-64 lg:size-72",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            src: profile.photo,
                            alt: profile.name,
                            fill: true,
                            priority: true,
                            sizes: "(min-width: 1024px) 288px, (min-width: 768px) 256px, 208px",
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/ProfileHero.tsx",
                            lineNumber: 97,
                            columnNumber: 307
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/ProfileHero.tsx",
                        lineNumber: 97,
                        columnNumber: 193
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/ProfileHero.tsx",
                    lineNumber: 97,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[15] = profile.name;
        $[16] = profile.photo;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted",
            children: "I'm a "
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== role) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gradient",
            children: role
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[19] = role;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": true,
            className: "ml-0.5 inline-block h-[1em] w-0.5 translate-y-1 animate-pulse bg-primary"
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-display text-xl font-semibold sm:text-2xl md:text-3xl",
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== profile.tagline) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-lg font-medium text-foreground/90",
            children: profile.tagline
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[24] = profile.tagline;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== profile.description) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 max-w-2xl text-muted",
            children: profile.description
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[26] = profile.description;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== chips) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex flex-wrap justify-center gap-2 md:justify-start",
            children: chips.map(_ProfileHeroChipsMap)
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[28] = chips;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    const t17 = `mailto:${profile.email}`;
    let t18;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: t17,
            className: "inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-primary-2 px-6 py-3 font-medium text-white shadow-[0_8px_30px_-8px_var(--primary)] transition hover:scale-105 active:scale-95",
            children: [
                t18,
                "Get in touch"
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== profile.socials) {
        t20 = profile.socials.filter(_ProfileHeroProfileSocialsFilter).map(_ProfileHeroAnonymous);
        $[33] = profile.socials;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== t19 || $[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex flex-wrap justify-center gap-3 md:justify-start",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[35] = t19;
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== t13 || $[39] !== t14 || $[40] !== t15 || $[41] !== t16 || $[42] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center md:text-left",
            children: [
                t13,
                t14,
                t15,
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[38] = t13;
        $[39] = t14;
        $[40] = t15;
        $[41] = t16;
        $[42] = t21;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== t22 || $[45] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12",
            children: [
                t9,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[44] = t22;
        $[45] = t9;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    return t23;
}
_s(ProfileHero, "poDe25/WYZHaUgXuZg9SrK9CRRo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTypewriter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypewriter"]
    ];
});
_c = ProfileHero;
function _ProfileHeroAnonymous(s_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: s_0.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": s_0.label,
        title: s_0.label,
        className: "glass flex size-12 items-center justify-center rounded-full transition hover:-translate-y-1 hover:border-primary/60 hover:text-primary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcon"], {
            platform: s_0.platform,
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/src/sections/ProfileHero.tsx",
            lineNumber: 215,
            columnNumber: 272
        }, this)
    }, s_0.url, false, {
        fileName: "[project]/src/sections/ProfileHero.tsx",
        lineNumber: 215,
        columnNumber: 10
    }, this);
}
function _ProfileHeroProfileSocialsFilter(s) {
    return s.platform !== "email";
}
function _ProfileHeroChipsMap(t0) {
    const { icon: Icon, text, href } = t0;
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "size-4 text-primary"
            }, void 0, false, {
                fileName: "[project]/src/sections/ProfileHero.tsx",
                lineNumber: 226,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/sections/ProfileHero.tsx",
                lineNumber: 226,
                columnNumber: 59
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/ProfileHero.tsx",
        lineNumber: 226,
        columnNumber: 17
    }, this);
    return href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition hover:border-primary/60",
        children: inner
    }, text, false, {
        fileName: "[project]/src/sections/ProfileHero.tsx",
        lineNumber: 227,
        columnNumber: 17
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
        children: inner
    }, text, false, {
        fileName: "[project]/src/sections/ProfileHero.tsx",
        lineNumber: 227,
        columnNumber: 172
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProfileHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_0l4k9c7ra_ypm._.js.map