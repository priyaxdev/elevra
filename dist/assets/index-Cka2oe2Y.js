function B1(d, E) {
  for (var x = 0; x < E.length; x++) {
    const o = E[x];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const N in o)
        if (N !== "default" && !(N in d)) {
          const M = Object.getOwnPropertyDescriptor(o, N);
          M &&
            Object.defineProperty(
              d,
              N,
              M.get ? M : { enumerable: !0, get: () => o[N] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const E = document.createElement("link").relList;
  if (E && E.supports && E.supports("modulepreload")) return;
  for (const N of document.querySelectorAll('link[rel="modulepreload"]')) o(N);
  new MutationObserver((N) => {
    for (const M of N)
      if (M.type === "childList")
        for (const V of M.addedNodes)
          V.tagName === "LINK" && V.rel === "modulepreload" && o(V);
  }).observe(document, { childList: !0, subtree: !0 });
  function x(N) {
    const M = {};
    return (
      N.integrity && (M.integrity = N.integrity),
      N.referrerPolicy && (M.referrerPolicy = N.referrerPolicy),
      N.crossOrigin === "use-credentials"
        ? (M.credentials = "include")
        : N.crossOrigin === "anonymous"
          ? (M.credentials = "omit")
          : (M.credentials = "same-origin"),
      M
    );
  }
  function o(N) {
    if (N.ep) return;
    N.ep = !0;
    const M = x(N);
    fetch(N.href, M);
  }
})();
function A0(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default")
    ? d.default
    : d;
}
var Ns = { exports: {} },
  on = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0;
function Y1() {
  if (r0) return on;
  r0 = 1;
  var d = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.fragment");
  function x(o, N, M) {
    var V = null;
    if (
      (M !== void 0 && (V = "" + M),
      N.key !== void 0 && (V = "" + N.key),
      "key" in N)
    ) {
      M = {};
      for (var X in N) X !== "key" && (M[X] = N[X]);
    } else M = N;
    return (
      (N = M.ref),
      { $$typeof: d, type: o, key: V, ref: N !== void 0 ? N : null, props: M }
    );
  }
  return ((on.Fragment = E), (on.jsx = x), (on.jsxs = x), on);
}
var d0;
function G1() {
  return (d0 || ((d0 = 1), (Ns.exports = Y1())), Ns.exports);
}
var c = G1(),
  _s = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h0;
function Q1() {
  if (h0) return K;
  h0 = 1;
  var d = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    N = Symbol.for("react.profiler"),
    M = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    Y = Symbol.for("react.suspense"),
    J = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    T = Symbol.for("react.activity"),
    H = Symbol.for("react.view_transition"),
    jl = Symbol.iterator;
  function Ul(h) {
    return h === null || typeof h != "object"
      ? null
      : ((h = (jl && h[jl]) || h["@@iterator"]),
        typeof h == "function" ? h : null);
  }
  var Sl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    G = Object.assign,
    pl = {};
  function zl(h, j, q) {
    ((this.props = h),
      (this.context = j),
      (this.refs = pl),
      (this.updater = q || Sl));
  }
  ((zl.prototype.isReactComponent = {}),
    (zl.prototype.setState = function (h, j) {
      if (typeof h != "object" && typeof h != "function" && h != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, h, j, "setState");
    }),
    (zl.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    }));
  function Ut() {}
  Ut.prototype = zl.prototype;
  function $l(h, j, q) {
    ((this.props = h),
      (this.context = j),
      (this.refs = pl),
      (this.updater = q || Sl));
  }
  var et = ($l.prototype = new Ut());
  ((et.constructor = $l), G(et, zl.prototype), (et.isPureReactComponent = !0));
  var st = Array.isArray;
  function $() {}
  var il = { H: null, A: null, T: null, S: null },
    Vt = Object.prototype.hasOwnProperty;
  function pt(h, j, q) {
    var B = q.ref;
    return {
      $$typeof: d,
      type: h,
      key: j,
      ref: B !== void 0 ? B : null,
      props: q,
    };
  }
  function zt(h, j) {
    return pt(h.type, j, h.props);
  }
  function ot(h) {
    return typeof h == "object" && h !== null && h.$$typeof === d;
  }
  function be(h) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      h.replace(/[=:]/g, function (q) {
        return j[q];
      })
    );
  }
  var We = /\/+/g;
  function Bl(h, j) {
    return typeof h == "object" && h !== null && h.key != null
      ? be("" + h.key)
      : j.toString(36);
  }
  function O(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (
          (typeof h.status == "string"
            ? h.then($, $)
            : ((h.status = "pending"),
              h.then(
                function (j) {
                  h.status === "pending" &&
                    ((h.status = "fulfilled"), (h.value = j));
                },
                function (j) {
                  h.status === "pending" &&
                    ((h.status = "rejected"), (h.reason = j));
                },
              )),
          h.status)
        ) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function w(h, j, q, B, al) {
    var ul = typeof h;
    (ul === "undefined" || ul === "boolean") && (h = null);
    var cl = !1;
    if (h === null) cl = !0;
    else
      switch (ul) {
        case "bigint":
        case "string":
        case "number":
          cl = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case d:
            case E:
              cl = !0;
              break;
            case C:
              return ((cl = h._init), w(cl(h._payload), j, q, B, al));
          }
      }
    if (cl)
      return (
        (al = al(h)),
        (cl = B === "" ? "." + Bl(h, 0) : B),
        st(al)
          ? ((q = ""),
            cl != null && (q = cl.replace(We, "$&/") + "/"),
            w(al, j, q, "", function (ae) {
              return ae;
            }))
          : al != null &&
            (ot(al) &&
              (al = zt(
                al,
                q +
                  (al.key == null || (h && h.key === al.key)
                    ? ""
                    : ("" + al.key).replace(We, "$&/") + "/") +
                  cl,
              )),
            j.push(al)),
        1
      );
    cl = 0;
    var R = B === "" ? "." : B + ":";
    if (st(h))
      for (var Z = 0; Z < h.length; Z++)
        ((B = h[Z]), (ul = R + Bl(B, Z)), (cl += w(B, j, q, ul, al)));
    else if (((Z = Ul(h)), typeof Z == "function"))
      for (h = Z.call(h), Z = 0; !(B = h.next()).done; )
        ((B = B.value), (ul = R + Bl(B, Z++)), (cl += w(B, j, q, ul, al)));
    else if (ul === "object") {
      if (typeof h.then == "function") return w(O(h), j, q, B, al);
      throw (
        (j = String(h)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(h).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return cl;
  }
  function L(h, j, q) {
    if (h == null) return h;
    var B = [],
      al = 0;
    return (
      w(h, B, "", "", function (ul) {
        return j.call(q, ul, al++);
      }),
      B
    );
  }
  function yl(h) {
    if (h._status === -1) {
      var j = h._result,
        q = j();
      (q.then(
        function (B) {
          (h._status === 0 || h._status === -1) &&
            ((h._status = 1),
            (h._result = B),
            q.status === void 0 && ((q.status = "fulfilled"), (q.value = B)));
        },
        function (B) {
          (h._status === 0 || h._status === -1) &&
            ((h._status = 2),
            (h._result = B),
            q.status === void 0 && ((q.status = "rejected"), (q.reason = B)));
        },
      ),
        h._status === -1 && ((h._status = 0), (h._result = q)));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var sl =
    typeof reportError == "function"
      ? reportError
      : function (h) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var j = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof h == "object" &&
                h !== null &&
                typeof h.message == "string"
                  ? String(h.message)
                  : String(h),
              error: h,
            });
            if (!window.dispatchEvent(j)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", h);
            return;
          }
          console.error(h);
        };
  function Ht(h) {
    var j = il.T,
      q = {};
    ((q.types = j !== null ? j.types : null), (il.T = q));
    try {
      var B = h(),
        al = il.S;
      (al !== null && al(q, B),
        typeof B == "object" &&
          B !== null &&
          typeof B.then == "function" &&
          B.then($, sl));
    } catch (ul) {
      sl(ul);
    } finally {
      (j !== null && q.types !== null && (j.types = q.types), (il.T = j));
    }
  }
  function ee(h) {
    var j = il.T;
    if (j !== null) {
      var q = j.types;
      q === null ? (j.types = [h]) : q.indexOf(h) === -1 && q.push(h);
    } else Ht(ee.bind(null, h));
  }
  var $e = {
    map: L,
    forEach: function (h, j, q) {
      L(
        h,
        function () {
          j.apply(this, arguments);
        },
        q,
      );
    },
    count: function (h) {
      var j = 0;
      return (
        L(h, function () {
          j++;
        }),
        j
      );
    },
    toArray: function (h) {
      return (
        L(h, function (j) {
          return j;
        }) || []
      );
    },
    only: function (h) {
      if (!ot(h))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return h;
    },
  };
  return (
    (K.Activity = T),
    (K.Children = $e),
    (K.Component = zl),
    (K.Fragment = x),
    (K.Profiler = N),
    (K.PureComponent = $l),
    (K.StrictMode = o),
    (K.Suspense = Y),
    (K.ViewTransition = H),
    (K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = il),
    (K.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (h) {
        return il.H.useMemoCache(h);
      },
    }),
    (K.addTransitionType = ee),
    (K.cache = function (h) {
      return function () {
        return h.apply(null, arguments);
      };
    }),
    (K.cacheSignal = function () {
      return null;
    }),
    (K.cloneElement = function (h, j, q) {
      if (h == null)
        throw Error(
          "The argument must be a React element, but you passed " + h + ".",
        );
      var B = G({}, h.props),
        al = h.key;
      if (j != null)
        for (ul in (j.key !== void 0 && (al = "" + j.key), j))
          !Vt.call(j, ul) ||
            ul === "key" ||
            ul === "__self" ||
            ul === "__source" ||
            (ul === "ref" && j.ref === void 0) ||
            (B[ul] = j[ul]);
      var ul = arguments.length - 2;
      if (ul === 1) B.children = q;
      else if (1 < ul) {
        for (var cl = Array(ul), R = 0; R < ul; R++) cl[R] = arguments[R + 2];
        B.children = cl;
      }
      return pt(h.type, al, B);
    }),
    (K.createContext = function (h) {
      return (
        (h = {
          $$typeof: V,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (h.Provider = h),
        (h.Consumer = { $$typeof: M, _context: h }),
        h
      );
    }),
    (K.createElement = function (h, j, q) {
      var B,
        al = {},
        ul = null;
      if (j != null)
        for (B in (j.key !== void 0 && (ul = "" + j.key), j))
          Vt.call(j, B) &&
            B !== "key" &&
            B !== "__self" &&
            B !== "__source" &&
            (al[B] = j[B]);
      var cl = arguments.length - 2;
      if (cl === 1) al.children = q;
      else if (1 < cl) {
        for (var R = Array(cl), Z = 0; Z < cl; Z++) R[Z] = arguments[Z + 2];
        al.children = R;
      }
      if (h && h.defaultProps)
        for (B in ((cl = h.defaultProps), cl))
          al[B] === void 0 && (al[B] = cl[B]);
      return pt(h, ul, al);
    }),
    (K.createRef = function () {
      return { current: null };
    }),
    (K.forwardRef = function (h) {
      return { $$typeof: X, render: h };
    }),
    (K.isValidElement = ot),
    (K.lazy = function (h) {
      return { $$typeof: C, _payload: { _status: -1, _result: h }, _init: yl };
    }),
    (K.memo = function (h, j) {
      return { $$typeof: J, type: h, compare: j === void 0 ? null : j };
    }),
    (K.startTransition = Ht),
    (K.unstable_useCacheRefresh = function () {
      return il.H.useCacheRefresh();
    }),
    (K.use = function (h) {
      return il.H.use(h);
    }),
    (K.useActionState = function (h, j, q) {
      return il.H.useActionState(h, j, q);
    }),
    (K.useCallback = function (h, j) {
      return il.H.useCallback(h, j);
    }),
    (K.useContext = function (h) {
      return il.H.useContext(h);
    }),
    (K.useDebugValue = function () {}),
    (K.useDeferredValue = function (h, j) {
      return il.H.useDeferredValue(h, j);
    }),
    (K.useEffect = function (h, j) {
      return il.H.useEffect(h, j);
    }),
    (K.useEffectEvent = function (h) {
      return il.H.useEffectEvent(h);
    }),
    (K.useId = function () {
      return il.H.useId();
    }),
    (K.useImperativeHandle = function (h, j, q) {
      return il.H.useImperativeHandle(h, j, q);
    }),
    (K.useInsertionEffect = function (h, j) {
      return il.H.useInsertionEffect(h, j);
    }),
    (K.useLayoutEffect = function (h, j) {
      return il.H.useLayoutEffect(h, j);
    }),
    (K.useMemo = function (h, j) {
      return il.H.useMemo(h, j);
    }),
    (K.useOptimistic = function (h, j) {
      return il.H.useOptimistic(h, j);
    }),
    (K.useReducer = function (h, j, q) {
      return il.H.useReducer(h, j, q);
    }),
    (K.useRef = function (h) {
      return il.H.useRef(h);
    }),
    (K.useState = function (h) {
      return il.H.useState(h);
    }),
    (K.useSyncExternalStore = function (h, j, q) {
      return il.H.useSyncExternalStore(h, j, q);
    }),
    (K.useTransition = function () {
      return il.H.useTransition();
    }),
    (K.version = "19.3.0"),
    K
  );
}
var m0;
function Bs() {
  return (m0 || ((m0 = 1), (_s.exports = Q1())), _s.exports);
}
var vl = Bs();
const C0 = A0(vl),
  X1 = B1({ __proto__: null, default: C0 }, [vl]);
var Os = { exports: {} },
  rn = {},
  As = { exports: {} },
  Cs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v0;
function V1() {
  return (
    v0 ||
      ((v0 = 1),
      (function (d) {
        function E(O, w) {
          var L = O.length;
          O.push(w);
          l: for (; 0 < L; ) {
            var yl = (L - 1) >>> 1,
              sl = O[yl];
            if (0 < N(sl, w)) ((O[yl] = w), (O[L] = sl), (L = yl));
            else break l;
          }
        }
        function x(O) {
          return O.length === 0 ? null : O[0];
        }
        function o(O) {
          if (O.length === 0) return null;
          var w = O[0],
            L = O.pop();
          if (L !== w) {
            O[0] = L;
            l: for (var yl = 0, sl = O.length, Ht = sl >>> 1; yl < Ht; ) {
              var ee = 2 * (yl + 1) - 1,
                $e = O[ee],
                h = ee + 1,
                j = O[h];
              if (0 > N($e, L))
                h < sl && 0 > N(j, $e)
                  ? ((O[yl] = j), (O[h] = L), (yl = h))
                  : ((O[yl] = $e), (O[ee] = L), (yl = ee));
              else if (h < sl && 0 > N(j, L))
                ((O[yl] = j), (O[h] = L), (yl = h));
              else break l;
            }
          }
          return w;
        }
        function N(O, w) {
          var L = O.sortIndex - w.sortIndex;
          return L !== 0 ? L : O.id - w.id;
        }
        if (
          ((d.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var M = performance;
          d.unstable_now = function () {
            return M.now();
          };
        } else {
          var V = Date,
            X = V.now();
          d.unstable_now = function () {
            return V.now() - X;
          };
        }
        var Y = [],
          J = [],
          C = 1,
          T = null,
          H = 3,
          jl = !1,
          Ul = !1,
          Sl = !1,
          G = !1,
          pl = typeof setTimeout == "function" ? setTimeout : null,
          zl = typeof clearTimeout == "function" ? clearTimeout : null,
          Ut = typeof setImmediate < "u" ? setImmediate : null;
        function $l(O) {
          for (var w = x(J); w !== null; ) {
            if (w.callback === null) o(J);
            else if (w.startTime <= O)
              (o(J), (w.sortIndex = w.expirationTime), E(Y, w));
            else break;
            w = x(J);
          }
        }
        function et(O) {
          if (((Sl = !1), $l(O), !Ul))
            if (x(Y) !== null) ((Ul = !0), st || ((st = !0), ot()));
            else {
              var w = x(J);
              w !== null && Bl(et, w.startTime - O);
            }
        }
        var st = !1,
          $ = -1,
          il = 5,
          Vt = -1;
        function pt() {
          return G ? !0 : !(d.unstable_now() - Vt < il);
        }
        function zt() {
          if (((G = !1), st)) {
            var O = d.unstable_now();
            Vt = O;
            var w = !0;
            try {
              l: {
                ((Ul = !1), Sl && ((Sl = !1), zl($), ($ = -1)), (jl = !0));
                var L = H;
                try {
                  t: {
                    for (
                      $l(O), T = x(Y);
                      T !== null && !(T.expirationTime > O && pt());
                    ) {
                      var yl = T.callback;
                      if (typeof yl == "function") {
                        ((T.callback = null), (H = T.priorityLevel));
                        var sl = yl(T.expirationTime <= O);
                        if (((O = d.unstable_now()), typeof sl == "function")) {
                          ((T.callback = sl), $l(O), (w = !0));
                          break t;
                        }
                        (T === x(Y) && o(Y), $l(O));
                      } else o(Y);
                      T = x(Y);
                    }
                    if (T !== null) w = !0;
                    else {
                      var Ht = x(J);
                      (Ht !== null && Bl(et, Ht.startTime - O), (w = !1));
                    }
                  }
                  break l;
                } finally {
                  ((T = null), (H = L), (jl = !1));
                }
                w = void 0;
              }
            } finally {
              w ? ot() : (st = !1);
            }
          }
        }
        var ot;
        if (typeof Ut == "function")
          ot = function () {
            Ut(zt);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            We = be.port2;
          ((be.port1.onmessage = zt),
            (ot = function () {
              We.postMessage(null);
            }));
        } else
          ot = function () {
            pl(zt, 0);
          };
        function Bl(O, w) {
          $ = pl(function () {
            O(d.unstable_now());
          }, w);
        }
        ((d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (d.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (il = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return H;
          }),
          (d.unstable_next = function (O) {
            switch (H) {
              case 1:
              case 2:
              case 3:
                var w = 3;
                break;
              default:
                w = H;
            }
            var L = H;
            H = w;
            try {
              return O();
            } finally {
              H = L;
            }
          }),
          (d.unstable_requestPaint = function () {
            G = !0;
          }),
          (d.unstable_runWithPriority = function (O, w) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var L = H;
            H = O;
            try {
              return w();
            } finally {
              H = L;
            }
          }),
          (d.unstable_scheduleCallback = function (O, w, L) {
            var yl = d.unstable_now();
            switch (
              (typeof L == "object" && L !== null
                ? ((L = L.delay),
                  (L = typeof L == "number" && 0 < L ? yl + L : yl))
                : (L = yl),
              O)
            ) {
              case 1:
                var sl = -1;
                break;
              case 2:
                sl = 250;
                break;
              case 5:
                sl = 1073741823;
                break;
              case 4:
                sl = 1e4;
                break;
              default:
                sl = 5e3;
            }
            return (
              (sl = L + sl),
              (O = {
                id: C++,
                callback: w,
                priorityLevel: O,
                startTime: L,
                expirationTime: sl,
                sortIndex: -1,
              }),
              L > yl
                ? ((O.sortIndex = L),
                  E(J, O),
                  x(Y) === null &&
                    O === x(J) &&
                    (Sl ? (zl($), ($ = -1)) : (Sl = !0), Bl(et, L - yl)))
                : ((O.sortIndex = sl),
                  E(Y, O),
                  Ul || jl || ((Ul = !0), st || ((st = !0), ot()))),
              O
            );
          }),
          (d.unstable_shouldYield = pt),
          (d.unstable_wrapCallback = function (O) {
            var w = H;
            return function () {
              var L = H;
              H = w;
              try {
                return O.apply(this, arguments);
              } finally {
                H = L;
              }
            };
          }));
      })(Cs)),
    Cs
  );
}
var y0;
function w1() {
  return (y0 || ((y0 = 1), (As.exports = V1())), As.exports);
}
var Ms = { exports: {} },
  Fl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g0;
function L1() {
  if (g0) return Fl;
  g0 = 1;
  var d = Bs();
  function E(C) {
    var T = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        T += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return (
      "Minified React error #" +
      C +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function x() {}
  var o = {
      d: {
        f: x,
        r: function () {
          throw Error(E(522));
        },
        D: x,
        C: x,
        L: x,
        m: x,
        X: x,
        S: x,
        M: x,
      },
      p: 0,
      findDOMNode: null,
    },
    N = Symbol.for("react.portal"),
    M = Symbol.for("react.recoverable"),
    V = Symbol.for("react.optimistic_key");
  function X(C, T, H) {
    var jl =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: jl == null ? null : jl === V ? V : "" + jl,
      children: C,
      containerInfo: T,
      implementation: H,
    };
  }
  var Y = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function J(C, T) {
    if (C === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Fl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Fl.browser = function (C) {
      return { $$typeof: M, _reason: C };
    }),
    (Fl.createPortal = function (C, T) {
      var H =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(E(299));
      return X(C, T, null, H);
    }),
    (Fl.flushSync = function (C) {
      var T = Y.T,
        H = o.p;
      try {
        if (((Y.T = null), (o.p = 2), C)) return C();
      } finally {
        ((Y.T = T), (o.p = H), o.d.f());
      }
    }),
    (Fl.preconnect = function (C, T) {
      typeof C == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        o.d.C(C, T));
    }),
    (Fl.prefetchDNS = function (C) {
      typeof C == "string" && o.d.D(C);
    }),
    (Fl.preinit = function (C, T) {
      if (typeof C == "string" && T && typeof T.as == "string") {
        var H = T.as,
          jl = J(H, T.crossOrigin),
          Ul = typeof T.integrity == "string" ? T.integrity : void 0,
          Sl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        H === "style"
          ? o.d.S(C, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: jl,
              integrity: Ul,
              fetchPriority: Sl,
            })
          : H === "script" &&
            o.d.X(C, {
              crossOrigin: jl,
              integrity: Ul,
              fetchPriority: Sl,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Fl.preinitModule = function (C, T) {
      if (typeof C == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var H = J(T.as, T.crossOrigin);
            o.d.M(C, {
              crossOrigin: H,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
              fetchPriority:
                typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
            });
          }
        } else T == null && o.d.M(C);
    }),
    (Fl.preload = function (C, T) {
      if (
        typeof C == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var H = T.as,
          jl = J(H, T.crossOrigin);
        o.d.L(C, H, {
          crossOrigin: jl,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Fl.preloadModule = function (C, T) {
      if (typeof C == "string")
        if (T) {
          var H = J(T.as, T.crossOrigin);
          o.d.m(C, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: H,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            fetchPriority:
              typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          });
        } else o.d.m(C);
    }),
    (Fl.requestFormReset = function (C) {
      o.d.r(C);
    }),
    (Fl.unstable_batchedUpdates = function (C, T) {
      return C(T);
    }),
    (Fl.useFormState = function (C, T, H) {
      return Y.H.useFormState(C, T, H);
    }),
    (Fl.useFormStatus = function () {
      return Y.H.useHostTransitionStatus();
    }),
    (Fl.version = "19.3.0"),
    Fl
  );
}
var S0;
function M0() {
  if (S0) return Ms.exports;
  S0 = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (E) {
        console.error(E);
      }
  }
  return (d(), (Ms.exports = L1()), Ms.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b0;
function Z1() {
  if (b0) return rn;
  b0 = 1;
  var d = w1(),
    E = Bs(),
    x = M0();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function N(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function M(l) {
    for (var t = l, e = t; e && !e.alternate; )
      ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function V(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function X(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Y(l) {
    if (M(l) !== l) throw Error(o(188));
  }
  function J(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = M(l)), t === null)) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return (Y(u), l);
          if (n === a) return (Y(u), t);
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (e.return !== a.return) ((e = u), (a = n));
      else {
        for (var i = !1, f = u.child; f; ) {
          if (f === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          if (f === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            if (f === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (e.alternate !== a) throw Error(o(190));
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? l : t;
  }
  function C(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = C(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  function T(l, t, e, a, u, n) {
    for (; l !== null; ) {
      if (
        ((l.tag === 5 || l.tag === 27 || l.tag === 6) && e(l, a, u, n)) ||
        ((l.tag !== 22 || l.memoizedState === null) &&
          (t || (l.tag !== 5 && l.tag !== 27)) &&
          T(l.child, t, e, a, u, n))
      )
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function H(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function jl(l) {
    var t = !1;
    for (
      l = l.return;
      l !== null &&
      (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27));
    )
      l = l.return;
    return t;
  }
  function Ul(l) {
    var t = [null, null],
      e = H(l);
    return (e === null || Sl(t, l, e.child, { foundSelf: !1 }), t);
  }
  function Sl(l, t, e, a) {
    for (; e !== null; ) {
      if (e === t) a.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (a.foundSelf) return ((l[1] = e), !0);
        l[0] = e;
      } else if (
        (e.tag !== 22 || e.memoizedState === null) &&
        Sl(l, t, e.child, a)
      )
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function G(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var pl = null,
    zl = null;
  function Ut(l, t, e) {
    return l === e ? !0 : l === t ? ((pl = l), !0) : !1;
  }
  function $l(l, t, e) {
    return l === e
      ? ((zl = l), !1)
      : l === t
        ? (zl !== null && (pl = l), !0)
        : !1;
  }
  function et(l) {
    if (l === null) return null;
    do l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function st(l, t, e) {
    for (var a = 0, u = l; u; u = e(u)) a++;
    u = 0;
    for (var n = t; n; n = e(n)) u++;
    for (; 0 < a - u; ) ((l = e(l)), a--);
    for (; 0 < u - a; ) ((t = e(t)), u--);
    for (; a--; ) {
      if (l === t || (t !== null && l === t.alternate)) return l;
      ((l = e(l)), (t = e(t)));
    }
    return null;
  }
  var $ = Object.assign,
    il = Symbol.for("react.element"),
    Vt = Symbol.for("react.transitional.element"),
    pt = Symbol.for("react.portal"),
    zt = Symbol.for("react.fragment"),
    ot = Symbol.for("react.strict_mode"),
    be = Symbol.for("react.profiler"),
    We = Symbol.for("react.consumer"),
    Bl = Symbol.for("react.context"),
    O = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    L = Symbol.for("react.suspense_list"),
    yl = Symbol.for("react.memo"),
    sl = Symbol.for("react.lazy"),
    Ht = Symbol.for("react.activity"),
    ee = Symbol.for("react.legacy_hidden"),
    $e = Symbol.for("react.memo_cache_sentinel"),
    h = Symbol.for("react.view_transition"),
    j = Symbol.for("react.recoverable"),
    q = Symbol.iterator;
  function B(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (q && l[q]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var al = Symbol.for("react.client.reference");
  function ul(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === al ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case zt:
        return "Fragment";
      case be:
        return "Profiler";
      case ot:
        return "StrictMode";
      case w:
        return "Suspense";
      case L:
        return "SuspenseList";
      case Ht:
        return "Activity";
      case h:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case pt:
          return "Portal";
        case Bl:
          return l.displayName || "Context";
        case We:
          return (l._context.displayName || "Context") + ".Consumer";
        case O:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case yl:
          return (
            (t = l.displayName || null),
            t !== null ? t : ul(l.type) || "Memo"
          );
        case sl:
          ((t = l._payload), (l = l._init));
          try {
            return ul(l(t));
          } catch {}
      }
    return null;
  }
  var cl = Array.isArray,
    R = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ae = { pending: !1, data: null, method: null, action: null },
    Li = [],
    za = -1;
  function wt(l) {
    return { current: l };
  }
  function Vl(l) {
    0 > za || ((l.current = Li[za]), (Li[za] = null), za--);
  }
  function bl(l, t) {
    (za++, (Li[za] = l.current), (l.current = t));
  }
  var Lt = wt(null),
    vu = wt(null),
    Te = wt(null),
    dn = wt(null);
  function hn(l, t) {
    switch ((bl(Te, t), bl(vu, l), bl(Lt, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Th(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Th(t)), (l = Eh(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (Vl(Lt), bl(Lt, l));
  }
  function xa() {
    (Vl(Lt), Vl(vu), Vl(Te));
  }
  function Zi(l) {
    var t = l.memoizedState;
    (t !== null && ((ru._currentValue = t.memoizedState), bl(dn, l)),
      (t = Lt.current));
    var e = Eh(t, l.type);
    t !== e && (bl(vu, l), bl(Lt, e));
  }
  function mn(l) {
    (vu.current === l && (Vl(Lt), Vl(vu)),
      dn.current === l && (Vl(dn), (ru._currentValue = ae)));
  }
  var Ki, Qs;
  function Ee(l) {
    if (Ki === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        ((Ki = (t && t[1]) || ""),
          (Qs =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ki +
      l +
      Qs
    );
  }
  var Ji = !1;
  function ki(l, t) {
    if (!l || Ji) return "";
    Ji = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (_) {
                  var m = _;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (_) {
                  m = _;
                }
                z = !1;
                try {
                  var S = Object.getOwnPropertyDescriptor(l.prototype, "props");
                  (Object.defineProperty(l.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (z = !0),
                    new l());
                } finally {
                  z &&
                    (S !== void 0
                      ? Object.defineProperty(l.prototype, "props", S)
                      : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                m = _;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (_) {
            if (_ && m && typeof _.stack == "string") return [_.stack, m.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var s = i.split(`
`),
          y = f.split(`
`);
        for (
          u = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === s.length || u === y.length)
          for (
            a = s.length - 1, u = y.length - 1;
            1 <= a && 0 <= u && s[a] !== y[u];
          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (s[a] !== y[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || s[a] !== y[u])) {
                  var b =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", l.displayName)),
                    b
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ((Ji = !1), (Error.prepareStackTrace = e));
    }
    return (e = l ? l.displayName || l.name : "") ? Ee(e) : "";
  }
  function X0(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(l.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Ee("Suspense Fallback")
          : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return ki(l.type, !1);
      case 11:
        return ki(l.type.render, !1);
      case 1:
        return ki(l.type, !0);
      case 31:
        return Ee("Activity");
      case 30:
        return Ee("ViewTransition");
      default:
        return "";
    }
  }
  function Xs(l) {
    try {
      var t = "",
        e = null;
      do ((t += X0(l, e)), (e = l), (l = l.return));
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Fi = Object.prototype.hasOwnProperty,
    Wi = d.unstable_scheduleCallback,
    $i = d.unstable_cancelCallback,
    V0 = d.unstable_shouldYield,
    w0 = d.unstable_requestPaint,
    rt = d.unstable_now,
    L0 = d.unstable_getCurrentPriorityLevel,
    Vs = d.unstable_ImmediatePriority,
    ws = d.unstable_UserBlockingPriority,
    vn = d.unstable_NormalPriority,
    Z0 = d.unstable_LowPriority,
    Ls = d.unstable_IdlePriority,
    K0 = d.log,
    J0 = d.unstable_setDisableYieldValue,
    yu = null,
    dt = null;
  function pe(l) {
    if (
      (typeof K0 == "function" && J0(l),
      dt && typeof dt.setStrictMode == "function")
    )
      try {
        dt.setStrictMode(yu, l);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : W0,
    k0 = Math.log,
    F0 = Math.LN2;
  function W0(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((k0(l) / F0) | 0)) | 0);
  }
  var yn = 256,
    gn = 262144,
    Sn = 4194304;
  function Ie(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function bn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~n),
          a !== 0
            ? (u = Ie(a))
            : ((i &= f),
              i !== 0
                ? (u = Ie(i))
                : e || ((e = f & ~l), e !== 0 && (u = Ie(e)))))
        : ((f = a & ~n),
          f !== 0
            ? (u = Ie(f))
            : i !== 0
              ? (u = Ie(i))
              : e || ((e = a & ~l), e !== 0 && (u = Ie(e)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (e = t & -t),
            n >= e || (n === 32 && (e & 4194048) !== 0))
          ? t
          : u
    );
  }
  function gu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Zs(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var a = 31 - ht(e),
          u = 1 << a;
        ((t |= l[a]), (e &= ~u));
      }
    return t;
  }
  function $0(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ks() {
    var l = Sn;
    return ((Sn <<= 1), (Sn & 62914560) === 0 && (Sn = 4194304), l);
  }
  function Ii(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Su(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function I0(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0));
    var f = l.entanglements,
      s = l.expirationTimes,
      y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var b = 31 - ht(e),
        z = 1 << b;
      ((f[b] = 0), (s[b] = -1));
      var m = y[b];
      if (m !== null)
        for (y[b] = null, b = 0; b < m.length; b++) {
          var S = m[b];
          S !== null && (S.lane &= -536870913);
        }
      e &= ~z;
    }
    (a !== 0 && Js(l, a, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function Js(l, t, e) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var a = 31 - ht(t);
    ((l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930)));
  }
  function ks(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - ht(e),
        u = 1 << a;
      ((u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u));
    }
  }
  function Fs(l, t) {
    var e = t & -t;
    return (
      (e = (e & 42) !== 0 ? 1 : Pi(e)),
      (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    );
  }
  function Pi(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function lc(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ws() {
    var l = Z.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : u0(l.type));
  }
  function $s(l, t) {
    var e = Z.p;
    try {
      return ((Z.p = l), t());
    } finally {
      Z.p = e;
    }
  }
  var ue = Math.random().toString(36).slice(2),
    wl = "__reactFiber$" + ue,
    at = "__reactProps$" + ue,
    ja = "__reactContainer$" + ue,
    Is = "__reactEvents$" + ue,
    P0 = "__reactListeners$" + ue,
    lm = "__reactHandles$" + ue,
    Ps = "__reactResources$" + ue,
    bu = "__reactMarker$" + ue,
    Tn = "__reactLoad$" + ue;
  function En(l) {
    (delete l[wl], delete l[at], delete l[P0], delete l[lm]);
  }
  function Pe(l) {
    var t;
    if ((t = l[wl])) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[ja] || e[wl])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = Yh(l); l !== null; ) {
            if ((e = l[wl])) return e;
            l = Yh(l);
          }
        return t;
      }
      ((l = e), (e = l.parentNode));
    }
    return null;
  }
  function Na(l) {
    if ((l = l[wl] || l[ja])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Tu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function _a(l) {
    var t = l[Ps];
    return (
      t ||
        (t = l[Ps] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Yl(l) {
    l[bu] = !0;
  }
  function lo(l) {
    l[Tn] = void 0;
  }
  var to = new Set(),
    eo = {};
  function la(l, t) {
    (Oa(l, t), Oa(l + "Capture", t));
  }
  function Oa(l, t) {
    for (eo[l] = t, l = 0; l < t.length; l++) to.add(t[l]);
  }
  var tm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ao = {},
    uo = {};
  function em(l) {
    return Fi.call(uo, l)
      ? !0
      : Fi.call(ao, l)
        ? !1
        : tm.test(l)
          ? (uo[l] = !0)
          : ((ao[l] = !0), !1);
  }
  var nl = !1;
  function no() {
    var l = nl;
    return ((nl = !1), l);
  }
  function pn(l, t, e) {
    if (em(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, e);
      }
  }
  function zn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, e);
    }
  }
  function ne(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, a);
    }
  }
  function mt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function io(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function am(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((e = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function tc(l) {
    if (!l._valueTracker) {
      var t = io(l) ? "checked" : "value";
      l._valueTracker = am(l, t, "" + l[t]);
    }
  }
  function co(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = io(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  var um = /[\n"\\]/g;
  function xt(l) {
    return l.replace(um, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ec(l, t, e, a, u, n, i, f) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + mt(t))
          : l.value !== "" + mt(t) && (l.value = "" + mt(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? i === "number" && l.value == t
          ? ac(l, mt(l.value))
          : ac(l, mt(t))
        : e != null
          ? ac(l, mt(e))
          : a != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + mt(f))
        : l.removeAttribute("name"));
  }
  function fo(l, t, e, a, u, n, i, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        tc(l);
        return;
      }
      ((e = e != null ? "" + mt(e) : ""),
        (t = t != null ? "" + mt(t) : e),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = f ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      tc(l));
  }
  function ac(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function Aa(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        ((u = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== u && (l[e].selected = u),
          u && a && (l[e].defaultSelected = !0));
    } else {
      for (e = "" + mt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          ((l[u].selected = !0), a && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function so(l, t, e) {
    if (
      t != null &&
      ((t = "" + mt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + mt(e) : "";
  }
  function oo(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (cl(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      (e == null && (e = ""), (t = e));
    }
    ((e = mt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a),
      tc(l));
  }
  function Ca(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var nm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ro(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : a
        ? l.setProperty(t, e)
        : typeof e != "number" || e === 0 || nm.has(t)
          ? t === "float"
            ? (l.cssFloat = e)
            : (l[t] = ("" + e).trim())
          : (l[t] = e + "px");
  }
  function ho(l, t, e) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
              ? (l.cssFloat = "")
              : (l[a] = ""),
          (nl = !0));
      for (var u in t)
        ((a = t[u]),
          t.hasOwnProperty(u) && e[u] !== a && (ro(l, u, a), (nl = !0)));
    } else for (var n in t) t.hasOwnProperty(n) && ro(l, n, t[n]);
  }
  function uc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var im = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    cm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xn(l) {
    return cm.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Zt() {}
  var nc = null;
  function ic(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Ma = null,
    Da = null;
  function mo(l) {
    var t = Na(l);
    if (t && (l = t.stateNode)) {
      var e = l[at] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ec(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + xt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[at] || null;
                if (!u) throw Error(o(90));
                ec(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < e.length; t++)
              ((a = e[t]), a.form === l.form && co(a));
          }
          break l;
        case "textarea":
          so(l, e.value, e.defaultValue);
          break l;
        case "select":
          ((t = e.value), t != null && Aa(l, !!e.multiple, t, !1));
      }
    }
  }
  var cc = !1;
  function vo(l, t, e) {
    if (cc) return l(t, e);
    cc = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((cc = !1),
        (Ma !== null || Da !== null) &&
          (xi(), Ma && ((t = Ma), (l = Da), (Da = Ma = null), mo(t), l)))
      )
        for (t = 0; t < l.length; t++) mo(l[t]);
    }
  }
  function Eu(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[at] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(o(231, t, typeof e));
    return e;
  }
  var ie = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    fc = !1;
  if (ie)
    try {
      var pu = {};
      (Object.defineProperty(pu, "passive", {
        get: function () {
          fc = !0;
        },
      }),
        window.addEventListener("test", pu, pu),
        window.removeEventListener("test", pu, pu));
    } catch {
      fc = !1;
    }
  var ze = null,
    sc = null,
    jn = null;
  function yo() {
    if (jn) return jn;
    var l,
      t = sc,
      e = t.length,
      a,
      u = "value" in ze ? ze.value : ze.textContent,
      n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
    return (jn = u.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Nn(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function _n() {
    return !0;
  }
  function go() {
    return !1;
  }
  function Il(l) {
    function t(e, a, u, n, i) {
      ((this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var f in l)
        l.hasOwnProperty(f) && ((e = l[f]), (this[f] = e ? e(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? _n
          : go),
        (this.isPropagationStopped = go),
        this
      );
    }
    return (
      $(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = _n));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = _n));
        },
        persist: function () {},
        isPersistent: _n,
      }),
      t
    );
  }
  var xe = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    On = Il(xe),
    zu = $({}, xe, { view: 0, detail: 0 }),
    fm = Il(zu),
    oc,
    rc,
    xu,
    An = $({}, zu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== xu &&
              (xu && l.type === "mousemove"
                ? ((oc = l.screenX - xu.screenX), (rc = l.screenY - xu.screenY))
                : (rc = oc = 0),
              (xu = l)),
            oc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : rc;
      },
    }),
    So = Il(An),
    sm = $({}, An, { dataTransfer: 0 }),
    om = Il(sm),
    rm = $({}, zu, { relatedTarget: 0 }),
    dc = Il(rm),
    dm = $({}, xe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hm = Il(dm),
    mm = $({}, xe, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    vm = Il(mm),
    ym = $({}, xe, { data: 0 }),
    bo = Il(ym),
    gm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Sm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    bm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Tm(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = bm[l])
        ? !!t[l]
        : !1;
  }
  function hc() {
    return Tm;
  }
  var Em = $({}, zu, {
      key: function (l) {
        if (l.key) {
          var t = gm[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Nn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? Sm[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hc,
      charCode: function (l) {
        return l.type === "keypress" ? Nn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Nn(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    pm = Il(Em),
    zm = $({}, An, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    To = Il(zm),
    xm = $({}, xe, { submitter: 0 }),
    jm = Il(xm),
    Nm = $({}, zu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hc,
    }),
    _m = Il(Nm),
    Om = $({}, xe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Am = Il(Om),
    Cm = $({}, An, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Mm = Il(Cm),
    Dm = $({}, xe, { newState: 0, oldState: 0, source: 0 }),
    Rm = Il(Dm),
    Um = [9, 13, 27, 32],
    mc = ie && "CompositionEvent" in window,
    ju = null;
  ie && "documentMode" in document && (ju = document.documentMode);
  var Hm = ie && "TextEvent" in window && !ju,
    Eo = ie && (!mc || (ju && 8 < ju && 11 >= ju)),
    po = " ",
    zo = !1;
  function xo(l, t) {
    switch (l) {
      case "keyup":
        return Um.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jo(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Ra = !1;
  function qm(l, t) {
    switch (l) {
      case "compositionend":
        return jo(t);
      case "keypress":
        return t.which !== 32 ? null : ((zo = !0), po);
      case "textInput":
        return ((l = t.data), l === po && zo ? null : l);
      default:
        return null;
    }
  }
  function Bm(l, t) {
    if (Ra)
      return l === "compositionend" || (!mc && xo(l, t))
        ? ((l = yo()), (jn = sc = ze = null), (Ra = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Eo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ym = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function No(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ym[l.type] : t === "textarea";
  }
  function _o(l, t, e, a) {
    (Ma ? (Da ? Da.push(a) : (Da = [a])) : (Ma = a),
      (t = Ci(t, "onChange")),
      0 < t.length &&
        ((e = new On("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t })));
  }
  var Nu = null,
    _u = null;
  function Gm(l) {
    mh(l, 0);
  }
  function Cn(l) {
    var t = Tu(l);
    if (co(t)) return l;
  }
  function Oo(l, t) {
    if (l === "change") return t;
  }
  var Ao = !1;
  if (ie) {
    var vc;
    if (ie) {
      var yc = "oninput" in document;
      if (!yc) {
        var Co = document.createElement("div");
        (Co.setAttribute("oninput", "return;"),
          (yc = typeof Co.oninput == "function"));
      }
      vc = yc;
    } else vc = !1;
    Ao = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function Mo() {
    Nu && (Nu.detachEvent("onpropertychange", Do), (_u = Nu = null));
  }
  function Do(l) {
    if (l.propertyName === "value" && Cn(_u)) {
      var t = [];
      (_o(t, _u, l, ic(l)), vo(Gm, t));
    }
  }
  function Qm(l, t, e) {
    l === "focusin"
      ? (Mo(), (Nu = t), (_u = e), Nu.attachEvent("onpropertychange", Do))
      : l === "focusout" && Mo();
  }
  function Xm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Cn(_u);
  }
  function Vm(l, t) {
    if (l === "click") return Cn(t);
  }
  function wm(l, t) {
    if (l === "input" || l === "change") return Cn(t);
  }
  function Lm(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var vt = typeof Object.is == "function" ? Object.is : Lm;
  function Ou(l, t) {
    if (vt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Fi.call(t, u) || !vt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function gc(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function Ro(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Uo(l, t) {
    var e = Ro(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Ro(e);
    }
  }
  function Ho(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ho(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function qo(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = gc(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = gc(l.document);
    }
    return t;
  }
  function Sc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Zm = ie && "documentMode" in document && 11 >= document.documentMode,
    Ua = null,
    bc = null,
    Au = null,
    Tc = !1;
  function Bo(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Tc ||
      Ua == null ||
      Ua !== gc(a) ||
      ((a = Ua),
      "selectionStart" in a && Sc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Au && Ou(Au, a)) ||
        ((Au = a),
        (a = Ci(bc, "onSelect")),
        0 < a.length &&
          ((t = new On("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = Ua))));
  }
  function ta(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var Ha = {
      animationend: ta("Animation", "AnimationEnd"),
      animationiteration: ta("Animation", "AnimationIteration"),
      animationstart: ta("Animation", "AnimationStart"),
      transitionrun: ta("Transition", "TransitionRun"),
      transitionstart: ta("Transition", "TransitionStart"),
      transitioncancel: ta("Transition", "TransitionCancel"),
      transitionend: ta("Transition", "TransitionEnd"),
    },
    Ec = {},
    Yo = {};
  ie &&
    ((Yo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ha.animationend.animation,
      delete Ha.animationiteration.animation,
      delete Ha.animationstart.animation),
    "TransitionEvent" in window || delete Ha.transitionend.transition);
  function ea(l) {
    if (Ec[l]) return Ec[l];
    if (!Ha[l]) return l;
    var t = Ha[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in Yo) return (Ec[l] = t[e]);
    return l;
  }
  var Go = ea("animationend"),
    Qo = ea("animationiteration"),
    Xo = ea("animationstart"),
    Km = ea("transitionrun"),
    Jm = ea("transitionstart"),
    km = ea("transitioncancel"),
    Vo = ea("transitionend"),
    wo = new Map(),
    pc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  pc.push("scrollEnd");
  function qt(l, t) {
    (wo.set(l, t), la(t, [l]));
  }
  var Fm = 0;
  function ce(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Qt.identifierPrefix;
    var e = Fm++;
    return ((l = "_" + l + "t_" + e.toString(32) + "_"), (t.autoName = l));
  }
  function Lo(l) {
    if (l == null || typeof l == "string") return l;
    var t = null,
      e = tu;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = l[e[a]];
        if (u != null) {
          if (u === "none") return "none";
          t = t == null ? u : t + (" " + u);
        }
      }
    return t ?? l.default;
  }
  function fe(l, t) {
    return (
      (l = Lo(l)),
      (t = Lo(t)),
      t == null ? (l === "auto" ? null : l) : t === "auto" ? null : t
    );
  }
  var Mn =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    jt = [],
    qa = 0,
    zc = 0;
  function Dn() {
    for (var l = qa, t = (zc = qa = 0); t < l; ) {
      var e = jt[t];
      jt[t++] = null;
      var a = jt[t];
      jt[t++] = null;
      var u = jt[t];
      jt[t++] = null;
      var n = jt[t];
      if (((jt[t++] = null), a !== null && u !== null)) {
        var i = a.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u));
      }
      n !== 0 && Zo(e, u, n);
    }
  }
  function Rn(l, t, e, a) {
    ((jt[qa++] = l),
      (jt[qa++] = t),
      (jt[qa++] = e),
      (jt[qa++] = a),
      (zc |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a));
  }
  function xc(l, t, e, a) {
    return (Rn(l, t, e, a), Un(l));
  }
  function aa(l, t) {
    return (Rn(l, null, null, t), Un(l));
  }
  function Zo(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - ht(e)),
          (l = n.hiddenUpdates),
          (a = l[u]),
          a === null ? (l[u] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        n)
      : null;
  }
  function Un(l) {
    if (50 < $u) throw (($u = 0), (zi = null), Error(o(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ba = {};
  function Wm(l, t, e, a) {
    ((this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ut(l, t, e, a) {
    return new Wm(l, t, e, a);
  }
  function jc(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function se(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = ut(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 1206910976),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function Ko(l, t) {
    l.flags &= 1206910978;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Hn(l, t, e, a, u, n) {
    var i = 0;
    if (((a = l), typeof a == "function")) jc(a) && (i = 1);
    else if (typeof a == "string")
      i = x1(l, e, Lt.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (a) {
        case Ht:
          return (
            (l = ut(31, e, t, u)),
            (l.elementType = Ht),
            (l.lanes = n),
            l
          );
        case zt:
          return ua(e.children, u, n, t);
        case ot:
          ((i = 8), (u |= 24));
          break;
        case be:
          return (
            (l = ut(12, e, t, u | 2)),
            (l.elementType = be),
            (l.lanes = n),
            l
          );
        case w:
          return ((l = ut(13, e, t, u)), (l.elementType = w), (l.lanes = n), l);
        case L:
          return ((l = ut(19, e, t, u)), (l.elementType = L), (l.lanes = n), l);
        case ee:
        case h:
          return (
            (l = u | 32),
            (l = ut(30, e, t, l)),
            (l.elementType = h),
            (l.lanes = n),
            (l.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            l
          );
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Bl:
                i = 10;
                break l;
              case We:
                i = 9;
                break l;
              case O:
                i = 11;
                break l;
              case yl:
                i = 14;
                break l;
              case sl:
                ((i = 16), (a = null));
                break l;
            }
          ((i = 29),
            (e = Error(o(130, l === null ? "null" : typeof l, ""))),
            (a = null));
      }
    return (
      (t = ut(i, e, t, u)),
      (t.elementType = l),
      (t.type = a),
      (t.lanes = n),
      t
    );
  }
  function ua(l, t, e, a) {
    return ((l = ut(7, l, a, t)), (l.lanes = e), l);
  }
  function Nc(l, t, e) {
    return ((l = ut(6, l, null, t)), (l.lanes = e), l);
  }
  function Jo(l) {
    var t = ut(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function _c(l, t, e) {
    return (
      (t = ut(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var ko = new WeakMap();
  function Nt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = ko.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: Xs(t) }), ko.set(l, t), t);
    }
    return { value: l, source: t, stack: Xs(t) };
  }
  var Ya = [],
    Ga = 0,
    qn = null,
    Cu = 0,
    _t = [],
    Ot = 0,
    je = null,
    Kt = 1,
    Jt = "";
  function oe(l, t) {
    ((Ya[Ga++] = Cu), (Ya[Ga++] = qn), (qn = l), (Cu = t));
  }
  function Fo(l, t, e) {
    ((_t[Ot++] = Kt), (_t[Ot++] = Jt), (_t[Ot++] = je), (je = l));
    var a = Kt;
    l = Jt;
    var u = 32 - ht(a) - 1;
    ((a &= ~(1 << u)), (e += 1));
    var n = 32 - ht(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Kt = (1 << (32 - ht(t) + u)) | (e << u) | a),
        (Jt = n + l));
    } else ((Kt = (1 << n) | (e << u) | a), (Jt = l));
  }
  function Bn(l) {
    l.return !== null && (oe(l, 1), Fo(l, 1, 0));
  }
  function Oc(l) {
    for (; l === qn; )
      ((qn = Ya[--Ga]), (Ya[Ga] = null), (Cu = Ya[--Ga]), (Ya[Ga] = null));
    for (; l === je; )
      ((je = _t[--Ot]),
        (_t[Ot] = null),
        (Jt = _t[--Ot]),
        (_t[Ot] = null),
        (Kt = _t[--Ot]),
        (_t[Ot] = null));
  }
  function Wo(l, t) {
    ((_t[Ot++] = Kt),
      (_t[Ot++] = Jt),
      (_t[Ot++] = je),
      (Kt = t.id),
      (Jt = t.overflow),
      (je = l));
  }
  var Gl = null,
    Tl = null,
    W = !1,
    Ne = null,
    At = !1,
    Ac = Error(o(519));
  function _e(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Mu(Nt(t, l)), Ac);
  }
  function $o(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[wl] = l), (t[at] = a), e)) {
      case "dialog":
        (P("cancel", t), P("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Pu.length; e++) P(Pu[e], t);
        break;
      case "source":
        P("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (P("error", t), P("load", t));
        break;
      case "details":
        P("toggle", t);
        break;
      case "input":
        (P("invalid", t),
          fo(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        P("invalid", t);
        break;
      case "textarea":
        (P("invalid", t), oo(t, a.value, a.defaultValue, a.children));
    }
    ((e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Sh(t.textContent, e)
        ? (a.popover != null && (P("beforetoggle", t), P("toggle", t)),
          a.onScroll != null && P("scroll", t),
          a.onScrollEnd != null && P("scrollend", t),
          a.onClick != null && (t.onclick = Zt),
          (t = !0))
        : (t = !1),
      t || _e(l, !0));
  }
  function Yn(l) {
    for (Gl = l.return; Gl; )
      switch (Gl.tag) {
        case 5:
        case 31:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          Gl = Gl.return;
      }
  }
  function Qa(l) {
    if (l !== Gl) return !1;
    if (!W) return (Yn(l), (W = !0), !1);
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || is(l.type, l.memoizedProps))),
        (e = !e)),
      e && Tl && _e(l),
      Yn(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(o(317));
      Tl = Bh(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(o(317));
      Tl = Bh(l);
    } else
      t === 27
        ? ((t = Tl), we(l.type) ? ((l = vs), (vs = null), (Tl = l)) : (Tl = t))
        : (Tl = Gl ? Mt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function na() {
    ((Tl = Gl = null), (W = !1));
  }
  function Cc() {
    var l = Ne;
    return (
      l !== null &&
        (ct === null ? (ct = l) : ct.push.apply(ct, l), (Ne = null)),
      l
    );
  }
  function Mu(l) {
    Ne === null ? (Ne = [l]) : Ne.push(l);
  }
  var Mc = wt(null),
    ia = null,
    re = null;
  function Oe(l, t, e) {
    (bl(Mc, t._currentValue), (t._currentValue = e));
  }
  function de(l) {
    ((l._currentValue = Mc.current), Vl(Mc));
  }
  function Gn(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Dc(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var s = 0; s < t.length; s++)
            if (f.context === t[s]) {
              ((n.lanes |= e),
                (f = n.alternate),
                f !== null && (f.lanes |= e),
                Gn(n.return, e, l),
                a || (i = null));
              break l;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(o(341));
        ((i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          Gn(i, e, l),
          (i = null));
      } else
        u.tag === 13 &&
        u.memoizedState !== null &&
        u.memoizedState.dehydrated === null
          ? ((u.lanes |= e),
            (i = u.alternate),
            i !== null && (i.lanes |= e),
            Gn(u.return, e, l),
            (i = u.child),
            (i = i !== null ? i.sibling : null))
          : (i = u.child);
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ca(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(o(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = u.type;
          vt(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (u === dn.current) {
        if (((i = u.alternate), i === null)) throw Error(o(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(ru) : (l = [ru]));
      }
      u = u.return;
    }
    return (l !== null && Dc(t, l, e, a), (t.flags |= 262144), l !== null);
  }
  function Qn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!vt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function fa(l) {
    ((ia = l),
      (re = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Ll(l) {
    return Io(ia, l);
  }
  function Xn(l, t) {
    return (ia === null && fa(l), Io(l, t));
  }
  function Io(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), re === null)) {
      if (l === null) throw Error(o(308));
      ((re = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else re = re.next = t;
    return e;
  }
  var $m =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                }));
            };
          },
    Im = d.unstable_scheduleCallback,
    Pm = d.unstable_NormalPriority,
    Cl = {
      $$typeof: Bl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Rc() {
    return { controller: new $m(), data: new Map(), refCount: 0 };
  }
  function Du(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Im(Pm, function () {
          l.controller.abort();
        }));
  }
  function Po(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var e = l.transitionTypes;
      for (
        e === null && (e = l.transitionTypes = []), l = 0;
        l < t.length;
        l++
      ) {
        var a = t[l];
        e.indexOf(a) === -1 && e.push(a);
      }
    }
  }
  var Ru = null;
  function lv(l) {
    var t = l.transitionTypes;
    return ((l.transitionTypes = null), t);
  }
  var Uu = null,
    Uc = 0,
    sa = 0,
    Xa = null;
  function tv(l, t) {
    if (Uu === null) {
      var e = (Uu = []);
      ((Uc = 0),
        (sa = $f()),
        (Xa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        }));
    }
    return (Uc++, t.then(lr, lr), t);
  }
  function lr() {
    if (--Uc === 0 && ((Ru = null), Uu !== null)) {
      Xa !== null && (Xa.status = "fulfilled");
      var l = Uu;
      ((Uu = null), (sa = 0), (Xa = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function ev(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var u = 0; u < e.length; u++) (0, e[u])(t);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        },
      ),
      a
    );
  }
  var tr = R.S;
  R.S = function (l, t) {
    if (
      ((Jd = rt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        tv(l, t),
      Ru !== null)
    )
      for (var e = nu; e !== null; ) (Po(e, Ru), (e = e.next));
    if (((e = l.types), e !== null)) {
      for (var a = nu; a !== null; ) (Po(a, e), (a = a.next));
      if (sa !== 0) {
        ((a = Ru), a === null && (a = Ru = []));
        for (var u = 0; u < e.length; u++) {
          var n = e[u];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    tr !== null && tr(l, t);
  };
  var oa = wt(null);
  function Hc() {
    var l = oa.current;
    return l !== null ? l : gl.pooledCache;
  }
  function Vn(l, t) {
    t === null ? bl(oa, oa.current) : bl(oa, t.pool);
  }
  function er() {
    var l = Hc();
    return l === null ? null : { parent: Cl._currentValue, pool: l };
  }
  var Va = Error(o(460)),
    qc = Error(o(474)),
    wn = Error(o(542)),
    Ln = { then: function () {} };
  function ar(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function ur(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(Zt, Zt), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw (
          (l = t.reason),
          ir(l),
          l === void 0 && !("reason" in t) ? Error(o(600)) : l
        );
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (((l = gl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(o(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), ir(l), l);
        }
        throw ((da = t), Va);
    }
  }
  function ra(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((da = e), Va)
        : e;
    }
  }
  var da = null;
  function nr() {
    if (da === null) throw Error(o(459));
    var l = da;
    return ((da = null), l);
  }
  function ir(l) {
    if (l === Va || l === wn) throw Error(o(483));
  }
  var wa = null,
    Hu = 0;
  function Zn(l) {
    var t = Hu;
    return ((Hu += 1), wa === null && (wa = []), ur(wa, l, t));
  }
  function Ae(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Kn(l, t) {
    throw t.$$typeof === il
      ? Error(o(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function cr(l) {
    function t(v, r) {
      if (l) {
        var g = v.deletions;
        g === null ? ((v.deletions = [r]), (v.flags |= 16)) : g.push(r);
      }
    }
    function e(v, r) {
      if (!l) return null;
      for (; r !== null; ) (t(v, r), (r = r.sibling));
      return null;
    }
    function a(v) {
      for (var r = new Map(); v !== null; )
        (v.key === null ? r.set(v.index, v) : r.set(v.key, v), (v = v.sibling));
      return r;
    }
    function u(v, r) {
      return ((v = se(v, r)), (v.index = 0), (v.sibling = null), v);
    }
    function n(v, r, g) {
      return (
        (v.index = g),
        l
          ? ((g = v.alternate),
            g !== null
              ? ((g = g.index), g < r ? ((v.flags |= 2), r) : g)
              : ((v.flags |= 134217730), r))
          : ((v.flags |= 1048576), r)
      );
    }
    function i(v) {
      return (l && v.alternate === null && (v.flags |= 134217730), v);
    }
    function f(v, r, g, p) {
      return r === null || r.tag !== 6
        ? ((r = Nc(g, v.mode, p)), (r.return = v), r)
        : ((r = u(r, g)), (r.return = v), r);
    }
    function s(v, r, g, p) {
      var A = g.type;
      return A === zt
        ? ((v = b(v, r, g.props.children, p, g.key)), Ae(v, g), v)
        : r !== null &&
            (r.elementType === A ||
              (typeof A == "object" &&
                A !== null &&
                A.$$typeof === sl &&
                ra(A) === r.type))
          ? ((r = u(r, g.props)), Ae(r, g), (r.return = v), r)
          : ((r = Hn(g.type, g.key, g.props, null, v.mode, p)),
            Ae(r, g),
            (r.return = v),
            r);
    }
    function y(v, r, g, p) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== g.containerInfo ||
        r.stateNode.implementation !== g.implementation
        ? ((r = _c(g, v.mode, p)), (r.return = v), r)
        : ((r = u(r, g.children || [])), (r.return = v), r);
    }
    function b(v, r, g, p, A) {
      return r === null || r.tag !== 7
        ? ((r = ua(g, v.mode, p, A)), (r.return = v), r)
        : ((r = u(r, g)), (r.return = v), r);
    }
    function z(v, r, g) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return ((r = Nc("" + r, v.mode, g)), (r.return = v), r);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Vt:
            return (
              (g = Hn(r.type, r.key, r.props, null, v.mode, g)),
              Ae(g, r),
              (g.return = v),
              g
            );
          case pt:
            return ((r = _c(r, v.mode, g)), (r.return = v), r);
          case sl:
            return ((r = ra(r)), z(v, r, g));
        }
        if (cl(r) || B(r))
          return ((r = ua(r, v.mode, g, null)), (r.return = v), r);
        if (typeof r.then == "function") return z(v, Zn(r), g);
        if (r.$$typeof === Bl) return z(v, Xn(v, r), g);
        Kn(v, r);
      }
      return null;
    }
    function m(v, r, g, p) {
      var A = r !== null ? r.key : null;
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return A !== null ? null : f(v, r, "" + g, p);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Vt:
            return g.key === A ? s(v, r, g, p) : null;
          case pt:
            return g.key === A ? y(v, r, g, p) : null;
          case sl:
            return ((g = ra(g)), m(v, r, g, p));
        }
        if (cl(g) || B(g)) return A !== null ? null : b(v, r, g, p, null);
        if (typeof g.then == "function") return m(v, r, Zn(g), p);
        if (g.$$typeof === Bl) return m(v, r, Xn(v, g), p);
        Kn(v, g);
      }
      return null;
    }
    function S(v, r, g, p, A) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return ((v = v.get(g) || null), f(r, v, "" + p, A));
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Vt:
            return (
              (v = v.get(p.key === null ? g : p.key) || null),
              s(r, v, p, A)
            );
          case pt:
            return (
              (v = v.get(p.key === null ? g : p.key) || null),
              y(r, v, p, A)
            );
          case sl:
            return ((p = ra(p)), S(v, r, g, p, A));
        }
        if (cl(p) || B(p)) return ((v = v.get(g) || null), b(r, v, p, A, null));
        if (typeof p.then == "function") return S(v, r, g, Zn(p), A);
        if (p.$$typeof === Bl) return S(v, r, g, Xn(r, p), A);
        Kn(r, p);
      }
      return null;
    }
    function _(v, r, g, p) {
      for (
        var A = null, tl = null, U = r, Q = (r = 0), Rl = null;
        U !== null && Q < g.length;
        Q++
      ) {
        U.index > Q ? ((Rl = U), (U = null)) : (Rl = U.sibling);
        var el = m(v, U, g[Q], p);
        if (el === null) {
          U === null && (U = Rl);
          break;
        }
        (l && U && el.alternate === null && t(v, U),
          (r = n(el, r, Q)),
          tl === null ? (A = el) : (tl.sibling = el),
          (tl = el),
          (U = Rl));
      }
      if (Q === g.length) return (e(v, U), W && oe(v, Q), A);
      if (U === null) {
        for (; Q < g.length; Q++)
          ((U = z(v, g[Q], p)),
            U !== null &&
              ((r = n(U, r, Q)),
              tl === null ? (A = U) : (tl.sibling = U),
              (tl = U)));
        return (W && oe(v, Q), A);
      }
      for (U = a(U); Q < g.length; Q++)
        ((Rl = S(U, v, Q, g[Q], p)),
          Rl !== null &&
            (l &&
              ((el = Rl.alternate),
              el !== null && U.delete(el.key === null ? Q : el.key)),
            (r = n(Rl, r, Q)),
            tl === null ? (A = Rl) : (tl.sibling = Rl),
            (tl = Rl)));
      return (
        l &&
          U.forEach(function (ke) {
            return t(v, ke);
          }),
        W && oe(v, Q),
        A
      );
    }
    function D(v, r, g, p) {
      if (g == null) throw Error(o(151));
      for (
        var A = null, tl = null, U = r, Q = (r = 0), Rl = null, el = g.next();
        U !== null && !el.done;
        Q++, el = g.next()
      ) {
        U.index > Q ? ((Rl = U), (U = null)) : (Rl = U.sibling);
        var ke = m(v, U, el.value, p);
        if (ke === null) {
          U === null && (U = Rl);
          break;
        }
        (l && U && ke.alternate === null && t(v, U),
          (r = n(ke, r, Q)),
          tl === null ? (A = ke) : (tl.sibling = ke),
          (tl = ke),
          (U = Rl));
      }
      if (el.done) return (e(v, U), W && oe(v, Q), A);
      if (U === null) {
        for (; !el.done; Q++, el = g.next())
          ((el = z(v, el.value, p)),
            el !== null &&
              ((r = n(el, r, Q)),
              tl === null ? (A = el) : (tl.sibling = el),
              (tl = el)));
        return (W && oe(v, Q), A);
      }
      for (U = a(U); !el.done; Q++, el = g.next())
        ((el = S(U, v, Q, el.value, p)),
          el !== null &&
            (l &&
              ((Rl = el.alternate),
              Rl !== null && U.delete(Rl.key === null ? Q : Rl.key)),
            (r = n(el, r, Q)),
            tl === null ? (A = el) : (tl.sibling = el),
            (tl = el)));
      return (
        l &&
          U.forEach(function (q1) {
            return t(v, q1);
          }),
        W && oe(v, Q),
        A
      );
    }
    function F(v, r, g, p) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === zt &&
          g.key === null &&
          g.props.ref === void 0 &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case Vt:
            l: {
              for (var A = g.key; r !== null; ) {
                if (r.key === A) {
                  if (((A = g.type), A === zt)) {
                    if (r.tag === 7) {
                      (e(v, r.sibling),
                        (p = u(r, g.props.children)),
                        Ae(p, g),
                        (p.return = v),
                        (v = p));
                      break l;
                    }
                  } else if (
                    r.elementType === A ||
                    (typeof A == "object" &&
                      A !== null &&
                      A.$$typeof === sl &&
                      ra(A) === r.type)
                  ) {
                    (e(v, r.sibling),
                      (p = u(r, g.props)),
                      Ae(p, g),
                      (p.return = v),
                      (v = p));
                    break l;
                  }
                  e(v, r);
                  break;
                } else t(v, r);
                r = r.sibling;
              }
              g.type === zt
                ? ((p = ua(g.props.children, v.mode, p, g.key)),
                  Ae(p, g),
                  (p.return = v),
                  (v = p))
                : ((p = Hn(g.type, g.key, g.props, null, v.mode, p)),
                  Ae(p, g),
                  (p.return = v),
                  (v = p));
            }
            return i(v);
          case pt:
            l: {
              for (A = g.key; r !== null; ) {
                if (r.key === A)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === g.containerInfo &&
                    r.stateNode.implementation === g.implementation
                  ) {
                    (e(v, r.sibling),
                      (p = u(r, g.children || [])),
                      (p.return = v),
                      (v = p));
                    break l;
                  } else {
                    e(v, r);
                    break;
                  }
                else t(v, r);
                r = r.sibling;
              }
              ((p = _c(g, v.mode, p)), (p.return = v), (v = p));
            }
            return i(v);
          case sl:
            return ((g = ra(g)), F(v, r, g, p));
        }
        if (cl(g)) return _(v, r, g, p);
        if (B(g)) {
          if (((A = B(g)), typeof A != "function")) throw Error(o(150));
          return ((g = A.call(g)), D(v, r, g, p));
        }
        if (typeof g.then == "function") return F(v, r, Zn(g), p);
        if (g.$$typeof === Bl) return F(v, r, Xn(v, g), p);
        Kn(v, g);
      }
      return (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
        ? ((g = "" + g),
          r !== null && r.tag === 6
            ? (e(v, r.sibling), (p = u(r, g)), (p.return = v), (v = p))
            : (e(v, r), (p = Nc(g, v.mode, p)), (p.return = v), (v = p)),
          i(v))
        : e(v, r);
    }
    return function (v, r, g, p) {
      try {
        Hu = 0;
        var A = F(v, r, g, p);
        return ((wa = null), A);
      } catch (U) {
        if (U === Va || U === wn) throw U;
        var tl = ut(29, U, null, v.mode);
        return ((tl.lanes = p), (tl.return = v), tl);
      } finally {
      }
    };
  }
  var ha = cr(!0),
    fr = cr(!1),
    Ce = !1;
  function Bc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Yc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function Me(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function De(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (fl & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        (t = Un(l)),
        Zo(l, null, e),
        t
      );
    }
    return (Rn(l, a, t, e), Un(l));
  }
  function qu(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), ks(l, e));
    }
  }
  function Gc(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (e = e.next));
        } while (e !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e));
      return;
    }
    ((l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t));
  }
  var Qc = !1;
  function Bu() {
    if (Qc) {
      var l = Xa;
      if (l !== null) throw l;
    }
  }
  function Yu(l, t, e, a) {
    Qc = !1;
    var u = l.updateQueue;
    Ce = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var s = f,
        y = s.next;
      ((s.next = null), i === null ? (n = y) : (i.next = y), (i = s));
      var b = l.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (f = b.lastBaseUpdate),
        f !== i &&
          (f === null ? (b.firstBaseUpdate = y) : (f.next = y),
          (b.lastBaseUpdate = s)));
    }
    if (n !== null) {
      var z = u.baseState;
      ((i = 0), (b = y = s = null), (f = n));
      do {
        var m = f.lane & -536870913,
          S = m !== f.lane;
        if (S ? (ll & m) === m : (a & m) === m) {
          (m !== 0 && m === sa && (Qc = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var _ = l,
              D = f;
            m = t;
            var F = e;
            switch (D.tag) {
              case 1:
                if (((_ = D.payload), typeof _ == "function")) {
                  z = _.call(F, z, m);
                  break l;
                }
                z = _;
                break l;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = D.payload),
                  (m = typeof _ == "function" ? _.call(F, z, m) : _),
                  m == null)
                )
                  break l;
                z = $({}, z, m);
                break l;
              case 2:
                Ce = !0;
            }
          }
          ((m = f.callback),
            m !== null &&
              ((l.flags |= 64),
              S && (l.flags |= 8192),
              (S = u.callbacks),
              S === null ? (u.callbacks = [m]) : S.push(m)));
        } else
          ((S = {
            lane: m,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            b === null ? ((y = b = S), (s = z)) : (b = b.next = S),
            (i |= m));
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          ((S = f),
            (f = S.next),
            (S.next = null),
            (u.lastBaseUpdate = S),
            (u.shared.pending = null));
        }
      } while (!0);
      (b === null && (s = z),
        (u.baseState = s),
        (u.firstBaseUpdate = y),
        (u.lastBaseUpdate = b),
        n === null && (u.shared.lanes = 0),
        (Ge |= i),
        (l.lanes = i),
        (l.memoizedState = z));
    }
  }
  function sr(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function or(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) sr(e[l], t);
  }
  var Re = wt(null),
    Jn = wt(0);
  function rr(l, t) {
    ((l = ge), bl(Jn, l), bl(Re, t), (ge = l | t.baseLanes));
  }
  function Xc() {
    (bl(Jn, ge), bl(Re, Re.current));
  }
  function Vc() {
    ((ge = Jn.current), Vl(Re), Vl(Jn));
  }
  var Zl = wt(null),
    Wl = null;
  function Ue(l) {
    var t = l.alternate;
    (bl(Kl, Kl.current & 1),
      bl(Zl, l),
      Wl === null &&
        (t === null || Re.current !== null || t.memoizedState !== null) &&
        (Wl = l));
  }
  function wc(l) {
    (bl(Kl, Kl.current), bl(Zl, l), Wl === null && (Wl = l));
  }
  function dr(l) {
    l.tag === 22
      ? (bl(Kl, Kl.current), bl(Zl, l), Wl === null && (Wl = l))
      : He();
  }
  function He() {
    (bl(Kl, Kl.current), bl(Zl, Zl.current));
  }
  function yt(l) {
    (Vl(Zl), Wl === l && (Wl = null), Vl(Kl));
  }
  var Kl = wt(0);
  function Gu(l, t) {
    (bl(Zl, Zl.current), bl(Kl, t));
  }
  function Lc(l) {
    (Vl(Kl), Vl(Zl), Wl === l && (Wl = null));
  }
  function kn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || hs(e) || ms(e)))
          return t;
      } else if (
        t.tag === 19 &&
        t.memoizedProps.revealOrder !== "independent"
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var he = 0,
    k = null,
    ml = null,
    Ml = null,
    Fn = !1,
    La = !1,
    ma = !1,
    Wn = 0,
    Qu = 0,
    Za = null,
    av = 0;
  function _l() {
    throw Error(o(321));
  }
  function Zc(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!vt(l[e], t[e])) return !1;
    return !0;
  }
  function Kc(l, t, e, a, u, n) {
    return (
      (he = n),
      (k = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (R.H = l === null || l.memoizedState === null ? Fr : Wr),
      (ma = !1),
      (n = e(a, u)),
      (ma = !1),
      La && (n = mr(t, e, a, u)),
      hr(l),
      n
    );
  }
  function hr(l) {
    R.H = ai;
    var t = ml !== null && ml.next !== null;
    if (((he = 0), (Ml = ml = k = null), (Fn = !1), (Qu = 0), (Za = null), t))
      throw Error(o(300));
    l === null ||
      Dl ||
      ((l = l.dependencies), l !== null && Qn(l) && (Dl = !0));
  }
  function mr(l, t, e, a) {
    k = l;
    var u = 0;
    do {
      if ((La && (Za = null), (Qu = 0), (La = !1), 25 <= u))
        throw Error(o(301));
      if (((u += 1), (Ml = ml = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((R.H = rv), (n = t(e, a)));
    } while (La);
    return n;
  }
  function uv() {
    var l = R.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Xu(t) : t),
      (l = l.useState()[0]),
      (ml !== null ? ml.memoizedState : null) !== l && (k.flags |= 1024),
      t
    );
  }
  function Jc() {
    var l = Wn !== 0;
    return ((Wn = 0), l);
  }
  function kc(l, t, e) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e));
  }
  function Fc(l) {
    if (Fn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      Fn = !1;
    }
    ((he = 0), (Ml = ml = k = null), (La = !1), (Qu = Wn = 0), (Za = null));
  }
  function Pl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ml === null ? (k.memoizedState = Ml = l) : (Ml = Ml.next = l), Ml);
  }
  function Al() {
    if (ml === null) {
      var l = k.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var t = Ml === null ? k.memoizedState : Ml.next;
    if (t !== null) ((Ml = t), (ml = l));
    else {
      if (l === null)
        throw k.alternate === null ? Error(o(467)) : Error(o(310));
      ((ml = l),
        (l = {
          memoizedState: ml.memoizedState,
          baseState: ml.baseState,
          baseQueue: ml.baseQueue,
          queue: ml.queue,
          next: null,
        }),
        Ml === null ? (k.memoizedState = Ml = l) : (Ml = Ml.next = l));
    }
    return Ml;
  }
  function $n() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xu(l) {
    var t = Qu;
    return (
      (Qu += 1),
      Za === null && (Za = []),
      (l = ur(Za, l, t)),
      (t = k),
      (Ml === null ? t.memoizedState : Ml.next) === null &&
        ((t = t.alternate),
        (R.H = t === null || t.memoizedState === null ? Fr : Wr)),
      l
    );
  }
  function In(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Xu(l);
      if (l.$$typeof === j) return;
      if (l.$$typeof === Bl) return Ll(l);
    }
    throw Error(o(438, String(l)));
  }
  function Wc(l) {
    var t = null,
      e = k.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = k.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = $n()), (k.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = $e;
    return (t.index++, e);
  }
  function me(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Pn(l) {
    var t = Al();
    return $c(t, ml, l);
  }
  function $c(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (a.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var f = (i = null),
        s = null,
        y = t,
        b = !1;
      do {
        var z = y.lane & -536870913;
        if (z !== y.lane ? (ll & z) === z : (he & z) === z) {
          var m = y.revertLane;
          if (m === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              z === sa && (b = !0));
          else if ((he & m) === m) {
            ((y = y.next), m === sa && (b = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              s === null ? ((f = s = z), (i = n)) : (s = s.next = z),
              (k.lanes |= m),
              (Ge |= m));
          ((z = y.action),
            ma && e(n, z),
            (n = y.hasEagerState ? y.eagerState : e(n, z)));
        } else
          ((m = {
            lane: z,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            s === null ? ((f = s = m), (i = n)) : (s = s.next = m),
            (k.lanes |= z),
            (Ge |= z));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (s === null ? (i = n) : (s.next = f),
        !vt(n, l.memoizedState) && ((Dl = !0), b && ((e = Xa), e !== null)))
      )
        throw e;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = s),
        (a.lastRenderedState = n));
    }
    return (u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
  }
  function Ic(l) {
    var t = Al(),
      e = t.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      u = e.pending,
      n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (vt(n, t.memoizedState) || (Dl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (e.lastRenderedState = n));
    }
    return [n, a];
  }
  function vr(l, t, e) {
    var a = k,
      u = Al(),
      n = W;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = t();
    var i = !vt((ml || u).memoizedState, e);
    if (
      (i && ((u.memoizedState = e), (Dl = !0)),
      (u = u.queue),
      tf(Sr.bind(null, a, u, l), [l]),
      (l =
        u.getSnapshot !== t ||
        i ||
        (Ml !== null && (Ml.memoizedState.tag & 1) !== 0)),
      Ka(l ? 9 : 8, { destroy: void 0 }, gr.bind(null, a, u, e, t), null),
      l)
    ) {
      if (((a.flags |= 2048), gl === null)) throw Error(o(349));
      n || (he & 127) !== 0 || yr(a, t, e);
    }
    return e;
  }
  function yr(l, t, e) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = k.updateQueue),
      t === null
        ? ((t = $n()), (k.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l)));
  }
  function gr(l, t, e, a) {
    ((t.value = e), (t.getSnapshot = a), br(t) && Tr(l));
  }
  function Sr(l, t, e) {
    return e(function () {
      br(t) && Tr(l);
    });
  }
  function br(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !vt(l, e);
    } catch {
      return !0;
    }
  }
  function Tr(l) {
    var t = aa(l, 2);
    t !== null && ft(t, l, 2);
  }
  function Pc(l) {
    var t = Pl();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), ma)) {
        pe(!0);
        try {
          e();
        } finally {
          pe(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: me,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Er(l, t, e, a) {
    return ((l.baseState = e), $c(l, ml, typeof a == "function" ? a : me));
  }
  function nv(l, t, e, a, u) {
    if (ei(l)) throw Error(o(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (R.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = t.pending),
        e === null
          ? ((n.next = t.pending = n), pr(t, n))
          : ((n.next = e.next), (t.pending = e.next = n)));
    }
  }
  function pr(l, t) {
    var e = t.action,
      a = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = R.T,
        i = {};
      ((i.types = n !== null ? n.types : null), (R.T = i));
      try {
        var f = e(u, a),
          s = R.S;
        (s !== null && s(i, f), zr(l, t, f));
      } catch (y) {
        lf(l, t, y);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (R.T = n));
      }
    } else
      try {
        ((n = e(u, a)), zr(l, t, n));
      } catch (y) {
        lf(l, t, y);
      }
  }
  function zr(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            xr(l, t, a);
          },
          function (a) {
            return lf(l, t, a);
          },
        )
      : xr(l, t, e);
  }
  function xr(l, t, e) {
    ((t.status = "fulfilled"),
      (t.value = e),
      jr(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), pr(l, e))));
  }
  function lf(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = e), jr(t), (t = t.next));
      while (t !== a);
    }
    l.action = null;
  }
  function jr(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Nr(l, t) {
    return t;
  }
  function _r(l, t) {
    if (W) {
      var e = gl.formState;
      if (e !== null) {
        l: {
          var a = k;
          if (W) {
            if (Tl) {
              t: {
                for (var u = Tl, n = At; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = Mt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((Tl = Mt(u.nextSibling)), (a = u.data === "F!"));
                break l;
              }
            }
            _e(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = Pl()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nr,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = Kr.bind(null, k, a)),
      (a.dispatch = e),
      (a = Pc(!1)),
      (n = cf.bind(null, k, !1, a.queue)),
      (a = Pl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = u),
      (e = nv.bind(null, k, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function Or(l) {
    var t = Al();
    return Ar(t, ml, l);
  }
  function Ar(l, t, e) {
    if (
      ((t = $c(l, t, Nr)[0]),
      (l = Pn(me)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Xu(t);
      } catch (i) {
        throw i === Va ? wn : i;
      }
    else a = t;
    t = Al();
    var u = t.queue,
      n = u.dispatch;
    return (
      e !== t.memoizedState &&
        ((k.flags |= 2048),
        Ka(9, { destroy: void 0 }, iv.bind(null, u, e), null)),
      [a, n, l]
    );
  }
  function iv(l, t) {
    l.action = t;
  }
  function Cr(l) {
    var t = Al(),
      e = ml;
    if (e !== null) return Ar(t, e, l);
    (Al(), (t = t.memoizedState), (e = Al()));
    var a = e.queue.dispatch;
    return ((e.memoizedState = l), [t, a, !1]);
  }
  function Ka(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = k.updateQueue),
      t === null && ((t = $n()), (k.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function Mr() {
    return Al().memoizedState;
  }
  function li(l, t, e, a) {
    var u = Pl();
    ((k.flags |= l),
      (u.memoizedState = Ka(
        1 | t,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a,
      )));
  }
  function ti(l, t, e, a) {
    var u = Al();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ml !== null && a !== null && Zc(a, ml.memoizedState.deps)
      ? (u.memoizedState = Ka(t, n, e, a))
      : ((k.flags |= l), (u.memoizedState = Ka(1 | t, n, e, a)));
  }
  function Dr(l, t) {
    li(8390656, 8, l, t);
  }
  function tf(l, t) {
    ti(2048, 8, l, t);
  }
  function cv(l) {
    k.flags |= 4;
    var t = k.updateQueue;
    if (t === null) ((t = $n()), (k.updateQueue = t), (t.events = [l]));
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function Rr(l) {
    var t = Al().memoizedState;
    return (
      cv({ ref: t, nextImpl: l }),
      function () {
        if ((fl & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Ur(l, t) {
    return ti(4, 2, l, t);
  }
  function Hr(l, t) {
    return ti(4, 4, l, t);
  }
  function qr(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Br(l, t, e) {
    ((e = e != null ? e.concat([l]) : null), ti(4, 4, qr.bind(null, t, l), e));
  }
  function ef() {}
  function Yr(l, t) {
    var e = Al();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Zc(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function Gr(l, t) {
    var e = Al();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Zc(t, a[1])) return a[0];
    if (((a = l()), ma)) {
      pe(!0);
      try {
        l();
      } finally {
        pe(!1);
      }
    }
    return ((e.memoizedState = [a, t]), a);
  }
  function af(l, t, e) {
    return e === void 0 || ((he & 1073741824) !== 0 && (ll & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = Fd()), (k.lanes |= l), (Ge |= l), e);
  }
  function Qr(l, t, e, a) {
    return vt(e, t)
      ? e
      : Re.current !== null
        ? ((l = af(l, e, a)), vt(l, t) || (Dl = !0), l)
        : (he & 106) === 0 || ((he & 1073741824) !== 0 && (ll & 261930) === 0)
          ? ((Dl = !0), (l.memoizedState = e))
          : ((l = Fd()), (k.lanes |= l), (Ge |= l), t);
  }
  function Xr(l, t, e, a, u) {
    var n = Z.p;
    Z.p = n !== 0 && 8 > n ? n : 8;
    var i = R.T,
      f = {};
    ((f.types = i !== null ? i.types : null), (R.T = f), cf(l, !1, t, e));
    try {
      var s = u(),
        y = R.S;
      if (
        (y !== null && y(f, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var b = ev(s, a);
        Vu(l, t, b, Tt(l));
      } else Vu(l, t, a, Tt(l));
    } catch (z) {
      Vu(l, t, { then: function () {}, status: "rejected", reason: z }, Tt());
    } finally {
      ((Z.p = n),
        i !== null && f.types !== null && (i.types = f.types),
        (R.T = i));
    }
  }
  function fv() {}
  function uf(l, t, e, a) {
    if (l.tag !== 5) throw Error(o(476));
    var u = Vr(l).queue;
    Xr(
      l,
      u,
      t,
      ae,
      e === null
        ? fv
        : function () {
            return (wr(l), e(a));
          },
    );
  }
  function Vr(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: me,
        lastRenderedState: ae,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: me,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function wr(l) {
    var t = Vr(l);
    (t.next === null && (t = l.alternate.memoizedState),
      Vu(l, t.next.queue, {}, Tt()));
  }
  function nf() {
    return Ll(ru);
  }
  function Lr() {
    return Al().memoizedState;
  }
  function Zr() {
    return Al().memoizedState;
  }
  function sv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = Tt();
          l = Me(e);
          var a = De(t, l, e);
          (a !== null && (ft(a, t, e), qu(a, t, e)),
            (t = { cache: Rc() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function ov(l, t, e) {
    var a = Tt();
    ((e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ei(l)
        ? Jr(t, e)
        : ((e = xc(l, t, e, a)), e !== null && (ft(e, l, a), kr(e, t, a))));
  }
  function Kr(l, t, e) {
    var a = Tt();
    Vu(l, t, e, a);
  }
  function Vu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ei(l)) Jr(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            f = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = f), vt(f, i)))
            return (Rn(l, t, u, 0), gl === null && Dn(), !1);
        } catch {
        } finally {
        }
      if (((e = xc(l, t, u, a)), e !== null))
        return (ft(e, l, a), kr(e, t, a), !0);
    }
    return !1;
  }
  function cf(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: $f(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ei(l))
    ) {
      if (t) throw Error(o(479));
    } else ((t = xc(l, e, a, 2)), t !== null && ft(t, l, 2));
  }
  function ei(l) {
    var t = l.alternate;
    return l === k || (t !== null && t === k);
  }
  function Jr(l, t) {
    La = Fn = !0;
    var e = l.pending;
    (e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t));
  }
  function kr(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), ks(l, e));
    }
  }
  var ai = {
      readContext: Ll,
      use: In,
      useCallback: _l,
      useContext: _l,
      useEffect: _l,
      useImperativeHandle: _l,
      useLayoutEffect: _l,
      useInsertionEffect: _l,
      useMemo: _l,
      useReducer: _l,
      useRef: _l,
      useState: _l,
      useDebugValue: _l,
      useDeferredValue: _l,
      useTransition: _l,
      useSyncExternalStore: _l,
      useId: _l,
      useHostTransitionStatus: _l,
      useFormState: _l,
      useActionState: _l,
      useOptimistic: _l,
      useMemoCache: _l,
      useCacheRefresh: _l,
      useEffectEvent: _l,
    },
    Fr = {
      readContext: Ll,
      use: In,
      useCallback: function (l, t) {
        return ((Pl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Ll,
      useEffect: Dr,
      useImperativeHandle: function (l, t, e) {
        ((e = e != null ? e.concat([l]) : null),
          li(4194308, 4, qr.bind(null, t, l), e));
      },
      useLayoutEffect: function (l, t) {
        return li(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        li(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = Pl();
        t = t === void 0 ? null : t;
        var a = l();
        if (ma) {
          pe(!0);
          try {
            l();
          } finally {
            pe(!1);
          }
        }
        return ((e.memoizedState = [a, t]), a);
      },
      useReducer: function (l, t, e) {
        var a = Pl();
        if (e !== void 0) {
          var u = e(t);
          if (ma) {
            pe(!0);
            try {
              e(t);
            } finally {
              pe(!1);
            }
          }
        } else u = t;
        return (
          (a.memoizedState = a.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (a.queue = l),
          (l = l.dispatch = ov.bind(null, k, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Pl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Pc(l);
        var t = l.queue,
          e = Kr.bind(null, k, t);
        return ((t.dispatch = e), [l.memoizedState, e]);
      },
      useDebugValue: ef,
      useDeferredValue: function (l, t) {
        var e = Pl();
        return af(e, l, t);
      },
      useTransition: function () {
        var l = Pc(!1);
        return (
          (l = Xr.bind(null, k, l.queue, !0, !1)),
          (Pl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = k,
          u = Pl();
        if (W) {
          if (e === void 0) throw Error(o(407));
          e = e();
        } else {
          if (((e = t()), gl === null)) throw Error(o(349));
          (ll & 127) !== 0 || yr(a, t, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: t };
        return (
          (u.queue = n),
          Dr(Sr.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          Ka(9, { destroy: void 0 }, gr.bind(null, a, n, e, t), null),
          e
        );
      },
      useId: function () {
        var l = Pl(),
          t = gl.identifierPrefix;
        if (W) {
          var e = Jt,
            a = Kt;
          ((e = (a & ~(1 << (32 - ht(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = Wn++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_"));
        } else ((e = av++), (t = "_" + t + "r_" + e.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: nf,
      useFormState: _r,
      useActionState: _r,
      useOptimistic: function (l) {
        var t = Pl();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e),
          (t = cf.bind(null, k, !0, e)),
          (e.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Wc,
      useCacheRefresh: function () {
        return (Pl().memoizedState = sv.bind(null, k));
      },
      useEffectEvent: function (l) {
        var t = Pl(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((fl & 2) !== 0) throw Error(o(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Wr = {
      readContext: Ll,
      use: In,
      useCallback: Yr,
      useContext: Ll,
      useEffect: tf,
      useImperativeHandle: Br,
      useInsertionEffect: Ur,
      useLayoutEffect: Hr,
      useMemo: Gr,
      useReducer: Pn,
      useRef: Mr,
      useState: function () {
        return Pn(me);
      },
      useDebugValue: ef,
      useDeferredValue: function (l, t) {
        var e = Al();
        return Qr(e, ml.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Pn(me)[0],
          t = Al().memoizedState;
        return [typeof l == "boolean" ? l : Xu(l), t];
      },
      useSyncExternalStore: vr,
      useId: Lr,
      useHostTransitionStatus: nf,
      useFormState: Or,
      useActionState: Or,
      useOptimistic: function (l, t) {
        var e = Al();
        return Er(e, ml, l, t);
      },
      useMemoCache: Wc,
      useCacheRefresh: Zr,
      useEffectEvent: Rr,
    },
    rv = {
      readContext: Ll,
      use: In,
      useCallback: Yr,
      useContext: Ll,
      useEffect: tf,
      useImperativeHandle: Br,
      useInsertionEffect: Ur,
      useLayoutEffect: Hr,
      useMemo: Gr,
      useReducer: Ic,
      useRef: Mr,
      useState: function () {
        return Ic(me);
      },
      useDebugValue: ef,
      useDeferredValue: function (l, t) {
        var e = Al();
        return ml === null ? af(e, l, t) : Qr(e, ml.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Ic(me)[0],
          t = Al().memoizedState;
        return [typeof l == "boolean" ? l : Xu(l), t];
      },
      useSyncExternalStore: vr,
      useId: Lr,
      useHostTransitionStatus: nf,
      useFormState: Cr,
      useActionState: Cr,
      useOptimistic: function (l, t) {
        var e = Al();
        return ml !== null
          ? Er(e, ml, l, t)
          : ((e.baseState = l), [l, e.queue.dispatch]);
      },
      useMemoCache: Wc,
      useCacheRefresh: Zr,
      useEffectEvent: Rr,
    };
  function ff(l, t, e, a) {
    ((t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : $({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e));
  }
  var sf = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = Tt(),
        u = Me(a);
      ((u.payload = t),
        e != null && (u.callback = e),
        (t = De(l, u, a)),
        t !== null && (ft(t, l, a), qu(t, l, a)));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = Tt(),
        u = Me(a);
      ((u.tag = 1),
        (u.payload = t),
        e != null && (u.callback = e),
        (t = De(l, u, a)),
        t !== null && (ft(t, l, a), qu(t, l, a)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = Tt(),
        a = Me(e);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = De(l, a, e)),
        t !== null && (ft(t, l, e), qu(t, l, e)));
    },
  };
  function $r(l, t, e, a, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ou(e, a) || !Ou(u, n)
          : !0
    );
  }
  function Ir(l, t, e, a) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && sf.enqueueReplaceState(t, t.state, null));
  }
  function va(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = $({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Pr(l) {
    Mn(l);
  }
  function ld(l) {
    console.error(l);
  }
  function td(l) {
    Mn(l);
  }
  function ui(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ed(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function of(l, t, e) {
    return (
      (e = Me(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        ui(l, t);
      }),
      e
    );
  }
  function ad(l) {
    return ((l = Me(l)), (l.tag = 3), l);
  }
  function ud(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          ed(t, e, a);
        }));
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (ed(t, e, a),
          typeof u != "function" &&
            (Qe === null ? (Qe = new Set([this])) : Qe.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function dv(l, t, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && ca(t, e, u, !0),
        (e = Zl.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return (
              Wl === null ? ji() : e.alternate === null && Ol === 0 && (Ol = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Ln
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  kf(l, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Ln
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  kf(l, a, u)),
              !1
            );
        }
        throw Error(o(435, e.tag));
      }
      return (kf(l, a, u), ji(), !1);
    }
    if (W)
      return (
        (t = Zl.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== Ac && ((l = Error(o(422), { cause: a })), Mu(Nt(l, e))))
          : (a !== Ac && ((t = Error(o(423), { cause: a })), Mu(Nt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (a = Nt(a, e)),
            (u = of(l.stateNode, a, u)),
            Gc(l, u),
            Ol !== 4 && (Ol = 2)),
        !1
      );
    var n = Error(o(520), { cause: a });
    if (
      ((n = Nt(n, e)),
      Wu === null ? (Wu = [n]) : Wu.push(n),
      Ol !== 4 && (Ol = 2),
      t === null)
    )
      return !0;
    ((a = Nt(a, e)), (e = t));
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = u & -u),
            (e.lanes |= l),
            (l = of(e.stateNode, a, l)),
            Gc(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (Qe === null || !Qe.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = ad(u)),
              ud(u, l, e, a),
              Gc(e, u),
              !1
            );
          break;
        case 22:
          if (e.memoizedState !== null) return ((e.flags |= 65536), !1);
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var rf = Error(o(461)),
    Dl = !1;
  function Hl(l, t, e, a) {
    t.child = l === null ? fr(t, null, e, a) : ha(t, l.child, e, a);
  }
  function nd(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      fa(t),
      (a = Kc(l, t, e, i, n, u)),
      (f = Jc()),
      l !== null && !Dl
        ? (kc(l, t, u), ve(l, t, u))
        : (W && f && Bn(t), (t.flags |= 1), Hl(l, t, a, u), t.child)
    );
  }
  function id(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" &&
        !jc(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = n), cd(l, t, n, a, u))
        : ((l = Hn(e.type, null, a, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !bf(l, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Ou), e(i, a) && l.ref === t.ref)
      )
        return ve(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = se(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function cd(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ou(n, a) && l.ref === t.ref)
        if (((Dl = !1), (t.pendingProps = a = n), bf(l, u)))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else return ((t.lanes = l.lanes), ve(l, t, u));
    }
    return df(l, t, e, a, u);
  }
  function fd(l, t, e, a) {
    var u = a.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, u = 0; a !== null; )
            ((u = u | a.lanes | a.childLanes), (a = a.sibling));
          a = u & ~n;
        } else ((a = 0), (t.child = null));
        return sd(l, t, n, e, a);
      }
      if ((e & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Vn(t, n !== null ? n.cachePool : null),
          n !== null ? rr(t, n) : Xc(),
          dr(t));
      else
        return (
          (a = t.lanes = 536870912),
          sd(l, t, n !== null ? n.baseLanes | e : e, e, a)
        );
    } else
      n !== null
        ? (Vn(t, n.cachePool), rr(t, n), He(), (t.memoizedState = null))
        : (l !== null && Vn(t, null), Xc(), He());
    return (Hl(l, t, u, e), t.child);
  }
  function wu(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function sd(l, t, e, a, u) {
    var n = Hc();
    return (
      (n = n === null ? null : { parent: Cl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: e, cachePool: n }),
      l !== null && Vn(t, null),
      Xc(),
      dr(t),
      l !== null && ca(l, t, a, !0),
      (t.childLanes = u),
      null
    );
  }
  function ni(l, t) {
    return (
      (t = ii({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function od(l, t, e) {
    return (
      ha(t, l.child, null, e),
      (l = ni(t, t.pendingProps)),
      (l.flags |= 2),
      yt(t),
      (t.memoizedState = null),
      l
    );
  }
  function hv(l, t, e) {
    var a = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (W) {
        if (a.mode === "hidden")
          return (
            (l = ni(t, a)),
            (t.lanes = 536870912),
            (l.memoizedState = { baseLanes: 0, cachePool: null }),
            wu(null, l)
          );
        if (
          (wc(t),
          (l = Tl)
            ? ((l = qh(l, At)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: je !== null ? { id: Kt, overflow: Jt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = Jo(l)),
                (e.return = t),
                (t.child = e),
                (Gl = t),
                (Tl = null)))
            : (l = null),
          l === null)
        )
          throw _e(t);
        return ((t.lanes = 536870912), null);
      }
      return ni(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((wc(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = od(l, t, e)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (Dl || ca(l, t, e, !1), (u = (e & l.childLanes) !== 0), Dl || u)
      ) {
        if (Re.current === null) {
          if (
            ((a = gl),
            a !== null && ((i = Fs(a, e)), i !== 0 && i !== n.retryLane))
          )
            throw ((n.retryLane = i), aa(l, i), ft(a, l, i), rf);
          ji();
        }
        t = od(l, t, e);
      } else
        ((l = n.treeContext),
          (Tl = Mt(i.nextSibling)),
          (Gl = t),
          (W = !0),
          (Ne = null),
          (At = !1),
          l !== null && Wo(t, l),
          (t = ni(t, a)),
          (t.flags |= 134221824));
      return t;
    }
    return (
      (l = se(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Ja(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(o(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function df(l, t, e, a, u) {
    return (
      fa(t),
      (e = Kc(l, t, e, a, void 0, u)),
      (a = Jc()),
      l !== null && !Dl
        ? (kc(l, t, u), ve(l, t, u))
        : (W && a && Bn(t), (t.flags |= 1), Hl(l, t, e, u), t.child)
    );
  }
  function rd(l, t, e, a, u, n) {
    return (
      fa(t),
      (t.updateQueue = null),
      (e = mr(t, a, e, u)),
      hr(l),
      (a = Jc()),
      l !== null && !Dl
        ? (kc(l, t, n), ve(l, t, n))
        : (W && a && Bn(t), (t.flags |= 1), Hl(l, t, e, n), t.child)
    );
  }
  function dd(l, t, e, a, u) {
    if ((fa(t), t.stateNode === null)) {
      var n = Ba,
        i = e.contextType;
      (typeof i == "object" && i !== null && (n = Ll(i)),
        (n = new e(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = sf),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Bc(t),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? Ll(i) : Ba),
        (n.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (ff(t, e, i, a), (n.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && sf.enqueueReplaceState(n, n.state, null),
          Yu(t, a, n, u),
          Bu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        s = va(e, f);
      n.props = s;
      var y = n.context,
        b = e.contextType;
      ((i = Ba), typeof b == "object" && b !== null && (i = Ll(b)));
      var z = e.getDerivedStateFromProps;
      ((b =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        b ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || y !== i) && Ir(t, n, a, i)),
        (Ce = !1));
      var m = t.memoizedState;
      ((n.state = m),
        Yu(t, a, n, u),
        Bu(),
        (y = t.memoizedState),
        f || m !== y || Ce
          ? (typeof z == "function" && (ff(t, e, z, a), (y = t.memoizedState)),
            (s = Ce || $r(t, e, s, a, m, y, i))
              ? (b ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (n.props = a),
            (n.state = y),
            (n.context = i),
            (a = s))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((n = t.stateNode),
        Yc(l, t),
        (i = t.memoizedProps),
        (b = va(e, i)),
        (n.props = b),
        (z = t.pendingProps),
        (m = n.context),
        (y = e.contextType),
        (s = Ba),
        typeof y == "object" && y !== null && (s = Ll(y)),
        (f = e.getDerivedStateFromProps),
        (y =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== z || m !== s) && Ir(t, n, a, s)),
        (Ce = !1),
        (m = t.memoizedState),
        (n.state = m),
        Yu(t, a, n, u),
        Bu());
      var S = t.memoizedState;
      i !== z ||
      m !== S ||
      Ce ||
      (l !== null && l.dependencies !== null && Qn(l.dependencies))
        ? (typeof f == "function" && (ff(t, e, f, a), (S = t.memoizedState)),
          (b =
            Ce ||
            $r(t, e, b, a, m, S, s) ||
            (l !== null && l.dependencies !== null && Qn(l.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, S, s),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, S, s)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = S)),
          (n.props = a),
          (n.state = S),
          (n.context = s),
          (a = b))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      Ja(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = ha(t, l.child, null, u)),
              (t.child = ha(t, null, e, u)))
            : Hl(l, t, e, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = ve(l, t, u)),
      l
    );
  }
  function hd(l, t, e, a) {
    return (na(), (t.flags |= 256), Hl(l, t, e, a), t.child);
  }
  var hf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function mf(l) {
    return { baseLanes: l, cachePool: er() };
  }
  function vf(l, t, e) {
    return ((l = l !== null ? l.childLanes & ~e : 0), t && (l |= bt), l);
  }
  function md(l, t, e) {
    var a = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Kl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (W) {
        if (
          (u ? Ue(t) : He(),
          (l = Tl)
            ? ((l = qh(l, At)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: je !== null ? { id: Kt, overflow: Jt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = Jo(l)),
                (e.return = t),
                (t.child = e),
                (Gl = t),
                (Tl = null)))
            : (l = null),
          l === null)
        )
          throw _e(t);
        return (ms(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      return (
        (n = a.children),
        (a = a.fallback),
        u
          ? (He(),
            (u = t.mode),
            (n = ii({ mode: "hidden", children: n }, u)),
            (a = ua(a, u, e, null)),
            (n.return = t),
            (a.return = t),
            (n.sibling = a),
            (t.child = n),
            (a = t.child),
            (a.memoizedState = mf(e)),
            (a.childLanes = vf(l, i, e)),
            (t.memoizedState = hf),
            wu(null, a))
          : (Ue(t), yf(t, n))
      );
    }
    var f = l.memoizedState;
    if (f !== null) {
      var s = f.dehydrated;
      if (s !== null) return mv(l, t, n, i, a, s, f, e);
    }
    return u
      ? (He(),
        (u = a.fallback),
        (n = t.mode),
        (f = l.child),
        (s = f.sibling),
        (a = se(f, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 1206910976),
        s !== null ? (u = se(s, u)) : ((u = ua(u, n, e, null)), (u.flags |= 2)),
        (u.return = t),
        (a.return = t),
        (a.sibling = u),
        (t.child = a),
        wu(null, a),
        (a = t.child),
        (u = l.child.memoizedState),
        u === null
          ? (u = mf(e))
          : ((n = u.cachePool),
            n !== null
              ? ((f = Cl._currentValue),
                (n = n.parent !== f ? { parent: f, pool: f } : n))
              : (n = er()),
            (u = { baseLanes: u.baseLanes | e, cachePool: n })),
        (a.memoizedState = u),
        (a.childLanes = vf(l, i, e)),
        (t.memoizedState = hf),
        wu(l.child, a))
      : (Ue(t),
        (e = l.child),
        (l = e.sibling),
        (e = se(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function yf(l, t) {
    return (
      (t = ii({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function ii(l, t) {
    return ((l = ut(22, l, null, t)), (l.lanes = 0), l);
  }
  function ci(l, t, e) {
    return (
      ha(t, l.child, null, e),
      (l = yf(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function mv(l, t, e, a, u, n, i, f) {
    if (e)
      return t.flags & 256
        ? (Ue(t), (t.flags &= -257), ci(l, t, f))
        : t.memoizedState !== null
          ? (He(), (t.child = l.child), (t.flags |= 128), null)
          : (He(),
            (n = u.fallback),
            (i = t.mode),
            (u = ii({ mode: "visible", children: u.children }, i)),
            (n = ua(n, i, f, null)),
            (n.flags |= 2),
            (u.return = t),
            (n.return = t),
            (u.sibling = n),
            (t.child = u),
            ha(t, l.child, null, f),
            (u = t.child),
            (u.memoizedState = mf(f)),
            (u.childLanes = vf(l, a, f)),
            (t.memoizedState = hf),
            wu(null, u));
    if ((Ue(t), ms(n))) {
      if (((a = n.nextSibling && n.nextSibling.dataset), a)) var s = a.dgst;
      return (
        (a = s),
        a !== "" &&
          ((u = Error(o(419))),
          (u.stack = ""),
          (u.digest = a),
          Mu({ value: u, source: null, stack: null })),
        ci(l, t, f)
      );
    }
    if ((Dl || ca(l, t, f, !1), (a = (f & l.childLanes) !== 0), Dl || a)) {
      if (Re.current !== null) return ci(l, t, f);
      if (
        ((a = gl), a !== null && ((u = Fs(a, f)), u !== 0 && u !== i.retryLane))
      )
        throw ((i.retryLane = u), aa(l, u), ft(a, l, u), rf);
      return (hs(n) || ji(), ci(l, t, f));
    }
    return hs(n)
      ? ((t.flags |= 192), (t.child = l.child), null)
      : ((l = i.treeContext),
        (Tl = Mt(n.nextSibling)),
        (Gl = t),
        (W = !0),
        (Ne = null),
        (At = !1),
        l !== null && Wo(t, l),
        (t = yf(t, u.children)),
        (t.flags |= 134221824),
        t);
  }
  function vd(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    (a !== null && (a.lanes |= t), Gn(l.return, t, e));
  }
  function yd(l) {
    for (var t = null; l !== null; ) {
      var e = l.alternate;
      (e !== null && kn(e) === null && (t = l), (l = l.sibling));
    }
    return t;
  }
  function fi(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function gf(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var e = t.sibling;
      ((t.sibling = l.child), (l.child = t), (t = e));
    }
  }
  function Sf(l, t, e) {
    var a = t.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = Kl.current;
    if (t.flags & 128) return (Gu(t, i), null);
    var f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      Gu(t, i),
      u === "backwards" && l !== null
        ? (gf(l), Hl(l, t, a, e), gf(l))
        : Hl(l, t, a, e),
      (a = W ? Cu : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && vd(l, e, t);
        else if (l.tag === 19) vd(l, e, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "backwards":
        ((e = yd(t.child)),
          e === null
            ? ((u = t.child), (t.child = null))
            : ((u = e.sibling), (e.sibling = null), gf(t)),
          fi(t, !0, u, null, n, a));
        break;
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && kn(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = e), (e = u), (u = l));
        }
        fi(t, !0, e, null, n, a);
        break;
      case "together":
        fi(t, !1, null, null, void 0, a);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        ((e = yd(t.child)),
          e === null
            ? ((u = t.child), (t.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          fi(t, !1, u, e, n, a));
    }
    return t.child;
  }
  function gd(l, t, e) {
    var a = t.pendingProps;
    return (Oe(t, t.type, a.value), Hl(l, t, a.children, e), t.child);
  }
  function ve(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (Ge |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ca(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        l = t.child, e = se(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (e = e.sibling = se(l, l.pendingProps)),
          (e.return = t));
      e.sibling = null;
    }
    return t.child;
  }
  function bf(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Qn(l)));
  }
  function vv(l, t, e) {
    switch (t.tag) {
      case 3:
        (hn(t, t.stateNode.containerInfo),
          Oe(t, Cl, l.memoizedState.cache),
          na());
        break;
      case 27:
      case 5:
        Zi(t);
        break;
      case 4:
        hn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Oe(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), wc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return (Ue(t), (t.flags |= 128), null);
          a = ca(l, t, e, !1);
          var u = t.child.childLanes;
          return a || (e & u) !== 0
            ? md(l, t, e)
            : (Ue(t), (l = ve(l, t, e)), l !== null ? l.sibling : null);
        }
        Ue(t);
        break;
      case 19:
        if (t.flags & 128) return Sf(l, t, e);
        if (
          ((u = (l.flags & 128) !== 0),
          (a = (e & t.childLanes) !== 0),
          a || (ca(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          u)
        ) {
          if (a) return Sf(l, t, e);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Gu(t, Kl.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), fd(l, t, e, t.pendingProps));
      case 24:
        Oe(t, Cl, l.memoizedState.cache);
    }
    return ve(l, t, e);
  }
  function Sd(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Dl = !0;
      else {
        if (!bf(l, e) && (t.flags & 128) === 0) return ((Dl = !1), vv(l, t, e));
        Dl = (l.flags & 131072) !== 0;
      }
    else ((Dl = !1), W && (t.flags & 1048576) !== 0 && Fo(t, Cu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = ra(t.elementType)), (t.type = l), typeof l == "function"))
            jc(l)
              ? ((a = va(l, a)), (t.tag = 1), (t = dd(null, t, l, a, e)))
              : ((t.tag = 0), (t = df(null, t, l, a, e)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === O) {
                ((t.tag = 11), (t = nd(null, t, l, a, e)));
                break l;
              } else if (u === yl) {
                ((t.tag = 14), (t = id(null, t, l, a, e)));
                break l;
              } else if (u === Bl) {
                ((t.tag = 10), (t.type = l), (t = gd(null, t, e)));
                break l;
              }
            }
            throw ((t = ul(l) || l), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return df(l, t, t.type, t.pendingProps, e);
      case 1:
        return ((a = t.type), (u = va(a, t.pendingProps)), dd(l, t, a, u, e));
      case 3:
        l: {
          if ((hn(t, t.stateNode.containerInfo), l === null))
            throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Yc(l, t), Yu(t, a, null, e));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            Oe(t, Cl, a),
            a !== n.cache && Dc(t, [Cl], e, !0),
            Bu(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = hd(l, t, a, e);
              break l;
            } else if (a !== u) {
              ((u = Nt(Error(o(424)), t)), Mu(u), (t = hd(l, t, a, e)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                Tl = Mt(l.firstChild),
                  Gl = t,
                  W = !0,
                  Ne = null,
                  At = !0,
                  e = fr(t, null, a, e),
                  t.child = e;
                e;
              )
                ((e.flags = (e.flags & -3) | 134221824), (e = e.sibling));
            }
          else {
            if ((na(), a === u)) {
              t = ve(l, t, e);
              break l;
            }
            Hl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ja(l, t),
          l === null
            ? (e = wh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : W || (t.stateNode = ph(t.type, t.pendingProps, Te.current, t))
            : (t.memoizedState = wh(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Zi(t),
          l === null &&
            W &&
            ((a = t.stateNode = Gh(t.type, t.pendingProps, Te.current)),
            (Gl = t),
            (At = !0),
            (u = Tl),
            we(t.type) ? ((vs = u), (Tl = Mt(a.firstChild))) : (Tl = u)),
          Hl(l, t, t.pendingProps.children, e),
          Ja(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            W &&
            ((u = a = Tl) &&
              ((a = s1(a, t.type, t.pendingProps, At)),
              a !== null
                ? ((t.stateNode = a),
                  (Gl = t),
                  (Tl = Mt(a.firstChild)),
                  (At = !1),
                  (u = !0))
                : (u = !1)),
            u || _e(t)),
          Zi(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = n.children),
          is(u, n) ? (a = null) : i !== null && is(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Kc(l, t, uv, null, null, e)), (ru._currentValue = u)),
          Ja(l, t),
          Hl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            W &&
            ((l = e = Tl) &&
              ((e = o1(e, t.pendingProps, At)),
              e !== null
                ? ((t.stateNode = e), (Gl = t), (Tl = null), (l = !0))
                : (l = !1)),
            l || _e(t)),
          null
        );
      case 13:
        return md(l, t, e);
      case 4:
        return (
          hn(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = ha(t, null, a, e)) : Hl(l, t, a, e),
          t.child
        );
      case 11:
        return nd(l, t, t.type, t.pendingProps, e);
      case 7:
        return ((a = t.pendingProps), Ja(l, t), Hl(l, t, a, e), t.child);
      case 8:
        return (Hl(l, t, t.pendingProps.children, e), t.child);
      case 12:
        return (Hl(l, t, t.pendingProps.children, e), t.child);
      case 10:
        return gd(l, t, e);
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          fa(t),
          (u = Ll(u)),
          (a = a(u)),
          (t.flags |= 1),
          Hl(l, t, a, e),
          t.child
        );
      case 14:
        return id(l, t, t.type, t.pendingProps, e);
      case 15:
        return cd(l, t, t.type, t.pendingProps, e);
      case 19:
        return Sf(l, t, e);
      case 31:
        return hv(l, t, e);
      case 22:
        return fd(l, t, e, t.pendingProps);
      case 24:
        return (
          fa(t),
          (a = Ll(Cl)),
          l === null
            ? ((u = Hc()),
              u === null &&
                ((u = gl),
                (n = Rc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (t.memoizedState = { parent: a, cache: u }),
              Bc(t),
              Oe(t, Cl, u))
            : ((l.lanes & e) !== 0 && (Yc(l, t), Yu(t, null, null, e), Bu()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Oe(t, Cl, a))
                : ((a = n.cache),
                  Oe(t, Cl, a),
                  a !== u.cache && Dc(t, [Cl], e, !0))),
          Hl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 30:
        return (
          t.stateNode === null &&
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (a = t.pendingProps),
          a.name != null && a.name !== "auto"
            ? (t.flags |= l === null ? 18882560 : 18874368)
            : W && Bn(t),
          l !== null && l.memoizedProps.name !== a.name
            ? (t.flags |= 4194816)
            : Ja(l, t),
          Hl(l, t, a.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function ye(l) {
    l.flags |= 4;
  }
  function Tf(l, t, e, a, u) {
    var n;
    if (
      ((n = (l.mode & 32) !== 0) &&
        (n =
          e === null
            ? Jh(t, a)
            : Jh(t, a) && (a.src !== e.src || a.srcSet !== e.srcSet)),
      n)
    ) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Pd()) l.flags |= 8192;
        else throw ((da = Ln), qc);
    } else l.flags &= -16777217;
  }
  function bd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !kh(t)))
      if (Pd()) l.flags |= 8192;
      else throw ((da = Ln), qc);
  }
  function si(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Ks() : 536870912), (l.lanes |= t), (Ia |= t)));
  }
  function Lu(l, t) {
    if (!W)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var e = l.tail, a = null; e !== null; )
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
          break;
        default:
          for (t = l.tail, e = null; t !== null; )
            (t.alternate !== null && (e = t), (t = t.sibling));
          e === null ? (l.tail = null) : (e.sibling = null);
      }
  }
  function El(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 1206910976),
          (a |= u.flags & 1206910976),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= a), (l.childLanes = e), t);
  }
  function yv(l, t, e) {
    var a = t.pendingProps;
    switch ((Oc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (El(t), null);
      case 1:
        return (El(t), null);
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          de(Cl),
          xa(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (Qa(t)
              ? ye(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Cc())),
          El(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (ye(t),
              n !== null ? (El(t), bd(t, n)) : (El(t), Tf(t, u, null, a, e)))
            : n
              ? n !== l.memoizedState
                ? (ye(t), El(t), bd(t, n))
                : (El(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== a && ye(t),
                El(t),
                Tf(t, u, l, a, e)),
          null
        );
      case 27:
        if (
          (mn(t),
          (e = Te.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && ye(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return (El(t), (t.subtreeFlags &= -33554433), null);
          }
          ((l = Lt.current),
            Qa(t) ? $o(t) : ((l = Gh(u, a, e)), (t.stateNode = l), ye(t)));
        }
        return (El(t), (t.subtreeFlags &= -33554433), null);
      case 5:
        if ((mn(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && ye(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return (El(t), (t.subtreeFlags &= -33554433), null);
          }
          if (((n = Lt.current), Qa(t))) $o(t);
          else {
            var i = tn(Te.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (n.multiple = !0)
                        : a.size && (n.size = a.size));
                    break;
                  default:
                    n =
                      typeof a.is == "string"
                        ? i.createElement(u, { is: a.is })
                        : i.createElement(u);
                }
            }
            ((n[wl] = t), (n[at] = a));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((kl(n, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && ye(t);
          }
        }
        return (
          El(t),
          (t.subtreeFlags &= -33554433),
          Tf(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && ye(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
          if (((l = Te.current), Qa(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (u = Gl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            ((l[wl] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Sh(l.nodeValue, e)
              )),
              l || _e(t, !0));
          } else
            ((l = tn(l).createTextNode(a)), (l[wl] = t), (t.stateNode = l));
        }
        return (El(t), null);
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = Qa(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(o(557));
              l[wl] = t;
            } else
              (na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (El(t), (l = !1));
          } else
            ((e = Cc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (l = !0));
          if (!l) return t.flags & 256 ? (yt(t), t) : (yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (El(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = Qa(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[wl] = t;
            } else
              (na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (El(t), (u = !1));
          } else
            ((u = Cc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (yt(t), t) : (yt(t), null);
        }
        return (
          yt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (n = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (n = a.memoizedState.cachePool.pool),
                n !== u && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              si(t, t.updateQueue),
              El(t),
              null)
        );
      case 4:
        return (
          xa(),
          l === null && ts(t.stateNode.containerInfo),
          (t.flags |= 67108864),
          El(t),
          null
        );
      case 10:
        return (de(t.type), El(t), null);
      case 19:
        if ((Lc(t), (a = t.memoizedState), a === null)) return (El(t), null);
        if (((u = (t.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) Lu(a, !1);
          else {
            if (Ol !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = kn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      Lu(a, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      si(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;
                  )
                    (Ko(e, l), (e = e.sibling));
                  return (
                    Gu(t, (Kl.current & 1) | 2),
                    W && oe(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              rt() > Ei &&
              ((t.flags |= 128), (u = !0), Lu(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = kn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                si(t, l),
                Lu(a, !0),
                a.tail === null &&
                  a.tailMode !== "collapsed" &&
                  a.tailMode !== "visible" &&
                  !n.alternate &&
                  !W)
              )
                return (El(t), null);
            } else
              2 * rt() - a.renderingStartTime > Ei &&
                e !== 536870912 &&
                ((t.flags |= 128), (u = !0), Lu(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = a.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (a.last = n));
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (e = l; e !== null; ) {
              if (e.alternate !== null) {
                e = !1;
                break l;
              }
              e = e.sibling;
            }
            e = !0;
          }
          return (
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = rt()),
            (l.sibling = null),
            (n = Kl.current),
            (n = u ? (n & 1) | 2 : n & 1),
            a.tailMode === "visible" || a.tailMode === "collapsed" || !e || W
              ? Gu(t, n)
              : ((e = n), bl(Zl, t), bl(Kl, e), Wl === null && (Wl = t)),
            W && oe(t, a.treeForkCount),
            l
          );
        }
        return (El(t), null);
      case 22:
      case 23:
        return (
          yt(t),
          Vc(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (El(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : El(t),
          (e = t.updateQueue),
          e !== null && si(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && Vl(oa),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          de(Cl),
          El(t),
          null
        );
      case 25:
        return null;
      case 30:
        return ((t.flags |= 33554432), El(t), null);
    }
    throw Error(o(156, t.tag));
  }
  function gv(l, t) {
    switch ((Oc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          de(Cl),
          xa(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (mn(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((yt(t), t.alternate === null)) throw Error(o(340));
          na();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (yt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          na();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (
          Lc(t),
          (l = t.flags),
          l & 65536
            ? ((t.flags = (l & -65537) | 128),
              (l = t.memoizedState),
              l !== null && ((l.rendering = null), (l.tail = null)),
              (t.flags |= 4),
              t)
            : null
        );
      case 4:
        return (xa(), null);
      case 10:
        return (de(t.type), null);
      case 22:
      case 23:
        return (
          yt(t),
          Vc(),
          l !== null && Vl(oa),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (de(Cl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Td(l, t) {
    switch ((Oc(t), t.tag)) {
      case 3:
        (de(Cl), xa());
        break;
      case 26:
      case 27:
      case 5:
        mn(t);
        break;
      case 4:
        xa();
        break;
      case 31:
        t.memoizedState !== null && yt(t);
        break;
      case 13:
        yt(t);
        break;
      case 19:
        Lc(t);
        break;
      case 10:
        de(t.type);
        break;
      case 22:
      case 23:
        (yt(t), Vc(), l !== null && Vl(oa));
        break;
      case 24:
        de(Cl);
    }
  }
  function Zu(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            ((a = n()), (i.destroy = a));
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      dl(t, t.return, f);
    }
  }
  function qe(l, t, e) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              ((i.destroy = void 0), (u = t));
              var s = e,
                y = f;
              try {
                y();
              } catch (b) {
                dl(u, s, b);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (b) {
      dl(t, t.return, b);
    }
  }
  function Ed(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        or(t, e);
      } catch (a) {
        dl(l, l.return, a);
      }
    }
  }
  function pd(l, t, e) {
    ((e.props = va(l.type, l.memoizedProps)), (e.state = l.memoizedState));
    try {
      e.componentWillUnmount();
    } catch (a) {
      dl(l, t, a);
    }
  }
  function kt(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var u = l.stateNode,
              n = ce(l.memoizedProps, u);
            ((u.ref === null || u.ref.name !== n) && (u.ref = Ah(n)),
              (a = u.ref));
            break;
          case 7:
            if (l.stateNode === null) {
              var i = new Et(l);
              (T(l.child, !1, c1, i, void 0, void 0), (l.stateNode = i));
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (f) {
      dl(l, t, f);
    }
  }
  function Jl(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          dl(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          dl(l, t, u);
        }
      else e.current = null;
  }
  function oi(l, t) {
    if (
      (l.tag === 5 || l.tag === 27 || l.tag === 6) &&
      l.alternate === null &&
      t !== null
    )
      for (var e = 0; e < t.length; e++) Hh(l.stateNode, t[e]);
  }
  function zd(l) {
    for (
      var t = l.return;
      t !== null && (pf(t) && Hh(l.stateNode, t.stateNode), !Ef(t));
    )
      t = t.return;
  }
  function Ku(l) {
    for (
      var t = l.return;
      t !== null && (pf(t) && f1(l.stateNode, t.stateNode), !Ef(t));
    )
      t = t.return;
  }
  function Ef(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function pf(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function zf(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      dl(l, l.return, u);
    }
  }
  function xf(l, t, e) {
    try {
      var a = l.stateNode;
      (wv(a, l.type, e, t), (a[at] = t));
    } catch (u) {
      dl(l, l.return, u);
    }
  }
  function xd(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && we(l.type)) ||
      l.tag === 4
    );
  }
  function jf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || xd(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && we(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Nf(l, t, e, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((u = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e
            ).insertBefore(u, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            t.appendChild(u),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Zt)),
        oi(l, a),
        (nl = !0));
    else if (
      u !== 4 &&
      (u === 27 &&
        (oi(l, a), (a = null), we(l.type) && ((e = l.stateNode), (t = null))),
      (l = l.child),
      l !== null)
    )
      for (Nf(l, t, e, a), l = l.sibling; l !== null; )
        (Nf(l, t, e, a), (l = l.sibling));
  }
  function ri(l, t, e, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((u = l.stateNode),
        t ? e.insertBefore(u, t) : e.appendChild(u),
        oi(l, a),
        (nl = !0));
    else if (
      u !== 4 &&
      (u === 27 && (oi(l, a), (a = null), we(l.type) && (e = l.stateNode)),
      (l = l.child),
      l !== null)
    )
      for (ri(l, t, e, a), l = l.sibling; l !== null; )
        (ri(l, t, e, a), (l = l.sibling));
  }
  function jd(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (kl(t, a, e), (t[wl] = l), (t[at] = e));
    } catch (n) {
      dl(l, l.return, n);
    }
  }
  var di = !1,
    gt = null;
  function Nd(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (di = !0);
  }
  var Ft = null;
  function _d() {
    var l = Ft;
    return ((Ft = null), l);
  }
  var nt = 0;
  function ka(l, t, e, a, u) {
    return ((nt = 0), Od(l.child, t, e, a, u));
  }
  function Od(l, t, e, a, u) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var i = l.stateNode;
        if (a !== null) {
          var f = ss(i);
          (a.push(f), f.view && (n = !0));
        } else n || (ss(i).view && (n = !0));
        ((di = !0), _h(i, nt === 0 ? t : t + "_" + nt, e), nt++);
      } else
        (l.tag !== 22 || l.memoizedState === null) &&
          ((l.tag === 30 && u) || (Od(l.child, t, e, a, u) && (n = !0)));
      l = l.sibling;
    }
    return n;
  }
  function Wt(l, t) {
    for (; l !== null; )
      (l.tag === 5
        ? Oh(l.stateNode, l.memoizedProps)
        : (l.tag !== 22 || l.memoizedState === null) &&
          ((l.tag === 30 && t) || Wt(l.child, t)),
        (l = l.sibling));
  }
  function hi(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (
          (l.tag !== 22 || l.memoizedState === null) &&
          (hi(l),
          l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)
        ) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto") throw Error(o(544));
          var e = t.name;
          ((t = fe(t.default, t.share)),
            t !== "none" && (ka(l, e, t, null, !1) || Wt(l.child, !1)));
        }
        l = l.sibling;
      }
  }
  function _f(l, t) {
    if (l.tag === 30) {
      var e = l.stateNode,
        a = l.memoizedProps,
        u = ce(a, e),
        n = fe(a.default, e.paired ? a.share : a.enter);
      n !== "none"
        ? ka(l, u, n, null, !1)
          ? (hi(l), e.paired || t || eu(l, a.onEnter))
          : Wt(l.child, !1)
        : hi(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; ) (_f(l, t), (l = l.sibling));
    else hi(l);
  }
  function Of(l) {
    if (gt !== null && gt.size !== 0) {
      var t = gt;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var e = l.memoizedProps,
                a = e.name;
              if (a != null && a !== "auto") {
                var u = t.get(a);
                if (u !== void 0) {
                  var n = fe(e.default, e.share);
                  if (
                    (n !== "none" &&
                      (ka(l, a, n, null, !1)
                        ? ((n = l.stateNode),
                          (u.paired = n),
                          (n.paired = u),
                          eu(l, e.onShare))
                        : Wt(l.child, !1)),
                    t.delete(a),
                    t.size === 0)
                  )
                    break;
                }
              }
            }
            Of(l);
          }
          l = l.sibling;
        }
    }
  }
  function Af(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps,
        e = ce(t, l.stateNode),
        a = gt !== null ? gt.get(e) : void 0,
        u = fe(t.default, a !== void 0 ? t.share : t.exit);
      (u !== "none" &&
        (ka(l, e, u, null, !1)
          ? a !== void 0
            ? ((u = l.stateNode),
              (a.paired = u),
              (u.paired = a),
              gt.delete(e),
              eu(l, t.onShare))
            : eu(l, t.onExit)
          : Wt(l.child, !1)),
        gt !== null && Of(l));
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; ) (Af(l), (l = l.sibling));
    else gt !== null && Of(l);
  }
  function Ad(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps,
          e = ce(t, l.stateNode);
        ((t = fe(t.default, t.update)),
          (l.flags &= -5),
          t !== "none" && ka(l, e, t, (l.memoizedState = []), !1));
      } else (l.subtreeFlags & 33554432) !== 0 && Ad(l);
      l = l.sibling;
    }
  }
  function Cf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && ((t.paired = null), Wt(l.child, !1));
          }
          Cf(l);
        }
        l = l.sibling;
      }
  }
  function mi(l) {
    if (l.tag === 30) ((l.stateNode.paired = null), Wt(l.child, !1), Cf(l));
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; ) (mi(l), (l = l.sibling));
    else Cf(l);
  }
  function Cd(l) {
    for (l = l.child; l !== null; )
      (l.tag === 30
        ? Wt(l.child, !1)
        : (l.subtreeFlags & 33554432) !== 0 && Cd(l),
        (l = l.sibling));
  }
  function Mf(l, t, e, a, u, n, i) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var s = t.stateNode;
        if (n !== null && nt < n.length) {
          var y = n[nt],
            b = ss(s);
          (y.view || b.view) && (f = !0);
          var z;
          if ((z = (l.flags & 4) === 0))
            if (b.clip) z = !0;
            else {
              z = y.rect;
              var m = b.rect;
              z =
                z.y !== m.y ||
                z.x !== m.x ||
                z.height !== m.height ||
                z.width !== m.width;
            }
          (z && (l.flags |= 4),
            b.abs
              ? (b = !y.abs)
              : ((y = y.rect),
                (b = b.rect),
                (b = y.height !== b.height || y.width !== b.width)),
            b && (l.flags |= 32));
        } else l.flags |= 32;
        ((l.flags & 4) !== 0 && _h(s, nt === 0 ? e : e + "_" + nt, u),
          (f && (l.flags & 4) !== 0) ||
            (Ft === null && (Ft = []),
            Ft.push(s, nt === 0 ? a : a + "_" + nt, t.memoizedProps)),
          nt++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          (t.tag === 30 && i
            ? (l.flags |= t.flags & 32)
            : Mf(l, t.child, e, a, u, n, i) && (f = !0));
      t = t.sibling;
    }
    return f;
  }
  function Md(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var e = l.memoizedProps,
          a = l.stateNode,
          u = ce(e, a),
          n = fe(e.default, e.update),
          i;
        ((i = l.memoizedState), (l.memoizedState = null), (a = l));
        var f = l.child;
        ((nt = 0),
          (u = Mf(a, f, u, u, n, i, !1)),
          (l.flags & 4) !== 0 && u && eu(l, e.onUpdate));
      } else (l.subtreeFlags & 33554432) !== 0 && Md(l);
      l = l.sibling;
    }
  }
  var Ql = !1,
    ol = !1,
    $t = !1,
    Df = !1,
    Dd = typeof WeakSet == "function" ? WeakSet : Set,
    Xl = null,
    It = !1,
    Ju = !1,
    vi = !1,
    Rf = !1;
  function Sv(l, t, e) {
    if (((l = l.containerInfo), (us = du), (l = qo(l)), Sc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var n = u.anchorOffset,
              i = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, i.nodeType);
            } catch {
              a = null;
              break l;
            }
            var f = 0,
              s = -1,
              y = -1,
              b = 0,
              z = 0,
              m = l,
              S = null;
            t: for (;;) {
              for (
                var _;
                m !== a || (n !== 0 && m.nodeType !== 3) || (s = f + n),
                  m !== i || (u !== 0 && m.nodeType !== 3) || (y = f + u),
                  m.nodeType === 3 && (f += m.nodeValue.length),
                  (_ = m.firstChild) !== null;
              )
                ((S = m), (m = _));
              for (;;) {
                if (m === l) break t;
                if (
                  (S === a && ++b === n && (s = f),
                  S === i && ++z === u && (y = f),
                  (_ = m.nextSibling) !== null)
                )
                  break;
                ((m = S), (S = m.parentNode));
              }
              m = _;
            }
            a = s === -1 || y === -1 ? null : { start: s, end: y };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      ns = { focusedElem: l, selectionRange: a },
        du = !1,
        e = (e & 335544064) === e,
        Xl = t,
        t = e ? 9270 : 1024;
      Xl !== null;
    ) {
      if (((l = Xl), e && ((a = l.deletions), a !== null)))
        for (n = 0; n < a.length; n++) e && Af(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0) (e && Nd(l), yi(e));
      else {
        if (l.tag === 22) {
          if (((a = l.alternate), l.memoizedState !== null)) {
            (a !== null && a.memoizedState === null && e && Af(a), yi(e));
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            (e && Nd(l), yi(e));
            continue;
          }
        }
        ((a = l.child),
          (l.subtreeFlags & t) !== 0 && a !== null
            ? ((a.return = l), (Xl = a))
            : (e && Ad(l), yi(e)));
      }
    }
    gt = null;
  }
  function yi(l) {
    for (; Xl !== null; ) {
      var t = Xl,
        e = l,
        a = t.alternate,
        u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && a !== null) {
            ((e = void 0), (u = a.memoizedProps), (a = a.memoizedState));
            var n = t.stateNode;
            try {
              var i = va(t.type, u);
              ((e = n.getSnapshotBeforeUpdate(i, a)),
                (n.__reactInternalSnapshotBeforeUpdate = e));
            } catch (f) {
              dl(t, t.return, f);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (((a = t.stateNode.containerInfo), (e = a.nodeType), e === 9))
              ds(a);
            else if (e === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ds(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          e &&
            a !== null &&
            ((e = ce(a.memoizedProps, a.stateNode)),
            (u = t.memoizedProps),
            (u = fe(u.default, u.update)),
            u !== "none" && ka(a, e, u, (a.memoizedState = []), !0));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(o(163));
      }
      if (((a = t.sibling), a !== null)) {
        ((a.return = t.return), (Xl = a));
        break;
      }
      Xl = t.return;
    }
  }
  function Rd(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Pt(l, e), a & 4 && Zu(5, e));
        break;
      case 1:
        if ((Pt(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              dl(e, e.return, i);
            }
          else {
            var u = va(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              dl(e, e.return, i);
            }
          }
        (a & 64 && Ed(e), a & 512 && kt(e, e.return));
        break;
      case 3:
        if ((Pt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            or(l, t);
          } catch (i) {
            dl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && jd(e);
      case 26:
      case 5:
        (Pt(l, e), t === null && a & 4 && zf(e), a & 512 && kt(e, e.return));
        break;
      case 12:
        Pt(l, e);
        break;
      case 31:
        (Pt(l, e), a & 4 && Bd(l, e));
        break;
      case 13:
        (Pt(l, e),
          a & 4 && Yd(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = Cv.bind(null, e)), r1(l, e)))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Ql), !a)) {
          var n = (t !== null && t.memoizedState !== null) || ol;
          ((t = Ql),
            (u = ol),
            (Ql = a),
            (ol = n) && !u
              ? ((a = 2),
                (e.subtreeFlags & 8772) !== 0 && (a |= 1),
                Gt(l, e, a))
              : Pt(l, e),
            (Ql = t),
            (ol = u));
        }
        break;
      case 30:
        (Pt(l, e), a & 512 && kt(e, e.return));
        break;
      case 7:
        a & 512 && kt(e, e.return);
      default:
        Pt(l, e);
    }
  }
  function Uf(l, t) {
    for (l = l.child; l !== null; ) (Ud(l, t), (l = l.sibling));
  }
  function Ud(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var e = l.stateNode;
          if (t) {
            var a = e.style;
            typeof a.setProperty == "function"
              ? a.setProperty("display", "none", "important")
              : (a.display = "none");
          } else {
            var u = l.stateNode,
              n = l.memoizedProps.style,
              i = n != null && n.hasOwnProperty("display") ? n.display : null;
            u.style.display =
              i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (s) {
          dl(l, l.return, s);
        }
        Hf(l, t);
        break;
      case 6:
        try {
          ((l.stateNode.nodeValue = t ? "" : l.memoizedProps), (nl = !0));
        } catch (s) {
          dl(l, l.return, s);
        }
        break;
      case 18:
        try {
          var f = l.stateNode;
          t ? Nh(f, !0) : Nh(l.stateNode, !1);
        } catch (s) {
          dl(l, l.return, s);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Uf(l, t);
        break;
      default:
        Uf(l, t);
    }
  }
  function Hf(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var e = l,
            a = t;
          switch (e.tag) {
            case 4:
              Ud(e, a);
              break l;
            case 22:
              e.memoizedState === null && Hf(e, a);
              break l;
            default:
              Hf(e, a);
          }
        }
        l = l.sibling;
      }
  }
  function Hd(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), Hd(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && En(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var xl = null,
    it = !1;
  function Bt(l, t, e) {
    for (e = e.child; e !== null; ) (qd(l, t, e), (e = e.sibling));
  }
  function qd(l, t, e) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(yu, e);
      } catch {}
    switch (e.tag) {
      case 26:
        (ol || Jl(e, t),
          Bt(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode &&
              !ol &&
              ((e = e.stateNode), e.parentNode.removeChild(e)));
        break;
      case 27:
        (ol || Jl(e, t), Ku(e));
        var a = xl,
          u = it;
        (we(e.type) && ((xl = e.stateNode), (it = !1)),
          Bt(l, t, e),
          Qh(e.stateNode, e.type, e.memoizedProps),
          (xl = a),
          (it = u));
        break;
      case 5:
        (ol || Jl(e, t), Ku(e));
      case 6:
        if (
          (e.tag === 6 && Ku(e),
          (a = xl),
          (u = it),
          (xl = null),
          Bt(l, t, e),
          (xl = a),
          (it = u),
          xl !== null)
        )
          if (it)
            try {
              ((xl.nodeType === 9
                ? xl.body
                : xl.nodeName === "HTML"
                  ? xl.ownerDocument.body
                  : xl
              ).removeChild(e.stateNode),
                (nl = !0));
            } catch (n) {
              dl(e, t, n);
            }
          else
            try {
              (xl.removeChild(e.stateNode), (nl = !0));
            } catch (n) {
              dl(e, t, n);
            }
        break;
      case 18:
        xl !== null &&
          (it
            ? ((l = xl),
              jh(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                e.stateNode,
              ),
              hu(l))
            : jh(xl, e.stateNode));
        break;
      case 4:
        ((a = xl),
          (u = it),
          (xl = e.stateNode.containerInfo),
          (it = !0),
          Bt(l, t, e),
          (xl = a),
          (it = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (qe(2, e, t), ol || qe(4, e, t), Bt(l, t, e));
        break;
      case 1:
        (ol ||
          (Jl(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && pd(e, t, a)),
          Bt(l, t, e));
        break;
      case 21:
        Bt(l, t, e);
        break;
      case 22:
        ((ol = (a = ol) || e.memoizedState !== null), Bt(l, t, e), (ol = a));
        break;
      case 30:
        (Jl(e, t), Bt(l, t, e));
        break;
      case 7:
        (ol || Jl(e, t), Bt(l, t, e));
        break;
      default:
        Bt(l, t, e);
    }
  }
  function Bd(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        hu(l);
      } catch (e) {
        dl(t, t.return, e);
      }
    }
  }
  function Yd(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        hu(l);
      } catch (e) {
        dl(t, t.return, e);
      }
  }
  function bv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new Dd()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Dd()),
          t
        );
      default:
        throw Error(o(435, l.tag));
    }
  }
  function gi(l, t) {
    var e = bv(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Mv.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function lt(l, t, e) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var n = a[u],
          i = l,
          f = t,
          s = f;
        l: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (we(s.type)) {
                ((xl = s.stateNode), (it = !1));
                break l;
              }
              break;
            case 5:
              ((xl = s.stateNode), (it = !1));
              break l;
            case 3:
            case 4:
              ((xl = s.stateNode.containerInfo), (it = !0));
              break l;
          }
          s = s.return;
        }
        if (xl === null) throw Error(o(160));
        (qd(i, f, n),
          (xl = null),
          (it = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Gd(t, l, e), (t = t.sibling));
  }
  var Yt = null;
  function Gd(l, t, e) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          u & 4 &&
          ((a = l.updateQueue), (a = a !== null ? a.events : null), a !== null)
        )
          for (var n = 0; n < a.length; n++) {
            var i = a[n];
            i.ref.impl = i.nextImpl;
          }
        (lt(t, l, e),
          tt(l),
          u & 4 && (qe(3, l, l.return), Zu(3, l), qe(5, l, l.return)));
        break;
      case 1:
        (lt(t, l, e),
          tt(l),
          u & 512 && (ol || a === null || Jl(a, a.return)),
          u & 64 &&
            Ql &&
            ((l = l.updateQueue),
            l !== null &&
              ((t = l.callbacks),
              t !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? t : e.concat(t))))));
        break;
      case 26:
        if (
          ((n = Yt),
          lt(t, l, e),
          tt(l),
          u & 512 && (ol || a === null || Jl(a, a.return)),
          u & 4)
        )
          if (
            ((u = a !== null ? a.memoizedState : null),
            (e = l.memoizedState),
            a === null)
          )
            if (e === null)
              if (l.stateNode === null)
                if (Ql)
                  l.stateNode = ph(l.type, l.memoizedProps, t.containerInfo, l);
                else {
                  l: {
                    ((t = l.type),
                      (e = l.memoizedProps),
                      (u = n.ownerDocument || n));
                    t: switch (t) {
                      case "title":
                        ((a = u.getElementsByTagName("title")[0]),
                          (!a ||
                            a[bu] ||
                            a[wl] ||
                            a.namespaceURI === "http://www.w3.org/2000/svg" ||
                            a.hasAttribute("itemprop")) &&
                            ((a = u.createElement(t)),
                            u.head.insertBefore(
                              a,
                              u.querySelector("head > title"),
                            )),
                          kl(a, t, e),
                          (a[wl] = l),
                          Yl(a),
                          (t = a));
                        break l;
                      case "link":
                        if (
                          (n = Kh("link", "href", u).get(t + (e.href || "")))
                        ) {
                          for (i = 0; i < n.length; i++)
                            if (
                              ((a = n[i]),
                              a.getAttribute("href") ===
                                (e.href == null || e.href === ""
                                  ? null
                                  : e.href) &&
                                a.getAttribute("rel") ===
                                  (e.rel == null ? null : e.rel) &&
                                a.getAttribute("title") ===
                                  (e.title == null ? null : e.title) &&
                                a.getAttribute("crossorigin") ===
                                  (e.crossOrigin == null
                                    ? null
                                    : e.crossOrigin))
                            ) {
                              n.splice(i, 1);
                              break t;
                            }
                        }
                        ((a = u.createElement(t)),
                          kl(a, t, e),
                          u.head.appendChild(a));
                        break;
                      case "meta":
                        if (
                          (n = Kh("meta", "content", u).get(
                            t + (e.content || ""),
                          ))
                        ) {
                          for (i = 0; i < n.length; i++)
                            if (
                              ((a = n[i]),
                              a.getAttribute("content") ===
                                (e.content == null ? null : "" + e.content) &&
                                a.getAttribute("name") ===
                                  (e.name == null ? null : e.name) &&
                                a.getAttribute("property") ===
                                  (e.property == null ? null : e.property) &&
                                a.getAttribute("http-equiv") ===
                                  (e.httpEquiv == null ? null : e.httpEquiv) &&
                                a.getAttribute("charset") ===
                                  (e.charSet == null ? null : e.charSet))
                            ) {
                              n.splice(i, 1);
                              break t;
                            }
                        }
                        ((a = u.createElement(t)),
                          kl(a, t, e),
                          u.head.appendChild(a));
                        break;
                      default:
                        throw Error(o(468, t));
                    }
                    ((a[wl] = l), Yl(a), (t = a));
                  }
                  l.stateNode = t;
                }
              else Ql || bs(n, l.type, l.stateNode);
            else l.stateNode = Zh(n, e, l.memoizedProps);
          else
            u !== e
              ? (u === null
                  ? ((t = a.stateNode),
                    t === null || ol || t.parentNode.removeChild(t))
                  : u.count--,
                e === null
                  ? Ql || bs(n, l.type, l.stateNode)
                  : Zh(n, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                xf(l, l.memoizedProps, a.memoizedProps);
        break;
      case 27:
        (lt(t, l, e),
          tt(l),
          u & 512 && (ol || a === null || Jl(a, a.return)),
          a !== null && u & 4 && xf(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ((n = $t),
          ($t = !1),
          lt(t, l, e),
          ($t = n),
          tt(l),
          u & 512 && (ol || a === null || Jl(a, a.return)),
          l.flags & 32)
        ) {
          t = l.stateNode;
          try {
            (Ca(t, ""), (nl = !0));
          } catch (b) {
            dl(l, l.return, b);
          }
        }
        (u & 4 &&
          l.stateNode != null &&
          ((t = l.memoizedProps), xf(l, t, a !== null ? a.memoizedProps : t)),
          u & 1024 && (Df = !0));
        break;
      case 6:
        if ((lt(t, l, e), tt(l), u & 4)) {
          if (l.stateNode === null) throw Error(o(162));
          ((t = l.memoizedProps), (e = l.stateNode));
          try {
            ((e.nodeValue = t), (nl = !0));
          } catch (b) {
            dl(l, l.return, b);
          }
        }
        break;
      case 3:
        if (
          ((nl = !1),
          (Di = null),
          (n = Yt),
          (Yt = en(t.containerInfo)),
          lt(t, l, e),
          (Yt = n),
          tt(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            hu(t.containerInfo);
          } catch (b) {
            dl(l, l.return, b);
          }
        (Df && ((Df = !1), Qd(l)), (nl = !1));
        break;
      case 4:
        ((u = $t),
          ($t = Ql),
          (a = no()),
          (n = Yt),
          (Yt = en(l.stateNode.containerInfo)),
          lt(t, l, e),
          tt(l),
          (Yt = n),
          nl && Ju && (vi = !0),
          (nl = a),
          ($t = u));
        break;
      case 12:
        (lt(t, l, e), tt(l));
        break;
      case 31:
        (lt(t, l, e),
          tt(l),
          u & 4 &&
            ((t = l.updateQueue),
            t !== null && ((l.updateQueue = null), gi(l, t))));
        break;
      case 13:
        (lt(t, l, e),
          tt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Ti = rt()),
          u & 4 &&
            ((t = l.updateQueue),
            t !== null && ((l.updateQueue = null), gi(l, t))));
        break;
      case 22:
        ((n = l.memoizedState !== null),
          (i = a !== null && a.memoizedState !== null));
        var f = Ql,
          s = ol,
          y = $t;
        ((Ql = f || n),
          ($t = y || n),
          (ol = s || i),
          lt(t, l, e),
          (ol = s),
          ($t = y),
          (Ql = f),
          tt(l),
          u & 8192 &&
            ((t = l.stateNode),
            (t._visibility = n ? t._visibility & -2 : t._visibility | 1),
            !n ||
              a === null ||
              i ||
              Ql ||
              ol ||
              ((t = i || ol),
              (e = Ql),
              (a = ol),
              (Ql = n || Ql),
              (ol = t),
              Be(l, 2),
              (Ql = e),
              (ol = a)),
            (!n && $t) || Uf(l, n)),
          u & 4 &&
            ((t = l.updateQueue),
            t !== null &&
              ((e = t.retryQueue),
              e !== null && ((t.retryQueue = null), gi(l, e)))));
        break;
      case 19:
        (lt(t, l, e),
          tt(l),
          u & 4 &&
            ((t = l.updateQueue),
            t !== null && ((l.updateQueue = null), gi(l, t))));
        break;
      case 30:
        (u & 512 && (ol || a === null || Jl(a, a.return)),
          (u = no()),
          (n = Ju),
          (i = (e & 335544064) === e),
          (f = l.memoizedProps),
          (Ju = i && fe(f.default, f.update) !== "none"),
          lt(t, l, e),
          tt(l),
          i && a !== null && nl && (l.flags |= 4),
          (Ju = n),
          (nl = u));
        break;
      case 21:
        break;
      case 7:
        (u & 512 && (ol || a === null || Jl(a, a.return)),
          a && a.stateNode !== null && (a.stateNode._fragmentFiber = l));
      default:
        (lt(t, l, e), tt(l));
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (xd(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var u = l.return; u !== null; ) {
          if (pf(u)) {
            var n = u.stateNode;
            a === null ? (a = [n]) : a.push(n);
          }
          if (Ef(u)) break;
          u = u.return;
        }
        var i = a;
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var f = e.stateNode,
              s = jf(l);
            ri(l, s, f, i);
            break;
          case 5:
            var y = e.stateNode;
            e.flags & 32 && (Ca(y, ""), (e.flags &= -33));
            var b = jf(l);
            ri(l, b, y, i);
            break;
          case 3:
          case 4:
            var z = e.stateNode.containerInfo,
              m = jf(l);
            Nf(l, m, z, i);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        dl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Qd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (Qd(t),
          t.tag === 5 &&
            t.flags & 1024 &&
            ((t = t.stateNode), (du = !0), t.reset(), (du = !1)),
          (l = l.sibling));
      }
  }
  function Fa(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; ) (Xd(t, l), (t = t.sibling));
    else Md(t);
  }
  function Xd(l, t) {
    var e = l.alternate;
    if (e === null) _f(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (((Rf = It = !1), _d(), Fa(t, l), !It && !vi)) {
            if (((l = Ft), l !== null))
              for (var a = 0; a < l.length; a += 3) {
                e = l[a];
                var u = l[a + 1];
                (Oh(e, l[a + 2]),
                  (e = e.ownerDocument.documentElement),
                  e !== null &&
                    e.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + u + ")",
                      },
                    ));
              }
            ((l = t.containerInfo),
              (l =
                l.nodeType === 9
                  ? l.documentElement
                  : l.ownerDocument.documentElement),
              l !== null &&
                l.style.viewTransitionName === "" &&
                ((l.style.viewTransitionName = "none"),
                l.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                l.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (Rf = !0));
          }
          Ft = null;
          break;
        case 5:
          Fa(t, l);
          break;
        case 4:
          ((a = It), (It = !1), Fa(t, l), It && (vi = !0), (It = a));
          break;
        case 22:
          l.memoizedState === null &&
            (e.memoizedState !== null ? _f(l, !1) : Fa(t, l));
          break;
        case 30:
          ((a = It), (u = _d()), (It = !1), Fa(t, l), It && (l.flags |= 4));
          var n = l.memoizedProps,
            i = l.stateNode;
          ((t = ce(n, i)), (i = ce(e.memoizedProps, i)));
          var f = fe(n.default, n.update);
          (f === "none"
            ? (t = !1)
            : ((n = e.memoizedState),
              (e.memoizedState = null),
              (e = l.child),
              (nt = 0),
              (t = Mf(l, e, t, i, f, n, !0)),
              nt !== (n === null ? 0 : n.length) && (l.flags |= 32)),
            (l.flags & 4) !== 0 && t
              ? (eu(l, l.memoizedProps.onUpdate), (Ft = u))
              : u !== null && (u.push.apply(u, Ft), (Ft = u)),
            (It = (l.flags & 32) !== 0 ? !0 : a));
          break;
        default:
          Fa(t, l);
      }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Rd(l, t.alternate, t), (t = t.sibling));
  }
  function Be(l, t) {
    for (l = l.child; l !== null; ) {
      var e = l,
        a = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (qe(4, e, e.return), Be(e, a));
          break;
        case 1:
          Jl(e, e.return);
          var u = e.stateNode;
          (typeof u.componentWillUnmount == "function" && pd(e, e.return, u),
            Be(e, a));
          break;
        case 27:
          (a & 2) !== 0 && Qh(e.stateNode, e.type, e.memoizedProps);
        case 5:
          (Jl(e, e.return), (e.tag !== 5 && e.tag !== 27) || Ku(e), Be(e, a));
          break;
        case 6:
          Ku(e);
          break;
        case 26:
          (Jl(e, e.return),
            (u = e.stateNode),
            e.memoizedState !== null ||
              u === null ||
              ol ||
              u.parentNode.removeChild(u),
            Be(e, a));
          break;
        case 22:
          e.memoizedState === null && Be(e, a);
          break;
        case 30:
          (Jl(e, e.return), Be(e, a));
          break;
        case 7:
          Jl(e, e.return);
        default:
          Be(e, a);
      }
      l = l.sibling;
    }
  }
  function Gt(l, t, e) {
    for (
      e = (t.subtreeFlags & 8772) !== 0 ? e : e & -2, t = t.child;
      t !== null;
    ) {
      var a = t.alternate,
        u = l,
        n = t,
        i = n.flags,
        f = (e & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Gt(u, n, e), Zu(4, n));
          break;
        case 1:
          if (
            (Gt(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (b) {
              dl(a, a.return, b);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var s = a.stateNode;
            try {
              var y = u.shared.hiddenCallbacks;
              if (y !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < y.length; u++)
                  sr(y[u], s);
            } catch (b) {
              dl(a, a.return, b);
            }
          }
          (f && i & 64 && Ed(n), kt(n, n.return));
          break;
        case 27:
          (e & 2) !== 0 && jd(n);
        case 5:
          ((n.tag !== 5 && n.tag !== 27) || zd(n),
            Gt(u, n, e),
            f && a === null && i & 4 && zf(n),
            kt(n, n.return));
          break;
        case 6:
          zd(n);
          break;
        case 26:
          ((s = n.stateNode),
            n.memoizedState !== null ||
              s === null ||
              Ql ||
              bs(en(s.ownerDocument), n.type, s),
            Gt(u, n, e),
            f && a === null && i & 4 && zf(n),
            kt(n, n.return));
          break;
        case 12:
          Gt(u, n, e);
          break;
        case 31:
          (Gt(u, n, e), f && i & 4 && Bd(u, n));
          break;
        case 13:
          (Gt(u, n, e), f && i & 4 && Yd(u, n));
          break;
        case 22:
          (n.memoizedState === null && Gt(u, n, e), kt(n, n.return));
          break;
        case 30:
          (Gt(u, n, e), kt(n, n.return));
          break;
        case 7:
          kt(n, n.return);
        default:
          Gt(u, n, e);
      }
      t = t.sibling;
    }
  }
  function qf(l, t) {
    var e = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Du(e)));
  }
  function Bf(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Du(l)));
  }
  function Ct(l, t, e, a) {
    var u = (e & 335544064) === e;
    if (t.subtreeFlags & (u ? 10262 : 10256))
      for (t = t.child; t !== null; ) (Vd(l, t, e, a), (t = t.sibling));
    else u && Cd(t);
  }
  function Vd(l, t, e, a) {
    var u = (e & 335544064) === e;
    u &&
      t.alternate === null &&
      t.return !== null &&
      t.return.alternate !== null &&
      mi(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ct(l, t, e, a), n & 2048 && Zu(9, t));
        break;
      case 1:
        Ct(l, t, e, a);
        break;
      case 3:
        (Ct(l, t, e, a),
          u &&
            Rf &&
            ((l = l.containerInfo),
            (l =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            l.style.viewTransitionName === "root" &&
              (l.style.viewTransitionName = ""),
            (l = l.ownerDocument.documentElement),
            l !== null &&
              l.style.viewTransitionName === "none" &&
              (l.style.viewTransitionName = "")),
          n & 2048 &&
            ((n = null),
            t.alternate !== null && (n = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== n && (t.refCount++, n != null && Du(n))));
        break;
      case 12:
        if (n & 2048) {
          (Ct(l, t, e, a), (n = t.stateNode));
          try {
            var i = t.memoizedProps,
              f = i.id,
              s = i.onPostCommit;
            typeof s == "function" &&
              s(
                f,
                t.alternate === null ? "mount" : "update",
                n.passiveEffectDuration,
                -0,
              );
          } catch (y) {
            dl(t, t.return, y);
          }
        } else Ct(l, t, e, a);
        break;
      case 31:
        Ct(l, t, e, a);
        break;
      case 13:
        Ct(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? (u && f !== null && f.memoizedState === null && mi(f),
              i._visibility & 2 ? Ct(l, t, e, a) : ku(l, t))
            : (u && f !== null && f.memoizedState !== null && mi(t),
              i._visibility & 2
                ? Ct(l, t, e, a)
                : ((i._visibility |= 2),
                  Wa(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1))),
          n & 2048 && qf(f, t));
        break;
      case 24:
        (Ct(l, t, e, a), n & 2048 && Bf(t.alternate, t));
        break;
      case 30:
        (u &&
          ((n = t.alternate), n !== null && (Wt(n.child, !0), Wt(t.child, !0))),
          Ct(l, t, e, a));
        break;
      default:
        Ct(l, t, e, a);
    }
  }
  function Wa(l, t, e, a, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        f = e,
        s = a,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Wa(n, i, f, s, u), Zu(8, i));
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          (i.memoizedState !== null
            ? b._visibility & 2
              ? Wa(n, i, f, s, u)
              : ku(n, i)
            : ((b._visibility |= 2), Wa(n, i, f, s, u)),
            u && y & 2048 && qf(i.alternate, i));
          break;
        case 24:
          (Wa(n, i, f, s, u), u && y & 2048 && Bf(i.alternate, i));
          break;
        default:
          Wa(n, i, f, s, u);
      }
      t = t.sibling;
    }
  }
  function ku(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            (ku(e, a), u & 2048 && qf(a.alternate, a));
            break;
          case 24:
            (ku(e, a), u & 2048 && Bf(a.alternate, a));
            break;
          default:
            ku(e, a);
        }
        t = t.sibling;
      }
  }
  var ya = 8192;
  function ga(l, t, e) {
    if (l.subtreeFlags & ya)
      for (l = l.child; l !== null; ) (wd(l, t, e), (l = l.sibling));
  }
  function wd(l, t, e) {
    switch (l.tag) {
      case 26:
        (ga(l, t, e),
          l.flags & ya &&
            (l.memoizedState !== null
              ? j1(e, Yt, l.memoizedState, l.memoizedProps)
              : ((l = l.stateNode), (t & 335544128) === t && Wh(e, l))));
        break;
      case 5:
        (ga(l, t, e),
          l.flags & ya &&
            ((l = l.stateNode), (t & 335544128) === t && Wh(e, l)));
        break;
      case 3:
      case 4:
        var a = Yt;
        ((Yt = en(l.stateNode.containerInfo)), ga(l, t, e), (Yt = a));
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ya), (ya = 16777216), ga(l, t, e), (ya = a))
            : ga(l, t, e));
        break;
      case 30:
        if (
          (l.flags & ya) !== 0 &&
          ((a = l.memoizedProps.name), a != null && a !== "auto")
        ) {
          var u = l.stateNode;
          ((u.paired = null), gt === null && (gt = new Map()), gt.set(a, u));
        }
        ga(l, t, e);
        break;
      default:
        ga(l, t, e);
    }
  }
  function Ld(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function Fu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((Xl = a), Kd(a, l));
        }
      Ld(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (Zd(l), (l = l.sibling));
  }
  function Zd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Fu(l), l.flags & 2048 && qe(9, l, l.return));
        break;
      case 3:
        Fu(l);
        break;
      case 12:
        Fu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Si(l))
          : Fu(l);
        break;
      default:
        Fu(l);
    }
  }
  function Si(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((Xl = a), Kd(a, l));
        }
      Ld(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (qe(8, t, t.return), Si(t));
          break;
        case 22:
          ((e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), Si(t)));
          break;
        default:
          Si(t);
      }
      l = l.sibling;
    }
  }
  function Kd(l, t) {
    for (; Xl !== null; ) {
      var e = Xl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          qe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Du(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) ((a.return = e), (Xl = a));
      else
        l: for (e = l; Xl !== null; ) {
          a = Xl;
          var u = a.sibling,
            n = a.return;
          if ((Hd(a), a === e)) {
            Xl = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (Xl = u));
            break l;
          }
          Xl = n;
        }
    }
  }
  var Tv = {
      getCacheForType: function (l) {
        var t = Ll(Cl),
          e = t.data.get(l);
        return (e === void 0 && ((e = l()), t.data.set(l, e)), e);
      },
      cacheSignal: function () {
        return Ll(Cl).controller.signal;
      },
    },
    Ev = typeof WeakMap == "function" ? WeakMap : Map,
    fl = 0,
    gl = null,
    I = null,
    ll = 0,
    rl = 0,
    St = null,
    Ye = !1,
    $a = !1,
    Yf = !1,
    ge = 0,
    Ol = 0,
    Ge = 0,
    Sa = 0,
    bi = 0,
    bt = 0,
    Ia = 0,
    Wu = null,
    ct = null,
    Gf = !1,
    Ti = 0,
    Jd = 0,
    Ei = 1 / 0,
    pi = null,
    Qe = null,
    Nl = 0,
    Qt = null,
    ba = null,
    le = 0,
    Qf = 0,
    Xf = null,
    kd = null,
    Pa = null,
    lu = null,
    tu = null,
    $u = 0,
    zi = null;
  function Tt() {
    return (fl & 2) !== 0 && ll !== 0 ? ll & -ll : R.T !== null ? $f() : Ws();
  }
  function Fd() {
    if (bt === 0)
      if ((ll & 536870912) === 0 || W) {
        var l = gn;
        ((gn <<= 1), (gn & 3932160) === 0 && (gn = 262144), (bt = l));
      } else bt = 536870912;
    return ((l = Zl.current), l !== null && (l.flags |= 32), bt);
  }
  function eu(l, t) {
    if (t != null) {
      var e = l.stateNode,
        a = e.ref;
      (a === null && (a = e.ref = Ah(ce(l.memoizedProps, e))),
        lu === null && (lu = []),
        lu.push(t.bind(null, a)));
    }
  }
  function ft(l, t, e) {
    (((l === gl && (rl === 2 || rl === 9)) || l.cancelPendingCommit !== null) &&
      (au(l, 0), Xe(l, ll, bt, !1)),
      Su(l, e),
      ((fl & 2) === 0 || l !== gl) &&
        (l === gl &&
          ((fl & 2) === 0 && (Sa |= e), Ol === 4 && Xe(l, ll, bt, !1)),
        te(l)));
  }
  function Wd(l, t, e) {
    if ((fl & 6) !== 0) throw Error(o(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || gu(l, t),
      u = a ? xv(l, t) : wf(l, t, !0),
      n = a;
    do {
      if (u === 0) {
        $a && !a && Xe(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), n && !pv(e))) {
          ((u = wf(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              u = Wu;
              var s = f.current.memoizedState.isDehydrated;
              if (
                (s && (au(f, i).flags |= 256),
                (i = wf(f, i, !1)),
                i !== 2 && i !== 6)
              ) {
                if (Yf && !s) {
                  ((f.errorRecoveryDisabledLanes |= n), (Sa |= n), (u = 4));
                  break l;
                }
                ((n = ct),
                  (ct = u),
                  n !== null &&
                    (ct === null ? (ct = n) : ct.push.apply(ct, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (au(l, 0), Xe(l, t, 0, !0));
          break;
        }
        l: {
          switch (((a = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Xe(a, t, bt, !Ye);
              break l;
            case 2:
              ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((u = Ti + 300 - rt()), 10 < u)) {
            if ((Xe(a, t, bt, !Ye), bn(a, 0, !0) !== 0)) break l;
            ((le = t),
              (a.timeoutHandle = fs(
                $d.bind(
                  null,
                  a,
                  e,
                  ct,
                  pi,
                  Gf,
                  t,
                  bt,
                  Sa,
                  Ia,
                  Ye,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          $d(a, e, ct, pi, Gf, t, bt, Sa, Ia, Ye, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    te(l);
  }
  function $d(l, t, e, a, u, n, i, f, s, y, b, z, m, S) {
    l.timeoutHandle = -1;
    var _ = t.subtreeFlags,
      D = (n & 335544064) === n;
    if (
      ((z = null),
      (D || _ & 8192 || (_ & 16785408) === 16785408) &&
        ((z = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Zt,
        }),
        (gt = null),
        wd(t, n, z),
        D &&
          ((_ = z),
          (D = l.containerInfo),
          (D = (D.nodeType === 9 ? D : D.ownerDocument).__reactViewTransition),
          D != null &&
            (_.count++,
            (_.waitingForViewTransition = !0),
            (_ = nn.bind(_)),
            D.finished.then(_, _))),
        (_ =
          (n & 62914560) === n
            ? Ti - rt()
            : (n & 4194048) === n
              ? Jd - rt()
              : 0),
        (_ = N1(z, _)),
        _ !== null))
    ) {
      ((le = n),
        (l.cancelPendingCommit = _(
          nh.bind(null, l, t, n, e, a, u, i, f, s, y, b, z, null, m, S),
        )),
        Xe(l, n, i, !y));
      return;
    }
    nh(l, t, n, e, a, u, i, f, s, y, b, z);
  }
  function pv(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!vt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        ((e.return = t), (t = e));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Xe(l, t, e, a) {
    ((t = Zs(l, t)),
      (t &= ~bi),
      (t &= ~Sa),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - ht(u),
        i = 1 << n;
      ((a[n] = -1), (u &= ~i));
    }
    e !== 0 && Js(l, e, t);
  }
  function xi() {
    return (fl & 6) === 0 ? (Iu(0), !1) : !0;
  }
  function Vf() {
    if (I !== null) {
      if (rl === 0) var l = I.return;
      else ((l = I), (re = ia = null), Fc(l), (wa = null), (Hu = 0), (l = I));
      for (; l !== null; ) (Td(l.alternate, l), (l = l.return));
      I = null;
    }
  }
  function au(l, t) {
    var e = l.timeoutHandle;
    return (
      e !== -1 && ((l.timeoutHandle = -1), Kv(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      (le = 0),
      Vf(),
      (gl = l),
      (I = e = se(l.current, null)),
      (ll = t),
      (rl = 0),
      (St = null),
      (Ye = !1),
      ($a = gu(l, t)),
      (Yf = !1),
      (Ia = bt = bi = Sa = Ge = Ol = 0),
      (ct = Wu = null),
      (Gf = !1),
      (ge = Zs(l, t)),
      Dn(),
      e
    );
  }
  function Id(l, t) {
    ((k = null),
      (R.H = ai),
      t === Va || t === wn
        ? ((t = nr()), (rl = 3))
        : t === qc
          ? ((t = nr()), (rl = 4))
          : (rl =
              t === rf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (St = t),
      I === null && ((Ol = 1), ui(l, Nt(t, l.current))));
  }
  function Pd() {
    var l = Zl.current;
    return l === null
      ? !0
      : (ll & 4194048) === ll
        ? Wl === null
        : (ll & 62914560) === ll || (ll & 536870912) !== 0
          ? l === Wl
          : !1;
  }
  function lh() {
    var l = R.H;
    return ((R.H = ai), l === null ? ai : l);
  }
  function th() {
    var l = R.A;
    return ((R.A = Tv), l);
  }
  function ji() {
    ((Ol = 4),
      Ye || ((ll & 4194048) !== ll && Zl.current !== null) || ($a = !0),
      ((Ge & 134217727) === 0 && (Sa & 134217727) === 0) ||
        gl === null ||
        Xe(gl, ll, bt, !1));
  }
  function wf(l, t, e) {
    var a = fl;
    fl |= 2;
    var u = lh(),
      n = th();
    ((gl !== l || ll !== t) && ((pi = null), au(l, t)), (t = !1));
    var i = Ol;
    l: do
      try {
        if (rl !== 0 && I !== null) {
          var f = I,
            s = St;
          switch (rl) {
            case 8:
              (Vf(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Zl.current === null && (t = !0);
              var y = rl;
              if (((rl = 0), (St = null), uu(l, f, s, y), e && $a)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((y = rl), (rl = 0), (St = null), uu(l, f, s, y));
          }
        }
        (zv(), (i = Ol));
        break;
      } catch (b) {
        Id(l, b);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (re = ia = null),
      (fl = a),
      (R.H = u),
      (R.A = n),
      I === null && ((gl = null), (ll = 0), Dn()),
      i
    );
  }
  function zv() {
    for (; I !== null; ) eh(I);
  }
  function xv(l, t) {
    var e = fl;
    fl |= 2;
    var a = lh(),
      u = th();
    gl !== l || ll !== t
      ? ((pi = null), (Ei = rt() + 500), au(l, t))
      : ($a = gu(l, t));
    l: do
      try {
        if (rl !== 0 && I !== null) {
          t = I;
          var n = St;
          t: switch (rl) {
            case 1:
              ((rl = 0), (St = null), uu(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (ar(n)) {
                ((rl = 0), (St = null), ah(t));
                break;
              }
              ((t = function () {
                ((rl !== 2 && rl !== 9) || gl !== l || (rl = 7), te(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              rl = 7;
              break l;
            case 4:
              rl = 5;
              break l;
            case 7:
              ar(n)
                ? ((rl = 0), (St = null), ah(t))
                : ((rl = 0), (St = null), uu(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (I.tag) {
                case 26:
                  i = I.memoizedState;
                case 5:
                case 27:
                  var f = I;
                  if (i ? kh(i) : f.stateNode.complete) {
                    ((rl = 0), (St = null));
                    var s = f.sibling;
                    if (s !== null) I = s;
                    else {
                      var y = f.return;
                      y !== null ? ((I = y), Ni(y)) : (I = null);
                    }
                    break t;
                  }
              }
              ((rl = 0), (St = null), uu(l, t, n, 5));
              break;
            case 6:
              ((rl = 0), (St = null), uu(l, t, n, 6));
              break;
            case 8:
              (Vf(), (Ol = 6));
              break l;
            default:
              throw Error(o(462));
          }
        }
        jv();
        break;
      } catch (b) {
        Id(l, b);
      }
    while (!0);
    return (
      (re = ia = null),
      (R.H = a),
      (R.A = u),
      (fl = e),
      I !== null ? 0 : ((gl = null), (ll = 0), Dn(), Ol)
    );
  }
  function jv() {
    for (; I !== null && !V0(); ) eh(I);
  }
  function eh(l) {
    var t = Sd(l.alternate, l, ge);
    ((l.memoizedProps = l.pendingProps), t === null ? Ni(l) : (I = t));
  }
  function ah(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = rd(e, t, t.pendingProps, t.type, void 0, ll);
        break;
      case 11:
        t = rd(e, t, t.pendingProps, t.type.render, t.ref, ll);
        break;
      case 5:
        Fc(t);
        var a = t;
        a === Gl &&
          (W
            ? (Yn(a), a.tag === 5 && a.stateNode != null && (Tl = a.stateNode))
            : (Yn(a), (W = !0)));
      default:
        (Td(e, t), (t = I = Ko(t, ge)), (t = Sd(e, t, ge)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? Ni(l) : (I = t));
  }
  function uu(l, t, e, a) {
    ((re = ia = null), Fc(t), (wa = null), (Hu = 0));
    var u = t.return;
    try {
      if (dv(l, u, t, e, ll)) {
        ((Ol = 1), ui(l, Nt(e, l.current)), (I = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((I = u), n);
      ((Ol = 1), ui(l, Nt(e, l.current)), (I = null));
      return;
    }
    t.flags & 32768
      ? (W || a === 1
          ? (l = !0)
          : $a || (ll & 536870912) !== 0
            ? (l = !1)
            : ((Ye = l = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Zl.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        uh(t, l))
      : Ni(t);
  }
  function Ni(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        uh(t, Ye);
        return;
      }
      l = t.return;
      var e = yv(t.alternate, t, ge);
      if (e !== null) {
        I = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        I = t;
        return;
      }
      I = t = l;
    } while (t !== null);
    Ol === 0 && (Ol = 5);
  }
  function uh(l, t) {
    do {
      var e = gv(l.alternate, l);
      if (e !== null) {
        ((e.flags &= 32767), (I = e));
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        I = l;
        return;
      }
      I = l = e;
    } while (l !== null);
    ((Ol = 6), (I = null));
  }
  function nh(l, t, e, a, u, n, i, f, s, y, b, z) {
    l.cancelPendingCommit = null;
    do _i();
    while (Nl !== 0);
    if ((fl & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      (l === gl && ((I = gl = null), (ll = 0)),
        (ba = t),
        (Qt = l),
        (le = e),
        (Xf = u),
        (kd = a),
        Nv(l, t, e, i, f, s, z));
    }
  }
  function Nv(l, t, e, a, u, n, i) {
    var f = t.lanes | t.childLanes;
    if (
      ((Qf = f),
      (f |= zc),
      I0(l, e, f, a, u, n),
      (lu = null),
      (e & 335544064) === e
        ? ((tu = lv(l)), (a = 10262))
        : ((tu = null), (a = 10256)),
      (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0
        ? ((l.callbackNode = null),
          (l.callbackPriority = 0),
          Dv(vn, function () {
            return (Jf(), null);
          }))
        : ((l.callbackNode = null), (l.callbackPriority = 0)),
      (di = !1),
      (a = (t.flags & 13878) !== 0),
      (t.subtreeFlags & 13878) !== 0 || a)
    ) {
      ((a = R.T), (R.T = null), (u = Z.p), (Z.p = 2), (n = fl), (fl |= 4));
      try {
        Sv(l, t, e);
      } finally {
        ((fl = n), (Z.p = u), (R.T = a));
      }
    }
    ((Nl = 1),
      di
        ? (Pa = Iv(i, l.containerInfo, tu, Lf, Zf, Ov, Kf, Jf, _v))
        : (Lf(), Zf(), Kf()));
  }
  function _v(l) {
    if (Nl !== 0) {
      var t = Qt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function Ov() {
    Nl === 3 && ((Nl = 0), Xd(ba, Qt), (Nl = 4));
  }
  function Lf() {
    if (Nl === 1) {
      Nl = 0;
      var l = Qt,
        t = ba,
        e = le,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = R.T), (R.T = null));
        var u = Z.p;
        Z.p = 2;
        var n = fl;
        fl |= 4;
        try {
          ((Ju = vi = !1), Gd(t, l, e), (e = ns));
          var i = qo(l.containerInfo),
            f = e.focusedElem,
            s = e.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            Ho(f.ownerDocument.documentElement, f)
          ) {
            if (s !== null && Sc(f)) {
              var y = s.start,
                b = s.end;
              if ((b === void 0 && (b = y), "selectionStart" in f))
                ((f.selectionStart = y),
                  (f.selectionEnd = Math.min(b, f.value.length)));
              else {
                var z = f.ownerDocument || document,
                  m = (z && z.defaultView) || window;
                if (m.getSelection) {
                  var S = m.getSelection(),
                    _ = f.textContent.length,
                    D = Math.min(s.start, _),
                    F = s.end === void 0 ? D : Math.min(s.end, _);
                  !S.extend && D > F && ((i = F), (F = D), (D = i));
                  var v = Uo(f, D),
                    r = Uo(f, F);
                  if (
                    v &&
                    r &&
                    (S.rangeCount !== 1 ||
                      S.anchorNode !== v.node ||
                      S.anchorOffset !== v.offset ||
                      S.focusNode !== r.node ||
                      S.focusOffset !== r.offset)
                  ) {
                    var g = z.createRange();
                    (g.setStart(v.node, v.offset),
                      S.removeAllRanges(),
                      D > F
                        ? (S.addRange(g), S.extend(r.node, r.offset))
                        : (g.setEnd(r.node, r.offset), S.addRange(g)));
                  }
                }
              }
            }
            for (z = [], S = f; (S = S.parentNode); )
              S.nodeType === 1 &&
                z.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < z.length;
              f++
            ) {
              var p = z[f];
              ((p.element.scrollLeft = p.left), (p.element.scrollTop = p.top));
            }
          }
          ((du = !!us), (ns = us = null));
        } finally {
          ((fl = n), (Z.p = u), (R.T = a));
        }
      }
      ((l.current = t), (Nl = 2));
    }
  }
  function Zf() {
    if (Nl === 2) {
      Nl = 0;
      var l = Qt,
        t = ba,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        ((e = R.T), (R.T = null));
        var a = Z.p;
        Z.p = 2;
        var u = fl;
        fl |= 4;
        try {
          Rd(l, t.alternate, t);
        } finally {
          ((fl = u), (Z.p = a), (R.T = e));
        }
      }
      Nl = 3;
    }
  }
  function Kf() {
    if (Nl === 4 || Nl === 3) {
      Nl = 0;
      var l = Pa;
      ((Pa = null), w0());
      var t = Qt,
        e = ba,
        a = le,
        u = kd,
        n = (a & 335544064) === a ? 10262 : 10256;
      if (
        ((e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0
          ? (Nl = 5)
          : ((Nl = 0), (ba = Qt = null), ih(t, t.pendingLanes)),
        (n = t.pendingLanes),
        n === 0 && (Qe = null),
        lc(a),
        (e = e.stateNode),
        dt && typeof dt.onCommitFiberRoot == "function")
      )
        try {
          dt.onCommitFiberRoot(yu, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((e = R.T), (n = Z.p), (Z.p = 2), (R.T = null));
        try {
          for (var i = t.onRecoverableError, f = 0; f < u.length; f++) {
            var s = u[f];
            i(s.value, { componentStack: s.stack });
          }
        } finally {
          ((R.T = e), (Z.p = n));
        }
      }
      if (
        ((u = lu),
        (i = tu),
        (tu = null),
        u !== null && ((lu = null), i === null && (i = []), l !== null))
      )
        for (s = 0; s < u.length; s++)
          ((e = (0, u[s])(i)), e !== void 0 && l.finished.finally(e));
      ((le & 3) !== 0 && _i(),
        te(t),
        (n = t.pendingLanes),
        (a & 261930) !== 0 && (n & 42) !== 0
          ? t === zi
            ? $u++
            : (($u = 0), (zi = t))
          : (($u = 0), (zi = null)),
        Iu(0));
    }
  }
  function ih(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Du(t)));
  }
  function _i() {
    return (
      Pa !== null && (Pa.skipTransition(), (Pa = null)),
      Lf(),
      Zf(),
      Kf(),
      Jf()
    );
  }
  function Jf() {
    if (Nl !== 5) return !1;
    var l = Qt,
      t = Qf;
    Qf = 0;
    var e = lc(le),
      a = R.T,
      u = Z.p;
    try {
      ((Z.p = 32 > e ? 32 : e), (R.T = null), (e = Xf), (Xf = null));
      var n = Qt,
        i = le;
      if (((Nl = 0), (ba = Qt = null), (le = 0), (fl & 6) !== 0))
        throw Error(o(331));
      var f = fl;
      if (
        ((fl |= 4),
        Zd(n.current),
        Vd(n, n.current, i, e),
        (fl = f),
        Iu(0, !1),
        dt && typeof dt.onPostCommitFiberRoot == "function")
      )
        try {
          dt.onPostCommitFiberRoot(yu, n);
        } catch {}
      return !0;
    } finally {
      ((Z.p = u), (R.T = a), ih(l, t));
    }
  }
  function ch(l, t, e) {
    ((t = Nt(e, t)),
      (t = of(l.stateNode, t, 2)),
      (l = De(l, t, 2)),
      l !== null && (Su(l, 2), te(l)));
  }
  function dl(l, t, e) {
    if (l.tag === 3) ch(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ch(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Qe === null || !Qe.has(a)))
          ) {
            ((l = Nt(e, l)),
              (e = ad(2)),
              (a = De(t, e, 2)),
              a !== null && (ud(e, a, t, l), Su(a, 2), te(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function kf(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Ev();
      var u = new Set();
      a.set(t, u);
    } else ((u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u)));
    u.has(e) ||
      ((Yf = !0), u.add(e), (l = Av.bind(null, l, t, e)), t.then(l, l));
  }
  function Av(l, t, e) {
    var a = l.pingCache;
    (a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      gl === l &&
        (ll & e) === e &&
        ((Ol === 4 ||
          (Ol === 3 && (ll & 62914560) === ll && 300 > rt() - Ti)) &&
        (fl & 2) === 0
          ? au(l, 0)
          : (bi |= e),
        Ia === ll && (Ia = 0)),
      te(l));
  }
  function fh(l, t) {
    (t === 0 && (t = Ks()), (l = aa(l, t)), l !== null && (Su(l, t), te(l)));
  }
  function Cv(l) {
    var t = l.memoizedState,
      e = 0;
    (t !== null && (e = t.retryLane), fh(l, e));
  }
  function Mv(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (a !== null && a.delete(t), fh(l, e));
  }
  function Dv(l, t) {
    return Wi(l, t);
  }
  var nu = null,
    iu = null,
    Ff = !1,
    Oi = !1,
    Wf = !1,
    Ve = 0;
  function te(l) {
    (l !== iu &&
      l.next === null &&
      (iu === null ? (nu = iu = l) : (iu = iu.next = l)),
      (Oi = !0),
      Ff || ((Ff = !0), Uv()));
  }
  function Iu(l, t) {
    if (!Wf && Oi) {
      Wf = !0;
      do
        for (var e = !1, a = nu; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              ((n = (1 << (31 - ht(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((e = !0), dh(a, n));
          } else
            ((n = ll),
              (n = bn(
                a,
                a === gl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || gu(a, n) || ((e = !0), dh(a, n)));
          a = a.next;
        }
      while (e);
      Wf = !1;
    }
  }
  function Rv() {
    sh();
  }
  function sh() {
    Oi = Ff = !1;
    var l = 0;
    Ve !== 0 && Zv() && (l = Ve);
    for (var t = rt(), e = null, a = nu; a !== null; ) {
      var u = a.next,
        n = oh(a, t);
      (n === 0
        ? ((a.next = null),
          e === null ? (nu = u) : (e.next = u),
          u === null && (iu = e))
        : ((e = a), (l !== 0 || (n & 3) !== 0) && (Oi = !0)),
        (a = u));
    }
    ((Nl !== 0 && Nl !== 5) || Iu(l), Ve !== 0 && (Ve = 0));
  }
  function oh(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - ht(n),
        f = 1 << i,
        s = u[i];
      (s === -1
        ? ((f & e) === 0 || (f & a) !== 0) && (u[i] = $0(f, t))
        : s <= t && (l.expiredLanes |= f),
        (n &= ~f));
    }
    if (
      ((t = gl),
      (e = ll),
      (e = bn(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (rl === 2 || rl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && $i(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || gu(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && $i(a), lc(e))) {
        case 2:
        case 8:
          e = ws;
          break;
        case 32:
          e = vn;
          break;
        case 268435456:
          e = Ls;
          break;
        default:
          e = vn;
      }
      return (
        (a = rh.bind(null, l)),
        (e = Wi(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && $i(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function rh(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var e = l.callbackNode;
    if (_i() && l.callbackNode !== e) return null;
    var a = ll;
    return (
      (a = bn(
        l,
        l === gl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Wd(l, a, t),
          oh(l, rt()),
          l.callbackNode != null && l.callbackNode === e
            ? rh.bind(null, l)
            : null)
    );
  }
  function dh(l, t) {
    if (_i()) return null;
    Wd(l, t, !0);
  }
  function Uv() {
    Jv(function () {
      (fl & 6) !== 0 ? Wi(Vs, Rv) : sh();
    });
  }
  function $f() {
    if (Ve === 0) {
      var l = sa;
      (l === 0 && ((l = yn), (yn <<= 1), (yn & 261888) === 0 && (yn = 256)),
        (Ve = l));
    }
    return Ve;
  }
  function hh(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : xn(l);
  }
  function Hv(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = hh((u[at] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[at] || null)
          ? hh(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var f = new On("action", "action", null, a, u);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ve !== 0) {
                  var s = new FormData(u, i);
                  uf(
                    e,
                    { pending: !0, data: s, method: u.method, action: n },
                    null,
                    s,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (s = new FormData(u, i)),
                  uf(
                    e,
                    { pending: !0, data: s, method: u.method, action: n },
                    n,
                    s,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var If = 0; If < pc.length; If++) {
    var Pf = pc[If],
      qv = Pf.toLowerCase(),
      Bv = Pf[0].toUpperCase() + Pf.slice(1);
    qt(qv, "on" + Bv);
  }
  (qt(Go, "onAnimationEnd"),
    qt(Qo, "onAnimationIteration"),
    qt(Xo, "onAnimationStart"),
    qt("dblclick", "onDoubleClick"),
    qt("focusin", "onFocus"),
    qt("focusout", "onBlur"),
    qt(Km, "onTransitionRun"),
    qt(Jm, "onTransitionStart"),
    qt(km, "onTransitionCancel"),
    qt(Vo, "onTransitionEnd"),
    Oa("onMouseEnter", ["mouseout", "mouseover"]),
    Oa("onMouseLeave", ["mouseout", "mouseover"]),
    Oa("onPointerEnter", ["pointerout", "pointerover"]),
    Oa("onPointerLeave", ["pointerout", "pointerover"]),
    la(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    la(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    la("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    la(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    la(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    la(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Pu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Yv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Pu),
    );
  function mh(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              s = f.instance,
              y = f.currentTarget;
            if (((f = f.listener), s !== n && u.isPropagationStopped()))
              break l;
            ((n = f), (u.currentTarget = y));
            try {
              n(u);
            } catch (b) {
              Mn(b);
            }
            ((u.currentTarget = null), (n = s));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (s = f.instance),
              (y = f.currentTarget),
              (f = f.listener),
              s !== n && u.isPropagationStopped())
            )
              break l;
            ((n = f), (u.currentTarget = y));
            try {
              n(u);
            } catch (b) {
              Mn(b);
            }
            ((u.currentTarget = null), (n = s));
          }
      }
    }
  }
  function P(l, t) {
    var e = t[Is];
    e === void 0 && (e = t[Is] = new Set());
    var a = l + "__bubble";
    e.has(a) || (vh(t, l, 2, !1), e.add(a));
  }
  function ls(l, t, e) {
    var a = 0;
    (t && (a |= 4), vh(e, l, a, t));
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function ts(l) {
    if (!l[Ai]) {
      ((l[Ai] = !0),
        to.forEach(function (e) {
          e !== "selectionchange" && (Yv.has(e) || ls(e, !1, l), ls(e, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Ai] || ((t[Ai] = !0), ls("selectionchange", !1, t));
    }
  }
  function vh(l, t, e, a) {
    switch (u0(t)) {
      case 2:
        var u = C1;
        break;
      case 8:
        u = M1;
        break;
      default:
        u = Es;
    }
    ((e = u.bind(null, t, e, l)),
      (u = void 0),
      !fc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: u })
          : l.addEventListener(t, e, !0)
        : u !== void 0
          ? l.addEventListener(t, e, { passive: u })
          : l.addEventListener(t, e, !1));
  }
  function es(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = Pe(f)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = n = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    vo(function () {
      var y = n,
        b = ic(e),
        z = [];
      l: {
        var m = wo.get(l);
        if (m !== void 0) {
          var S = On,
            _ = l;
          switch (l) {
            case "keypress":
              if (Nn(e) === 0) break l;
            case "keydown":
            case "keyup":
              S = pm;
              break;
            case "focusin":
              ((_ = "focus"), (S = dc));
              break;
            case "focusout":
              ((_ = "blur"), (S = dc));
              break;
            case "beforeblur":
            case "afterblur":
              S = dc;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = So;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = om;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = _m;
              break;
            case Go:
            case Qo:
            case Xo:
              S = hm;
              break;
            case Vo:
              S = Am;
              break;
            case "scroll":
            case "scrollend":
              S = fm;
              break;
            case "wheel":
              S = Mm;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = vm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = To;
              break;
            case "submit":
              S = jm;
              break;
            case "toggle":
            case "beforetoggle":
              S = Rm;
          }
          var D = (t & 4) !== 0,
            F = !D && (l === "scroll" || l === "scrollend"),
            v = D ? (m !== null ? m + "Capture" : null) : m;
          D = [];
          for (var r = y, g; r !== null; ) {
            var p = r;
            if (
              ((g = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                g === null ||
                v === null ||
                ((p = Eu(r, v)), p != null && D.push(ln(r, p, g))),
              F)
            )
              break;
            r = r.return;
          }
          0 < D.length &&
            ((m = new S(m, _, null, e, b)), z.push({ event: m, listeners: D }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((S = l === "mouseover" || l === "pointerover"),
            (m = l === "mouseout" || l === "pointerout"),
            S &&
              e !== nc &&
              (_ = e.relatedTarget || e.fromElement) &&
              (Pe(_) || _[ja]))
          )
            break l;
          (m || S) &&
            ((_ =
              b.window === b
                ? b
                : (S = b.ownerDocument)
                  ? S.defaultView || S.parentWindow
                  : window),
            m
              ? ((S = e.relatedTarget || e.toElement),
                (m = y),
                (S = S ? Pe(S) : null),
                S !== null &&
                  ((F = M(S)),
                  (D = S.tag),
                  S !== F || (D !== 5 && D !== 27 && D !== 6)) &&
                  (S = null))
              : ((m = null), (S = y)),
            m !== S &&
              ((D = So),
              (p = "onMouseLeave"),
              (v = "onMouseEnter"),
              (r = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((D = To),
                (p = "onPointerLeave"),
                (v = "onPointerEnter"),
                (r = "pointer")),
              (F = m == null ? _ : Tu(m)),
              (g = S == null ? _ : Tu(S)),
              (_ = new D(p, r + "leave", m, e, b)),
              (_.target = F),
              (_.relatedTarget = g),
              (p = null),
              Pe(b) === y &&
                ((D = new D(v, r + "enter", S, e, b)),
                (D.target = g),
                (D.relatedTarget = F),
                (p = D)),
              (F = p),
              (D = m && S ? st(m, S, Gv) : null),
              m !== null && yh(z, _, m, D, !1),
              S !== null && F !== null && yh(z, F, S, D, !0)));
        }
        l: {
          if (
            ((m = y ? Tu(y) : window),
            (S = m.nodeName && m.nodeName.toLowerCase()),
            S === "select" || (S === "input" && m.type === "file"))
          )
            var A = Oo;
          else if (No(m))
            if (Ao) A = wm;
            else {
              A = Xm;
              var tl = Qm;
            }
          else
            ((S = m.nodeName),
              !S ||
              S.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? y && uc(y.elementType) && (A = Oo)
                : (A = Vm));
          if (A && (A = A(l, y))) {
            _o(z, A, e, b);
            break l;
          }
          tl && tl(l, m, y);
        }
        switch (((tl = y ? Tu(y) : window), l)) {
          case "focusin":
            (No(tl) || tl.contentEditable === "true") &&
              ((Ua = tl), (bc = y), (Au = null));
            break;
          case "focusout":
            Au = bc = Ua = null;
            break;
          case "mousedown":
            Tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Tc = !1), Bo(z, e, b));
            break;
          case "selectionchange":
            if (Zm) break;
          case "keydown":
          case "keyup":
            Bo(z, e, b);
        }
        var U;
        if (mc)
          l: {
            switch (l) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break l;
              case "compositionend":
                Q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break l;
            }
            Q = void 0;
          }
        else
          Ra
            ? xo(l, e) && (Q = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (Q = "onCompositionStart");
        (Q &&
          (Eo &&
            e.locale !== "ko" &&
            (Ra || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && Ra && (U = yo())
              : ((ze = b),
                (sc = "value" in ze ? ze.value : ze.textContent),
                (Ra = !0))),
          (tl = Ci(y, Q)),
          0 < tl.length &&
            ((Q = new bo(Q, l, null, e, b)),
            z.push({ event: Q, listeners: tl }),
            U ? (Q.data = U) : ((U = jo(e)), U !== null && (Q.data = U)))),
          (U = Hm ? qm(l, e) : Bm(l, e)) &&
            ((Q = Ci(y, "onBeforeInput")),
            0 < Q.length &&
              ((tl = new bo("onBeforeInput", "beforeinput", null, e, b)),
              z.push({ event: tl, listeners: Q }),
              (tl.data = U))),
          Hv(z, l, y, e, b));
      }
      mh(z, t);
    });
  }
  function ln(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Ci(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Eu(l, e)),
          u != null && a.unshift(ln(l, u, n)),
          (u = Eu(l, t)),
          u != null && a.push(ln(l, u, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function Gv(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function yh(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var f = e,
        s = f.alternate,
        y = f.stateNode;
      if (((f = f.tag), s !== null && s === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        y === null ||
        ((s = y),
        u
          ? ((y = Eu(e, n)), y != null && i.unshift(ln(e, y, s)))
          : u || ((y = Eu(e, n)), y != null && i.push(ln(e, y, s)))),
        (e = e.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Qv = /\r\n?/g,
    Xv = /\u0000|\uFFFD/g;
  function gh(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Qv,
        `
`,
      )
      .replace(Xv, "");
  }
  function Sh(l, t) {
    return ((t = gh(t)), gh(l) === t);
  }
  function hl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        if (typeof a == "string")
          t === "body" || (t === "textarea" && a === "") || Ca(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Ca(l, "" + a);
        else return;
        break;
      case "className":
        zn(l, "class", a);
        break;
      case "tabIndex":
        zn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zn(l, e, a);
        break;
      case "style":
        ho(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          zn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        ((a = xn(a)), l.setAttribute(e, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (t !== "input" && hl(l, t, "name", u.name, u, null),
                hl(l, t, "formEncType", u.formEncType, u, null),
                hl(l, t, "formMethod", u.formMethod, u, null),
                hl(l, t, "formTarget", u.formTarget, u, null))
              : (hl(l, t, "encType", u.encType, u, null),
                hl(l, t, "method", u.method, u, null),
                hl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        ((a = xn(a)), l.setAttribute(e, a));
        break;
      case "onClick":
        a != null && (l.onclick = Zt);
        return;
      case "onScroll":
        a != null && P("scroll", l);
        return;
      case "onScrollEnd":
        a != null && P("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(o(60));
            (n != null ? n.__html : void 0) !== e && (l.innerHTML = e);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((e = xn(a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? l.setAttribute(e, a)
            : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        (P("beforetoggle", l), P("toggle", l), pn(l, "popover", a));
        break;
      case "xlinkActuate":
        ne(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        ne(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        ne(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        ne(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        ne(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        ne(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        ne(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        ne(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        ne(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        pn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")
        )
          ((e = im.get(e) || e), pn(l, e, a));
        else return;
    }
    nl = !0;
  }
  function as(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        ho(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(o(60));
            (n != null ? n.__html : void 0) !== e && (l.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Ca(l, a);
        else if (typeof a == "number" || typeof a == "bigint") Ca(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && P("scroll", l);
        return;
      case "onScrollEnd":
        a != null && P("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = Zt);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!eo.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (n = e.slice(2, u ? e.length - 7 : void 0)),
              (t = l[at] || null),
              (t = t != null ? t[e] : null),
              typeof t == "function" && l.removeEventListener(n, t, u),
              typeof a == "function")
            ) {
              (typeof t != "function" &&
                t !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(n, a, u));
              break l;
            }
            ((nl = !0),
              e in l
                ? (l[e] = a)
                : a === !0
                  ? l.setAttribute(e, "")
                  : pn(l, e, a));
          }
        return;
    }
    nl = !0;
  }
  function kl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (P("error", l), P("load", l));
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  hl(l, t, n, i, e, null);
              }
          }
        (u && hl(l, t, "srcSet", e.srcSet, e, null),
          a && hl(l, t, "src", e.src, e, null));
        return;
      case "input":
        P("invalid", l);
        var f = (n = i = u = null),
          s = null,
          y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var b = e[a];
            if (b != null)
              switch (a) {
                case "name":
                  u = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  s = b;
                  break;
                case "defaultChecked":
                  y = b;
                  break;
                case "value":
                  n = b;
                  break;
                case "defaultValue":
                  f = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(o(137, t));
                  break;
                default:
                  hl(l, t, a, b, e, null);
              }
          }
        fo(l, n, f, s, y, i, u, !1);
        return;
      case "select":
        (P("invalid", l), (a = i = n = null));
        for (u in e)
          if (e.hasOwnProperty(u) && ((f = e[u]), f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                hl(l, t, u, f, e, null);
            }
        ((t = n),
          (e = i),
          (l.multiple = !!a),
          t != null ? Aa(l, !!a, t, !1) : e != null && Aa(l, !!a, e, !0));
        return;
      case "textarea":
        (P("invalid", l), (n = u = a = null));
        for (i in e)
          if (e.hasOwnProperty(i) && ((f = e[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(o(91));
                break;
              default:
                hl(l, t, i, f, e, null);
            }
        oo(l, a, u, n);
        return;
      case "option":
        for (s in e)
          if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
            switch (s) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                hl(l, t, s, a, e, null);
            }
        return;
      case "dialog":
        (P("beforetoggle", l), P("toggle", l), P("cancel", l), P("close", l));
        break;
      case "iframe":
      case "object":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Pu.length; a++) P(Pu[a], l);
        break;
      case "image":
        (P("error", l), P("load", l));
        break;
      case "details":
        P("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (P("error", l), P("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && ((a = e[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                hl(l, t, y, a, e, null);
            }
        return;
      default:
        if (uc(t)) {
          for (b in e)
            e.hasOwnProperty(b) &&
              ((a = e[b]), a !== void 0 && as(l, t, b, a, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((a = e[f]), a != null && hl(l, t, f, a, e, null));
  }
  var Vv = {};
  function wv(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          f = null,
          s = null,
          y = null,
          b = null;
        for (S in e) {
          var z = e[S];
          if (e.hasOwnProperty(S) && z != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = z;
              default:
                a.hasOwnProperty(S) || hl(l, t, S, null, a, z);
            }
        }
        for (var m in a) {
          var S = a[m];
          if (((z = e[m]), a.hasOwnProperty(m) && (S != null || z != null)))
            switch (m) {
              case "type":
                (S !== z && (nl = !0), (n = S));
                break;
              case "name":
                (S !== z && (nl = !0), (u = S));
                break;
              case "checked":
                (S !== z && (nl = !0), (y = S));
                break;
              case "defaultChecked":
                (S !== z && (nl = !0), (b = S));
                break;
              case "value":
                (S !== z && (nl = !0), (i = S));
                break;
              case "defaultValue":
                (S !== z && (nl = !0), (f = S));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(137, t));
                break;
              default:
                S !== z && hl(l, t, m, S, a, z);
            }
        }
        ec(l, i, f, s, y, b, n, u);
        return;
      case "select":
        S = i = f = m = null;
        for (n in e)
          if (((s = e[n]), e.hasOwnProperty(n) && s != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = s;
              default:
                a.hasOwnProperty(n) || hl(l, t, n, null, a, s);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (s = e[u]),
            a.hasOwnProperty(u) && (n != null || s != null))
          )
            switch (u) {
              case "value":
                (n !== s && (nl = !0), (m = n));
                break;
              case "defaultValue":
                (n !== s && (nl = !0), (f = n));
                break;
              case "multiple":
                (n !== s && (nl = !0), (i = n));
              default:
                n !== s && hl(l, t, u, n, a, s);
            }
        ((t = f),
          (e = i),
          (a = S),
          m != null
            ? Aa(l, !!e, m, !1)
            : !!a != !!e &&
              (t != null ? Aa(l, !!e, t, !0) : Aa(l, !!e, e ? [] : "", !1)));
        return;
      case "textarea":
        S = m = null;
        for (f in e)
          if (
            ((u = e[f]),
            e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                hl(l, t, f, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                (u !== n && (nl = !0), (m = u));
                break;
              case "defaultValue":
                (u !== n && (nl = !0), (S = u));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== n && hl(l, t, i, u, a, n);
            }
        so(l, m, S);
        return;
      case "option":
        for (var _ in e)
          if (
            ((m = e[_]),
            e.hasOwnProperty(_) && m != null && !a.hasOwnProperty(_))
          )
            switch (_) {
              case "selected":
                l.selected = !1;
                break;
              default:
                hl(l, t, _, null, a, m);
            }
        for (s in a)
          if (
            ((m = a[s]),
            (S = e[s]),
            a.hasOwnProperty(s) && m !== S && (m != null || S != null))
          )
            switch (s) {
              case "selected":
                (m !== S && (nl = !0),
                  (l.selected =
                    m && typeof m != "function" && typeof m != "symbol"));
                break;
              default:
                hl(l, t, s, m, a, S);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var D in e)
          ((m = e[D]),
            e.hasOwnProperty(D) &&
              m != null &&
              !a.hasOwnProperty(D) &&
              hl(l, t, D, null, a, m));
        for (y in a)
          if (
            ((m = a[y]),
            (S = e[y]),
            a.hasOwnProperty(y) && m !== S && (m != null || S != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(o(137, t));
                break;
              default:
                hl(l, t, y, m, a, S);
            }
        return;
      default:
        if (uc(t)) {
          for (var F in e)
            ((m = e[F]),
              e.hasOwnProperty(F) &&
                m !== void 0 &&
                !a.hasOwnProperty(F) &&
                as(l, t, F, void 0, a, m));
          for (b in a)
            ((m = a[b]),
              (S = e[b]),
              !a.hasOwnProperty(b) ||
                m === S ||
                (m === void 0 && S === void 0) ||
                as(l, t, b, m, a, S));
          return;
        }
    }
    for (var v in e)
      ((m = e[v]),
        e.hasOwnProperty(v) &&
          m != null &&
          !a.hasOwnProperty(v) &&
          hl(l, t, v, null, a, m));
    for (z in a)
      ((m = a[z]),
        (S = e[z]),
        !a.hasOwnProperty(z) ||
          m === S ||
          (m == null && S == null) ||
          hl(l, t, z, m, a, S));
  }
  function bh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Lv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var u = e[a],
          n = u.transferSize,
          i = u.initiatorType,
          f = u.duration;
        if (n && f && bh(i)) {
          for (i = 0, f = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a],
              y = s.startTime;
            if (y > f) break;
            var b = s.transferSize,
              z = s.initiatorType;
            b &&
              bh(z) &&
              ((s = s.responseEnd), (i += b * (s < f ? 1 : (f - y) / (s - y))));
          }
          if ((--a, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var us = null,
    ns = null;
  function tn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Th(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Eh(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function ph(l, t, e, a) {
    return (
      (e = tn(e).createElement(l)),
      (e[wl] = a),
      (e[at] = t),
      kl(e, l, t),
      Yl(e),
      e
    );
  }
  function is(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cs = null;
  function Zv() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === cs
        ? !1
        : ((cs = l), !0)
      : ((cs = null), !1);
  }
  var fs = typeof setTimeout == "function" ? setTimeout : void 0,
    Kv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    zh = typeof Promise == "function" ? Promise : void 0,
    xh =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : fs,
    Jv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof zh < "u"
          ? function (l) {
              return zh.resolve(null).then(l).catch(kv);
            }
          : fs;
  function kv(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function we(l) {
    return l === "head";
  }
  function jh(l, t) {
    var e = t,
      a = 0;
    do {
      var u = e.nextSibling;
      if ((l.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            (l.removeChild(u), hu(t));
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") ys(l.ownerDocument.documentElement);
        else if (e === "head") {
          ((e = l.ownerDocument.head), ys(e));
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling,
              f = n.nodeName;
            (n[bu] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(n),
              (n = i));
          }
        } else e === "body" && ys(l.ownerDocument.body);
      e = u;
    } while (e);
    hu(t);
  }
  function Nh(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (t
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function _h(l, t, e) {
    if (
      ((t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t),
      (l.style.viewTransitionName = t),
      e != null && (l.style.viewTransitionClass = e),
      (e = getComputedStyle(l)),
      e.display === "inline")
    ) {
      if (((t = l.getClientRects()), t.length === 1)) var a = 1;
      else
        for (var u = (a = 0); u < t.length; u++) {
          var n = t[u];
          0 < n.width && 0 < n.height && a++;
        }
      a === 1 &&
        ((l = l.style),
        (l.display = t.length === 1 ? "inline-block" : "block"),
        (l.marginTop = "-" + e.paddingTop),
        (l.marginBottom = "-" + e.paddingBottom));
    }
  }
  function Oh(l, t) {
    ((l = l.style), (t = t.style));
    var e =
      t != null
        ? t.hasOwnProperty("viewTransitionName")
          ? t.viewTransitionName
          : t.hasOwnProperty("view-transition-name")
            ? t["view-transition-name"]
            : null
        : null;
    ((l.viewTransitionName =
      e == null || typeof e == "boolean" ? "" : ("" + e).trim()),
      (e =
        t != null
          ? t.hasOwnProperty("viewTransitionClass")
            ? t.viewTransitionClass
            : t.hasOwnProperty("view-transition-class")
              ? t["view-transition-class"]
              : null
          : null),
      (l.viewTransitionClass =
        e == null || typeof e == "boolean" ? "" : ("" + e).trim()),
      l.display === "inline-block" &&
        (t == null
          ? (l.display = l.margin = "")
          : ((e = t.display),
            (l.display = e == null || typeof e == "boolean" ? "" : e),
            (e = t.margin),
            e != null
              ? (l.margin = e)
              : ((e = t.hasOwnProperty("marginTop")
                  ? t.marginTop
                  : t["margin-top"]),
                (l.marginTop = e == null || typeof e == "boolean" ? "" : e),
                (t = t.hasOwnProperty("marginBottom")
                  ? t.marginBottom
                  : t["margin-bottom"]),
                (l.marginBottom =
                  t == null || typeof t == "boolean" ? "" : t)))));
  }
  function Fv(l, t, e) {
    return (
      (e = e.ownerDocument.defaultView),
      {
        rect: l,
        abs: t.position === "absolute" || t.position === "fixed",
        clip:
          t.clipPath !== "none" ||
          t.overflow !== "visible" ||
          t.filter !== "none" ||
          t.mask !== "none" ||
          t.mask !== "none" ||
          t.borderRadius !== "0px",
        view:
          0 <= l.bottom &&
          0 <= l.right &&
          l.top <= e.innerHeight &&
          l.left <= e.innerWidth,
      }
    );
  }
  function ss(l) {
    var t = l.getBoundingClientRect(),
      e = getComputedStyle(l);
    return Fv(t, e, l);
  }
  function Wv(l) {
    return l.documentElement.clientHeight;
  }
  function $v(l) {
    (this.addEventListener("load", l), this.addEventListener("error", l));
  }
  function Iv(l, t, e, a, u, n, i, f, s) {
    var y = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var b = y.startViewTransition({
        update: function () {
          var m = y.defaultView,
            S = m.navigation && m.navigation.transition,
            _ = y.fonts.status;
          a();
          var D = [];
          if (
            (_ === "loaded" &&
              (Wv(y), y.fonts.status === "loading" && D.push(y.fonts.ready)),
            (_ = D.length),
            l !== null)
          )
            for (var F = l.suspenseyImages, v = 0, r = 0; r < F.length; r++) {
              var g = F[r];
              if (!g.complete) {
                var p = g.getBoundingClientRect();
                if (
                  0 < p.bottom &&
                  0 < p.right &&
                  p.top < m.innerHeight &&
                  p.left < m.innerWidth
                ) {
                  if (((v += Fh(g)), v > Ri)) {
                    D.length = _;
                    break;
                  }
                  ((g = new Promise($v.bind(g))), D.push(g));
                }
              }
            }
          if (0 < D.length)
            return (
              (m = Promise.race([
                Promise.all(D),
                new Promise(function (A) {
                  return setTimeout(A, 500);
                }),
              ]).then(u, u)),
              (S ? Promise.allSettled([S.finished, m]) : m).then(n, n)
            );
          if ((u(), S)) return S.finished.then(n, n);
          n();
        },
        types: e,
      });
      y.__reactViewTransition = b;
      var z = [];
      return (
        b.ready.then(
          function () {
            for (
              var m = y.documentElement.getAnimations({ subtree: !0 }), S = 0;
              S < m.length;
              S++
            ) {
              var _ = m[S],
                D = _.effect,
                F = D.pseudoElement;
              if (F != null && F.startsWith("::view-transition")) {
                (z.push(_), (_ = D.getKeyframes()));
                for (var v = (F = void 0), r = !0, g = 0; g < _.length; g++) {
                  var p = _[g],
                    A = p.width;
                  if (F === void 0) F = A;
                  else if (F !== A) {
                    r = !1;
                    break;
                  }
                  if (((A = p.height), v === void 0)) v = A;
                  else if (v !== A) {
                    r = !1;
                    break;
                  }
                  (delete p.width,
                    delete p.height,
                    p.transform === "none" && delete p.transform);
                }
                r &&
                  F !== void 0 &&
                  v !== void 0 &&
                  (D.setKeyframes(_),
                  (r = getComputedStyle(D.target, D.pseudoElement)),
                  r.width !== F || r.height !== v) &&
                  ((r = _[0]),
                  (r.width = F),
                  (r.height = v),
                  (r = _[_.length - 1]),
                  (r.width = F),
                  (r.height = v),
                  D.setKeyframes(_));
              }
            }
            i();
          },
          function (m) {
            y.__reactViewTransition === b && (y.__reactViewTransition = null);
            try {
              if (typeof m == "object" && m !== null)
                switch (m.name) {
                  case "InvalidStateError":
                    (m.message ===
                      "View transition was skipped because document visibility state is hidden." ||
                      m.message ===
                        "Skipping view transition because document visibility state has become hidden." ||
                      m.message ===
                        "Skipping view transition because viewport size changed." ||
                      m.message ===
                        "Transition was aborted because of invalid state") &&
                      (m = null);
                }
              m !== null && s(m);
            } finally {
              (a(), u(), i());
            }
          },
        ),
        b.finished.finally(function () {
          for (var m = 0; m < z.length; m++) z[m].cancel();
          (y.__reactViewTransition === b && (y.__reactViewTransition = null),
            f());
        }),
        b
      );
    } catch {
      return (a(), u(), i(), null);
    }
  }
  function Ta(l, t) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + l + "(" + t + ")"));
  }
  ((Ta.prototype.animate = function (l, t) {
    return (
      (t = typeof t == "number" ? { duration: t } : $({}, t)),
      (t.pseudoElement = this._selector),
      this._scope.animate(l, t)
    );
  }),
    (Ta.prototype.getAnimations = function () {
      for (
        var l = this._scope,
          t = this._selector,
          e = l.getAnimations({ subtree: !0 }),
          a = [],
          u = 0;
        u < e.length;
        u++
      ) {
        var n = e[u].effect;
        n !== null && n.target === l && n.pseudoElement === t && a.push(e[u]);
      }
      return a;
    }),
    (Ta.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function Ah(l) {
    return {
      name: l,
      group: new Ta("group", l),
      imagePair: new Ta("image-pair", l),
      old: new Ta("old", l),
      new: new Ta("new", l),
    };
  }
  function Et(l) {
    ((this._fragmentFiber = l),
      (this._observers = this._eventListeners = null));
  }
  Et.prototype.addEventListener = function (l, t, e) {
    var a = null,
      u = null;
    if (
      !(
        e != null &&
        typeof e != "boolean" &&
        ((a = e.signal || null), a !== null && a.aborted)
      )
    ) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (Mh(n, l, t, e) === -1) {
        var i = this,
          f = t;
        (e != null &&
          typeof e != "boolean" &&
          e.once === !0 &&
          (f = function (s) {
            (i.removeEventListener(l, t, e),
              typeof t == "function" ? t.call(this, s) : t.handleEvent(s));
          }),
          a !== null &&
            ((u = i.removeEventListener.bind(i, l, t, e)),
            a.addEventListener("abort", u, { once: !0 }),
            (u = a.removeEventListener.bind(a, "abort", u))),
          (a = cu(e)),
          n.push({
            type: l,
            listener: t,
            optionsOrUseCapture: e,
            attachedListener: f,
            cleanup: u,
          }),
          T(this._fragmentFiber.child, !1, Pv, l, f, a));
      }
      this._eventListeners = n;
    }
  };
  function Pv(l, t, e, a) {
    return (G(l).addEventListener(t, e, a), !1);
  }
  Et.prototype.removeEventListener = function (l, t, e) {
    var a = this._eventListeners;
    if (a !== null && ((t = Mh(a, l, t, e)), t !== -1)) {
      var u = a[t];
      e = u.attachedListener;
      var n = u.cleanup;
      ((u = cu(u.optionsOrUseCapture)),
        T(this._fragmentFiber.child, !1, l1, l, e, u),
        a.splice(t, 1),
        n !== null && n());
    }
  };
  function l1(l, t, e, a) {
    return (G(l).removeEventListener(t, e, a), !1);
  }
  function cu(l) {
    return l != null &&
      typeof l != "boolean" &&
      (l.once === !0 || l.signal instanceof AbortSignal)
      ? { capture: l.capture, passive: l.passive }
      : l;
  }
  function Ch(l) {
    return l == null
      ? "c=0"
      : typeof l == "boolean"
        ? "c=" + (l ? "1" : "0")
        : "c=" + (l.capture ? "1" : "0");
  }
  function Mh(l, t, e, a) {
    if (l.length === 0) return -1;
    a = Ch(a);
    for (var u = 0; u < l.length; u++) {
      var n = l[u];
      if (n.type === t && n.listener === e && Ch(n.optionsOrUseCapture) === a)
        return u;
    }
    return -1;
  }
  ((Et.prototype.dispatchEvent = function (l) {
    var t = H(this._fragmentFiber);
    if (t === null) return !0;
    t = G(t);
    var e = this._eventListeners;
    if ((e !== null && 0 < e.length) || !l.bubbles) {
      var a =
        t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (e)
        for (var u = 0; u < e.length; u++) {
          var n = e[u];
          a.addEventListener(
            n.type,
            n.attachedListener,
            cu(n.optionsOrUseCapture),
          );
        }
      if ((t.appendChild(a), (l = a.dispatchEvent(l)), e))
        for (u = 0; u < e.length; u++)
          ((n = e[u]),
            a.removeEventListener(
              n.type,
              n.attachedListener,
              cu(n.optionsOrUseCapture),
            ));
      return (t.removeChild(a), l);
    }
    return t.dispatchEvent(l);
  }),
    (Et.prototype.focus = function (l) {
      T(this._fragmentFiber.child, !0, Dh, l, void 0, void 0);
    }));
  function Dh(l, t) {
    return l.tag === 6 ? !1 : ((l = G(l)), d1(l, t));
  }
  Et.prototype.focusLast = function (l) {
    var t = [];
    T(this._fragmentFiber.child, !0, os, t, void 0, void 0);
    for (var e = t.length - 1; 0 <= e && !Dh(t[e], l); e--);
  };
  function os(l, t) {
    return (t.push(l), !1);
  }
  Et.prototype.blur = function () {
    var l = H(this._fragmentFiber);
    l !== null &&
      ((l = G(l)),
      (l = tn(l).activeElement),
      l !== null && T(this._fragmentFiber.child, !1, t1, l, void 0, void 0));
  };
  function t1(l, t) {
    return l.tag === 6
      ? !1
      : ((l = G(l)), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  Et.prototype.observeUsing = function (l) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(l),
      T(this._fragmentFiber.child, !1, e1, l, void 0, void 0));
  };
  function e1(l, t) {
    return (l.tag === 6 || ((l = G(l)), t.observe(l)), !1);
  }
  Et.prototype.unobserveUsing = function (l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      (t.delete(l), T(this._fragmentFiber.child, !1, a1, l, void 0, void 0));
      for (var e = (t = 0); e < Xt.length; e++) {
        var a = Xt[e];
        a.fragmentInstance === this && a.observer === l
          ? l.unobserve(a.instance)
          : (Xt[t++] = a);
      }
      Xt.length = t;
    }
  };
  function a1(l, t) {
    return (l.tag === 6 || ((l = G(l)), t.unobserve(l)), !1);
  }
  var Xt = [],
    rs = !1;
  function u1(l, t, e) {
    (Xt.push({ fragmentInstance: l, observer: t, instance: e }),
      rs ||
        ((rs = !0),
        h1(function () {
          rs = !1;
          var a = Xt;
          Xt = [];
          for (var u = 0; u < a.length; u++) {
            var n = a[u];
            n.observer.unobserve(n.instance);
          }
        })));
  }
  Et.prototype.getClientRects = function () {
    var l = [];
    return (T(this._fragmentFiber.child, !1, n1, l, void 0, void 0), l);
  };
  function n1(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var e = l.ownerDocument.createRange();
      (e.selectNodeContents(l), t.push.apply(t, e.getClientRects()));
    } else ((l = G(l)), t.push.apply(t, l.getClientRects()));
    return !1;
  }
  ((Et.prototype.getRootNode = function (l) {
    var t = H(this._fragmentFiber);
    return t === null ? this : G(t).getRootNode(l);
  }),
    (Et.prototype.compareDocumentPosition = function (l) {
      var t = H(this._fragmentFiber);
      if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var e = [];
      T(this._fragmentFiber.child, !1, os, e, void 0, void 0);
      var a = G(t);
      if (e.length === 0) {
        if (((e = a), jl(this._fragmentFiber))) {
          l: {
            for (t = this._fragmentFiber.return; t !== null; ) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break l;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
              t = t.return;
            }
            t = null;
          }
          t != null && (e = t);
        }
        t = this._fragmentFiber;
        var u = (a = e.compareDocumentPosition(l));
        return (
          e === l
            ? (u = Node.DOCUMENT_POSITION_CONTAINS)
            : a & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((e = Ul(t)[1]),
              e === null
                ? (u = Node.DOCUMENT_POSITION_PRECEDING)
                : ((l = G(e).compareDocumentPosition(l)),
                  (u =
                    l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((t = G(e[0])), (u = G(e[e.length - 1])));
      var n = jl(this._fragmentFiber) ? t.parentElement : a;
      if (n == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (n =
          n.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var i = t.compareDocumentPosition(l),
        f = u.compareDocumentPosition(l),
        s =
          i & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          f & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (f =
          a &&
          n &&
          i & Node.DOCUMENT_POSITION_FOLLOWING &&
          f & Node.DOCUMENT_POSITION_PRECEDING),
        (t =
          (a && t === l) || (n && u === l) || s || f
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!a && t === l) || (!n && u === l)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : i),
        t & Node.DOCUMENT_POSITION_DISCONNECTED ||
        t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        i1(t, this._fragmentFiber, e[0], e[e.length - 1], l)
          ? t
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function i1(l, t, e, a, u) {
    var n = Pe(u);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((e = !!n))
        l: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === t || n.alternate === t)) {
              e = !0;
              break l;
            }
            n = n.return;
          }
          e = !1;
        }
      return e;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return (
          (n = u.ownerDocument),
          u === n || u === n.documentElement || u === n.body
        );
      l: {
        for (n = t, t = H(t); n !== null; ) {
          if (
            !(
              (n.tag !== 5 && n.tag !== 3 && n.tag !== 27) ||
              (n !== t && n.alternate !== t)
            )
          ) {
            n = !0;
            break l;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING
      ? ((t = !!n) &&
          !(t = n === e) &&
          ((t = st(e, n, et)),
          t === null
            ? (t = !1)
            : (T(t, !0, Ut, n, e), (n = pl), (pl = null), (t = n !== null))),
        t)
      : l & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((t = !!n) &&
            !(t = n === a) &&
            ((t = st(a, n, et)),
            t === null
              ? (t = !1)
              : (T(t, !0, $l, n, a),
                (n = pl),
                (zl = pl = null),
                (t = n !== null))),
          t)
        : !1;
  }
  function Rh(l, t) {
    var e = l.ownerDocument.createRange();
    (e.selectNodeContents(l),
      (l = e.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + l.left,
        t
          ? window.scrollY + l.top
          : window.scrollY + l.bottom - window.innerHeight,
      ));
  }
  Et.prototype.scrollIntoView = function (l) {
    if (typeof l == "object") throw Error(o(566));
    var t = [];
    T(this._fragmentFiber.child, !1, os, t, void 0, void 0);
    var e = l !== !1;
    if (t.length === 0) {
      var a = Ul(this._fragmentFiber);
      if (
        ((a = e ? a[1] || a[0] || H(this._fragmentFiber) : a[0] || a[1]),
        a === null)
      )
        return;
      if (a.tag === 6) {
        ((l = G(a)), Rh(l, e));
        return;
      }
      if (((a = G(a)), a.nodeType !== 9)) {
        if (a.nodeType === 11) {
          ((e = "host" in a ? a.host : null),
            e !== null && e.scrollIntoView(l));
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = e ? t.length - 1 : 0; a !== (e ? -1 : t.length); ) {
      var u = t[a];
      (u.tag === 6 ? ((u = G(u)), Rh(u, e)) : G(u).scrollIntoView(l),
        (a += e ? -1 : 1));
    }
  };
  function c1(l, t) {
    return ((l = G(l)), Uh(l, t), !1);
  }
  function Uh(l, t) {
    (l.reactFragments == null && (l.reactFragments = new Set()),
      l.reactFragments.add(t));
  }
  function Hh(l, t) {
    var e = t._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a];
        l.addEventListener(
          u.type,
          u.attachedListener,
          cu(u.optionsOrUseCapture),
        );
      }
    l.nodeType !== 3 &&
      ((e = t._observers),
      e !== null &&
        e.forEach(function (n) {
          for (var i = 0, f = 0; f < Xt.length; f++) {
            var s = Xt[f];
            (s.fragmentInstance !== t ||
              s.observer !== n ||
              s.instance !== l) &&
              (Xt[i++] = s);
          }
          ((Xt.length = i), n.observe(l));
        }),
      Uh(l, t));
  }
  function f1(l, t) {
    var e = t._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a];
        l.removeEventListener(
          u.type,
          u.attachedListener,
          cu(u.optionsOrUseCapture),
        );
      }
    l.nodeType !== 3 &&
      ((e = t._observers),
      e !== null &&
        e.forEach(function (n) {
          typeof n.rootMargin == "string" ? u1(t, n, l) : n.unobserve(l);
        }),
      l.reactFragments != null && l.reactFragments.delete(t));
  }
  function ds(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ds(e), En(e));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function s1(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[bu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Mt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function o1(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = Mt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function qh(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Mt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function hs(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ms(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function r1(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), e.removeEventListener("DOMContentLoaded", a));
      };
      (e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a));
    }
  }
  function Mt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var vs = null;
  function Bh(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return Mt(l.nextSibling);
          t--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Yh(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function d1(l, t) {
    function e() {
      a = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var a = !1;
    try {
      (l.ownerDocument.addEventListener("focus", e, !0),
        (l.focus || HTMLElement.prototype.focus).call(l, t));
    } finally {
      l.ownerDocument.removeEventListener("focus", e, !0);
    }
    return a;
  }
  function h1(l) {
    xh(function () {
      xh(function (t) {
        return l(t);
      });
    });
  }
  function Gh(l, t, e) {
    switch (((t = tn(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(o(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(o(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function Qh(l, t, e) {
    for (var a in e) {
      var u = e[a];
      e.hasOwnProperty(a) && u != null && hl(l, t, a, null, Vv, u);
    }
    (e.dangerouslySetInnerHTML != null && (l.textContent = ""),
      l.onclick === Zt && (l.onclick = null),
      En(l));
  }
  function ys(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    En(l);
  }
  var Dt = new Map(),
    Xh = new Set();
  function en(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Se = Z.d;
  Z.d = { f: m1, r: v1, D: y1, C: g1, L: S1, m: b1, X: E1, S: T1, M: p1 };
  function m1() {
    var l = Se.f(),
      t = xi();
    return l || t;
  }
  function v1(l) {
    var t = Na(l);
    t !== null && t.tag === 5 && t.type === "form" ? wr(t) : Se.r(l);
  }
  var fu = typeof document > "u" ? null : document;
  function Vh(l, t, e) {
    var a = fu;
    if (a && typeof t == "string" && t) {
      var u = xt(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        Xh.has(u) ||
          (Xh.add(u),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement("link")),
            kl(t, "link", l),
            Yl(t),
            a.head.appendChild(t))));
    }
  }
  function y1(l) {
    (Se.D(l), Vh("dns-prefetch", l, null));
  }
  function g1(l, t) {
    (Se.C(l, t), Vh("preconnect", l, t));
  }
  function S1(l, t, e) {
    Se.L(l, t, e);
    var a = fu;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + xt(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + xt(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + xt(e.imageSizes) + '"]'))
        : (u += '[href="' + xt(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = su(l);
          break;
        case "script":
          n = ou(l);
      }
      if (
        !(
          Dt.has(n) ||
          ((l = $(
            {
              rel: "preload",
              href: t === "image" && e && e.imageSrcSet ? void 0 : l,
              as: t,
            },
            e,
          )),
          Dt.set(n, l),
          a.querySelector(u) !== null ||
            (t === "style" && a.querySelector(an(n))) ||
            (t === "script" && a.querySelector(un(n))))
        )
      ) {
        var i = a.createElement("link");
        (kl(i, "link", l),
          t === "style" &&
            ((i[Tn] = !0),
            (i.onload = i.onerror =
              function () {
                lo(i);
              })),
          Yl(i),
          a.head.appendChild(i));
      }
    }
  }
  function b1(l, t) {
    Se.m(l, t);
    var e = fu;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + xt(a) + '"][href="' + xt(l) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ou(l);
      }
      if (
        !Dt.has(n) &&
        ((l = $({ rel: "modulepreload", href: l }, t)),
        Dt.set(n, l),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(un(n))) return;
        }
        ((a = e.createElement("link")),
          kl(a, "link", l),
          Yl(a),
          e.head.appendChild(a));
      }
    }
  }
  function T1(l, t, e) {
    Se.S(l, t, e);
    var a = fu;
    if (a && l) {
      var u = _a(a).hoistableStyles,
        n = su(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(an(n)))) f.loading = 5;
        else {
          ((l = $({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = Dt.get(n)) && gs(l, e));
          var s = (i = a.createElement("link"));
          (Yl(s),
            kl(s, "link", l),
            (s._p = new Promise(function (y, b) {
              ((s.onload = y), (s.onerror = b));
            })),
            s.addEventListener("load", function () {
              f.loading |= 1;
            }),
            s.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Mi(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: f }),
          u.set(n, i));
      }
    }
  }
  function E1(l, t) {
    Se.X(l, t);
    var e = fu;
    if (e && l) {
      var a = _a(e).hoistableScripts,
        u = ou(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(un(u))),
        n ||
          ((l = $({ src: l, async: !0 }, t)),
          (t = Dt.get(u)) && Ss(l, t),
          (n = e.createElement("script")),
          Yl(n),
          kl(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function p1(l, t) {
    Se.M(l, t);
    var e = fu;
    if (e && l) {
      var a = _a(e).hoistableScripts,
        u = ou(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(un(u))),
        n ||
          ((l = $({ src: l, async: !0, type: "module" }, t)),
          (t = Dt.get(u)) && Ss(l, t),
          (n = e.createElement("script")),
          Yl(n),
          kl(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function wh(l, t, e, a) {
    var u = (u = Te.current) ? en(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((e = su(e.href)),
            (t = _a(u).hoistableStyles),
            (a = t.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              t.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = su(e.href);
          var n = _a(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(an(l)))
                ? n._p || ((i.instance = n), (i.state.loading = 5))
                : ((n = Dt.get(l)),
                  n ||
                    ((n = {
                      rel: "preload",
                      as: "style",
                      href: e.href,
                      crossOrigin: e.crossOrigin,
                      integrity: e.integrity,
                      media: e.media,
                      hrefLang: e.hrefLang,
                      referrerPolicy: e.referrerPolicy,
                    }),
                    Dt.set(l, n)),
                  z1(u, l, n, i.state))),
            t && a === null)
          )
            throw Error(o(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((e = ou(e)),
              (t = _a(u).hoistableScripts),
              (a = t.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, l));
    }
  }
  function su(l) {
    return 'href="' + xt(l) + '"';
  }
  function an(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Lh(l) {
    return $({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function z1(l, t, e, a) {
    if ((t = l.querySelector('link[rel="preload"][as="style"][' + t + "]"))) {
      if (t[Tn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      ((t = l.createElement("link")),
        (t[Tn] = !0),
        (t.onload = t.onerror = lo.bind(null, t)),
        kl(t, "link", e),
        Yl(t),
        l.head.appendChild(t));
    ((a.preload = t),
      t.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (a.loading |= 2);
      }));
  }
  function ou(l) {
    return '[src="' + xt(l) + '"]';
  }
  function un(l) {
    return "script[async]" + l;
  }
  function Zh(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + xt(e.href) + '"]');
          if (a) return ((t.instance = a), Yl(a), a);
          var u = $({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Yl(a),
            kl(a, "style", u),
            Mi(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          u = su(e.href);
          var n = l.querySelector(an(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Yl(n), n);
          ((a = Lh(e)),
            (u = Dt.get(u)) && gs(a, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Yl(n));
          var i = n;
          return (
            (i._p = new Promise(function (f, s) {
              ((i.onload = f), (i.onerror = s));
            })),
            kl(n, "link", a),
            (t.state.loading |= 4),
            Mi(n, e.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = ou(e.src)),
            (u = l.querySelector(un(n)))
              ? ((t.instance = u), Yl(u), u)
              : ((a = e),
                (u = Dt.get(n)) && ((a = $({}, e)), Ss(a, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Yl(u),
                kl(u, "link", a),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Mi(a, e.precedence, l));
    return t.instance;
  }
  function Mi(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function gs(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function Ss(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Di = null;
  function Kh(l, t, e) {
    if (Di === null) {
      var a = new Map(),
        u = (Di = new Map());
      u.set(e, a);
    } else ((u = Di), (a = u.get(e)), a || ((a = new Map()), u.set(e, a)));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[bu] ||
          n[wl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function bs(l, t, e) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function x1(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Jh(l, t) {
    return (
      l === "img" &&
      t.src != null &&
      t.src !== "" &&
      t.onLoad == null &&
      t.loading !== "lazy"
    );
  }
  function kh(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Fh(l) {
    return (
      (l.width || 100) *
      (l.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function Wh(l, t) {
    typeof t.decode == "function" &&
      (l.imgCount++,
      t.complete || ((l.imgBytes += Fh(t)), l.suspenseyImages.push(t)),
      (l = _1.bind(l)),
      t.decode().then(l, l));
  }
  function j1(l, t, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = su(a.href),
          n = t.querySelector(an(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = nn.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = n),
            Yl(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (a = Lh(a)),
          (u = Dt.get(u)) && gs(a, u),
          (n = n.createElement("link")),
          Yl(n));
        var i = n;
        ((i._p = new Promise(function (f, s) {
          ((i.onload = f), (i.onerror = s));
        })),
          kl(n, "link", a),
          (e.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = nn.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  var Ri = 0;
  function N1(l, t) {
    return (
      l.stylesheets && l.count === 0 && Hi(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Hi(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Ri === 0 && (Ri = 62500 * Lv());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Hi(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Ri ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = e),
              function () {
                ((l.unsuspend = null), clearTimeout(a), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function $h(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Hi(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        ((l.unsuspend = null), t());
      }
    }
  }
  function nn() {
    (this.count--, $h(this));
  }
  function _1() {
    (this.imgCount--, $h(this));
  }
  var Ui = null;
  function Hi(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Ui = new Map()),
        t.forEach(O1, l),
        (Ui = null),
        nn.call(l)));
  }
  function O1(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Ui.get(l);
      if (e) var a = e.get(null);
      else {
        ((e = new Map()), Ui.set(l, e));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = nn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ru = {
    $$typeof: Bl,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0,
  };
  function A1(l, t, e, a, u, n, i, f, s) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ii(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ii(0)),
      (this.hiddenUpdates = Ii(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function Ih(l, t, e, a, u, n, i, f, s, y, b, z) {
    return (
      (l = new A1(l, t, e, i, s, y, b, z, f)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ut(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Rc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
      Bc(n),
      l
    );
  }
  function Ph(l) {
    return l ? ((l = Ba), l) : Ba;
  }
  function l0(l, t, e, a, u, n) {
    ((u = Ph(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Me(t)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = De(l, a, t)),
      e !== null && (ft(e, l, t), qu(e, l, t)));
  }
  function t0(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function Ts(l, t) {
    (t0(l, t), (l = l.alternate) && t0(l, t));
  }
  function e0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = aa(l, 67108864);
      (t !== null && ft(t, l, 67108864), Ts(l, 67108864));
    }
  }
  function a0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Tt();
      t = Pi(t);
      var e = aa(l, t);
      (e !== null && ft(e, l, t), Ts(l, t));
    }
  }
  var du = !0;
  function C1(l, t, e, a) {
    var u = R.T;
    R.T = null;
    var n = Z.p;
    try {
      ((Z.p = 2), Es(l, t, e, a));
    } finally {
      ((Z.p = n), (R.T = u));
    }
  }
  function M1(l, t, e, a) {
    var u = R.T;
    R.T = null;
    var n = Z.p;
    try {
      ((Z.p = 8), Es(l, t, e, a));
    } finally {
      ((Z.p = n), (R.T = u));
    }
  }
  function Es(l, t, e, a) {
    if (du) {
      var u = ps(a);
      if (u === null) (es(l, t, a, qi, e), n0(l, a));
      else if (R1(u, l, t, e, a)) a.stopPropagation();
      else if ((n0(l, a), t & 4 && -1 < D1.indexOf(l))) {
        for (; u !== null; ) {
          var n = Na(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Ie(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - ht(i));
                      ((f.entanglements[1] |= s), (i &= ~s));
                    }
                    (te(n), (fl & 6) === 0 && ((Ei = rt() + 500), Iu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = aa(n, 2)), f !== null && ft(f, n, 2), xi(), Ts(n, 2));
            }
          if (((n = ps(a)), n === null && es(l, t, a, qi, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else es(l, t, a, null, e);
    }
  }
  function ps(l) {
    return ((l = ic(l)), zs(l));
  }
  var qi = null;
  function zs(l) {
    if (((qi = null), (l = Pe(l)), l !== null)) {
      var t = M(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = V(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = X(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((qi = l), null);
  }
  function u0(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (L0()) {
          case Vs:
            return 2;
          case ws:
            return 8;
          case vn:
          case Z0:
            return 32;
          case Ls:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xs = !1,
    Le = null,
    Ze = null,
    Ke = null,
    cn = new Map(),
    fn = new Map(),
    Je = [],
    D1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function n0(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Le = null;
        break;
      case "dragenter":
      case "dragleave":
        Ze = null;
        break;
      case "mouseover":
      case "mouseout":
        Ke = null;
        break;
      case "pointerover":
      case "pointerout":
        cn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fn.delete(t.pointerId);
    }
  }
  function sn(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Na(t)), t !== null && e0(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function R1(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return ((Le = sn(Le, l, t, e, a, u)), !0);
      case "dragenter":
        return ((Ze = sn(Ze, l, t, e, a, u)), !0);
      case "mouseover":
        return ((Ke = sn(Ke, l, t, e, a, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (cn.set(n, sn(cn.get(n) || null, l, t, e, a, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          fn.set(n, sn(fn.get(n) || null, l, t, e, a, u)),
          !0
        );
    }
    return !1;
  }
  function i0(l) {
    var t = Pe(l.target);
    if (t !== null) {
      var e = M(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = V(e)), t !== null)) {
            ((l.blockedOn = t),
              $s(l.priority, function () {
                a0(e);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = X(e)), t !== null)) {
            ((l.blockedOn = t),
              $s(l.priority, function () {
                a0(e);
              }));
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bi(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = ps(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        ((nc = a), e.target.dispatchEvent(a), (nc = null));
      } else return ((t = Na(e)), t !== null && e0(t), (l.blockedOn = e), !1);
      t.shift();
    }
    return !0;
  }
  function c0(l, t, e) {
    Bi(l) && e.delete(t);
  }
  function U1() {
    ((xs = !1),
      Le !== null && Bi(Le) && (Le = null),
      Ze !== null && Bi(Ze) && (Ze = null),
      Ke !== null && Bi(Ke) && (Ke = null),
      cn.forEach(c0),
      fn.forEach(c0));
  }
  function Yi(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      xs ||
        ((xs = !0),
        d.unstable_scheduleCallback(d.unstable_NormalPriority, U1)));
  }
  var Gi = null;
  function f0(l) {
    Gi !== l &&
      ((Gi = l),
      d.unstable_scheduleCallback(d.unstable_NormalPriority, function () {
        Gi === l && (Gi = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            u = l[t + 2];
          if (typeof a != "function") {
            if (zs(a || e) === null) continue;
            break;
          }
          var n = Na(e);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            uf(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function hu(l) {
    function t(s) {
      return Yi(s, l);
    }
    (Le !== null && Yi(Le, l),
      Ze !== null && Yi(Ze, l),
      Ke !== null && Yi(Ke, l),
      cn.forEach(t),
      fn.forEach(t));
    for (var e = 0; e < Je.length; e++) {
      var a = Je[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Je.length && ((e = Je[0]), e.blockedOn === null); )
      (i0(e), e.blockedOn === null && Je.shift());
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[at] || null;
        if (typeof n == "function") i || f0(e);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[at] || null))) f = i.formAction;
            else if (zs(u) !== null) continue;
          } else f = i.action;
          (typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)),
            f0(e));
        }
      }
  }
  function s0() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), a || setTimeout(e, 20));
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function js(l) {
    this._internalRoot = l;
  }
  ((Qi.prototype.render = js.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var e = t.current,
        a = Tt();
      l0(e, a, l, t, null, null);
    }),
    (Qi.prototype.unmount = js.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (l0(l.current, 2, null, l, null, null), xi(), (t[ja] = null));
        }
      }));
  function Qi(l) {
    this._internalRoot = l;
  }
  Qi.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Ws();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Je.length && t !== 0 && t < Je[e].priority; e++);
      (Je.splice(e, 0, l), e === 0 && i0(l));
    }
  };
  var o0 = E.version;
  if (o0 !== "19.3.0") throw Error(o(527, o0, "19.3.0"));
  Z.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(o(188))
        : ((l = Object.keys(l).join(",")), Error(o(268, l)));
    return (
      (l = J(t)),
      (l = l !== null ? C(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var H1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.3.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xi.isDisabled && Xi.supportsFiber)
      try {
        ((yu = Xi.inject(H1)), (dt = Xi));
      } catch {}
  }
  return (
    (rn.createRoot = function (l, t) {
      if (!N(l)) throw Error(o(299));
      var e = !1,
        a = "",
        u = Pr,
        n = ld,
        i = td;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Ih(l, 1, !1, null, null, e, a, null, u, n, i, s0)),
        (l[ja] = t.current),
        ts(l),
        new js(t)
      );
    }),
    (rn.hydrateRoot = function (l, t, e) {
      if (!N(l)) throw Error(o(299));
      var a = !1,
        u = "",
        n = Pr,
        i = ld,
        f = td,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.formState !== void 0 && (s = e.formState)),
        (t = Ih(l, 1, !0, t, e ?? null, a, u, s, n, i, f, s0)),
        (t.context = Ph(null)),
        (e = t.current),
        (a = Tt()),
        (a = Pi(a)),
        (u = Me(a)),
        (u.callback = null),
        De(e, u, a),
        (e = a),
        (t.current.lanes = e),
        Su(t, e),
        te(t),
        (l[ja] = t.current),
        ts(l),
        new Qi(t)
      );
    }),
    (rn.version = "19.3.0"),
    rn
  );
}
var T0;
function K1() {
  if (T0) return Os.exports;
  T0 = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (E) {
        console.error(E);
      }
  }
  return (d(), (Os.exports = Z1()), Os.exports);
}
var J1 = K1();
const k1 = A0(J1);
M0();
/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vi() {
  return (
    (Vi = Object.assign
      ? Object.assign.bind()
      : function (d) {
          for (var E = 1; E < arguments.length; E++) {
            var x = arguments[E];
            for (var o in x) ({}).hasOwnProperty.call(x, o) && (d[o] = x[o]);
          }
          return d;
        }),
    Vi.apply(null, arguments)
  );
}
var Ea;
(function (d) {
  ((d.Pop = "POP"), (d.Push = "PUSH"), (d.Replace = "REPLACE"));
})(Ea || (Ea = {}));
const E0 = "popstate";
function F1(d) {
  d === void 0 && (d = {});
  function E(o, N) {
    let { pathname: M, search: V, hash: X } = o.location;
    return Ds(
      "",
      { pathname: M, search: V, hash: X },
      (N.state && N.state.usr) || null,
      (N.state && N.state.key) || "default",
    );
  }
  function x(o, N) {
    return typeof N == "string" ? N : R0(N);
  }
  return $1(E, x, null, d);
}
function D0(d, E) {
  if (d === !1 || d === null || typeof d > "u") throw new Error(E);
}
function W1() {
  return Math.random().toString(36).substr(2, 8);
}
function p0(d, E) {
  return { usr: d.state, key: d.key, idx: E };
}
function Ds(d, E, x, o) {
  return (
    x === void 0 && (x = null),
    Vi(
      { pathname: typeof d == "string" ? d : d.pathname, search: "", hash: "" },
      typeof E == "string" ? U0(E) : E,
      { state: x, key: (E && E.key) || o || W1() },
    )
  );
}
function R0(d) {
  let { pathname: E = "/", search: x = "", hash: o = "" } = d;
  return (
    x && x !== "?" && (E += x.charAt(0) === "?" ? x : "?" + x),
    o && o !== "#" && (E += o.charAt(0) === "#" ? o : "#" + o),
    E
  );
}
function U0(d) {
  let E = {};
  if (d) {
    let x = d.indexOf("#");
    x >= 0 && ((E.hash = d.substr(x)), (d = d.substr(0, x)));
    let o = d.indexOf("?");
    (o >= 0 && ((E.search = d.substr(o)), (d = d.substr(0, o))),
      d && (E.pathname = d));
  }
  return E;
}
function $1(d, E, x, o) {
  o === void 0 && (o = {});
  let { window: N = document.defaultView, v5Compat: M = !1 } = o,
    V = N.history,
    X = Ea.Pop,
    Y = null,
    J = C();
  J == null && ((J = 0), V.replaceState(Vi({}, V.state, { idx: J }), ""));
  function C() {
    return (V.state || { idx: null }).idx;
  }
  function T() {
    X = Ea.Pop;
    let G = C(),
      pl = G == null ? null : G - J;
    ((J = G), Y && Y({ action: X, location: Sl.location, delta: pl }));
  }
  function H(G, pl) {
    X = Ea.Push;
    let zl = Ds(Sl.location, G, pl);
    J = C() + 1;
    let Ut = p0(zl, J),
      $l = Sl.createHref(zl);
    try {
      V.pushState(Ut, "", $l);
    } catch (et) {
      if (et instanceof DOMException && et.name === "DataCloneError") throw et;
      N.location.assign($l);
    }
    M && Y && Y({ action: X, location: Sl.location, delta: 1 });
  }
  function jl(G, pl) {
    X = Ea.Replace;
    let zl = Ds(Sl.location, G, pl);
    J = C();
    let Ut = p0(zl, J),
      $l = Sl.createHref(zl);
    (V.replaceState(Ut, "", $l),
      M && Y && Y({ action: X, location: Sl.location, delta: 0 }));
  }
  function Ul(G) {
    let pl = N.location.origin !== "null" ? N.location.origin : N.location.href,
      zl = typeof G == "string" ? G : R0(G);
    return (
      (zl = zl.replace(/ $/, "%20")),
      D0(
        pl,
        "No window.location.(origin|href) available to create URL for href: " +
          zl,
      ),
      new URL(zl, pl)
    );
  }
  let Sl = {
    get action() {
      return X;
    },
    get location() {
      return d(N, V);
    },
    listen(G) {
      if (Y) throw new Error("A history only accepts one active listener");
      return (
        N.addEventListener(E0, T),
        (Y = G),
        () => {
          (N.removeEventListener(E0, T), (Y = null));
        }
      );
    },
    createHref(G) {
      return E(N, G);
    },
    createURL: Ul,
    encodeLocation(G) {
      let pl = Ul(G);
      return { pathname: pl.pathname, search: pl.search, hash: pl.hash };
    },
    push: H,
    replace: jl,
    go(G) {
      return V.go(G);
    },
  };
  return Sl;
}
var z0;
(function (d) {
  ((d.data = "data"),
    (d.deferred = "deferred"),
    (d.redirect = "redirect"),
    (d.error = "error"));
})(z0 || (z0 = {}));
function I1(d, E) {
  if (E === "/") return d;
  if (!d.toLowerCase().startsWith(E.toLowerCase())) return null;
  let x = E.endsWith("/") ? E.length - 1 : E.length,
    o = d.charAt(x);
  return o && o !== "/" ? null : d.slice(x) || "/";
}
const H0 = ["post", "put", "patch", "delete"];
new Set(H0);
const P1 = ["get", ...H0];
new Set(P1);
/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rs() {
  return (
    (Rs = Object.assign
      ? Object.assign.bind()
      : function (d) {
          for (var E = 1; E < arguments.length; E++) {
            var x = arguments[E];
            for (var o in x) ({}).hasOwnProperty.call(x, o) && (d[o] = x[o]);
          }
          return d;
        }),
    Rs.apply(null, arguments)
  );
}
const ly = vl.createContext(null),
  q0 = vl.createContext(null);
function ty() {
  return vl.useContext(q0) != null;
}
function ey(d, E) {
  (d == null || d.v7_startTransition, d == null || d.v7_relativeSplatPath);
}
function ay(d) {
  let {
    basename: E = "/",
    children: x = null,
    location: o,
    navigationType: N = Ea.Pop,
    navigator: M,
    static: V = !1,
    future: X,
  } = d;
  ty() && D0(!1);
  let Y = E.replace(/^\/*/, "/"),
    J = vl.useMemo(
      () => ({
        basename: Y,
        navigator: M,
        static: V,
        future: Rs({ v7_relativeSplatPath: !1 }, X),
      }),
      [Y, X, M, V],
    );
  typeof o == "string" && (o = U0(o));
  let {
      pathname: C = "/",
      search: T = "",
      hash: H = "",
      state: jl = null,
      key: Ul = "default",
    } = o,
    Sl = vl.useMemo(() => {
      let G = I1(C, Y);
      return G == null
        ? null
        : {
            location: { pathname: G, search: T, hash: H, state: jl, key: Ul },
            navigationType: N,
          };
    }, [Y, C, T, H, jl, Ul, N]);
  return Sl == null
    ? null
    : vl.createElement(
        ly.Provider,
        { value: J },
        vl.createElement(q0.Provider, { children: x, value: Sl }),
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const uy = "6";
try {
  window.__reactRouterVersion = uy;
} catch {}
const ny = "startTransition",
  x0 = X1[ny];
function iy(d) {
  let { basename: E, children: x, future: o, window: N } = d,
    M = vl.useRef();
  M.current == null && (M.current = F1({ window: N, v5Compat: !0 }));
  let V = M.current,
    [X, Y] = vl.useState({ action: V.action, location: V.location }),
    { v7_startTransition: J } = o || {},
    C = vl.useCallback(
      (T) => {
        J && x0 ? x0(() => Y(T)) : Y(T);
      },
      [Y, J],
    );
  return (
    vl.useLayoutEffect(() => V.listen(C), [V, C]),
    vl.useEffect(() => ey(o), [o]),
    vl.createElement(ay, {
      basename: E,
      children: x,
      location: X.location,
      navigationType: X.action,
      navigator: V,
      future: o,
    })
  );
}
var j0;
(function (d) {
  ((d.UseScrollRestoration = "useScrollRestoration"),
    (d.UseSubmit = "useSubmit"),
    (d.UseSubmitFetcher = "useSubmitFetcher"),
    (d.UseFetcher = "useFetcher"),
    (d.useViewTransitionState = "useViewTransitionState"));
})(j0 || (j0 = {}));
var N0;
(function (d) {
  ((d.UseFetcher = "useFetcher"),
    (d.UseFetchers = "useFetchers"),
    (d.UseScrollRestoration = "useScrollRestoration"));
})(N0 || (N0 = {}));
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cy = (d) => d.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  fy = (d) =>
    d.replace(/^([A-Z])|[\s-_]+(\w)/g, (E, x, o) =>
      o ? o.toUpperCase() : x.toLowerCase(),
    ),
  _0 = (d) => {
    const E = fy(d);
    return E.charAt(0).toUpperCase() + E.slice(1);
  },
  B0 = (...d) =>
    d
      .filter((E, x, o) => !!E && E.trim() !== "" && o.indexOf(E) === x)
      .join(" ")
      .trim(),
  sy = (d) => {
    for (const E in d)
      if (E.startsWith("aria-") || E === "role" || E === "title") return !0;
  };
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var oy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ry = vl.forwardRef(
  (
    {
      color: d = "currentColor",
      size: E = 24,
      strokeWidth: x = 2,
      absoluteStrokeWidth: o,
      className: N = "",
      children: M,
      iconNode: V,
      ...X
    },
    Y,
  ) =>
    vl.createElement(
      "svg",
      {
        ref: Y,
        ...oy,
        width: E,
        height: E,
        stroke: d,
        strokeWidth: o ? (Number(x) * 24) / Number(E) : x,
        className: B0("lucide", N),
        ...(!M && !sy(X) && { "aria-hidden": "true" }),
        ...X,
      },
      [
        ...V.map(([J, C]) => vl.createElement(J, C)),
        ...(Array.isArray(M) ? M : [M]),
      ],
    ),
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ql = (d, E) => {
  const x = vl.forwardRef(({ className: o, ...N }, M) =>
    vl.createElement(ry, {
      ref: M,
      iconNode: E,
      className: B0(`lucide-${cy(_0(d))}`, `lucide-${d}`, o),
      ...N,
    }),
  );
  return ((x.displayName = _0(d)), x);
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dy = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Ys = ql("arrow-right", dy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hy = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  pa = ql("check", hy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const my = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  vy = ql("chevron-down", my);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yy = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }],
  ],
  gy = ql("clock-3", yy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sy = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  Y0 = ql("download", Sy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const by = [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ],
  Ty = ql("graduation-cap", by);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ey = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  G0 = ql("instagram", Ey);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const py = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Us = ql("mail", py);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zy = [
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 18h16", key: "19g7jn" }],
    ["path", { d: "M4 6h16", key: "1o0s65" }],
  ],
  xy = ql("menu", zy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jy = [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ],
  Gs = ql("message-circle", jy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ny = [
    [
      "path",
      {
        d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
        key: "80a601",
      },
    ],
    [
      "path",
      {
        d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
        key: "j0ngtp",
      },
    ],
    ["circle", { cx: "16", cy: "7", r: "5", key: "d08jfb" }],
  ],
  _y = ql("mic-vocal", Ny);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oy = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  Hs = ql("phone", Oy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ay = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Cy = ql("shield-check", Ay);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const My = [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ],
  wi = ql("sparkles", My);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dy = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Ry = ql("star", Dy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uy = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  Hy = ql("target", Uy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qy = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  By = ql("users", qy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yy = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  qs = ql("x", Yy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gy = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  Qy = ql("zap", Gy);
function Fe({ children: d, to: E, secondary: x = !1, onClick: o }) {
  const N = (M) => {
    if ((o && o(M), E.startsWith("#"))) {
      M.preventDefault();
      const V = E.substring(1),
        X = document.getElementById(V);
      if (X) {
        const C = X.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: C, behavior: "smooth" });
      }
    }
  };
  return c.jsxs("a", {
    className: `btn ${x ? "btn-secondary" : ""}`,
    href: E,
    onClick: N,
    children: [d, c.jsx(Ys, { size: 17 })],
  });
}
function Q0({ onNavigate: d }) {
  return c.jsxs("a", {
    className: "logo",
    href: "#why-elevra",
    onClick: (E) => {
      (E.preventDefault(),
        d && d(),
        window.scrollTo({ top: 0, behavior: "smooth" }));
    },
    children: [
      c.jsx("strong", { children: "elevr.a" }),
      c.jsx("span", { children: "English With Kanika" }),
    ],
  });
}
const mu = [
  { label: "Why Elevra", id: "why-elevra" },
  { label: "What You Get", id: "features" },
  { label: "90-Day Journey", id: "journey" },
  { label: "Courses & Plans", id: "courses" },
  { label: "About Coach", id: "about" },
  { label: "Student Results", id: "results" },
  { label: "Guide Book", id: "guide" },
  { label: "FAQs", id: "faqs" },
  { label: "Contact", id: "contact" },
];
function Xy() {
  const [d, E] = vl.useState(!1),
    [x, o] = vl.useState(!1),
    [N, M] = vl.useState("why-elevra"),
    V = (X) => {
      (M(X), E(!1));
      const Y = document.getElementById(X);
      if (Y) {
        const T = Y.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: T, behavior: "smooth" });
      }
    };
  return (
    vl.useEffect(() => {
      const X = () => {
        o(window.scrollY > 10);
        const Y = 130;
        let J = mu[0].id;
        for (const C of mu) {
          const T = document.getElementById(C.id);
          T && T.getBoundingClientRect().top <= Y && (J = C.id);
        }
        (window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 70 &&
          (J = mu[mu.length - 1].id),
          M(J));
      };
      return (
        X(),
        window.addEventListener("scroll", X, { passive: !0 }),
        () => window.removeEventListener("scroll", X)
      );
    }, []),
    c.jsx("header", {
      className: `navbar ${x ? "navbar-scrolled" : ""}`,
      children: c.jsxs("div", {
        className: "nav-inner",
        children: [
          c.jsx(Q0, { onNavigate: () => M("why-elevra") }),
          c.jsxs("nav", {
            className: d ? "mobile-open" : "",
            children: [
              mu.map(({ label: X, id: Y }) =>
                c.jsx(
                  "a",
                  {
                    href: `#${Y}`,
                    className: N === Y ? "active" : "",
                    onClick: (J) => {
                      (J.preventDefault(), V(Y));
                    },
                    children: X,
                  },
                  Y,
                ),
              ),
              c.jsx(Fe, {
                to: "#demo",
                onClick: () => E(!1),
                children: "Book a Free Demo",
              }),
            ],
          }),
          c.jsx("button", {
            className: "menu-btn",
            onClick: () => E(!d),
            "aria-label": "Toggle menu",
            children: d ? c.jsx(qs, {}) : c.jsx(xy, {}),
          }),
        ],
      }),
    })
  );
}
function Vy() {
  const d = (E, x) => {
    x.preventDefault();
    const o = document.getElementById(E);
    if (o) {
      const V = o.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: V, behavior: "smooth" });
    }
  };
  return c.jsxs("footer", {
    className: "footer",
    children: [
      c.jsxs("div", {
        className: "footer-grid",
        children: [
          c.jsxs("div", {
            children: [
              c.jsx(Q0, {}),
              c.jsx("p", {
                className: "footer-copy",
                children:
                  "Turning hesitation into confidence for ambitious corporate professionals.",
              }),
              c.jsx("div", {
                className: "footer-quote",
                children:
                  "“My superpower? Turning hesitation into confidence.”",
              }),
              c.jsxs("div", {
                className: "footer-direct-contact",
                children: [
                  c.jsxs("div", {
                    className: "footer-contact-item",
                    children: [
                      c.jsx(Hs, { size: 15 }),
                      c.jsxs("span", {
                        children: [
                          "Call / WhatsApp: ",
                          c.jsx("a", {
                            href: "tel:+918700276743",
                            children: "+91 87002 76743",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "footer-contact-item",
                    children: [
                      c.jsx(Us, { size: 15 }),
                      c.jsxs("span", {
                        children: [
                          "Official Email: ",
                          c.jsx("a", {
                            href: "mailto:kanika@elevra.in",
                            children: "kanika@elevra.in",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("h4", { children: "Explore Sections" }),
              mu.map(({ label: E, id: x }) =>
                c.jsx(
                  "a",
                  { href: `#${x}`, onClick: (o) => d(x, o), children: E },
                  x,
                ),
              ),
              c.jsx("a", {
                href: "#demo",
                onClick: (E) => d("demo", E),
                children: "Book Free Demo",
              }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("h4", { children: "Connect & Support" }),
              c.jsxs("a", {
                href: "tel:+918700276743",
                children: [c.jsx(Hs, { size: 16 }), " +91 87002 76743"],
              }),
              c.jsxs("a", {
                href: "mailto:kanika@elevra.in",
                children: [c.jsx(Us, { size: 16 }), " kanika@elevra.in"],
              }),
              c.jsxs("a", {
                href: "https://wa.me/918700276743",
                target: "_blank",
                rel: "noreferrer",
                children: [
                  c.jsx(Gs, { size: 16 }),
                  " WhatsApp: +91 87002 76743",
                ],
              }),
              c.jsxs("a", {
                href: "https://instagram.com/elevr.a",
                target: "_blank",
                rel: "noreferrer",
                children: [c.jsx(G0, { size: 16 }), " @elevr.a"],
              }),
              c.jsx("div", {
                className: "footer-support-note",
                children: c.jsx("small", {
                  children:
                    "Mon – Sat: 9:00 AM – 8:00 PM IST · Quick turnaround on WhatsApp & Email",
                }),
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "footer-bottom",
        children: [
          c.jsx("span", {
            children:
              "© 2026 Elevra (English with Kanika). All Rights Reserved.",
          }),
          c.jsxs("span", {
            children: [
              "Email: ",
              c.jsx("a", {
                href: "mailto:kanika@elevra.in",
                children: "kanika@elevra.in",
              }),
              " | Phone: ",
              c.jsx("a", {
                href: "tel:+918700276743",
                children: "+91 87002 76743",
              }),
            ],
          }),
          c.jsx("span", { children: "Built for confident communication." }),
        ],
      }),
    ],
  });
}
function wy({ children: d }) {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(Xy, {}),
      d,
      c.jsx(Vy, {}),
      c.jsx("a", {
        className: "whatsapp",
        href: "https://wa.me/918700276743",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "WhatsApp",
        children: c.jsx(Gs, { size: 21 }),
      }),
    ],
  });
}
const Ly = [
    [
      "Flexible Corporate Timings",
      "Morning, afternoon, evening or weekend batches with easy rescheduling.",
      gy,
    ],
    [
      "75% Live Speaking Time",
      "No passive lectures — active speaking, debate and instant feedback.",
      _y,
    ],
    [
      "Real Boardroom Simulations",
      "Practice CXO pitches, tough client questions, negotiations and global calls.",
      Hy,
    ],
    [
      "Eliminate Freeze & Fillers",
      "Build direct English thinking so hesitation and filler words stop controlling you.",
      Qy,
    ],
    [
      "Cambridge Framework & Certificate",
      "A structured 90-day pathway with a completion certificate.",
      Ty,
    ],
    [
      "Lifetime Executive Resource Vault",
      "Templates, vocabulary decks, cheat-sheets and alumni resources.",
      Y0,
    ],
  ],
  Zy = [
    {
      month: "MONTH 01",
      title: "Speak Without Fear or Freezing",
      sub: "Mindset + native thought formulation",
      items: [
        "Think directly in English",
        "Daily live drills with micro-corrections",
        "Pronunciation & vocal flow",
        "Remove blank freezes and fillers",
      ],
    },
    {
      month: "MONTH 02",
      title: "Sound Like a Corporate Professional",
      sub: "Executive vocabulary + meeting decorum",
      items: [
        "150+ workplace phrases & idioms",
        "Scrums, client calls & updates",
        "Pace, pitch, tone and projection",
        "Executive email writing",
      ],
    },
    {
      month: "MONTH 03",
      title: "Lead with Poise & Authority",
      sub: "Presence + persuasion + presentation",
      items: [
        "Pitch ideas and handle pushback",
        "Interview & storytelling frameworks",
        "Non-verbal executive presence",
        "Final benchmark assessment + certificate",
      ],
    },
  ],
  Ky = [
    [
      "Grammar is weak, will this help?",
      "Yes. Grammar is fixed inside real conversations and professional emails, not school rules.",
    ],
    [
      "What if I miss a class?",
      "1-on-1 sessions can be rescheduled. Group learners receive recap notes, recordings and revision slots.",
    ],
    [
      "What happens in the Free Demo?",
      "It is a live 1-on-1 Google Meet. Kanika or a senior trainer diagnoses your speaking blocks, gives instant feedback and maps your 90-day plan.",
    ],
    [
      "How is Elevra different?",
      "The focus is executive presence, negotiation, presentations and natural thinking in English, with 75% of class time spent speaking.",
    ],
    [
      "Will I receive a certificate?",
      "Yes. You receive an Elevra Certificate of Completion aligned with the Cambridge CEFR framework after the 90-day pathway and final evaluation.",
    ],
  ],
  Jy = [
    [
      "Ankit Kapoor",
      "Associate Director, Deloitte",
      "I just gave my first keynote to the London leadership team. Not once did I fumble or search for words…",
    ],
    [
      "Shreya Nair",
      "Product Manager, Amazon",
      "Other institutes made me write grammar rules. Elevra’s 1-on-1 drills on thinking in English actually re-wired my speaking.",
    ],
    [
      "Vikas Sharma",
      "Staff Engineer, Microsoft",
      "The Cambridge framework and mock boardroom interviews gave me the confidence I needed. Cleared my L5 interview with zero anxiety.",
    ],
  ];
function Rt({ eyebrow: d, title: E, children: x, center: o = !0 }) {
  return c.jsxs("div", {
    className: `section-head ${o ? "center" : ""}`,
    children: [
      c.jsx("span", { className: "eyebrow", children: d }),
      c.jsx("h2", { children: E }),
      x && c.jsx("p", { children: x }),
    ],
  });
}
function ky() {
  return c.jsx("section", {
    id: "why-elevra",
    className: "hero",
    children: c.jsxs("div", {
      className: "hero-grid",
      children: [
        c.jsxs("div", {
          className: "hero-copy",
          children: [
            c.jsxs("div", {
              className: "pill",
              children: [
                c.jsx("span", {}),
                " Live 1-on-1 & Small Group Cohorts Available",
              ],
            }),
            c.jsxs("h1", {
              children: [
                "Speak with ",
                c.jsx("em", { children: "Poise." }),
                c.jsx("br", {}),
                "Lead with Confidence.",
              ],
            }),
            c.jsx("p", {
              children:
                "Business English and spoken communication mentorship designed to help working professionals stop hesitating, command meetings, and sound effortlessly executive — in just 90 days.",
            }),
            c.jsxs("div", {
              className: "hero-actions",
              children: [
                c.jsx(Fe, {
                  to: "#demo",
                  children: "Book a Free Demo Session",
                }),
                c.jsx(Fe, {
                  to: "#courses",
                  secondary: !0,
                  children: "Explore Programs",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "stats",
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsx("b", { children: "9,300+" }),
                    c.jsx("span", { children: "Instagram Community" }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("b", { children: "160+" }),
                    c.jsx("span", { children: "Cohorts Graduated" }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("b", { children: "98%" }),
                    c.jsx("span", { children: "Speaking Confidence" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "hero-visual",
          children: [
            c.jsxs("div", {
              className: "portrait-card",
              children: [
                c.jsx("img", {
                  src: "/hero_editorial.jpg.jpeg",
                  alt: "Coach Kanika",
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                    borderRadius: "34px",
                  },
                }),
                c.jsxs("div", {
                  className: "coach-badge",
                  children: [
                    c.jsx("span", { children: "CAMBRIDGE CERTIFIED" }),
                    c.jsx("b", { children: "Kanika" }),
                    c.jsx("small", {
                      children: "Executive Communication Coach",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "coach-tags",
                  children: [
                    c.jsx("span", { children: "Corporate English" }),
                    c.jsx("span", { children: "90-Day Mentorship" }),
                    c.jsx("span", { children: "1-on-1 Coaching" }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "review-float",
              children: [
                c.jsx(Ry, { fill: "currentColor", size: 16 }),
                c.jsx("span", {
                  children:
                    "“In 6 weeks, Kanika rebuilt how I articulate under pressure.”",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Fy() {
  return c.jsxs("section", {
    className: "section demo-video-section",
    children: [
      c.jsx(Rt, {
        eyebrow: "See Elevra in Action",
        title: c.jsxs(c.Fragment, {
          children: [
            "A quick look at how ",
            c.jsx("em", { children: "the coaching works." }),
          ],
        }),
        children:
          "See the teaching style, session experience and the kind of practical communication work you can expect inside Elevra.",
      }),
      c.jsx("div", {
        className: "demo-video-card",
        children: c.jsxs("div", {
          className: "demo-video-placeholder",
          children: [
            c.jsx("div", { className: "video-play", children: "▶" }),
            c.jsxs("div", {
              className: "video-overlay-copy",
              children: [
                c.jsx("span", { children: "Elevra Demo Video" }),
                c.jsx("strong", {
                  children: "90 seconds to understand the Elevra experience",
                }),
                c.jsxs("small", {
                  children: [
                    "Add your final demo video here as ",
                    c.jsx("code", { children: "/public/demo-video.mp4" }),
                    ".",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Wy() {
  return c.jsxs("section", {
    className: "trust",
    children: [
      c.jsxs("div", {
        children: [
          c.jsx("strong", { children: "900+" }),
          c.jsx("span", {
            children: "professionals trained from leading MNCs",
          }),
        ],
      }),
      c.jsxs("div", {
        children: [
          c.jsx("strong", {
            children: "Google · Amazon · Deloitte · Microsoft",
          }),
          c.jsx("span", { children: "Learners from leading global teams" }),
        ],
      }),
      c.jsxs("div", {
        children: [
          c.jsx("strong", { children: "Cambridge-aligned pedagogy" }),
          c.jsx("span", {
            children: "70–80% active speaking in every session",
          }),
        ],
      }),
    ],
  });
}
function $y() {
  return c.jsxs("section", {
    id: "features",
    className: "section",
    children: [
      c.jsx(Rt, {
        eyebrow: "The Elevra Difference",
        title: "What You Get With Elevra",
        children:
          "We don’t teach you like school students. We coach you like the corporate leader you are becoming.",
      }),
      c.jsx("div", {
        className: "feature-grid",
        children: Ly.map(([d, E, x]) =>
          c.jsxs(
            "article",
            {
              className: "feature-card",
              children: [
                c.jsx("div", {
                  className: "icon-box",
                  children: c.jsx(x, { size: 21 }),
                }),
                c.jsx("h3", { children: d }),
                c.jsx("p", { children: E }),
              ],
            },
            d,
          ),
        ),
      }),
    ],
  });
}
function Iy() {
  const d = [
      "Freeze on the spot in leadership calls when unexpectedly asked a question",
      "Translate from your native language, causing awkward pauses and fillers",
      "Re-read high-stakes client emails before daring to hit send",
      "Technical skills are strong, but spoken hesitation holds back visibility",
    ],
    E = [
      "Sharp, calm and articulate under high-pressure questioning",
      "Think directly in English with natural rhythm and flow",
      "Draft authoritative executive emails in minutes",
      "Command respect in boardrooms, town halls and global meetings",
    ];
  return c.jsxs("section", {
    className: "section sand",
    children: [
      c.jsx(Rt, {
        eyebrow: "The Transformation",
        title: "From Hesitation to Executive Presence",
        children:
          "The goal isn’t perfect English. It’s calm, clear communication when the stakes are high.",
      }),
      c.jsxs("div", {
        className: "ba-grid",
        children: [
          c.jsxs("article", {
            className: "state-card before",
            children: [
              c.jsxs("span", {
                className: "state-pill",
                children: [c.jsx(qs, { size: 15 }), " Hesitation State"],
              }),
              c.jsx("ul", {
                children: d.map((x) =>
                  c.jsxs("li", { children: [c.jsx(qs, { size: 18 }), x] }, x),
                ),
              }),
            ],
          }),
          c.jsx("div", { className: "arrow-center", children: c.jsx(Ys, {}) }),
          c.jsxs("article", {
            className: "state-card after",
            children: [
              c.jsxs("span", {
                className: "state-pill",
                children: [c.jsx(pa, { size: 15 }), " Elevra State"],
              }),
              c.jsx("ul", {
                children: E.map((x) =>
                  c.jsxs("li", { children: [c.jsx(pa, { size: 18 }), x] }, x),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Py() {
  return c.jsxs("section", {
    id: "journey",
    className: "section",
    children: [
      c.jsx(Rt, {
        eyebrow: "The Transformation Blueprint",
        title: "Your 90-Day Journey",
        children:
          "Three systematic milestones to build instinctive corporate fluency.",
      }),
      c.jsx("div", {
        className: "journey-grid",
        children: Zy.map((d, E) =>
          c.jsxs(
            "article",
            {
              className: "journey-card",
              children: [
                c.jsxs("div", {
                  className: "month",
                  children: [
                    c.jsx("span", { children: d.month }),
                    c.jsxs("b", { children: ["0", E + 1] }),
                  ],
                }),
                c.jsx("h3", { children: d.title }),
                c.jsx("p", { children: d.sub }),
                c.jsx("ul", {
                  children: d.items.map((x) =>
                    c.jsxs("li", { children: [c.jsx(pa, { size: 16 }), x] }, x),
                  ),
                }),
              ],
            },
            d.month,
          ),
        ),
      }),
    ],
  });
}
function lg() {
  const d = [
      "Live classes 4 days/week",
      "75% speaking time per student",
      "Real-time pronunciation & sentence critique",
      "Cambridge-aligned materials",
      "Verified certificate",
    ],
    E = [
      "Curriculum tailored to your job role",
      "Flexible scheduling & rescheduling",
      "WhatsApp review of real office emails & decks",
      "Weekly fluency scorecards",
      "Lifetime vault & alumni access",
    ];
  return c.jsxs("section", {
    id: "courses",
    className: "section sand",
    children: [
      c.jsx(Rt, {
        eyebrow: "Courses & Plans",
        title: "Choose Your Coaching Format",
        children:
          "Both tracks follow the same 90-day transformation arc. The difference is how closely the experience is tailored to you.",
      }),
      c.jsxs("div", {
        className: "pricing-grid",
        children: [
          c.jsxs("article", {
            className: "price-card",
            children: [
              c.jsxs("div", {
                className: "price-head",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("span", { children: "Executive Group Cohort" }),
                      c.jsx("h3", { children: "₹16,500" }),
                    ],
                  }),
                  c.jsx(By, {}),
                ],
              }),
              c.jsx("p", { children: "90 days · maximum 6 learners" }),
              c.jsx("ul", {
                children: d.map((x) =>
                  c.jsxs("li", { children: [c.jsx(pa, {}), x] }, x),
                ),
              }),
              c.jsx(Fe, {
                to: "#demo",
                secondary: !0,
                children: "Book Group Demo",
              }),
            ],
          }),
          c.jsxs("article", {
            className: "price-card featured",
            children: [
              c.jsx("div", {
                className: "recommended",
                children: "Most Recommended",
              }),
              c.jsxs("div", {
                className: "price-head",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("span", { children: "1-on-1 Personal Coaching" }),
                      c.jsx("h3", { children: "₹45,000" }),
                    ],
                  }),
                  c.jsx(wi, {}),
                ],
              }),
              c.jsx("p", {
                children: "90 days · private coaching with Kanika",
              }),
              c.jsx("ul", {
                children: E.map((x) =>
                  c.jsxs("li", { children: [c.jsx(pa, {}), x] }, x),
                ),
              }),
              c.jsx(Fe, { to: "#demo", children: "Book 1-on-1 Demo" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function tg() {
  return c.jsxs("section", {
    id: "results",
    className: "section",
    children: [
      c.jsx(Rt, {
        eyebrow: "Student Results",
        title: "What Senior Professionals Say",
        children:
          "Real outcomes from boardrooms, interviews and high-stakes client conversations.",
      }),
      c.jsx("div", {
        className: "testimonial-grid",
        children: Jy.map(([d, E, x]) =>
          c.jsxs(
            "article",
            {
              className: "testimonial",
              children: [
                c.jsx("div", { className: "stars", children: "★★★★★" }),
                c.jsxs("p", { children: ["“", x, "”"] }),
                c.jsxs("div", {
                  className: "person",
                  children: [
                    c.jsx("div", {
                      children: d
                        .split(" ")
                        .map((o) => o[0])
                        .join(""),
                    }),
                    c.jsxs("span", {
                      children: [
                        c.jsx("b", { children: d }),
                        c.jsx("small", { children: E }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            d,
          ),
        ),
      }),
    ],
  });
}
function eg() {
  const [d, E] = vl.useState(null);
  return c.jsxs("section", {
    id: "faqs",
    className: "section sand",
    children: [
      c.jsx(Rt, {
        eyebrow: "Clarity",
        title: "Frequently Asked Questions",
        children: "Everything you need to know about the learning experience.",
      }),
      c.jsx("div", {
        className: "faq-list",
        children: Ky.map(([x, o], N) =>
          c.jsxs(
            "div",
            {
              className: `faq ${d === N ? "open" : ""}`,
              children: [
                c.jsxs("button", {
                  onClick: () => E(d === N ? null : N),
                  "aria-expanded": d === N,
                  children: [
                    c.jsx("span", { children: x }),
                    c.jsx(vy, { size: 19 }),
                  ],
                }),
                d === N && c.jsx("p", { children: o }),
              ],
            },
            x,
          ),
        ),
      }),
    ],
  });
}
const O0 = [
  [
    "When do you feel the most hesitation?",
    [
      "Sudden questions in meetings",
      "Senior-role executive tone",
      "Interviews & presentations",
      "Emails, reports & client pushback",
    ],
  ],
  [
    "How often do you translate from your mother tongue?",
    [
      "Almost constantly",
      "Only when nervous",
      "I know what to say but miss the professional word",
      "Rarely — I want polish",
    ],
  ],
  [
    "Which learning structure fits your schedule?",
    [
      "1-on-1 VIP mentorship",
      "Small executive cohort (max 6)",
      "Evening/weekend batches",
      "Assess me in a demo first",
    ],
  ],
];
function ag() {
  var M, V;
  const [d, E] = vl.useState(0),
    [x, o] = vl.useState([]),
    N = (X) => {
      const Y = [...x, X];
      (o(Y), E(d < 2 ? d + 1 : 3));
    };
  return c.jsx("section", {
    className: "section quiz-section",
    children: c.jsxs("div", {
      className: "quiz-card",
      children: [
        c.jsxs("div", {
          children: [
            c.jsx("span", {
              className: "eyebrow",
              children: "30-Second Speaking Quiz",
            }),
            c.jsx("h2", {
              children: "What kind of support will move you fastest?",
            }),
            c.jsx("p", {
              children:
                "Answer three quick questions and get a program recommendation.",
            }),
          ],
        }),
        d < 3
          ? c.jsxs("div", {
              className: "quiz-question",
              children: [
                c.jsx("div", {
                  className: "quiz-progress",
                  children: c.jsx("span", {
                    style: { width: `${((d + 1) / 3) * 100}%` },
                  }),
                }),
                c.jsxs("small", { children: ["Question ", d + 1, " of 3"] }),
                c.jsx("h3", { children: O0[d][0] }),
                c.jsx("div", {
                  className: "quiz-options",
                  children: O0[d][1].map((X) =>
                    c.jsxs(
                      "button",
                      {
                        onClick: () => N(X),
                        children: [X, c.jsx(Ys, { size: 16 })],
                      },
                      X,
                    ),
                  ),
                }),
              ],
            })
          : c.jsxs("div", {
              className: "quiz-result",
              children: [
                c.jsx(wi, {}),
                c.jsx("h3", {
                  children:
                    ((M = x[2]) != null && M.includes("1-on-1")) ||
                    ((V = x[0]) != null && V.includes("Senior"))
                      ? "1-on-1 VIP Mentorship"
                      : "Executive Group Cohort",
                }),
                c.jsx("p", {
                  children:
                    "Your answers suggest this structure will give you the strongest mix of accountability, practice and flexibility.",
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx(Fe, { to: "#demo", children: "Book My Demo" }),
                    c.jsx("button", {
                      className: "text-btn",
                      onClick: () => {
                        (E(0), o([]));
                      },
                      children: "Retake Quiz",
                    }),
                  ],
                }),
              ],
            }),
      ],
    }),
  });
}
function ug() {
  return c.jsx("section", {
    className: "section comparison-section",
    children: c.jsxs("div", {
      className: "comparison",
      children: [
        c.jsx(Rt, {
          eyebrow: "Program Comparison",
          title: "Which track is right for you?",
          children:
            "Whether you learn best in collaborative cohorts or require bespoke executive focus.",
        }),
        c.jsxs("div", {
          className: "compare-grid",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("span", { children: "Choose Group" }),
                c.jsx("h3", { children: "You learn best with peer energy." }),
                c.jsx("p", {
                  children:
                    "Great for professionals who want structured group routines, evening batches, and collaborative meeting simulations.",
                }),
              ],
            }),
            c.jsxs("div", {
              children: [
                c.jsx("span", { children: "Choose 1-on-1" }),
                c.jsx("h3", {
                  children:
                    "You need your communication tailored to your work.",
                }),
                c.jsx("p", {
                  children:
                    "Best for confidential leadership presentations, flexible calendars, and personalized pronunciation and tone coaching.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function ng() {
  return c.jsxs("section", {
    id: "about",
    className: "section about-grid",
    children: [
      c.jsxs("div", {
        className: "about-portrait",
        children: [
          c.jsx("img", {
            src: "/kanika_portrait.jpg.jpeg",
            alt: "Coach Kanika",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              borderRadius: "28px",
            },
          }),
          c.jsx("span", { children: "Cambridge Certified Coach" }),
        ],
      }),
      c.jsxs("div", {
        children: [
          c.jsx("span", {
            className: "eyebrow",
            children: "The Coach & Philosophy",
          }),
          c.jsx("h2", {
            children: "Stop studying English. Start using it under pressure.",
          }),
          c.jsx("p", {
            children:
              "Elevra combines Cambridge-aligned pedagogy with practical executive communication coaching for ambitious professionals.",
          }),
          c.jsx("p", {
            children:
              "Kanika’s approach is built around real high-stakes work scenarios: boardroom articulation, spontaneous Q&As, executive presentations, client negotiations, and concise written updates.",
          }),
          c.jsx("p", {
            children:
              "Every session prioritizes active speaking time (70-80%), micro-corrections, and realistic roleplay simulations so progress is instantly visible when the pressure arrives.",
          }),
          c.jsxs("div", {
            className: "signature",
            children: [
              "Kanika ",
              c.jsx("small", {
                children: "English With Kanika · Founder & Lead Coach",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ig() {
  const d = [
    [
      "Meeting presence",
      "Speak with composure without mentally translating or rehearsing every sentence.",
    ],
    [
      "Executive tone",
      "Sound concise, structured, warm, and authoritative across meetings.",
    ],
    [
      "Spontaneous fluency",
      "Handle unexpected questions, follow-ups, and pushback without freezing.",
    ],
    [
      "Career visibility",
      "Present ideas with persuasive confidence to gain leadership buy-in.",
    ],
  ];
  return c.jsx("div", {
    className: "outcomes-wrap sand",
    children: c.jsxs("div", {
      className: "section",
      children: [
        c.jsx(Rt, {
          eyebrow: "Outcome Snapshot",
          title: "What changes after 90 days",
          children:
            "Clear, measurable transformation across your everyday professional interactions.",
        }),
        c.jsx("div", {
          className: "outcomes",
          children: d.map(([E, x]) =>
            c.jsxs(
              "article",
              {
                children: [
                  c.jsx(wi, {}),
                  c.jsx("h3", { children: E }),
                  c.jsx("p", { children: x }),
                ],
              },
              E,
            ),
          ),
        }),
      ],
    }),
  });
}
function cg() {
  const d = [
    "Boardroom phrases for entering, steering, and redirecting high-stakes conversations",
    "Executive email templates for leadership updates, escalations, and proposals",
    'Filler-word reset drills to permanently drop "um", "uh", and hesitation habits',
    "Vocabulary & framing techniques for constructive disagreement and pushback",
    "A practical 7-day speaking confidence reset roadmap",
  ];
  return c.jsxs("section", {
    id: "guide",
    className: "section",
    children: [
      c.jsx(Rt, {
        eyebrow: "Free Resource",
        title: c.jsxs(c.Fragment, {
          children: [
            "Your pocket guide to ",
            c.jsx("em", { children: "executive English." }),
          ],
        }),
        children:
          "A practical companion for sounding clearer, more concise, and commanding respect at work.",
      }),
      c.jsxs("div", {
        className: "guide-card",
        children: [
          c.jsxs("div", {
            className: "guide-cover",
            children: [
              c.jsx("span", { children: "elevr.a" }),
              c.jsxs("h2", {
                children: [
                  "The Executive",
                  c.jsx("br", {}),
                  "Communication Guide",
                ],
              }),
              c.jsx("small", {
                children: "English With Kanika · 45-Page Edition",
              }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("span", {
                className: "eyebrow",
                children: "Inside the guide",
              }),
              c.jsx("h2", { children: "Small changes. Big difference." }),
              c.jsx("ul", {
                children: d.map((E) =>
                  c.jsxs("li", { children: [c.jsx(pa, {}), E] }, E),
                ),
              }),
              c.jsxs("a", {
                className: "btn",
                href: "#demo",
                onClick: (E) => {
                  E.preventDefault();
                  const x = document.getElementById("demo");
                  if (x) {
                    const o =
                      x.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: o, behavior: "smooth" });
                  }
                },
                children: [
                  c.jsx(Y0, { size: 17 }),
                  " Download Companion Guide",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function fg() {
  const [d, E] = vl.useState(!1),
    x = (N) => {
      (N.preventDefault(), E(!0));
    },
    o = [
      "Live 1-on-1 on Google Meet with Coach Kanika",
      "Real-time personalised feedback on your pronunciation & tone",
      "A diagnosis of your speaking hesitation & mental translation blocks",
      "A tailored 90-day executive communication roadmap",
    ];
  return c.jsxs("section", {
    id: "demo",
    className: "section sand",
    children: [
      c.jsx(Rt, {
        eyebrow: "Free 1-on-1 Demo",
        title: c.jsxs(c.Fragment, {
          children: [
            "Reserve your live ",
            c.jsx("em", { children: "coaching demo." }),
          ],
        }),
        children:
          "30 minutes. Real feedback. No sales pressure, no boring webinars.",
      }),
      c.jsxs("div", {
        className: "demo-wrap",
        children: [
          c.jsxs("div", {
            className: "demo-info",
            children: [
              c.jsx("span", {
                className: "eyebrow",
                children: "What happens inside",
              }),
              c.jsx("h2", {
                children: "Leave with clarity, not another sales pitch.",
              }),
              o.map((N) =>
                c.jsxs(
                  "div",
                  { className: "demo-point", children: [c.jsx(pa, {}), N] },
                  N,
                ),
              ),
              c.jsxs("div", {
                className: "privacy",
                children: [
                  c.jsx(Cy, {}),
                  " 100% Confidential. No spam or aggressive marketing calls.",
                ],
              }),
            ],
          }),
          d
            ? c.jsxs("div", {
                className: "success-card",
                children: [
                  c.jsx(wi, {}),
                  c.jsx("h2", { children: "Spot Reserved!" }),
                  c.jsx("p", {
                    children:
                      "Your demo request has been received. Coach Kanika’s team will confirm your Google Meet slot shortly on WhatsApp & email.",
                  }),
                  c.jsx("button", {
                    className: "btn",
                    type: "button",
                    onClick: () => E(!1),
                    children: "Book Another Slot",
                  }),
                ],
              })
            : c.jsxs("form", {
                className: "demo-form",
                onSubmit: x,
                children: [
                  c.jsxs("label", {
                    children: [
                      "Full Name",
                      c.jsx("input", {
                        required: !0,
                        placeholder: "Your name",
                      }),
                    ],
                  }),
                  c.jsxs("label", {
                    children: [
                      "Profession / Role",
                      c.jsx("input", {
                        required: !0,
                        placeholder: "e.g. Engineering Manager, Consultant",
                      }),
                    ],
                  }),
                  c.jsxs("label", {
                    children: [
                      "Email",
                      c.jsx("input", {
                        required: !0,
                        type: "email",
                        placeholder: "you@example.com",
                      }),
                    ],
                  }),
                  c.jsxs("label", {
                    children: [
                      "WhatsApp Number",
                      c.jsx("input", {
                        required: !0,
                        placeholder: "+91 87002 76743",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "form-row",
                    children: [
                      c.jsxs("label", {
                        children: [
                          "Format",
                          c.jsxs("select", {
                            children: [
                              c.jsx("option", {
                                children: "1-on-1 VIP Mentorship",
                              }),
                              c.jsx("option", {
                                children: "Executive Group Cohort",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("label", {
                        children: [
                          "Preferred Slot",
                          c.jsxs("select", {
                            children: [
                              c.jsx("option", {
                                children: "Morning (9:00 AM – 12:00 PM)",
                              }),
                              c.jsx("option", {
                                children: "Evening (6:00 PM – 9:00 PM)",
                              }),
                              c.jsx("option", { children: "Weekend Batch" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("label", {
                    children: [
                      "Primary Goal",
                      c.jsxs("select", {
                        children: [
                          c.jsx("option", {
                            children: "Freezing under pressure in meetings",
                          }),
                          c.jsx("option", {
                            children: "Executive tone and leadership presence",
                          }),
                          c.jsx("option", {
                            children: "Client presentations & interviews",
                          }),
                          c.jsx("option", {
                            children: "Concise email writing & updates",
                          }),
                          c.jsx("option", {
                            children: "Overcoming mother-tongue translation",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("button", {
                    className: "btn",
                    type: "submit",
                    children: "Reserve My Demo Spot",
                  }),
                ],
              }),
        ],
      }),
      c.jsx(Fy, {}),
    ],
  });
}
function sg() {
  return c.jsxs("section", {
    id: "contact",
    className: "section",
    children: [
      c.jsx(Rt, {
        eyebrow: "Get In Touch",
        title: c.jsxs(c.Fragment, {
          children: [
            "Let’s make your next conversation ",
            c.jsx("em", { children: "easier." }),
          ],
        }),
        children:
          "Have questions about the cohorts, corporate billing, or the right format? Connect with us directly.",
      }),
      c.jsxs("div", {
        className: "contact-grid",
        children: [
          c.jsxs("div", {
            children: [
              c.jsx("span", {
                className: "eyebrow",
                children: "Reach Kanika & Team",
              }),
              c.jsx("h2", { children: "Tell us what you’re working towards." }),
              c.jsx("p", {
                children:
                  "We’ll help you choose between the cohort and 1-on-1 experience, evaluate your fluency profile, and get you onboarded smoothly.",
              }),
              c.jsxs("div", {
                className: "contact-info-list",
                children: [
                  c.jsxs("p", {
                    children: [
                      c.jsx("strong", { children: "Direct Helpline:" }),
                      " Call or WhatsApp +91 87002 76743 for fast enrollment assistance.",
                    ],
                  }),
                  c.jsxs("p", {
                    children: [
                      c.jsx("strong", { children: "Official Inquiries:" }),
                      " Email kanika@elevra.in for institutional and corporate programs.",
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "contact-card",
            children: [
              c.jsxs("a", {
                href: "tel:+918700276743",
                children: [
                  c.jsx(Hs, {}),
                  c.jsxs("span", {
                    children: [
                      c.jsx("small", { children: "Phone / Call" }),
                      "+91 87002 76743",
                    ],
                  }),
                ],
              }),
              c.jsxs("a", {
                href: "mailto:kanika@elevra.in",
                children: [
                  c.jsx(Us, {}),
                  c.jsxs("span", {
                    children: [
                      c.jsx("small", { children: "Official Email" }),
                      "kanika@elevra.in",
                    ],
                  }),
                ],
              }),
              c.jsxs("a", {
                href: "https://wa.me/918700276743",
                target: "_blank",
                rel: "noreferrer",
                children: [
                  c.jsx(Gs, {}),
                  c.jsxs("span", {
                    children: [
                      c.jsx("small", { children: "WhatsApp Direct" }),
                      "+91 87002 76743 (Chat with us)",
                    ],
                  }),
                ],
              }),
              c.jsxs("a", {
                href: "https://instagram.com/elevr.a",
                target: "_blank",
                rel: "noreferrer",
                children: [
                  c.jsx(G0, {}),
                  c.jsxs("span", {
                    children: [
                      c.jsx("small", { children: "Instagram Community" }),
                      "@elevr.a",
                    ],
                  }),
                ],
              }),
              c.jsx(Fe, { to: "#demo", children: "Book a Free Demo" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function og() {
  return c.jsx("section", {
    className: "final-cta",
    children: c.jsxs("div", {
      children: [
        c.jsx("span", { className: "eyebrow", children: "Ready when you are" }),
        c.jsx("h2", { children: "Your voice should match your expertise." }),
        c.jsx("p", {
          children:
            "Book a live 1-on-1 demo and leave with a clear 90-day executive communication roadmap.",
        }),
        c.jsx(Fe, { to: "#demo", children: "Reserve My Demo Spot" }),
      ],
    }),
  });
}
function rg() {
  return c.jsxs("main", {
    children: [
      c.jsx(ky, {}),
      c.jsx(Wy, {}),
      c.jsx($y, {}),
      c.jsx(Iy, {}),
      c.jsx(Py, {}),
      c.jsx(lg, {}),
      c.jsx(ug, {}),
      c.jsx(ag, {}),
      c.jsx(ng, {}),
      c.jsx(tg, {}),
      c.jsx(ig, {}),
      c.jsx(cg, {}),
      c.jsx(eg, {}),
      c.jsx(fg, {}),
      c.jsx(sg, {}),
      c.jsx(og, {}),
    ],
  });
}
function dg() {
  return c.jsx(wy, { children: c.jsx(rg, {}) });
}
k1.createRoot(document.getElementById("root")).render(
  c.jsx(C0.StrictMode, { children: c.jsx(iy, { children: c.jsx(dg, {}) }) }),
);
