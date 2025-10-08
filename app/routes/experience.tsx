export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Shopify',
      team: 'Growth R&D - CX Team',
      location: 'Bellevue, WA',
      period: 'September 2025 - April 2026',
      type: 'Internship',
      description:
        'Working on Growth R&D initiatives focused on customer experience improvements. Contributing to projects that impact millions of merchants and customers worldwide.',
      achievements: [
        'Developing features for customer experience optimization',
        'Collaborating with cross-functional teams on growth initiatives',
        'Working with modern web technologies at scale',
      ],
      technologies: ['React', 'TypeScript', 'Ruby on Rails', 'GraphQL', 'PostgreSQL'],
    },
    {
      title: 'Frontend Software Engineering Intern',
      company: 'URBN (Urban Outfitters, Anthropologie Group, Free People)',
      location: 'Philadelphia, PA',
      period: 'June 2025 - August 2025',
      type: 'Internship',
      description:
        'Enhanced e-commerce platforms for major retail brands, optimizing user experience and implementing data-driven improvements.',
      achievements: [
        'Resolved frontend bugs and optimized GA4 event tracking, improving site performance and customer behavior insights',
        'Spearheaded dynamic payments ordering project for optimal payment type sorting to enhance checkout experience',
        "Built AI checkout assistant using LLMs to explore Agentic commerce, placing 2nd out of 18 in URBN's Hackathon",
        'Contributed to production features using Vue, TypeScript, and JavaScript in an agile team environment',
      ],
      technologies: ['Vue.js', 'JavaScript', 'TypeScript', 'GA4', 'LLMs', 'Agile'],
    },
    {
      title: 'Full Stack Software Engineering Intern',
      company: 'CBORD Group Inc.',
      location: 'Duluth, GA',
      period: 'June 2024 - August 2024',
      type: 'Internship',
      description:
        'Developed full-stack solutions for campus card management systems, implementing cloud services and improving data processing.',
      achievements: [
        'Reduced manual validation time by 50% by integrating AWS Rekognition to enhance photo validation accuracy',
        'Implemented 100s of API calls using Postman and streamlined API integration, improving backend efficiency',
        'Updated SQL database structure to support photo upload functionalities, improving data processing speeds',
        'Elevated accessibility standards by modernizing full-site logos, improving UX and increasing user satisfaction',
      ],
      technologies: [
        'Python',
        'Java',
        'SQL',
        'AWS (Rekognition, Lambda, S3)',
        'Postman',
        'REST APIs',
      ],
    },
    {
      title: 'Augmented Reality Software Development Extern',
      company: 'Snap Inc.',
      location: 'Santa Monica, CA',
      period: 'March 2024 - April 2024',
      type: 'Externship',
      description:
        "Gained hands-on experience in AR development, creating immersive experiences using Snap's Lens Studio platform.",
      achievements: [
        "Built and tested interactive prototypes in Snap's Lens Studio for user-facing campaign concepts",
        'Designed immersive AR experiences using 2D/3D assets and storytelling principles to drive engagement',
        'Gained expertise with AR design and development, enhancing skills in digital storytelling and UX',
        'Collaborated with team to deliver creative AR solutions for marketing campaigns',
      ],
      technologies: ['Lens Studio', 'AR Design', '2D/3D Assets', 'JavaScript', 'Digital Design'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Work Experience
        </h1>
        <p className="text-xl text-slate-600">My professional journey in software engineering</p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content Card */}
              <div className="md:ml-20 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-slate-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                    <div className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</div>
                    {exp.team && <div className="text-slate-600 mb-1">{exp.team}</div>}
                    <div className="text-slate-600">{exp.location}</div>
                  </div>
                  <div className="mt-4 lg:mt-0 flex flex-col items-start lg:items-end gap-2">
                    <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                      {exp.period}
                    </div>
                    <div className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                      {exp.type}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="text-blue-600 mt-1 text-lg">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center border border-slate-200">
          <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
          <div className="text-slate-600 text-sm">Internships</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center border border-slate-200">
          <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
          <div className="text-slate-600 text-sm">Major Companies</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center border border-slate-200">
          <div className="text-3xl font-bold text-pink-600 mb-2">10+</div>
          <div className="text-slate-600 text-sm">Technologies</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center border border-slate-200">
          <div className="text-3xl font-bold text-indigo-600 mb-2">50%</div>
          <div className="text-slate-600 text-sm">Efficiency Gains</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
        <p className="text-lg opacity-90 mb-6">
          I'm always open to discussing new opportunities, internships, or collaborating on
          interesting projects.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:vrjkothari22@gmail.com"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-slate-100 transition-all hover:shadow-lg"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/vraj-kothari"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/20 backdrop-blur text-white border-2 border-white rounded-lg font-medium hover:bg-white/30 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
