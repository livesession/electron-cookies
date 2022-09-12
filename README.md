# Electron Cookies

Electron's environment doesn't come with built in support for a `document.cookie` API.
By using this package, you can use the same `Document cookie` API within Electron.

## Installation
First, install the package:

```bash
npm install @livesession/electron-cookies
```

### Usage
```js
import ElectronCookies from '@livesession/electron-cookies';

// enable
ElectronCookies.enable({
  origin: 'https://example.com',
}); // or ElectronCookies.enable() for default

// disable
ElectronCookies.disable();
````

If your Electron app has the `nodeIntegration` preference set to `false`, you can include the dist via a `<script>` tag:

```html
 <script src='./node_modules/@livesession/electron-cookies/dist/main.js'></script>
```
And inside JavaScript:
```js
window.ElectronCookies.enable();
```