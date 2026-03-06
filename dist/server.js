var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    "use strict";
    !(function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    })(exports, (function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  }
});

// node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/dayjs/plugin/utc.js"(exports, module) {
    "use strict";
    !(function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    })(exports, (function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var r = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), r.call(this, t2);
        };
        var o = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else o.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = (function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          })(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2;
          if (0 === u2) return this.utc(f2);
          var r2 = this.clone();
          if (f2) return r2.$offset = u2, r2.$u = false, r2;
          var o2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (r2 = this.local().add(u2 + o2, t)).$offset = u2, r2.$x.$localOffset = o2, r2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    }));
  }
});

// src/env.ts
import "dotenv/config";
import { z } from "zod";
var envSchema = z.object({
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  OPENAI_API_KEY: z.string()
});
var parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) {
  throw new Error(
    `Invalid environment variables: ${z.prettifyError(parsedEnv.error)}`
  );
}
var env = parsedEnv.data;

// src/app.ts
import "dotenv/config";
import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";

// src/docs/swagger.ts
import fastifySwagger from "@fastify/swagger";
import fastifyApiReference from "@scalar/fastify-api-reference";
import { jsonSchemaTransform } from "fastify-type-provider-zod";
async function generateDocumentation(app2) {
  await app2.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Fit AI API",
        description: "API documentation for Fit AI",
        version: "1.0.0"
      },
      servers: [
        {
          url: "http://localhost:8080"
        }
      ]
    },
    transform: jsonSchemaTransform
  });
  app2.withTypeProvider().route({
    method: "GET",
    url: "/swagger.json",
    schema: {
      hide: true
    },
    handler: async () => {
      return app2.swagger();
    }
  });
  await app2.register(fastifyApiReference, {
    routePrefix: "/docs",
    configuration: {
      sources: [
        {
          title: "Fit AI API",
          slug: "fit-ai-api",
          url: "/swagger.json"
        },
        {
          title: "Auth API",
          slug: "auth-api",
          url: "/api/auth/open-api/generate-schema"
        }
      ]
    }
  });
}

// src/lib/auth.ts
import { PrismaPg } from "@prisma/adapter-pg";

