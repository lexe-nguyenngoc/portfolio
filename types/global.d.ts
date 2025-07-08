interface WorkingTimeLine {
  startAt: Date;
  company: string;
  finishAt: null | Date;
  role: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  techStacks: string[];
  thumbnail: string;
  link?: string;
  sourceLink?: string;
}
