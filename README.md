# To reproduce


* `npm i` (I used major v6, but v7 should work)
* `npm test` should cause `TypeError: _react.default.createElement is not a function`


It seems that `require('react')` inside the `node_modules/@iconify/react/dist/icon.js`
is referring to itself, not to the real react module.

I edited the `icon.js` file locally to log more, like this:
https://gist.github.com/aivenkimmob/81f2b4c96e897db6b4ada1b3eccc9cdb, and this is the output:

```
  console.log
    REQUIRE { Icon: undefined, InlineIcon: undefined, default: undefined }

      at Object.<anonymous> (node_modules/@iconify/react/dist/icon.js:8:9)

  console.log
    INTEROP REQUIRE DEFAULT { Icon: undefined, InlineIcon: undefined, default: undefined }

      at Object.<anonymous> (node_modules/@iconify/react/dist/icon.js:10:9)
```



## Full stack trace


```
    Error: Uncaught [TypeError: _react.default.createElement is not a function]
        at reportException (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:62:24)
        at innerInvokeEventListeners (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:333:9)
        at invokeEventListeners (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
        at HTMLUnknownElementImpl._dispatch (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
        at HTMLUnknownElementImpl.dispatchEvent (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
        at HTMLUnknownElement.dispatchEvent (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
        at Object.invokeGuardedCallbackDev (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:3994:16)
        at invokeGuardedCallback (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:4056:31)
        at beginWork$1 (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:23964:7)
        at performUnitOfWork (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:22779:12) TypeError: _react.default.createElement is not a function
        at component (/home/kimmob/code/external/jest-iconify-issue/node_modules/@iconify/react/dist/icon.js:638:28)
        at Icon (/home/kimmob/code/external/jest-iconify-issue/node_modules/@iconify/react/dist/icon.js:650:10)
        at renderWithHooks (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:14985:18)
        at mountIndeterminateComponent (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:17811:13)
        at beginWork (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:19049:16)
        at HTMLUnknownElement.callCallback (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:3945:14)
        at HTMLUnknownElement.callTheUserObjectsOperation (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
        at innerInvokeEventListeners (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:318:25)
        at invokeEventListeners (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
        at HTMLUnknownElementImpl._dispatch (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
        at HTMLUnknownElementImpl.dispatchEvent (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
        at HTMLUnknownElement.dispatchEvent (/home/kimmob/code/external/jest-iconify-issue/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
        at Object.invokeGuardedCallbackDev (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:3994:16)
        at invokeGuardedCallback (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:4056:31)
        at beginWork$1 (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:23964:7)
        at performUnitOfWork (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:22779:12)
        at workLoopSync (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:22707:5)
        at renderRootSync (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:22670:7)
        at performSyncWorkOnRoot (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:22293:18)
        at scheduleUpdateOnFiber (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:21881:7)
        at updateContainer (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:25482:3)
        at /home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:26021:7
        at unbatchedUpdates (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:22431:12)
        at legacyRenderSubtreeIntoContainer (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:26020:5)
        at Object.render (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:26103:10)
        at /home/kimmob/code/external/jest-iconify-issue/node_modules/@testing-library/react/dist/pure.js:99:25
        at batchedUpdates$1 (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom.development.js:22380:12)
        at act (/home/kimmob/code/external/jest-iconify-issue/node_modules/react-dom/cjs/react-dom-test-utils.development.js:1042:14)
        at Object.render (/home/kimmob/code/external/jest-iconify-issue/node_modules/@testing-library/react/dist/pure.js:95:26)
        at Object.<anonymous> (/home/kimmob/code/external/jest-iconify-issue/Icon.test.tsx:8:5)
        at Object.asyncJestTest (/home/kimmob/code/external/jest-iconify-issue/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:106:37)
        at /home/kimmob/code/external/jest-iconify-issue/node_modules/jest-jasmine2/build/queueRunner.js:45:12
        at new Promise (<anonymous>)
        at mapper (/home/kimmob/code/external/jest-iconify-issue/node_modules/jest-jasmine2/build/queueRunner.js:28:19)
        at /home/kimmob/code/external/jest-iconify-issue/node_modules/jest-jasmine2/build/queueRunner.js:75:41
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
```