// src/generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// src/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.4.2",
  "engineVersion": "94a226be1cf2967af2541cca5529f0f7ba866919",
  "activeProvider": "postgresql",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../src/generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nenum WeekDay {\n  SUNDAY\n  MONDAY\n  TUESDAY\n  WEDNESDAY\n  THURSDAY\n  FRIDAY\n  SATURDAY\n}\n\nmodel User {\n  id            String        @id\n  name          String\n  email         String        @unique\n  emailVerified Boolean       @default(false)\n  image         String?\n  createdAt     DateTime      @default(now())\n  updatedAt     DateTime      @updatedAt\n  workoutPlans  WorkoutPlan[]\n  sessions      Session[]\n  accounts      Account[]\n\n  @@map("user")\n}\n\nmodel WorkoutPlan {\n  id          String       @id @default(uuid())\n  name        String\n  isActive    Boolean      @default(true)\n  createdAt   DateTime     @default(now())\n  updatedAt   DateTime     @updatedAt\n  userId      String\n  user        User         @relation(fields: [userId], references: [id], onDelete: Cascade)\n  workoutDays WorkoutDay[]\n}\n\nmodel WorkoutDay {\n  id                         String            @id @default(uuid())\n  isRest                     Boolean           @default(false)\n  weekDay                    WeekDay\n  estimatedDurationInSeconds Int\n  coverImageUrl              String?\n  createdAt                  DateTime          @default(now())\n  updatedAt                  DateTime          @updatedAt\n  workoutPlanId              String\n  workoutPlan                WorkoutPlan       @relation(fields: [workoutPlanId], references: [id], onDelete: Cascade)\n  workoutExercises           WorkoutExercise[]\n  sessions                   WorkoutSession[]\n}\n\nmodel WorkoutExercise {\n  id                String     @id @default(uuid())\n  order             Int\n  name              String\n  sets              Int\n  reps              Int\n  restTimeInSeconds Int\n  createdAt         DateTime   @default(now())\n  updatedAt         DateTime   @updatedAt\n  workoutDayId      String\n  workoutDay        WorkoutDay @relation(fields: [workoutDayId], references: [id], onDelete: Cascade)\n}\n\nmodel WorkoutSession {\n  id           String     @id @default(uuid())\n  workoutDayId String\n  StartedAt    DateTime   @db.Timestamptz()\n  CompletedAt  DateTime?  @db.Timestamptz()\n  CreatedAt    DateTime   @default(now())\n  UpdatedAt    DateTime   @updatedAt\n  workoutDay   WorkoutDay @relation(fields: [workoutDayId], references: [id], onDelete: Cascade)\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workoutPlans","kind":"object","type":"WorkoutPlan","relationName":"UserToWorkoutPlan"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"}],"dbName":"user"},"WorkoutPlan":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"UserToWorkoutPlan"},{"name":"workoutDays","kind":"object","type":"WorkoutDay","relationName":"WorkoutDayToWorkoutPlan"}],"dbName":null},"WorkoutDay":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"isRest","kind":"scalar","type":"Boolean"},{"name":"weekDay","kind":"enum","type":"WeekDay"},{"name":"estimatedDurationInSeconds","kind":"scalar","type":"Int"},{"name":"coverImageUrl","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workoutPlanId","kind":"scalar","type":"String"},{"name":"workoutPlan","kind":"object","type":"WorkoutPlan","relationName":"WorkoutDayToWorkoutPlan"},{"name":"workoutExercises","kind":"object","type":"WorkoutExercise","relationName":"WorkoutDayToWorkoutExercise"},{"name":"sessions","kind":"object","type":"WorkoutSession","relationName":"WorkoutDayToWorkoutSession"}],"dbName":null},"WorkoutExercise":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"order","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"sets","kind":"scalar","type":"Int"},{"name":"reps","kind":"scalar","type":"Int"},{"name":"restTimeInSeconds","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"workoutDayId","kind":"scalar","type":"String"},{"name":"workoutDay","kind":"object","type":"WorkoutDay","relationName":"WorkoutDayToWorkoutExercise"}],"dbName":null},"WorkoutSession":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"workoutDayId","kind":"scalar","type":"String"},{"name":"StartedAt","kind":"scalar","type":"DateTime"},{"name":"CompletedAt","kind":"scalar","type":"DateTime"},{"name":"CreatedAt","kind":"scalar","type":"DateTime"},{"name":"UpdatedAt","kind":"scalar","type":"DateTime"},{"name":"workoutDay","kind":"object","type":"WorkoutDay","relationName":"WorkoutDayToWorkoutSession"}],"dbName":null},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","user","workoutPlan","workoutDay","workoutExercises","sessions","_count","workoutDays","workoutPlans","accounts","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_min","_max","User.groupBy","User.aggregate","WorkoutPlan.findUnique","WorkoutPlan.findUniqueOrThrow","WorkoutPlan.findFirst","WorkoutPlan.findFirstOrThrow","WorkoutPlan.findMany","WorkoutPlan.createOne","WorkoutPlan.createMany","WorkoutPlan.createManyAndReturn","WorkoutPlan.updateOne","WorkoutPlan.updateMany","WorkoutPlan.updateManyAndReturn","WorkoutPlan.upsertOne","WorkoutPlan.deleteOne","WorkoutPlan.deleteMany","WorkoutPlan.groupBy","WorkoutPlan.aggregate","WorkoutDay.findUnique","WorkoutDay.findUniqueOrThrow","WorkoutDay.findFirst","WorkoutDay.findFirstOrThrow","WorkoutDay.findMany","WorkoutDay.createOne","WorkoutDay.createMany","WorkoutDay.createManyAndReturn","WorkoutDay.updateOne","WorkoutDay.updateMany","WorkoutDay.updateManyAndReturn","WorkoutDay.upsertOne","WorkoutDay.deleteOne","WorkoutDay.deleteMany","_avg","_sum","WorkoutDay.groupBy","WorkoutDay.aggregate","WorkoutExercise.findUnique","WorkoutExercise.findUniqueOrThrow","WorkoutExercise.findFirst","WorkoutExercise.findFirstOrThrow","WorkoutExercise.findMany","WorkoutExercise.createOne","WorkoutExercise.createMany","WorkoutExercise.createManyAndReturn","WorkoutExercise.updateOne","WorkoutExercise.updateMany","WorkoutExercise.updateManyAndReturn","WorkoutExercise.upsertOne","WorkoutExercise.deleteOne","WorkoutExercise.deleteMany","WorkoutExercise.groupBy","WorkoutExercise.aggregate","WorkoutSession.findUnique","WorkoutSession.findUniqueOrThrow","WorkoutSession.findFirst","WorkoutSession.findFirstOrThrow","WorkoutSession.findMany","WorkoutSession.createOne","WorkoutSession.createMany","WorkoutSession.createManyAndReturn","WorkoutSession.updateOne","WorkoutSession.updateMany","WorkoutSession.updateManyAndReturn","WorkoutSession.upsertOne","WorkoutSession.deleteOne","WorkoutSession.deleteMany","WorkoutSession.groupBy","WorkoutSession.aggregate","Session.findUnique","Session.findUniqueOrThrow","Session.findFirst","Session.findFirstOrThrow","Session.findMany","Session.createOne","Session.createMany","Session.createManyAndReturn","Session.updateOne","Session.updateMany","Session.updateManyAndReturn","Session.upsertOne","Session.deleteOne","Session.deleteMany","Session.groupBy","Session.aggregate","Account.findUnique","Account.findUniqueOrThrow","Account.findFirst","Account.findFirstOrThrow","Account.findMany","Account.createOne","Account.createMany","Account.createManyAndReturn","Account.updateOne","Account.updateMany","Account.updateManyAndReturn","Account.upsertOne","Account.deleteOne","Account.deleteMany","Account.groupBy","Account.aggregate","Verification.findUnique","Verification.findUniqueOrThrow","Verification.findFirst","Verification.findFirstOrThrow","Verification.findMany","Verification.createOne","Verification.createMany","Verification.createManyAndReturn","Verification.updateOne","Verification.updateMany","Verification.updateManyAndReturn","Verification.upsertOne","Verification.deleteOne","Verification.deleteMany","Verification.groupBy","Verification.aggregate","AND","OR","NOT","id","identifier","value","expiresAt","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","accountId","providerId","userId","accessToken","refreshToken","idToken","accessTokenExpiresAt","refreshTokenExpiresAt","scope","password","token","ipAddress","userAgent","workoutDayId","StartedAt","CompletedAt","CreatedAt","UpdatedAt","order","name","sets","reps","restTimeInSeconds","isRest","WeekDay","weekDay","estimatedDurationInSeconds","coverImageUrl","workoutPlanId","isActive","email","emailVerified","image","every","some","none","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "vANIgAENBwAA-wEAIAoAAPoBACALAAD8AQAglAEAAPcBADCVAQAAIgAQlgEAAPcBADCXAQEAAAABmwFAAN8BACGcAUAA3wEAIbsBAQDeAQAhxgEBAAAAAccBIAD4AQAhyAEBAPkBACEBAAAAAQAgCwMAAP8BACAJAACLAgAglAEAAIoCADCVAQAAAwAQlgEAAIoCADCXAQEA3gEAIZsBQADfAQAhnAFAAN8BACGqAQEA3gEAIbsBAQDeAQAhxQEgAPgBACECAwAAkwMAIAkAAJgDACALAwAA_wEAIAkAAIsCACCUAQAAigIAMJUBAAADABCWAQAAigIAMJcBAQAAAAGbAUAA3wEAIZwBQADfAQAhqgEBAN4BACG7AQEA3gEAIcUBIAD4AQAhAwAAAAMAIAEAAAQAMAIAAAUAIA4EAACHAgAgBgAAiAIAIAcAAIkCACCUAQAAhQIAMJUBAAAHABCWAQAAhQIAMJcBAQDeAQAhmwFAAN8BACGcAUAA3wEAIb8BIAD4AQAhwQEAAIYCwQEiwgECAIQCACHDAQEA-QEAIcQBAQDeAQAhBAQAAJUDACAGAACWAwAgBwAAlwMAIMMBAACRAgAgDgQAAIcCACAGAACIAgAgBwAAiQIAIJQBAACFAgAwlQEAAAcAEJYBAACFAgAwlwEBAAAAAZsBQADfAQAhnAFAAN8BACG_ASAA-AEAIcEBAACGAsEBIsIBAgCEAgAhwwEBAPkBACHEAQEA3gEAIQMAAAAHACABAAAIADACAAAJACANBQAAggIAIJQBAACDAgAwlQEAAAsAEJYBAACDAgAwlwEBAN4BACGbAUAA3wEAIZwBQADfAQAhtQEBAN4BACG6AQIAhAIAIbsBAQDeAQAhvAECAIQCACG9AQIAhAIAIb4BAgCEAgAhAQUAAJQDACANBQAAggIAIJQBAACDAgAwlQEAAAsAEJYBAACDAgAwlwEBAAAAAZsBQADfAQAhnAFAAN8BACG1AQEA3gEAIboBAgCEAgAhuwEBAN4BACG8AQIAhAIAIb0BAgCEAgAhvgECAIQCACEDAAAACwAgAQAADAAwAgAADQAgCgUAAIICACCUAQAAgQIAMJUBAAAPABCWAQAAgQIAMJcBAQDeAQAhtQEBAN4BACG2AUAA3wEAIbcBQAD-AQAhuAFAAN8BACG5AUAA3wEAIQIFAACUAwAgtwEAAJECACAKBQAAggIAIJQBAACBAgAwlQEAAA8AEJYBAACBAgAwlwEBAAAAAbUBAQDeAQAhtgFAAN8BACG3AUAA_gEAIbgBQADfAQAhuQFAAN8BACEDAAAADwAgAQAAEAAwAgAAEQAgAQAAAAsAIAEAAAAPACABAAAABwAgDAMAAP8BACCUAQAAgAIAMJUBAAAWABCWAQAAgAIAMJcBAQDeAQAhmgFAAN8BACGbAUAA3wEAIZwBQADfAQAhqgEBAN4BACGyAQEA3gEAIbMBAQD5AQAhtAEBAPkBACEDAwAAkwMAILMBAACRAgAgtAEAAJECACAMAwAA_wEAIJQBAACAAgAwlQEAABYAEJYBAACAAgAwlwEBAAAAAZoBQADfAQAhmwFAAN8BACGcAUAA3wEAIaoBAQDeAQAhsgEBAAAAAbMBAQD5AQAhtAEBAPkBACEDAAAAFgAgAQAAFwAwAgAAGAAgEQMAAP8BACCUAQAA_QEAMJUBAAAaABCWAQAA_QEAMJcBAQDeAQAhmwFAAN8BACGcAUAA3wEAIagBAQDeAQAhqQEBAN4BACGqAQEA3gEAIasBAQD5AQAhrAEBAPkBACGtAQEA-QEAIa4BQAD-AQAhrwFAAP4BACGwAQEA-QEAIbEBAQD5AQAhCAMAAJMDACCrAQAAkQIAIKwBAACRAgAgrQEAAJECACCuAQAAkQIAIK8BAACRAgAgsAEAAJECACCxAQAAkQIAIBEDAAD_AQAglAEAAP0BADCVAQAAGgAQlgEAAP0BADCXAQEAAAABmwFAAN8BACGcAUAA3wEAIagBAQDeAQAhqQEBAN4BACGqAQEA3gEAIasBAQD5AQAhrAEBAPkBACGtAQEA-QEAIa4BQAD-AQAhrwFAAP4BACGwAQEA-QEAIbEBAQD5AQAhAwAAABoAIAEAABsAMAIAABwAIAEAAAADACABAAAAFgAgAQAAABoAIAEAAAABACANBwAA-wEAIAoAAPoBACALAAD8AQAglAEAAPcBADCVAQAAIgAQlgEAAPcBADCXAQEA3gEAIZsBQADfAQAhnAFAAN8BACG7AQEA3gEAIcYBAQDeAQAhxwEgAPgBACHIAQEA-QEAIQQHAACRAwAgCgAAkAMAIAsAAJIDACDIAQAAkQIAIAMAAAAiACABAAAjADACAAABACADAAAAIgAgAQAAIwAwAgAAAQAgAwAAACIAIAEAACMAMAIAAAEAIAoHAACOAwAgCgAAjQMAIAsAAI8DACCXAQEAAAABmwFAAAAAAZwBQAAAAAG7AQEAAAABxgEBAAAAAccBIAAAAAHIAQEAAAABAREAACcAIAeXAQEAAAABmwFAAAAAAZwBQAAAAAG7AQEAAAABxgEBAAAAAccBIAAAAAHIAQEAAAABAREAACkAMAERAAApADAKBwAA5wIAIAoAAOYCACALAADoAgAglwEBAI8CACGbAUAAkAIAIZwBQACQAgAhuwEBAI8CACHGAQEAjwIAIccBIACwAgAhyAEBAJUCACECAAAAAQAgEQAALAAgB5cBAQCPAgAhmwFAAJACACGcAUAAkAIAIbsBAQCPAgAhxgEBAI8CACHHASAAsAIAIcgBAQCVAgAhAgAAACIAIBEAAC4AIAIAAAAiACARAAAuACADAAAAAQAgGAAAJwAgGQAALAAgAQAAAAEAIAEAAAAiACAECAAA4wIAIB4AAOUCACAfAADkAgAgyAEAAJECACAKlAEAAPYBADCVAQAANQAQlgEAAPYBADCXAQEA1gEAIZsBQADXAQAhnAFAANcBACG7AQEA1gEAIcYBAQDWAQAhxwEgAO8BACHIAQEA4QEAIQMAAAAiACABAAA0ADAdAAA1ACADAAAAIgAgAQAAIwAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAIAwAA4QIAIAkAAOICACCXAQEAAAABmwFAAAAAAZwBQAAAAAGqAQEAAAABuwEBAAAAAcUBIAAAAAEBEQAAPQAgBpcBAQAAAAGbAUAAAAABnAFAAAAAAaoBAQAAAAG7AQEAAAABxQEgAAAAAQERAAA_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_ACAGlwEBAAAAAbUBAQAAAAG2AUAAAAABtwFAAAAAAbgBQAAAAAG5AUAAAAABAREAAIEBADABEQAAgQEAMAcFAAChAgAglwEBAI8CACG1AQEAjwIAIbYBQACQAgAhtwFAAJYCACG4AUAAkAIAIbkBQACQAgAhAgAAABEAIBEAAIQBACAGlwEBAI8CACG1AQEAjwIAIbYBQACQAgAhtwFAAJYCACG4AUAAkAIAIbkBQACQAgAhAgAAAA8AIBEAAIYBACACAAAADwAgEQAAhgEAIAMAAAARACAYAAB_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_AQAQlgEAAN0BADCXAQEA3gEAIZgBAQDeAQAhmQEBAN4BACGaAUAA3wEAIZsBQADfAQAhnAFAAN8BACEAAwAAAL8BACABAADAAQAwAgAAvAEAIAMAAAC_AQAgAQAAwAEAMAIAALwBACADAAAAvwEAIAEAAMABADACAAC8AQAgBpcBAQAAAAGYAQEAAAABmQEBAAAAAZoBQAAAAAGbAUAAAAABnAFAAAAAAQERAADEAQAgBpcBAQAAAAGYAQEAAAABmQEBAAAAAZoBQAAAAAGbAUAAAAABnAFAAAAAAQERAADGAQAwAREAAMYBADAGlwEBAI8CACGYAQEAjwIAIZkBAQCPAgAhmgFAAJACACGbAUAAkAIAIZwBQACQAgAhAgAAALwBACARAADJAQAgBpcBAQCPAgAhmAEBAI8CACGZAQEAjwIAIZoBQACQAgAhmwFAAJACACGcAUAAkAIAIQIAAAC_AQAgEQAAywEAIAIAAAC_AQAgEQAAywEAIAMAAAC8AQAgGAAAxAEAIBkAAMkBACABAAAAvAEAIAEAAAC_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_ASAA7wEAIcEBAADwAcEBIsIBAgDrAQAhwwEBAOEBACHEAQEA1gEAIQUIAADZAQAgHgAA9AEAIB8AAPQBACCdASAAAAABpAEgAPMBACEHCAAA2QEAIB4AAPIBACAfAADyAQAgnQEAAADBAQKeAQAAAMEBCJ8BAAAAwQEIpAEAAPEBwQEiBwgAANkBACAeAADyAQAgHwAA8gEAIJ0BAAAAwQECngEAAADBAQifAQAAAMEBCKQBAADxAcEBIgSdAQAAAMEBAp4BAAAAwQEInwEAAADBAQikAQAA8gHBASIFCAAA2QEAIB4AAPQBACAfAAD0AQAgnQEgAAAAAaQBIADzAQAhAp0BIAAAAAGkASAA9AEAIQmUAQAA9QEAMJUBAABLABCWAQAA9QEAMJcBAQDWAQAhmwFAANcBACGcAUAA1wEAIaoBAQDWAQAhuwEBANYBACHFASAA7wEAIQqUAQAA9gEAMJUBAAA1ABCWAQAA9gEAMJcBAQDWAQAhmwFAANcBACGcAUAA1wEAIbsBAQDWAQAhxgEBANYBACHHASAA7wEAIcgBAQDhAQAhDQcAAPsBACAKAAD6AQAgCwAA_AEAIJQBAAD3AQAwlQEAACIAEJYBAAD3AQAwlwEBAN4BACGbAUAA3wEAIZwBQADfAQAhuwEBAN4BACHGAQEA3gEAIccBIAD4AQAhyAEBAPkBACECnQEgAAAAAaQBIAD0AQAhC50BAQAAAAGeAQEAAAAFnwEBAAAABaABAQAAAAGhAQEAAAABogEBAAAAAaMBAQAAAAGkAQEA5wEAIaUBAQAAAAGmAQEAAAABpwEBAAAAAQPJAQAAAwAgygEAAAMAIMsBAAADACADyQEAABYAIMoBAAAWACDLAQAAFgAgA8kBAAAaACDKAQAAGgAgywEAABoAIBEDAAD_AQAglAEAAP0BADCVAQAAGgAQlgEAAP0BADCXAQEA3gEAIZsBQADfAQAhnAFAAN8BACGoAQEA3gEAIakBAQDeAQAhqgEBAN4BACGrAQEA-QEAIawBAQD5AQAhrQEBAPkBACGuAUAA_gEAIa8BQAD-AQAhsAEBAPkBACGxAQEA-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-AQAhuAFAAN8BACG5AUAA3wEAIQIAAAARACARAAC_AgAgAgAAAL0CACARAAC-AgAgCZQBAAC8AgAwlQEAAL0CABCWAQAAvAIAMJcBAQDeAQAhtQEBAN4BACG2AUAA3wEAIbcBQAD-AQAhuAFAAN8BACG5AUAA3wEAIQmUAQAAvAIAMJUBAAC9AgAQlgEAALwCADCXAQEA3gEAIbUBAQDeAQAhtgFAAN8BACG3AUAA_gEAIbgBQADfAQAhuQFAAN8BACEFlwEBAI8CACG2AUAAkAIAIbcBQACWAgAhuAFAAJACACG5AUAAkAIAIQWXAQEAjwIAIbYBQACQAgAhtwFAAJYCACG4AUAAkAIAIbkBQACQAgAhBZcBAQAAAAG2AUAAAAABtwFAAAAAAbgBQAAAAAG5AUAAAAABCJcBAQAAAAGbAUAAAAABnAFAAAAAAboBAgAAAAG7AQEAAAABvAECAAAAAb0BAgAAAAG-AQIAAAABAgAAAA0AIBgAAMwCACADAAAADQAgGAAAzAIAIBkAAMsCACABEQAApAMAMA0FAACCAgAglAEAAIMCADCVAQAACwAQlgEAAIMCADCXAQEAAAABmwFAAN8BACGcAUAA3wEAIbUBAQDeAQAhugECAIQCACG7AQEA3gEAIbwBAgCEAgAhvQECAIQCACG-AQIAhAIAIQIAAAANACARAADLAgAgAgAAAMkCACARAADKAgAgDJQBAADIAgAwlQEAAMkCABCWAQAAyAIAMJcBAQDeAQAhmwFAAN8BACGcAUAA3wEAIbUBAQDeAQAhugECAIQCACG7AQEA3gEAIbwBAgCEAgAhvQECAIQCACG-AQIAhAIAIQyUAQAAyAIAMJUBAADJAgAQlgEAAMgCADCXAQEA3gEAIZsBQADfAQAhnAFAAN8BACG1AQEA3gEAIboBAgCEAgAhuwEBAN4BACG8AQIAhAIAIb0BAgCEAgAhvgECAIQCACEIlwEBAI8CACGbAUAAkAIAIZwBQACQAgAhugECAKgCACG7AQEAjwIAIbwBAgCoAgAhvQECAKgCACG-AQIAqAIAIQiXAQEAjwIAIZsBQACQAgAhnAFAAJACACG6AQIAqAIAIbsBAQCPAgAhvAECAKgCACG9AQIAqAIAIb4BAgCoAgAhCJcBAQAAAAGbAUAAAAABnAFAAAAAAboBAgAAAAG7AQEAAAABvAECAAAAAb0BAgAAAAG-AQIAAAABAxgAAKIDACDOAQAAowMAINQBAAAFACAEGAAAwQIAMM4BAADCAgAw0AEAAMQCACDUAQAAxQIAMAQYAAC1AgAwzgEAALYCADDQAQAAuAIAINQBAAC5AgAwAAAABRgAAJwDACAZAACgAwAgzgEAAJ0DACDPAQAAnwMAINQBAAABACALGAAA1QIAMBkAANoCADDOAQAA1gIAMM8BAADXAgAw0AEAANgCACDRAQAA2QIAMNIBAADZAgAw0wEAANkCADDUAQAA2QIAMNUBAADbAgAw1gEAANwCADAJBgAAzgIAIAcAAM8CACCXAQEAAAABmwFAAAAAAZwBQAAAAAG_ASAAAAABwQEAAADBAQLCAQIAAAABwwEBAAAAAQIAAAAJACAYAADgAgAgAwAAAAkAIBgAAOACACAZAADfAgAgAREAAJ4DADAOBAAAhwIAIAYAAIgCACAHAACJAgAglAEAAIUCADCVAQAABwAQlgEAAIUCADCXAQEAAAABmwFAAN8BACGcAUAA3wEAIb8BIAD4AQAhwQEAAIYCwQEiwgECAIQCACHDAQEA-QEAIcQBAQDeAQAhAgAAAAkAIBEAAN8CACACAAAA3QIAIBEAAN4CACALlAEAANwCADCVAQAA3QIAEJYBAADcAgAwlwEBAN4BACGbAUAA3wEAIZwBQADfAQAhvwEgAPgBACHBAQAAhgLBASLCAQIAhAIAIcMBAQD5AQAhxAEBAN4BACELlAEAANwCADCVAQAA3QIAEJYBAADcAgAwlwEBAN4BACGbAUAA3wEAIZwBQADfAQAhvwEgAPgBACHBAQAAhgLBASLCAQIAhAIAIcMBAQD5AQAhxAEBAN4BACEHlwEBAI8CACGbAUAAkAIAIZwBQACQAgAhvwEgALACACHBAQAAsQLBASLCAQIAqAIAIcMBAQCVAgAhCQYAALMCACAHAAC0AgAglwEBAI8CACGbAUAAkAIAIZwBQACQAgAhvwEgALACACHBAQAAsQLBASLCAQIAqAIAIcMBAQCVAgAhCQYAAM4CACAHAADPAgAglwEBAAAAAZsBQAAAAAGcAUAAAAABvwEgAAAAAcEBAAAAwQECwgECAAAAAcMBAQAAAAEDGAAAnAMAIM4BAACdAwAg1AEAAAEAIAQYAADVAgAwzgEAANYCADDQAQAA2AIAINQBAADZAgAwAAAACxgAAIEDADAZAACGAwAwzgEAAIIDADDPAQAAgwMAMNABAACEAwAg0QEAAIUDADDSAQAAhQMAMNMBAACFAwAw1AEAAIUDADDVAQAAhwMAMNYBAACIAwAwCxgAAPUCADAZAAD6AgAwzgEAAPYCADDPAQAA9wIAMNABAAD4AgAg0QEAAPkCADDSAQAA-QIAMNMBAAD5AgAw1AEAAPkCADDVAQAA-wIAMNYBAAD8AgAwCxgAAOkCADAZAADuAgAwzgEAAOoCADDPAQAA6wIAMNABAADsAgAg0QEAAO0CADDSAQAA7QIAMNMBAADtAgAw1AEAAO0CADDVAQAA7wIAMNYBAADwAgAwDJcBAQAAAAGbAUAAAAABnAFAAAAAAagBAQAAAAGpAQEAAAABqwEBAAAAAawBAQAAAAGtAQEAAAABrgFAAAAAAa8BQAAAAAGwAQEAAAABsQEBAAAAAQIAAAAcACAYAAD0AgAgAwAAABwAIBgAAPQCACAZAADzAgAgAREAAJsDADARAwAA_wEAIJQBAAD9AQAwlQEAABoAEJYBAAD9AQAwlwEBAAAAAZsBQADfAQAhnAFAAN8BACGoAQEA3gEAIakBAQDeAQAhqgEBAN4BACGrAQEA-QEAIawBAQD5AQAhrQEBAPkBACGuAUAA_gEAIa8BQAD-AQAhsAEBAPkBACGxAQEA-QEAIQIAAAAcACARAADzAgAgAgAAAPECACARAADyAgAgEJQBAADwAgAwlQEAAPECABCWAQAA8AIAMJcBAQDeAQAhmwFAAN8BACGcAUAA3wEAIagBAQDeAQAhqQEBAN4BACGqAQEA3gEAIasBAQD5AQAhrAEBAPkBACGtAQEA-QEAIa4BQAD-AQAhrwFAAP4BACGwAQEA-QEAIbEBAQD5AQAhEJQBAADwAgAwlQEAAPECABCWAQAA8AIAMJcBAQDeAQAhmwFAAN8BACGcAUAA3wEAIagBAQDeAQAhqQEBAN4BACGqAQEA3gEAIasBAQD5AQAhrAEBAPkBACGtAQEA-QEAIa4BQAD-AQAhrwFAAP4BACGwAQEA-QEAIbEBAQD5AQAhDJcBAQCPAgAhmwFAAJACACGcAUAAkAIAIagBAQCPAgAhqQEBAI8CACGrAQEAlQIAIawBAQCVAgAhrQEBAJUCACGuAUAAlgIAIa8BQACWAgAhsAEBAJUCACGxAQEAlQIAIQyXAQEAjwIAIZsBQACQAgAhnAFAAJACACGoAQEAjwIAIakBAQCPAgAhqwEBAJUCACGsAQEAlQIAIa0BAQCVAgAhrgFAAJYCACGvAUAAlgIAIbABAQCVAgAhsQEBAJUCACEMlwEBAAAAAZsBQAAAAAGcAUAAAAABqAEBAAAAAakBAQAAAAGrAQEAAAABrAEBAAAAAa0BAQAAAAGuAUAAAAABrwFAAAAAAbABAQAAAAGxAQEAAAABB5cBAQAAAAGaAUAAAAABmwFAAAAAAZwBQAAAAAGyAQEAAAABswEBAAAAAbQBAQAAAAECAAAAGAAgGAAAgAMAIAMAAAAYACAYAACAAwAgGQAA_wIAIAERAACaAwAwDAMAAP8BACCUAQAAgAIAMJUBAAAWABCWAQAAgAIAMJcBAQAAAAGaAUAA3wEAIZsBQADfAQAhnAFAAN8BACGqAQEA3gEAIbIBAQAAAAGzAQEA-QEAIbQBAQD5AQAhAgAAABgAIBEAAP8CACACAAAA_QIAIBEAAP4CACALlAEAAPwCADCVAQAA_QIAEJYBAAD8AgAwlwEBAN4BACGaAUAA3wEAIZsBQADfAQAhnAFAAN8BACGqAQEA3gEAIbIBAQDeAQAhswEBAPkBACG0AQEA-QEAIQuUAQAA_AIAMJUBAAD9AgAQlgEAAPwCADCXAQEA3gEAIZoBQADfAQAhmwFAAN8BACGcAUAA3wEAIaoBAQDeAQAhsgEBAN4BACGzAQEA-QEAIbQBAQD5AQAhB5cBAQCPAgAhmgFAAJACACGbAUAAkAIAIZwBQACQAgAhsgEBAI8CACGzAQEAlQIAIbQBAQCVAgAhB5cBAQCPAgAhmgFAAJACACGbAUAAkAIAIZwBQACQAgAhsgEBAI8CACGzAQEAlQIAIbQBAQCVAgAhB5cBAQAAAAGaAUAAAAABmwFAAAAAAZwBQAAAAAGyAQEAAAABswEBAAAAAbQBAQAAAAEGCQAA4gIAIJcBAQAAAAGbAUAAAAABnAFAAAAAAbsBAQAAAAHFASAAAAABAgAAAAUAIBgAAIwDACADAAAABQAgGAAAjAMAIBkAAIsDACABEQAAmQMAMAsDAAD_AQAgCQAAiwIAIJQBAACKAgAwlQEAAAMAEJYBAACKAgAwlwEBAAAAAZsBQADfAQAhnAFAAN8BACGqAQEA3gEAIbsBAQDeAQAhxQEgAPgBACECAAAABQAgEQAAiwMAIAIAAACJAwAgEQAAigMAIAmUAQAAiAMAMJUBAACJAwAQlgEAAIgDADCXAQEA3gEAIZsBQADfAQAhnAFAAN8BACGqAQEA3gEAIbsBAQDeAQAhxQEgAPgBACEJlAEAAIgDADCVAQAAiQMAEJYBAACIAwAwlwEBAN4BACGbAUAA3wEAIZwBQADfAQAhqgEBAN4BACG7AQEA3gEAIcUBIAD4AQAhBZcBAQCPAgAhmwFAAJACACGcAUAAkAIAIbsBAQCPAgAhxQEgALACACEGCQAA1AIAIJcBAQCPAgAhmwFAAJACACGcAUAAkAIAIbsBAQCPAgAhxQEgALACACEGCQAA4gIAIJcBAQAAAAGbAUAAAAABnAFAAAAAAbsBAQAAAAHFASAAAAABBBgAAIEDADDOAQAAggMAMNABAACEAwAg1AEAAIUDADAEGAAA9QIAMM4BAAD2AgAw0AEAAPgCACDUAQAA-QIAMAQYAADpAgAwzgEAAOoCADDQAQAA7AIAINQBAADtAgAwAAAABAcAAJEDACAKAACQAwAgCwAAkgMAIMgBAACRAgAgBAQAAJUDACAGAACWAwAgBwAAlwMAIMMBAACRAgAgAgMAAJMDACAJAACYAwAgAAAABZcBAQAAAAGbAUAAAAABnAFAAAAAAbsBAQAAAAHFASAAAAABB5cBAQAAAAGaAUAAAAABmwFAAAAAAZwBQAAAAAGyAQEAAAABswEBAAAAAbQBAQAAAAEMlwEBAAAAAZsBQAAAAAGcAUAAAAABqAEBAAAAAakBAQAAAAGrAQEAAAABrAEBAAAAAa0BAQAAAAGuAUAAAAABrwFAAAAAAbABAQAAAAGxAQEAAAABCQcAAI4DACALAACPAwAglwEBAAAAAZsBQAAAAAGcAUAAAAABuwEBAAAAAcYBAQAAAAHHASAAAAAByAEBAAAAAQIAAAABACAYAACcAwAgB5cBAQAAAAGbAUAAAAABnAFAAAAAAb8BIAAAAAHBAQAAAMEBAsIBAgAAAAHDAQEAAAABAwAAACIAIBgAAJwDACAZAAChAwAgCwAAACIAIAcAAOcCACALAADoAgAgEQAAoQMAIJcBAQCPAgAhmwFAAJACACGcAUAAkAIAIbsBAQCPAgAhxgEBAI8CACHHASAAsAIAIcgBAQCVAgAhCQcAAOcCACALAADoAgAglwEBAI8CACGbAUAAkAIAIZwBQACQAgAhuwEBAI8CACHGAQEAjwIAIccBIACwAgAhyAEBAJUCACEHAwAA4QIAIJcBAQAAAAGbAUAAAAABnAFAAAAAAaoBAQAAAAG7AQEAAAABxQEgAAAAAQIAAAAFACAYAACiAwAgCJcBAQAAAAGbAUAAAAABnAFAAAAAAboBAgAAAAG7AQEAAAABvAECAAAAAb0BAgAAAAG-AQIAAAABBZcBAQAAAAG2AUAAAAABtwFAAAAAAbgBQAAAAAG5AUAAAAABAwAAAAMAIBgAAKIDACAZAACoAwAgCQAAAAMAIAMAANMCACARAACoAwAglwEBAI8CACGbAUAAkAIAIZwBQACQAgAhqgEBAI8CACG7AQEAjwIAIcUBIACwAgAhBwMAANMCACCXAQEAjwIAIZsBQACQAgAhnAFAAJACACGqAQEAjwIAIbsBAQCPAgAhxQEgALACACEKBAAAzQIAIAcAAM8CACCXAQEAAAABmwFAAAAAAZwBQAAAAAG_ASAAAAABwQEAAADBAQLCAQIAAAABwwEBAAAAAcQBAQAAAAECAAAACQAgGAAAqQMAIAMAAAAHACAYAACpAwAgGQAArQMAIAwAAAAHACAEAACyAgAgBwAAtAIAIBEAAK0DACCXAQEAjwIAIZsBQACQAgAhnAFAAJACACG_ASAAsAIAIcEBAACxAsEBIsIBAgCoAgAhwwEBAJUCACHEAQEAjwIAIQoEAACyAgAgBwAAtAIAIJcBAQCPAgAhmwFAAJACACGcAUAAkAIAIb8BIACwAgAhwQEAALECwQEiwgECAKgCACHDAQEAlQIAIcQBAQCPAgAhCgQAAM0CACAGAADOAgAglwEBAAAAAZsBQAAAAAGcAUAAAAABvwEgAAAAAcEBAAAAwQECwgECAAAAAcMBAQAAAAHEAQEAAAABAgAAAAkAIBgAAK4DACADAAAABwAgGAAArgMAIBkAALIDACAMAAAABwAgBAAAsgIAIAYAALMCACARAACyAwAglwEBAI8CACGbAUAAkAIAIZwBQACQAgAhvwEgALACACHBAQAAsQLBASLCAQIAqAIAIcMBAQCVAgAhxAEBAI8CACEKBAAAsgIAIAYAALMCACCXAQEAjwIAIZsBQACQAgAhnAFAAJACACG_ASAAsAIAIcEBAACxAsEBIsIBAgCoAgAhwwEBAJUCACHEAQEAjwIAIQkKAACNAwAgCwAAjwMAIJcBAQAAAAGbAUAAAAABnAFAAAAAAbsBAQAAAAHGAQEAAAABxwEgAAAAAcgBAQAAAAECAAAAAQAgGAAAswMAIAMAAAAiACAYAACzAwAgGQAAtwMAIAsAAAAiACAKAADmAgAgCwAA6AIAIBEAALcDACCXAQEAjwIAIZsBQACQAgAhnAFAAJACACG7AQEAjwIAIcYBAQCPAgAhxwEgALACACHIAQEAlQIAIQkKAADmAgAgCwAA6AIAIJcBAQCPAgAhmwFAAJACACGcAUAAkAIAIbsBAQCPAgAhxgEBAI8CACHHASAAsAIAIcgBAQCVAgAhCQcAAI4DACAKAACNAwAglwEBAAAAAZsBQAAAAAGcAUAAAAABuwEBAAAAAcYBAQAAAAHHASAAAAAByAEBAAAAAQIAAAABACAYAAC4AwAgAwAAACIAIBgAALgDACAZAAC8AwAgCwAAACIAIAcAAOcCACAKAADmAgAgEQAAvAMAIJcBAQCPAgAhmwFAAJACACGcAUAAkAIAIbsBAQCPAgAhxgEBAI8CACHHASAAsAIAIcgBAQCVAgAhCQcAAOcCACAKAADmAgAglwEBAI8CACGbAUAAkAIAIZwBQACQAgAhuwEBAI8CACHGAQEAjwIAIccBIACwAgAhyAEBAJUCACEEBxkICAAKCgYCCx0JAwMAAQgABwkKAwQEAAIGDgQHEgUIAAYBBQADAQUAAwIGEwAHFAABCRUAAQMAAQEDAAEDBx8ACh4ACyAAAAAAAwgADx4AEB8AEQAAAAMIAA8eABAfABEBAwABAQMAAQMIABYeABcfABgAAAADCAAWHgAXHwAYAQQAAgEEAAIFCAAdHgAgHwAhQAAeQQAfAAAAAAAFCAAdHgAgHwAhQAAeQQAfAQUAAwEFAAMFCAAmHgApHwAqQAAnQQAoAAAAAAAFCAAmHgApHwAqQAAnQQAoAQUAAwEFAAMDCAAvHgAwHwAxAAAAAwgALx4AMB8AMQEDAAEBAwABAwgANh4ANx8AOAAAAAMIADYeADcfADgBAwABAQMAAQMIAD0eAD4fAD8AAAADCAA9HgA-HwA_AAAAAwgARR4ARh8ARwAAAAMIAEUeAEYfAEcMAgENIQEOJAEPJQEQJgESKAETKgsUKwwVLQEWLwsXMA0aMQEbMgEcMwsgNg4hNxIiOAIjOQIkOgIlOwImPAInPgIoQAspQRMqQwIrRQssRhQtRwIuSAIvSQswTBUxTRkyTgMzTwM0UAM1UQM2UgM3VAM4Vgs5Vxo6WQM7Wws8XBs9XQM-XgM_XwtCYhxDYyJEZARFZQRGZgRHZwRIaARJagRKbAtLbSNMbwRNcQtOciRPcwRQdARRdQtSeCVTeStUegVVewVWfAVXfQVYfgVZgAEFWoIBC1uDASxchQEFXYcBC16IAS1fiQEFYIoBBWGLAQtijgEuY48BMmSQAQhlkQEIZpIBCGeTAQholAEIaZYBCGqYAQtrmQEzbJsBCG2dAQtungE0b58BCHCgAQhxoQELcqQBNXOlATl0pgEJdacBCXaoAQl3qQEJeKoBCXmsAQl6rgELe68BOnyxAQl9swELfrQBO3-1AQmAAbYBCYEBtwELggG6ATyDAbsBQIQBvQFBhQG-AUGGAcEBQYcBwgFBiAHDAUGJAcUBQYoBxwELiwHIAUKMAcoBQY0BzAELjgHNAUOPAc4BQZABzwFBkQHQAQuSAdMBRJMB1AFI"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// src/generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// src/generated/prisma/enums.ts
