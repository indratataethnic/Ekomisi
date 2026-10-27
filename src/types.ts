export type EcosystemId = 'sawah' | 'laut' | 'gurun';

export type OrganismCategory = 'Produsen' | 'Konsumen I' | 'Konsumen II' | 'Konsumen Puncak' | 'Pengurai';

export interface OrganismStoryParagraph {
  sceneTitle: string;
  content: string;
}

export interface OrganismStory {
  title: string;
  theme: string;
  synopsis: string;
  paragraphs: OrganismStoryParagraph[];
  moralValue: string;
  scienceQuestion: string;
  scienceAnswer: string;
}

export interface MissionQuestion {
  id: string;
  title: string;
  prompt: string;
  options: {
    label: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface OrganismMission {
  title: string;
  scenario: string;
  badgeName: string;
  questions: MissionQuestion[];
}

export interface Organism {
  id: string;
  name: string;
  scientificName: string;
  category: OrganismCategory;
  trophicRole: string; // e.g. "Tingkat Trofik 1 (Autotrof)"
  badgeColor: string; // e.g. 'emerald', 'amber', 'orange', 'rose', 'purple'
  sliceColor: string; // hex color for SVG slice
  textColor: string; // hex color for slice text
  emoji: string;
  summary: string;
  habitat: string;
  diet: string;
  predator: string;
  adaptation: string;
  funFact: string;
  dongeng: OrganismStory;
  misi: OrganismMission;
}

export interface EcosystemData {
  id: EcosystemId;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  bgImage: string;
  primaryColor: string;
  organisms: Organism[];
  chainFlow: {
    level: string;
    label: string;
    organismId: string;
    organismName: string;
  }[];
}
