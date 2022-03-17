## NBA Remix

[![ci](https://github.com/willianjusten/nba-remix/actions/workflows/ci.yml/badge.svg)](https://github.com/willianjusten/nba-remix/actions/workflows/ci.yml)

> A simple app to show NBA games and scores/details.

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## Pre-commit hook

This project uses [husky](https://www.npmjs.com/package/husky) for pre-commits.

To disable it, add `export HUSKY_SKIP_HOOKS=1` to your shell configuration file (`.zshrc`, `.bashrc`).

## Writing Components

The project favors function components using `function` and avoid using `export default`. Also, always prefer to use `type` instead of `interface`.

When creating a component then the coding style adopted by the project is like this:

```js
export type MyComponentProps = {
  myComponentProp?: string,
}

export function MyComponent({ myComponentProp }: MyComponentProps) {
  return <>MyComponent</>
}
```

## Maintainers

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/adeonir">
        <img src="https://github.com/adeonir.png?v=4?s=100" width="100px;" alt="Adeonir Kohl" />
        <br />
        <sub>
          <b>
            Adeonir Kohl
          </b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/fsilvaco">
        <img src="https://github.com/fsilvaco.png?v=4?s=100" width="100px;" alt="Flávio Silva" />
        <br />
        <sub>
          <b>
            Flávio Silva
          </b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/helderburato">
        <img src="https://github.com/helderburato.png?v=4?s=100" width="100px;" alt="Helder Berto" />
        <br />
        <sub>
          <b>
            Helder Berto
          </b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/willianjusten">
        <img src="https://github.com/willianjusten.png?v=4?s=100" width="100px;" alt="Willian Justen" />
        <br />
        <sub>
          <b>
            Willian Justen
          </b>
        </sub>
      </a>
    </td>
  </tr>
</table>
