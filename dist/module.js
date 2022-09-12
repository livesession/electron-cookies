import {get as $hgUW1$get} from "psl";
import * as $hgUW1$toughcookiewebstoragestore from "tough-cookie-web-storage-store";
import * as $hgUW1$punycode from "punycode/";
import * as $hgUW1$urlparse from "url-parse";
import {fromCallback as $hgUW1$fromCallback} from "universalify";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire01eb"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire01eb"] = parcelRequire;
}
parcelRequire.register("i0lw4", function(module, exports) {

$parcel$export(module.exports, "permuteDomain", () => $d1b8eac54287031e$export$f1f80cca8f9e89f1, (v) => $d1b8eac54287031e$export$f1f80cca8f9e89f1 = v);
var $d1b8eac54287031e$export$f1f80cca8f9e89f1;
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */ "use strict";

var $bxdXg = parcelRequire("bxdXg");
// Gives the permutation of all possible domainMatch()es of a given domain. The
// array is in shortest-to-longest order.  Handy for indexing.
function $d1b8eac54287031e$var$permuteDomain(domain, allowSpecialUseDomain) {
    const pubSuf = $bxdXg.getPublicSuffix(domain, {
        allowSpecialUseDomain: allowSpecialUseDomain
    });
    if (!pubSuf) return null;
    if (pubSuf == domain) return [
        domain
    ];
    // Nuke trailing dot
    if (domain.slice(-1) == ".") domain = domain.slice(0, -1);
    const prefix = domain.slice(0, -(pubSuf.length + 1)); // ".example.com"
    const parts = prefix.split(".").reverse();
    let cur = pubSuf;
    const permutations = [
        cur
    ];
    while(parts.length){
        cur = `${parts.shift()}.${cur}`;
        permutations.push(cur);
    }
    return permutations;
}
$d1b8eac54287031e$export$f1f80cca8f9e89f1 = $d1b8eac54287031e$var$permuteDomain;

});
parcelRequire.register("bxdXg", function(module, exports) {

$parcel$export(module.exports, "getPublicSuffix", () => $865d99e7ed11719f$export$bf99853f34268f63, (v) => $865d99e7ed11719f$export$bf99853f34268f63 = v);
var $865d99e7ed11719f$export$bf99853f34268f63;
/*!
 * Copyright (c) 2018, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */ "use strict";

// RFC 6761
const $865d99e7ed11719f$var$SPECIAL_USE_DOMAINS = [
    "local",
    "example",
    "invalid",
    "localhost",
    "test"
];
const $865d99e7ed11719f$var$SPECIAL_TREATMENT_DOMAINS = [
    "localhost",
    "invalid"
];
function $865d99e7ed11719f$var$getPublicSuffix(domain, options = {}) {
    const domainParts = domain.split(".");
    const topLevelDomain = domainParts[domainParts.length - 1];
    const allowSpecialUseDomain = !!options.allowSpecialUseDomain;
    const ignoreError = !!options.ignoreError;
    if (allowSpecialUseDomain && $865d99e7ed11719f$var$SPECIAL_USE_DOMAINS.includes(topLevelDomain)) {
        if (domainParts.length > 1) {
            const secondLevelDomain = domainParts[domainParts.length - 2];
            // In aforementioned example, the eTLD/pubSuf will be apple.localhost
            return `${secondLevelDomain}.${topLevelDomain}`;
        } else if ($865d99e7ed11719f$var$SPECIAL_TREATMENT_DOMAINS.includes(topLevelDomain)) // For a single word special use domain, e.g. 'localhost' or 'invalid', per RFC 6761,
        // "Application software MAY recognize {localhost/invalid} names as special, or
        // MAY pass them to name resolution APIs as they would for other domain names."
        return `${topLevelDomain}`;
    }
    if (!ignoreError && $865d99e7ed11719f$var$SPECIAL_USE_DOMAINS.includes(topLevelDomain)) throw new Error(`Cookie has domain set to the public suffix "${topLevelDomain}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}.`);
    return $hgUW1$get(domain);
}
$865d99e7ed11719f$export$bf99853f34268f63 = $865d99e7ed11719f$var$getPublicSuffix;

});


var $772ae331d060bd6f$export$83d89fbfd8236492;
var $772ae331d060bd6f$export$991f683f69795c48;
var $772ae331d060bd6f$export$bd0cf18531183c14;
var $772ae331d060bd6f$export$390f32400eaf98c9;
var $772ae331d060bd6f$export$2e29447affdcf172;
var $772ae331d060bd6f$export$6b862160d295c8e;
var $772ae331d060bd6f$export$3ae94a2503e890a1;
var $772ae331d060bd6f$export$98e6a39c04603d36;
var $772ae331d060bd6f$export$21625637effda04;
var $772ae331d060bd6f$export$fb0a6b04e00abe8b;
var $772ae331d060bd6f$export$d48ad89f7e11a603;
var $772ae331d060bd6f$export$a47cd0eddf882894;
var $772ae331d060bd6f$export$bf99853f34268f63;
var $772ae331d060bd6f$export$fda474babbb357e1;
var $772ae331d060bd6f$export$f1f80cca8f9e89f1;
var $772ae331d060bd6f$export$c8d0c35e8ea40e9;
var $772ae331d060bd6f$export$a11b3844cdb650ec;
var $772ae331d060bd6f$export$163139209becb26f;
var $772ae331d060bd6f$export$cd3fb52e3e28b842;
/*!
 * Copyright (c) 2015-2020, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */ "use strict";



var $bxdXg = parcelRequire("bxdXg");
var $2e0a2016353ea467$export$390f32400eaf98c9;
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */ "use strict";
/*jshint unused:false */ class $2e0a2016353ea467$var$Store {
    constructor(){
        this.synchronous = false;
    }
    findCookie(domain, path, key, cb) {
        throw new Error("findCookie is not implemented");
    }
    findCookies(domain, path, allowSpecialUseDomain, cb) {
        throw new Error("findCookies is not implemented");
    }
    putCookie(cookie, cb) {
        throw new Error("putCookie is not implemented");
    }
    updateCookie(oldCookie, newCookie, cb) {
        // recommended default implementation:
        // return this.putCookie(newCookie, cb);
        throw new Error("updateCookie is not implemented");
    }
    removeCookie(domain, path, key, cb) {
        throw new Error("removeCookie is not implemented");
    }
    removeCookies(domain, path, cb) {
        throw new Error("removeCookies is not implemented");
    }
    removeAllCookies(cb) {
        throw new Error("removeAllCookies is not implemented");
    }
    getAllCookies(cb) {
        throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
    }
}
$2e0a2016353ea467$export$390f32400eaf98c9 = $2e0a2016353ea467$var$Store;


var $772ae331d060bd6f$require$Store = $2e0a2016353ea467$export$390f32400eaf98c9;
var $552f898d72e93af0$export$2e29447affdcf172;
var $552f898d72e93af0$export$743b0ee965e93102;
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */ "use strict";

var $552f898d72e93af0$require$fromCallback = $hgUW1$fromCallback;

var $552f898d72e93af0$require$Store = $2e0a2016353ea467$export$390f32400eaf98c9;

var $i0lw4 = parcelRequire("i0lw4");
var $552f898d72e93af0$require$permuteDomain = $i0lw4.permuteDomain;
var $3b3a9577c933bdf1$export$a47cd0eddf882894;
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */ "use strict";
/*
 * "A request-path path-matches a given cookie-path if at least one of the
 * following conditions holds:"
 */ function $3b3a9577c933bdf1$var$pathMatch(reqPath, cookiePath) {
    // "o  The cookie-path and the request-path are identical."
    if (cookiePath === reqPath) return true;
    const idx = reqPath.indexOf(cookiePath);
    if (idx === 0) {
        // "o  The cookie-path is a prefix of the request-path, and the last
        // character of the cookie-path is %x2F ("/")."
        if (cookiePath.substr(-1) === "/") return true;
        // " o  The cookie-path is a prefix of the request-path, and the first
        // character of the request-path that is not included in the cookie- path
        // is a %x2F ("/") character."
        if (reqPath.substr(cookiePath.length, 1) === "/") return true;
    }
    return false;
}
$3b3a9577c933bdf1$export$a47cd0eddf882894 = $3b3a9577c933bdf1$var$pathMatch;


var $552f898d72e93af0$require$pathMatch = $3b3a9577c933bdf1$export$a47cd0eddf882894;
var $d891dc35bfd76c50$export$99fafac3f194ee16;
var $d891dc35bfd76c50$export$c6893bc6333faa28;