var WeekDay = {
  SUNDAY: "SUNDAY",
  MONDAY: "MONDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
  THURSDAY: "THURSDAY",
  FRIDAY: "FRIDAY",
  SATURDAY: "SATURDAY"
};

// src/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";
var prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: env.DATABASE_URL })
});
var auth = betterAuth({
  baseURL: env.BETTER_AUTH_URL,
  trustedOrigins: ["http://localhost:3000"],
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  plugins: [openAPI()]
});

// src/routes/home.ts
import { fromNodeHeaders } from "better-auth/node";

// src/errors/error.ts
var NotFoundError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
};
var ForbiddenError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ForbiddenError";
  }
};
var ConflictError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ConflictError";
  }
};

// src/schema/index.ts
import z2 from "zod";

// src/generated/prisma/internal/prismaNamespaceBrowser.ts
import * as runtime3 from "@prisma/client/runtime/index-browser";
var NullTypes4 = {
  DbNull: runtime3.NullTypes.DbNull,
  JsonNull: runtime3.NullTypes.JsonNull,
  AnyNull: runtime3.NullTypes.AnyNull
};
var TransactionIsolationLevel2 = runtime3.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});

// src/schema/index.ts
var ErrorSchema = z2.object({
  error: z2.string(),
  code: z2.string()
});
var WorkoutPlanSchema = z2.object({
  id: z2.uuid(),
  name: z2.string().trim().min(1),
  workoutDays: z2.array(
    z2.object({
      name: z2.string().trim().min(1),
      weekDay: z2.enum(WeekDay),
      isRest: z2.boolean().default(false),
      estimatedDurationInSeconds: z2.number().min(1),
      coverImageUrl: z2.url().optional(),
      exercises: z2.array(
        z2.object({
          order: z2.number().min(0),
          name: z2.string().trim().min(1),
          sets: z2.number().min(1),
          reps: z2.number().min(1),
          restTimeInSeconds: z2.number().min(1)
        })
      )
    })
  )
});
var StartWorkoutSessionParamsSchema = z2.object({
  workoutPlanId: z2.uuid(),
  workoutDayId: z2.uuid()
});
var StartWorkoutSessionResponseSchema = z2.object({
  userWorkoutSessionId: z2.uuid()
});
var UpdateWorkoutSessionBodySchema = z2.object({
  completedAt: z2.string().datetime()
});
var UpdateWorkoutSessionParamsSchema = z2.object({
  workoutPlanId: z2.uuid(),
  workoutDayId: z2.uuid(),
  workoutSessionId: z2.uuid()
});
var UpdateWorkoutSessionResponseSchema = z2.object({
  id: z2.uuid(),
  completedAt: z2.string().datetime(),
  startedAt: z2.string().datetime()
});
var GetHomeParamsSchema = z2.object({
  date: z2.string().regex(/^\d{4}-\d{2}-\d{2}$/)
});
var GetHomeResponseSchema = z2.object({
  activeWorkoutPlanId: z2.uuid(),
  todayWorkoutDay: z2.object({
    workoutPlanId: z2.uuid(),
    id: z2.uuid(),
    name: z2.string(),
    isRest: z2.boolean(),
    weekDay: z2.enum(WeekDay),
    estimatedDurationInSeconds: z2.number(),
    coverImageUrl: z2.url().optional(),
    exercisesCount: z2.number()
  }).optional(),
  workoutStreak: z2.number().int().min(0),
  consistencyByDay: z2.record(
    z2.string(),
    z2.object({
      workoutDayCompleted: z2.boolean(),
      workoutDayStarted: z2.boolean()
    })
  )
});
var GetWorkoutPlanByIdParamsSchema = z2.object({
  id: z2.uuid()
});
var GetWorkoutPlanByIdResponseSchema = z2.object({
  id: z2.uuid(),
  name: z2.string(),
  workoutDays: z2.array(
    z2.object({
      id: z2.uuid(),
      weekDay: z2.enum(WeekDay),
      name: z2.string(),
      isRest: z2.boolean(),
      coverImageUrl: z2.url().optional(),
      estimatedDurationInSeconds: z2.number(),
      exercisesCount: z2.number()
    })
  )
});
var GetWorkoutDayByIdParamsSchema = z2.object({
  workoutPlanId: z2.uuid(),
  workoutDayId: z2.uuid()
});
var GetWorkoutDayByIdResponseSchema = z2.object({
  id: z2.uuid(),
  name: z2.string(),
  isRest: z2.boolean(),
  coverImageUrl: z2.url().optional(),
  estimatedDurationInSeconds: z2.number(),
  exercises: z2.array(
    z2.object({
      id: z2.uuid(),
      workoutDayId: z2.uuid(),
      order: z2.number(),
      name: z2.string(),
      sets: z2.number(),
      reps: z2.number(),
      restTimeInSeconds: z2.number()
    })
  ),
  weekDay: z2.enum(WeekDay),
  sessions: z2.array(
    z2.object({
      id: z2.uuid(),
      workoutDayId: z2.uuid(),
      startedAt: z2.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
      completedAt: z2.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()
    })
  )
});
var GetStatsQuerySchema = z2.object({
  from: z2.iso.date(),
  to: z2.iso.date()
});
var GetStatsResponseSchema = z2.object({
  workoutStreak: z2.number().int().min(0),
  consistencyByDay: z2.record(
    z2.string(),
    z2.object({
      workoutDayCompleted: z2.boolean(),
      workoutDayStarted: z2.boolean()
    })
  ),
  completedWorkoutsCount: z2.number().int().min(0),
  conclusionRate: z2.number().min(0),
  totalTimeInSeconds: z2.number().int().min(0)
});
var UserTrainDataSchema = z2.object({
  userId: z2.string(),
  weightInGrams: z2.number(),
  heightInCentimeters: z2.number(),
  age: z2.number(),
  bodyFatPercentage: z2.number()
});
var GetMeResponseSchema = UserTrainDataSchema;

