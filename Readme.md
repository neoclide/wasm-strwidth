## Wasm-strWidth

Wasm module for string display width on vim.

Used by [coc.nvim](https://github.com/neoclide/coc.nvim).

TODO: support `setcellwidths()` like vim for custom width table.

## Build

Requires [wasi](https://github.com/WebAssembly/wasi-sdk) and [wabt](https://github.com/WebAssembly/wabt).

Change the SDK part in Makefile.

Run command:

```sh
make
node index.js
```

## LICENSE

MIT
