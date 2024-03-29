# nitro Helmet-esque Security Headers

nitro native Helmet-esque security headers.

## Requirements

- [nitro](https://nitro.unjs.io) v.2.4.\* or higher

## Installation

```bash
npm install nitro-helmet
```

```bash
pnpm add nitro-helmet
```

```bash
yarn add nitro-helmet
```

## Usage

nitro Helmet is built upon the h3 library. To read more about h3, please consult the [h3 repository](https://github.com/unjs/h3).

To get started, you can enable CORS on a specific event handler by using the object syntax definitions intorduced in nitro v2.6.0 and h3 v1.8.0 as follows:

```ts
import { helmet } from 'nitro-helmet'

export default eventHandler({
  onResponse: helmet({
    crossOriginResourcePolicy: 'cross-origin'
    // ... add your options overrides here
  }),
  async handler(event) {
    return 'Hello Helmet!'
  }
})
```

nitro-helmet aims to provide a simple wrapper to define standard security headers for any event handler per nitro event handler, or per route. To use it, simply import the `defineHelmetEventHandler` function and wrap your event handler with it as follows:

```ts
import { defineHelmetEventHandler } from 'nitro-helmet'

const handler = eventHandler(async event => {
  // ...
})

export default defineHelmetEventHandler(handler)
```

...or... using as nitro middleware:

```ts
// :file middleware/helmet.ts
import { helmetEventHandler } from 'nitro-helmet'

export default helmetEventHandler(_event => {}, {
  crossOriginResourcePolicy: 'cross-origin'
  // ... add your options overrides here
})
```

If you would like to override the default options, you can do so as follows:

```ts
import { defineHelmetEventHandler } from 'nitro-helmet'

const handler = eventHandler(async event => {
  // ...
})

const options: H3HelmetOptions = {}

export default defineHelmetEventHandler(handler, {
  crossOriginResourcePolicy: 'same-origin',
  crossOriginOpenerPolicy: 'same-origin',
  crossOriginEmbedderPolicy: 'require-corp',
  contentSecurityPolicy: "default-src 'self';base-uri 'self'",
  originAgentCluster: '?1',
  referrerPolicy: 'no-referrer',
  strictTransportSecurity: 'max-age=15552000; includeSubDomains',
  xContentTypeOptions: 'nosniff',
  xDNSPrefetchControl: 'off',
  xDownloadOptions: 'noopen',
  xFrameOptions: 'SAMEORIGIN',
  xPermittedCrossDomainPolicies: 'none',
  xXSSProtection: '0'
})
```

The `defineHelmetEventHandler` functions take two arguments:

- `handler`: the event handler to wrap of type `EventHandler<T>`, which will ensure typesafety for the event handler return type.
- `options`: the options to pass to the cors handler of type `H3HelmetOptions`.

## Acknowledgements

This library would not be possible if it were not for standing on the shoulders of these giants:

- [h3](https://github.com/unjs)
- [helmet.js](https://helmetjs.github.io)
