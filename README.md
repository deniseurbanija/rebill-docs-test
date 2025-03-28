# Public Docs

Docs, Support, Guides, and API reference hosted at [docs.rebill.com](https://docs.rebill.com).

The project is mounted on top of the Protocol template from TailwindUI, using Markdoc, Markdoc, NextJs and Vercel.
Assets are automatically uploaded from the /public directory to the production bucket in AWS of name assets.rebill.to, but available from assets.rebill.com.

## Getting started

To get started you need the Yarn package manager.

```bash
yarn
```

Next, run the development server:

```bash
yarn run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Production build

```bash
yarn run build
yarn start
```

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Global search

This template includes a global search that's powered by the [FlexSearch](https://github.com/nextapps-de/flexsearch) library. It's available by clicking the search input or by using the `⌘K` shortcut.

This feature requires no configuration, and works out of the box by automatically scanning your documentation pages to build its index. You can adjust the search parameters by editing the `/src/mdx/search.mjs` file.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
- [Algolia Autocomplete](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/) - the official Algolia Autocomplete documentation
- [FlexSearch](https://github.com/nextapps-de/flexsearch) - the official FlexSearch documentation
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - the official Zustand documentation