// src/repositories/prisma/PrismaWorkoutRepository.ts
var PrismaWorkoutRepository = class {
  async create(data) {
    const workout = await prisma.workoutPlan.create({
      data: {
        name: data.name,
        user: { connect: { id: data.userId } },
        workoutDays: {
          create: data.workoutDays.map((day) => ({
            weekDay: day.weekDay,
            isRest: day.isRest,
            estimatedDurationInSeconds: day.estimatedDurationInSeconds,
            coverImageUrl: day.coverImageUrl,
            workoutExercises: {
              create: day.exercises
            }
          }))
        }
      }
    });
    return { id: workout.id };
  }
  async findActiveByUserId(userId) {
    return prisma.workoutPlan.findFirst({
      where: {
        userId,
        isActive: true
      },
      select: { id: true }
    });
  }
  async findActivePlanWithDaysByUserId(userId) {
    const workoutPlan = await prisma.workoutPlan.findFirst({
      where: {
        userId,
        isActive: true
      },
      select: {
        id: true,
        workoutDays: {
          select: {
            id: true,
            workoutPlanId: true,
            isRest: true,
            weekDay: true,
            estimatedDurationInSeconds: true,
            coverImageUrl: true,
            _count: {
              select: {
                workoutExercises: true
              }
            }
          }
        }
      }
    });
    if (!workoutPlan) {
      return null;
    }
    return {
      id: workoutPlan.id,
      workoutDays: workoutPlan.workoutDays.map((workoutDay) => ({
        id: workoutDay.id,
        workoutPlanId: workoutDay.workoutPlanId,
        isRest: workoutDay.isRest,
        weekDay: workoutDay.weekDay,
        estimatedDurationInSeconds: workoutDay.estimatedDurationInSeconds,
        coverImageUrl: workoutDay.coverImageUrl,
        exercisesCount: workoutDay._count.workoutExercises
      }))
    };
  }
  async findWorkoutDayOwner(data) {
    const workoutDay = await prisma.workoutDay.findFirst({
      where: {
        id: data.workoutDayId,
        workoutPlanId: data.workoutPlanId
      },
      select: {
        workoutPlan: {
          select: {
            userId: true
          }
        }
      }
    });
    if (!workoutDay) {
      return null;
    }
    return { userId: workoutDay.workoutPlan.userId };
  }
  async findStartedSessionByWorkoutDayId(workoutDayId) {
    return prisma.workoutSession.findFirst({
      where: {
        workoutDayId
      },
      select: {
        id: true
      }
    });
  }
  async startWorkoutSession(data) {
    const workoutSession = await prisma.workoutSession.create({
      data: {
        workoutDay: {
          connect: {
            id: data.workoutDayId
          }
        },
        StartedAt: /* @__PURE__ */ new Date()
      },
      select: {
        id: true
      }
    });
    return { id: workoutSession.id };
  }
  async findWorkoutSessionOwner(data) {
    const workoutSession = await prisma.workoutSession.findFirst({
      where: {
        id: data.workoutSessionId,
        workoutDayId: data.workoutDayId,
        workoutDay: {
          workoutPlanId: data.workoutPlanId
        }
      },
      select: {
        workoutDay: {
          select: {
            workoutPlan: {
              select: {
                userId: true
              }
            }
          }
        }
      }
    });
    if (!workoutSession) {
      return null;
    }
    return {
      userId: workoutSession.workoutDay.workoutPlan.userId
    };
  }
  async updateWorkoutSession(data) {
    const workoutSession = await prisma.workoutSession.update({
      where: {
        id: data.workoutSessionId
      },
      data: {
        CompletedAt: data.completedAt
      },
      select: {
        id: true,
        CompletedAt: true,
        StartedAt: true
      }
    });
    return {
      id: workoutSession.id,
      completedAt: workoutSession.CompletedAt,
      startedAt: workoutSession.StartedAt
    };
  }
  async findWorkoutSessionsInRange(data) {
    const workoutSessions = await prisma.workoutSession.findMany({
      where: {
        workoutDay: {
          workoutPlan: {
            userId: data.userId
          }
        },
        StartedAt: {
          gte: data.startsAtGte,
          lte: data.startsAtLte
        }
      },
      select: {
        StartedAt: true,
        CompletedAt: true
      }
    });
    return workoutSessions.map((workoutSession) => ({
      startedAt: workoutSession.StartedAt,
      completedAt: workoutSession.CompletedAt
    }));
  }
  async countCompletedSessionsOnDate(data) {
    return prisma.workoutSession.count({
      where: {
        workoutDay: {
          workoutPlan: {
            userId: data.userId
          }
        },
        StartedAt: {
          gte: data.startOfDay,
          lte: data.endOfDay
        },
        NOT: {
          CompletedAt: null
        }
      }
    });
  }
  async findWorkoutPlanById(data) {
    const workoutPlan = await prisma.workoutPlan.findUnique({
      where: {
        id: data.workoutPlanId
      },
      select: {
        id: true,
        name: true,
        userId: true,
        workoutDays: {
          select: {
            id: true,
            weekDay: true,
            isRest: true,
            coverImageUrl: true,
            estimatedDurationInSeconds: true,
            _count: {
              select: {
                workoutExercises: true
              }
            }
          }
        }
      }
    });
    if (!workoutPlan) {
      return null;
    }
    return {
      id: workoutPlan.id,
      name: workoutPlan.name,
      userId: workoutPlan.userId,
      workoutDays: workoutPlan.workoutDays.map((workoutDay) => ({
        id: workoutDay.id,
        weekDay: workoutDay.weekDay,
        isRest: workoutDay.isRest,
        coverImageUrl: workoutDay.coverImageUrl,
        estimatedDurationInSeconds: workoutDay.estimatedDurationInSeconds,
        exercisesCount: workoutDay._count.workoutExercises
      }))
    };
  }
  async findWorkoutPlansByUserId(userId) {
    const workoutPlans = await prisma.workoutPlan.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: "desc"
      },
      select: {
        id: true,
        name: true,
        isActive: true,
        workoutDays: {
          select: {
            id: true,
            weekDay: true,
            isRest: true,
            coverImageUrl: true,
            estimatedDurationInSeconds: true,
            _count: {
              select: {
                workoutExercises: true
              }
            }
          }
        }
      }
    });
    return workoutPlans.map((workoutPlan) => ({
      id: workoutPlan.id,
      name: workoutPlan.name,
      isActive: workoutPlan.isActive,
      workoutDays: workoutPlan.workoutDays.map((workoutDay) => ({
        id: workoutDay.id,
        weekDay: workoutDay.weekDay,
        isRest: workoutDay.isRest,
        coverImageUrl: workoutDay.coverImageUrl,
        estimatedDurationInSeconds: workoutDay.estimatedDurationInSeconds,
        exercisesCount: workoutDay._count.workoutExercises
      }))
    }));
  }
  async findWorkoutDayById(data) {
    const workoutDay = await prisma.workoutDay.findFirst({
      where: {
        id: data.workoutDayId,
        workoutPlanId: data.workoutPlanId
      },
      select: {
        id: true,
        weekDay: true,
        isRest: true,
        coverImageUrl: true,
        estimatedDurationInSeconds: true,
        workoutPlan: {
          select: {
            userId: true
          }
        },
        workoutExercises: {
          select: {
            id: true,
            workoutDayId: true,
            order: true,
            name: true,
            sets: true,
            reps: true,
            restTimeInSeconds: true
          },
          orderBy: {
            order: "asc"
          }
        },
        sessions: {
          select: {
            id: true,
            workoutDayId: true,
            StartedAt: true,
            CompletedAt: true
          },
          orderBy: {
            StartedAt: "desc"
          }
        }
      }
    });
    if (!workoutDay) {
      return null;
    }
    return {
      id: workoutDay.id,
      weekDay: workoutDay.weekDay,
      isRest: workoutDay.isRest,
      coverImageUrl: workoutDay.coverImageUrl,
      estimatedDurationInSeconds: workoutDay.estimatedDurationInSeconds,
      userId: workoutDay.workoutPlan.userId,
      exercises: workoutDay.workoutExercises,
      sessions: workoutDay.sessions.map((session) => ({
        id: session.id,
        workoutDayId: session.workoutDayId,
        startedAt: session.StartedAt,
        completedAt: session.CompletedAt
      }))
    };
  }
};

