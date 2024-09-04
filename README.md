# AI Chat Application

This is an AI chat application built with [Next.js](https://nextjs.org/), allowing users to interact with an AI assistant.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or later)
- npm, yarn, pnpm, or bun

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-chat-app.git
   cd ai-chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Real-time chat interface
- Integration with OpenAI's GPT model
- Markdown support for chat messages
- Code syntax highlighting
- Responsive design for mobile and desktop

## Project Structure

- `app/`: Contains the main application code
  - `components/`: Reusable React components
  - `lib/`: Utility functions and API calls
  - `page.js`: Main page component
- `public/`: Static assets

## Customization

You can start customizing the app by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [OpenAI API Documentation](https://platform.openai.com/docs/) - learn about OpenAI's API capabilities.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
