import { Link } from '@remix-run/react';

import { TypewriterText } from '~/components/InteractiveText';

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-slate-900 text-4xl font-bold shadow-xl shadow-cyan-500/20">
              VK
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Hi, I'm Vraj Kothari
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-4">
            CS Student at Georgia Tech | SWE Intern @ Shopify
          </p>

          <div className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            <TypewriterText
              text="Pursuing BS/MS in Computer Science with a concentration in AI and Machine Learning. Passionate about building impactful software and solving complex problems through code."
              speed={28}
              className="inline-block"
            />
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 rounded-lg font-semibold hover:from-cyan-400 hover:to-emerald-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/resume"
              className="px-8 py-3 bg-slate-800 text-cyan-400 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-slate-700 transition-all hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">3.59</div>
              <div className="text-slate-400">GPA at Georgia Tech</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">4</div>
              <div className="text-slate-400">Internships</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">10+</div>
              <div className="text-slate-400">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">2027</div>
              <div className="text-slate-400">MS Graduation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Core Skills
          </h2>
          <p className="text-center text-slate-400 mb-12">Technologies I work with daily</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Python',
              'Java',
              'JavaScript',
              'TypeScript',
              'Vue.js',
              'AWS',
              'Machine Learning',
              'SQL',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all text-center border border-slate-700 hover:border-cyan-500/50 group"
              >
                <div className="text-lg font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:vrjkothari22@gmail.com"
            className="inline-block px-8 py-3 bg-slate-900 text-cyan-400 rounded-lg font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