// src/use-cases/GetHomeData.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_utc = __toESM(require_utc(), 1);
import_dayjs.default.extend(import_utc.default);
var WEEK_DAYS = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY"
];
var WEEK_DAY_NAMES = {
  SUNDAY: "Sunday",
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday"
};
var GetHomeData = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const requestedDate = import_dayjs.default.utc(data.date);
    if (!requestedDate.isValid() || requestedDate.format("YYYY-MM-DD") !== data.date) {
      throw new Error("Invalid date");
    }
    const activePlan = await this.repository.findActivePlanWithDaysByUserId(
      data.userId
    );
    if (!activePlan) {
      throw new NotFoundError("Active workout plan not found");
    }
    const currentWeekDay = WEEK_DAYS[requestedDate.day()];
    const todayWorkoutDay = activePlan.workoutDays.find(
      (workoutDay) => workoutDay.weekDay === currentWeekDay
    );
    const startOfWeek = requestedDate.subtract(requestedDate.day(), "day").startOf("day");
    const endOfWeek = startOfWeek.add(6, "day").endOf("day");
    const workoutSessions = await this.repository.findWorkoutSessionsInRange({
      userId: data.userId,
      startsAtGte: startOfWeek.toDate(),
      startsAtLte: endOfWeek.toDate()
    });
    const consistencyByDay = {};
    for (let index = 0; index < 7; index++) {
      const dateKey = startOfWeek.add(index, "day").format("YYYY-MM-DD");
      consistencyByDay[dateKey] = {
        workoutDayCompleted: false,
        workoutDayStarted: false
      };
    }
    for (const workoutSession of workoutSessions) {
      const dateKey = import_dayjs.default.utc(workoutSession.startedAt).format("YYYY-MM-DD");
      const consistency = consistencyByDay[dateKey];
      if (!consistency) {
        continue;
      }
      if (workoutSession.completedAt) {
        consistency.workoutDayCompleted = true;
        consistency.workoutDayStarted = true;
        continue;
      }
      consistency.workoutDayStarted = true;
    }
    let workoutStreak = 0;
    let cursorDate = requestedDate.startOf("day");
    while (true) {
      const completedCount = await this.repository.countCompletedSessionsOnDate(
        {
          userId: data.userId,
          startOfDay: cursorDate.startOf("day").toDate(),
          endOfDay: cursorDate.endOf("day").toDate()
        }
      );
      if (completedCount === 0) {
        break;
      }
      workoutStreak++;
      cursorDate = cursorDate.subtract(1, "day");
    }
    return {
      activeWorkoutPlanId: activePlan.id,
      todayWorkoutDay: todayWorkoutDay ? {
        workoutPlanId: todayWorkoutDay.workoutPlanId,
        id: todayWorkoutDay.id,
        name: WEEK_DAY_NAMES[currentWeekDay],
        isRest: todayWorkoutDay.isRest,
        weekDay: todayWorkoutDay.weekDay,
        estimatedDurationInSeconds: todayWorkoutDay.estimatedDurationInSeconds,
        ...todayWorkoutDay.coverImageUrl ? { coverImageUrl: todayWorkoutDay.coverImageUrl } : {},
        exercisesCount: todayWorkoutDay.exercisesCount
      } : void 0,
      workoutStreak,
      consistencyByDay
    };
  }
};

