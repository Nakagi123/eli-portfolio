export type JourneyPath = 'education' | 'experience';

export type JourneyStatus = 'ongoing' | 'completed';

export interface JourneyEntry {
  id: string;
  path: JourneyPath;
  status: JourneyStatus;

  title: string;
  organization: string;
  location?: string;

  startDate: string; // YYYY-MM
  endDate?: string;  // YYYY-MM

  description: string;
  highlights?: string[];
  tags?: string[];
  link?: string;
}

export const journeyEntries: JourneyEntry[] = [
  {
    id: 'smkn-7-semarang',
    path: 'education',
    status: 'ongoing',

    title: 'Vocational High School — SIJA',
    organization: 'SMK Negeri 7 Semarang',
    location: 'Semarang, Indonesia',

    startDate: '2023-07',
    endDate: '2027-07',

    description:
      'Studying Sistem Informasi Jaringan Aplikasi (SIJA), ' +
      'with a focus on information systems, computer networks, ' +
      'and application development.',

    highlights: [
      'Sistem Informasi Jaringan Aplikasi (SIJA)',
    ],

    tags: [
      'Information Systems',
      'Networking',
      'Application Development',
    ],
  },

  {
    id: 'projectkita-internship',
    path: 'experience',
    status: 'ongoing',

    title: 'Software Engineer Intern',
    organization:
      'Projectkita ID (CV. Karsa Cipta Teknologi Indonesia)',

    startDate: '2026-05',
    endDate: '2027-02',

    description:
      'Developing web applications for real-world IoT monitoring ' +
      'systems, including groundwater level, rainfall, and ' +
      'power meter monitoring. Also responsible for managing ' +
      'the company’s server systems.',

    highlights: [
      'Develop web applications for IoT monitoring devices.',
      'Work with groundwater level, rainfall, and power meter monitoring systems.',
      'Manage and maintain company server systems.',
    ],

    tags: [
      'Software Engineering',
      'IoT',
      'Web Development',
      'Server Administration',
    ],
  },
];