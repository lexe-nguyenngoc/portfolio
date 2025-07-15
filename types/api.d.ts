interface HeroData {
  name: string;
  greeting: { value: string; highlight?: boolean }[];
}

interface AboutMeData {
  summaries: string[];
  timelines: WorkingTimeLine[];
}