function $d891dc35bfd76c50$var$requireUtil() {
    try {
        // eslint-disable-next-line no-restricted-modules
        return $d891dc35bfd76c50$import$7debb50ef11d5e0b;
    } catch (e) {
        return null;
    }
}
// for v10.12.0+
function $d891dc35bfd76c50$var$lookupCustomInspectSymbol() {
    return Symbol.for("nodejs.util.inspect.custom");
}
// for older node environments
function $d891dc35bfd76c50$var$tryReadingCustomSymbolFromUtilInspect(options) {
    const _requireUtil = options.requireUtil || $d891dc35bfd76c50$var$requireUtil;
    const util = _requireUtil();
    return util ? util.inspect.custom : null;
}
$d891dc35bfd76c50$export$99fafac3f194ee16 = function getUtilInspect(fallback, options = {}) {
    const _requireUtil = options.requireUtil || $d891dc35bfd76c50$var$requireUtil;
    const util = _requireUtil();
    return function inspect(value, showHidden, depth) {
        return util ? util.inspect(value, showHidden, depth) : fallback(value);
    };
};
$d891dc35bfd76c50$export$c6893bc6333faa28 = function getCustomInspectSymbol(options = {}) {
    const _lookupCustomInspectSymbol = options.lookupCustomInspectSymbol || $d891dc35bfd76c50$var$lookupCustomInspectSymbol;
    // get custom inspect symbol for node environments
    return _lookupCustomInspectSymbol() || $d891dc35bfd76c50$var$tryReadingCustomSymbolFromUtilInspect(options);
};


var $552f898d72e93af0$require$getCustomInspectSymbol = $d891dc35bfd76c50$export$c6893bc6333faa28;
var $552f898d72e93af0$require$getUtilInspect = $d891dc35bfd76c50$export$99fafac3f194ee16;
class $552f898d72e93af0$var$MemoryCookieStore extends $552f898d72e93af0$require$Store {
    constructor(){
        super();
        this.synchronous = true;
        this.idx = {};
        const customInspectSymbol = $552f898d72e93af0$require$getCustomInspectSymbol();
        if (customInspectSymbol) this[customInspectSymbol] = this.inspect;
    }
    inspect() {
        const util = {
            inspect: $552f898d72e93af0$require$getUtilInspect($552f898d72e93af0$var$inspectFallback)
        };
        return `{ idx: ${util.inspect(this.idx, false, 2)} }`;
    }
    findCookie(domain, path, key, cb) {
        if (!this.idx[domain]) return cb(null, undefined);
        if (!this.idx[domain][path]) return cb(null, undefined);
        return cb(null, this.idx[domain][path][key] || null);
    }
    findCookies(domain, path, allowSpecialUseDomain, cb) {
        const results = [];
        if (typeof allowSpecialUseDomain === "function") {
            cb = allowSpecialUseDomain;
            allowSpecialUseDomain = true;
        }
        if (!domain) return cb(null, []);
        let pathMatcher;
        if (!path) // null means "all paths"
        pathMatcher = function matchAll(domainIndex) {
            for(const curPath in domainIndex){
                const pathIndex = domainIndex[curPath];
                for(const key in pathIndex)results.push(pathIndex[key]);
            }
        };
        else pathMatcher = function matchRFC(domainIndex) {
            //NOTE: we should use path-match algorithm from S5.1.4 here
            //(see : https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/canonical_cookie.cc#L299)
            Object.keys(domainIndex).forEach((cookiePath)=>{
                if ($552f898d72e93af0$require$pathMatch(path, cookiePath)) {
                    const pathIndex = domainIndex[cookiePath];
                    for(const key in pathIndex)results.push(pathIndex[key]);
                }
            });
        };
        const domains = $552f898d72e93af0$require$permuteDomain(domain, allowSpecialUseDomain) || [
            domain
        ];
        const idx = this.idx;
        domains.forEach((curDomain)=>{
            const domainIndex = idx[curDomain];
            if (!domainIndex) return;
            pathMatcher(domainIndex);
        });
        cb(null, results);
    }
    putCookie(cookie, cb) {
        if (!this.idx[cookie.domain]) this.idx[cookie.domain] = {};
        if (!this.idx[cookie.domain][cookie.path]) this.idx[cookie.domain][cookie.path] = {};
        this.idx[cookie.domain][cookie.path][cookie.key] = cookie;
        cb(null);
    }
    updateCookie(oldCookie, newCookie, cb) {
        // updateCookie() may avoid updating cookies that are identical.  For example,
        // lastAccessed may not be important to some stores and an equality
        // comparison could exclude that field.
        this.putCookie(newCookie, cb);
    }
    removeCookie(domain, path, key, cb) {
        if (this.idx[domain] && this.idx[domain][path] && this.idx[domain][path][key]) delete this.idx[domain][path][key];
        cb(null);
    }
    removeCookies(domain, path, cb) {
        if (this.idx[domain]) {
            if (path) delete this.idx[domain][path];
            else delete this.idx[domain];
        }
        return cb(null);
    }
    removeAllCookies(cb) {
        this.idx = {};
        return cb(null);
    }
    getAllCookies(cb) {
        const cookies = [];
        const idx = this.idx;
        const domains = Object.keys(idx);
        domains.forEach((domain)=>{
            const paths = Object.keys(idx[domain]);
            paths.forEach((path)=>{
                const keys = Object.keys(idx[domain][path]);
                keys.forEach((key)=>{
                    if (key !== null) cookies.push(idx[domain][path][key]);
                });
            });
        });
        // Sort by creationIndex so deserializing retains the creation order.
        // When implementing your own store, this SHOULD retain the order too
        cookies.sort((a, b)=>{
            return (a.creationIndex || 0) - (b.creationIndex || 0);
        });
        cb(null, cookies);
    }
}
[
    "findCookie",
    "findCookies",
    "putCookie",
    "updateCookie",
    "removeCookie",
    "removeCookies",
    "removeAllCookies",
    "getAllCookies"
].forEach((name)=>{
    $552f898d72e93af0$var$MemoryCookieStore.prototype[name] = $552f898d72e93af0$require$fromCallback($552f898d72e93af0$var$MemoryCookieStore.prototype[name]);
});
$552f898d72e93af0$export$2e29447affdcf172 = $552f898d72e93af0$var$MemoryCookieStore;
function $552f898d72e93af0$var$inspectFallback(val) {
    const domains = Object.keys(val);
    if (domains.length === 0) return "{}";
    let result = "{\n";
    Object.keys(val).forEach((domain, i)=>{
        result += $552f898d72e93af0$var$formatDomain(domain, val[domain]);
        if (i < domains.length - 1) result += ",";
        result += "\n";
    });
    result += "}";
    return result;
}
function $552f898d72e93af0$var$formatDomain(domainName, domainValue) {
    const indent = "  ";
    let result = `${indent}'${domainName}': {\n`;
    Object.keys(domainValue).forEach((path, i, paths)=>{
        result += $552f898d72e93af0$var$formatPath(path, domainValue[path]);
        if (i < paths.length - 1) result += ",";
        result += "\n";
    });
    result += `${indent}}`;
    return result;
}
function $552f898d72e93af0$var$formatPath(pathName, pathValue) {
    const indent = "    ";
    let result = `${indent}'${pathName}': {\n`;
    Object.keys(pathValue).forEach((cookieName, i, cookieNames)=>{
        const cookie = pathValue[cookieName];
        result += `      ${cookieName}: ${cookie.inspect()}`;
        if (i < cookieNames.length - 1) result += ",";
        result += "\n";
    });
    result += `${indent}}`;
    return result;
}
$552f898d72e93af0$export$743b0ee965e93102 = $552f898d72e93af0$var$inspectFallback;


var $772ae331d060bd6f$require$MemoryCookieStore = $552f898d72e93af0$export$2e29447affdcf172;

var $772ae331d060bd6f$require$pathMatch = $3b3a9577c933bdf1$export$a47cd0eddf882894;
var $713a674841519e17$export$cd3fb52e3e28b842;
var $713a674841519e17$export$f6e2535fb5126e54;
var $713a674841519e17$export$e1fe2eb830813601;
var $713a674841519e17$export$871608497c498473;
var $713a674841519e17$export$78d1711480f95c3e;
var $713a674841519e17$export$844ec244b1367d54;
var $713a674841519e17$export$a6cdc56e425d0d0a;
var $713a674841519e17$export$a22775fa5e2eebd9;
/* ************************************************************************************
Extracted from check-types.js
https://gitlab.com/philbooth/check-types.js

MIT License

Copyright (c) 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019 Phil Booth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

************************************************************************************ */ "use strict";
/* Validation functions copied from check-types package - https://www.npmjs.com/package/check-types */ function $713a674841519e17$var$isFunction(data) {
    return typeof data === "function";
}
function $713a674841519e17$var$isNonEmptyString(data) {
    return $713a674841519e17$var$isString(data) && data !== "";
}
function $713a674841519e17$var$isDate(data) {
    return $713a674841519e17$var$isInstanceStrict(data, Date) && $713a674841519e17$var$isInteger(data.getTime());
}
function $713a674841519e17$var$isEmptyString(data) {
    return data === "" || data instanceof String && data.toString() === "";
}
function $713a674841519e17$var$isString(data) {
    return typeof data === "string" || data instanceof String;
}
function $713a674841519e17$var$isObject(data) {
    return toString.call(data) === "[object Object]";
}
function $713a674841519e17$var$isInstanceStrict(data, prototype) {
    try {
        return data instanceof prototype;
    } catch (error) {
        return false;
    }
}
function $713a674841519e17$var$isInteger(data) {
    return typeof data === "number" && data % 1 === 0;
}
/* End validation functions */ function $713a674841519e17$var$validate(bool, cb, options) {
    if (!$713a674841519e17$var$isFunction(cb)) {
        options = cb;
        cb = null;
    }
    if (!$713a674841519e17$var$isObject(options)) options = {
        Error: "Failed Check"
    };
    if (!bool) {
        if (cb) cb(new $713a674841519e17$var$ParameterError(options));
        else throw new $713a674841519e17$var$ParameterError(options);
    }
}
class $713a674841519e17$var$ParameterError extends Error {
    constructor(...params){
        super(...params);
    }
}
$713a674841519e17$export$cd3fb52e3e28b842 = $713a674841519e17$var$ParameterError;
$713a674841519e17$export$f6e2535fb5126e54 = $713a674841519e17$var$isFunction;
$713a674841519e17$export$e1fe2eb830813601 = $713a674841519e17$var$isNonEmptyString;
$713a674841519e17$export$871608497c498473 = $713a674841519e17$var$isDate;
$713a674841519e17$export$78d1711480f95c3e = $713a674841519e17$var$isEmptyString;
$713a674841519e17$export$844ec244b1367d54 = $713a674841519e17$var$isString;
$713a674841519e17$export$a6cdc56e425d0d0a = $713a674841519e17$var$isObject;
$713a674841519e17$export$a22775fa5e2eebd9 = $713a674841519e17$var$validate;


