# සිංLipiFlow (Sinhala LipiFlow)

A modern, fast, and intuitive Sinhala transliteration web application built with Next.js, React 19, and Tailwind CSS. **LipiFlow** allows users to seamlessly type in Sinhala using standard English keyboards, powering its typing experience through a robust transliteration engine, complete with Wijesekara layout mapping.

## ✨ Features

- **Real-time Transliteration:** Blazing fast Sinhala phonetic and layout-based typing.
- **Rich Editor Interface:** A distraction-free editing layout with a toolbar, header, and seamless state management.
- **PWA Support:** Installable as a Progressive Web App (PWA) allowing for offline capabilities and native-like experiences on mobile devices.
- **Modern Tech Stack:** Using the latest Next.js 16 (App Router) and React 19 with the new React Compiler.
- **State Management:** Fast client-side state powered by Zustand.
- **High-Quality Code Standards:** Pre-configured with ESLint, Prettier, Husky pre-commit hooks, and Commitlint.
- **Unit Testing:** Fast and reliable unit tests configured with Vitest for the underlying transliteration engine.

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/) (with Babel Plugin React Compiler)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **PWA:** `next-pwa`
- **Testing:** [Vitest](https://vitest.dev/)
- **Formatting & Linting:** ESLint 9, Prettier, Husky, Commitlint

## 📂 Project Structure

```text
├── public/                 # Static assets and PWA manifest (manifest.json)
├── src/
│   ├── app/                # Next.js App Router pages (Home, Help, Settings)
│   ├── components/         # Reusable UI components (Editor, Header, Toolbar)
│   ├── hooks/              # Custom React hooks (e.g., useTransliteration.ts)
│   ├── store/              # Zustand global state (useStore.ts)
│   └── utils/              # Core logic, algorithms, and test specs
│       ├── engine.ts       # Transliteration engine logic
│       ├── engine.test.ts  # Vitest cases for the engine
│       ├── mapping.json    # Character phonetic mapping logic
│       └── wijesekara.json # Standard Wijesekara keyboard layout maps
```

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js 20+ installed.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd සිංLipiFlow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🧪 Testing

This project uses Vitest for testing its core transliteration engine.

To run the test suite:
```bash
npm run test
```

## 📜 Standardized Commits

We use Husky and Commitlint to ensure high-quality, readable commit history. Please make sure your commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) format.

Example:
`feat: add new typing rules for modifiers`
`fix: correct mapping for specific character`



