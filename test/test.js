// test/test.js
import {
    getAllLeagues,
    getTotalLeagues,
    findLeagueByName,
    searchLeagues,
  } from '../lib/leagues.js';
  
  console.log('All Leagues:', getAllLeagues());
  console.log('Total Leagues:', getTotalLeagues());
  console.log('Find League by Name (Premier League):', findLeagueByName('Premier League'));
  console.log('Find League by Name (Non-existent League):', findLeagueByName('Non-existent League'));
  console.log('Search Leagues (League):', searchLeagues('League'));
  