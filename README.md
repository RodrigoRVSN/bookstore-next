This is a webpage consuming the `bookstore.json` as the source of the data.
Live view: <https://bookstore-next-wine.vercel.app>

## Technologies

- Next.js
- Typescript
- Tailwind CSS & shadcn for styles
- Lucide React for icons
- Vitest for testing
- Cypress for E2E testing
- Eslint for linting
- Github Actions for CI
- Dayjs for formatting date

## How to run

First, install the dependencies:

```bash
npm install
```

To run the application:

```bash
npm run dev
```

To run the tests:

```bash
npm run test
```

To run the tests with coverage:

```bash
npm run test:cov
```

To run the E2E tests with cypress:

```bash
npm run cy:open
```

or

```bash
npm run cy:run
```

### Some observations

- The `bookstore.json` is a static file, so there is no need to do a fetch on SSR with the newest Next.js features and, since there is a small quantity of data, we don't need to use memoization techniques like `useMemo` for sorting the data on the events page, for example, but these could be improvements if we would be fetching the data from a server.
- Components could be documented with Storybook.
- We could use the github actions to deploy the application in AWS, for example, after the build is done.
