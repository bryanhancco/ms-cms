<p align="center">
  <img src="./assets/bunest-icon.svg" width="500" alt="Nest Logo" />
</p>

  <p align="center">A <a href="https://bun.sh/">Bun</a> integration for <a href="https://nestjs.com/">Nest</a>, made with Bun, for Bun runtime</p>

## Table of contents

- [Description](#description)
- [Project setup](#project-setup)
- [~~Compile &~~ run the project](#compile--run-the-project)
- [Build the project](#build-the-project)
- [Run tests](#run-tests)
- [License](#license)

## Description

The starter template for <a href="https://bun.sh/">Nest</a> with Bun runtime. This template utilizes the perks of Bun runtime & API to provide a seamless & performant development experience without taking away the familiarity of Nest & Node.js.

> ⚠️ **Warning**:
>
> - This template is still in development and may not be suitable for production use. Please report any issues you encounter.
> - **Do NOT** use [Nest CLI](https://www.npmjs.com/package/@nestjs/cli) with this template. A Nest-like, dedicated CLI tool for this template is currently in development.

## Project setup

```bash
$ bun install
```

## ~~Compile &~~ run the project

Bun can run TypeScript code directly, so there is no need to transpile the project before running it. At the same time, however, Bun **will NOT** perform any type-checking during development. Hence, [`tsc-watch`](https://www.npmjs.com/package/tsc-watch) & `tsc` is added to start scripts by default. Feel free to remove it if you want.

```bash
# development
$ bun run start

# watch mode
$ bun run start:dev

# production mode
$ bun run start:prod
```

## Build the project

This template leverages a custom build script, located in [`scripts/build.ts`](./scripts/build.ts), using [Bun Build API](https://bun.sh/docs/bundler) to build the project. Feel free to modify the script to suit your needs.

```bash
$ bun run build # ⚠️ Be careful not to confuse this command with `bun build`.
```

The build output will be located in the `dist` folder, containing JS files. Unlike the default Nest template, the JS code inside the `dist` folder includes bundled dependencies, thanks to Bun. The result is that the server starts almost twice as fast as the default Nest template & the `bun run start:dev` script. You can run the built output directly with Bun using the following command:

```bash
$ bun run dist/main.js
```

However, using the [`bun run start:prod`](./package.json) command is recommended, due to the `NODE_ENV` environment variable will be set to `production`.

## Run tests

Bun is also a test runner and provides a Jest-like API for running tests. Hence, `jest` is not included in this template. You can run tests using the following commands:

```bash
# unit tests
$ bun run test

# e2e tests
$ bun run test:e2e

# test coverage
$ bun run test:cov
```

## License

- Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
- Bun is [MIT licensed](https://github.com/oven-sh/bun/blob/main/LICENSE.md)
- This template is also [MIT licensed](./LICENSE).
