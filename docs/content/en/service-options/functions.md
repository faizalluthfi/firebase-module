---
title: functions
description: ''
position: 11
category: Service Options
---

Initializes **Firebase Functions** and makes it available via `$fire.functions` and `$fireModule.functions`.

- Type: `Boolean` or `Object`
- Default: `false`

```js[nuxt.config.js]
functions: {
  location: 'us-central1',
  emulatorPort: 12345
}
```

## location

- Type: `String`
- Default: `us-central1`

More information [here](https://firebase.google.com/docs/functions/locations).

## emulatorPort

- Type: `Integer`
- Default: `null`

Sets up `useFunctionsEmulator("http://localhost:EMULATOR_PORT")` to point to a Cloud Functions emulator running locally instead of the productive one.

More information in the official Firebase [API Docs](<https://firebase.google.com/docs/reference/android/com/google/firebase/functions/FirebaseFunctions.html#useFunctionsEmulator(java.lang.String)>) and [Functions Docs](https://firebase.google.com/docs/functions/local-emulator).
