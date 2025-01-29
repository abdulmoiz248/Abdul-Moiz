**README.md**

# Abdul-Moiz

Abdul-Moiz is a Next.js application that provides a custom Tailwind CSS theme and a rewrite to the LeetCode website.

## Installation

1. Clone the repository:

```
git clone https://github.com/Abdul-Moiz/Abdul-Moiz.git
```

2. Install dependencies:

```
npm install
```

## Usage

1. Start the development server:

```
npm start
```

2. Visit `http://localhost:3000` to see the application.

### LeetCode Rewrite

The application includes a rewrite rule that redirects requests to `/leetcode/:path*` to `https://leetcode.com/:path*`. This allows you to access LeetCode directly from the application's URL bar.

## Tech Stack

- Next.js
- Tailwind CSS
- TypeScript
- postcss-load-config
- tailwindcss-animate

## Contribution Guidelines

Contributions are welcome! Please follow these guidelines:

- Fork the repository.
- Create a new branch for your changes.
- Make your changes and add tests for any new or modified functionality.
- Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Acknowledgment

This project was inspired by the [Vercel Next.js Blog Starter](https://github.com/vercel/next.js-blog-starter).