// src/use-cases/factories/make-get-home-data.ts
function makeGetHomeData() {
  return new GetHomeData(new PrismaWorkoutRepository());
}

// src/routes/home.ts
async function homeRoutes(app2) {
  app2.withTypeProvider().route({
    method: "GET",
    url: "/:date",
    schema: {
      operationId: "getHomeData",
      tags: ["Home"],
      summary: "Get home data by date",
      params: GetHomeParamsSchema,
      response: {
        200: GetHomeResponseSchema,
        400: ErrorSchema,
        401: ErrorSchema,
        404: ErrorSchema,
        500: ErrorSchema
      }
    },
    handler: async (request, reply) => {
      const getHomeData = makeGetHomeData();
      const session = await auth.api.getSession({
        headers: fromNodeHeaders(request.headers)
      });
      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED"
        });
      }
      try {
        const result = await getHomeData.execute({
          userId: session.user.id,
          date: request.params.date
        });
        return reply.status(200).send(result);
      } catch (error) {
        if (error instanceof NotFoundError) {
          return reply.status(404).send({
            error: error.message,
            code: "NOT_FOUND"
          });
        }
        if (error instanceof Error && error.message === "Invalid date") {
          return reply.status(400).send({
            error: error.message,
            code: "BAD_REQUEST"
          });
        }
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
  });
}

// src/routes/workout-plan.ts
import { fromNodeHeaders as fromNodeHeaders2 } from "better-auth/node";

// src/use-cases/CreateWorkoutPlan.ts
var CreateWorkoutPlan = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const existing = await this.repository.findActiveByUserId(data.userId);
    if (existing) {
      throw new NotFoundError(
        "An active workout plan already exists for this user"
      );
    }
    const workout = await this.repository.create(data);
    return { workoutPlanId: workout.id };
  }
};

// src/use-cases/factories/make-create-workout-plan.ts
function makeCreateWorkoutPlan() {
  return new CreateWorkoutPlan(new PrismaWorkoutRepository());
}

// src/use-cases/GetWorkoutDayById.ts
var import_dayjs2 = __toESM(require_dayjs_min(), 1);
var WEEK_DAY_NAMES2 = {
  SUNDAY: "Sunday",
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday"
};
var GetWorkoutDayById = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const workoutDay = await this.repository.findWorkoutDayById({
      workoutPlanId: data.workoutPlanId,
      workoutDayId: data.workoutDayId
    });
    if (!workoutDay) {
      throw new NotFoundError("Workout day not found for this workout plan");
    }
    if (workoutDay.userId !== data.userId) {
      throw new ForbiddenError(
        "You can only access workout days from your own workout plan"
      );
    }
    return {
      id: workoutDay.id,
      name: WEEK_DAY_NAMES2[workoutDay.weekDay],
      isRest: workoutDay.isRest,
      ...workoutDay.coverImageUrl ? { coverImageUrl: workoutDay.coverImageUrl } : {},
      estimatedDurationInSeconds: workoutDay.estimatedDurationInSeconds,
      exercises: workoutDay.exercises,
      weekDay: workoutDay.weekDay,
      sessions: workoutDay.sessions.map((session) => ({
        id: session.id,
        workoutDayId: session.workoutDayId,
        ...session.startedAt ? { startedAt: (0, import_dayjs2.default)(session.startedAt).format("YYYY-MM-DD") } : {},
        ...session.completedAt ? { completedAt: (0, import_dayjs2.default)(session.completedAt).format("YYYY-MM-DD") } : {}
      }))
    };
  }
};

// src/use-cases/factories/make-get-workout-day-by-id.ts
function makeGetWorkoutDayById() {
  return new GetWorkoutDayById(new PrismaWorkoutRepository());
}

// src/use-cases/GetWorkoutPlanById.ts
var WEEK_DAY_NAMES3 = {
  SUNDAY: "Sunday",
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday"
};
var GetWorkoutPlanById = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const workoutPlan = await this.repository.findWorkoutPlanById({
      workoutPlanId: data.workoutPlanId
    });
    if (!workoutPlan) {
      throw new NotFoundError("Workout plan not found");
    }
    if (workoutPlan.userId !== data.userId) {
      throw new ForbiddenError("You can only access your own workout plan");
    }
    return {
      id: workoutPlan.id,
      name: workoutPlan.name,
      workoutDays: workoutPlan.workoutDays.map((workoutDay) => ({
        id: workoutDay.id,
        weekDay: workoutDay.weekDay,
        name: WEEK_DAY_NAMES3[workoutDay.weekDay],
        isRest: workoutDay.isRest,
        ...workoutDay.coverImageUrl ? { coverImageUrl: workoutDay.coverImageUrl } : {},
        estimatedDurationInSeconds: workoutDay.estimatedDurationInSeconds,
        exercisesCount: workoutDay.exercisesCount
      }))
    };
  }
};

// src/use-cases/factories/make-get-workout-plan-by-id.ts
function makeGetWorkoutPlanById() {
  return new GetWorkoutPlanById(new PrismaWorkoutRepository());
}

// src/use-cases/StartWorkoutSession.ts
var StartWorkoutSession = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const owner = await this.repository.findWorkoutDayOwner({
      workoutPlanId: data.workoutPlanId,
      workoutDayId: data.workoutDayId
    });
    if (!owner) {
      throw new NotFoundError("Workout day not found for this workout plan");
    }
    if (owner.userId !== data.userId) {
      throw new ForbiddenError(
        "You can only start sessions for your own workout plan"
      );
    }
    const existingSession = await this.repository.findStartedSessionByWorkoutDayId(data.workoutDayId);
    if (existingSession) {
      throw new ConflictError("This workout day already has a started session");
    }
    const workoutSession = await this.repository.startWorkoutSession({
      workoutDayId: data.workoutDayId
    });
    return { userWorkoutSessionId: workoutSession.id };
  }
};

// src/use-cases/factories/make-start-workout-session.ts
function makeStartWorkoutSession() {
  return new StartWorkoutSession(new PrismaWorkoutRepository());
}

// src/use-cases/UpdateWorkoutSession.ts
var UpdateWorkoutSession = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const owner = await this.repository.findWorkoutSessionOwner({
      workoutPlanId: data.workoutPlanId,
      workoutDayId: data.workoutDayId,
      workoutSessionId: data.workoutSessionId
    });
    if (!owner) {
      throw new NotFoundError("Workout session not found for this workout day");
    }
    if (owner.userId !== data.userId) {
      throw new ForbiddenError(
        "You can only update sessions for your own workout plan"
      );
    }
    const workoutSession = await this.repository.updateWorkoutSession({
      workoutSessionId: data.workoutSessionId,
      completedAt: new Date(data.completedAt)
    });
    return {
      id: workoutSession.id,
      completedAt: workoutSession.completedAt.toISOString(),
      startedAt: workoutSession.startedAt.toISOString()
    };
  }
};

// src/use-cases/factories/make-update-workout-session.ts
function makeUpdateWorkoutSession() {
  return new UpdateWorkoutSession(new PrismaWorkoutRepository());
}

