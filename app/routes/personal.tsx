export default function Personal() {
  const hobbies = [
    {
      title: 'Rock Climbing',
      emoji: '🧗',
      description:
        'Passionate climber and active member of GT Climbing Club. Love the challenge of both indoor and outdoor climbing, pushing my limits on the wall.',
      highlights: [
        'Regular member of GT Climbing Club',
        'Indoor bouldering and top rope',
        'Outdoor climbing adventures',
        'Building strength and problem-solving skills',
      ],
      media: [{ type: 'placeholder', caption: 'Add your climbing videos and photos here!' }],
    },
    {
      title: 'Weightlifting',
      emoji: '💪',
      description:
        'Dedicated to strength training and fitness. Weightlifting helps me stay disciplined, build physical and mental strength, and maintain balance in life.',
      highlights: [
        'Regular gym sessions',
        'Focus on compound movements',
        'Progressive overload training',
        'Building consistency and discipline',
      ],
      media: [{ type: 'placeholder', caption: 'Add your gym videos and progress photos here!' }],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Personal Life
        </h1>
        <p className="text-xl text-slate-400">Beyond the code - my hobbies and passions</p>
      </div>

      {/* Hobbies Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-2xl shadow-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 p-8 text-center">
              <div className="text-6xl mb-4">{hobby.emoji}</div>
              <h2 className="text-3xl font-bold text-white">{hobby.title}</h2>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-slate-300 leading-relaxed mb-6">{hobby.description}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Highlights:</h3>
                <ul className="space-y-2">
                  {hobby.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="text-emerald-400 mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Media Placeholder */}
              <div className="bg-slate-900/50 rounded-lg p-8 border-2 border-dashed border-slate-700 text-center">
                {hobby.media.map((item, i) => (
                  <div key={i}>
                    <div className="text-4xl mb-3">📸</div>
                    <p className="text-slate-400 italic">{item.caption}</p>
                    <p className="text-slate-500 text-sm mt-2">
                      Update this component to add images/videos
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Interests */}
      <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-6">Other Interests & Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-4xl mb-3">🚁</div>
            <h3 className="text-xl font-bold text-white mb-2">Drones & Flight</h3>
            <p className="text-white/90">
              Member of Drones and Experimental Flight Club, building and flying drones
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-4xl mb-3">🎭</div>
            <h3 className="text-xl font-bold text-white mb-2">Theater Tech</h3>
            <p className="text-white/90">
              Contributing to DramaTech@GT productions through technical theater work
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-white mb-2">VIP Research</h3>
            <p className="text-white/90">
              Active member of Vertically Integrated Projects working on LiDAR systems
            </p>
          </div>
        </div>
      </div>

      {/* Add Your Own Section */}
      <div className="mt-16 bg-slate-800/30 rounded-2xl shadow-lg p-8 border border-slate-700">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Want to Add More?</h2>
        <p className="text-slate-300 mb-4">
          This page is designed to be your personal space. Edit{' '}
          <code className="px-2 py-1 bg-slate-900 rounded text-emerald-400">
            app/routes/personal.tsx
          </code>{' '}
          to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4">
          <li>Add climbing videos by replacing the placeholder sections</li>
          <li>
            Upload photos to <code className="text-emerald-400">public/images/personal/</code>
          </li>
          <li>Add more hobbies or interests to the hobbies array</li>
          <li>Customize the layout and styling to match your vibe</li>
        </ul>
      </div>
    </div>
  );
}
