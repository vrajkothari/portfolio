import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import styles from './css/index.css?url';
import AnimatedBackground from '~/components/AnimatedBackground';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

export function meta() {
  return [
    { title: 'Vraj Kothari - Portfolio' },
    {
      name: 'description',
      content:
        'Computer Science student at Georgia Tech specializing in AI/ML. Software Engineering Intern at Shopify.',
    },
  ];
}

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen relative overflow-x-hidden">
        {/* Global Animated Background */}
        <AnimatedBackground />
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 shadow-lg shadow-cyan-500/10">
          <nav className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                Vraj Kothari
              </Link>
              <ul className="flex gap-8 items-center">
                <li>
                  <Link
                    to="/"
                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education"
                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/experience"
                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/personal"
                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all font-semibold"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen relative z-10">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 py-12 mt-20 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://github.com/vrajkothari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/vraj-kothari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:vrjkothari22@gmail.com"
                className="hover:text-cyan-400 transition-colors"
              >
                Email
              </a>
              <span className="hover:text-cyan-400 transition-colors">(267) 707-8448</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Vraj Kothari. Built with Remix & React.
            </p>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
