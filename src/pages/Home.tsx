import { Target, Users, Zap } from 'lucide-react';
import TeamMember from '../components/TeamMember';
import { facultyAdvisor, membersBySection } from '../data/members';

const roadmapPhases = [
  {
    month: 'October 2025',
    tasks: [
      'Finalize team & roles',
      'Complete safety training',
      'Submit Critical Design Review (CDR)',
      'Begin detailed CAD modelling'
    ]
  },
  {
    month: 'November 2025',
    tasks: [
      'Incorporate CDR feedback',
      'Procure long-lead parts',
      'First prototype build & bench tests',
      'Draft System Acceptance Review (SAR)'
    ]
  },
  {
    month: 'December 2025',
    tasks: [
      'Finalize detailed design',
      'Complete key subsystem fabrication',
      'Perform integrated functional tests',
      'Refine SAR documentation'
    ]
  },
  {
    month: 'January 2026',
    tasks: [
      'Assemble full rover',
      'Perform mobility trials',
      'Plan field tests',
      'Coordinate AU transport logistics'
    ]
  },
  {
    month: 'February 2026',
    tasks: [
      'Submit SAR & video by Feb 11',
      'Submit Cost Report by Mar 11',
      'Final validation tests',
      'Mock-competition rehearsal'
    ]
  },
  {
    month: 'March 2026',
    tasks: [
      'Pre-competition checklist',
      'Transport rover to Roseworthy Campus',
      'Australian Rover Challenge (Mar 26-29)',
      'Execute competition missions'
    ]
  }
];

const rules = [
  { title: 'Safety First', desc: 'Complete safety training, wear PPE, never work alone, report hazards immediately' },
  { title: 'Attendance', desc: 'Maintain 80% attendance at weekly meetings, 48-hour absence notice required' },
  { title: 'Academic Standing', desc: 'Maintain good standing at NSU, academics always take priority' },
  { title: 'Professional Conduct', desc: 'Zero tolerance for harassment, discrimination, or academic dishonesty' },
  { title: 'Confidentiality', desc: 'Team designs are confidential, social media posts require pre-approval' },
];

export default function Home() {
  return (
    <div className="bg-black text-white w-full">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-6">
              NSU <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">SOBERS</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Shaping the future of robotics and autonomous systems. NSU Sobers represents North South University on the global stage, driving innovation with advanced technology and a commitment to engineering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-gradient-to-br from-red-900/30 to-black border-2 border-red-600 p-8 hover:shadow-lg hover:shadow-red-600/50 transition-all">
              <Zap className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">INNOVATION</h3>
              <p className="text-gray-400">Pushing boundaries with advanced autonomous systems and intelligent rover design</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-black border-2 border-red-600 p-8 hover:shadow-lg hover:shadow-red-600/50 transition-all">
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">COLLABORATION</h3>
              <p className="text-gray-400">A unified team dedicated to excellence and mutual support</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-black border-2 border-red-600 p-8 hover:shadow-lg hover:shadow-red-600/50 transition-all">
              <Target className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">EXCELLENCE</h3>
              <p className="text-gray-400">Committed to delivering world-class robotics solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-12 text-center">
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">ABOUT</span> US
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Who We Are</h3>
              <p className="text-gray-300 leading-relaxed">
                NSU Sobers is the official robotics team under the North South University Computer & Engineering Club (NSU CEC). We are a team of passionate engineers, innovators, and problem-solvers dedicated to advancing autonomous systems and space robotics.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to design and develop next-generation autonomous rovers capable of tackling complex Mars and lunar exploration challenges — including navigation, excavation, resource analysis, and terrain mapping — while proudly representing NSU on the global stage.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To establish NSU as a leader in robotics innovation and autonomous systems development, contributing meaningfully to the advancement of space exploration technology.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where our rover successfully completes all Australian Rover Challenge missions and inspires the next generation of engineers and scientists at NSU.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/40 to-black border-l-4 border-red-600 p-8 group">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Faculty Advisor Photo */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-full blur-sm"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-600">
                  {facultyAdvisor.image ? (
                    <img 
                      src={facultyAdvisor.image} 
                      alt={facultyAdvisor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Quote and Name */}
              <div className="flex-1">
                <p className="text-lg italic text-gray-300 mb-4">
                  "The greatest accomplishments require three things: vision, dedication, and the courage to pursue excellence even when the path is uncertain."
                </p>
                <div className="h-1 w-12 bg-red-600 mx-auto md:mx-0 rounded-full group-hover:w-20 transition-all duration-300 mb-1"></div>
                <div>
                  <p className="text-red-400 font-bold hover:text-red-600 transition duration-300"><a href={facultyAdvisor.link} target="_blank" rel="noopener noreferrer">{facultyAdvisor.name}</a></p>
                  <p className="text-gray-400 text-sm">{facultyAdvisor.role}</p>
                  <p className="text-gray-400 text-sm">Faculty Advisor, NSU Sobers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-12 text-center">
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">CORE</span> TEAM
          </h2>

          {membersBySection.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-red-400">
                {section.sectionTitle}
              </h3>
              <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                {section.members.map((member) => (
                  <div className="flex-shrink-0 w-64"> {/* fixed width */}
                    <TeamMember
                      name={member.name}
                      role={member.role}
                      image={member.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              All members operate on equal footing, united by our shared mission to push the boundaries of robotics innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-12 text-center">
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">ROADMAP</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-900/30 to-black border-2 border-red-600/50 hover:border-red-600 p-6 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-red-400 mb-4">{phase.month}</h3>
                <ul className="space-y-3">
                  {phase.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start space-x-3">
                      <span className="text-red-600 font-bold mt-1">▸</span>
                      <span className="text-gray-300 text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-12 text-center">
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">CORE</span> RULES
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-900/30 to-black border-l-4 border-red-600 p-6 hover:shadow-lg hover:shadow-red-600/30 transition-all"
              >
                <h3 className="text-xl font-bold text-red-400 mb-2">{rule.title}</h3>
                <p className="text-gray-300">{rule.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-900/20 border-2 border-red-600 rounded">
            <p className="text-gray-300 font-semibold mb-2">Violation Consequences:</p>
            <p className="text-gray-400">1st Warning: Additional responsibilities | 2nd Warning: Probationary status | 3rd Warning: Suspension | Severe Violation: Immediate Expulsion</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-12 pb-20 px-4 bg-gradient-to-b from-black to-red-950/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">CONTACT</h2>
          <p className="text-gray-400 mb-4">Connect with us on Facebook</p>
          <a
            href="https://facebook.com/nsusobers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-white hover:underline pt-4"
          >
            {/* NSU SOBERS text logo (same gradient style as hero) */}
            <span className="text-2xl font-black tracking-wider">
              <img src='/text-logo.png' alt='NSU SOBERS Logo' className='inline-block h-12'/>
            </span>
            <span className="font-semibold text-2xl pl-2">on Facebook</span>
          </a>
        </div>
      </section>

      <div className="mt-4 pt-8 border-t border-red-600/30 text-gray-500 text-sm max-w-4xl mx-auto text-center py-10 px-4 bg-black">
        <p>NSU Sobers • North South University</p>
      </div>        
    </div>
  );
}
