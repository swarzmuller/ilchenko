export interface PopularData {
  id: string | number;
  name: string;
  owner: { avatar_url: string; login: string };
  html_url: string;
  stargazers_count: string;
}

export interface PopularProps {
  repos: Array<PopularData>;
}

export interface TabsProps {
  lang: string | null;
  tabsSwitcher: (value: string) => void;
}
