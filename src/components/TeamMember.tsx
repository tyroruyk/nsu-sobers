import { Users } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="group bg-gradient-to-br from-red-900/30 to-black border-2 border-red-600/50 hover:border-red-600 p-6 text-center hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300 rounded-lg">
      {/* Profile Image */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-600 group-hover:border-red-400 transition-all duration-300">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
              <Users className="w-16 h-16 text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Member Info */}
      <div className="space-y-2">
        <h3 className="font-bold text-base text-white group-hover:text-red-400 transition-colors duration-300">
          {name}
        </h3>
        <div className="h-1 w-12 bg-red-600 mx-auto group-hover:w-20 transition-all duration-300"></div>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
          {role}, NSUCEC
        </p>
      </div>
    </div>
  );
}
