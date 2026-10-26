export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  driveUrl: string;
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    id: 'samsung-innovation-campus-batch-6',
    title: 'Samsung Innovation Campus Batch 6',
    issuer: 'Hacktiv8 Indonesia',
    date: '2024-12',
    description:
      'Participated in Samsung Innovation Campus Batch 6, ' +
      'exploring Internet of Things (IoT) concepts and ' +
      'technology-driven solutions.',
    tags: ['Internet of Things', 'IoT', 'Technology'],
    driveUrl: 'https://drive.google.com/file/d/1G9RUWyU70CjbOmIC7Ev-ANiKEBrYg1Qo/view?usp=sharing',
    featured: true,
  },
  {
    id: 'toeic-listening-reading',
    title: 'TOEIC Listening and Reading Official Score Certificate',
    issuer: 'TOEIC Program',
    date: '2025-08',
    description:
      'Earned an official TOEIC Listening and Reading ' +
      'score certificate, demonstrating English-language ' +
      'listening and reading proficiency.',
    tags: ['English', 'Listening', 'Reading'],
    driveUrl: 'https://drive.google.com/file/d/13ZcEY4W3v8UoJpdXsei5P4lG7tiJEl0w/view?usp=sharing',
    featured: true,
  },
  {
    id: 'telkom-ui-ux-designer',
    title: 'Sertifikat UI/UX Designer',
    issuer: 'PT Telkom Prima Cipta Certifia',
    date: '2024-11',
    description:
      'Completed a UI/UX design certification covering ' +
      'user interface design and user experience principles.',
    tags: ['UI/UX', 'Web Design', 'Design'],
    driveUrl: 'https://drive.google.com/file/d/1PJqEve9KqMaf348mAci45sVQUcvZq7Oh/view?usp=sharing',
    featured: false,
  },
  {
    id: 'bnsp-desainer-multimedia-muda',
    title: 'Sertifikat BNSP Desainer Multimedia Muda',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: '2025-01',
    description:
      'Obtained a professional competency certification ' +
      'in junior multimedia design, covering web design ' +
      'and UI/UX-related competencies.',
    tags: ['Multimedia Design', 'Web Design', 'UI/UX'],
    driveUrl: 'https://drive.google.com/file/d/1MfRz6ur_DV-u3LOeaZZypNmLq_3AgvW7/view?usp=sharing',
    featured: true,
  },
];