// src/routes/workout-plan.ts
async function workoutPlanRoutes(app2) {
  app2.withTypeProvider().route({
    method: "GET",
    url: "/:workoutPlanId/days/:workoutDayId",
    schema: {
      operationId: "getWorkoutDayById",
      tags: ["Workout Days"],
      summary: "Get workout day by id",
      params: GetWorkoutDayByIdParamsSchema,
      response: {
        200: GetWorkoutDayByIdResponseSchema,
        400: ErrorSchema,
        401: ErrorSchema,
        403: ErrorSchema,
        404: ErrorSchema,
        500: ErrorSchema
      }
    },
    handler: async (request, reply) => {
      const getWorkoutDayById = makeGetWorkoutDayById();
      const session = await auth.api.getSession({
        headers: fromNodeHeaders2(request.headers)
      });
      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED"
        });
      }
      try {
        const result = await getWorkoutDayById.execute({
          userId: session.user.id,
          workoutPlanId: request.params.workoutPlanId,
          workoutDayId: request.params.workoutDayId
        });
        return reply.status(200).send(result);
      } catch (error) {
        if (error instanceof ForbiddenError) {
          return reply.status(403).send({
            error: error.message,
            code: "FORBIDDEN"
          });
        }
        if (error instanceof NotFoundError) {
          return reply.status(404).send({
            error: error.message,
            code: "NOT_FOUND"
          });
        }
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
  });
  app2.withTypeProvider().route({
    method: "GET",
    url: "/:id",
    schema: {
      operationId: "getWorkoutPlanById",
      tags: ["Workout Plans"],
      summary: "Get workout plan by id",
      params: GetWorkoutPlanByIdParamsSchema,
      response: {
        200: GetWorkoutPlanByIdResponseSchema,
        400: ErrorSchema,
        401: ErrorSchema,
        403: ErrorSchema,
        404: ErrorSchema,
        500: ErrorSchema
      }
    },
    handler: async (request, reply) => {
      const getWorkoutPlanById = makeGetWorkoutPlanById();
      const session = await auth.api.getSession({
        headers: fromNodeHeaders2(request.headers)
      });
      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED"
        });
      }
      try {
        const result = await getWorkoutPlanById.execute({
          userId: session.user.id,
          workoutPlanId: request.params.id
        });
        return reply.status(200).send(result);
      } catch (error) {
        if (error instanceof ForbiddenError) {
          return reply.status(403).send({
            error: error.message,
            code: "FORBIDDEN"
          });
        }
        if (error instanceof NotFoundError) {
          return reply.status(404).send({
            error: error.message,
            code: "NOT_FOUND"
          });
        }
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
  });
  app2.withTypeProvider().route({
    method: "POST",
    url: "/",
    schema: {
      operationId: "createWorkoutPlan",
      tags: ["Workout Plans"],
      summary: "Create a new workout plan",
      body: WorkoutPlanSchema.omit({ id: true }),
      response: {
        201: WorkoutPlanSchema,
        400: ErrorSchema,
        401: ErrorSchema,
        404: ErrorSchema,
        500: ErrorSchema
      }
    },
    handler: async (request, reply) => {
      const createWorkoutPlan = makeCreateWorkoutPlan();
      const session = await auth.api.getSession({
        headers: fromNodeHeaders2(request.headers)
      });
      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED"
        });
      }
      try {
        await createWorkoutPlan.execute({
          userId: session.user.id,
          name: request.body.name,
          workoutDays: request.body.workoutDays
        });
        return reply.status(201);
      } catch (error) {
        if (error instanceof NotFoundError) {
          return reply.status(404).send({
            error: error.message,
            code: "NOT_FOUND"
          });
        }
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
  });
  app2.withTypeProvider().route({
    method: "POST",
    url: "/:workoutPlanId/days/:workoutDayId/sessions",
    schema: {
      operationId: "startWorkoutSession",
      tags: ["Workout Sessions"],
      summary: "Start a workout session for a workout day",
      params: StartWorkoutSessionParamsSchema,
      response: {
        201: StartWorkoutSessionResponseSchema,
        400: ErrorSchema,
        401: ErrorSchema,
        403: ErrorSchema,
        404: ErrorSchema,
        409: ErrorSchema,
        500: ErrorSchema
      }
    },
    handler: async (request, reply) => {
      const startWorkoutSession = makeStartWorkoutSession();
      const session = await auth.api.getSession({
        headers: fromNodeHeaders2(request.headers)
      });
      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED"
        });
      }
      try {
        const result = await startWorkoutSession.execute({
          userId: session.user.id,
          workoutPlanId: request.params.workoutPlanId,
          workoutDayId: request.params.workoutDayId
        });
        return reply.status(201).send(result);
      } catch (error) {
        if (error instanceof ForbiddenError) {
          return reply.status(403).send({
            error: error.message,
            code: "FORBIDDEN"
          });
        }
        if (error instanceof NotFoundError) {
          return reply.status(404).send({
            error: error.message,
            code: "NOT_FOUND"
          });
        }
        if (error instanceof ConflictError) {
          return reply.status(409).send({
            error: error.message,
            code: "CONFLICT"
          });
        }
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
  });
  app2.withTypeProvider().route({
    method: "PATCH",
    url: "/:workoutPlanId/days/:workoutDayId/sessions/:workoutSessionId",
    schema: {
      operationId: "updateWorkoutSession",
      tags: ["Workout Sessions"],
      summary: "Update a workout session",
      params: UpdateWorkoutSessionParamsSchema,
      body: UpdateWorkoutSessionBodySchema,
      response: {
        200: UpdateWorkoutSessionResponseSchema,
        400: ErrorSchema,
        401: ErrorSchema,
        403: ErrorSchema,
        404: ErrorSchema,
        500: ErrorSchema
      }
    },
    handler: async (request, reply) => {
      const updateWorkoutSession = makeUpdateWorkoutSession();
      const session = await auth.api.getSession({
        headers: fromNodeHeaders2(request.headers)
      });
      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED"
        });
      }
      try {
        const result = await updateWorkoutSession.execute({
          userId: session.user.id,
          workoutPlanId: request.params.workoutPlanId,
          workoutDayId: request.params.workoutDayId,
          workoutSessionId: request.params.workoutSessionId,
          completedAt: request.body.completedAt
        });
        return reply.status(200).send(result);
      } catch (error) {
        if (error instanceof ForbiddenError) {
          return reply.status(403).send({
            error: error.message,
            code: "FORBIDDEN"
          });
        }
        if (error instanceof NotFoundError) {
          return reply.status(404).send({
            error: error.message,
            code: "NOT_FOUND"
          });
        }
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
  });
}

// src/routes/stats.ts
import { fromNodeHeaders as fromNodeHeaders3 } from "better-auth/node";

// src/use-cases/GetStats.ts
var import_dayjs3 = __toESM(require_dayjs_min(), 1);
var import_utc2 = __toESM(require_utc(), 1);
import_dayjs3.default.extend(import_utc2.default);
var GetStats = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const fromDate = import_dayjs3.default.utc(data.from);
    const toDate = import_dayjs3.default.utc(data.to);
    if (!fromDate.isValid() || !toDate.isValid()) {
      throw new Error("Invalid date range");
    }
    if (fromDate.isAfter(toDate)) {
      throw new Error("Invalid date range");
    }
    const workoutSessions = await this.repository.findWorkoutSessionsInRange({
      userId: data.userId,
      startsAtGte: fromDate.startOf("day").toDate(),
      startsAtLte: toDate.endOf("day").toDate()
    });
    const consistencyByDay = {};
    const completedDays = /* @__PURE__ */ new Set();
    let completedWorkoutsCount = 0;
    let totalTimeInSeconds = 0;
    for (const workoutSession of workoutSessions) {
      const dayKey = import_dayjs3.default.utc(workoutSession.startedAt).format("YYYY-MM-DD");
      if (!consistencyByDay[dayKey]) {
        consistencyByDay[dayKey] = {
          workoutDayCompleted: false,
          workoutDayStarted: false
        };
      }
      const dayConsistency = consistencyByDay[dayKey];
      dayConsistency.workoutDayStarted = true;
      if (workoutSession.completedAt) {
        dayConsistency.workoutDayCompleted = true;
        completedWorkoutsCount++;
        completedDays.add(dayKey);
        const durationInSeconds = import_dayjs3.default.utc(workoutSession.completedAt).diff(import_dayjs3.default.utc(workoutSession.startedAt), "second");
        if (durationInSeconds > 0) {
          totalTimeInSeconds += durationInSeconds;
        }
      }
    }
    const totalSessionsCount = workoutSessions.length;
    const conclusionRate = totalSessionsCount === 0 ? 0 : completedWorkoutsCount / totalSessionsCount;
    const sortedCompletedDays = Array.from(completedDays).sort();
    let workoutStreak = 0;
    let currentStreak = 0;
    let previousDay = null;
    for (const completedDay of sortedCompletedDays) {
      const currentDay = import_dayjs3.default.utc(completedDay);
      if (!previousDay) {
        currentStreak = 1;
      } else {
        const diffInDays = currentDay.diff(previousDay, "day");
        currentStreak = diffInDays === 1 ? currentStreak + 1 : 1;
      }
      if (currentStreak > workoutStreak) {
        workoutStreak = currentStreak;
      }
      previousDay = currentDay;
    }
    return {
      workoutStreak,
      consistencyByDay,
      completedWorkoutsCount,
      conclusionRate,
      totalTimeInSeconds
    };
  }
};

// src/use-cases/factories/make-get-stats.ts
function makeGetStats() {
  return new GetStats(new PrismaWorkoutRepository());
}

// src/routes/stats.ts
async function statsRoutes(app2) {
  app2.withTypeProvider().route({
    method: "GET",
    url: "/",
    schema: {
      operationId: "getStats",
      tags: ["Stats"],
      summary: "Get workout stats by period",
      querystring: GetStatsQuerySchema,
      response: {
        200: GetStatsResponseSchema,
        400: ErrorSchema,
        401: ErrorSchema,
        500: ErrorSchema
      }
    },
    handler: async (request, reply) => {
      const getStats = makeGetStats();
      const session = await auth.api.getSession({
        headers: fromNodeHeaders3(request.headers)
      });
      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED"
        });
      }
      try {
        const result = await getStats.execute({
          userId: session.user.id,
          from: request.query.from,
          to: request.query.to
        });
        return reply.status(200).send(result);
      } catch (error) {
        if (error instanceof Error && error.message === "Invalid date range") {
          return reply.status(400).send({
            error: error.message,
            code: "BAD_REQUEST"
          });
        }
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
  });
}

// src/routes/me.ts
import { fromNodeHeaders as fromNodeHeaders4 } from "better-auth/node";

// src/repositories/prisma/PrismaUserTrainDataRepository.ts
var PrismaUserTrainDataRepository = class {
  async upsert(data) {
    const rows = await prisma.$queryRaw`
      INSERT INTO "user_train_data" (
        "userId",
        "weightInGrams",
        "heightInCentimeters",
        "age",
        "bodyFatPercentage",
        "createdAt",
        "updatedAt"
      ) VALUES (
        ${data.userId},
        ${data.weightInGrams},
        ${data.heightInCentimeters},
        ${data.age},
        ${data.bodyFatPercentage},
        NOW(),
        NOW()
      )
      ON CONFLICT ("userId")
      DO UPDATE SET
        "weightInGrams" = EXCLUDED."weightInGrams",
        "heightInCentimeters" = EXCLUDED."heightInCentimeters",
        "age" = EXCLUDED."age",
        "bodyFatPercentage" = EXCLUDED."bodyFatPercentage",
        "updatedAt" = NOW()
      RETURNING
        "userId",
        "weightInGrams",
        "heightInCentimeters",
        "age",
        "bodyFatPercentage"
    `;
    return rows[0];
  }
  async findByUserId(userId) {
    const rows = await prisma.$queryRaw`
      SELECT
        utd."userId" as "userId",
        utd."weightInGrams" as "weightInGrams",
        utd."heightInCentimeters" as "heightInCentimeters",
        utd."age" as "age",
        utd."bodyFatPercentage" as "bodyFatPercentage"
      FROM "user_train_data" utd
      JOIN "user" u ON u."id" = utd."userId"
      WHERE utd."userId" = ${userId}
      LIMIT 1
    `;
    if (!rows[0]) {
      return null;
    }
    return rows[0];
  }
};