var $90e1b776f65006dc$exports = {};
// generated by genversion
$90e1b776f65006dc$exports = "4.1.2";



var $772ae331d060bd6f$require$fromCallback = $hgUW1$fromCallback;

var $772ae331d060bd6f$require$getCustomInspectSymbol = $d891dc35bfd76c50$export$c6893bc6333faa28;
// From RFC6265 S4.1.1
// note that it excludes \x3B ";"
const $772ae331d060bd6f$var$COOKIE_OCTETS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;
const $772ae331d060bd6f$var$CONTROL_CHARS = /[\x00-\x1F]/;
// From Chromium // '\r', '\n' and '\0' should be treated as a terminator in
// the "relaxed" mode, see:
// https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/parsed_cookie.cc#L60
const $772ae331d060bd6f$var$TERMINATORS = [
    "\n",
    "\r",
    "\0"
];
// RFC6265 S4.1.1 defines path value as 'any CHAR except CTLs or ";"'
// Note ';' is \x3B
const $772ae331d060bd6f$var$PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/;
// date-time parsing constants (RFC6265 S5.1.1)
const $772ae331d060bd6f$var$DATE_DELIM = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;
const $772ae331d060bd6f$var$MONTH_TO_NUM = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
};
const $772ae331d060bd6f$var$MAX_TIME = 2147483647000; // 31-bit max
const $772ae331d060bd6f$var$MIN_TIME = 0; // 31-bit min
const $772ae331d060bd6f$var$SAME_SITE_CONTEXT_VAL_ERR = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function $772ae331d060bd6f$var$checkSameSiteContext(value) {
    $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$e1fe2eb830813601(value), value);
    const context = String(value).toLowerCase();
    if (context === "none" || context === "lax" || context === "strict") return context;
    else return null;
}
const $772ae331d060bd6f$var$PrefixSecurityEnum = Object.freeze({
    SILENT: "silent",
    STRICT: "strict",
    DISABLED: "unsafe-disabled"
});
// Dumped from ip-regex@4.0.0, with the following changes:
// * all capturing groups converted to non-capturing -- "(?:)"
// * support for IPv6 Scoped Literal ("%eth1") removed
// * lowercase hexadecimal only
const $772ae331d060bd6f$var$IP_REGEX_LOWERCASE = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
const $772ae331d060bd6f$var$IP_V6_REGEX = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
const $772ae331d060bd6f$var$IP_V6_REGEX_OBJECT = new RegExp(`^${$772ae331d060bd6f$var$IP_V6_REGEX}$`);
/*
 * Parses a Natural number (i.e., non-negative integer) with either the
 *    <min>*<max>DIGIT ( non-digit *OCTET )
 * or
 *    <min>*<max>DIGIT
 * grammar (RFC6265 S5.1.1).
 *
 * The "trailingOK" boolean controls if the grammar accepts a
 * "( non-digit *OCTET )" trailer.
 */ function $772ae331d060bd6f$var$parseDigits(token, minDigits, maxDigits, trailingOK) {
    let count = 0;
    while(count < token.length){
        const c = token.charCodeAt(count);
        // "non-digit = %x00-2F / %x3A-FF"
        if (c <= 0x2f || c >= 0x3a) break;
        count++;
    }
    // constrain to a minimum and maximum number of digits.
    if (count < minDigits || count > maxDigits) return null;
    if (!trailingOK && count != token.length) return null;
    return parseInt(token.substr(0, count), 10);
}
function $772ae331d060bd6f$var$parseTime(token) {
    const parts = token.split(":");
    const result = [
        0,
        0,
        0
    ];
    /* RF6256 S5.1.1:
   *      time            = hms-time ( non-digit *OCTET )
   *      hms-time        = time-field ":" time-field ":" time-field
   *      time-field      = 1*2DIGIT
   */ if (parts.length !== 3) return null;
    for(let i = 0; i < 3; i++){
        // "time-field" must be strictly "1*2DIGIT", HOWEVER, "hms-time" can be
        // followed by "( non-digit *OCTET )" so therefore the last time-field can
        // have a trailer
        const trailingOK = i == 2;
        const num = $772ae331d060bd6f$var$parseDigits(parts[i], 1, 2, trailingOK);
        if (num === null) return null;
        result[i] = num;
    }
    return result;
}
function $772ae331d060bd6f$var$parseMonth(token) {
    token = String(token).substr(0, 3).toLowerCase();
    const num = $772ae331d060bd6f$var$MONTH_TO_NUM[token];
    return num >= 0 ? num : null;
}
/*
 * RFC6265 S5.1.1 date parser (see RFC for full grammar)
 */ function $772ae331d060bd6f$var$parseDate(str) {
    if (!str) return;
    /* RFC6265 S5.1.1:
   * 2. Process each date-token sequentially in the order the date-tokens
   * appear in the cookie-date
   */ const tokens = str.split($772ae331d060bd6f$var$DATE_DELIM);
    if (!tokens) return;
    let hour = null;
    let minute = null;
    let second = null;
    let dayOfMonth = null;
    let month = null;
    let year = null;
    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i].trim();
        if (!token.length) continue;
        let result;
        /* 2.1. If the found-time flag is not set and the token matches the time
     * production, set the found-time flag and set the hour- value,
     * minute-value, and second-value to the numbers denoted by the digits in
     * the date-token, respectively.  Skip the remaining sub-steps and continue
     * to the next date-token.
     */ if (second === null) {
            result = $772ae331d060bd6f$var$parseTime(token);
            if (result) {
                hour = result[0];
                minute = result[1];
                second = result[2];
                continue;
            }
        }
        /* 2.2. If the found-day-of-month flag is not set and the date-token matches
     * the day-of-month production, set the found-day-of- month flag and set
     * the day-of-month-value to the number denoted by the date-token.  Skip
     * the remaining sub-steps and continue to the next date-token.
     */ if (dayOfMonth === null) {
            // "day-of-month = 1*2DIGIT ( non-digit *OCTET )"
            result = $772ae331d060bd6f$var$parseDigits(token, 1, 2, true);
            if (result !== null) {
                dayOfMonth = result;
                continue;
            }
        }
        /* 2.3. If the found-month flag is not set and the date-token matches the
     * month production, set the found-month flag and set the month-value to
     * the month denoted by the date-token.  Skip the remaining sub-steps and
     * continue to the next date-token.
     */ if (month === null) {
            result = $772ae331d060bd6f$var$parseMonth(token);
            if (result !== null) {
                month = result;
                continue;
            }
        }
        /* 2.4. If the found-year flag is not set and the date-token matches the
     * year production, set the found-year flag and set the year-value to the
     * number denoted by the date-token.  Skip the remaining sub-steps and
     * continue to the next date-token.
     */ if (year === null) {
            // "year = 2*4DIGIT ( non-digit *OCTET )"
            result = $772ae331d060bd6f$var$parseDigits(token, 2, 4, true);
            if (result !== null) {
                year = result;
                /* From S5.1.1:
         * 3.  If the year-value is greater than or equal to 70 and less
         * than or equal to 99, increment the year-value by 1900.
         * 4.  If the year-value is greater than or equal to 0 and less
         * than or equal to 69, increment the year-value by 2000.
         */ if (year >= 70 && year <= 99) year += 1900;
                else if (year >= 0 && year <= 69) year += 2000;
            }
        }
    }
    /* RFC 6265 S5.1.1
   * "5. Abort these steps and fail to parse the cookie-date if:
   *     *  at least one of the found-day-of-month, found-month, found-
   *        year, or found-time flags is not set,
   *     *  the day-of-month-value is less than 1 or greater than 31,
   *     *  the year-value is less than 1601,
   *     *  the hour-value is greater than 23,
   *     *  the minute-value is greater than 59, or
   *     *  the second-value is greater than 59.
   *     (Note that leap seconds cannot be represented in this syntax.)"
   *
   * So, in order as above:
   */ if (dayOfMonth === null || month === null || year === null || second === null || dayOfMonth < 1 || dayOfMonth > 31 || year < 1601 || hour > 23 || minute > 59 || second > 59) return;
    return new Date(Date.UTC(year, month, dayOfMonth, hour, minute, second));
}
function $772ae331d060bd6f$var$formatDate(date) {
    $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$871608497c498473(date), date);
    return date.toUTCString();
}
// S5.1.2 Canonicalized Host Names
function $772ae331d060bd6f$var$canonicalDomain(str) {
    if (str == null) return null;
    str = str.trim().replace(/^\./, ""); // S4.1.2.3 & S5.2.3: ignore leading .
    if ($772ae331d060bd6f$var$IP_V6_REGEX_OBJECT.test(str)) str = str.replace("[", "").replace("]", "");
    // convert to IDN if any non-ASCII characters
    if ($hgUW1$punycode && /[^\u0001-\u007f]/.test(str)) str = $hgUW1$punycode.toASCII(str);
    return str.toLowerCase();
}
// S5.1.3 Domain Matching
function $772ae331d060bd6f$var$domainMatch(str, domStr, canonicalize) {
    if (str == null || domStr == null) return null;
    if (canonicalize !== false) {
        str = $772ae331d060bd6f$var$canonicalDomain(str);
        domStr = $772ae331d060bd6f$var$canonicalDomain(domStr);
    }
    /*
   * S5.1.3:
   * "A string domain-matches a given domain string if at least one of the
   * following conditions hold:"
   *
   * " o The domain string and the string are identical. (Note that both the
   * domain string and the string will have been canonicalized to lower case at
   * this point)"
   */ if (str == domStr) return true;
    /* " o All of the following [three] conditions hold:" */ /* "* The domain string is a suffix of the string" */ const idx = str.lastIndexOf(domStr);
    if (idx <= 0) return false; // it's a non-match (-1) or prefix (0)
    // next, check it's a proper suffix
    // e.g., "a.b.c".indexOf("b.c") === 2
    // 5 === 3+2
    if (str.length !== domStr.length + idx) return false; // it's not a suffix
    /* "  * The last character of the string that is not included in the
   * domain string is a %x2E (".") character." */ if (str.substr(idx - 1, 1) !== ".") return false; // doesn't align on "."
    /* "  * The string is a host name (i.e., not an IP address)." */ if ($772ae331d060bd6f$var$IP_REGEX_LOWERCASE.test(str)) return false; // it's an IP address
    return true;
}
// RFC6265 S5.1.4 Paths and Path-Match
/*
 * "The user agent MUST use an algorithm equivalent to the following algorithm
 * to compute the default-path of a cookie:"
 *
 * Assumption: the path (and not query part or absolute uri) is passed in.
 */ function $772ae331d060bd6f$var$defaultPath(path) {
    // "2. If the uri-path is empty or if the first character of the uri-path is not
    // a %x2F ("/") character, output %x2F ("/") and skip the remaining steps.
    if (!path || path.substr(0, 1) !== "/") return "/";
    // "3. If the uri-path contains no more than one %x2F ("/") character, output
    // %x2F ("/") and skip the remaining step."
    if (path === "/") return path;
    const rightSlash = path.lastIndexOf("/");
    if (rightSlash === 0) return "/";
    // "4. Output the characters of the uri-path from the first character up to,
    // but not including, the right-most %x2F ("/")."
    return path.slice(0, rightSlash);
}
function $772ae331d060bd6f$var$trimTerminator(str) {
    if ($713a674841519e17$export$78d1711480f95c3e(str)) return str;
    for(let t = 0; t < $772ae331d060bd6f$var$TERMINATORS.length; t++){
        const terminatorIdx = str.indexOf($772ae331d060bd6f$var$TERMINATORS[t]);
        if (terminatorIdx !== -1) str = str.substr(0, terminatorIdx);
    }
    return str;
}
function $772ae331d060bd6f$var$parseCookiePair(cookiePair, looseMode) {
    cookiePair = $772ae331d060bd6f$var$trimTerminator(cookiePair);
    $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$844ec244b1367d54(cookiePair), cookiePair);
    let firstEq = cookiePair.indexOf("=");
    if (looseMode) {
        if (firstEq === 0) {
            // '=' is immediately at start
            cookiePair = cookiePair.substr(1);
            firstEq = cookiePair.indexOf("="); // might still need to split on '='
        }
    } else {
        // non-loose mode
        if (firstEq <= 0) // no '=' or is at start
        return; // needs to have non-empty "cookie-name"
    }
    let cookieName, cookieValue;
    if (firstEq <= 0) {
        cookieName = "";
        cookieValue = cookiePair.trim();
    } else {
        cookieName = cookiePair.substr(0, firstEq).trim();
        cookieValue = cookiePair.substr(firstEq + 1).trim();
    }
    if ($772ae331d060bd6f$var$CONTROL_CHARS.test(cookieName) || $772ae331d060bd6f$var$CONTROL_CHARS.test(cookieValue)) return;
    const c = new $772ae331d060bd6f$var$Cookie();
    c.key = cookieName;
    c.value = cookieValue;
    return c;
}
function $772ae331d060bd6f$var$parse(str, options) {
    if (!options || typeof options !== "object") options = {};
    if ($713a674841519e17$export$78d1711480f95c3e(str) || !$713a674841519e17$export$844ec244b1367d54(str)) return null;
    str = str.trim();
    // We use a regex to parse the "name-value-pair" part of S5.2
    const firstSemi = str.indexOf(";"); // S5.2 step 1
    const cookiePair = firstSemi === -1 ? str : str.substr(0, firstSemi);
    const c = $772ae331d060bd6f$var$parseCookiePair(cookiePair, !!options.loose);
    if (!c) return;
    if (firstSemi === -1) return c;
    // S5.2.3 "unparsed-attributes consist of the remainder of the set-cookie-string
    // (including the %x3B (";") in question)." plus later on in the same section
    // "discard the first ";" and trim".
    const unparsed = str.slice(firstSemi + 1).trim();
    // "If the unparsed-attributes string is empty, skip the rest of these
    // steps."
    if (unparsed.length === 0) return c;
    /*
   * S5.2 says that when looping over the items "[p]rocess the attribute-name
   * and attribute-value according to the requirements in the following
   * subsections" for every item.  Plus, for many of the individual attributes
   * in S5.3 it says to use the "attribute-value of the last attribute in the
   * cookie-attribute-list".  Therefore, in this implementation, we overwrite
   * the previous value.
   */ const cookie_avs = unparsed.split(";");
    while(cookie_avs.length){
        const av = cookie_avs.shift().trim();
        if (av.length === 0) continue;
        const av_sep = av.indexOf("=");
        let av_key, av_value;
        if (av_sep === -1) {
            av_key = av;
            av_value = null;
        } else {
            av_key = av.substr(0, av_sep);
            av_value = av.substr(av_sep + 1);
        }
        av_key = av_key.trim().toLowerCase();
        if (av_value) av_value = av_value.trim();
        switch(av_key){
            case "expires":
                if (av_value) {
                    const exp = $772ae331d060bd6f$var$parseDate(av_value);
                    // "If the attribute-value failed to parse as a cookie date, ignore the
                    // cookie-av."
                    if (exp) // over and underflow not realistically a concern: V8's getTime() seems to
                    // store something larger than a 32-bit time_t (even with 32-bit node)
                    c.expires = exp;
                }
                break;
            case "max-age":
                if (av_value) // "If the first character of the attribute-value is not a DIGIT or a "-"
                // character ...[or]... If the remainder of attribute-value contains a
                // non-DIGIT character, ignore the cookie-av."
                {
                    if (/^-?[0-9]+$/.test(av_value)) {
                        const delta = parseInt(av_value, 10);
                        // "If delta-seconds is less than or equal to zero (0), let expiry-time
                        // be the earliest representable date and time."
                        c.setMaxAge(delta);
                    }
                }
                break;
            case "domain":
                // "If the attribute-value is empty, the behavior is undefined.  However,
                // the user agent SHOULD ignore the cookie-av entirely."
                if (av_value) {
                    // S5.2.3 "Let cookie-domain be the attribute-value without the leading %x2E
                    // (".") character."
                    const domain = av_value.trim().replace(/^\./, "");
                    if (domain) // "Convert the cookie-domain to lower case."
                    c.domain = domain.toLowerCase();
                }
                break;
            case "path":
                /*
         * "If the attribute-value is empty or if the first character of the
         * attribute-value is not %x2F ("/"):
         *   Let cookie-path be the default-path.
         * Otherwise:
         *   Let cookie-path be the attribute-value."
         *
         * We'll represent the default-path as null since it depends on the
         * context of the parsing.
         */ c.path = av_value && av_value[0] === "/" ? av_value : null;
                break;
            case "secure":
                /*
         * "If the attribute-name case-insensitively matches the string "Secure",
         * the user agent MUST append an attribute to the cookie-attribute-list
         * with an attribute-name of Secure and an empty attribute-value."
         */ c.secure = true;
                break;
            case "httponly":
                c.httpOnly = true;
                break;
            case "samesite":
                const enforcement = av_value ? av_value.toLowerCase() : "";
                switch(enforcement){
                    case "strict":
                        c.sameSite = "strict";
                        break;
                    case "lax":
                        c.sameSite = "lax";
                        break;
                    case "none":
                        c.sameSite = "none";
                        break;
                    default:
                        c.sameSite = undefined;
                        break;
                }
                break;
            default:
                c.extensions = c.extensions || [];
                c.extensions.push(av);
                break;
        }
    }
    return c;
}
/**
 *  If the cookie-name begins with a case-sensitive match for the
 *  string "__Secure-", abort these steps and ignore the cookie
 *  entirely unless the cookie's secure-only-flag is true.
 * @param cookie
 * @returns boolean
 */ function $772ae331d060bd6f$var$isSecurePrefixConditionMet(cookie) {
    $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$a6cdc56e425d0d0a(cookie), cookie);
    return !cookie.key.startsWith("__Secure-") || cookie.secure;
}
/**
 *  If the cookie-name begins with a case-sensitive match for the
 *  string "__Host-", abort these steps and ignore the cookie
 *  entirely unless the cookie meets all the following criteria:
 *    1.  The cookie's secure-only-flag is true.
 *    2.  The cookie's host-only-flag is true.
 *    3.  The cookie-attribute-list contains an attribute with an
 *        attribute-name of "Path", and the cookie's path is "/".
 * @param cookie
 * @returns boolean
 */ function $772ae331d060bd6f$var$isHostPrefixConditionMet(cookie) {
    $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$a6cdc56e425d0d0a(cookie));
    return !cookie.key.startsWith("__Host-") || cookie.secure && cookie.hostOnly && cookie.path != null && cookie.path === "/";
}
// avoid the V8 deoptimization monster!
function $772ae331d060bd6f$var$jsonParse(str) {
    let obj;
    try {
        obj = JSON.parse(str);
    } catch (e) {
        return e;
    }
    return obj;
}
function $772ae331d060bd6f$var$fromJSON(str) {
    if (!str || $713a674841519e17$export$78d1711480f95c3e(str)) return null;
    let obj;
    if (typeof str === "string") {
        obj = $772ae331d060bd6f$var$jsonParse(str);
        if (obj instanceof Error) return null;
    } else // assume it's an Object
    obj = str;
    const c = new $772ae331d060bd6f$var$Cookie();
    for(let i = 0; i < $772ae331d060bd6f$var$Cookie.serializableProperties.length; i++){
        const prop = $772ae331d060bd6f$var$Cookie.serializableProperties[i];
        if (obj[prop] === undefined || obj[prop] === $772ae331d060bd6f$var$cookieDefaults[prop]) continue; // leave as prototype default
        if (prop === "expires" || prop === "creation" || prop === "lastAccessed") {
            if (obj[prop] === null) c[prop] = null;
            else c[prop] = obj[prop] == "Infinity" ? "Infinity" : new Date(obj[prop]);
        } else c[prop] = obj[prop];
    }
    return c;
}
/* Section 5.4 part 2:
 * "*  Cookies with longer paths are listed before cookies with
 *     shorter paths.
 *
 *  *  Among cookies that have equal-length path fields, cookies with
 *     earlier creation-times are listed before cookies with later
 *     creation-times."
 */ function $772ae331d060bd6f$var$cookieCompare(a, b) {
    $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$a6cdc56e425d0d0a(a), a);
    $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$a6cdc56e425d0d0a(b), b);
    let cmp = 0;
    // descending for length: b CMP a
    const aPathLen = a.path ? a.path.length : 0;
    const bPathLen = b.path ? b.path.length : 0;
    cmp = bPathLen - aPathLen;
    if (cmp !== 0) return cmp;
    // ascending for time: a CMP b
    const aTime = a.creation ? a.creation.getTime() : $772ae331d060bd6f$var$MAX_TIME;
    const bTime = b.creation ? b.creation.getTime() : $772ae331d060bd6f$var$MAX_TIME;
    cmp = aTime - bTime;
    if (cmp !== 0) return cmp;
    // break ties for the same millisecond (precision of JavaScript's clock)
    cmp = a.creationIndex - b.creationIndex;
    return cmp;
}
// Gives the permutation of all possible pathMatch()es of a given path. The
// array is in longest-to-shortest order.  Handy for indexing.
function $772ae331d060bd6f$var$permutePath(path) {
    $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$844ec244b1367d54(path));
    if (path === "/") return [
        "/"
    ];
    const permutations = [
        path
    ];
    while(path.length > 1){
        const lindex = path.lastIndexOf("/");
        if (lindex === 0) break;
        path = path.substr(0, lindex);
        permutations.push(path);
    }
    permutations.push("/");
    return permutations;
}
function $772ae331d060bd6f$var$getCookieContext(url) {
    if (url instanceof Object) return url;
    // NOTE: decodeURI will throw on malformed URIs (see GH-32).
    // Therefore, we will just skip decoding for such URIs.
    try {
        url = decodeURI(url);
    } catch (err) {
    // Silently swallow error
    }
    return $hgUW1$urlparse(url);
}
const $772ae331d060bd6f$var$cookieDefaults = {
    // the order in which the RFC has them:
    key: "",
    value: "",
    expires: "Infinity",
    maxAge: null,
    domain: null,
    path: null,
    secure: false,
    httpOnly: false,
    extensions: null,
    // set by the CookieJar:
    hostOnly: null,
    pathIsDefault: null,
    creation: null,
    lastAccessed: null,
    sameSite: undefined
};
class $772ae331d060bd6f$var$Cookie {
    constructor(options = {}){
        const customInspectSymbol = $772ae331d060bd6f$require$getCustomInspectSymbol();
        if (customInspectSymbol) this[customInspectSymbol] = this.inspect;
        Object.assign(this, $772ae331d060bd6f$var$cookieDefaults, options);
        this.creation = this.creation || new Date();
        // used to break creation ties in cookieCompare():
        Object.defineProperty(this, "creationIndex", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: ++$772ae331d060bd6f$var$Cookie.cookiesCreated
        });
    }
    inspect() {
        const now = Date.now();
        const hostOnly = this.hostOnly != null ? this.hostOnly : "?";
        const createAge = this.creation ? `${now - this.creation.getTime()}ms` : "?";
        const accessAge = this.lastAccessed ? `${now - this.lastAccessed.getTime()}ms` : "?";
        return `Cookie="${this.toString()}; hostOnly=${hostOnly}; aAge=${accessAge}; cAge=${createAge}"`;
    }
    toJSON() {
        const obj = {};
        for (const prop of $772ae331d060bd6f$var$Cookie.serializableProperties){
            if (this[prop] === $772ae331d060bd6f$var$cookieDefaults[prop]) continue; // leave as prototype default
            if (prop === "expires" || prop === "creation" || prop === "lastAccessed") {
                if (this[prop] === null) obj[prop] = null;
                else obj[prop] = this[prop] == "Infinity" // intentionally not ===
                 ? "Infinity" : this[prop].toISOString();
            } else if (prop === "maxAge") {
                if (this[prop] !== null) // again, intentionally not ===
                obj[prop] = this[prop] == Infinity || this[prop] == -Infinity ? this[prop].toString() : this[prop];
            } else if (this[prop] !== $772ae331d060bd6f$var$cookieDefaults[prop]) obj[prop] = this[prop];
        }
        return obj;
    }
    clone() {
        return $772ae331d060bd6f$var$fromJSON(this.toJSON());
    }
    validate() {
        if (!$772ae331d060bd6f$var$COOKIE_OCTETS.test(this.value)) return false;
        if (this.expires != Infinity && !(this.expires instanceof Date) && !$772ae331d060bd6f$var$parseDate(this.expires)) return false;
        if (this.maxAge != null && this.maxAge <= 0) return false; // "Max-Age=" non-zero-digit *DIGIT
        if (this.path != null && !$772ae331d060bd6f$var$PATH_VALUE.test(this.path)) return false;
        const cdomain = this.cdomain();
        if (cdomain) {
            if (cdomain.match(/\.$/)) return false; // S4.1.2.3 suggests that this is bad. domainMatch() tests confirm this
            const suffix = $bxdXg.getPublicSuffix(cdomain);
            if (suffix == null) // it's a public suffix
            return false;
        }
        return true;
    }
    setExpires(exp) {
        if (exp instanceof Date) this.expires = exp;
        else this.expires = $772ae331d060bd6f$var$parseDate(exp) || "Infinity";
    }
    setMaxAge(age) {
        if (age === Infinity || age === -Infinity) this.maxAge = age.toString(); // so JSON.stringify() works
        else this.maxAge = age;
    }
    cookieString() {
        let val = this.value;
        if (val == null) val = "";
        if (this.key === "") return val;
        return `${this.key}=${val}`;
    }
    // gives Set-Cookie header format
    toString() {
        let str = this.cookieString();
        if (this.expires != Infinity) {
            if (this.expires instanceof Date) str += `; Expires=${$772ae331d060bd6f$var$formatDate(this.expires)}`;
            else str += `; Expires=${this.expires}`;
        }
        if (this.maxAge != null && this.maxAge != Infinity) str += `; Max-Age=${this.maxAge}`;
        if (this.domain && !this.hostOnly) str += `; Domain=${this.domain}`;
        if (this.path) str += `; Path=${this.path}`;
        if (this.secure) str += "; Secure";
        if (this.httpOnly) str += "; HttpOnly";
        if (this.sameSite && this.sameSite !== "none") {
            const ssCanon = $772ae331d060bd6f$var$Cookie.sameSiteCanonical[this.sameSite.toLowerCase()];
            str += `; SameSite=${ssCanon ? ssCanon : this.sameSite}`;
        }
        if (this.extensions) this.extensions.forEach((ext)=>{
            str += `; ${ext}`;
        });
        return str;
    }
    // TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
    // elsewhere)
    // S5.3 says to give the "latest representable date" for which we use Infinity
    // For "expired" we use 0
    TTL(now) {
        /* RFC6265 S4.1.2.2 If a cookie has both the Max-Age and the Expires
     * attribute, the Max-Age attribute has precedence and controls the
     * expiration date of the cookie.
     * (Concurs with S5.3 step 3)
     */ if (this.maxAge != null) return this.maxAge <= 0 ? 0 : this.maxAge * 1000;
        let expires = this.expires;
        if (expires != Infinity) {
            if (!(expires instanceof Date)) expires = $772ae331d060bd6f$var$parseDate(expires) || Infinity;
            if (expires == Infinity) return Infinity;
            return expires.getTime() - (now || Date.now());
        }
        return Infinity;
    }
    // expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
    // elsewhere)
    expiryTime(now) {
        if (this.maxAge != null) {
            const relativeTo = now || this.creation || new Date();
            const age = this.maxAge <= 0 ? -Infinity : this.maxAge * 1000;
            return relativeTo.getTime() + age;
        }
        if (this.expires == Infinity) return Infinity;
        return this.expires.getTime();
    }
    // expiryDate() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
    // elsewhere), except it returns a Date
    expiryDate(now) {
        const millisec = this.expiryTime(now);
        if (millisec == Infinity) return new Date($772ae331d060bd6f$var$MAX_TIME);
        else if (millisec == -Infinity) return new Date($772ae331d060bd6f$var$MIN_TIME);
        else return new Date(millisec);
    }
    // This replaces the "persistent-flag" parts of S5.3 step 3
    isPersistent() {
        return this.maxAge != null || this.expires != Infinity;
    }
    // Mostly S5.1.2 and S5.2.3:
    canonicalizedDomain() {
        if (this.domain == null) return null;
        return $772ae331d060bd6f$var$canonicalDomain(this.domain);
    }
    cdomain() {
        return this.canonicalizedDomain();
    }
}
$772ae331d060bd6f$var$Cookie.cookiesCreated = 0;
$772ae331d060bd6f$var$Cookie.parse = $772ae331d060bd6f$var$parse;
$772ae331d060bd6f$var$Cookie.fromJSON = $772ae331d060bd6f$var$fromJSON;
$772ae331d060bd6f$var$Cookie.serializableProperties = Object.keys($772ae331d060bd6f$var$cookieDefaults);
$772ae331d060bd6f$var$Cookie.sameSiteLevel = {
    strict: 3,
    lax: 2,
    none: 1
};
$772ae331d060bd6f$var$Cookie.sameSiteCanonical = {
    strict: "Strict",
    lax: "Lax"
};
function $772ae331d060bd6f$var$getNormalizedPrefixSecurity(prefixSecurity) {
    if (prefixSecurity != null) {
        const normalizedPrefixSecurity = prefixSecurity.toLowerCase();
        /* The three supported options */ switch(normalizedPrefixSecurity){
            case $772ae331d060bd6f$var$PrefixSecurityEnum.STRICT:
            case $772ae331d060bd6f$var$PrefixSecurityEnum.SILENT:
            case $772ae331d060bd6f$var$PrefixSecurityEnum.DISABLED:
                return normalizedPrefixSecurity;
        }
    }
    /* Default is SILENT */ return $772ae331d060bd6f$var$PrefixSecurityEnum.SILENT;
}
class $772ae331d060bd6f$var$CookieJar {
    constructor(store, options = {
        rejectPublicSuffixes: true
    }){
        if (typeof options === "boolean") options = {
            rejectPublicSuffixes: options
        };
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$a6cdc56e425d0d0a(options), options);
        this.rejectPublicSuffixes = options.rejectPublicSuffixes;
        this.enableLooseMode = !!options.looseMode;
        this.allowSpecialUseDomain = typeof options.allowSpecialUseDomain === "boolean" ? options.allowSpecialUseDomain : true;
        this.store = store || new $772ae331d060bd6f$require$MemoryCookieStore();
        this.prefixSecurity = $772ae331d060bd6f$var$getNormalizedPrefixSecurity(options.prefixSecurity);
        this._cloneSync = $772ae331d060bd6f$var$syncWrap("clone");
        this._importCookiesSync = $772ae331d060bd6f$var$syncWrap("_importCookies");
        this.getCookiesSync = $772ae331d060bd6f$var$syncWrap("getCookies");
        this.getCookieStringSync = $772ae331d060bd6f$var$syncWrap("getCookieString");
        this.getSetCookieStringsSync = $772ae331d060bd6f$var$syncWrap("getSetCookieStrings");
        this.removeAllCookiesSync = $772ae331d060bd6f$var$syncWrap("removeAllCookies");
        this.setCookieSync = $772ae331d060bd6f$var$syncWrap("setCookie");
        this.serializeSync = $772ae331d060bd6f$var$syncWrap("serialize");
    }
    setCookie(cookie, url, options, cb) {
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$e1fe2eb830813601(url), cb, options);
        let err;
        if ($713a674841519e17$export$f6e2535fb5126e54(url)) {
            cb = url;
            return cb(new Error("No URL was specified"));
        }
        const context = $772ae331d060bd6f$var$getCookieContext(url);
        if ($713a674841519e17$export$f6e2535fb5126e54(options)) {
            cb = options;
            options = {};
        }
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$f6e2535fb5126e54(cb), cb);
        if (!$713a674841519e17$export$e1fe2eb830813601(cookie) && !$713a674841519e17$export$a6cdc56e425d0d0a(cookie) && cookie instanceof String && cookie.length == 0) return cb(null);
        const host = $772ae331d060bd6f$var$canonicalDomain(context.hostname);
        const loose = options.loose || this.enableLooseMode;
        let sameSiteContext = null;
        if (options.sameSiteContext) {
            sameSiteContext = $772ae331d060bd6f$var$checkSameSiteContext(options.sameSiteContext);
            if (!sameSiteContext) return cb(new Error($772ae331d060bd6f$var$SAME_SITE_CONTEXT_VAL_ERR));
        }
        // S5.3 step 1
        if (typeof cookie === "string" || cookie instanceof String) {
            cookie = $772ae331d060bd6f$var$Cookie.parse(cookie, {
                loose: loose
            });
            if (!cookie) {
                err = new Error("Cookie failed to parse");
                return cb(options.ignoreError ? null : err);
            }
        } else if (!(cookie instanceof $772ae331d060bd6f$var$Cookie)) {
            // If you're seeing this error, and are passing in a Cookie object,
            // it *might* be a Cookie object from another loaded version of tough-cookie.
            err = new Error("First argument to setCookie must be a Cookie object or string");
            return cb(options.ignoreError ? null : err);
        }
        // S5.3 step 2
        const now = options.now || new Date(); // will assign later to save effort in the face of errors
        // S5.3 step 3: NOOP; persistent-flag and expiry-time is handled by getCookie()
        // S5.3 step 4: NOOP; domain is null by default
        // S5.3 step 5: public suffixes
        if (this.rejectPublicSuffixes && cookie.domain) {
            const suffix = $bxdXg.getPublicSuffix(cookie.cdomain(), {
                allowSpecialUseDomain: this.allowSpecialUseDomain,
                ignoreError: options.ignoreError
            });
            if (suffix == null && !$772ae331d060bd6f$var$IP_V6_REGEX_OBJECT.test(cookie.domain)) {
                // e.g. "com"
                err = new Error("Cookie has domain set to a public suffix");
                return cb(options.ignoreError ? null : err);
            }
        }
        // S5.3 step 6:
        if (cookie.domain) {
            if (!$772ae331d060bd6f$var$domainMatch(host, cookie.cdomain(), false)) {
                err = new Error(`Cookie not in this host's domain. Cookie:${cookie.cdomain()} Request:${host}`);
                return cb(options.ignoreError ? null : err);
            }
            if (cookie.hostOnly == null) // don't reset if already set
            cookie.hostOnly = false;
        } else {
            cookie.hostOnly = true;
            cookie.domain = host;
        }
        //S5.2.4 If the attribute-value is empty or if the first character of the
        //attribute-value is not %x2F ("/"):
        //Let cookie-path be the default-path.
        if (!cookie.path || cookie.path[0] !== "/") {
            cookie.path = $772ae331d060bd6f$var$defaultPath(context.pathname);
            cookie.pathIsDefault = true;
        }
        // S5.3 step 8: NOOP; secure attribute
        // S5.3 step 9: NOOP; httpOnly attribute
        // S5.3 step 10
        if (options.http === false && cookie.httpOnly) {
            err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
            return cb(options.ignoreError ? null : err);
        }
        // 6252bis-02 S5.4 Step 13 & 14:
        if (cookie.sameSite !== "none" && cookie.sameSite !== undefined && sameSiteContext) // "If the cookie's "same-site-flag" is not "None", and the cookie
        //  is being set from a context whose "site for cookies" is not an
        //  exact match for request-uri's host's registered domain, then
        //  abort these steps and ignore the newly created cookie entirely."
        {
            if (sameSiteContext === "none") {
                err = new Error("Cookie is SameSite but this is a cross-origin request");
                return cb(options.ignoreError ? null : err);
            }
        }
        /* 6265bis-02 S5.4 Steps 15 & 16 */ const ignoreErrorForPrefixSecurity = this.prefixSecurity === $772ae331d060bd6f$var$PrefixSecurityEnum.SILENT;
        const prefixSecurityDisabled = this.prefixSecurity === $772ae331d060bd6f$var$PrefixSecurityEnum.DISABLED;
        /* If prefix checking is not disabled ...*/ if (!prefixSecurityDisabled) {
            let errorFound = false;
            let errorMsg;
            /* Check secure prefix condition */ if (!$772ae331d060bd6f$var$isSecurePrefixConditionMet(cookie)) {
                errorFound = true;
                errorMsg = "Cookie has __Secure prefix but Secure attribute is not set";
            } else if (!$772ae331d060bd6f$var$isHostPrefixConditionMet(cookie)) {
                /* Check host prefix condition */ errorFound = true;
                errorMsg = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'";
            }
            if (errorFound) return cb(options.ignoreError || ignoreErrorForPrefixSecurity ? null : new Error(errorMsg));
        }
        const store = this.store;
        if (!store.updateCookie) store.updateCookie = function(oldCookie, newCookie, cb) {
            this.putCookie(newCookie, cb);
        };
        function withCookie(err, oldCookie) {
            if (err) return cb(err);
            const next = function(err) {
                if (err) return cb(err);
                else cb(null, cookie);
            };
            if (oldCookie) {
                // S5.3 step 11 - "If the cookie store contains a cookie with the same name,
                // domain, and path as the newly created cookie:"
                if (options.http === false && oldCookie.httpOnly) {
                    // step 11.2
                    err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
                    return cb(options.ignoreError ? null : err);
                }
                cookie.creation = oldCookie.creation; // step 11.3
                cookie.creationIndex = oldCookie.creationIndex; // preserve tie-breaker
                cookie.lastAccessed = now;
                // Step 11.4 (delete cookie) is implied by just setting the new one:
                store.updateCookie(oldCookie, cookie, next); // step 12
            } else {
                cookie.creation = cookie.lastAccessed = now;
                store.putCookie(cookie, next); // step 12
            }
        }
        store.findCookie(cookie.domain, cookie.path, cookie.key, withCookie);
    }
    // RFC6365 S5.4
    getCookies(url, options, cb) {
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$e1fe2eb830813601(url), cb, url);
        const context = $772ae331d060bd6f$var$getCookieContext(url);
        if ($713a674841519e17$export$f6e2535fb5126e54(options)) {
            cb = options;
            options = {};
        }
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$a6cdc56e425d0d0a(options), cb, options);
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$f6e2535fb5126e54(cb), cb);
        const host = $772ae331d060bd6f$var$canonicalDomain(context.hostname);
        const path = context.pathname || "/";
        let secure = options.secure;
        if (secure == null && context.protocol && (context.protocol == "https:" || context.protocol == "wss:")) secure = true;
        let sameSiteLevel = 0;
        if (options.sameSiteContext) {
            const sameSiteContext = $772ae331d060bd6f$var$checkSameSiteContext(options.sameSiteContext);
            sameSiteLevel = $772ae331d060bd6f$var$Cookie.sameSiteLevel[sameSiteContext];
            if (!sameSiteLevel) return cb(new Error($772ae331d060bd6f$var$SAME_SITE_CONTEXT_VAL_ERR));
        }
        let http = options.http;
        if (http == null) http = true;
        const now = options.now || Date.now();
        const expireCheck = options.expire !== false;
        const allPaths = !!options.allPaths;
        const store = this.store;
        function matchingCookie(c) {
            // "Either:
            //   The cookie's host-only-flag is true and the canonicalized
            //   request-host is identical to the cookie's domain.
            // Or:
            //   The cookie's host-only-flag is false and the canonicalized
            //   request-host domain-matches the cookie's domain."
            if (c.hostOnly) {
                if (c.domain != host) return false;
            } else {
                if (!$772ae331d060bd6f$var$domainMatch(host, c.domain, false)) return false;
            }
            // "The request-uri's path path-matches the cookie's path."
            if (!allPaths && !$772ae331d060bd6f$require$pathMatch(path, c.path)) return false;
            // "If the cookie's secure-only-flag is true, then the request-uri's
            // scheme must denote a "secure" protocol"
            if (c.secure && !secure) return false;
            // "If the cookie's http-only-flag is true, then exclude the cookie if the
            // cookie-string is being generated for a "non-HTTP" API"
            if (c.httpOnly && !http) return false;
            // RFC6265bis-02 S5.3.7
            if (sameSiteLevel) {
                const cookieLevel = $772ae331d060bd6f$var$Cookie.sameSiteLevel[c.sameSite || "none"];
                if (cookieLevel > sameSiteLevel) // only allow cookies at or below the request level
                return false;
            }
            // deferred from S5.3
            // non-RFC: allow retention of expired cookies by choice
            if (expireCheck && c.expiryTime() <= now) {
                store.removeCookie(c.domain, c.path, c.key, ()=>{}); // result ignored
                return false;
            }
            return true;
        }
        store.findCookies(host, allPaths ? null : path, this.allowSpecialUseDomain, (err, cookies)=>{
            if (err) return cb(err);
            cookies = cookies.filter(matchingCookie);
            // sorting of S5.4 part 2
            if (options.sort !== false) cookies = cookies.sort($772ae331d060bd6f$var$cookieCompare);
            // S5.4 part 3
            const now = new Date();
            for (const cookie of cookies)cookie.lastAccessed = now;
            // TODO persist lastAccessed
            cb(null, cookies);
        });
    }
    getCookieString(...args) {
        const cb = args.pop();
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$f6e2535fb5126e54(cb), cb);
        const next = function(err, cookies) {
            if (err) cb(err);
            else cb(null, cookies.sort($772ae331d060bd6f$var$cookieCompare).map((c)=>c.cookieString()).join("; "));
        };
        args.push(next);
        this.getCookies.apply(this, args);
    }
    getSetCookieStrings(...args) {
        const cb = args.pop();
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$f6e2535fb5126e54(cb), cb);
        const next = function(err, cookies) {
            if (err) cb(err);
            else cb(null, cookies.map((c)=>{
                return c.toString();
            }));
        };
        args.push(next);
        this.getCookies.apply(this, args);
    }
    serialize(cb) {
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$f6e2535fb5126e54(cb), cb);
        let type = this.store.constructor.name;
        if ($713a674841519e17$export$a6cdc56e425d0d0a(type)) type = null;
        // update README.md "Serialization Format" if you change this, please!
        const serialized = {
            // The version of tough-cookie that serialized this jar. Generally a good
            // practice since future versions can make data import decisions based on
            // known past behavior. When/if this matters, use `semver`.
            version: `tough-cookie@${$90e1b776f65006dc$exports}`,
            // add the store type, to make humans happy:
            storeType: type,
            // CookieJar configuration:
            rejectPublicSuffixes: !!this.rejectPublicSuffixes,
            enableLooseMode: !!this.enableLooseMode,
            allowSpecialUseDomain: !!this.allowSpecialUseDomain,
            prefixSecurity: $772ae331d060bd6f$var$getNormalizedPrefixSecurity(this.prefixSecurity),
            // this gets filled from getAllCookies:
            cookies: []
        };
        if (!(this.store.getAllCookies && typeof this.store.getAllCookies === "function")) return cb(new Error("store does not support getAllCookies and cannot be serialized"));
        this.store.getAllCookies((err, cookies)=>{
            if (err) return cb(err);
            serialized.cookies = cookies.map((cookie)=>{
                // convert to serialized 'raw' cookies
                cookie = cookie instanceof $772ae331d060bd6f$var$Cookie ? cookie.toJSON() : cookie;
                // Remove the index so new ones get assigned during deserialization
                delete cookie.creationIndex;
                return cookie;
            });
            return cb(null, serialized);
        });
    }
    toJSON() {
        return this.serializeSync();
    }
    // use the class method CookieJar.deserialize instead of calling this directly
    _importCookies(serialized, cb) {
        let cookies = serialized.cookies;
        if (!cookies || !Array.isArray(cookies)) return cb(new Error("serialized jar has no cookies array"));
        cookies = cookies.slice(); // do not modify the original
        const putNext = (err)=>{
            if (err) return cb(err);
            if (!cookies.length) return cb(err, this);
            let cookie;
            try {
                cookie = $772ae331d060bd6f$var$fromJSON(cookies.shift());
            } catch (e) {
                return cb(e);
            }
            if (cookie === null) return putNext(null); // skip this cookie
            this.store.putCookie(cookie, putNext);
        };
        putNext();
    }
    clone(newStore, cb) {
        if (arguments.length === 1) {
            cb = newStore;
            newStore = null;
        }
        this.serialize((err, serialized)=>{
            if (err) return cb(err);
            $772ae331d060bd6f$var$CookieJar.deserialize(serialized, newStore, cb);
        });
    }
    cloneSync(newStore) {
        if (arguments.length === 0) return this._cloneSync();
        if (!newStore.synchronous) throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
        return this._cloneSync(newStore);
    }
    removeAllCookies(cb) {
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$f6e2535fb5126e54(cb), cb);
        const store = this.store;
        // Check that the store implements its own removeAllCookies(). The default
        // implementation in Store will immediately call the callback with a "not
        // implemented" Error.
        if (typeof store.removeAllCookies === "function" && store.removeAllCookies !== $772ae331d060bd6f$require$Store.prototype.removeAllCookies) return store.removeAllCookies(cb);
        store.getAllCookies((err, cookies)=>{
            if (err) return cb(err);
            if (cookies.length === 0) return cb(null);
            let completedCount = 0;
            const removeErrors = [];
            function removeCookieCb(removeErr) {
                if (removeErr) removeErrors.push(removeErr);
                completedCount++;
                if (completedCount === cookies.length) return cb(removeErrors.length ? removeErrors[0] : null);
            }
            cookies.forEach((cookie)=>{
                store.removeCookie(cookie.domain, cookie.path, cookie.key, removeCookieCb);
            });
        });
    }
    static deserialize(strOrObj, store, cb) {
        if (arguments.length !== 3) {
            // store is optional
            cb = store;
            store = null;
        }
        $713a674841519e17$export$a22775fa5e2eebd9($713a674841519e17$export$f6e2535fb5126e54(cb), cb);
        let serialized;
        if (typeof strOrObj === "string") {
            serialized = $772ae331d060bd6f$var$jsonParse(strOrObj);
            if (serialized instanceof Error) return cb(serialized);
        } else serialized = strOrObj;
        const jar = new $772ae331d060bd6f$var$CookieJar(store, {
            rejectPublicSuffixes: serialized.rejectPublicSuffixes,
            looseMode: serialized.enableLooseMode,
            allowSpecialUseDomain: serialized.allowSpecialUseDomain,
            prefixSecurity: serialized.prefixSecurity
        });
        jar._importCookies(serialized, (err)=>{
            if (err) return cb(err);
            cb(null, jar);
        });
    }
    static deserializeSync(strOrObj, store) {
        const serialized = typeof strOrObj === "string" ? JSON.parse(strOrObj) : strOrObj;
        const jar = new $772ae331d060bd6f$var$CookieJar(store, {
            rejectPublicSuffixes: serialized.rejectPublicSuffixes,
            looseMode: serialized.enableLooseMode
        });
        // catch this mistake early:
        if (!jar.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        jar._importCookiesSync(serialized);
        return jar;
    }
}
$772ae331d060bd6f$var$CookieJar.fromJSON = $772ae331d060bd6f$var$CookieJar.deserializeSync;
[
    "_importCookies",
    "clone",
    "getCookies",
    "getCookieString",
    "getSetCookieStrings",
    "removeAllCookies",
    "serialize",
    "setCookie"
].forEach((name)=>{
    $772ae331d060bd6f$var$CookieJar.prototype[name] = $772ae331d060bd6f$require$fromCallback($772ae331d060bd6f$var$CookieJar.prototype[name]);
});
$772ae331d060bd6f$var$CookieJar.deserialize = $772ae331d060bd6f$require$fromCallback($772ae331d060bd6f$var$CookieJar.deserialize);
// Use a closure to provide a true imperative API for synchronous stores.
function $772ae331d060bd6f$var$syncWrap(method) {
    return function(...args) {
        if (!this.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        let syncErr, syncResult;
        this[method](...args, (err, result)=>{
            syncErr = err;
            syncResult = result;
        });
        if (syncErr) throw syncErr;
        return syncResult;
    };
}
$772ae331d060bd6f$export$83d89fbfd8236492 = $90e1b776f65006dc$exports;
$772ae331d060bd6f$export$991f683f69795c48 = $772ae331d060bd6f$var$CookieJar;
$772ae331d060bd6f$export$bd0cf18531183c14 = $772ae331d060bd6f$var$Cookie;
$772ae331d060bd6f$export$390f32400eaf98c9 = $772ae331d060bd6f$require$Store;
$772ae331d060bd6f$export$2e29447affdcf172 = $772ae331d060bd6f$require$MemoryCookieStore;
$772ae331d060bd6f$export$6b862160d295c8e = $772ae331d060bd6f$var$parseDate;
$772ae331d060bd6f$export$3ae94a2503e890a1 = $772ae331d060bd6f$var$formatDate;
$772ae331d060bd6f$export$98e6a39c04603d36 = $772ae331d060bd6f$var$parse;
$772ae331d060bd6f$export$21625637effda04 = $772ae331d060bd6f$var$fromJSON;
$772ae331d060bd6f$export$fb0a6b04e00abe8b = $772ae331d060bd6f$var$domainMatch;
$772ae331d060bd6f$export$d48ad89f7e11a603 = $772ae331d060bd6f$var$defaultPath;
$772ae331d060bd6f$export$a47cd0eddf882894 = $772ae331d060bd6f$require$pathMatch;
$772ae331d060bd6f$export$bf99853f34268f63 = $bxdXg.getPublicSuffix;
$772ae331d060bd6f$export$fda474babbb357e1 = $772ae331d060bd6f$var$cookieCompare;

$772ae331d060bd6f$export$f1f80cca8f9e89f1 = (parcelRequire("i0lw4")).permuteDomain;
$772ae331d060bd6f$export$c8d0c35e8ea40e9 = $772ae331d060bd6f$var$permutePath;
$772ae331d060bd6f$export$a11b3844cdb650ec = $772ae331d060bd6f$var$canonicalDomain;
$772ae331d060bd6f$export$163139209becb26f = $772ae331d060bd6f$var$PrefixSecurityEnum;
$772ae331d060bd6f$export$cd3fb52e3e28b842 = $713a674841519e17$export$cd3fb52e3e28b842;


var $28ae269cace41277$require$Cookie = $772ae331d060bd6f$export$bd0cf18531183c14;
var $28ae269cace41277$require$CookieJar = $772ae331d060bd6f$export$991f683f69795c48;

const $28ae269cace41277$var$globalExists = typeof $parcel$global != "undefined";
class $28ae269cace41277$var$WindowMirror {
    static get document() {
        return $28ae269cace41277$var$globalExists ? $parcel$global.document : document;
    }
    static get location() {
        return $28ae269cace41277$var$globalExists ? $parcel$global.location : location;
    }
    static get localStorage() {
        return $28ae269cace41277$var$globalExists ? $parcel$global.localStorage : localStorage;
    }
}
const $28ae269cace41277$var$FAKE_APP_URI = "https://electron.livesession.io";
function $28ae269cace41277$export$d7c4a0dd6a4567e5(options) {
    const origin = options?.origin || $28ae269cace41277$var$FAKE_APP_URI;
    const cookieStore = new $hgUW1$toughcookiewebstoragestore(window.localStorage);
    const cookieJar = new $28ae269cace41277$require$CookieJar(cookieStore);
    Object.defineProperty($28ae269cace41277$var$WindowMirror.document, "cookie", {
        enumerable: true,
        configurable: true,
        get () {
            return cookieJar.getCookieStringSync(origin);
        },
        set (cookie) {
            cookieJar.setCookieSync($28ae269cace41277$require$Cookie.parse(cookie, {
                loose: true
            }), origin);
        }
    });
}
function $28ae269cace41277$export$e20fbacbb41798b() {
    delete $28ae269cace41277$var$WindowMirror.document.cookie;
}


(()=>{
    window.ElectronCookies = {
        enable: $28ae269cace41277$export$d7c4a0dd6a4567e5,
        disable: $28ae269cace41277$export$e20fbacbb41798b
    };
})();


export {$28ae269cace41277$export$d7c4a0dd6a4567e5 as enable, $28ae269cace41277$export$e20fbacbb41798b as disable};
//# sourceMappingURL=module.js.map
