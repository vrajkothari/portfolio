import { ScrollReveal } from '~/components/ParallaxElement';
import FloatingCard from '~/components/FloatingCard';

export default function Resume() {
  const handleDownload = () => {

    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vraj_Kothari_Resume.pdf';
    link.click();
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header with Download Button */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Resume / CV
        </h1>
        <p className="text-xl text-slate-600 mb-6">
          Comprehensive overview of my professional background
        </p>
        <button
          onClick={handleDownload}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg inline-flex items-center gap-2"
        >
          <span>📄</span>
          Download PDF Resume
        </button>
      </div>

      {/* Resume Content */}
      <ScrollReveal>
        <FloatingCard className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Contact Info */}
        <div className="text-center mb-8 pb-8 border-b border-slate-200">
          <h2 className="text-4xl font-bold text-slate-800 mb-2">Vraj Kothari</h2>
          <p className="text-xl text-slate-600 mb-4">
            Computer Science Student | SWE Intern @ Shopify
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-600">
            <a
              href="mailto:vrjkothari22@gmail.com"
              className="hover:text-blue-600 transition-colors"
            >
              📧 vrjkothari22@gmail.com
            </a>
            <span>•</span>
            <span>📱 (267) 707-8448</span>
            <span>•</span>
            <span>🇺🇸 US Citizen</span>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/vrajkothari" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/vraj-kothari"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">🎓</span>
            Education
          </h3>

          <div className="space-y-4">
            <ScrollReveal>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Georgia Institute of Technology
                  </h4>
                  <p className="text-slate-600">
                    Bachelor of Science in Computer Science, Concentration in Intelligence
                  </p>
                </div>
                <span className="text-slate-600 whitespace-nowrap">Dec 2026</span>
              </div>
              <p className="text-slate-600 mb-2">Dean's List • GPA: 3.59</p>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Relevant Coursework:</strong> Analysis of Algorithms, Data Structures,
                Artificial Intelligence, Machine Learning, Computer Organization and Programming,
                Objects and Design, Robotics, UI/UX, Applied Combinatorics, Linear Algebra
              </p>
              <p className="text-sm text-slate-600">
                <strong>Activities:</strong> VIP, GT Climbing Club, Drones and Experimental Flight
                Club, DramaTech@GT
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Master of Science in Computer Science, Concentration in AI
                  </h4>
                  <p className="text-slate-600">BS/MS Program</p>
                </div>
                <span className="text-slate-600 whitespace-nowrap">Dec 2027</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">💼</span>
            Work Experience
          </h3>

          <div className="space-y-6">
            {/* Shopify */}
            <ScrollReveal>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Software Engineering Intern</h4>
                  <p className="text-blue-600 font-semibold">
                    Shopify (Growth R&D - CX team) - Bellevue, WA
                  </p>
                </div>
                <span className="text-slate-600 whitespace-nowrap">Sept 2025 - Apr 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                <li>Working on Growth R&D initiatives focused on customer experience</li>
                <li>Contributing to projects impacting millions of merchants and customers</li>
              </ul>
            </ScrollReveal>

            {/* URBN */}
            <ScrollReveal delay={100}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Frontend Software Engineering Intern
                  </h4>
                  <p className="text-blue-600 font-semibold">
                    URBN (Urban Outfitters, Anthropologie, Free People) - Philadelphia, PA
                  </p>
                </div>
                <span className="text-slate-600 whitespace-nowrap">June 2025 - Aug 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                <li>
                  Resolved frontend bugs and optimized GA4 event tracking in Vue.js applications
                </li>
                <li>
                  Spearheaded dynamic payments ordering project for optimal payment type sorting
                </li>
                <li>
                  Built AI checkout assistant using LLMs, placing 2nd out of 18 in URBN's Hackathon
                </li>
                <li>Contributed to production features using Vue, TypeScript, and JavaScript</li>
              </ul>
            </ScrollReveal>

            {/* CBORD */}
            <ScrollReveal delay={200}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Full Stack Software Engineering Intern
                  </h4>
                  <p className="text-blue-600 font-semibold">CBORD Group Inc. - Duluth, GA</p>
                </div>
                <span className="text-slate-600 whitespace-nowrap">June 2024 - Aug 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                <li>Reduced manual validation time by 50% by integrating AWS Rekognition</li>
                <li>Implemented 100s of API calls using Postman, improving backend efficiency</li>
                <li>Updated SQL database structure to support photo upload functionalities</li>
                <li>Modernized full-site logos, improving UX and accessibility</li>
              </ul>
            </ScrollReveal>

            {/* Snap */}
            <ScrollReveal delay={300}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Augmented Reality Software Development Extern
                  </h4>
                  <p className="text-blue-600 font-semibold">Snap Inc. - Santa Monica, CA</p>
                </div>
                <span className="text-slate-600 whitespace-nowrap">Mar 2024 - Apr 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                <li>Built and tested interactive prototypes in Snap's Lens Studio</li>
                <li>Designed immersive AR experiences using 2D/3D assets</li>
                <li>Gained hands-on experience with AR design and development</li>
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">🚀</span>
            Notable Projects
          </h3>
          <div className="space-y-3">
            <ScrollReveal>
              <h4 className="font-bold text-slate-800">
                Machine Learning-Based Brain Tumor Detection
              </h4>
              <p className="text-slate-600">
                Designed CNN using VGG-16 architecture achieving high precision for glioblastoma
                diagnosis. Trained SVM with RBF achieving 91.5% accuracy and Random Forest models
                with 96% accuracy
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Tech: Python, TensorFlow, CNN, SVM, Random Forest, VGG-16
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h4 className="font-bold text-slate-800">
                Automotive LIDAR Vertically Integrated Project
              </h4>
              <p className="text-slate-600">
                Developed automotive LiDAR system for real-time data processing and obstacle
                detection, improving detection accuracy by over 20%
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Tech: Python, ROS, LiDAR, Computer Vision, Hyperspectral Imaging
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h4 className="font-bold text-slate-800">Dungeon Crawler Simulation</h4>
              <p className="text-slate-600">
                Led team of 5 devs to develop fully functional 2D Dungeon Crawler game in Android
                Studio with POV, enemy logic, and leaderboard
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Tech: Java, Android Studio, JUnit, Git, Agile/Scrum
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">💻</span>
            Technical Skills
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-slate-700 mb-1">Languages:</h4>
              <p className="text-slate-600">
                Python, Java, JavaScript, TypeScript, C, Assembly, SQL, HTML, CSS, PHP
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-1">Tools & Technologies:</h4>
              <p className="text-slate-600">
                VSC, IntelliJ, NetBeans, Vue.js, Node.js, XCode, PyCharm, Android Studio, AWS
                (Lambdas, Rekognition, S3), Git, SourceTree, Postman, Agile, Jira, Confluence, Snap
                Lens Studio, Microsoft Office
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-1">Specializations:</h4>
              <p className="text-slate-600">
                Machine Learning, AI/Deep Learning, Full-Stack Development, Cloud Computing, AR/VR,
                Robotics, Computer Vision
              </p>
            </div>
          </div>
        </section>
        </FloatingCard>
      </ScrollReveal>

      {/* Download CTA */}
      <ScrollReveal delay={150}>
        <FloatingCard className="mt-12 text-center">
          <button
            onClick={handleDownload}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>📥</span>
            Download Full Resume as PDF
          </button>
          <p className="text-slate-500 mt-4 text-sm">
            Want to get in touch?{' '}
            <a href="mailto:vrjkothari22@gmail.com" className="text-blue-600 hover:underline">
              Send me an email
            </a>
          </p>
        </FloatingCard>
      </ScrollReveal>
    </div>
  );
}
