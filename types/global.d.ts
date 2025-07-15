interface WorkingTimeLine {
  startAt: string;
  company: string;
  finishAt: null | string;
  role: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  techStacks: string[];
  thumbnail?: string;
  link?: string;
  sourceLink?: string;
}

interface WorkingExperience {
  id: string;
  role: string;
  projectName: string;
  startAt: Date | string;
  finishAt?: Date | string;
  company: string;
  description: string;
  techStacks: string[];
}

interface ActionResponse<T> {
  success: boolean;
  data?: T;
}
