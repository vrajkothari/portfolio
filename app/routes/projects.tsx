import FloatingCard from '~/components/FloatingCard';
import { TypewriterText } from '~/components/InteractiveText';
import { ScrollReveal } from '~/components/ParallaxElement';

export default function Projects() {
  const projects = [
    {
      title: 'Machine Learning-Based Brain Tumor Detection',
      category: 'Machine Learning',
      description:
        'Advanced ML system for medical diagnostics using CNNs, SVM, and Random Forest models to detect and classify brain tumors with high accuracy, significantly improving diagnostic capabilities.',
      image: '🧠',
      technologies: ['Python', 'TensorFlow', 'CNN', 'SVM', 'Random Forest', 'VGG-16'],
      features: [
        'CNN using VGG-16 architecture for glioblastoma diagnosis',
        'SVM with RBF achieving 91.5% accuracy',
        'Random Forest model with 96% accuracy',
        'Advanced preprocessing: resizing, normalization, standardization',
      ],
      links: {
        github: 'https://github.com/vrajkothari',
      },
      stats: {
        accuracy: '96%',
        models: '3',
      },
      timeframe: 'Fall 2024',
    },
    {
      title: 'Automotive LIDAR System',
      category: 'Robotics',
      description:
        'Vertically Integrated Project developing an automotive LiDAR system for autonomous vehicles with real-time obstacle detection, advancing vehicle autonomy through cutting-edge sensor technology.',
      image: '🚗',
      technologies: ['Python', 'ROS', 'LiDAR', 'Computer Vision', 'Hyperspectral Imaging'],
      features: [
        'Real-time data processing pipeline',
        'Obstacle detection and avoidance algorithms',
        'Scalable multimedia content delivery',
        '20%+ improvement in detection accuracy',
      ],
      links: {
        github: 'https://github.com/vrajkothari',
      },
      stats: {
        improvement: '20%+',
        status: 'Ongoing',
      },
      timeframe: 'Spring 2024 - Present',
    },
    {
      title: 'AI Checkout Assistant',
      category: 'AI/LLM',
      description:
        "Built an innovative AI-powered checkout assistant using Large Language Models to explore Agentic commerce. Placed 2nd out of 18 teams in URBN's company-wide hackathon.",
      image: '🤖',
      technologies: ['LLMs', 'JavaScript', 'TypeScript', 'Vue.js', 'AI/ML APIs'],
      features: [
        'Natural language processing for checkout assistance',
        'Intelligent product recommendations',
        'Real-time customer support integration',
        'Seamless e-commerce integration',
      ],
      links: {},
      stats: {
        placement: '2nd/18',
        impact: 'High',
      },
      timeframe: 'Summer 2025',
    },
    {
      title: 'Dungeon Crawler Simulation',
      category: 'Game Development',
      description:
        'Led a team of 5 developers to create a fully functional 2D dungeon crawler game in Android Studio using Java, featuring engaging gameplay mechanics and team leaderboards.',
      image: '🎮',
      technologies: ['Java', 'Android Studio', 'Git', 'JUnit', 'Agile'],
      features: [
        'Point-of-view gameplay mechanics',
        'Intelligent enemy logic and AI',
        'Leaderboard system with persistence',
        'Agile development with weekly scrums',
      ],
      links: {
        github: 'https://github.com/vrajkothari',
      },
      stats: {
        team: '5 devs',
        features: '10+',
      },
      timeframe: 'Fall 2023',
    },
    {
      title: 'Dynamic Payments Ordering System',
      category: 'Full Stack',
      description:
        'Designed and implemented a dynamic payment type sorting system to optimize checkout experience by intelligently ordering payment methods based on various factors.',
      image: '💳',
      technologies: ['Vue.js', 'TypeScript', 'JavaScript', 'Payment APIs'],
      features: [
        'Intelligent payment method prioritization',
        'Real-time sorting algorithms',
        'Seamless checkout flow integration',
        'A/B testing framework',
      ],
      links: {},
      stats: {
        impact: 'Production',
        users: '1M+',
      },
      timeframe: 'Summer 2025',
    },
    {
      title: 'AWS Photo Validation System',
      category: 'Cloud/AI',
      description:
        'Integrated AWS Rekognition to automate photo validation for campus card systems, reducing manual validation time by 50% while improving accuracy.',
      image: '📸',
      technologies: ['AWS Rekognition', 'Python', 'Java', 'AWS Lambda', 'S3', 'SQL'],
      features: [
        '50% reduction in validation time',
        'Automated facial recognition',
        'Database integration for photo storage',
        'Scalable cloud architecture',
      ],
      links: {},
      stats: {
        efficiency: '50%+',
        processed: '1000s',
      },
      timeframe: 'Summer 2024',
    },
  ];

  const categories = [
    'All',
    'Machine Learning',
    'Robotics',
    'AI/LLM',
    'Full Stack',
    'Game Development',
    'Cloud/AI',
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          <TypewriterText
            text="A showcase of my work in AI, ML, full-stack development, and more"
            speed={35}
          />
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white border-2 border-slate-200 rounded-lg font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <ScrollReveal
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-200"
            delay={index * 100}
          >
            <FloatingCard className="block">
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-7xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 flex-1">{project.title}</h3>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500">{project.timeframe}</span>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-4 text-xs text-slate-600">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-1">
                      <span className="font-semibold">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {(project as any).links?.live && (
                    <a
                      href={(project as any).links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {(project as any).links?.github && (
                    <a
                      href={(project as any).links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-900 transition-colors text-center text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {!(project as any).links?.github && !(project as any).links?.live && (
                    <div className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-medium text-center text-sm">
                      Internal Project
                    </div>
                  )}
                </div>
              </div>
            </FloatingCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Stats Section */}
      <ScrollReveal className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16 border border-slate-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Project Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-slate-600">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">96%</div>
            <div className="text-slate-600">ML Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">2nd</div>
            <div className="text-slate-600">Hackathon Placement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
            <div className="text-slate-600">Technologies</div>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Collaborate?</h2>
        <p className="text-lg opacity-90 mb-6">
          I'm always interested in working on exciting projects, especially in AI/ML, robotics, and
          full-stack development!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:vrjkothari22@gmail.com"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-slate-100 transition-all hover:shadow-lg"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/vrajkothari"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/20 backdrop-blur text-white border-2 border-white rounded-lg font-medium hover:bg-white/30 transition-all"
          >
            View GitHub
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
