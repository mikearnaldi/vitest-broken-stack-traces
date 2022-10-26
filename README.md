Actual Stack Trace:

```
Error
    at nestedFunction (/workspace/vitest-broken-stack-traces/test/Demo.ts:2:10)
    at firstFunction (/workspace/vitest-broken-stack-traces/test/Demo.ts:6:10)
    at /workspace/vitest-broken-stack-traces/test/Demo.ts:10:19
    at /workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-chain.072b5677.js:2266:13
    at /workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-chain.072b5677.js:2141:26
    at runTest (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:550:42)
    at async runSuite (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:645:15)
    at async runFiles (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:779:5)
    at async startTestsNode (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:797:3)
    at async /workspace/vitest-broken-stack-traces/node_modules/vitest/dist/entry.js:94:11
    at async Module.withEnv (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:295:5)
    at async run (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/entry.js:87:7)
    at async file:///workspace/vitest-broken-stack-traces/node_modules/tinypool/dist/esm/worker.js:109:20
Error
    at nestedFunction (/workspace/vitest-broken-stack-traces/test/Demo.ts:2:10)
    at firstFunction (/workspace/vitest-broken-stack-traces/test/Demo.ts:6:10)
    at /workspace/vitest-broken-stack-traces/test/Demo.ts:10:36
    at /workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-chain.072b5677.js:2266:13
    at /workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-chain.072b5677.js:2141:26
    at runTest (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:550:42)
    at async runSuite (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:645:15)
    at async runFiles (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:779:5)
    at async startTestsNode (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:797:3)
    at async /workspace/vitest-broken-stack-traces/node_modules/vitest/dist/entry.js:94:11
    at async Module.withEnv (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/chunk-runtime-error.b043a88d.js:295:5)
    at async run (/workspace/vitest-broken-stack-traces/node_modules/vitest/dist/entry.js:87:7)
    at async file:///workspace/vitest-broken-stack-traces/node_modules/tinypool/dist/esm/worker.js:109:20
```

Expected:

```
Error
    at nestedFunction (/workspace/vitest-broken-stack-traces/test/Demo.ts:2:10)
    at firstFunction (/workspace/vitest-broken-stack-traces/test/Demo.ts:6:10)
    at /workspace/vitest-broken-stack-traces/test/Demo.ts:10:21
    ...
Error
    at nestedFunction (/workspace/vitest-broken-stack-traces/test/Demo.ts:2:10)
    at firstFunction (/workspace/vitest-broken-stack-traces/test/Demo.ts:6:10)
    at /workspace/vitest-broken-stack-traces/test/Demo.ts:10:38
    ...
```