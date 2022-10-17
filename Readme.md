# Wasm-strWidth

Wasm module for string display width on vim.

Used by [coc.nvim](https://github.com/neoclide/coc.nvim).

TODO: support `setcellwidths()` like vim for custom width table.

## API

- `setAmbw(ambiguousAsDouble: number): void`

  Consider ambiguous as double width when 1

- `strWidth(text: string): number`

  Return display width of text.

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
