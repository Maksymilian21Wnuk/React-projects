import { TeamMember } from "../../../types";


export default function Team(props: { team: TeamMember[] }) {
  return (
    <section id="team" className="bg-gray dark:bg-zinc-900 dark:text-white text-black py-5">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl mb-6 font-medium">Meet Our Team</h2>
        <div className="team-members grid grid-cols-1 sm:grid-cols-2 gap-8">
          {props.team.map((member) => (
            <div key={member.id} className="team-member dark:bg-zinc-800 bg-zinc-50 flex flex-col items-center p-4">
              <div className="rounded-full overflow-hidden w-32 h-32 mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-white">{member.position}</p>
                <p className="text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}