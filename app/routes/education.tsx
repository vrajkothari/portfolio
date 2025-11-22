import { TypewriterText } from '~/components/InteractiveText';
import { ScrollReveal } from '~/components/ParallaxElement';
import FloatingCard from '~/components/FloatingCard';

export default function Education() {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      concentration: 'Concentration in Artificial Intelligence',
      school: 'Georgia Institute of Technology',
      location: 'Atlanta, GA',
      period: 'Expected December 2027',
      gpa: 'BS/MS Program',
      description:
        "Continuing advanced studies in AI through Georgia Tech's accelerated BS/MS program, focusing on cutting-edge machine learning and artificial intelligence research.",
      achievements: ['BS/MS Accelerated Program', 'AI Specialization Track'],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      concentration: 'Concentration in Intelligence',
      school: 'Georgia Institute of Technology',
      location: 'Atlanta, GA',
      period: 'Expected December 2026',
      gpa: '3.59',
      description:
        "Pursuing a comprehensive Computer Science education with a focus on Intelligence systems. Active member of Dean's List, demonstrating consistent academic excellence.",
      courses: [
        'Analysis of Algorithms',
        'Data Structures',
        'Artificial Intelligence',
        'Machine Learning',
        'Computer Organization',
        'Objects and Design',
        'Robotics',
        'UI/UX',
        'Applied Combinatorics',
        'Linear Algebra',
      ],
      achievements: [
        "Dean's List",
        'GPA: 3.59',
        'Member of VIP (Vertically Integrated Projects)',
        'GT Climbing Club Member',
        'Drones and Experimental Flight Club',
        'DramaTech@GT Member',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Software Engineering Intern',
      issuer: 'Shopify - Growth R&D CX Team',
      date: 'September 2025 - April 2026',
      icon: '💼',
    },
    {
      name: 'Frontend Software Engineering Intern',
      issuer: 'URBN (Urban Outfitters Group)',
      date: 'June 2025 - August 2025',
      icon: '🎨',
    },
    {
      name: 'Full Stack Software Engineering Intern',
      issuer: 'CBORD Group Inc.',
      date: 'June 2024 - August 2024',
      icon: '⚙️',
    },
    {
      name: 'AR Software Development Extern',
      issuer: 'Snap Inc.',
      date: 'March 2024 - April 2024',
      icon: '👓',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education
        </h1>
        <p className="text-xl text-slate-600">
          <TypewriterText text="My academic journey at Georgia Tech" speed={35} />
        </p>
      </div>

      {/* Education Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">Academic Background</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <ScrollReveal
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-shadow"
            >
              <FloatingCard className="block">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                  <div className="text-lg font-semibold text-blue-600 mb-1">
                    {edu.concentration}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 mb-1">{edu.school}</div>
                  <div className="text-slate-600">{edu.location}</div>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-2">
                    {edu.period}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {edu.gpa.includes('GPA') || edu.gpa.includes('Program')
                      ? edu.gpa
                      : `GPA: ${edu.gpa}`}
                  </div>
                </div>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">{edu.description}</p>

                {/* Courses */}
                {edu.courses && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-700 mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Achievements & Activities:</h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FloatingCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Professional Experience / Internships */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">Professional Experience</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              delay={index * 100}
            >
              <FloatingCard className="block">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800 mb-1">{cert.name}</h3>
                    <p className="text-slate-600 mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Skills & Learning */}
      <ScrollReveal className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
        <FloatingCard className="block">
          <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
          <p className="text-lg opacity-90 mb-6">
            Beyond formal education, I'm constantly expanding my knowledge through hands-on projects,
            VIP research, and practical internship experiences. My involvement in Vertically
            Integrated Projects at Georgia Tech allows me to work on real-world problems like
            automotive LiDAR systems while building a strong foundation in AI and ML.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'VIP Research',
              'Hackathons',
              'Industry Internships',
              'Open Source',
              'Tech Communities',
              'Project-Based Learning',
            ].map((platform) => (
              <span key={platform} className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg font-medium">
                {platform}
              </span>
            ))}
          </div>
        </FloatingCard>
      </ScrollReveal>
    </div>
  );
}
