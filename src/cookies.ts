const {Cookie, CookieJar} = require('tough-cookie');
const WebStorageCookieStore = require('tough-cookie-web-storage-store');

interface IOptions {
    origin?: string
}

const globalExists = typeof global != "undefined"

class WindowMirror {
    static get document(): Document {
        return globalExists ? global.document : document
    }

    static get location(): Location {
        return globalExists ? global.location : location
    }

    static get localStorage(): Location {
        return globalExists ? global.localStorage : localStorage
    }
}

const FAKE_APP_URI = 'https://electron.livesession.io';

export function enable(options?: IOptions) {
    const origin = options?.origin || FAKE_APP_URI
    const cookieStore = new WebStorageCookieStore(window.localStorage);
    const cookieJar = new CookieJar(cookieStore);

    Object.defineProperty(WindowMirror.document, "cookie", {
        enumerable: true,
        configurable: true,
        get() {
            return cookieJar.getCookieStringSync(origin);
        },
        set(cookie) {
            cookieJar.setCookieSync(Cookie.parse(cookie, {loose: true}), origin);
        }
    });
}

export function disable(): void {
    delete WindowMirror.document.cookie;
}