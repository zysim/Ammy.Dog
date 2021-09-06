# Ammy.Dog

Bork

## Adding A New GIF/Image

If it's added to assets/{background-images,loading-gifs}:

- Run `node buildScripts/buildConstantsFile.js`

## Explaining `whyDoIHaveToDoThis`

So in `CatSelector` I've got `writeCatsToLocalStorage`. It calls `localStorage.setItem()`:

```js
// src/components/MainComponent/CatSelector.ts
localStorage.setItem('cats', JSON.stringify((await cats) ?? constants.FALLBACK))
localStorage.setItem(constants.DEFAULT_CAT_NAME_KEY, constants.DEFAULT_CAT_NAME)
```

The function that follows after that, `triggerFetch()` dispatches a custom event also called `'triggerFetch'`, which is picked up by `MainComponent` (`src/components/MainComponent/index.ts`). I originally made its event handler then call `localStorage.getItem(<whatever>)`. The idea was that I will be able to get my values that way, since it's all chronological. Shit does _not_ work; `localStorage` seems to only be set way later, and so, `getItem()` only returns `null`. That's why I pass `whyDoIHaveToDoThis` in the custom event creation.
