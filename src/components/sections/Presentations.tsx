type Presentation = {
  title: string;
  speaker: string;
  date: string;
  href: string;
};

const presentations: Presentation[] = [
  {
    title: "Building FHIR-native Applications",
    speaker: "Pavel Sokolov",
    date: "HL7 FHIR DevDays 2024",
    href: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "FHIR Database Design Patterns",
    speaker: "Nikolai Ryzhikov",
    date: "FHIR Camp 2024",
    href: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "US Core Implementation Guide Deep Dive",
    speaker: "Ivan Gorbachev",
    date: "HL7 FHIR DevDays 2024",
    href: "https://www.youtube.com/watch?v=example3",
  },
  {
    title: "SMART on FHIR Authorization",
    speaker: "Health Samurai Team",
    date: "FHIR Meetup SF 2024",
    href: "https://www.youtube.com/watch?v=example4",
  },
];

export function Presentations(): string {
  return (
    <div className="mt-16 pt-12 border-t border-[#ebebeb]">
      <h3 className="text-[24px] font-bold text-[rgb(53,59,80)] mb-6">Our Presentations:</h3>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {presentations.map((pres) => (
          <a href={pres.href} className="flex items-start gap-3 rounded-lg bg-[#f7f7f7] p-4 text-[#333333] transition-all duration-150 hover:bg-white hover:shadow-md" target="_blank" rel="noopener noreferrer">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-[14px] font-semibold leading-snug text-[rgb(53,59,80)]">{pres.title}</h4>
              <p className="text-[12px] text-[#666666]">{pres.speaker} • {pres.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
