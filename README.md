# Svelte 5 HMR Issue

Abstract State Router / Svelte State Renderer render the Svelte component, and then [add extra properties on the component](https://github.com/TehShrike/svelte-state-renderer/blob/master/index.svelte.js#L39-L40) instance to later use in other parts of the lifecycle.

In Svelte 4, triggering HMR on one of these components worked fine, and the extra properties stayed intact. In Svelte 5, they get removed, and this breaks the router.

## How to Reproduce

- git clone
- npm i
- npx vite
- Change App.svelte and change to trigger HMR
- Click one of the links on the page, and you will get the error.
