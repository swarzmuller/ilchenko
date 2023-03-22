export const fetchData = (query: string) => {
  return new Promise((resolve, reject) => {
    fetch(
      window.encodeURI(
        `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`
      )
    ).then((response) => {
      if (response.ok) {
        resolve(response.json());
      }
      reject(response.status);
    });
  });
};

const getProfile = (userName: string) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const getRepos = (userName: string) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${userName}/repos?per_page=100`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const getStarCount = (repos: []) => {
  return repos.reduce(
    (acc: number, repo: { stargazers_count: number }) => acc + repo.stargazers_count,
    0
  );
};

const calculateScore = (profile: { profile: []; followers: number }, repos: []) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  return followers * 3 + totalStars;
};

const getUserData = (userName: string) => {
  return Promise.all([getProfile(userName), getRepos(userName)])
    .then(([profile, repos]) => ({
      profile,
      score: calculateScore(profile as { profile: []; followers: number }, repos as []),
    }))
    .catch((error) => console.log(error));
};

const sortPlayers = (players: []) =>
  players.sort((a: { score: number }, b: { score: number }) => b.score - a.score);

export const battle = (players: string[]) => {
  return Promise.all(players.map(getUserData))
    .then((data) => sortPlayers(data as []))
    .catch((error) => console.log(error));
};
