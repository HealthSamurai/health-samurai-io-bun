// Health Samurai team members and blog contributors

export type Samurai = {
  name: string;
  alias: string;
  linkedin?: string;
  role?: string;
  avatar?: string;
};

export const samurai: Samurai[] = [
  {
    name: "Ivan Bagrov",
    alias: "ivan-bagrov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Aleksandr Kislitsyn",
    alias: "aleksandr-kislitsyn",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Maria Ryzhikova",
    alias: "maria-ryzhikova",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Artyom Bologov",
    alias: "artyom-bologov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Rostislav Antonov",
    alias: "rostislav-antonov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Nikolai Ryzhikov",
    alias: "nikolai-ryzhikov",
    linkedin: "",
    role: "CEO & Founder",
    avatar: "",
  },
  {
    name: "Mike Ryzhikov",
    alias: "mike-ryzhikov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Evgeny Mukha",
    alias: "evgeny-mukha",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Mike Kulakov",
    alias: "mike-kulakov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Anastasia Demina",
    alias: "anastasia-demina",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Svetlana Golubeva",
    alias: "svetlana-golubeva",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Pavel Smirnov",
    alias: "pavel-smirnov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Paul Chayka",
    alias: "paul-chayka",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Olim Saidov",
    alias: "olim-saidov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Marat Surmashev",
    alias: "marat-surmashev",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Kurt Johnson",
    alias: "kurt-johnson",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Guillermo Rodríguez",
    alias: "guillermo-rodriguez",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Aleksandr Penskoi",
    alias: "aleksandr-penskoi",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Vlad Zholnerchuk",
    alias: "vlad-zholnerchuk",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Vlad Ganshin",
    alias: "vlad-ganshin",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Stas Buldakov",
    alias: "stas-buldakov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Orlando Osorio",
    alias: "orlando-osorio",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Mike Lapshin",
    alias: "mike-lapshin",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Ilya Beda",
    alias: "ilya-beda",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Gennady Razmakhnin",
    alias: "gennady-razmakhnin",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Vasiliy Kupriakov",
    alias: "vasiliy-kupriakov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Daniil Chistoforov",
    alias: "daniil-chistoforov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Artem Alexeev",
    alias: "artem-alexeev",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Viktor Gusakov",
    alias: "viktor-gusakov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Andrey Listopadov",
    alias: "andrey-listopadov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Pavel Suverov",
    alias: "pavel-suverov",
    linkedin: "",
    role: "",
    avatar: "",
  },
  {
    name: "Max Putintsev",
    alias: "max-putintsev",
    linkedin: "",
    role: "",
    avatar: "",
  },
];

export function getSamuraiByName(name: string): Samurai | undefined {
  const normalized = name.toLowerCase().trim();
  return samurai.find(s => s.name.toLowerCase() === normalized);
}

export function getSamuraiByAlias(alias: string): Samurai | undefined {
  return samurai.find(s => s.alias === alias);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
