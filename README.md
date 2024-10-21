This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

This project is not intended for commercial use. The project is designed to automate the process of increasing the network of LinkedIn contacts.

## Technology stack

| Technology |
| ---------- |
| React      |
| Next.js    |
| TypeScript |
| PlayWright |

## Engines

| engine | version   |
| ------ | --------- |
| node   | >=20.14.0 |
| npm    | >=10.7.0  |

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/Ivan-Kanashchenko/next-playwright-app.git
```

2. Install dependencies:

```bash
npm i
```

3. Create `.env` file in the root directory with your credentials:

```bash
USER_EMAIL = 'your mail'
USER_PASSWORD = 'your password'
```

Run the development server:

```bash
npm run dev
```

## Usage

1. Run the server

2. Use the following [Chrome extension](https://github.com/Ivan-Kanashchenko/react-chrome-extension) to make requests to your localhost

## Debuging

Debug the main flow:

```bash
npx playwright test --debug
```

Run web inspector:

```bash
npx playwright codegen https://www.linkedin.com/
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
