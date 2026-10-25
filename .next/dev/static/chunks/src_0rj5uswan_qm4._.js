(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimatedBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
// One set of positions (in vw / vh) per section, in the same order as SECTIONS
const POSITIONS = [
    [
        {
            x: -10,
            y: -15
        },
        {
            x: 55,
            y: 45
        },
        {
            x: 15,
            y: 60
        }
    ],
    [
        {
            x: 40,
            y: -10
        },
        {
            x: -15,
            y: 40
        },
        {
            x: 60,
            y: 65
        }
    ],
    [
        {
            x: 10,
            y: 30
        },
        {
            x: 60,
            y: -10
        },
        {
            x: 35,
            y: 70
        }
    ],
    [
        {
            x: 55,
            y: 15
        },
        {
            x: 0,
            y: 60
        },
        {
            x: 30,
            y: -15
        }
    ],
    [
        {
            x: 20,
            y: -5
        },
        {
            x: 65,
            y: 55
        },
        {
            x: -10,
            y: 50
        }
    ],
    [
        {
            x: 50,
            y: 40
        },
        {
            x: 5,
            y: -10
        },
        {
            x: 40,
            y: 70
        }
    ]
];
const COLORS = [
    "var(--primary)",
    "var(--primary-2)",
    "var(--secondary)"
];
function AnimatedBackground(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "ade2fb2c915fea87542bf0630359bbe59f94053c4439f2bc9799bac0ebe68eba") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ade2fb2c915fea87542bf0630359bbe59f94053c4439f2bc9799bac0ebe68eba";
    }
    const { activeIndex } = t0;
    const positions = POSITIONS[activeIndex] ?? POSITIONS[0];
    let t1;
    if ($[1] !== positions) {
        t1 = positions.map(_AnimatedBackgroundPositionsMap);
        $[1] = positions;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-60",
            style: {
                backgroundImage: "linear-gradient(var(--card-border) 1px, transparent 1px), linear-gradient(90deg, var(--card-border) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnimatedBackground.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c = AnimatedBackground;
function _AnimatedBackgroundPositionsMap(p, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute top-0 left-0 size-[45vmax] rounded-full opacity-20 blur-3xl",
        style: {
            background: COLORS[i]
        },
        animate: {
            x: `${p.x}vw`,
            y: `${p.y}vh`
        },
        transition: {
            duration: 1.6,
            ease: "easeInOut"
        }
    }, i, false, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AnimatedBackground");
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
function PortfolioShell(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "95f2689f3af176a8ae8a07be8577f64c51c51b5390e4dd45b36993f163a51448") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95f2689f3af176a8ae8a07be8577f64c51c51b5390e4dd45b36993f163a51448";
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
    let t4;
    if ($[3] !== isMobile || $[4] !== syncIndex) {
        t3 = ({
            "PortfolioShell[useEffect()]": ()=>{
                if (!isMobile) {
                    return;
                }
                const root = scrollerRef.current;
                if (!root) {
                    return;
                }
                const hash = window.location.hash.slice(1);
                if (hash) {
                    document.getElementById(hash)?.scrollIntoView({
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
                    root,
                    threshold: 0.6
                });
                root.querySelectorAll("section[data-index]").forEach({
                    "PortfolioShell[useEffect() > (anonymous)()]": (el)=>observer.observe(el)
                }["PortfolioShell[useEffect() > (anonymous)()]"]);
                return ()=>observer.disconnect();
            }
        })["PortfolioShell[useEffect()]"];
        t4 = [
            isMobile,
            syncIndex
        ];
        $[3] = isMobile;
        $[4] = syncIndex;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] !== goTo || $[8] !== isMobile) {
        t5 = ({
            "PortfolioShell[handleSelect]": (i)=>{
                if (isMobile) {
                    document.getElementById(IDS[i])?.scrollIntoView({
                        behavior: "smooth"
                    });
                } else {
                    goTo(i);
                }
            }
        })["PortfolioShell[handleSelect]"];
        $[7] = goTo;
        $[8] = isMobile;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleSelect = t5;
    let t6;
    if ($[10] !== index) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeIndex: index
        }, void 0, false, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[10] = index;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== handleSelect || $[13] !== index) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeIndex: index,
            onSelect: handleSelect
        }, void 0, false, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[12] = handleSelect;
        $[13] = index;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = `h-full overscroll-none ${isMobile ? "snap-y snap-mandatory overflow-y-auto" : "overflow-hidden"}`;
    let t9;
    if ($[15] !== index || $[16] !== isMobile) {
        t9 = isMobile ? undefined : {
            transform: `translate3d(0, -${index * 100}dvh, 0)`,
            transition: `transform ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_MS"]}ms cubic-bezier(0.76, 0, 0.24, 1)`
        };
        $[15] = index;
        $[16] = isMobile;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== content || $[19] !== index || $[20] !== isMobile) {
        t10 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].map({
            "PortfolioShell[SECTIONS.map()]": (section, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: section.id,
                    index: i_0,
                    label: section.label,
                    title: section.title,
                    subtitle: section.subtitle,
                    active: i_0 === index,
                    inert: !isMobile && i_0 !== index,
                    children: content[section.id]
                }, section.id, false, {
                    fileName: "[project]/src/components/PortfolioShell.tsx",
                    lineNumber: 144,
                    columnNumber: 59
                }, this)
        }["PortfolioShell[SECTIONS.map()]"]);
        $[18] = content;
        $[19] = index;
        $[20] = isMobile;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "will-change-transform",
            style: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t9;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11 || $[26] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollerRef,
            className: t8,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t8;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t12 || $[29] !== t6 || $[30] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative isolate h-dvh w-full overflow-hidden",
            children: [
                t6,
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PortfolioShell.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t6;
        $[30] = t7;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    return t13;
}
_s(PortfolioShell, "K+drQvLHryxVEt1TbW0aSycEYkk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSectionScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionScroll"]
    ];
});
_c2 = PortfolioShell;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "IDS$SECTIONS.map");
__turbopack_context__.k.register(_c1, "IDS");
__turbopack_context__.k.register(_c2, "PortfolioShell");
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
function SectionWrapper(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "c6a9995118a51fbf6e22df084235ae2143bd28c9f712862f40209456b07d73fd") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c6a9995118a51fbf6e22df084235ae2143bd28c9f712862f40209456b07d73fd";
    }
    const { id, index, label, title, subtitle, active, inert, children } = t0;
    const t1 = active ? "show" : "hide";
    const t2 = String(index + 1);
    let t3;
    if ($[1] !== t2) {
        t3 = t2.padStart(2, "0");
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== label || $[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 font-display text-sm tracking-[0.3em] text-primary uppercase",
            children: [
                t3,
                " / ",
                label
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-display text-4xl font-bold text-gradient sm:text-5xl md:text-6xl",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[6] = title;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== subtitle) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 max-w-xl text-muted",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[8] = subtitle;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4 || $[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            variants: item,
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== children) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: item,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[14] = children;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t1 || $[17] !== t7 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: container,
            initial: "hide",
            animate: t1,
            className: "mx-auto flex min-h-full max-w-6xl flex-col justify-center gap-8",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[16] = t1;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== active || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-section-scroll": true,
            "data-active": active,
            className: "no-scrollbar h-full overflow-y-auto pt-12 pr-16 pb-10 pl-5 sm:pl-8 sm:pr-20 md:pt-16 md:pr-28 md:pl-16 lg:pr-32 lg:pl-24",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[20] = active;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== id || $[24] !== index || $[25] !== inert || $[26] !== label || $[27] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: id,
            "aria-label": label,
            "data-index": index,
            inert: inert,
            className: "relative h-dvh w-full shrink-0 snap-start",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/SectionWrapper.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[23] = id;
        $[24] = index;
        $[25] = inert;
        $[26] = label;
        $[27] = t10;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    return t11;
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
"use client";
;
;
;
;
function SideNav(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "77c5bd1c46e3f0811853df1f81a603488475d8b0e9b38bab68a4eca4f14d44cf") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77c5bd1c46e3f0811853df1f81a603488475d8b0e9b38bab68a4eca4f14d44cf";
    }
    const { activeIndex, onSelect } = t0;
    const progress = activeIndex / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].length - 1);
    let t1;
    if ($[1] !== progress) {
        t1 = {
            scaleY: progress
        };
        $[1] = progress;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            duration: 0.8,
            ease: [
                0.76,
                0,
                0.24,
                1
            ]
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-card-border md:inset-y-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "h-full w-full origin-top bg-linear-to-b from-primary to-secondary",
                animate: t1,
                transition: t2
            }, void 0, false, {
                fileName: "[project]/src/components/SideNav.tsx",
                lineNumber: 45,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideNav.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== activeIndex || $[7] !== onSelect) {
        t4 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTIONS"].map({
            "SideNav[SECTIONS.map()]": (section, i)=>{
                const Icon = section.icon;
                const active = i === activeIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "SideNav[SECTIONS.map() > <button>.onClick]": ()=>onSelect(i)
                    }["SideNav[SECTIONS.map() > <button>.onClick]"],
                    "aria-label": `Go to ${section.label}`,
                    "aria-current": active ? "true" : undefined,
                    className: `group relative flex size-8 items-center justify-center rounded-full border transition-colors md:size-10 ${active ? "border-transparent text-white" : "border-card-border bg-background text-muted hover:text-foreground"}`,
                    children: [
                        active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            layoutId: "nav-active-pill",
                            className: "absolute inset-0 rounded-full bg-linear-to-br from-primary to-primary-2 shadow-[0_0_24px_var(--primary)]",
                            transition: {
                                type: "spring",
                                stiffness: 380,
                                damping: 30
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideNav.tsx",
                            lineNumber: 59,
                            columnNumber: 382
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "hidden size-4 md:block"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SideNav.tsx",
                                    lineNumber: 63,
                                    columnNumber: 49
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block size-1.5 rounded-full bg-current md:hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SideNav.tsx",
                                    lineNumber: 63,
                                    columnNumber: 92
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SideNav.tsx",
                            lineNumber: 63,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "glass pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap text-foreground opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block",
                            children: section.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideNav.tsx",
                            lineNumber: 63,
                            columnNumber: 168
                        }, this)
                    ]
                }, section.id, true, {
                    fileName: "[project]/src/components/SideNav.tsx",
                    lineNumber: 57,
                    columnNumber: 16
                }, this);
            }
        }["SideNav[SECTIONS.map()]"]);
        $[6] = activeIndex;
        $[7] = onSelect;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Section navigation",
            className: "fixed top-0 right-2 z-50 flex h-dvh py-20 md:right-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center justify-between",
                children: [
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideNav.tsx",
                lineNumber: 74,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SideNav.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_c = SideNav;
var _c;
__turbopack_context__.k.register(_c, "SideNav");
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
const INERTIA_GAP_MS = 150;
const SWIPE_THRESHOLD = 50;
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
    if ($[0] !== "2da75fd9b21eb968a3e41ef31fcd636bfb2b50bb59ab94582cb382e162a25fc6") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2da75fd9b21eb968a3e41ef31fcd636bfb2b50bb59ab94582cb382e162a25fc6";
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
                const onWheel = {
                    "useSectionScroll[useEffect() > onWheel]": (e)=>{
                        if (e.ctrlKey) {
                            return;
                        }
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                            return;
                        }
                        const dir = e.deltaY > 0 ? 1 : -1;
                        const now = performance.now();
                        if (canScrollInside(e.target, dir)) {
                            lockUntil.current = Math.max(lockUntil.current, now + 200);
                            return;
                        }
                        e.preventDefault();
                        if (now < lockUntil.current) {
                            lockUntil.current = Math.max(lockUntil.current, now + INERTIA_GAP_MS);
                            return;
                        }
                        if (Math.abs(e.deltaY) < 4) {
                            return;
                        }
                        goTo(indexRef.current + dir);
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
                        bb91: switch(e_2.key){
                            case "ArrowDown":
                                {
                                    dir_1 = 1;
                                    step = 120;
                                    break bb91;
                                }
                            case "ArrowUp":
                                {
                                    dir_1 = -1;
                                    step = 120;
                                    break bb91;
                                }
                            case "PageDown":
                                {
                                    dir_1 = 1;
                                    step = -1;
                                    break bb91;
                                }
                            case "PageUp":
                                {
                                    dir_1 = -1;
                                    step = -1;
                                    break bb91;
                                }
                            case " ":
                                {
                                    if (target_0.closest("button, a")) {
                                        return;
                                    }
                                    dir_1 = e_2.shiftKey ? -1 : 1;
                                    step = -1;
                                    break bb91;
                                }
                            case "Home":
                                {
                                    jump = 0;
                                    break bb91;
                                }
                            case "End":
                                {
                                    jump = count - 1;
                                    break bb91;
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
;
const SECTIONS = [
    {
        id: "profile",
        label: "Profile",
        title: "Hello, I'm Your Name",
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
]);})()

//# sourceMappingURL=src_0rj5uswan_qm4._.js.map