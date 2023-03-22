export interface PopularData {
  id: string | number;
  name: string;
  owner: { avatar_url: string; login: string };
  html_url: string;
  stargazers_count: string;
}

export interface PopularProps {
  repos: Array<PopularData>;
  payload: []
}

export interface PopularState {
  selectedLanguage: string;
  loading: boolean;
  error: null | string;
  repos: PopularProps;
}

export interface PopularReducer {
  popularReducer: PopularState;

}
