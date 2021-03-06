(() => {
  "use strict";
  const e = {};
  let t = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    s = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideDownDone", { detail: { target: e } })
              );
          }, t);
      }
    },
    i = (e, i = 500) => (e.hidden ? s(e, i) : t(e, i)),
    n = !0,
    a = (e = 500) => {
      let t = document.querySelector("body");
      if (n) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (n) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".page").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".page").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, e);
      }
    };
  function l(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function o(e) {
    return e.filter(function (e, t, s) {
      return s.indexOf(e) === t;
    });
  }
  function c(e, t) {
    const s = Array.from(e).filter(function (e, s, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (s.length) {
      const e = [];
      s.forEach((s) => {
        const i = {},
          n = s.dataset[t].split(",");
        (i.value = n[0]),
          (i.type = n[1] ? n[1].trim() : "max"),
          (i.item = s),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = o(i);
      const n = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const s = t.split(","),
              i = s[1],
              a = s[2],
              r = window.matchMedia(s[0]),
              l = e.filter(function (e) {
                if (e.value === i && e.type === a) return !0;
              });
            n.push({ itemsArray: l, matchMedia: r });
          }),
          n
        );
    }
  }
  function d(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function h(e) {
    return e[e.length - 1];
  }
  function u(e, ...t) {
    return (
      t.forEach((t) => {
        e.includes(t) || e.push(t);
      }),
      e
    );
  }
  function p(e, t) {
    return e ? e.split(t) : [];
  }
  function f(e, t, s) {
    return (void 0 === t || e >= t) && (void 0 === s || e <= s);
  }
  function m(e, t, s) {
    return e < t ? t : e > s ? s : e;
  }
  function g(e, t, s = {}, i = 0, n = "") {
    const a = Object.keys(s).reduce((e, t) => {
      let n = s[t];
      return "function" == typeof n && (n = n(i)), `${e} ${t}="${n}"`;
    }, e);
    n += `<${a}></${e}>`;
    const r = i + 1;
    return r < t ? g(e, t, s, r, n) : n;
  }
  function v(e) {
    return e.replace(/>\s+/g, ">").replace(/\s+</, "<");
  }
  function w(e) {
    return new Date(e).setHours(0, 0, 0, 0);
  }
  function y() {
    return new Date().setHours(0, 0, 0, 0);
  }
  function b(...e) {
    switch (e.length) {
      case 0:
        return y();
      case 1:
        return w(e[0]);
    }
    const t = new Date(0);
    return t.setFullYear(...e), t.setHours(0, 0, 0, 0);
  }
  function S(e, t) {
    const s = new Date(e);
    return s.setDate(s.getDate() + t);
  }
  function C(e, t) {
    const s = new Date(e),
      i = s.getMonth() + t;
    let n = i % 12;
    n < 0 && (n += 12);
    const a = s.setMonth(i);
    return s.getMonth() !== n ? s.setDate(0) : a;
  }
  function E(e, t) {
    const s = new Date(e),
      i = s.getMonth(),
      n = s.setFullYear(s.getFullYear() + t);
    return 1 === i && 2 === s.getMonth() ? s.setDate(0) : n;
  }
  function x(e, t) {
    return (e - t + 7) % 7;
  }
  function T(e, t, s = 0) {
    const i = new Date(e).getDay();
    return S(e, x(t, s) - x(i, s));
  }
  function k(e, t) {
    const s = new Date(e).getFullYear();
    return Math.floor(s / t) * t;
  }
  function D(e, t, s) {
    if (1 !== t && 2 !== t) return e;
    const i = new Date(e);
    return (
      1 === t
        ? s
          ? i.setMonth(i.getMonth() + 1, 0)
          : i.setDate(1)
        : s
        ? i.setFullYear(i.getFullYear() + 1, 0, 0)
        : i.setMonth(0, 1),
      i.setHours(0, 0, 0, 0)
    );
  }
  const L = /dd?|DD?|mm?|MM?|yy?(?:yy)?/,
    M = /[\s!-/:-@[-`{-~?????????]+/;
  let A = {};
  const O = {
      y: (e, t) => new Date(e).setFullYear(parseInt(t, 10)),
      m(e, t, s) {
        const i = new Date(e);
        let n = parseInt(t, 10) - 1;
        if (isNaN(n)) {
          if (!t) return NaN;
          const e = t.toLowerCase(),
            i = (t) => t.toLowerCase().startsWith(e);
          if (
            ((n = s.monthsShort.findIndex(i)),
            n < 0 && (n = s.months.findIndex(i)),
            n < 0)
          )
            return NaN;
        }
        return (
          i.setMonth(n), i.getMonth() !== $(n) ? i.setDate(0) : i.getTime()
        );
      },
      d: (e, t) => new Date(e).setDate(parseInt(t, 10)),
    },
    _ = {
      d: (e) => e.getDate(),
      dd: (e) => P(e.getDate(), 2),
      D: (e, t) => t.daysShort[e.getDay()],
      DD: (e, t) => t.days[e.getDay()],
      m: (e) => e.getMonth() + 1,
      mm: (e) => P(e.getMonth() + 1, 2),
      M: (e, t) => t.monthsShort[e.getMonth()],
      MM: (e, t) => t.months[e.getMonth()],
      y: (e) => e.getFullYear(),
      yy: (e) => P(e.getFullYear(), 2).slice(-2),
      yyyy: (e) => P(e.getFullYear(), 4),
    };
  function $(e) {
    return e > -1 ? e % 12 : $(e + 12);
  }
  function P(e, t) {
    return e.toString().padStart(t, "0");
  }
  function I(e) {
    if ("string" != typeof e) throw new Error("Invalid date format.");
    if (e in A) return A[e];
    const t = e.split(L),
      s = e.match(new RegExp(L, "g"));
    if (0 === t.length || !s) throw new Error("Invalid date format.");
    const i = s.map((e) => _[e]),
      n = Object.keys(O).reduce(
        (e, t) => (
          s.find((e) => "D" !== e[0] && e[0].toLowerCase() === t) && e.push(t),
          e
        ),
        []
      );
    return (A[e] = {
      parser(e, t) {
        const i = e.split(M).reduce((e, t, i) => {
          if (t.length > 0 && s[i]) {
            const n = s[i][0];
            "M" === n ? (e.m = t) : "D" !== n && (e[n] = t);
          }
          return e;
        }, {});
        return n.reduce((e, s) => {
          const n = O[s](e, i[s], t);
          return isNaN(n) ? e : n;
        }, y());
      },
      formatter(e, s) {
        let n = i.reduce((i, n, a) => i + `${t[a]}${n(e, s)}`, "");
        return n + h(t);
      },
    });
  }
  function N(e, t, s) {
    if (e instanceof Date || "number" == typeof e) {
      const t = w(e);
      return isNaN(t) ? void 0 : t;
    }
    if (e) {
      if ("today" === e) return y();
      if (t && t.toValue) {
        const i = t.toValue(e, t, s);
        return isNaN(i) ? void 0 : w(i);
      }
      return I(t).parser(e, s);
    }
  }
  function B(e, t, s) {
    if (isNaN(e) || (!e && 0 !== e)) return "";
    const i = "number" == typeof e ? new Date(e) : e;
    return t.toDisplay ? t.toDisplay(i, t, s) : I(t).formatter(i, s);
  }
  const V = document.createRange();
  function W(e) {
    return V.createContextualFragment(e);
  }
  function F(e) {
    return (
      e.parentElement ||
      (e.parentNode instanceof ShadowRoot ? e.parentNode.host : void 0)
    );
  }
  function z(e) {
    return e.getRootNode().activeElement === e;
  }
  function j(e) {
    "none" !== e.style.display &&
      (e.style.display && (e.dataset.styleDisplay = e.style.display),
      (e.style.display = "none"));
  }
  function H(e) {
    "none" === e.style.display &&
      (e.dataset.styleDisplay
        ? ((e.style.display = e.dataset.styleDisplay),
          delete e.dataset.styleDisplay)
        : (e.style.display = ""));
  }
  function q(e) {
    e.firstChild && (e.removeChild(e.firstChild), q(e));
  }
  const G = new WeakMap(),
    { addEventListener: Y, removeEventListener: R } = EventTarget.prototype;
  function X(e, t) {
    let s = G.get(e);
    s || ((s = []), G.set(e, s)),
      t.forEach((e) => {
        Y.call(...e), s.push(e);
      });
  }
  if (!Event.prototype.composedPath) {
    const e = (t, s = []) => {
      let i;
      return (
        s.push(t),
        t.parentNode
          ? (i = t.parentNode)
          : t.host
          ? (i = t.host)
          : t.defaultView && (i = t.defaultView),
        i ? e(i, s) : s
      );
    };
    Event.prototype.composedPath = function () {
      return e(this.target);
    };
  }
  function K(e, t, s) {
    const [i, ...n] = e;
    return t(i)
      ? i
      : i !== s && "HTML" !== i.tagName && 0 !== n.length
      ? K(n, t, s)
      : void 0;
  }
  function U(e, t) {
    const s =
      "function" == typeof t ? t : (e) => e instanceof Element && e.matches(t);
    return K(e.composedPath(), s, e.currentTarget);
  }
  const J = {
      en: {
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM y",
      },
    },
    Z = {
      autohide: !1,
      beforeShowDay: null,
      beforeShowDecade: null,
      beforeShowMonth: null,
      beforeShowYear: null,
      calendarWeeks: !1,
      clearBtn: !1,
      dateDelimiter: ",",
      datesDisabled: [],
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      defaultViewDate: void 0,
      disableTouchKeyboard: !1,
      format: "mm/dd/yyyy",
      language: "en",
      maxDate: null,
      maxNumberOfDates: 1,
      maxView: 3,
      minDate: null,
      nextArrow: "??",
      orientation: "auto",
      pickLevel: 0,
      prevArrow: "??",
      showDaysOfWeek: !0,
      showOnClick: !0,
      showOnFocus: !0,
      startView: 0,
      title: "",
      todayBtn: !1,
      todayBtnMode: 0,
      todayHighlight: !1,
      updateOnBlur: !0,
      weekStart: 0,
    },
    { language: Q, format: ee, weekStart: te } = Z;
  function se(e, t) {
    return e.length < 6 && t >= 0 && t < 7 ? u(e, t) : e;
  }
  function ie(e) {
    return (e + 6) % 7;
  }
  function ne(e, t, s, i) {
    const n = N(e, t, s);
    return void 0 !== n ? n : i;
  }
  function ae(e, t, s = 3) {
    const i = parseInt(e, 10);
    return i >= 0 && i <= s ? i : t;
  }
  function re(e, t) {
    const s = Object.assign({}, e),
      i = {},
      n = t.constructor.locales,
      a = t.rangeSideIndex;
    let {
      format: r,
      language: l,
      locale: o,
      maxDate: c,
      maxView: h,
      minDate: p,
      pickLevel: f,
      startView: m,
      weekStart: g,
    } = t.config || {};
    if (s.language) {
      let e;
      if (
        (s.language !== l &&
          (n[s.language]
            ? (e = s.language)
            : ((e = s.language.split("-")[0]), void 0 === n[e] && (e = !1))),
        delete s.language,
        e)
      ) {
        l = i.language = e;
        const t = o || n[Q];
        (o = Object.assign({ format: ee, weekStart: te }, n[Q])),
          l !== Q && Object.assign(o, n[l]),
          (i.locale = o),
          r === t.format && (r = i.format = o.format),
          g === t.weekStart &&
            ((g = i.weekStart = o.weekStart), (i.weekEnd = ie(o.weekStart)));
      }
    }
    if (s.format) {
      const e = "function" == typeof s.format.toDisplay,
        t = "function" == typeof s.format.toValue,
        n = L.test(s.format);
      ((e && t) || n) && (r = i.format = s.format), delete s.format;
    }
    let v = f;
    void 0 !== s.pickLevel && ((v = ae(s.pickLevel, 2)), delete s.pickLevel),
      v !== f &&
        (v > f &&
          (void 0 === s.minDate && (s.minDate = p),
          void 0 === s.maxDate && (s.maxDate = c)),
        s.datesDisabled || (s.datesDisabled = []),
        (f = i.pickLevel = v));
    let w = p,
      y = c;
    if (void 0 !== s.minDate) {
      const e = b(0, 0, 1);
      (w = null === s.minDate ? e : ne(s.minDate, r, o, w)),
        w !== e && (w = D(w, f, !1)),
        delete s.minDate;
    }
    if (
      (void 0 !== s.maxDate &&
        ((y = null === s.maxDate ? void 0 : ne(s.maxDate, r, o, y)),
        void 0 !== y && (y = D(y, f, !0)),
        delete s.maxDate),
      y < w
        ? ((p = i.minDate = y), (c = i.maxDate = w))
        : (p !== w && (p = i.minDate = w), c !== y && (c = i.maxDate = y)),
      s.datesDisabled &&
        ((i.datesDisabled = s.datesDisabled.reduce((e, t) => {
          const s = N(t, r, o);
          return void 0 !== s ? u(e, D(s, f, a)) : e;
        }, [])),
        delete s.datesDisabled),
      void 0 !== s.defaultViewDate)
    ) {
      const e = N(s.defaultViewDate, r, o);
      void 0 !== e && (i.defaultViewDate = e), delete s.defaultViewDate;
    }
    if (void 0 !== s.weekStart) {
      const e = Number(s.weekStart) % 7;
      isNaN(e) || ((g = i.weekStart = e), (i.weekEnd = ie(e))),
        delete s.weekStart;
    }
    if (
      (s.daysOfWeekDisabled &&
        ((i.daysOfWeekDisabled = s.daysOfWeekDisabled.reduce(se, [])),
        delete s.daysOfWeekDisabled),
      s.daysOfWeekHighlighted &&
        ((i.daysOfWeekHighlighted = s.daysOfWeekHighlighted.reduce(se, [])),
        delete s.daysOfWeekHighlighted),
      void 0 !== s.maxNumberOfDates)
    ) {
      const e = parseInt(s.maxNumberOfDates, 10);
      e >= 0 && ((i.maxNumberOfDates = e), (i.multidate = 1 !== e)),
        delete s.maxNumberOfDates;
    }
    s.dateDelimiter &&
      ((i.dateDelimiter = String(s.dateDelimiter)), delete s.dateDelimiter);
    let S = h;
    void 0 !== s.maxView && ((S = ae(s.maxView, h)), delete s.maxView),
      (S = f > S ? f : S),
      S !== h && (h = i.maxView = S);
    let C = m;
    if (
      (void 0 !== s.startView && ((C = ae(s.startView, C)), delete s.startView),
      C < f ? (C = f) : C > h && (C = h),
      C !== m && (i.startView = C),
      s.prevArrow)
    ) {
      const e = W(s.prevArrow);
      e.childNodes.length > 0 && (i.prevArrow = e.childNodes),
        delete s.prevArrow;
    }
    if (s.nextArrow) {
      const e = W(s.nextArrow);
      e.childNodes.length > 0 && (i.nextArrow = e.childNodes),
        delete s.nextArrow;
    }
    if (
      (void 0 !== s.disableTouchKeyboard &&
        ((i.disableTouchKeyboard =
          "ontouchstart" in document && !!s.disableTouchKeyboard),
        delete s.disableTouchKeyboard),
      s.orientation)
    ) {
      const e = s.orientation.toLowerCase().split(/\s+/g);
      (i.orientation = {
        x: e.find((e) => "left" === e || "right" === e) || "auto",
        y: e.find((e) => "top" === e || "bottom" === e) || "auto",
      }),
        delete s.orientation;
    }
    if (void 0 !== s.todayBtnMode) {
      switch (s.todayBtnMode) {
        case 0:
        case 1:
          i.todayBtnMode = s.todayBtnMode;
      }
      delete s.todayBtnMode;
    }
    return (
      Object.keys(s).forEach((e) => {
        void 0 !== s[e] && d(Z, e) && (i[e] = s[e]);
      }),
      i
    );
  }
  const le = v(
      '<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>'
    ),
    oe = v(
      `<div class="days">\n  <div class="days-of-week">${g("span", 7, {
        class: "dow",
      })}</div>\n  <div class="datepicker-grid">${g("span", 42)}</div>\n</div>`
    ),
    ce = v(
      `<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${g(
        "span",
        6,
        { class: "week" }
      )}</div>\n</div>`
    );
  class de {
    constructor(e, t) {
      Object.assign(this, t, {
        picker: e,
        element: W('<div class="datepicker-view"></div>').firstChild,
        selected: [],
      }),
        this.init(this.picker.datepicker.config);
    }
    init(e) {
      void 0 !== e.pickLevel && (this.isMinView = this.id === e.pickLevel),
        this.setOptions(e),
        this.updateFocus(),
        this.updateSelection();
    }
    performBeforeHook(e, t, s) {
      let i = this.beforeShow(new Date(s));
      switch (typeof i) {
        case "boolean":
          i = { enabled: i };
          break;
        case "string":
          i = { classes: i };
      }
      if (i) {
        if (
          (!1 === i.enabled &&
            (e.classList.add("disabled"), u(this.disabled, t)),
          i.classes)
        ) {
          const s = i.classes.split(/\s+/);
          e.classList.add(...s), s.includes("disabled") && u(this.disabled, t);
        }
        i.content &&
          (function (e, t) {
            q(e),
              t instanceof DocumentFragment
                ? e.appendChild(t)
                : "string" == typeof t
                ? e.appendChild(W(t))
                : "function" == typeof t.forEach &&
                  t.forEach((t) => {
                    e.appendChild(t);
                  });
          })(e, i.content);
      }
    }
  }
  class he extends de {
    constructor(e) {
      super(e, { id: 0, name: "days", cellClass: "day" });
    }
    init(e, t = !0) {
      if (t) {
        const e = W(oe).firstChild;
        (this.dow = e.firstChild),
          (this.grid = e.lastChild),
          this.element.appendChild(e);
      }
      super.init(e);
    }
    setOptions(e) {
      let t;
      if (
        (d(e, "minDate") && (this.minDate = e.minDate),
        d(e, "maxDate") && (this.maxDate = e.maxDate),
        e.datesDisabled && (this.datesDisabled = e.datesDisabled),
        e.daysOfWeekDisabled &&
          ((this.daysOfWeekDisabled = e.daysOfWeekDisabled), (t = !0)),
        e.daysOfWeekHighlighted &&
          (this.daysOfWeekHighlighted = e.daysOfWeekHighlighted),
        void 0 !== e.todayHighlight && (this.todayHighlight = e.todayHighlight),
        void 0 !== e.weekStart &&
          ((this.weekStart = e.weekStart),
          (this.weekEnd = e.weekEnd),
          (t = !0)),
        e.locale)
      ) {
        const s = (this.locale = e.locale);
        (this.dayNames = s.daysMin),
          (this.switchLabelFormat = s.titleFormat),
          (t = !0);
      }
      if (
        (void 0 !== e.beforeShowDay &&
          (this.beforeShow =
            "function" == typeof e.beforeShowDay ? e.beforeShowDay : void 0),
        void 0 !== e.calendarWeeks)
      )
        if (e.calendarWeeks && !this.calendarWeeks) {
          const e = W(ce).firstChild;
          (this.calendarWeeks = {
            element: e,
            dow: e.firstChild,
            weeks: e.lastChild,
          }),
            this.element.insertBefore(e, this.element.firstChild);
        } else
          this.calendarWeeks &&
            !e.calendarWeeks &&
            (this.element.removeChild(this.calendarWeeks.element),
            (this.calendarWeeks = null));
      void 0 !== e.showDaysOfWeek &&
        (e.showDaysOfWeek
          ? (H(this.dow), this.calendarWeeks && H(this.calendarWeeks.dow))
          : (j(this.dow), this.calendarWeeks && j(this.calendarWeeks.dow))),
        t &&
          Array.from(this.dow.children).forEach((e, t) => {
            const s = (this.weekStart + t) % 7;
            (e.textContent = this.dayNames[s]),
              (e.className = this.daysOfWeekDisabled.includes(s)
                ? "dow disabled"
                : "dow");
          });
    }
    updateFocus() {
      const e = new Date(this.picker.viewDate),
        t = e.getFullYear(),
        s = e.getMonth(),
        i = b(t, s, 1),
        n = T(i, this.weekStart, this.weekStart);
      (this.first = i),
        (this.last = b(t, s + 1, 0)),
        (this.start = n),
        (this.focused = this.picker.viewDate);
    }
    updateSelection() {
      const { dates: e, rangepicker: t } = this.picker.datepicker;
      (this.selected = e), t && (this.range = t.dates);
    }
    render() {
      (this.today = this.todayHighlight ? y() : void 0),
        (this.disabled = [...this.datesDisabled]);
      const e = B(this.focused, this.switchLabelFormat, this.locale);
      if (
        (this.picker.setViewSwitchLabel(e),
        this.picker.setPrevBtnDisabled(this.first <= this.minDate),
        this.picker.setNextBtnDisabled(this.last >= this.maxDate),
        this.calendarWeeks)
      ) {
        const e = T(this.first, 1, 1);
        Array.from(this.calendarWeeks.weeks.children).forEach((t, s) => {
          t.textContent = (function (e) {
            const t = T(e, 4, 1),
              s = T(new Date(t).setMonth(0, 4), 4, 1);
            return Math.round((t - s) / 6048e5) + 1;
          })(S(e, 7 * s));
        });
      }
      Array.from(this.grid.children).forEach((e, t) => {
        const s = e.classList,
          i = S(this.start, t),
          n = new Date(i),
          a = n.getDay();
        if (
          ((e.className = `datepicker-cell ${this.cellClass}`),
          (e.dataset.date = i),
          (e.textContent = n.getDate()),
          i < this.first ? s.add("prev") : i > this.last && s.add("next"),
          this.today === i && s.add("today"),
          (i < this.minDate || i > this.maxDate || this.disabled.includes(i)) &&
            s.add("disabled"),
          this.daysOfWeekDisabled.includes(a) &&
            (s.add("disabled"), u(this.disabled, i)),
          this.daysOfWeekHighlighted.includes(a) && s.add("highlighted"),
          this.range)
        ) {
          const [e, t] = this.range;
          i > e && i < t && s.add("range"),
            i === e && s.add("range-start"),
            i === t && s.add("range-end");
        }
        this.selected.includes(i) && s.add("selected"),
          i === this.focused && s.add("focused"),
          this.beforeShow && this.performBeforeHook(e, i, i);
      });
    }
    refresh() {
      const [e, t] = this.range || [];
      this.grid
        .querySelectorAll(
          ".range, .range-start, .range-end, .selected, .focused"
        )
        .forEach((e) => {
          e.classList.remove(
            "range",
            "range-start",
            "range-end",
            "selected",
            "focused"
          );
        }),
        Array.from(this.grid.children).forEach((s) => {
          const i = Number(s.dataset.date),
            n = s.classList;
          i > e && i < t && n.add("range"),
            i === e && n.add("range-start"),
            i === t && n.add("range-end"),
            this.selected.includes(i) && n.add("selected"),
            i === this.focused && n.add("focused");
        });
    }
    refreshFocus() {
      const e = Math.round((this.focused - this.start) / 864e5);
      this.grid.querySelectorAll(".focused").forEach((e) => {
        e.classList.remove("focused");
      }),
        this.grid.children[e].classList.add("focused");
    }
  }
  function ue(e, t) {
    if (!e || !e[0] || !e[1]) return;
    const [[s, i], [n, a]] = e;
    return s > t || n < t ? void 0 : [s === t ? i : -1, n === t ? a : 12];
  }
  class pe extends de {
    constructor(e) {
      super(e, { id: 1, name: "months", cellClass: "month" });
    }
    init(e, t = !0) {
      t &&
        ((this.grid = this.element),
        this.element.classList.add("months", "datepicker-grid"),
        this.grid.appendChild(W(g("span", 12, { "data-month": (e) => e })))),
        super.init(e);
    }
    setOptions(e) {
      if (
        (e.locale && (this.monthNames = e.locale.monthsShort), d(e, "minDate"))
      )
        if (void 0 === e.minDate)
          this.minYear = this.minMonth = this.minDate = void 0;
        else {
          const t = new Date(e.minDate);
          (this.minYear = t.getFullYear()),
            (this.minMonth = t.getMonth()),
            (this.minDate = t.setDate(1));
        }
      if (d(e, "maxDate"))
        if (void 0 === e.maxDate)
          this.maxYear = this.maxMonth = this.maxDate = void 0;
        else {
          const t = new Date(e.maxDate);
          (this.maxYear = t.getFullYear()),
            (this.maxMonth = t.getMonth()),
            (this.maxDate = b(this.maxYear, this.maxMonth + 1, 0));
        }
      this.isMinView
        ? e.datesDisabled && (this.datesDisabled = e.datesDisabled)
        : (this.datesDisabled = []),
        void 0 !== e.beforeShowMonth &&
          (this.beforeShow =
            "function" == typeof e.beforeShowMonth
              ? e.beforeShowMonth
              : void 0);
    }
    updateFocus() {
      const e = new Date(this.picker.viewDate);
      (this.year = e.getFullYear()), (this.focused = e.getMonth());
    }
    updateSelection() {
      const { dates: e, rangepicker: t } = this.picker.datepicker;
      (this.selected = e.reduce((e, t) => {
        const s = new Date(t),
          i = s.getFullYear(),
          n = s.getMonth();
        return void 0 === e[i] ? (e[i] = [n]) : u(e[i], n), e;
      }, {})),
        t &&
          t.dates &&
          (this.range = t.dates.map((e) => {
            const t = new Date(e);
            return isNaN(t) ? void 0 : [t.getFullYear(), t.getMonth()];
          }));
    }
    render() {
      (this.disabled = this.datesDisabled.reduce((e, t) => {
        const s = new Date(t);
        return this.year === s.getFullYear() && e.push(s.getMonth()), e;
      }, [])),
        this.picker.setViewSwitchLabel(this.year),
        this.picker.setPrevBtnDisabled(this.year <= this.minYear),
        this.picker.setNextBtnDisabled(this.year >= this.maxYear);
      const e = this.selected[this.year] || [],
        t = this.year < this.minYear || this.year > this.maxYear,
        s = this.year === this.minYear,
        i = this.year === this.maxYear,
        n = ue(this.range, this.year);
      Array.from(this.grid.children).forEach((a, r) => {
        const l = a.classList,
          o = b(this.year, r, 1);
        if (
          ((a.className = `datepicker-cell ${this.cellClass}`),
          this.isMinView && (a.dataset.date = o),
          (a.textContent = this.monthNames[r]),
          (t ||
            (s && r < this.minMonth) ||
            (i && r > this.maxMonth) ||
            this.disabled.includes(r)) &&
            l.add("disabled"),
          n)
        ) {
          const [e, t] = n;
          r > e && r < t && l.add("range"),
            r === e && l.add("range-start"),
            r === t && l.add("range-end");
        }
        e.includes(r) && l.add("selected"),
          r === this.focused && l.add("focused"),
          this.beforeShow && this.performBeforeHook(a, r, o);
      });
    }
    refresh() {
      const e = this.selected[this.year] || [],
        [t, s] = ue(this.range, this.year) || [];
      this.grid
        .querySelectorAll(
          ".range, .range-start, .range-end, .selected, .focused"
        )
        .forEach((e) => {
          e.classList.remove(
            "range",
            "range-start",
            "range-end",
            "selected",
            "focused"
          );
        }),
        Array.from(this.grid.children).forEach((i, n) => {
          const a = i.classList;
          n > t && n < s && a.add("range"),
            n === t && a.add("range-start"),
            n === s && a.add("range-end"),
            e.includes(n) && a.add("selected"),
            n === this.focused && a.add("focused");
        });
    }
    refreshFocus() {
      this.grid.querySelectorAll(".focused").forEach((e) => {
        e.classList.remove("focused");
      }),
        this.grid.children[this.focused].classList.add("focused");
    }
  }
  class fe extends de {
    constructor(e, t) {
      super(e, t);
    }
    init(e, t = !0) {
      var s;
      t &&
        ((this.navStep = 10 * this.step),
        (this.beforeShowOption = `beforeShow${
          ((s = this.cellClass),
          [...s].reduce((e, t, s) => e + (s ? t : t.toUpperCase()), ""))
        }`),
        (this.grid = this.element),
        this.element.classList.add(this.name, "datepicker-grid"),
        this.grid.appendChild(W(g("span", 12)))),
        super.init(e);
    }
    setOptions(e) {
      if (
        (d(e, "minDate") &&
          (void 0 === e.minDate
            ? (this.minYear = this.minDate = void 0)
            : ((this.minYear = k(e.minDate, this.step)),
              (this.minDate = b(this.minYear, 0, 1)))),
        d(e, "maxDate") &&
          (void 0 === e.maxDate
            ? (this.maxYear = this.maxDate = void 0)
            : ((this.maxYear = k(e.maxDate, this.step)),
              (this.maxDate = b(this.maxYear, 11, 31)))),
        this.isMinView
          ? e.datesDisabled && (this.datesDisabled = e.datesDisabled)
          : (this.datesDisabled = []),
        void 0 !== e[this.beforeShowOption])
      ) {
        const t = e[this.beforeShowOption];
        this.beforeShow = "function" == typeof t ? t : void 0;
      }
    }
    updateFocus() {
      const e = new Date(this.picker.viewDate),
        t = k(e, this.navStep),
        s = t + 9 * this.step;
      (this.first = t),
        (this.last = s),
        (this.start = t - this.step),
        (this.focused = k(e, this.step));
    }
    updateSelection() {
      const { dates: e, rangepicker: t } = this.picker.datepicker;
      (this.selected = e.reduce((e, t) => u(e, k(t, this.step)), [])),
        t &&
          t.dates &&
          (this.range = t.dates.map((e) => {
            if (void 0 !== e) return k(e, this.step);
          }));
    }
    render() {
      (this.disabled = this.datesDisabled.map((e) =>
        new Date(e).getFullYear()
      )),
        this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),
        this.picker.setPrevBtnDisabled(this.first <= this.minYear),
        this.picker.setNextBtnDisabled(this.last >= this.maxYear),
        Array.from(this.grid.children).forEach((e, t) => {
          const s = e.classList,
            i = this.start + t * this.step,
            n = b(i, 0, 1);
          if (
            ((e.className = `datepicker-cell ${this.cellClass}`),
            this.isMinView && (e.dataset.date = n),
            (e.textContent = e.dataset.year = i),
            0 === t ? s.add("prev") : 11 === t && s.add("next"),
            (i < this.minYear ||
              i > this.maxYear ||
              this.disabled.includes(i)) &&
              s.add("disabled"),
            this.range)
          ) {
            const [e, t] = this.range;
            i > e && i < t && s.add("range"),
              i === e && s.add("range-start"),
              i === t && s.add("range-end");
          }
          this.selected.includes(i) && s.add("selected"),
            i === this.focused && s.add("focused"),
            this.beforeShow && this.performBeforeHook(e, i, n);
        });
    }
    refresh() {
      const [e, t] = this.range || [];
      this.grid
        .querySelectorAll(
          ".range, .range-start, .range-end, .selected, .focused"
        )
        .forEach((e) => {
          e.classList.remove(
            "range",
            "range-start",
            "range-end",
            "selected",
            "focused"
          );
        }),
        Array.from(this.grid.children).forEach((s) => {
          const i = Number(s.textContent),
            n = s.classList;
          i > e && i < t && n.add("range"),
            i === e && n.add("range-start"),
            i === t && n.add("range-end"),
            this.selected.includes(i) && n.add("selected"),
            i === this.focused && n.add("focused");
        });
    }
    refreshFocus() {
      const e = Math.round((this.focused - this.start) / this.step);
      this.grid.querySelectorAll(".focused").forEach((e) => {
        e.classList.remove("focused");
      }),
        this.grid.children[e].classList.add("focused");
    }
  }
  function me(e, t) {
    const s = {
      date: e.getDate(),
      viewDate: new Date(e.picker.viewDate),
      viewId: e.picker.currentView.id,
      datepicker: e,
    };
    e.element.dispatchEvent(new CustomEvent(t, { detail: s }));
  }
  function ge(e, t) {
    const { minDate: s, maxDate: i } = e.config,
      { currentView: n, viewDate: a } = e.picker;
    let r;
    switch (n.id) {
      case 0:
        r = C(a, t);
        break;
      case 1:
        r = E(a, t);
        break;
      default:
        r = E(a, t * n.navStep);
    }
    (r = m(r, s, i)), e.picker.changeFocus(r).render();
  }
  function ve(e) {
    const t = e.picker.currentView.id;
    t !== e.config.maxView && e.picker.changeView(t + 1).render();
  }
  function we(e) {
    e.config.updateOnBlur ? e.update({ revert: !0 }) : e.refresh("input"),
      e.hide();
  }
  function ye(e, t) {
    const s = e.picker,
      i = new Date(s.viewDate),
      n = s.currentView.id,
      a = 1 === n ? C(i, t - i.getMonth()) : E(i, t - i.getFullYear());
    s.changeFocus(a)
      .changeView(n - 1)
      .render();
  }
  function be(e) {
    const t = e.picker,
      s = y();
    if (1 === e.config.todayBtnMode) {
      if (e.config.autohide) return void e.setDate(s);
      e.setDate(s, { render: !1 }), t.update();
    }
    t.viewDate !== s && t.changeFocus(s), t.changeView(0).render();
  }
  function Se(e) {
    e.setDate({ clear: !0 });
  }
  function Ce(e) {
    ve(e);
  }
  function Ee(e) {
    ge(e, -1);
  }
  function xe(e) {
    ge(e, 1);
  }
  function Te(e, t) {
    const s = U(t, ".datepicker-cell");
    if (!s || s.classList.contains("disabled")) return;
    const { id: i, isMinView: n } = e.picker.currentView;
    n
      ? e.setDate(Number(s.dataset.date))
      : ye(e, Number(1 === i ? s.dataset.month : s.dataset.year));
  }
  function ke(e) {
    e.preventDefault();
  }
  const De = ["left", "top", "right", "bottom"].reduce(
      (e, t) => ((e[t] = `datepicker-orient-${t}`), e),
      {}
    ),
    Le = (e) => (e ? `${e}px` : e);
  function Me(e, t) {
    if (
      (void 0 !== t.title &&
        (t.title
          ? ((e.controls.title.textContent = t.title), H(e.controls.title))
          : ((e.controls.title.textContent = ""), j(e.controls.title))),
      t.prevArrow)
    ) {
      const s = e.controls.prevBtn;
      q(s),
        t.prevArrow.forEach((e) => {
          s.appendChild(e.cloneNode(!0));
        });
    }
    if (t.nextArrow) {
      const s = e.controls.nextBtn;
      q(s),
        t.nextArrow.forEach((e) => {
          s.appendChild(e.cloneNode(!0));
        });
    }
    if (
      (t.locale &&
        ((e.controls.todayBtn.textContent = t.locale.today),
        (e.controls.clearBtn.textContent = t.locale.clear)),
      void 0 !== t.todayBtn &&
        (t.todayBtn ? H(e.controls.todayBtn) : j(e.controls.todayBtn)),
      d(t, "minDate") || d(t, "maxDate"))
    ) {
      const { minDate: t, maxDate: s } = e.datepicker.config;
      e.controls.todayBtn.disabled = !f(y(), t, s);
    }
    void 0 !== t.clearBtn &&
      (t.clearBtn ? H(e.controls.clearBtn) : j(e.controls.clearBtn));
  }
  function Ae(e) {
    const { dates: t, config: s } = e;
    return m(t.length > 0 ? h(t) : s.defaultViewDate, s.minDate, s.maxDate);
  }
  function Oe(e, t) {
    const s = new Date(e.viewDate),
      i = new Date(t),
      { id: n, year: a, first: r, last: l } = e.currentView,
      o = i.getFullYear();
    switch (
      ((e.viewDate = t),
      o !== s.getFullYear() && me(e.datepicker, "changeYear"),
      i.getMonth() !== s.getMonth() && me(e.datepicker, "changeMonth"),
      n)
    ) {
      case 0:
        return t < r || t > l;
      case 1:
        return o !== a;
      default:
        return o < r || o > l;
    }
  }
  function _e(e) {
    return window.getComputedStyle(e).direction;
  }
  function $e(e) {
    const t = F(e);
    if (t !== document.body && t)
      return "visible" !== window.getComputedStyle(t).overflow ? t : $e(t);
  }
  class Pe {
    constructor(e) {
      const { config: t } = (this.datepicker = e),
        s = le.replace(/%buttonClass%/g, t.buttonClass),
        i = (this.element = W(s).firstChild),
        [n, a, r] = i.firstChild.children,
        l = n.firstElementChild,
        [o, c, d] = n.lastElementChild.children,
        [h, u] = r.firstChild.children,
        p = {
          title: l,
          prevBtn: o,
          viewSwitch: c,
          nextBtn: d,
          todayBtn: h,
          clearBtn: u,
        };
      (this.main = a), (this.controls = p);
      const f = e.inline ? "inline" : "dropdown";
      i.classList.add(`datepicker-${f}`),
        Me(this, t),
        (this.viewDate = Ae(e)),
        X(e, [
          [i, "mousedown", ke],
          [a, "click", Te.bind(null, e)],
          [p.viewSwitch, "click", Ce.bind(null, e)],
          [p.prevBtn, "click", Ee.bind(null, e)],
          [p.nextBtn, "click", xe.bind(null, e)],
          [p.todayBtn, "click", be.bind(null, e)],
          [p.clearBtn, "click", Se.bind(null, e)],
        ]),
        (this.views = [
          new he(this),
          new pe(this),
          new fe(this, { id: 2, name: "years", cellClass: "year", step: 1 }),
          new fe(this, {
            id: 3,
            name: "decades",
            cellClass: "decade",
            step: 10,
          }),
        ]),
        (this.currentView = this.views[t.startView]),
        this.currentView.render(),
        this.main.appendChild(this.currentView.element),
        t.container
          ? t.container.appendChild(this.element)
          : e.inputField.after(this.element);
    }
    setOptions(e) {
      Me(this, e),
        this.views.forEach((t) => {
          t.init(e, !1);
        }),
        this.currentView.render();
    }
    detach() {
      this.element.remove();
    }
    show() {
      if (this.active) return;
      const { datepicker: e, element: t } = this;
      if (e.inline) t.classList.add("active");
      else {
        const s = _e(e.inputField);
        s !== _e(F(t)) ? (t.dir = s) : t.dir && t.removeAttribute("dir"),
          (t.style.visiblity = "hidden"),
          t.classList.add("active"),
          this.place(),
          (t.style.visiblity = ""),
          e.config.disableTouchKeyboard && e.inputField.blur();
      }
      (this.active = !0), me(e, "show");
    }
    hide() {
      this.active &&
        (this.datepicker.exitEditMode(),
        this.element.classList.remove("active"),
        (this.active = !1),
        me(this.datepicker, "hide"));
    }
    place() {
      const { classList: e, offsetParent: t, style: s } = this.element,
        { config: i, inputField: n } = this.datepicker,
        { width: a, height: r } = this.element.getBoundingClientRect(),
        {
          left: l,
          top: o,
          right: c,
          bottom: d,
          width: h,
          height: u,
        } = n.getBoundingClientRect();
      let { x: p, y: f } = i.orientation,
        m = l,
        g = o;
      if (t !== document.body && t) {
        const e = t.getBoundingClientRect();
        (m -= e.left - t.scrollLeft), (g -= e.top - t.scrollTop);
      } else (m += window.scrollX), (g += window.scrollY);
      const v = $e(n);
      let w = 0,
        y = 0,
        { clientWidth: b, clientHeight: S } = document.documentElement;
      if (v) {
        const e = v.getBoundingClientRect();
        e.top > 0 && (y = e.top),
          e.left > 0 && (w = e.left),
          e.right < b && (b = e.right),
          e.bottom < S && (S = e.bottom);
      }
      let C = 0;
      "auto" === p &&
        (l < w
          ? ((p = "left"), (C = w - l))
          : l + a > b
          ? ((p = "right"), b < c && (C = b - c))
          : (p = "rtl" === _e(n) ? (c - a < w ? "left" : "right") : "left")),
        "right" === p && (m += h - a),
        (m += C),
        "auto" === f && (f = o - r > y && d + r > S ? "top" : "bottom"),
        "top" === f ? (g -= r) : (g += u),
        e.remove(...Object.values(De)),
        e.add(De[p], De[f]),
        (s.left = Le(m)),
        (s.top = Le(g));
    }
    setViewSwitchLabel(e) {
      this.controls.viewSwitch.textContent = e;
    }
    setPrevBtnDisabled(e) {
      this.controls.prevBtn.disabled = e;
    }
    setNextBtnDisabled(e) {
      this.controls.nextBtn.disabled = e;
    }
    changeView(e) {
      const t = this.currentView,
        s = this.views[e];
      return (
        s.id !== t.id &&
          ((this.currentView = s),
          (this._renderMethod = "render"),
          me(this.datepicker, "changeView"),
          this.main.replaceChild(s.element, t.element)),
        this
      );
    }
    changeFocus(e) {
      return (
        (this._renderMethod = Oe(this, e) ? "render" : "refreshFocus"),
        this.views.forEach((e) => {
          e.updateFocus();
        }),
        this
      );
    }
    update() {
      const e = Ae(this.datepicker);
      return (
        (this._renderMethod = Oe(this, e) ? "render" : "refresh"),
        this.views.forEach((e) => {
          e.updateFocus(), e.updateSelection();
        }),
        this
      );
    }
    render(e = !0) {
      const t = (e && this._renderMethod) || "render";
      delete this._renderMethod, this.currentView[t]();
    }
  }
  function Ie(e, t, s, i, n, a) {
    if (f(e, n, a)) {
      if (i(e)) {
        return Ie(t(e, s), t, s, i, n, a);
      }
      return e;
    }
  }
  function Ne(e, t, s, i) {
    const n = e.picker,
      a = n.currentView,
      r = a.step || 1;
    let l,
      o,
      c = n.viewDate;
    switch (a.id) {
      case 0:
        (c = i ? S(c, 7 * s) : t.ctrlKey || t.metaKey ? E(c, s) : S(c, s)),
          (l = S),
          (o = (e) => a.disabled.includes(e));
        break;
      case 1:
        (c = C(c, i ? 4 * s : s)),
          (l = C),
          (o = (e) => {
            const t = new Date(e),
              { year: s, disabled: i } = a;
            return t.getFullYear() === s && i.includes(t.getMonth());
          });
        break;
      default:
        (c = E(c, s * (i ? 4 : 1) * r)),
          (l = E),
          (o = (e) => a.disabled.includes(k(e, r)));
    }
    (c = Ie(c, l, s < 0 ? -r : r, o, a.minDate, a.maxDate)),
      void 0 !== c && n.changeFocus(c).render();
  }
  function Be(e, t) {
    const s = t.key;
    if ("Tab" === s) return void we(e);
    const i = e.picker,
      { id: n, isMinView: a } = i.currentView;
    if (i.active) {
      if (e.editMode)
        return void ("Enter" === s
          ? e.exitEditMode({ update: !0, autohide: e.config.autohide })
          : "Escape" === s && i.hide());
      if ("ArrowLeft" === s)
        if (t.ctrlKey || t.metaKey) ge(e, -1);
        else {
          if (t.shiftKey) return void e.enterEditMode();
          Ne(e, t, -1, !1);
        }
      else if ("ArrowRight" === s)
        if (t.ctrlKey || t.metaKey) ge(e, 1);
        else {
          if (t.shiftKey) return void e.enterEditMode();
          Ne(e, t, 1, !1);
        }
      else if ("ArrowUp" === s)
        if (t.ctrlKey || t.metaKey) ve(e);
        else {
          if (t.shiftKey) return void e.enterEditMode();
          Ne(e, t, -1, !0);
        }
      else if ("ArrowDown" === s) {
        if (t.shiftKey && !t.ctrlKey && !t.metaKey)
          return void e.enterEditMode();
        Ne(e, t, 1, !0);
      } else {
        if ("Enter" !== s)
          return void ("Escape" === s
            ? i.hide()
            : ("Backspace" !== s &&
                "Delete" !== s &&
                (1 !== s.length || t.ctrlKey || t.metaKey)) ||
              e.enterEditMode());
        if (a) return void e.setDate(i.viewDate);
        i.changeView(n - 1).render();
      }
    } else {
      if ("ArrowDown" !== s)
        return void ("Enter" === s ? e.update() : "Escape" === s && i.show());
      i.show();
    }
    t.preventDefault();
  }
  function Ve(e) {
    e.config.showOnFocus && !e._showing && e.show();
  }
  function We(e, t) {
    const s = t.target;
    (e.picker.active || e.config.showOnClick) &&
      ((s._active = z(s)),
      (s._clicking = setTimeout(() => {
        delete s._active, delete s._clicking;
      }, 2e3)));
  }
  function Fe(e, t) {
    const s = t.target;
    s._clicking &&
      (clearTimeout(s._clicking),
      delete s._clicking,
      s._active && e.enterEditMode(),
      delete s._active,
      e.config.showOnClick && e.show());
  }
  function ze(e, t) {
    t.clipboardData.types.includes("text/plain") && e.enterEditMode();
  }
  function je(e, t) {
    const { element: s, picker: i } = e;
    if (!i.active && !z(s)) return;
    const n = i.element;
    U(t, (e) => e === s || e === n) || we(e);
  }
  function He(e, t) {
    return e.map((e) => B(e, t.format, t.locale)).join(t.dateDelimiter);
  }
  function qe(e, t, s = !1) {
    const { config: i, dates: n, rangeSideIndex: a } = e;
    if (0 === t.length) return s ? [] : void 0;
    let r = t.reduce((e, t) => {
      let s = N(t, i.format, i.locale);
      return (
        void 0 === s ||
          ((s = D(s, i.pickLevel, a)),
          !f(s, i.minDate, i.maxDate) ||
            e.includes(s) ||
            i.datesDisabled.includes(s) ||
            (!(i.pickLevel > 0) &&
              i.daysOfWeekDisabled.includes(new Date(s).getDay())) ||
            e.push(s)),
        e
      );
    }, []);
    return 0 !== r.length
      ? (i.multidate &&
          !s &&
          (r = r.reduce(
            (e, t) => (n.includes(t) || e.push(t), e),
            n.filter((e) => !r.includes(e))
          )),
        i.maxNumberOfDates && r.length > i.maxNumberOfDates
          ? r.slice(-1 * i.maxNumberOfDates)
          : r)
      : void 0;
  }
  function Ge(e, t = 3, s = !0) {
    const { config: i, picker: n, inputField: a } = e;
    if (2 & t) {
      const e = n.active ? i.pickLevel : i.startView;
      n.update().changeView(e).render(s);
    }
    1 & t && a && (a.value = He(e.dates, i));
  }
  function Ye(e, t, s) {
    let { clear: i, render: n, autohide: a, revert: r } = s;
    void 0 === n && (n = !0),
      n ? void 0 === a && (a = e.config.autohide) : (a = !1);
    const l = qe(e, t, i);
    (l || r) &&
      (l && l.toString() !== e.dates.toString()
        ? ((e.dates = l), Ge(e, n ? 3 : 1), me(e, "changeDate"))
        : Ge(e, 1),
      a && e.hide());
  }
  class Re {
    constructor(e, t = {}, s) {
      (e.datepicker = this), (this.element = e);
      const i = (this.config = Object.assign(
          {
            buttonClass: (t.buttonClass && String(t.buttonClass)) || "button",
            container: null,
            defaultViewDate: y(),
            maxDate: void 0,
            minDate: void 0,
          },
          re(Z, this)
        )),
        n = (this.inline = "INPUT" !== e.tagName);
      let a, r;
      if (
        (n
          ? (i.container = e)
          : (t.container &&
              (i.container =
                t.container instanceof HTMLElement
                  ? t.container
                  : document.querySelector(t.container)),
            (a = this.inputField = e),
            a.classList.add("datepicker-input")),
        s)
      ) {
        const e = s.inputs.indexOf(a),
          t = s.datepickers;
        if (e < 0 || e > 1 || !Array.isArray(t))
          throw Error("Invalid rangepicker object.");
        (t[e] = this),
          Object.defineProperty(this, "rangepicker", { get: () => s }),
          Object.defineProperty(this, "rangeSideIndex", { get: () => e });
      }
      (this._options = t),
        Object.assign(i, re(t, this)),
        n
          ? ((r = p(e.dataset.date, i.dateDelimiter)), delete e.dataset.date)
          : (r = p(a.value, i.dateDelimiter)),
        (this.dates = []);
      const l = qe(this, r);
      l && l.length > 0 && (this.dates = l), a && (a.value = He(this.dates, i));
      const o = (this.picker = new Pe(this));
      if (n) this.show();
      else {
        const e = je.bind(null, this);
        X(this, [
          [a, "keydown", Be.bind(null, this)],
          [a, "focus", Ve.bind(null, this)],
          [a, "mousedown", We.bind(null, this)],
          [a, "click", Fe.bind(null, this)],
          [a, "paste", ze.bind(null, this)],
          [document, "mousedown", e],
          [document, "touchstart", e],
          [window, "resize", o.place.bind(o)],
        ]);
      }
    }
    static formatDate(e, t, s) {
      return B(e, t, (s && J[s]) || J.en);
    }
    static parseDate(e, t, s) {
      return N(e, t, (s && J[s]) || J.en);
    }
    static get locales() {
      return J;
    }
    get active() {
      return !(!this.picker || !this.picker.active);
    }
    get pickerElement() {
      return this.picker ? this.picker.element : void 0;
    }
    setOptions(e) {
      const t = this.picker,
        s = re(e, this);
      Object.assign(this._options, e),
        Object.assign(this.config, s),
        t.setOptions(s),
        Ge(this, 3);
    }
    show() {
      if (this.inputField) {
        if (this.inputField.disabled) return;
        z(this.inputField) ||
          this.config.disableTouchKeyboard ||
          ((this._showing = !0), this.inputField.focus(), delete this._showing);
      }
      this.picker.show();
    }
    hide() {
      this.inline ||
        (this.picker.hide(),
        this.picker.update().changeView(this.config.startView).render());
    }
    destroy() {
      return (
        this.hide(),
        (function (e) {
          let t = G.get(e);
          t &&
            (t.forEach((e) => {
              R.call(...e);
            }),
            G.delete(e));
        })(this),
        this.picker.detach(),
        this.inline || this.inputField.classList.remove("datepicker-input"),
        delete this.element.datepicker,
        this
      );
    }
    getDate(e) {
      const t = e ? (t) => B(t, e, this.config.locale) : (e) => new Date(e);
      return this.config.multidate
        ? this.dates.map(t)
        : this.dates.length > 0
        ? t(this.dates[0])
        : void 0;
    }
    setDate(...e) {
      const t = [...e],
        s = {},
        i = h(e);
      "object" != typeof i ||
        Array.isArray(i) ||
        i instanceof Date ||
        !i ||
        Object.assign(s, t.pop());
      Ye(this, Array.isArray(t[0]) ? t[0] : t, s);
    }
    update(e) {
      if (this.inline) return;
      const t = Object.assign(e || {}, { clear: !0, render: !0 });
      Ye(this, p(this.inputField.value, this.config.dateDelimiter), t);
    }
    refresh(e, t = !1) {
      let s;
      e && "string" != typeof e && ((t = e), (e = void 0)),
        (s = "picker" === e ? 2 : "input" === e ? 1 : 3),
        Ge(this, s, !t);
    }
    enterEditMode() {
      this.inline ||
        !this.picker.active ||
        this.editMode ||
        ((this.editMode = !0), this.inputField.classList.add("in-edit"));
    }
    exitEditMode(e) {
      if (this.inline || !this.editMode) return;
      const t = Object.assign({ update: !1 }, e);
      delete this.editMode,
        this.inputField.classList.remove("in-edit"),
        t.update && this.update(t);
    }
  }
  Object.assign(Re.locales, {
    ru: {
      days: [
        "??????????????????????",
        "??????????????????????",
        "??????????????",
        "??????????",
        "??????????????",
        "??????????????",
        "??????????????",
      ],
      daysShort: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
      daysMin: ["????", "????", "????", "????", "????", "????", "????"],
      months: [
        "????????????",
        "??????????????",
        "????????",
        "????????????",
        "??????",
        "????????",
        "????????",
        "????????????",
        "????????????????",
        "??????????????",
        "????????????",
        "??????????????",
      ],
      monthsShort: [
        "??????",
        "??????",
        "??????",
        "??????",
        "??????",
        "??????",
        "??????",
        "??????",
        "??????",
        "??????",
        "??????",
        "??????",
      ],
      today: "??????????????",
      clear: "????????????????",
      format: "d.D.yy",
      weekStart: 1,
      monthsTitle: "????????????",
    },
  });
  const Xe = document.querySelectorAll(".links-side-account__link");
  Xe.length > 0 &&
    Xe.forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault(),
          e.previousSibling.previousSibling.classList.add("_active"),
          setTimeout(
            () => e.previousSibling.previousSibling.classList.remove("_active"),
            1e3
          ),
          navigator.clipboard.writeText(e.innerText);
      });
    });
  const Ke = document.querySelectorAll(".form__input input");
  Ke.length > 0 &&
    Ke.forEach((e) => {
      e.addEventListener("change", () => {
        0 !== e.value.length
          ? e.classList.add("_dirty")
          : e.classList.remove("_dirty");
      });
    });
  const Ue = document.querySelector("#born");
  if (Ue) {
    new Re(Ue, {
      language: "ru",
      maxDate: new Date(),
      format: "dd   MM   yyyy",
    });
    document.querySelectorAll(".datepicker-cell.day").forEach((e) => {
      e.addEventListener("click", (e) => {
        console.log("click"), Ue.classList.add("_dirty");
      });
    });
  }
  const Je = document.querySelector(".form__message"),
    Ze = document.querySelector(".side-account__name"),
    Qe = document.querySelector(".side-account__work"),
    et = document.querySelector(".side-account__data");
  let tt = localStorage.getItem("profile-callsign"),
    st = localStorage.getItem("profile-name"),
    it = localStorage.getItem("profile-surname"),
    nt = localStorage.getItem("profile-born"),
    at = localStorage.getItem("profile-city");
  console.log("born: " + nt), nt && (nt = nt.replace(/\s+/g, " ").split(" "));
  let rt = nt ? nt[1] : null;
  if (rt) {
    switch (rt) {
      case "????????????":
        rt = "January";
        break;
      case "??????????????":
        rt = "February";
        break;
      case "????????":
        rt = "March";
        break;
      case "????????????":
        rt = "April";
        break;
      case "??????":
        rt = "May";
        break;
      case "????????":
        rt = "June";
        break;
      case "????????":
        rt = "July";
        break;
      case "????????????":
        rt = "August";
        break;
      case "????????????????":
        rt = "September";
        break;
      case "??????????????":
        rt = "October";
        break;
      case "????????????":
        rt = "November";
        break;
      case "??????????????":
        rt = "December";
    }
    let e = new Date() - new Date(`${rt} ${nt[0]}, ${nt[2]}`),
      t = Math.floor(e / 31536e6);
    Ze &&
      (!st || !it || (Ze.innerText = `${st} ${it}`),
      !tt || (Qe.innerText = `${tt}`),
      !at || (et.innerHTML = `${t} ??????, ${at} <br> ?? ???????????????????? ?? 2019??`));
  }
  let lt = {
    getErrors(e) {
      let t = 0,
        s = e.querySelectorAll("*[data-required]");
      return (
        s.length &&
          s.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
          ? this.removeError(e)
          : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error")
          );
    },
    formClean(t) {
      t.reset(),
        setTimeout(() => {
          let s = t.querySelectorAll("input,textarea");
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            t.parentElement.classList.remove("_form-focus"),
              t.classList.remove("_form-focus"),
              lt.removeError(t);
          }
          let i = t.querySelectorAll(".checkbox__input");
          if (i.length > 0)
            for (let e = 0; e < i.length; e++) {
              i[e].checked = !1;
            }
          if (e.select) {
            let s = t.querySelectorAll(".select");
            if (s.length)
              for (let t = 0; t < s.length; t++) {
                const i = s[t].querySelector("select");
                e.select.selectBuild(i);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  function ot(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function ct(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : ot(t[s]) &&
          ot(e[s]) &&
          Object.keys(t[s]).length > 0 &&
          ct(e[s], t[s]);
    });
  }
  e.select = new (class {
    constructor(e, t = null) {
      if (
        ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
        (this.selectClasses = {
          classSelect: "select",
          classSelectBody: "select__body",
          classSelectTitle: "select__title",
          classSelectValue: "select__value",
          classSelectLabel: "select__label",
          classSelectInput: "select__input",
          classSelectText: "select__text",
          classSelectLink: "select__link",
          classSelectOptions: "select__options",
          classSelectOptionsScroll: "select__scroll",
          classSelectOption: "select__option",
          classSelectContent: "select__content",
          classSelectRow: "select__row",
          classSelectData: "select__asset",
          classSelectDisabled: "_select-disabled",
          classSelectTag: "_select-tag",
          classSelectOpen: "_select-open",
          classSelectActive: "_select-active",
          classSelectFocus: "_select-focus",
          classSelectMultiple: "_select-multiple",
          classSelectCheckBox: "_select-checkbox",
          classSelectOptionSelected: "_select-selected",
        }),
        (this._this = this),
        this.config.init)
      ) {
        const e = t
          ? document.querySelectorAll(t)
          : document.querySelectorAll("select");
        e.length
          ? (this.selectsInit(e),
            this.setLogging(`??????????????????, ???????????????? ????????????????: (${e.length})`))
          : this.setLogging("????????, ?????? ???? ???????????? select zzZZZzZZz");
      }
    }
    getSelectClass(e) {
      return `.${e}`;
    }
    getSelectElement(e, t) {
      return {
        originalSelect: e.querySelector("select"),
        selectElement: e.querySelector(this.getSelectClass(t)),
      };
    }
    selectsInit(e) {
      e.forEach((e, t) => {
        this.selectInit(e, t + 1);
      }),
        document.addEventListener(
          "click",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "keydown",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusin",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        ),
        document.addEventListener(
          "focusout",
          function (e) {
            this.selectsActions(e);
          }.bind(this)
        );
    }
    selectInit(e, t) {
      const s = this;
      let i = document.createElement("div");
      if (
        (i.classList.add(this.selectClasses.classSelect),
        e.parentNode.insertBefore(i, e),
        i.appendChild(e),
        (e.hidden = !0),
        t && (e.dataset.id = t),
        i.insertAdjacentHTML(
          "beforeend",
          `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
        ),
        this.selectBuild(e),
        this.getSelectPlaceholder(e) &&
          ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
          this.getSelectPlaceholder(e).label.show))
      ) {
        this.getSelectElement(
          i,
          this.selectClasses.classSelectTitle
        ).selectElement.insertAdjacentHTML(
          "afterbegin",
          `<span class="${this.selectClasses.classSelectLabel}">${
            this.getSelectPlaceholder(e).label.text
              ? this.getSelectPlaceholder(e).label.text
              : this.getSelectPlaceholder(e).value
          }</span>`
        );
      }
      (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
        e.addEventListener("change", function (e) {
          s.selectChange(e);
        });
    }
    selectBuild(e) {
      const t = e.parentElement;
      (t.dataset.id = e.dataset.id),
        t.classList.add(
          e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
        ),
        e.multiple
          ? t.classList.add(this.selectClasses.classSelectMultiple)
          : t.classList.remove(this.selectClasses.classSelectMultiple),
        e.hasAttribute("data-checkbox") && e.multiple
          ? t.classList.add(this.selectClasses.classSelectCheckBox)
          : t.classList.remove(this.selectClasses.classSelectCheckBox),
        this.setSelectTitleValue(t, e),
        this.setOptions(t, e),
        e.hasAttribute("data-search") && this.searchActions(t),
        e.hasAttribute("data-open") && this.selectAction(t),
        this.selectDisabled(t, e);
    }
    selectsActions(e) {
      const t = e.target,
        s = e.type;
      if (
        t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
        t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
      ) {
        const i = t.closest(".select")
            ? t.closest(".select")
            : document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ).dataset.selectId
                }"]`
              ),
          n = this.getSelectElement(i).originalSelect;
        if ("click" === s) {
          if (!n.disabled)
            if (
              t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
            ) {
              const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                ),
                s = document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                );
              this.optionAction(i, n, s);
            } else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            )
              this.selectAction(i);
            else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const e = t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              );
              this.optionAction(i, n, e);
            }
        } else
          "focusin" === s || "focusout" === s
            ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) &&
              ("focusin" === s
                ? i.classList.add(this.selectClasses.classSelectFocus)
                : i.classList.remove(this.selectClasses.classSelectFocus))
            : "keydown" === s && "Escape" === e.code && this.selects??lose();
      } else this.selects??lose();
    }
    selects??lose() {
      const e = document.querySelectorAll(
        `${this.getSelectClass(
          this.selectClasses.classSelect
        )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
      );
      e.length &&
        e.forEach((e) => {
          this.selectAction(e);
        });
    }
    selectAction(e) {
      const t = this.getSelectElement(e).originalSelect,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement;
      s.classList.contains("_slide") ||
        (e.classList.toggle(this.selectClasses.classSelectOpen),
        i(s, t.dataset.speed));
    }
    setSelectTitleValue(e, t) {
      const s = this.getSelectElement(
          e,
          this.selectClasses.classSelectBody
        ).selectElement,
        i = this.getSelectElement(
          e,
          this.selectClasses.classSelectTitle
        ).selectElement;
      i && i.remove(),
        s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
    }
    getSelectTitleValue(e, t) {
      let s = this.getSelectedOptionsData(t, 2).html;
      if (
        (t.multiple &&
          t.hasAttribute("data-tags") &&
          ((s = this.getSelectedOptionsData(t)
            .elements.map(
              (t) =>
                `<span role="button" data-select-id="${
                  e.dataset.id
                }" data-value="${
                  t.value
                }" class="_select-tag">${this.getSelectElementContent(
                  t
                )}</span>`
            )
            .join("")),
          t.dataset.tags &&
            document.querySelector(t.dataset.tags) &&
            ((document.querySelector(t.dataset.tags).innerHTML = s),
            t.hasAttribute("data-search") && (s = !1))),
        (s = s.length ? s : t.dataset.placeholder),
        this.getSelectedOptionsData(t).values.length
          ? e.classList.add(this.selectClasses.classSelectActive)
          : e.classList.remove(this.selectClasses.classSelectActive),
        t.hasAttribute("data-search"))
      )
        return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
      {
        const e =
          this.getSelectedOptionsData(t).elements.length &&
          this.getSelectedOptionsData(t).elements[0].dataset.class
            ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
            : "";
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
      }
    }
    getSelectElementContent(e) {
      const t = e.dataset.asset ? `${e.dataset.asset}` : "",
        s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
      let i = "";
      return (
        (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectData}">` : ""),
        (i += t ? s : ""),
        (i += t ? "</span>" : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectText}">` : ""),
        (i += e.textContent),
        (i += t ? "</span>" : ""),
        (i += t ? "</span>" : ""),
        i
      );
    }
    getSelectPlaceholder(e) {
      const t = Array.from(e.options).find((e) => !e.value);
      if (t)
        return {
          value: t.textContent,
          show: t.hasAttribute("data-show"),
          label: { show: t.hasAttribute("data-label"), text: t.dataset.label },
        };
    }
    getSelectedOptionsData(e, t) {
      let s = [];
      return (
        e.multiple
          ? (s = Array.from(e.options)
              .filter((e) => e.value)
              .filter((e) => e.selected))
          : s.push(e.options[e.selectedIndex]),
        {
          elements: s.map((e) => e),
          values: s.filter((e) => e.value).map((e) => e.value),
          html: s.map((e) => this.getSelectElementContent(e)),
        }
      );
    }
    getOptions(e) {
      let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
        s = e.dataset.scroll ? `style="max-height:${e.dataset.scroll}px"` : "",
        i = Array.from(e.options);
      if (i.length > 0) {
        let n = "";
        return (
          ((this.getSelectPlaceholder(e) &&
            !this.getSelectPlaceholder(e).show) ||
            e.multiple) &&
            (i = i.filter((e) => e.value)),
          (n += t
            ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
            : ""),
          i.forEach((t) => {
            n += this.getOption(t, e);
          }),
          (n += t ? "</div>" : ""),
          n
        );
      }
    }
    getOption(e, t) {
      const s =
          e.selected && t.multiple
            ? ` ${this.selectClasses.classSelectOptionSelected}`
            : "",
        i = e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
        n = e.dataset.class ? ` ${e.dataset.class}` : "",
        a = !!e.dataset.href && e.dataset.href,
        r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
      let l = "";
      return (
        (l += a
          ? `<a ${r} ${i} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
          : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
        (l += this.getSelectElementContent(e)),
        (l += a ? "</a>" : "</button>"),
        l
      );
    }
    setOptions(e, t) {
      this.getSelectElement(
        e,
        this.selectClasses.classSelectOptions
      ).selectElement.innerHTML = this.getOptions(t);
    }
    optionAction(e, t, s) {
      if (t.multiple) {
        s.classList.toggle(this.selectClasses.classSelectOptionSelected);
        this.getSelectedOptionsData(t).elements.forEach((e) => {
          e.removeAttribute("selected");
        });
        e.querySelectorAll(
          this.getSelectClass(this.selectClasses.classSelectOptionSelected)
        ).forEach((e) => {
          t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
            "selected",
            "selected"
          );
        });
      } else
        t.hasAttribute("data-show-selected") ||
          (e.querySelector(
            `${this.getSelectClass(
              this.selectClasses.classSelectOption
            )}[hidden]`
          ) &&
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ).hidden = !1),
          (s.hidden = !0)),
          (t.value = s.hasAttribute("data-value")
            ? s.dataset.value
            : s.textContent),
          this.selectAction(e);
      this.setSelectTitleValue(e, t), this.setSelectChange(t);
    }
    selectChange(e) {
      const t = e.target;
      this.selectBuild(t), this.setSelectChange(t);
    }
    setSelectChange(e) {
      if (
        (e.hasAttribute("data-validate") && lt.validateInput(e),
        e.hasAttribute("data-submit") && e.value)
      ) {
        let t = document.createElement("button");
        (t.type = "submit"), e.closest("form").append(t), t.click(), t.remove();
      }
      const t = e.parentElement;
      this.selectCallback(t, e);
    }
    selectDisabled(e, t) {
      t.disabled
        ? (e.classList.add(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !0))
        : (e.classList.remove(this.selectClasses.classSelectDisabled),
          (this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement.disabled = !1));
    }
    searchActions(e) {
      this.getSelectElement(e).originalSelect;
      const t = this.getSelectElement(
          e,
          this.selectClasses.classSelectInput
        ).selectElement,
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement,
        i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
        n = this;
      t.addEventListener("input", function () {
        i.forEach((e) => {
          e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
            ? (e.hidden = !1)
            : (e.hidden = !0);
        }),
          !0 === s.hidden && n.selectAction(e);
      });
    }
    selectCallback(e, t) {
      document.dispatchEvent(
        new CustomEvent("selectCallback", { detail: { select: t } })
      );
    }
    setLogging(e) {
      this.config.logging && l(`[select]: ${e}`);
    }
  })({});
  const dt = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function ht() {
    const e = "undefined" != typeof document ? document : {};
    return ct(e, dt), e;
  }
  const ut = {
    document: dt,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function pt() {
    const e = "undefined" != typeof window ? window : {};
    return ct(e, ut), e;
  }
  class ft extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function mt(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...mt(e)) : t.push(e);
      }),
      t
    );
  }
  function gt(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function vt(e, t) {
    const s = pt(),
      i = ht();
    let n = [];
    if (!t && e instanceof ft) return e;
    if (!e) return new ft(n);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) s.push(i[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof ft) return e;
      n = e;
    }
    return new ft(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(n)
    );
  }
  vt.fn = ft.prototype;
  const wt = "resize scroll".split(" ");
  function yt(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          wt.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : vt(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  yt("click"),
    yt("blur"),
    yt("focus"),
    yt("focusin"),
    yt("focusout"),
    yt("keyup"),
    yt("keydown"),
    yt("keypress"),
    yt("submit"),
    yt("change"),
    yt("mousedown"),
    yt("mousemove"),
    yt("mouseup"),
    yt("mouseenter"),
    yt("mouseleave"),
    yt("mouseout"),
    yt("mouseover"),
    yt("touchstart"),
    yt("touchend"),
    yt("touchmove"),
    yt("resize"),
    yt("scroll");
  const bt = {
    addClass: function (...e) {
      const t = mt(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = mt(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = mt(e.map((e) => e.split(" ")));
      return (
        gt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = mt(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, i, n] = e;
      function a(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), vt(t).is(s))) i.apply(t, n);
        else {
          const e = vt(t).parents();
          for (let t = 0; t < e.length; t += 1)
            vt(e[t]).is(s) && i.apply(e[t], n);
        }
      }
      function r(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const l = t.split(" ");
      let o;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (o = 0; o < l.length; o += 1) {
            const e = l[o];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: a }),
              t.addEventListener(e, a, n);
          }
        else
          for (o = 0; o < l.length; o += 1) {
            const e = l[o];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, i, n] = e;
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const a = t.split(" ");
      for (let e = 0; e < a.length; e += 1) {
        const t = a[e];
        for (let e = 0; e < this.length; e += 1) {
          const a = this[e];
          let r;
          if (
            (!s && a.dom7Listeners
              ? (r = a.dom7Listeners[t])
              : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]),
            r && r.length)
          )
            for (let e = r.length - 1; e >= 0; e -= 1) {
              const s = r[e];
              (i && s.listener === i) ||
              (i &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === i)
                ? (a.removeEventListener(t, s.proxyListener, n), r.splice(e, 1))
                : i ||
                  (a.removeEventListener(t, s.proxyListener, n),
                  r.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = pt(),
        s = e[0].split(" "),
        i = e[1];
      for (let n = 0; n < s.length; n += 1) {
        const a = s[n];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(a, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(s),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = pt();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = pt(),
          t = ht(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          a = s.clientTop || n.clientTop || 0,
          r = s.clientLeft || n.clientLeft || 0,
          l = s === e ? e.scrollY : s.scrollTop,
          o = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + l - a, left: i.left + o - r };
      }
      return null;
    },
    css: function (e, t) {
      const s = pt();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = pt(),
        s = ht(),
        i = this[0];
      let n, a;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = vt(e), a = 0; a < n.length; a += 1) if (n[a] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof ft) {
        for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
          if (n[a] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return vt([]);
      if (e < 0) {
        const s = t + e;
        return vt(s < 0 ? [] : [this[s]]);
      }
      return vt([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = ht();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = s.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof ft)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = ht();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof ft)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && vt(this[0].nextElementSibling).is(e)
            ? vt([this[0].nextElementSibling])
            : vt([])
          : this[0].nextElementSibling
          ? vt([this[0].nextElementSibling])
          : vt([])
        : vt([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return vt([]);
      for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? vt(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return vt(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && vt(t.previousElementSibling).is(e)
            ? vt([t.previousElementSibling])
            : vt([])
          : t.previousElementSibling
          ? vt([t.previousElementSibling])
          : vt([]);
      }
      return vt([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return vt([]);
      for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? vt(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return vt(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? vt(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return vt(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i; )
          e ? vt(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return vt(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? vt([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return vt(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let s = 0; s < i.length; s += 1)
          (e && !vt(i[s]).is(e)) || t.push(i[s]);
      }
      return vt(t);
    },
    filter: function (e) {
      return vt(gt(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(bt).forEach((e) => {
    Object.defineProperty(vt.fn, e, { value: bt[e], writable: !0 });
  });
  const St = vt;
  function Ct(e, t = 0) {
    return setTimeout(e, t);
  }
  function Et() {
    return Date.now();
  }
  function xt(e, t = "x") {
    const s = pt();
    let i, n, a;
    const r = (function (e) {
      const t = pt();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = r.transform || r.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((a =
            r.MozTransform ||
            r.OTransform ||
            r.MsTransform ||
            r.msTransform ||
            r.transform ||
            r
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = a.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? a.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? a.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function Tt(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function kt(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const a = e[n];
      if (
        null != a &&
        ((i = a),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            n = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== n &&
            n.enumerable &&
            (Tt(t[i]) && Tt(a[i])
              ? a[i].__swiper__
                ? (t[i] = a[i])
                : kt(t[i], a[i])
              : !Tt(t[i]) && Tt(a[i])
              ? ((t[i] = {}), a[i].__swiper__ ? (t[i] = a[i]) : kt(t[i], a[i]))
              : (t[i] = a[i]));
        }
      }
    }
    var i;
    return t;
  }
  function Dt(e, t, s) {
    e.style.setProperty(t, s);
  }
  function Lt({ swiper: e, targetPosition: t, side: s }) {
    const i = pt(),
      n = -e.translate;
    let a,
      r = null;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const o = t > n ? "next" : "prev",
      c = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
      d = () => {
        (a = new Date().getTime()), null === r && (r = a);
        const o = Math.max(Math.min((a - r) / l, 1), 0),
          h = 0.5 - Math.cos(o * Math.PI) / 2;
        let u = n + h * (t - n);
        if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: u });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }
  let Mt, At, Ot;
  function _t() {
    return (
      Mt ||
        (Mt = (function () {
          const e = pt(),
            t = ht();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      Mt
    );
  }
  function $t(e = {}) {
    return (
      At ||
        (At = (function ({ userAgent: e } = {}) {
          const t = _t(),
            s = pt(),
            i = s.navigator.platform,
            n = e || s.navigator.userAgent,
            a = { ios: !1, android: !1 },
            r = s.screen.width,
            l = s.screen.height,
            o = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = n.match(/(iPad).*OS\s([\d_]+)/);
          const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            u = "Win32" === i;
          let p = "MacIntel" === i;
          return (
            !c &&
              p &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${r}x${l}`) >= 0 &&
              ((c = n.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (p = !1)),
            o && !u && ((a.os = "android"), (a.android = !0)),
            (c || h || d) && ((a.os = "ios"), (a.ios = !0)),
            a
          );
        })(e)),
      At
    );
  }
  function Pt() {
    return (
      Ot ||
        (Ot = (function () {
          const e = pt();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      Ot
    );
  }
  const It = {
    on(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      function n(...s) {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners) return t;
      let s, i, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
        : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
        i.unshift(n);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, i);
              });
        }),
        t
      );
    },
  };
  const Nt = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        { $wrapperEl: n, size: a, rtlTranslate: r, wrongRTL: l } = e,
        o = e.virtual && i.virtual.enabled,
        c = o ? e.virtual.slides.length : e.slides.length,
        d = n.children(`.${e.params.slideClass}`),
        h = o ? e.virtual.slides.length : d.length;
      let u = [];
      const p = [],
        f = [];
      let m = i.slidesOffsetBefore;
      "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
      let g = i.slidesOffsetAfter;
      "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        w = e.slidesGrid.length;
      let y = i.spaceBetween,
        b = -m,
        S = 0,
        C = 0;
      if (void 0 === a) return;
      "string" == typeof y &&
        y.indexOf("%") >= 0 &&
        (y = (parseFloat(y.replace("%", "")) / 100) * a),
        (e.virtualSize = -y),
        r
          ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (Dt(e.wrapperEl, "--swiper-centered-offset-before", ""),
          Dt(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const E = i.grid && i.grid.rows > 1 && e.grid;
      let x;
      E && e.grid.initSlides(h);
      const T =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < h; n += 1) {
        x = 0;
        const r = d.eq(n);
        if (
          (E && e.grid.updateSlide(n, r, h, t), "none" !== r.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            T && (d[n].style[t("width")] = "");
            const a = getComputedStyle(r[0]),
              l = r[0].style.transform,
              o = r[0].style.webkitTransform;
            if (
              (l && (r[0].style.transform = "none"),
              o && (r[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              x = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
            else {
              const e = s(a, "width"),
                t = s(a, "padding-left"),
                i = s(a, "padding-right"),
                n = s(a, "margin-left"),
                l = s(a, "margin-right"),
                o = a.getPropertyValue("box-sizing");
              if (o && "border-box" === o) x = e + n + l;
              else {
                const { clientWidth: s, offsetWidth: a } = r[0];
                x = e + t + i + n + l + (a - s);
              }
            }
            l && (r[0].style.transform = l),
              o && (r[0].style.webkitTransform = o),
              i.roundLengths && (x = Math.floor(x));
          } else
            (x = (a - (i.slidesPerView - 1) * y) / i.slidesPerView),
              i.roundLengths && (x = Math.floor(x)),
              d[n] && (d[n].style[t("width")] = `${x}px`);
          d[n] && (d[n].swiperSlideSize = x),
            f.push(x),
            i.centeredSlides
              ? ((b = b + x / 2 + S / 2 + y),
                0 === S && 0 !== n && (b = b - a / 2 - y),
                0 === n && (b = b - a / 2 - y),
                Math.abs(b) < 0.001 && (b = 0),
                i.roundLengths && (b = Math.floor(b)),
                C % i.slidesPerGroup == 0 && u.push(b),
                p.push(b))
              : (i.roundLengths && (b = Math.floor(b)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(b),
                p.push(b),
                (b = b + x + y)),
            (e.virtualSize += x + y),
            (S = x),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, a) + g),
        r &&
          l &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        E && e.grid.updateWrapperSize(x, u, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let n = u[s];
          i.roundLengths && (n = Math.floor(n)),
            u[s] <= e.virtualSize - a && t.push(n);
        }
        (u = t),
          Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - a);
      }
      if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
        d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
          [s]: `${y}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - a;
        u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < a)
        ) {
          const t = (a - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            p.forEach((e, s) => {
              p[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: d,
          snapGrid: u,
          slidesGrid: p,
          slidesSizesGrid: f,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        Dt(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          Dt(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      h !== c && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        p.length !== w && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset();
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        a = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const r = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(r(e));
          }
      else s.push(r(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          a = e > a ? e : a;
        }
      (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: a } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let r = -e;
      n && (r = e),
        i.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const l = i[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
        const c =
            (r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          d =
            (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          h = -(r - o),
          u = h + t.slidesSizesGrid[e];
        ((h >= 0 && h < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (h <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(s.slideVisibleClass)),
          (l.progress = n ? -c : c),
          (l.originalProgress = n ? -d : d);
      }
      t.visibleSlides = St(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: a, isEnd: r } = t;
      const l = a,
        o = r;
      0 === i
        ? ((n = 0), (a = !0), (r = !0))
        : ((n = (e - t.minTranslate()) / i), (a = n <= 0), (r = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: a, isEnd: r }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        a && !l && t.emit("reachBeginning toEdge"),
        r && !o && t.emit("reachEnd toEdge"),
        ((l && !a) || (o && !r)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: i,
          activeIndex: n,
          realIndex: a,
        } = e,
        r = e.virtual && s.virtual.enabled;
      let l;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (l = r
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        l.addClass(s.slideActiveClass),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : i
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
      let c = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === c.length &&
        ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${o.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          c.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: n,
          params: a,
          activeIndex: r,
          realIndex: l,
          snapIndex: o,
        } = t;
      let c,
        d = e;
      if (void 0 === d) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (d = e)
              : s >= i[e] && s < i[e + 1] && (d = e + 1)
            : s >= i[e] && (d = e);
        a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }
      if (n.indexOf(s) >= 0) c = n.indexOf(s);
      else {
        const e = Math.min(a.slidesPerGroupSkip, d);
        c = e + Math.floor((d - e) / a.slidesPerGroup);
      }
      if ((c >= n.length && (c = n.length - 1), d === r))
        return void (c !== o && ((t.snapIndex = c), t.emit("snapIndexChange")));
      const h = parseInt(
        t.slides.eq(d).attr("data-swiper-slide-index") || d,
        10
      );
      Object.assign(t, {
        snapIndex: c,
        realIndex: h,
        previousIndex: r,
        activeIndex: d,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        l !== h && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = St(e).closest(`.${s.slideClass}`)[0];
      let n,
        a = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (a = !0), (n = e);
            break;
          }
      if (!i || !a)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              St(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const Bt = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let a = xt(n[0], e);
      return s && (a = -a), a || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: i,
          params: n,
          $wrapperEl: a,
          wrapperEl: r,
          progress: l,
        } = s;
      let o,
        c = 0,
        d = 0;
      s.isHorizontal() ? (c = i ? -e : e) : (d = e),
        n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
        n.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -c
              : -d)
          : n.virtualTranslate ||
            a.transform(`translate3d(${c}px, ${d}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? c : d);
      const h = s.maxTranslate() - s.minTranslate();
      (o = 0 === h ? 0 : (e - s.minTranslate()) / h),
        o !== l && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
      const a = this,
        { params: r, wrapperEl: l } = a;
      if (a.animating && r.preventInteractionOnTransition) return !1;
      const o = a.minTranslate(),
        c = a.maxTranslate();
      let d;
      if (
        ((d = i && e > o ? o : i && e < c ? c : e),
        a.updateProgress(d),
        r.cssMode)
      ) {
        const e = a.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!a.support.smoothScroll)
            return (
              Lt({ swiper: a, targetPosition: -d, side: e ? "left" : "top" }),
              !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (a.setTransition(0),
            a.setTranslate(d),
            s &&
              (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd")))
          : (a.setTransition(t),
            a.setTranslate(d),
            s &&
              (a.emit("beforeTransitionStart", t, n),
              a.emit("transitionStart")),
            a.animating ||
              ((a.animating = !0),
              a.onTranslateToWrapperTransitionEnd ||
                (a.onTranslateToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    (a.onTranslateToWrapperTransitionEnd = null),
                    delete a.onTranslateToWrapperTransitionEnd,
                    s && a.emit("transitionEnd"));
                }),
              a.$wrapperEl[0].addEventListener(
                "transitionend",
                a.onTranslateToWrapperTransitionEnd
              ),
              a.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                a.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function Vt({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: n, previousIndex: a } = e;
    let r = s;
    if (
      (r || (r = n > a ? "next" : n < a ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && n !== a)
    ) {
      if ("reset" === r) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === r
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const Wt = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
      if ("number" != typeof e && "string" != typeof e)
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const a = this;
      let r = e;
      r < 0 && (r = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: h,
        rtlTranslate: u,
        wrapperEl: p,
        enabled: f,
      } = a;
      if ((a.animating && l.preventInteractionOnTransition) || (!f && !i && !n))
        return !1;
      const m = Math.min(a.params.slidesPerGroupSkip, r);
      let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1),
        (h || l.initialSlide || 0) === (d || 0) &&
          s &&
          a.emit("beforeSlideChangeStart");
      const v = -o[g];
      if ((a.updateProgress(v), l.normalizeSlideIndex))
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * c[e]),
            i = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (r = e)
              : t >= s && t < i && (r = e + 1)
            : t >= s && (r = e);
        }
      if (a.initialized && r !== h) {
        if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
          return !1;
        if (
          !a.allowSlidePrev &&
          v > a.translate &&
          v > a.maxTranslate() &&
          (h || 0) !== r
        )
          return !1;
      }
      let w;
      if (
        ((w = r > h ? "next" : r < h ? "prev" : "reset"),
        (u && -v === a.translate) || (!u && v === a.translate))
      )
        return (
          a.updateActiveIndex(r),
          l.autoHeight && a.updateAutoHeight(),
          a.updateSlidesClasses(),
          "slide" !== l.effect && a.setTranslate(v),
          "reset" !== w && (a.transitionStart(s, w), a.transitionEnd(s, w)),
          !1
        );
      if (l.cssMode) {
        const e = a.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = a.virtual && a.params.virtual.enabled;
          t &&
            ((a.wrapperEl.style.scrollSnapType = "none"),
            (a._immediateVirtual = !0)),
            (p[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (a.wrapperEl.style.scrollSnapType = ""),
                  (a._swiperImmediateVirtual = !1);
              });
        } else {
          if (!a.support.smoothScroll)
            return (
              Lt({ swiper: a, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          p.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        a.setTransition(t),
        a.setTranslate(v),
        a.updateActiveIndex(r),
        a.updateSlidesClasses(),
        a.emit("beforeTransitionStart", t, i),
        a.transitionStart(s, w),
        0 === t
          ? a.transitionEnd(s, w)
          : a.animating ||
            ((a.animating = !0),
            a.onSlideToWrapperTransitionEnd ||
              (a.onSlideToWrapperTransitionEnd = function (e) {
                a &&
                  !a.destroyed &&
                  e.target === this &&
                  (a.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  (a.onSlideToWrapperTransitionEnd = null),
                  delete a.onSlideToWrapperTransitionEnd,
                  a.transitionEnd(s, w));
              }),
            a.$wrapperEl[0].addEventListener(
              "transitionend",
              a.onSlideToWrapperTransitionEnd
            ),
            a.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              a.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
      const n = this;
      let a = e;
      return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, s, i);
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const i = this,
        { animating: n, enabled: a, params: r } = i;
      if (!a) return i;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l;
      if (r.loop) {
        if (n && r.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return r.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const i = this,
        {
          params: n,
          animating: a,
          snapGrid: r,
          slidesGrid: l,
          rtlTranslate: o,
          enabled: c,
        } = i;
      if (!c) return i;
      if (n.loop) {
        if (a && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const h = d(o ? i.translate : -i.translate),
        u = r.map((e) => d(e));
      let p = r[u.indexOf(h) - 1];
      if (void 0 === p && n.cssMode) {
        let e;
        r.forEach((t, s) => {
          h >= t && (e = s);
        }),
          void 0 !== e && (p = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      return (
        void 0 !== p &&
          ((f = l.indexOf(p)),
          f < 0 && (f = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        n.rewind && i.isBeginning
          ? i.slideTo(i.slides.length - 1, e, t, s)
          : i.slideTo(f, e, t, s)
      );
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
      const n = this;
      let a = n.activeIndex;
      const r = Math.min(n.params.slidesPerGroupSkip, a),
        l = r + Math.floor((a - r) / n.params.slidesPerGroup),
        o = n.rtlTranslate ? n.translate : -n.translate;
      if (o >= n.snapGrid[l]) {
        const e = n.snapGrid[l];
        o - e > (n.snapGrid[l + 1] - e) * i && (a += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[l - 1];
        o - e <= (n.snapGrid[l] - e) * i && (a -= n.params.slidesPerGroup);
      }
      return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, n.slidesGrid.length - 1)),
        n.slideTo(a, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        a = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(St(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? a < e.loopedSlides - i / 2 ||
              a > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (a = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                Ct(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a)
            : a > e.slides.length - i
            ? (e.loopFix(),
              (a = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Ct(() => {
                e.slideTo(a);
              }))
            : e.slideTo(a);
      } else e.slideTo(a);
    },
  };
  const Ft = {
    loopCreate: function () {
      const e = this,
        t = ht(),
        { params: s, $wrapperEl: i } = e,
        n = i.children().length > 0 ? St(i.children()[0].parentNode) : i;
      n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let a = n.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (a.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = St(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            n.append(e);
          }
          a = n.children(`.${s.slideClass}`);
        }
      }
      "auto" !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = a.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > a.length && (e.loopedSlides = a.length);
      const r = [],
        l = [];
      a.each((t, s) => {
        const i = St(t);
        s < e.loopedSlides && l.push(t),
          s < a.length && s >= a.length - e.loopedSlides && r.push(t),
          i.attr("data-swiper-slide-index", s);
      });
      for (let e = 0; e < l.length; e += 1)
        n.append(St(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = r.length - 1; e >= 0; e -= 1)
        n.prepend(St(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: a,
        snapGrid: r,
        rtlTranslate: l,
      } = e;
      let o;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const c = -r[t] - e.getTranslate();
      if (t < i) {
        (o = s.length - 3 * i + t), (o += i);
        e.slideTo(o, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((l ? -e.translate : e.translate) - c);
      } else if (t >= s.length - i) {
        (o = -s.length + t + i), (o += i);
        e.slideTo(o, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((l ? -e.translate : e.translate) - c);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = a), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr("data-swiper-slide-index");
    },
  };
  function zt(e) {
    const t = this,
      s = ht(),
      i = pt(),
      n = t.touchEventsData,
      { params: a, touches: r, enabled: l } = t;
    if (!l) return;
    if (t.animating && a.preventInteractionOnTransition) return;
    !t.animating && a.cssMode && a.loop && t.loopFix();
    let o = e;
    o.originalEvent && (o = o.originalEvent);
    let c = St(o.target);
    if ("wrapper" === a.touchEventsTarget && !c.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === o.type),
      !n.isTouchEvent && "which" in o && 3 === o.which)
    )
      return;
    if (!n.isTouchEvent && "button" in o && o.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!a.noSwipingClass &&
      "" !== a.noSwipingClass &&
      o.target &&
      o.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (c = St(e.path[0]));
    const d = a.noSwipingSelector
        ? a.noSwipingSelector
        : `.${a.noSwipingClass}`,
      h = !(!o.target || !o.target.shadowRoot);
    if (
      a.noSwiping &&
      (h
        ? (function (e, t = this) {
            return (function t(s) {
              return s && s !== ht() && s !== pt()
                ? (s.assignedSlot && (s = s.assignedSlot),
                  s.closest(e) || t(s.getRootNode().host))
                : null;
            })(t);
          })(d, o.target)
        : c.closest(d)[0])
    )
      return void (t.allowClick = !0);
    if (a.swipeHandler && !c.closest(a.swipeHandler)[0]) return;
    (r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
      (r.currentY =
        "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
    const u = r.currentX,
      p = r.currentY,
      f = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
      m = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
    if (f && (u <= m || u >= i.innerWidth - m)) {
      if ("prevent" !== f) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (r.startX = u),
      (r.startY = p),
      (n.touchStartTime = Et()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      a.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== o.type)
    ) {
      let e = !0;
      c.is(n.focusableElements) && (e = !1),
        s.activeElement &&
          St(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== c[0] &&
          s.activeElement.blur();
      const i = e && t.allowTouchMove && a.touchStartPreventDefault;
      (!a.touchStartForcePreventDefault && !i) ||
        c[0].isContentEditable ||
        o.preventDefault();
    }
    t.emit("touchStart", o);
  }
  function jt(e) {
    const t = ht(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: a, rtlTranslate: r, enabled: l } = s;
    if (!l) return;
    let o = e;
    if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", o)
      );
    if (i.isTouchEvent && "touchmove" !== o.type) return;
    const c =
        "touchmove" === o.type &&
        o.targetTouches &&
        (o.targetTouches[0] || o.changedTouches[0]),
      d = "touchmove" === o.type ? c.pageX : o.pageX,
      h = "touchmove" === o.type ? c.pageY : o.pageY;
    if (o.preventedByNestedSwiper) return (a.startX = d), void (a.startY = h);
    if (!s.allowTouchMove)
      return (
        (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(a, { startX: d, startY: h, currentX: d, currentY: h }),
          (i.touchStartTime = Et()))
        )
      );
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (h < a.startY && s.translate <= s.maxTranslate()) ||
          (h > a.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (d < a.startX && s.translate <= s.maxTranslate()) ||
        (d > a.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      o.target === t.activeElement &&
      St(o.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", o),
      o.targetTouches && o.targetTouches.length > 1)
    )
      return;
    (a.currentX = d), (a.currentY = h);
    const u = a.currentX - a.startX,
      p = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(u ** 2 + p ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && a.currentY === a.startY) ||
      (s.isVertical() && a.currentX === a.startX)
        ? (i.isScrolling = !1)
        : u * u + p * p >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(p), Math.abs(u))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", o),
      void 0 === i.startMoving &&
        ((a.currentX === a.startX && a.currentY === a.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && o.cancelable && o.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && o.stopPropagation(),
      i.isMoved ||
        (n.loop && !n.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", o)),
      s.emit("sliderMove", o),
      (i.isMoved = !0);
    let f = s.isHorizontal() ? u : p;
    (a.diff = f),
      (f *= n.touchRatio),
      r && (f = -f),
      (s.swipeDirection = f > 0 ? "prev" : "next"),
      (i.currentTranslate = f + i.startTranslate);
    let m = !0,
      g = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (g = 0),
      f > 0 && i.currentTranslate > s.minTranslate()
        ? ((m = !1),
          n.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + f) ** g))
        : f < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((m = !1),
          n.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - f) ** g)),
      m && (o.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(f) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (i.currentTranslate = i.startTranslate),
          void (a.diff = s.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function Ht(e) {
    const t = this,
      s = t.touchEventsData,
      { params: i, touches: n, rtlTranslate: a, slidesGrid: r, enabled: l } = t;
    if (!l) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = Et(),
      d = c - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target),
        t.emit("tap click", o),
        d < 300 &&
          c - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", o);
    }
    if (
      ((s.lastClickTime = Et()),
      Ct(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (h = i.followFinger
        ? a
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let u = 0,
      p = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < r.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== r[e + t]
        ? h >= r[e] && h < r[e + t] && ((u = e), (p = r[e + t] - r[e]))
        : h >= r[e] && ((u = e), (p = r[r.length - 1] - r[r.length - 2]));
    }
    const f = (h - r[u]) / p,
      m = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (d > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (f >= i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (f > 1 - i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(u + m)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(u + m),
          "prev" === t.swipeDirection && t.slideTo(u));
    }
  }
  function qt() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }
  function Gt(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function Yt() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const a = e.maxTranslate() - e.minTranslate();
    (n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let Rt = !1;
  function Xt() {}
  const Kt = (e, t) => {
    const s = ht(),
      {
        params: i,
        touchEvents: n,
        el: a,
        wrapperEl: r,
        device: l,
        support: o,
      } = e,
      c = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      h = t;
    if (o.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !o.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      a[d](n.start, e.onTouchStart, t),
        a[d](
          n.move,
          e.onTouchMove,
          o.passiveListener ? { passive: !1, capture: c } : c
        ),
        a[d](n.end, e.onTouchEnd, t),
        n.cancel && a[d](n.cancel, e.onTouchEnd, t);
    } else
      a[d](n.start, e.onTouchStart, !1),
        s[d](n.move, e.onTouchMove, c),
        s[d](n.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      a[d]("click", e.onClick, !0),
      i.cssMode && r[d]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[h](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            qt,
            !0
          )
        : e[h]("observerUpdate", qt, !0);
  };
  const Ut = {
      attachEvents: function () {
        const e = this,
          t = ht(),
          { params: s, support: i } = e;
        (e.onTouchStart = zt.bind(e)),
          (e.onTouchMove = jt.bind(e)),
          (e.onTouchEnd = Ht.bind(e)),
          s.cssMode && (e.onScroll = Yt.bind(e)),
          (e.onClick = Gt.bind(e)),
          i.touch && !Rt && (t.addEventListener("touchstart", Xt), (Rt = !0)),
          Kt(e, "on");
      },
      detachEvents: function () {
        Kt(this, "off");
      },
    },
    Jt = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const Zt = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: s,
          loopedSlides: i = 0,
          params: n,
          $el: a,
        } = e,
        r = n.breakpoints;
      if (!r || (r && 0 === Object.keys(r).length)) return;
      const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
      if (!l || e.currentBreakpoint === l) return;
      const o = (l in r ? r[l] : void 0) || e.originalParams,
        c = Jt(e, n),
        d = Jt(e, o),
        h = n.enabled;
      c && !d
        ? (a.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !c &&
          d &&
          (a.addClass(`${n.containerModifierClass}grid`),
          ((o.grid.fill && "column" === o.grid.fill) ||
            (!o.grid.fill && "column" === n.grid.fill)) &&
            a.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const u = o.direction && o.direction !== n.direction,
        p = n.loop && (o.slidesPerView !== n.slidesPerView || u);
      u && s && e.changeDirection(), kt(e.params, o);
      const f = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        h && !f ? e.disable() : !h && f && e.enable(),
        (e.currentBreakpoint = l),
        e.emit("_beforeBreakpoint", o),
        p &&
          s &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", o);
    },
    getBreakpoint: function (e, t = "window", s) {
      if (!e || ("container" === t && !s)) return;
      let i = !1;
      const n = pt(),
        a = "window" === t ? n.innerHeight : s.clientHeight,
        r = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: a * t, point: e };
          }
          return { value: e, point: e };
        });
      r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < r.length; e += 1) {
        const { point: a, value: l } = r[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = a)
          : l <= s.clientWidth && (i = a);
      }
      return i || "max";
    },
  };
  const Qt = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: i, $el: n, device: a, support: r } = e,
        l = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && s.push(t + i);
                  })
                : "string" == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            "initialized",
            s.direction,
            { "pointer-events": !r.touch },
            { "free-mode": e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: i },
            { grid: s.grid && s.grid.rows > 1 },
            {
              "grid-column":
                s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
            },
            { android: a.android },
            { ios: a.ios },
            { "css-mode": s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
          ],
          s.containerModifierClass
        );
      t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const es = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function ts(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              kt(t, s))
            : kt(t, s))
        : kt(t, s);
    };
  }
  const ss = {
      eventsEmitter: It,
      update: Nt,
      translate: Bt,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            Vt({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              Vt({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: Wt,
      loop: Ft,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"),
            (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: Ut,
      breakpoints: Zt,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: Qt,
      images: {
        loadImage: function (e, t, s, i, n, a) {
          const r = pt();
          let l;
          function o() {
            a && a();
          }
          St(e).parent("picture")[0] || (e.complete && n)
            ? o()
            : t
            ? ((l = new r.Image()),
              (l.onload = o),
              (l.onerror = o),
              i && (l.sizes = i),
              s && (l.srcset = s),
              t && (l.src = t))
            : o();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const i = e.imagesToLoad[s];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    is = {};
  class ns {
    constructor(...e) {
      let t, s;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
        s || (s = {}),
        (s = kt({}, s)),
        t && !s.el && (s.el = t),
        s.el && St(s.el).length > 1)
      ) {
        const e = [];
        return (
          St(s.el).each((t) => {
            const i = kt({}, s, { el: t });
            e.push(new ns(i));
          }),
          e
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = _t()),
        (i.device = $t({ userAgent: s.userAgent })),
        (i.browser = Pt()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
      const n = {};
      i.modules.forEach((e) => {
        e({
          swiper: i,
          extendParams: ts(s, n),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const a = kt({}, es, n);
      return (
        (i.params = kt({}, a, is, s)),
        (i.originalParams = kt({}, i.params)),
        (i.passedParams = kt({}, s)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((e) => {
            i.on(e, i.params.on[e]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = St),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: t,
          classNames: [],
          slides: St(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (i.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              i.support.touch || !i.params.simulateTouch
                ? i.touchEventsTouch
                : i.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: i.params.focusableElements,
            lastClickTime: Et(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit("_swiper"),
        i.params.init && i.init(),
        i
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: a,
        size: r,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = i[l].swiperSlideSize;
        for (let s = l + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < i.length; e += 1) {
          (t ? n[e] + a[e] - n[l] < r : n[e] - n[l] < r) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          n[l] - n[e] < r && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || i()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${i}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = St(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = St(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = ht().createElement("div");
        (n = St(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: i, $el: n, $wrapperEl: a, slides: r } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttr("style"),
            a.removeAttr("style"),
            r &&
              r.length &&
              r
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      kt(is, e);
    }
    static get extendedDefaults() {
      return is;
    }
    static get defaults() {
      return es;
    }
    static installModule(e) {
      ns.prototype.__modules__ || (ns.prototype.__modules__ = []);
      const t = ns.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ns.installModule(e)), ns)
        : (ns.installModule(e), ns);
    }
  }
  Object.keys(ss).forEach((e) => {
    Object.keys(ss[e]).forEach((t) => {
      ns.prototype[t] = ss[e][t];
    });
  }),
    ns.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = pt();
        let n = null;
        const a = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          r = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                const { width: s, height: i } = e;
                let n = s,
                  r = i;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: s, target: i }) => {
                    (i && i !== e.el) ||
                      ((n = s ? s.width : (t[0] || t).inlineSize),
                      (r = s ? s.height : (t[0] || t).blockSize));
                  }
                ),
                  (n === s && r === i) || a();
              })),
              n.observe(e.el))
            : (i.addEventListener("resize", a),
              i.addEventListener("orientationchange", r));
        }),
          t("destroy", () => {
            n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              i.removeEventListener("resize", a),
              i.removeEventListener("orientationchange", r);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const n = [],
          a = pt(),
          r = (e, t = {}) => {
            const s = new (a.MutationObserver || a.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                  i("observerUpdate", e[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(t)
                  : a.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(s);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) r(t[e]);
              }
              r(e.$el[0], { childList: e.params.observeSlideChildren }),
                r(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const as = ns;
  function rs() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    rs(),
      document.querySelector(".account__slider") &&
        new as(".account__slider", {
          slidesPerView: "auto",
          spaceBetween: 7,
          on: {},
        });
  });
  e.watcher = new (class {
    constructor(e) {
      (this.config = Object.assign({ logging: !0 }, e)),
        this.observer,
        !document.documentElement.classList.contains("watcher") &&
          this.scrollWatcherRun();
    }
    scrollWatcherUpdate() {
      this.scrollWatcherRun();
    }
    scrollWatcherRun() {
      document.documentElement.classList.add("watcher"),
        this.scrollWatcherConstructor(
          document.querySelectorAll("[data-watch]")
        );
    }
    scrollWatcherConstructor(e) {
      if (e.length) {
        this.scrollWatcherLogging(
          `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
        ),
          o(
            Array.from(e).map(function (e) {
              return `${
                e.dataset.watchRoot ? e.dataset.watchRoot : null
              }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
            })
          ).forEach((t) => {
            let s = t.split("|"),
              i = { root: s[0], margin: s[1], threshold: s[2] },
              n = Array.from(e).filter(function (e) {
                let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                  s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                  n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                if (
                  String(t) === i.root &&
                  String(s) === i.margin &&
                  String(n) === i.threshold
                )
                  return e;
              }),
              a = this.getScrollWatcherConfig(i);
            this.scrollWatcherInit(n, a);
          });
      } else
        this.scrollWatcherLogging("????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz");
    }
    getScrollWatcherConfig(e) {
      let t = {};
      if (
        (document.querySelector(e.root)
          ? (t.root = document.querySelector(e.root))
          : "null" !== e.root &&
            this.scrollWatcherLogging(
              `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
            ),
        (t.rootMargin = e.margin),
        !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
      ) {
        if ("prx" === e.threshold) {
          e.threshold = [];
          for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
        } else e.threshold = e.threshold.split(",");
        return (t.threshold = e.threshold), t;
      }
      this.scrollWatcherLogging(
        "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
      );
    }
    scrollWatcherCreate(e) {
      this.observer = new IntersectionObserver((e, t) => {
        e.forEach((e) => {
          this.scrollWatcherCallback(e, t);
        });
      }, e);
    }
    scrollWatcherInit(e, t) {
      this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
    }
    scrollWatcherIntersecting(e, t) {
      e.isIntersecting
        ? (!t.classList.contains("_watcher-view") &&
            t.classList.add("_watcher-view"),
          this.scrollWatcherLogging(
            `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
          ))
        : (t.classList.contains("_watcher-view") &&
            t.classList.remove("_watcher-view"),
          this.scrollWatcherLogging(
            `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
          ));
    }
    scrollWatcherOff(e, t) {
      t.unobserve(e),
        this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
    }
    scrollWatcherLogging(e) {
      this.config.logging && l(`[??????????????????????]: ${e}`);
    }
    scrollWatcherCallback(e, t) {
      const s = e.target;
      this.scrollWatcherIntersecting(e, s),
        s.hasAttribute("data-watch-once") &&
          e.isIntersecting &&
          this.scrollWatcherOff(s, t),
        document.dispatchEvent(
          new CustomEvent("watcherCallback", { detail: { entry: e } })
        );
    }
  })({});
  let ls = !1;
  function os(e) {
    this.type = e;
  }
  setTimeout(() => {
    if (ls) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (os.prototype.init = function () {
      const e = this;
      (this.??bjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.??bjects.push(i);
      }
      this.arraySort(this.??bjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.??bjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          n = window.matchMedia(i[0]),
          a = i[1],
          r = Array.prototype.filter.call(this.??bjects, function (e) {
            return e.breakpoint === a;
          });
        n.addListener(function () {
          e.mediaHandler(n, r);
        }),
          this.mediaHandler(n, r);
      }
    }),
    (os.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          (s.index = this.indexInParent(s.parent, s.element)),
            this.moveTo(s.place, s.element, s.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const s = t[e];
          s.element.classList.contains(this.daClassname) &&
            this.moveBack(s.parent, s.element, s.index);
        }
    }),
    (os.prototype.moveTo = function (e, t, s) {
      t.classList.add(this.daClassname),
        "last" === e || e >= s.children.length
          ? s.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? s.children[e].insertAdjacentElement("beforebegin", t)
          : s.insertAdjacentElement("afterbegin", t);
    }),
    (os.prototype.moveBack = function (e, t, s) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[s]
          ? e.children[s].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (os.prototype.indexInParent = function (e, t) {
      const s = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(s, t);
    }),
    (os.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new os("max").init(),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".menu__icon");
      e &&
        e.addEventListener("click", function (e) {
          n &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? a(e) : r(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const s = Array.from(e).filter(function (e, t, s) {
          return !e.dataset.spollers.split(",")[0];
        });
        s.length && a(s);
        let n = c(e, "spollers");
        function a(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  r(e),
                  e.addEventListener("click", l))
                : (e.classList.remove("_spoller-init"),
                  r(e, !1),
                  e.removeEventListener("click", l));
          });
        }
        function r(e, t = !0) {
          let s = e.querySelectorAll("[data-spoller]");
          s.length &&
            ((s = Array.from(s).filter(
              (t) => t.closest("[data-spollers]") === e
            )),
            s.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            }));
        }
        function l(e) {
          const t = e.target;
          if (t.closest("[data-spoller]")) {
            const s = t.closest("[data-spoller]"),
              n = s.closest("[data-spollers]"),
              a = !!n.hasAttribute("data-one-spoller");
            n.querySelectorAll("._slide").length ||
              (a && !s.classList.contains("_spoller-active") && o(n),
              s.classList.toggle("_spoller-active"),
              i(s.nextElementSibling, 500)),
              e.preventDefault();
          }
        }
        function o(e) {
          const s = e.querySelector("[data-spoller]._spoller-active");
          s &&
            (s.classList.remove("_spoller-active"),
            t(s.nextElementSibling, 500));
        }
        n &&
          n.length &&
          n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              a(e.itemsArray, e.matchMedia);
            }),
              a(e.itemsArray, e.matchMedia);
          });
      }
    })(),
    (function (t) {
      e.popup && e.popup.open("some");
      const s = document.forms;
      if (s.length)
        for (const e of s)
          e.addEventListener("submit", function (e) {
            i(e.target, e);
          }),
            e.addEventListener("reset", function (e) {
              const t = e.target;
              lt.formClean(t);
            });
      async function i(e, s) {
        if (0 === (t ? lt.getErrors(e) : 0)) {
          s.preventDefault();
          const t = new FormData(e);
          (tt = t.get("callsign")),
            (st = t.get("name")),
            (it = t.get("surname")),
            (nt = t.get("born")),
            (at = t.get("city")),
            tt && localStorage.setItem("profile-callsign", tt),
            st && localStorage.setItem("profile-name", st),
            it && localStorage.setItem("profile-surname", it),
            nt && localStorage.setItem("profile-born", nt),
            at && localStorage.setItem("profile-city", at),
            console.log("born: " + nt),
            console.log(
              "localStorage: " + localStorage.getItem("profile-born")
            ),
            (function (e) {
              Ke.forEach((e) => {
                e.classList.remove("_dirty");
              }),
                setTimeout(() => {
                  Je &&
                    (Je.classList.add("_show"),
                    setTimeout(() => Je.classList.remove("_show"), 1e3));
                }, 0),
                lt.formClean(e);
            })(e);
        } else {
          s.preventDefault();
          e.querySelector("._form-error");
        }
      }
    })(!0),
    (function () {
      ls = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        i = e.dataset.scroll ? e.dataset.scroll : 1;
      let n,
        a = 0;
      document.addEventListener("windowScroll", function (r) {
        const l = window.scrollY;
        clearTimeout(n),
          l >= i
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (l > a
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (n = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, s))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (a = l <= 0 ? 0 : l);
      });
    })();
})();
