(()=>{"use strict";module.exports = [
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PortfolioShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PortfolioShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sections.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Placeholder({ name, tall = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-2xl p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-xl font-semibold",
                children: [
                    name,
                    " content goes here"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-muted",
                children: "This is a placeholder. We replace it in the next steps."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            tall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-4",
                children: Array.from({
                    length: 12
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-xl p-5",
                        children: [
                            "Tall test block ",
                            i + 1
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function Home() {
    const content = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTIONS"].map((s)=>[
            s.id,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                name: s.label,
                tall: s.id === "experience"
            }, s.id, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 32
            }, this)
        ]));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PortfolioShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        content: content
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/AnimatedBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
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
/** Two big soft glows so every scene keeps the section's color mood */ function Glows() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-[10%] -left-[10%] rounded-full blur-[100px]",
                style: GLOW_STYLE("var(--blob-1)", "45vmax")
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-[10%] -bottom-[15%] rounded-full blur-[100px]",
                style: GLOW_STYLE("var(--blob-2)", "50vmax")
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
/* ---------- Scene 1: Profile, retro checks ---------- */ function ChecksScene() {
    const check = "color-mix(in srgb, var(--primary) 16%, transparent)";
    const line = "color-mix(in srgb, var(--primary) 10%, transparent)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: `conic-gradient(${check} 25%, transparent 0 50%, ${check} 0 75%, transparent 0), linear-gradient(${line} 1px, transparent 1px)`,
                    backgroundSize: "64px 64px, 32px 32px",
                    animation: "checks-move 14s linear infinite",
                    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
/* ---------- Scene 2: Experience, rising bubbles ---------- */ function BubblesScene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            Array.from({
                length: 20
            }).map((_, i)=>{
                const size = 18 + Math.round(rnd(i, 1) * 80);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    lineNumber: 69,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
/* ---------- Scene 3: Skills, dot matrix + scan line ---------- */ function DotsScene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: "radial-gradient(circle, color-mix(in srgb, var(--primary) 55%, transparent) 1.6px, transparent 1.8px)",
                    backgroundSize: "30px 30px",
                    maskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-[30vh]",
                style: {
                    background: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--primary-2) 22%, transparent), transparent)",
                    animation: "scan 7s linear infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
/* ---------- Scene 4: Projects, floating geometric shapes ---------- */ function ShapesScene() {
    const kinds = [
        "triangle",
        "square",
        "ring",
        "circle"
    ];
    const colors = [
        "var(--primary)",
        "var(--primary-2)",
        "var(--secondary)",
        "var(--blob-4)"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-50",
                style: {
                    backgroundImage: "repeating-linear-gradient(45deg, color-mix(in srgb, var(--primary) 7%, transparent) 0 2px, transparent 2px 28px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            Array.from({
                length: 16
            }).map((_, i)=>{
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute",
                    style: {
                        ...base,
                        ...shape
                    }
                }, i, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 153,
                    columnNumber: 16
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
/* ---------- Scene 5: Resume, gold sparkles + ruled lines ---------- */ function SparklesScene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Glows, {}, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 39px, color-mix(in srgb, var(--primary) 12%, transparent) 39px 40px)",
                    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            Array.from({
                length: 36
            }).map((_, i)=>{
                const size = 3 + Math.round(rnd(i, 10) * 7);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    lineNumber: 176,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
/* ---------- Scene 6: Chatbot, GenZ aurora ---------- */ const AURORA = [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            AURORA.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute",
                    style: {
                        top: b.top,
                        left: b.left
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-full blur-[90px]",
                        style: {
                            ...GLOW_STYLE(b.color, b.size),
                            animation: `blob-float ${b.dur} ease-in-out ${b.delay} infinite`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimatedBackground.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)),
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
            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                }, i, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
/* ---------- Scene registry (same order as SECTIONS) ---------- */ const SCENES = [
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChecksScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 249,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BubblesScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 250,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotsScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 251,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShapesScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 252,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SparklesScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 253,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraScene, {}, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 254,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
];
function AnimatedBackground({ activeIndex }) {
    // Cursor spotlight (desktop, fine pointers only)
    const mx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-500);
    const my = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-500);
    const sx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mx, {
        stiffness: 90,
        damping: 20,
        mass: 0.6
    });
    const sy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(my, {
        stiffness: 90,
        damping: 20,
        mass: 0.6
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!window.matchMedia("(pointer: fine)").matches) return;
        const move = (e)=>{
            mx.set(e.clientX);
            my.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return ()=>window.removeEventListener("mousemove", move);
    }, [
        mx,
        my
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 1.1,
                        ease: "easeInOut"
                    },
                    children: SCENES[activeIndex]?.()
                }, activeIndex, false, {
                    fileName: "[project]/src/components/AnimatedBackground.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.07] mix-blend-overlay dark:opacity-[0.12]",
                style: {
                    backgroundImage: NOISE
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: "radial-gradient(ellipse at center, transparent 40%, var(--background) 115%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedBackground.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/PortfolioShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sections.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSectionScroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SideNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedBackground.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const IDS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTIONS"].map((s)=>s.id);
const elId = (id)=>`section-${id}`;
function PortfolioShell({ content }) {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 767px)");
    const { index, goTo, syncIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSectionScroll"])({
        ids: IDS,
        enabled: !isMobile
    });
    const scrollerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Stop the browser from restoring an old scroll position on reload
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);
    // Desktop: the outer container must NEVER scroll natively (only the transform moves it)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobile) return;
        const root = scrollerRef.current;
        if (!root) return;
        const reset = ()=>{
            if (root.scrollTop !== 0) root.scrollTop = 0;
            if (root.scrollLeft !== 0) root.scrollLeft = 0;
        };
        reset();
        root.addEventListener("scroll", reset);
        return ()=>root.removeEventListener("scroll", reset);
    }, [
        isMobile
    ]);
    // Mobile: jump to hash on load, then track the visible section
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMobile) return;
        const root = scrollerRef.current;
        if (!root) return;
        const hash = window.location.hash.slice(1);
        if (hash) document.getElementById(elId(hash))?.scrollIntoView({
            behavior: "auto"
        });
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    syncIndex(Number(entry.target.dataset.index));
                }
            });
        }, {
            root,
            threshold: 0.6
        });
        root.querySelectorAll("section[data-index]").forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, [
        isMobile,
        syncIndex
    ]);
    const handleSelect = (i)=>{
        if (isMobile) {
            document.getElementById(elId(IDS[i]))?.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            goTo(i);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-section": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTIONS"][index].id,
        className: "theme-root relative isolate h-dvh w-full overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activeIndex: index
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioShell.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activeIndex: index,
                onSelect: handleSelect
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioShell.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollerRef,
                className: `h-full overscroll-none ${isMobile ? "snap-y snap-mandatory overflow-y-auto" : "overflow-hidden"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "will-change-transform",
                    style: isMobile ? undefined : {
                        transform: `translate3d(0, -${index * 100}dvh, 0)`,
                        transition: `transform ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_MS"]}ms cubic-bezier(0.76, 0, 0.24, 1)`
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTIONS"].map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            id: section.id,
                            index: i,
                            label: section.label,
                            title: section.title,
                            subtitle: section.subtitle,
                            active: i === index,
                            inert: !isMobile && i !== index,
                            isLast: i === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTIONS"].length - 1,
                            onNext: ()=>handleSelect(i + 1),
                            children: content[section.id]
                        }, section.id, false, {
                            fileName: "[project]/src/components/PortfolioShell.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/PortfolioShell.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioShell.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PortfolioShell.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ScrollHint.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollHint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-down.mjs [app-ssr] (ecmascript) <export default as ChevronsDown>");
