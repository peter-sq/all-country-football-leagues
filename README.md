# all-country-football-leagues

## All Country Football League
A lightweight npm package for managing football league data. It includes functions to retrieve a complete list of leagues, count the total number of leagues, find a league by its name, and search for leagues based on name.

### Sample Usage
##### Drop down select field for  all football Leagues 

 <img width="369" alt="soccer" src="https://github.com/user-attachments/assets/098f414e-d1d3-46a6-b9e2-8235c7da5316">


## Installation

Install the package using npm:

``` sh

npm i all-country-football-leagues
```

## usage
``` Javascript
import { getAllLeagues, getTotalLeagues, findLeagueByName, searchLeagues} from 'all-country-football-leagues';


//getAllLeagues()
//Retrieves a complete list of all football leagues.
const leagues = getAllLeagues();
console.log('All Leagues:', leagues);

//getTotalLeagues()
//Returns the total number of leagues available.
const totalLeagues = getTotalLeagues();
console.log(totalLeagues); // e.g., 100

//findLeagueByName(name)
const league = findLeagueByName('Ligue 1');
console.log(league);

//searchLeaguesByName(query)
const results = searchLeaguesByName('Premier League');
console.log(results);

```

## Data Structure
Each item in the data array contains the following fields:

country: An object representing the country associated with the league.

code: A string representing the country code (e.g., "FR").

flag: A URL pointing to the country's flag image (e.g., "https://media.api-sports.io/flags/fr.svg").

name: The name of the country (e.g., "France").

id: A unique identifier for the league (e.g., 1).

name: The name of the league (e.g., "Ligue 1").

logo: A URL pointing to the league's logo (e.g., "https://media.api-sports.io/football/leagues/61.png").

type: The type of competition, typically "League".

### Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the Repository: Click on the 'Fork' button at the top right of this page to create a copy of this repository in your GitHub account.

2. Clone the Repository: Clone the forked repository to your local machine using the following command:

``` sh

git clone https://github.com/your-username/all-country-football-leagues.git
```
Replace your-username with your GitHub username.

3. Create a New Branch: Create a new branch for your feature or bug fix:

``` sh

git checkout -b feature-branch-name

```
Replace feature-branch-name with a descriptive name for your branch.

4. Make Your Changes: Implement your changes to the code.

5. Commit Your Changes: Commit your changes with a clear and descriptive commit message:

``` sh

git add .
git commit -m "Description of changes"
```

6. Push Your Changes: Push your changes to your forked repository:

  
``` sh
git push origin feature-branch-name
```


7. Submit a Pull Request: Go to the original repository on GitHub and create a new pull request. Provide a clear description of your changes and why they should be merged.

8. Review and Feedback: Your pull request will be reviewed, and feedback may be provided. Make any necessary changes, and once approved, your changes will be merged into the main branch.





#### GitHub Repository

[Git Repository](https://github.com/peter-sq/all-country-football-leagues.git

#### NPM Package

[NPM Package Repository](https://www.npmjs.com/package/all-country-football-leagues)

## License

This package is licensed under the MIT License. Feel free to use it in your own projects.

**Free Package, by Peter Awe! **






