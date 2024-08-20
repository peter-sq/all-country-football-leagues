import { leagues } from "../data/leagueDatas.js";


// 1. Returns all leagues data
export const getAllLeagues = () => leagues;

// 2. Returns total number of leagues
export const getTotalLeagues = () => leagues.length;

// 3. Returns empty object if league not found or returns the league object
export const findLeagueByName = (name) => {
  const league = leagues.find((league) =>
    league.name.toLowerCase() === name.toLowerCase()
  );
  return league || {};
};

// 4. Search by league name
export const searchLeagues = (name) => {
  return leagues.filter((league) =>
    league.name.toLowerCase().includes(name.toLowerCase())
  );
};


