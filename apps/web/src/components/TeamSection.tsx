import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

interface TeamSectionProps {
  isVisible: boolean;
  sectionId: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isVisible, sectionId }) => {
  const teamMembers: TeamMember[] = [
    {
      name: "Fakhair Spence",
      role: "Co-Founder | CEO",
      image: "/assets/team/fakhair.jpeg",
    },
    {
      name: "Anthony Caruso",
      role: "Co-Founder | CTO",
      image: "/assets/team/anthony.jpeg",
    },
    {
      name: "Azeez",
      role: "Lead Technical Director",
      image: "/assets/team/azeez.jpeg",
    },
    {
      name: "Sean",
      role: "Senior Backend Developer",
      image: "/assets/team/sean.jpeg",
    },
    {
      name: "Thomas",
      role: "Senior AI Developer",
      image: "/assets/team/thomas.jpeg",
    },
    {
      name: "Jiyan",
      role: "Full Stack Developer",
      image: "/assets/team/jiyan.jpeg",
    },
    {
      name: "Marwa",
      role: "UI/UX Designer",
      image: "/assets/team/marwa.jpeg",
    },
  ];

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  const getAvatarColor = (name: string): string => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-red-500',
      'bg-yellow-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-teal-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          data-section={sectionId}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#1873D3] font-semibold text-sm tracking-wide mb-6">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16.5c-.8 0-1.54.37-2.01 1.01L12 14v6h4v-6l1.5-2.5L19 14.5V22h1z" />
              </svg>
              OUR TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00017A] mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and
              exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6">
                  {member.image ? (
                    <img
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full mx-auto shadow-lg"
                      src={member.image}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const avatarDiv = document.createElement('div');
                          avatarDiv.className = `w-24 h-24 ${getAvatarColor(member.name)} rounded-full mx-auto shadow-lg flex items-center justify-center text-white font-bold text-xl`;
                          avatarDiv.textContent = getInitials(member.name);
                          parent.appendChild(avatarDiv);
                        }
                      }}
                    />
                  ) : (
                    <div className={`w-24 h-24 ${getAvatarColor(member.name)} rounded-full mx-auto shadow-lg flex items-center justify-center text-white font-bold text-xl`}>
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#00017A] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#1237A1] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;