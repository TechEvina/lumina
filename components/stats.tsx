import React from 'react';

const StatsAndPromiseSection = () => {
  return (
    <div className="bg-white px-8 py-16 mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Stats Container - Rounded dark box, not full width */}
        <div className="bg-gray-800 rounded-3xl px-12 py-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Stat 1 */}
            <div>
              <div className="text-4xl font-bold text-white mb-3">4 in 5</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                students say Lumina helps them stay enrolled in school.
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="text-4xl font-bold text-white mb-3">95%</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                positive student rating of Lumina's Self Care program.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="text-4xl font-bold text-white mb-3">91%</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                of students attend their first visit with their therapist or psychiatrist.
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <div className="text-4xl font-bold text-white mb-3">83%</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                of students with severe depression experienced improvements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner - Light blue, contained width */}
        <div className="bg-blue-100 rounded-2xl px-8 py-6 mb-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">
              Expand your offerings today.
            </h3>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-200 mb-16"></div>

        
      </div>
    </div>
  );
};

export default StatsAndPromiseSection;