// src/use-cases/GetUserTrainData.ts
var GetUserTrainData = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const result = await this.repository.findByUserId(data.userId);
    if (!result) {
      return {
        userId: data.userId,
        weightInGrams: 0,
        heightInCentimeters: 0,
        age: 0,
        bodyFatPercentage: 0
      };
    }
    return result;
  }
};

// src/use-cases/factories/make-get-user-train-data.ts
function makeGetUserTrainData() {
  return new GetUserTrainData(new PrismaUserTrainDataRepository());
}

// src/routes/me.ts
async function meRoutes(app2) {
  app2.withTypeProvider().route({
    method: "GET",
    url: "/",
    schema: {
      operationId: "getMe",
      tags: ["Users"],
      summary: "Get authenticated user train data",
      response: {
        200: GetMeResponseSchema,
        401: ErrorSchema,
        500: ErrorSchema
      }
    },
    handler: async (request, reply) => {
      const getUserTrainData = makeGetUserTrainData();
      const session = await auth.api.getSession({
        headers: fromNodeHeaders4(request.headers)
      });
      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED"
        });
      }
      try {
        const result = await getUserTrainData.execute({
          userId: session.user.id
        });
        return reply.status(200).send(result);
      } catch (error) {
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    }
  });
}

// src/routes/ai.ts
import { openai } from "@ai-sdk/openai";
import { fromNodeHeaders as fromNodeHeaders5 } from "better-auth/node";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool
} from "ai";
import z3 from "zod";

// src/use-cases/ListWorkoutPlans.ts
var ListWorkoutPlans = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    return this.repository.findWorkoutPlansByUserId(data.userId);
  }
};

// src/use-cases/factories/make-list-workout-plans.ts
function makeListWorkoutPlans() {
  return new ListWorkoutPlans(new PrismaWorkoutRepository());
}

// src/use-cases/UpsertUserTrainData.ts
var UpsertUserTrainData = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    const userTrainData = await this.repository.upsert(data);
    return {
      userId: userTrainData.userId,
      weightInGrams: userTrainData.weightInGrams,
      heightInCentimeters: userTrainData.heightInCentimeters,
      age: userTrainData.age,
      bodyFatPercentage: userTrainData.bodyFatPercentage
    };
  }
};

// src/use-cases/factories/make-upsert-user-train-data.ts
function makeUpsertUserTrainData() {
  return new UpsertUserTrainData(new PrismaUserTrainDataRepository());
}

// src/routes/ai.ts
var aiSystemPrompt = `Voc\xEA \xE9 um personal trainer virtual especialista em montar planos de treino.

Regras obrigat\xF3rias:
- Tom amig\xE1vel e motivador, linguagem simples, sem jarg\xF5es t\xE9cnicos.
- Respostas curtas e objetivas.
- SEMPRE chame a tool getUserTrainData antes de qualquer intera\xE7\xE3o com o usu\xE1rio.
- Se getUserTrainData retornar null: fa\xE7a uma \xFAnica mensagem com perguntas simples e diretas pedindo nome, peso (kg), altura (cm), idade e % de gordura corporal.
- Depois de receber os dados, salve com updateUserTrainData. O peso deve ser convertido de kg para gramas antes de chamar a tool.
- Se getUserTrainData retornar dados: cumprimente o usu\xE1rio pelo nome.

Para criar plano de treino:
- Fa\xE7a poucas perguntas e de forma simples: objetivo, dias dispon\xEDveis por semana e restri\xE7\xF5es f\xEDsicas/les\xF5es.
- O plano precisa ter exatamente 7 dias: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY.
- Dias sem treino devem ser enviados com isRest: true, exercises: [], estimatedDurationInSeconds: 0.
- Sempre chame a tool createWorkoutPlan para criar o plano.

Organiza\xE7\xE3o por dias dispon\xEDveis (splits):
- 2-3 dias/semana: Full Body ou ABC (A: Peito+Tr\xEDceps, B: Costas+B\xEDceps, C: Pernas+Ombros)
- 4 dias/semana: Upper/Lower (preferencial, 2x por grupo) ou ABCD (A: Peito+Tr\xEDceps, B: Costas+B\xEDceps, C: Pernas, D: Ombros+Abd\xF4men)
- 5 dias/semana: PPLUL (Push/Pull/Legs + Upper/Lower)
- 6 dias/semana: PPL 2x (Push/Pull/Legs repetido)

Princ\xEDpios gerais:
- Agrupe m\xFAsculos sin\xE9rgicos (peito+tr\xEDceps, costas+b\xEDceps).
- Exerc\xEDcios compostos primeiro, isoladores depois.
- 4 a 8 exerc\xEDcios por sess\xE3o.
- 3-4 s\xE9ries por exerc\xEDcio.
- Faixa de reps: hipertrofia 8-12, for\xE7a 4-6.
- Descanso entre s\xE9ries: 60-90s (hipertrofia), 2-3min (compostos pesados).
- Evite repetir o mesmo grupo muscular em dias consecutivos.
- Use nomes descritivos para os dias (ex.: "Superior A - Peito e Costas", "Descanso").

coverImageUrl (obrigat\xF3rio em todos os dias):
- Dias de foco superior (peito, costas, ombros, b\xEDceps, tr\xEDceps, push, pull, upper, full body):
  1) https://i.pinimg.com/736x/9f/77/90/9f77903b3a6487be622faab2c39840c1.jpg
  2) https://i.pinimg.com/736x/e0/ac/c4/e0acc4422551a85fcb9e8baad8ca8167.jpg
- Dias de foco inferior (pernas, gl\xFAteos, quadr\xEDceps, posterior, panturrilha, legs, lower):
  1) https://i.pinimg.com/736x/f1/a2/8f/f1a28ffee3fdc8aa4a1501ce18d37787.jpg
  2) https://i.pinimg.com/736x/0b/01/fa/0b01fa8f2c3430648d3524c75cb3cca8.jpg
- Alterne entre as 2 op\xE7\xF5es de cada categoria para variar.
- Dias de descanso usam imagem de superior.`;
var aiRoutes = async (app2) => {
  app2.post("/ai", async (request, reply) => {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders5(request.headers)
    });
    if (!session) {
      return reply.status(401).send({
        error: "Unauthorized",
        code: "UNAUTHORIZED"
      });
    }
    const getUserTrainData = makeGetUserTrainData();
    const upsertUserTrainData = makeUpsertUserTrainData();
    const listWorkoutPlans = makeListWorkoutPlans();
    const createWorkoutPlan = makeCreateWorkoutPlan();
    const { messages } = request.body;
    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: aiSystemPrompt,
      tools: {
        getUserTrainData: tool({
          description: "Busca os dados de treino do usu\xE1rio autenticado. Deve ser chamada primeiro.",
          inputSchema: z3.object({}),
          execute: async () => {
            return getUserTrainData.execute({
              userId: session.user.id
            });
          }
        }),
        updateUserTrainData: tool({
          description: "Atualiza os dados de treino do usu\xE1rio autenticado. O peso deve ser informado em gramas.",
          inputSchema: z3.object({
            weightInGrams: z3.number().int().positive(),
            heightInCentimeters: z3.number().int().positive(),
            age: z3.number().int().positive(),
            bodyFatPercentage: z3.number().positive()
          }),
          execute: async (input) => {
            return upsertUserTrainData.execute({
              userId: session.user.id,
              weightInGrams: input.weightInGrams,
              heightInCentimeters: input.heightInCentimeters,
              age: input.age,
              bodyFatPercentage: input.bodyFatPercentage
            });
          }
        }),
        getWorkoutPlans: tool({
          description: "Lista os planos de treino do usu\xE1rio autenticado para contexto.",
          inputSchema: z3.object({}),
          execute: async () => {
            return listWorkoutPlans.execute({
              userId: session.user.id
            });
          }
        }),
        createWorkoutPlan: tool({
          description: "Cria um plano de treino completo com 7 dias (MONDAY a SUNDAY).",
          inputSchema: z3.object({
            name: z3.string().trim().min(1),
            workoutDays: z3.array(
              z3.object({
                name: z3.string().trim().min(1),
                weekDay: z3.enum(WeekDay),
                isRest: z3.boolean(),
                estimatedDurationInSeconds: z3.number().int().min(0),
                coverImageUrl: z3.string().url(),
                exercises: z3.array(
                  z3.object({
                    order: z3.number().int().min(0),
                    name: z3.string().trim().min(1),
                    sets: z3.number().int().min(1),
                    reps: z3.number().int().min(1),
                    restTimeInSeconds: z3.number().int().min(1)
                  })
                )
              })
            ).length(7)
          }),
          execute: async (input) => {
            return createWorkoutPlan.execute({
              userId: session.user.id,
              name: input.name,
              workoutDays: input.workoutDays
            });
          }
        })
      },
      stopWhen: stepCountIs(5),
      messages: await convertToModelMessages(messages)
    });
    const response = result.toUIMessageStreamResponse();
    reply.raw.writeHead(
      response.status,
      Object.fromEntries(response.headers.entries())
    );
    const reader = response.body.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply.raw.write(value);
      }
    } finally {
      reply.raw.end();
    }
    return reply;
  });
};

// src/app.ts
import { fastifyCors } from "@fastify/cors";
var app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname"
      }
    }
  }
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
await generateDocumentation(app);
await app.register(fastifyCors, {
  origin: ["http://localhost:3000"],
  credentials: true
});
app.register(homeRoutes, { prefix: "/home" });
app.register(workoutPlanRoutes, { prefix: "/workout-plans" });
app.register(statsRoutes);
app.register(meRoutes, { prefix: "/me" });
app.register(aiRoutes);
app.route({
  schema: {
    hide: true
    // Hide from documentation
  },
  method: ["GET", "POST"],
  url: "/api/auth/*",
  async handler(request, reply) {
    try {
      const url = new URL(request.url, `http://${request.headers.host}`);
      const headers = new Headers();
      Object.entries(request.headers).forEach(([key, value]) => {
        if (value) headers.append(key, value.toString());
      });
      const req = new Request(url.toString(), {
        method: request.method,
        headers,
        ...request.body ? { body: JSON.stringify(request.body) } : {}
      });
      const response = await auth.handler(req);
      reply.status(response.status);
      response.headers.forEach((value, key) => reply.header(key, value));
      reply.send(response.body ? await response.text() : null);
    } catch (error) {
      app.log.error;
      reply.status(500).send({
        error: "Internal authentication error",
        code: "AUTH_FAILURE"
      });
    }
  }
});

// src/server.ts
app.listen(
  {
    port: env.PORT
  },
  () => app.log.info(`Server is running on http://localhost:${env.PORT}`)
);
