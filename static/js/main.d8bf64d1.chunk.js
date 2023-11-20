(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
    [0], {
        33: function(e, t, s) {},
        39: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(2),
                r = s.n(a),
                i = s(14),
                o = s(10),
                c = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "TOGGLE-DEV-MODE":
                            var s = !e;
                            return s;
                        default:
                            return e
                    }
                },
                n = s(12),
                l = [],
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "TOGGLE-FILTER":
                            var s = Object(n.a)(e),
                                a = t.payload,
                                r = a.value,
                                i = a.checked;
                            return i ? s.push(r) : s = s.filter((function(e) {
                                return e !== r
                            })), s;
                        case "RESET-FILTERS":
                            return l;
                        default:
                            return e
                    }
                },
                p = Object(o.b)({
                    devMode: c,
                    activeFilters: d
                }),
                g = s(4),
                j = (s(33), s(7)),
                m = s(16),
                u = s(1),
                h = s(5),
                b = s(6),
                f = s(0),
                y = function() {
                    var e = Object(a.useRef)(),
                        t = Object(a.useRef)(),
                        s = Object(g.c)((function(e) {
                            return e.devMode
                        })),
                        r = Object(a.useState)(!1),
                        i = Object(j.a)(r, 2),
                        o = i[0],
                        c = i[1];
                    Object(a.useEffect)((function() {
                        var s = m.a.utils.selector(e);
                        t.current = new u.c({
                            paused: !0
                        }).to(s(".btn:not(:first-child)"), {
                            opacity: 1,
                            duration: 0
                        }).to(s(".btn:not(:first-child)"), {
                            y: function(e) {
                                return "".concat(4.5 * (e + 1), "rem")
                            },
                            stagger: {
                                amount: .5
                            },
                            ease: "elastic.easeOut",
                            duration: 0
                        })
                    }), []);
                    return Object(f.jsxs)("nav", {
                        className: "menu ".concat(o ? "open" : ""),
                        ref: e,
                        children: [Object(f.jsx)("input", {
                            type: "checkbox",
                            id: "menu-checkbox",
                            className: "hide",
                            onChange: function(e) {
                                var s = e.currentTarget.checked;
                                s ? t.current.play() : t.current.reverse(), s ? setTimeout((function() {
                                    c(s)
                                }), 1e3) : c(s)
                            }
                        }), Object(f.jsxs)("label", {
                            htmlFor: "menu-checkbox",
                            className: "toggle-menu ".concat(s ? "dev" : "des"),
                            children: [Object(f.jsxs)("div", {
                                className: "btn",
                                role: "button",
                                title: "menu",
                                children: [Object(f.jsx)(h.a, {
                                    icon: b.a,
                                    className: "menu-icon"
                                }), Object(f.jsx)(h.a, {
                                    icon: b.j,
                                    className: "close-icon"
                                })]
                            }), Object(f.jsx)("div", {
                                className: "btn home-btn",
                                role: "button",
                                title: "home",
                                onClick: function() {
                                    window.location.href = "#home"
                                },
                                "data-tooltip": "Home",
                                children: Object(f.jsx)(h.a, {
                                    icon: b.f
                                })
                            }), Object(f.jsx)("div", {
                                className: "btn about-btn",
                                role: "button",
                                title: "about",
                                onClick: function() {
                                    window.location.href = "#about"
                                },
                                "data-tooltip": "About",
                                children: Object(f.jsx)(h.a, {
                                    icon: b.k
                                })
                            }), Object(f.jsx)("div", {
                                className: "btn projects-btn",
                                role: "button",
                                title: "projects",
                                onClick: function() {
                                    window.location.href = "#projects"
                                },
                                "data-tooltip": "Projects",
                                children: Object(f.jsx)(h.a, {
                                    icon: b.g
                                })
                            }), Object(f.jsx)("div", {
                                className: "btn resume-btn",
                                title: "download resume",
                                onClick: function() {
                                    var e = document.createElement("a");
                                    e.setAttribute("href", "/kkara9009/assets/resume/kkara9009.pdf"), e.setAttribute("download", "kkara9009-resume.pdf"), e.click()
                                },
                                "data-tooltip": "Download Resume",
                                children: Object(f.jsx)(h.a, {
                                    icon: b.e
                                })
                            }), Object(f.jsx)("div", {
                                className: "btn contact-btn",
                                role: "button",
                                title: "contact",
                                onClick: function() {
                                    window.location.href = "#contact"
                                },
                                "data-tooltip": "Contact",
                                children: Object(f.jsx)(h.a, {
                                    icon: b.c
                                })
                            })]
                        })]
                    })
                },
                O = function() {
                    var e = Object(g.b)(),
                        t = Object(g.c)((function(e) {
                            return e.devMode
                        }));
                    return Object(f.jsxs)("div", {
                        role: "button",
                        title: "toggle between developer and designer portfolio's",
                        className: "toggle-bar-container",
                        children: [Object(f.jsx)("input", {
                            type: "checkbox",
                            id: "toggle-checkbox",
                            className: "hide",
                            value: t,
                            onChange: function() {
                                document.body.classList.toggle("designMode"), e({
                                    type: "RESET-FILTERS"
                                }), e({
                                    type: "TOGGLE-DEV-MODE"
                                })
                            }
                        }), Object(f.jsxs)("label", {
                            htmlFor: "toggle-checkbox",
                            className: "toggle-bar",
                            children: [Object(f.jsx)(h.a, {
                                icon: b.b
                            }), Object(f.jsx)(h.a, {
                                icon: b.h
                            }), Object(f.jsx)("div", {
                                className: "ball"
                            })]
                        })]
                    })
                },
                w = function() {
                    var e = Object(g.c)((function(e) {
                            return e.devMode
                        })),
                        t = {
                            x: -1,
                            y: -1
                        },
                        s = {
                            x: -1,
                            y: -1
                        },
                        r = {
                            x: 0,
                            y: 0
                        },
                        i = {},
                        o = Object(a.useRef)(),
                        c = Object(a.useRef)(),
                        n = Object(a.useRef)();
                    return Object(f.jsxs)("div", {
                        className: e ? "flesh-bg home-scene-container" : "hide",
                        onMouseMove: function(e) {
                            i = o.current.getBoundingClientRect(), t.x = e.pageX, t.y = e.pageY, s.x = t.x - 75, s.y = t.y - i.y - 75, o.current.style.MaskPositionX = s.x + "px", o.current.style.webkitMaskPositionX = s.x + "px", o.current.style.MaskPositionY = s.y + "px", o.current.style.webkitMaskPositionY = s.y + "px", r.x = 100 * t.x / window.innerWidth, r.y = 100 * t.y / window.innerHeight, c.current.style.left = r.x / 2 + "%", c.current.style.top = r.y / 2 + "%", c.current.style.transform = "translate(".concat(r.x, "%, ").concat(r.y, "%)"), n.current.style.left = r.x / 2 + "%", n.current.style.top = r.y / 2 + "%", n.current.style.transform = "translate(".concat(r.x, "%, ").concat(r.y, "%)")
                        },
                        children: [Object(f.jsxs)("div", {
                            className: "eyes",
                            children: [Object(f.jsx)("div", {
                                className: "eye left",
                                children: Object(f.jsx)("div", {
                                    ref: c,
                                    className: "pupil left"
                                })
                            }), Object(f.jsx)("div", {
                                className: "eye right",
                                children: Object(f.jsx)("div", {
                                    ref: n,
                                    className: "pupil right"
                                })
                            })]
                        }), Object(f.jsxs)("picture", {
                            children: [Object(f.jsx)("source", {
                                type: "image/webp",
                                srcSet: "/kkara9009/assets/images/home/dev/bone.webp"
                            }), Object(f.jsx)("source", {
                                type: "image/png",
                                srcSet: "/kkara9009/assets/images/home/dev/bone.png"
                            }), Object(f.jsx)("img", {
                                ref: o,
                                src: "/kkara9009/assets/images/home/dev/bone.png",
                                alt: "x-ray background",
                                className: "bone-bg",
                                width: "1600",
                                height: "900"
                            })]
                        })]
                    })
                },
                v = s(23),
                x = s.n(v),
                k = function() {
                    var e = Object(g.c)((function(e) {
                            return e.devMode
                        })),
                        t = Object(a.useRef)();
                    return Object(a.useEffect)((function() {
                        var e = new x.a(t.current, {
                            relativeInput: !0,
                            hoverOnly: !0
                        });
                        return e.enable(),
                            function() {
                                return e.disable()
                            }
                    }), []), Object(f.jsx)("div", {
                        className: e ? "hide" : "parallax-container home-scene-container",
                        children: Object(f.jsxs)("ul", {
                            ref: t,
                            id: "scene",
                            children: [Object(f.jsx)("li", {
                                className: "layer tower",
                                "data-depth": "0.2",
                                children: Object(f.jsxs)("picture", {
                                    children: [Object(f.jsx)("source", {
                                        type: "image/webp",
                                        srcSet: "/kkara9009/assets/images/home/design/2waterTower.webp"
                                    }), Object(f.jsx)("source", {
                                        type: "image/png",
                                        srcSet: "/kkara9009/assets/images/home/design/2waterTower.png"
                                    }), Object(f.jsx)("img", {
                                        width: "1600",
                                        height: "900",
                                        loading: "lazy",
                                        src: "/kkara9009/assets/images/home/design/2waterTower.png",
                                        alt: "background tower"
                                    })]
                                })
                            }), Object(f.jsx)("li", {
                                className: "layer trees",
                                "data-depth": "0.3",
                                children: Object(f.jsxs)("picture", {
                                    children: [Object(f.jsx)("source", {
                                        type: "image/webp",
                                        srcSet: "/kkara9009/assets/images/home/design/3treesMidground.webp"
                                    }), Object(f.jsx)("source", {
                                        type: "image/png",
                                        srcSet: "/kkara9009/assets/images/home/design/3treesMidground.png"
                                    }), Object(f.jsx)("img", {
                                        width: "1600",
                                        height: "900",
                                        loading: "lazy",
                                        src: "/kkara9009/assets/images/home/design/3treesMidground.png",
                                        alt: "background trees"
                                    })]
                                })
                            }), Object(f.jsx)("li", {
                                className: "layer shack",
                                "data-depth": "0.4",
                                children: Object(f.jsxs)("picture", {
                                    children: [Object(f.jsx)("source", {
                                        type: "image/webp",
                                        srcSet: "/kkara9009/assets/images/home/design/4mysteryShack.webp"
                                    }), Object(f.jsx)("source", {
                                        type: "image/png",
                                        srcSet: "/kkara9009/assets/images/home/design/4mysteryShack.png"
                                    }), Object(f.jsx)("img", {
                                        width: "1600",
                                        height: "900",
                                        loading: "lazy",
                                        src: "/kkara9009/assets/images/home/design/4mysteryShack.png",
                                        alt: "mystery shack"
                                    })]
                                })
                            }), Object(f.jsx)("li", {
                                className: "layer floating-characters",
                                "data-depth": "1",
                                children: Object(f.jsxs)("picture", {
                                    children: [Object(f.jsx)("source", {
                                        type: "image/webp",
                                        srcSet: "/kkara9009/assets/images/home/design/5floatingCharacters.webp"
                                    }), Object(f.jsx)("source", {
                                        type: "image/png",
                                        srcSet: "/kkara9009/assets/images/home/design/5floatingCharacters.png"
                                    }), Object(f.jsx)("img", {
                                        width: "1600",
                                        height: "900",
                                        loading: "lazy",
                                        src: "/kkara9009/assets/images/home/design/5floatingCharacters.png",
                                        alt: "floating characters"
                                    })]
                                })
                            }), Object(f.jsx)("li", {
                                className: "layer ground-characters",
                                "data-depth": "0.5",
                                children: Object(f.jsxs)("picture", {
                                    children: [Object(f.jsx)("source", {
                                        type: "image/webp",
                                        srcSet: "/kkara9009/assets/images/home/design/5groundCharacters.webp"
                                    }), Object(f.jsx)("source", {
                                        type: "image/png",
                                        srcSet: "/kkara9009/assets/images/home/design/5groundCharacters.png"
                                    }), Object(f.jsx)("img", {
                                        width: "1600",
                                        height: "900",
                                        loading: "lazy",
                                        src: "/kkara9009/assets/images/home/design/5groundCharacters.png",
                                        alt: "ground characters"
                                    })]
                                })
                            }), Object(f.jsx)("li", {
                                className: "layer foreground-trees",
                                "data-depth": "0",
                                children: Object(f.jsxs)("picture", {
                                    children: [Object(f.jsx)("source", {
                                        type: "image/webp",
                                        srcSet: "/kkara9009/assets/images/home/design/7treesForeground.webp"
                                    }), Object(f.jsx)("source", {
                                        type: "image/png",
                                        srcSet: "/kkara9009/assets/images/home/design/7treesForeground.png"
                                    }), Object(f.jsx)("img", {
                                        width: "1600",
                                        height: "900",
                                        loading: "lazy",
                                        src: "/kkara9009/assets/images/home/design/7treesForeground.png",
                                        alt: "foreground trees"
                                    })]
                                })
                            })]
                        })
                    })
                },
                P = function() {
                    return Object(f.jsxs)("header", {
                        className: "home page",
                        id: "home",
                        children: [Object(f.jsx)(w, {}), Object(f.jsx)(k, {})]
                    })
                },
                N = {
                    description: "Hello! I'm Karan, a full-stack developer in India who enjoys building engaging things with code. I develop exceptional websites and web apps that provide awe-inducing, pixel-perfect user experiences with clean, efficient, and scalable code.\n\n    Shortly after completing a full-stack course , I joined the development team at Telegram as a front-end DEV where I work on a wide variety of interesting and meaningful projects on a daily basis.\n    \n    Here are a few technologies I've been working with recently:",
                    tools: ["JavaScript (ES6+)", "React", "Node.js", "HTML & (S)CSS", "Vue", "Python", "GSAP"],
                    image: "/assets/images/about/devAvatar.png",
                    webpImage: "/assets/images/about/devAvatar.webp",
                    caption: 'Depiction of Karan  "K-9009" cooking up a master plan'
                },
                S = {
                    description: "My name is Karan Raj, (feel free to call me Karan, as many people struggle to pronounce the name). I'm an app developer on Welegram and Whatsapp platforms currently residing in The Hague.\n\n    Coming from a creative background taught me to carefully consider my audience and what experience I intend for them to have through my work. The projects I'm most passionate to work on are those where I get the opportunity to tell a story through UI effects, animations, and creating a dynamic user experience.\n    \n    Here are a few technologies I've been working with recently:",
                    tools: ["Krita", "Adobe Illustrator", "Davinci Resolve", "Hitfilm Express", "Adobe After Effects", "Adobe Premier"],
                    image: "/assets/images/about/designAvatar.png",
                    webpImage: "/assets/images/about/designAvatar.webp",
                    caption: "Depiction of Karan  when in the vicinity of sushi. (you have been warned)"
                },
                I = function() {
                    var e = Object(g.c)((function(e) {
                            return e.devMode
                        })),
                        t = Object(a.useState)({
                            description: "",
                            tools: [],
                            image: "",
                            webpImage: "",
                            caption: ""
                        }),
                        s = Object(j.a)(t, 2),
                        r = s[0],
                        i = s[1];
                    Object(a.useEffect)((function() {
                        i(e ? N : S)
                    }), [e]);
                    var o = r.description,
                        c = r.tools,
                        n = r.image,
                        l = r.webpImage,
                        d = r.caption;
                    return Object(f.jsxs)("section", {
                        className: "about page ".concat(e ? "dev" : "des"),
                        id: "about",
                        children: [Object(f.jsx)("h2", {
                            children: "About Me"
                        }), Object(f.jsxs)("div", {
                            className: "about-content",
                            children: [Object(f.jsxs)("figure", {
                                className: "about-image-container",
                                children: [Object(f.jsxs)("picture", {
                                    children: [Object(f.jsx)("source", {
                                        type: "image/webp",
                                        srcSet: "/kkara9009" + l
                                    }), Object(f.jsx)("source", {
                                        type: "image/png",
                                        srcSet: "/kkara9009" + n
                                    }), Object(f.jsx)("img", {
                                        loading: "lazy",
                                        className: "avatar",
                                        src: "/kkara9009" + n,
                                        alt: "Avatar of Nneka",
                                        width: "300",
                                        height: "300"
                                    })]
                                }), Object(f.jsx)("figcaption", {
                                    className: "about-caption",
                                    children: d
                                })]
                            }), Object(f.jsxs)("article", {
                                className: "about-text-container",
                                children: [Object(f.jsx)("p", {
                                    className: "about-text",
                                    children: o
                                }), Object(f.jsx)("ul", {
                                    className: "about-tools",
                                    children: c.map((function(e) {
                                        return Object(f.jsx)("li", {
                                            className: "label",
                                            children: e
                                        }, e)
                                    }))
                                })]
                            })]
                        })]
                    })
                },
                M = function(e) {
                    var t = e.className,
                        s = e.onClick,
                        r = e.title,
                        i = e.children,
                        o = Object(a.useRef)(),
                        c = Object(a.useRef)();
                    Object(a.useEffect)((function() {
                        c.current = new u.c({
                            paused: !0,
                            defaults: {
                                duration: 0,
                                ease: "power0.easeNone"
                            }
                        })
                    }), []);
                    return Object(f.jsxs)("div", {
                        className: "dev-button ".concat(t || ""),
                        onClick: s,
                        title: r,
                        role: "button",
                        onMouseEnter: function(e) {
                            var t = e.target.getBoundingClientRect(),
                                s = e.pageX - t.x,
                                a = e.pageY - t.y;
                            c.current.to(o.current, {
                                left: s,
                                top: a,
                                width: 2 * t.width,
                                height: 2 * t.width
                            }).play()
                        },
                        onMouseLeave: function(e) {
                            var t = e.target.getBoundingClientRect(),
                                s = e.pageX - t.x,
                                a = e.pageY - t.y;
                            c.current.to(o.current, {
                                left: s,
                                top: a,
                                width: 0,
                                height: 0
                            }).play()
                        },
                        children: [Object(f.jsx)("span", {
                            className: "circle",
                            ref: o
                        }), i]
                    })
                },
                E = function(e) {
                    var t = e.filters,
                        s = Object(g.b)(),
                        a = Object(g.c)((function(e) {
                            return e.activeFilters
                        })),
                        r = Object(g.c)((function(e) {
                            return e.devMode
                        }));
                    return Object(f.jsx)("ul", {
                        className: "filter-menu ".concat(r ? "dev" : "des"),
                        children: t.map((function(e) {
                            return Object(f.jsxs)("li", {
                                children: [Object(f.jsx)("input", {
                                    type: "checkbox",
                                    name: "filter",
                                    className: "hide",
                                    title: e,
                                    checked: a.includes(e),
                                    onChange: function(e) {
                                        return s(function(e) {
                                            return {
                                                type: "TOGGLE-FILTER",
                                                payload: e
                                            }
                                        }(e.target))
                                    },
                                    id: e,
                                    value: e
                                }), r ? Object(f.jsx)(M, {
                                    className: "label",
                                    title: e,
                                    children: Object(f.jsx)("label", {
                                        htmlFor: e,
                                        children: e
                                    })
                                }) : Object(f.jsx)("label", {
                                    className: "label",
                                    htmlFor: e,
                                    children: e
                                })]
                            }, e)
                        }))
                    })
                },
                T = s(24),
                U = s(17),
                C = s(8),
                H = function(e) {
                    var t = e.project,
                        s = t.title,
                        r = t.githubUrl,
                        i = t.videoDemoUrl,
                        o = t.demoUrl,
                        c = t.shortDescription,
                        n = t.longDescription,
                        l = t.tools,
                        d = t.image,
                        p = t.webpImage;
                    m.a.registerPlugin(U.a);
                    var g = Object(a.useRef)(),
                        u = Object(a.useRef)(),
                        y = Object(a.useState)(!0),
                        O = Object(j.a)(y, 2),
                        w = O[0],
                        v = O[1],
                        x = Object(a.useState)(!0),
                        k = Object(j.a)(x, 2),
                        P = k[0],
                        N = k[1],
                        S = "".concat(s.charAt(0).toLowerCase()).concat(s.slice(1).replace(/\s/g, ""));
                    return Object(a.useEffect)((function() {
                        var e = function() {
                            if (g.current) {
                                var e = g.current.classList.contains("clamp");
                                e || g.current.classList.add("clamp"), g.current.style.setProperty("--maxlines", 0);
                                var t = (s = g.current).clientHeight !== s.scrollHeight;
                                N(t), e || g.current.classList.remove("clamp"), t && g.current.style.setProperty("--maxlines", function(e) {
                                    var t = e.clientHeight;
                                    return Math.floor(t / 17.6)
                                }(g.current))
                            }
                            var s
                        };
                        e();
                        var t = Object(T.debounce)(e, 50);
                        return window.addEventListener("resize", t),
                            function() {
                                window.removeEventListener("resize", t)
                            }
                    }), [g]), Object(f.jsx)("article", {
                        className: "project-card dev",
                        ref: u,
                        children: Object(f.jsxs)("div", {
                            className: "card-content dev",
                            children: [Object(f.jsxs)("div", {
                                className: "card-front",
                                children: [Object(f.jsxs)("picture", {
                                    children: [Object(f.jsx)("source", {
                                        type: "image/webp",
                                        srcSet: "/kkara9009" + p
                                    }), Object(f.jsx)("source", {
                                        type: "image/jpeg",
                                        srcSet: "/kkara9009" + d
                                    }), Object(f.jsx)("img", {
                                        width: "1600",
                                        height: "900",
                                        loading: "lazy",
                                        src: "/kkara9009" + d,
                                        alt: "project preview"
                                    })]
                                }), Object(f.jsxs)("div", {
                                    className: "front-titles",
                                    children: [Object(f.jsx)("h3", {
                                        className: "card-title dev",
                                        children: s
                                    }), Object(f.jsx)("p", {
                                        className: "card-subtitle dev",
                                        children: c
                                    })]
                                })]
                            }), Object(f.jsxs)("div", {
                                className: "card-back",
                                children: [Object(f.jsxs)("div", {
                                    className: "card-description-container",
                                    children: [Object(f.jsx)("p", {
                                        className: "card-description ".concat(w ? "clamp" : ""),
                                        ref: g,
                                        children: n
                                    }), P && Object(f.jsxs)(f.Fragment, {
                                        children: [Object(f.jsx)("input", {
                                            type: "checkbox",
                                            name: "readMore",
                                            className: "hide",
                                            title: "read more",
                                            checked: !w,
                                            onChange: function() {
                                                var e = U.a.getState(".projects.dev .projects-container, .projects.dev .project-card");
                                                u.current.classList.toggle("open"), v(!w), U.a.from(e, {
                                                    nested: !0,
                                                    prune: !0
                                                })
                                            },
                                            id: S,
                                            value: S
                                        }), Object(f.jsxs)("label", {
                                            className: "card-description-btn read-more",
                                            htmlFor: S,
                                            children: ["Read ", w ? "more" : "less"]
                                        })]
                                    })]
                                }), Object(f.jsx)("ul", {
                                    className: "card-tools",
                                    children: l && l.map((function(e) {
                                        return Object(f.jsx)("li", {
                                            className: "card-tool",
                                            children: e
                                        }, e)
                                    }))
                                }), Object(f.jsxs)("div", {
                                    className: "card-links",
                                    children: [(o || i) && Object(f.jsx)(M, {
                                        className: "demo-link social-btn-container",
                                        title: "view ".concat(o ? "live" : "video", " demo of ").concat(s),
                                        children: Object(f.jsxs)("a", {
                                            className: "social-btn",
                                            href: o || i,
                                            target: "_blank",
                                            title: "view ".concat(o ? "live" : "video", " demo of ").concat(s),
                                            rel: "noreferrer noopener",
                                            children: [Object(f.jsx)(h.a, {
                                                icon: b.i
                                            }), Object(f.jsxs)("span", {
                                                className: "btn-text",
                                                children: [o ? "live" : "video", " demo"]
                                            })]
                                        })
                                    }), Object(f.jsx)(M, {
                                        className: "github-link social-btn-container",
                                        title: "view ".concat(s, "'s code on Github"),
                                        children: Object(f.jsxs)("a", {
                                            className: "social-btn",
                                            href: r,
                                            target: "_blank",
                                            title: "view ".concat(s, "'s code on Github"),
                                            rel: "noreferrer noopener",
                                            children: [Object(f.jsx)(h.a, {
                                                icon: C.b
                                            }), Object(f.jsx)("span", {
                                                className: "btn-text",
                                                children: "Source code"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                },
                A = function(e) {
                    var t = e.project,
                        s = t.title,
                        r = t.description,
                        i = t.galleryUrl,
                        o = t.galleryImgUrl,
                        c = t.image,
                        n = t.webpImage,
                        l = Object(a.useRef)(),
                        d = Object(a.useRef)(),
                        p = Object(a.useRef)();
                    return Object(f.jsxs)("article", {
                        className: "card-hover-area",
                        ref: l,
                        onMouseMove: function(e) {
                            var t = l.current.getBoundingClientRect(),
                                s = -(t.x + t.width / 2 - e.pageX) / 5,
                                a = (t.y + t.height / 2 - e.pageY) / 5;
                            d.current.style.transform = "rotateY(".concat(s, "deg) rotateX(").concat(a, "deg)")
                        },
                        onMouseEnter: function() {
                            p.current.style.transform = "translateZ(6rem)", p.current.style.opacity = "1"
                        },
                        onMouseLeave: function() {
                            d.current.style.transform = "rotateY(0deg) rotateX(0deg)", p.current.style.transform = "translateZ(0px)", p.current.style.opacity = "0"
                        },
                        children: [Object(f.jsxs)("div", {
                            ref: d,
                            className: "project-card",
                            children: [Object(f.jsxs)("picture", {
                                children: [Object(f.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: "/kkara9009" + n
                                }), Object(f.jsx)("source", {
                                    type: "image/jpeg",
                                    srcSet: "/kkara9009" + c
                                }), Object(f.jsx)("img", {
                                    width: "100",
                                    height: "100",
                                    loading: "lazy",
                                    src: "/kkara9009" + c,
                                    alt: "project preview"
                                })]
                            }), Object(f.jsxs)("div", {
                                ref: p,
                                className: "card-content",
                                children: [Object(f.jsx)("h3", {
                                    className: "card-title",
                                    children: s
                                }), Object(f.jsx)("p", {
                                    className: "card-subtitle",
                                    children: r
                                })]
                            })]
                        }), Object(f.jsxs)("a", {
                            className: "flickr-link social-btn",
                            href: i || o,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            title: "View ".concat(s, " ").concat(i ? "Gallery" : "Image"),
                            children: [Object(f.jsx)(h.a, {
                                icon: C.a
                            }), Object(f.jsxs)("span", {
                                className: "btn-text",
                                children: ["View ", i ? "Gallery" : "Image"]
                            })]
                        })]
                    })
                },
                D = [{
                    title: "XDroid",
                    githubUrl: "https://github.com/AellyOfficial/AellyXDroid",
                    demoUrl: "https://t.me/anu_music00bo",
                    shortDescription: "It is an advance telegram group management bot.",
                    longDescription: "It is an advance telegram group management bot. Using python3 for mangent and it can deploy over many platforms and it is very easy to handle on telegram for best use.",
                    tools: ["Python"],
                    image: "/assets/images/projects/devProjects/XDroid.jpg",
                    webpImage: "/assets/images/projects/devProjects/XDroid.webp",
                    key: 0
                }, {
                    title: "AellyX",
                    githubUrl: "https://github.com/anonAELLY/AellyX",
                    demoUrl: "",
                    shortDescription: "AellyX is a powerful DDoS toolkit for penetration tests, including attacks for several protocols written in python(3.8)",
                    longDescription: "AellyX is a powerful DDoS toolkit for penetration tests, including attacks for several protocols written in python(3.8).Takedown WiFi access points, devices in your network, servers, services, and Bluetooth devices with ease. Aelly(abbreviation) is desinged to help you to test, understand, and learn from stress-testing attacks.Aelly can deal with strong servers and can be optimized for non typical targets",
                    tools: ["React", "Redux", "JavaScript", "CSS", "HTML"],
                    image: "/assets/images/projects/devProjects/AellyX.jpg",
                    webpImage: "/assets/images/projects/devProjects/AellyX.webp",
                    key: 1
                }, {
                    title: "Student Dashboard",
                    githubUrl: "https://github.com/kkara9009/Student_Dashboard",
                    demoUrl: "https://eloquent-darwin-440c3c.netlify.app",
                    shortDescription: "A dashboard that displays student satisfaction numbers",
                    longDescription: "Built a dashboard that displays how satisfied students are with the assignments they received from their university/ academy, using charts and tables to visualize the data.",
                    tools: ["React", "Redux", "JavaScript", "CSS", "HTML", "Chart.js"],
                    image: "/assets/images/projects/devProjects/dashboard.jpg",
                    webpImage: "/assets/images/projects/devProjects/dashboard.webp",
                    key: 2
                }, {
                    title: "AellyXMusic",
                    githubUrl: "https://github.com/AellyOfficial/AellyXMusic",
                    demoUrl: "",
                    shortDescription: "Telegram Music UserBot",
                    longDescription: "This is an Telegram based UserBot which helps you to play over voice chat and it is very easy to deploy over telegram account, it's having very easy command module interface.",
                    tools: ["Python", "Dockerfile"],
                    image: "/assets/images/projects/devProjects/AellyXMusic.jpg",
                    webpImage: "/assets/images/projects/devProjects/AellyXMusic.webp",
                    key: 3
                }, {
                    title: "InstaBRUT",
                    githubUrl: "https://github.com/anonAELLY/instaBRUT",
                    videoDemoUrl: "",
                    shortDescription: "This is shell based tool to find Instagram password",
                    longDescription: "This very high powered shell based tool to find or crack Instagram password from it's list of containing 30k+ passwords. by using shell commands.",
                    tools: ["Shell"],
                    image: "/assets/images/projects/devProjects/instaBRUT.jpg",
                    webpImage: "/assets/images/projects/devProjects/instaBRUT.webp",
                    key: 4
                }, {
                    title: "AellyXJingle",
                    githubUrl: "https://github.com/AellyOfficial/AellyXJingle",
                    demoUrl: "",
                    shortDescription: "A telegram bot for playing music on VC (Voice Chat)",
                    longDescription: "This is an Telegram bot source code for playing music on voice chat. Using Python, modeled a database that stores at MongoDB, the tags and images associated with souce code,. This is an open source code.",
                    tools: ["Dockerfile", "Python3", "Shell"],
                    image: "/assets/images/projects/devProjects/Xjingle.jpg",
                    webpImage: "/assets/images/projects/devProjects/Xjingle.webp",
                    key: 5
                }, {
                    title: "kkara9009",
                    githubUrl: "https://github.com/itzKARAN/Portfolio",
                    shortDescription: "A portfolio website showcasing personal projects",
                    longDescription: "This is the website you are viewing right now. Using React built a portfolio website that allows users to toggle between designer and developer mode and view past and current projects. Designed 2 interactive homepages and 2 projectcards that react to the user's cursor movements.",
                    tools: ["React", "Redux", "JavaScript", "CSS", "HTML", "parallax.js"],
                    image: "/assets/images/projects/devProjects/portfolio.png",
                    webpImage: "/assets/images/projects/devProjects/portfolio.webp",
                    key: 6
                }, {
                    title: "Tarot Api",
                    githubUrl: "https://github.com/itzKARAN/Tarot-Reader",
                    demoUrl: "https://awesome-albattani-455531.netlify.app/",
                    shortDescription: "Find out what the future holds for you with this Tarot reader",
                    longDescription: "Using a public tarot API in combination with a printable tarot deck found online, I created a web app that provides users with daily tarot readings as well as an image library where users can learn the meanings behind all 78 cards.",
                    tools: ["Vue", "JavaScript", "CSS", "HTML"],
                    image: "/assets/images/projects/devProjects/tarot.jpg",
                    webpImage: "/assets/images/projects/devProjects/tarot.webp",
                    key: 7
                }, {
                    title: "Text to Handwriting",
                    demoUrl: "https://aelly.tk",
                    shortDescription: "Text to Handwriting converter with advance features",
                    longDescription: "This is the website you are viewing right now. Using css and js built a Text to Handwriting website that allows users to convert Text to Handwriting with  some advance features such as add your own Handwriting.",
                    tools: ["HTML", "JS", "React", "SQLite", "CSS"],
                    image: "/assets/images/projects/devProjects/Text.jpg",
                    webpImage: "/assets/images/projects/devProjects/Text.webp",
                    key: 8
                }].reverse(),
                R = [{
                    title: "Urban Amir",
                    description: "Designs for client's clothing line dedicated to raising autism awareness",
                    typeOfWork: "Clothing",
                    galleryUrl: "https://flic.kr/s/aHsmV4ibgX",
                    image: "/assets/images/projects/designProjects/urbanAmir.jpg",
                    webpImage: "/assets/images/projects/designProjects/urbanAmir.webp",
                    key: 17
                }, {
                    title: "Psik\xe9",
                    description: 'Business card and logo design for child psychologist "Sue-Tayna"',
                    typeOfWork: "Business Card",
                    galleryUrl: "https://flic.kr/s/aHsmUEPSgt",
                    image: "/assets/images/projects/designProjects/psike.jpg",
                    webpImage: "//assets/images/projects/designProjects/psike.webp",
                    key: 1
                }, {
                    title: "Gitem Taylor",
                    description: "Album art design for artist 'GitemTaylor'",
                    typeOfWork: "Album Art",
                    galleryImgUrl: "https://flic.kr/p/2kQfyJ7",
                    image: "/assets/images/projects/designProjects/gitemtaylor.jpg",
                    webpImage: "/assets/images/projects/designProjects/gitemtaylor.webp",
                    key: 8
                }, {
                    title: "I-Twar",
                    description: "Album art designs for UK artist 'i-twar'",
                    typeOfWork: "Album Art",
                    galleryUrl: "https://flic.kr/s/aHsmV4FsKW",
                    image: "/assets/images/projects/designProjects/iTwar.jpg",
                    webpImage: "/assets/images/projects/designProjects/iTwar.webp",
                    key: 9
                }, {
                    title: "March Hare",
                    description: "Mascot design of 'The March Hare' for client",
                    typeOfWork: "Mascot",
                    galleryImgUrl: "https://flic.kr/p/2kGJP1C",
                    image: "/assets/images/projects/designProjects/marchHare.jpg",
                    webpImage: "/assets/images/projects/designProjects/marchHare.webp",
                    key: 10
                }, {
                    title: "Miranda",
                    description: "Illustrations for client's story about a marshmallow trying to escape her fate of being eaten",
                    typeOfWork: "Book Illustration",
                    galleryUrl: "https://flic.kr/s/aHsmV4keYH",
                    image: "/assets/images/projects/designProjects/miranda.jpg",
                    webpImage: "/assets/images/projects/designProjects/miranda.webp",
                    key: 11
                }, {
                    title: "Cane Corso",
                    description: "Video project for integrating video and illustrations together",
                    typeOfWork: "Personal Project",
                    galleryUrl: "https://flic.kr/s/aHsmV4Ein4",
                    image: "/assets/images/projects/designProjects/caneCorso.jpg",
                    webpImage: "/assets/images/projects/designProjects/caneCorso.webp",
                    key: 2
                }, {
                    title: "Chamili",
                    description: "Mascot design for client's clothing line",
                    typeOfWork: "Mascot",
                    galleryUrl: "https://flic.kr/s/aHsmV4KQwd",
                    image: "/assets/images/projects/designProjects/chamili.jpg",
                    webpImage: "/assets/images/projects/designProjects/chamili.webp",
                    key: 3
                }, {
                    title: "Cowlick",
                    description: "Illustrations for client's story about a boy with peculiar hair",
                    typeOfWork: "Book Illustration",
                    galleryUrl: "https://flic.kr/s/aHsmV4vZKY",
                    image: "/assets/images/projects/designProjects/cowlick.jpg",
                    webpImage: "/assets/images/projects/designProjects/cowlick.webp",
                    key: 4
                }, {
                    title: "Where i belong",
                    description: "Illustrations for client's story about a dog searching for where he belongs",
                    typeOfWork: "Book Illustration",
                    galleryUrl: "https://flic.kr/s/aHsmV4M48U",
                    image: "/assets/images/projects/designProjects/doge.jpg",
                    webpImage: "/assets/images/projects/designProjects/doge.webp",
                    key: 5
                }, {
                    title: "Gekeerah",
                    description: "Illustrations for client's inclusive rewriting of Cinderella",
                    typeOfWork: "Book Illustration",
                    galleryUrl: "https://flic.kr/s/aHsmV4LveZ",
                    image: "/assets/images/projects/designProjects/gekeerah.jpg",
                    webpImage: "/assets/images/projects/designProjects/gekeerah.webp",
                    key: 7
                }, {
                    title: "Stan Lee",
                    description: "Tribute illustration for the late Stan Lee",
                    typeOfWork: "Personal Project",
                    galleryImgUrl: "https://flic.kr/p/2kQfyJc",
                    image: "/assets/images/projects/designProjects/stanLee.jpg",
                    webpImage: "/assets/images/projects/designProjects/stanLee.webp",
                    key: 12
                }, {
                    title: "Stephen Hawking",
                    description: "Tribute illustration for the late Stephen Hawking",
                    typeOfWork: "Personal Project",
                    galleryImgUrl: "https://flic.kr/p/2kGJNZA",
                    image: "/assets/images/projects/designProjects/stephenHawking.jpg",
                    webpImage: "/assets/images/projects/designProjects/stephenHawking.webp",
                    key: 13
                }, {
                    title: "Turtle Warriors",
                    description: "Board Game assets illustrations for client",
                    typeOfWork: "Game",
                    galleryUrl: "https://flic.kr/s/aHsmUESzHn",
                    image: "/assets/images/projects/designProjects/turtleWarriors.jpg",
                    webpImage: "/assets/images/projects/designProjects/turtleWarriors.webp",
                    key: 16
                }, {
                    title: "Yakuza",
                    description: "Video project animating with Krita",
                    typeOfWork: "Personal Project",
                    galleryUrl: "https://flic.kr/s/aHsmV4Einp",
                    image: "/assets/images/projects/designProjects/yakuza.jpg",
                    webpImage: "/assets/images/projects/designProjects/yakuza.webp",
                    key: 18
                }, {
                    title: "Triads",
                    description: "Exploring different culture and subculture beauty standards 3 girls at a time",
                    typeOfWork: "Personal Project",
                    galleryUrl: "https://flic.kr/s/aHsmUEMurF",
                    image: "/assets/images/projects/designProjects/triads.jpg",
                    webpImage: "/assets/images/projects/designProjects/triads.webp",
                    key: 15
                }, {
                    title: "Emojis",
                    description: "Project creating alternative emoji designs",
                    typeOfWork: "Personal Project",
                    galleryImgUrl: "https://flic.kr/p/2kJ8uVo",
                    image: "/assets/images/projects/designProjects/emojis.jpg",
                    webpImage: "/assets/images/projects/designProjects/emojis.webp",
                    key: 6
                }, {
                    title: "Unsuprvsd",
                    description: "Instagram Promo illustration for Unsuprvsd (personal clothing brand)",
                    typeOfWork: "Personal Project",
                    galleryUrl: "https://flic.kr/s/aHsmV4MYRk",
                    image: "/assets/images/projects/designProjects/unsuprvsd.jpg",
                    webpImage: "/assets/images/projects/designProjects/unsuprvsd.webp",
                    key: 14
                }, {
                    title: "Bowsette",
                    description: 'Expanding on the "Bowsette" meme, except now everyone is a Peach',
                    typeOfWork: "Personal Project",
                    galleryImgUrl: "https://flic.kr/p/2kQfyJH",
                    image: "/assets/images/projects/designProjects/bowsette.jpg",
                    webpImage: "/assets/images/projects/designProjects/bowsette.webp",
                    key: 0
                }].reverse(),
                L = function(e, t) {
                    var s = e.filter((function(e) {
                            return e.typeOfWork && t.includes(e.typeOfWork)
                        })),
                        a = e.filter((function(e) {
                            return e.tools && e.tools.some((function(e) {
                                return t.includes(e)
                            }))
                        }));
                    return s.length > 0 ? s : a
                },
                W = function() {
                    var e = Object(g.c)((function(e) {
                            return e.devMode
                        })),
                        t = Object(g.c)((function(e) {
                            return e.activeFilters
                        })),
                        s = Object(a.useState)([]),
                        r = Object(j.a)(s, 2),
                        i = r[0],
                        o = r[1],
                        c = Object(a.useState)(0),
                        l = Object(j.a)(c, 2),
                        d = l[0],
                        p = l[1],
                        m = Object(a.useState)([]),
                        u = Object(j.a)(m, 2),
                        h = u[0],
                        b = u[1],
                        y = Object(a.useState)([]),
                        O = Object(j.a)(y, 2),
                        w = O[0],
                        v = O[1],
                        x = Object(a.useState)(!1),
                        k = Object(j.a)(x, 2),
                        P = k[0],
                        N = k[1];
                    Object(a.useEffect)((function() {
                        p(0)
                    }), [e, t]), Object(a.useEffect)((function() {
                        o(e ? function(e) {
                            var t = [];
                            return e.forEach((function(e) {
                                e.tools.forEach((function(e) {
                                    t.includes(e) || t.push(e)
                                }))
                            })), t
                        }(D) : function(e) {
                            var t = [];
                            return e.forEach((function(e) {
                                var s = e.typeOfWork;
                                t.includes(s) || t.push(s)
                            })), t
                        }(R))
                    }), [e]), Object(a.useEffect)((function() {
                        var s = e ? D.map((function(e) {
                                return e
                            })) : R.map((function(e) {
                                return e
                            })),
                            a = t.length > 0;
                        b(a ? L(s, t) : s)
                    }), [t, e]), Object(a.useEffect)((function() {
                        var e = h.slice(d, d + 5);
                        v(0 === d ? e : function(t) {
                            return [].concat(Object(n.a)(t), Object(n.a)(e))
                        })
                    }), [d, h]), Object(a.useEffect)((function() {
                        var e = h.length,
                            t = w.length;
                        N(e > t)
                    }), [h, w]);
                    var S = function() {
                        p((function(e) {
                            return e + 5
                        }))
                    };
                    return Object(f.jsxs)("section", {
                        className: "projects page ".concat(e ? "dev" : "des"),
                        id: "projects",
                        children: [Object(f.jsx)("h2", {
                            children: "Projects"
                        }), Object(f.jsx)("p", {
                            className: "filter-text",
                            children: "Filter by:"
                        }), Object(f.jsx)(E, {
                            filters: i
                        }), Object(f.jsx)("div", {
                            className: "projects-container",
                            children: w.map((function(t) {
                                return e ? Object(f.jsx)(H, {
                                    project: t
                                }, t.key) : Object(f.jsx)(A, {
                                    project: t
                                }, t.key)
                            }))
                        }), P && (e ? Object(f.jsx)(M, {
                            className: "load-more-btn dev",
                            title: "Load more projects",
                            onClick: S,
                            children: "Load More"
                        }) : Object(f.jsx)("button", {
                            className: "load-more-btn des",
                            onClick: S,
                            children: "Load More"
                        }))]
                    })
                },
                B = function() {
                    var e = [{
                            contactMethod: "linkedin",
                            url: "https://www.linkedin.com/in/kkara9009",
                            iconName: C.e,
                            showOn: "both"
                        }, {
                            contactMethod: "github",
                            url: "https://github.com/kkara9009",
                            iconName: C.c,
                            showOn: "dev"
                        }, {
                            contactMethod: "instagram",
                            url: "https://www.instagram.com/kkara9009/?hl=en",
                            iconName: C.d,
                            showOn: "des"
                        }, {
                            contactMethod: "gmail",
                            url: "mailto:kkara9009@gmail.com",
                            iconName: b.d,
                            showOn: "both"
                        }],
                        t = Object(g.c)((function(e) {
                            return e.devMode
                        }));
                    return Object(f.jsxs)("section", {
                        className: "contact page ".concat(t ? "dev" : "des"),
                        id: "contact",
                        children: [Object(f.jsxs)("div", {
                            className: "social-text-container",
                            children: [Object(f.jsx)("h2", {
                                children: "Contact Me"
                            }), Object(f.jsx)("h3", {
                                children: "Don't be a stranger!"
                            }), Object(f.jsxs)("p", {
                                children: ["If you have any questions or just want to say hi,", Object(f.jsx)("br", {}), " shoot me an email. ", Object(f.jsx)("br", {}), " I'd love to hear from you!"]
                            })]
                        }), Object(f.jsx)("div", {
                            className: "social-links-container",
                            children: e.map((function(e) {
                                return t & ("both" === e.showOn || "dev" === e.showOn) ? Object(f.jsx)(M, {
                                    className: "social-item ".concat(e.contactMethod),
                                    title: e.contactMethod,
                                    children: Object(f.jsx)("a", {
                                        className: "social-item-link",
                                        href: e.url,
                                        target: "_blank",
                                        rel: "noreferrer noopener",
                                        title: e.contactMethod,
                                        children: Object(f.jsx)(h.a, {
                                            icon: e.iconName,
                                            className: "social-icon"
                                        })
                                    })
                                }, e.contactMethod) : !t & ("both" === e.showOn || "des" === e.showOn) ? Object(f.jsx)("a", {
                                    className: "social-item ".concat(e.contactMethod),
                                    href: e.url,
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    title: e.contactMethod,
                                    children: Object(f.jsx)(h.a, {
                                        icon: e.iconName,
                                        className: "social-icon"
                                    })
                                }, e.contactMethod) : null
                            }))
                        })]
                    })
                };
            var F = function() {
                    return Object(f.jsxs)("div", {
                        className: "App",
                        children: [Object(f.jsx)(y, {}), Object(f.jsx)(O, {}), Object(f.jsx)(P, {}), Object(f.jsx)(I, {}), Object(f.jsx)(W, {}), Object(f.jsx)(B, {})]
                    })
                },
                G = Object(o.c)(p, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            Object(i.render)(Object(f.jsx)(r.a.StrictMode, {
                children: Object(f.jsx)(g.a, {
                    store: G,
                    children: Object(f.jsx)(F, {})
                })
            }), document.getElementById("root"))
        }
    },
    [
        [39, 1, 2]
    ]
]);
//# sourceMappingURL=main.d8bf64d1.chunk.js.map