"use client";
;
;
;
function ScrollHint({ visible, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center pr-20 md:bottom-5 md:pr-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: onClick,
            "aria-label": "Scroll to next section",
            initial: false,
            animate: {
                opacity: visible ? 1 : 0,
                y: visible ? 0 : 12
            },
            transition: {
                duration: 0.6,
                delay: visible ? 1.1 : 0
            },
            className: "glass pointer-events-auto flex size-10 items-center justify-center rounded-full text-primary shadow-lg transition-colors hover:text-foreground",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDown$3e$__["ChevronsDown"], {
                className: "size-5",
                style: {
                    animation: "hint-bounce 1.6s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollHint.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ScrollHint.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollHint.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SectionWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollHint$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollHint.tsx [app-ssr] (ecmascript)");
"use client";
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
function SectionWrapper({ id, index, label, title, subtitle, active, inert, isLast, onNext, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: `section-${id}`,
        "aria-label": label,
        "data-index": index,
        inert: inert,
        className: "relative h-dvh w-full shrink-0 snap-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-section-scroll": true,
                "data-active": active,
                className: "no-scrollbar h-full overflow-y-auto pt-12 pr-20 pb-10 pl-5 sm:pl-8 sm:pr-24 md:pt-16 md:pr-32 md:pl-16 lg:pr-36 lg:pl-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: container,
                    initial: "hide",
                    animate: active ? "show" : "hide",
                    className: "mx-auto flex min-h-full max-w-6xl flex-col justify-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
                            variants: item,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3 font-display text-sm tracking-[0.3em] text-primary uppercase",
                                    children: [
                                        String(index + 1).padStart(2, "0"),
                                        " / ",
                                        label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SectionWrapper.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-4xl font-bold text-gradient sm:text-5xl md:text-6xl",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SectionWrapper.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 max-w-xl text-muted",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SectionWrapper.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SectionWrapper.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: item,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/SectionWrapper.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SectionWrapper.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SectionWrapper.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            !isLast && onNext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollHint$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                visible: active,
                onClick: onNext
            }, void 0, false, {
                fileName: "[project]/src/components/SectionWrapper.tsx",
                lineNumber: 78,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SectionWrapper.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SideNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sections.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SideNav({ activeIndex, onSelect }) {
    const progress = activeIndex / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTIONS"].length - 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Section navigation",
        className: "fixed top-0 right-1.5 z-50 flex h-dvh flex-col items-center gap-3 py-3 md:right-5 md:gap-5 md:py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/SideNav.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex w-full flex-1 flex-col items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-y-[28px] left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-card-border md:inset-y-[36px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full w-full origin-top rounded-full bg-linear-to-b from-primary to-secondary",
                            animate: {
                                scaleY: progress
                            },
                            transition: {
                                duration: 0.8,
                                ease: [
                                    0.76,
                                    0,
                                    0.24,
                                    1
                                ]
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideNav.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SideNav.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTIONS"].map((section, i)=>{
                        const Icon = section.icon;
                        const active = i === activeIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(i),
                            "aria-label": `Go to ${section.label}`,
                            "aria-current": active ? "true" : undefined,
                            className: `group relative flex size-14 shrink-0 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 md:size-18 ${active ? "border-transparent text-white" : "border-card-border bg-background text-muted hover:scale-110 hover:text-foreground"}`,
                            children: [
                                active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    layoutId: "nav-active-pill",
                                    className: "absolute inset-0 rounded-full bg-linear-to-br from-primary to-primary-2 shadow-[0_0_28px_var(--primary)]",
                                    transition: {
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SideNav.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "relative z-10 size-7 md:size-9",
                                    strokeWidth: active ? 2.2 : 1.8
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SideNav.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "glass pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap text-foreground opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block",
                                    children: section.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SideNav.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, section.id, true, {
                            fileName: "[project]/src/components/SideNav.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideNav.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SideNav.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
"use client";
;
;
;
;
;
function ThemeToggle() {
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    const isDark = resolvedTheme === "dark";
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setTheme(isDark ? "light" : "dark"),
        "aria-label": label,
        className: "group relative flex size-14 shrink-0 items-center justify-center rounded-full border border-card-border bg-background text-foreground shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 md:size-18",
        children: [
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                initial: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        className: "size-7 text-amber-400 md:size-9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeToggle.tsx",
                        lineNumber: 34,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        className: "size-7 text-primary md:size-9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeToggle.tsx",
                        lineNumber: 36,
                        columnNumber: 15
                    }, this)
                }, isDark ? "sun" : "moon", false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "glass pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap text-foreground opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block",
                children: isDark ? "Light mode" : "Dark mode"
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ThemeToggle.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profile",
    ()=>profile
]);
const profile = {
    name: "Your Name",
    roles: [
        "Full Stack Developer",
        "UI Enthusiast",
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
}),
"[project]/src/hooks/useMediaQuery.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useMediaQuery(query) {
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mql = window.matchMedia(query);
        setMatches(mql.matches);
        const handler = (e)=>setMatches(e.matches);
        mql.addEventListener("change", handler);
        return ()=>mql.removeEventListener("change", handler);
    }, [
        query
    ]);
    return matches;
}
}),
"[project]/src/hooks/useSectionScroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANIMATION_MS",
    ()=>ANIMATION_MS,
    "useSectionScroll",
    ()=>useSectionScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
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
function useSectionScroll({ ids, enabled }) {
    const count = ids.length;
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const indexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lockUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const updateHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((i)=>{
        window.history.replaceState(null, "", `#${ids[i]}`);
    }, [
        ids
    ]);
    /** Animated change (wheel, touch, keys, nav click). */ const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target)=>{
        const next = Math.max(0, Math.min(count - 1, target));
        if (next === indexRef.current) return;
        indexRef.current = next;
        setIndex(next);
        lockUntil.current = performance.now() + ANIMATION_MS;
        updateHash(next);
    }, [
        count,
        updateHash
    ]);
    /** Silent sync (mobile IntersectionObserver). No lock. */ const syncIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        if (next === indexRef.current) return;
        indexRef.current = next;
        setIndex(next);
        updateHash(next);
    }, [
        updateHash
    ]);
    // Read the hash on mount and on hashchange
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const readHash = ()=>{
            const i = ids.indexOf(window.location.hash.slice(1));
            if (i >= 0 && i !== indexRef.current) {
                indexRef.current = i;
                setIndex(i);
            }
        };
        readHash();
        window.addEventListener("hashchange", readHash);
        return ()=>window.removeEventListener("hashchange", readHash);
    }, [
        ids
    ]);
    // Wheel / touch / keyboard paging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled) return;
        const getActiveScroller = ()=>document.querySelector('[data-section-scroll][data-active="true"]');
        /* ---------- Wheel / trackpad ---------- */ let wheelAcc = 0;
        let lastWheelTime = 0;
        const onWheel = (e)=>{
            if (e.ctrlKey) return; // pinch zoom
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // horizontal gesture
            if (e.deltaY === 0) return;
            // Normalise line-based wheels (Firefox) to pixels
            const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
            const dir = delta > 0 ? 1 : -1;
            const now = performance.now();
            // Let tall sections scroll internally first
            if (canScrollInside(e.target, dir)) {
                lockUntil.current = Math.max(lockUntil.current, now + 200);
                wheelAcc = 0;
                return;
            }
            e.preventDefault();
            // During lock: swallow the event and extend the lock while inertia keeps coming
            if (now < lockUntil.current) {
                lockUntil.current = Math.max(lockUntil.current, now + INERTIA_GAP_MS);
                wheelAcc = 0;
                lastWheelTime = now;
                return;
            }
            // New gesture or direction change: restart the accumulator
            if (now - lastWheelTime > WHEEL_RESET_MS || Math.sign(wheelAcc) !== dir) {
                wheelAcc = 0;
            }
            lastWheelTime = now;
            wheelAcc += delta;
            if (Math.abs(wheelAcc) >= WHEEL_TRIGGER) {
                wheelAcc = 0;
                goTo(indexRef.current + dir);
            }
        };
        /* ---------- Touch ---------- */ let touchStartY = null;
        let edgeDown = true;
        let edgeUp = true;
        const onTouchStart = (e)=>{
            touchStartY = e.touches[0].clientY;
            // Remember whether the inner scroller was already at an edge when the touch began
            edgeDown = !canScrollInside(e.target, 1);
            edgeUp = !canScrollInside(e.target, -1);
        };
        const onTouchEnd = (e)=>{
            if (touchStartY === null) return;
            const dy = touchStartY - e.changedTouches[0].clientY;
            touchStartY = null;
            if (Math.abs(dy) < SWIPE_THRESHOLD) return;
            if (performance.now() < lockUntil.current) return;
            const dir = dy > 0 ? 1 : -1;
            if (dir === 1 && !edgeDown) return;
            if (dir === -1 && !edgeUp) return;
            goTo(indexRef.current + dir);
        };
        /* ---------- Keyboard ---------- */ const onKeyDown = (e)=>{
            const target = e.target;
            if (target.closest("input, textarea, select, [contenteditable='true']")) return;
            if (e.altKey || e.ctrlKey || e.metaKey) return;
            let dir = null;
            let jump = null;
            let step = 0; // px to scroll inside a tall section, -1 means "one page"
            switch(e.key){
                case "ArrowDown":
                    dir = 1;
                    step = 120;
                    break;
                case "ArrowUp":
                    dir = -1;
                    step = 120;
                    break;
                case "PageDown":
                    dir = 1;
                    step = -1;
                    break;
                case "PageUp":
                    dir = -1;
                    step = -1;
                    break;
                case " ":
                    if (target.closest("button, a")) return;
                    dir = e.shiftKey ? -1 : 1;
                    step = -1;
                    break;
                case "Home":
                    jump = 0;
                    break;
                case "End":
                    jump = count - 1;
                    break;
                default:
                    return;
            }
            e.preventDefault();
            if (performance.now() < lockUntil.current) return;
            if (jump !== null) {
                goTo(jump);
                return;
            }
            // Scroll inside a tall section first
            const scroller = getActiveScroller();
            if (dir && scroller && canScrollEl(scroller, dir)) {
                const amount = step === -1 ? scroller.clientHeight * 0.9 : step;
                scroller.scrollBy({
                    top: dir * amount,
                    behavior: "smooth"
                });
                return;
            }
            if (dir) goTo(indexRef.current + dir);
        };
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
    }, [
        enabled,
        count,
        goTo
    ]);
    return {
        index,
        goTo,
        syncIndex
    };
}
}),
"[project]/src/lib/sections.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SECTIONS",
    ()=>SECTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.mjs [app-ssr] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase-business.mjs [app-ssr] (ecmascript) <export default as BriefcaseBusiness>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.mjs [app-ssr] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/profile.ts [app-ssr] (ecmascript)");
;
;
const SECTIONS = [
    {
        id: "profile",
        label: "Profile",
        title: `Hello, I'm ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].name}`,
        subtitle: "A quick look at who I am.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"]
    },
    {
        id: "experience",
        label: "Experience",
        title: "Where I've worked",
        subtitle: "Professional roles and internships.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"]
    },
    {
        id: "skills",
        label: "Skills",
        title: "What I work with",
        subtitle: "Technologies, frameworks, and strengths.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
    },
    {
        id: "projects",
        label: "Projects",
        title: "Things I've built",
        subtitle: "Personal work, org projects, and achievements.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
    },
    {
        id: "resume",
        label: "Resume",
        title: "My resume",
        subtitle: "Download it or share the link.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        id: "chatbot",
        label: "Chatbot",
        title: "Ask me anything",
        subtitle: "A slightly sarcastic version of me.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
    }
];
}),
];})()

//# sourceMappingURL=src_1jiuou2jvt4a2._.js.map