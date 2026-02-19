# Predacted

**NOT REACT. NO COMPAT. NO HOOKS. NO BS.**

A standalone version of [Preact](https://github.com/preactjs/preact), [XHTM](https://github.com/dy/xhtm) and [Preact Signals](https://github.com/preactjs/signals). No external dependencies, just one single file you can download via [download locally](https://github.com/n2geoff/predacted/blob/main/dist/predacted.min.js) and use offline.

## Usage

[Download](https://github.com/n2geoff/predacted/blob/main/dist/predacted.min.js) the standalone `predacted.min.js` file locally then:

```html
<div id="app"></div>
<script type="module">
  import {html, render, signal } from "./predacted.min.js";

  const count = signal(0);

  function App() {
    return html`
      <div>
        <h1 class>Hello World!</h1>
        <button onClick=${() => (count.value += 1)}>
          Increment with signal
        </button>
        <p>Counter: ${count}</p>
      </div>
    `;
  }

  render(html`<${App} />`, document.getElementById("app"));
</script>
```

## Inspiration

**I AM NOT A FAN OF REACT**, but then there is **Preact**, by all accounts it is React (compatible), however its core is something different, something small, something fast and with a *little* tweaking it is something special and that surprised me.

Preact homepage shows a great progressive enhancement path from `h`, to `htm` for a **NO-BUILD** setup to using `jsx` and beyond with `signals`, but all this great progress is separated, so what if you combined them...

...this is where [mujahidfa](https://github.com/mujahidfa/preact-htm-signals-standalone), came in and had the same goal of an offline single-file version of Preact with `html` and `signals` as a tiny UI framework solution...

...however, we differ in approach.  I have **NO** interest in *Reactisms*, so **NO HOOKS**, **NO CREATE/USE**, and I prefer [XHTM](https://github.com/dy/xhtm) over [HTM](https://github.com/developit/htm)

> Is it going to break? Lets see

## License

All rights belong to [Preact](https://github.com/preactjs/preact), [XHTM](https://github.com/dy/xhtm) and [Preact Signals](https://github.com/preactjs/signals) owners/maintainers.

> This is just an opinionated build

## Build

> Leverages [Bun Bundler](https://bun.com/docs/bundler) to keep deps minimal

```sh
bun run build
```
