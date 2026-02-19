import { h, render } from "preact";
import xhtm from "xhtm";
import { computed, effect, signal } from "@preact/signals";

const html = xhtm.bind(h);

export { h, html, render, signal, effect, computed };
