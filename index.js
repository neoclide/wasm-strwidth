const fs = require('fs')

async function setupWasi(fileName) {
  // Read the wasm file.
  const buf = fs.readFileSync(fileName)
  // Instantiate the wasm module.
  const res = await WebAssembly.instantiate(buf)
  return res
}

async function main() {
  // Setup the WASI instance.
  const wasi = await setupWasi('./strwidth.wasm')

  // Get the functions exported from the WebAssembly
  const {
    strWidth,
    setAmbw,
    malloc,
    memory
  } = wasi.instance.exports
  let patternPtr = malloc(1024)
  const bytes = new Uint8Array(memory.buffer)

  const changePattern = (pattern) => {
    let buf = Buffer.from(pattern, 'utf8')
    let len = buf.length
    if (len > 1024) throw new Error('pattern too long')
    bytes.set(buf, patternPtr)
    bytes[patternPtr + len] = 0
  }

  const getWidth = text => {
    changePattern(text)
    let width = strWidth(patternPtr)
    console.log(`${text}: ${width}`)
  }
  setAmbw(1)
  getWidth('你好啊')
  getWidth('fo o 这个')
  getWidth('\t')
  getWidth('\x1b')
  getWidth('1\t2\t')
}

main().then(() => console.log('Done'))
