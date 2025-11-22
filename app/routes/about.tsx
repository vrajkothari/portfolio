import { TypewriterText } from '~/components/InteractiveText';
import { ScrollReveal } from '~/components/ParallaxElement';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-slate-400">
          <TypewriterText text="Get to know me better" speed={35} />
        </p>
      </div>

      {/* Bio Section */}
      <ScrollReveal className="bg-slate-800/50 rounded-2xl shadow-xl border border-slate-700 p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-slate-900 text-6xl font-bold shadow-xl shadow-cyan-500/20 shrink-0">
            VK
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Hi, I'm Vraj Kothari 👋</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I'm a Computer Science student at Georgia Institute of Technology pursuing a BS/MS
              degree with a concentration in Artificial Intelligence. Currently a Software
              Engineering Intern at Shopify working on Growth R&D and CX initiatives. I'm passionate
              about building scalable software solutions and exploring the frontiers of AI/ML.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Through my internships at Shopify, URBN, CBORD Group, and Snap Inc., I've gained
              hands-on experience in full-stack development, AR experiences, and cloud technologies.
              I love solving complex problems, whether it's optimizing payment flows, building AI
              assistants, or developing autonomous systems with LiDAR technology.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me rock climbing with GT Climbing Club, working on
              drone projects, or contributing to theater tech at DramaTech@GT. I'm always eager to
              learn new technologies and collaborate on impactful projects.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Skills Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Frontend */}
          <ScrollReveal className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'Vue.js', 'HTML/CSS', 'Android Studio'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Backend */}
          <ScrollReveal className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-slate-700" delay={100}>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Python',
                'Java',
                'C',
                'SQL',
                'Node.js',
                'REST APIs',
                'AWS (Lambda, S3, Rekognition)',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Tools */}
          <ScrollReveal className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-slate-700" delay={200}>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Git',
                'VS Code',
                'IntelliJ',
                'Postman',
                'Jira',
                'Agile/Scrum',
                'Confluence',
                'Android Studio',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Other */}
          <ScrollReveal className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-slate-700" delay={300}>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Machine Learning',
                'AI/Deep Learning',
                'ROS (Robot Operating System)',
                'AR/Lens Studio',
                'LiDAR',
                'Computer Vision',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Interests & Hobbies */}
      <ScrollReveal className="bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
        <h2 className="text-3xl font-bold mb-6">Beyond Code</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ScrollReveal className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-4xl mb-3">🧗</div>
            <h3 className="text-xl font-bold mb-2">Rock Climbing</h3>
            <p className="opacity-90">
              Active member of GT Climbing Club, pushing limits both on and off the wall
            </p>
          </ScrollReveal>
          <ScrollReveal className="bg-white/10 backdrop-blur rounded-lg p-6" delay={100}>
            <div className="text-4xl mb-3">🚁</div>
            <h3 className="text-xl font-bold mb-2">Drones & Flight</h3>
            <p className="opacity-90">
              Building and flying drones with the Experimental Flight Club
            </p>
          </ScrollReveal>
          <ScrollReveal className="bg-white/10 backdrop-blur rounded-lg p-6" delay={200}>
            <div className="text-4xl mb-3">🎭</div>
            <h3 className="text-xl font-bold mb-2">Theater Tech</h3>
            <p className="opacity-90">
              Contributing to DramaTech@GT productions through technical theater work
            </p>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </div>
  );
}
