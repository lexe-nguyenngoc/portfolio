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
  thumbnail: string;
  link?: string;
  sourceLink?: string;
}

interface ActionResponse<T> {
  success: boolean;
  data?: T;
}
