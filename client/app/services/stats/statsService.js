class StatsService {
	constructor($resource) {
		Object.assign(this, { $resource });

        this.statsFields = {
            name:'stats',  
            orderByField: 'team',
            reverseSort: false,
            passYds: true,
            rushYds: true,
            score: true,
            tds: true,
            toDiff: true,
            offYds: false,
            offYdsPlay: false,
            passYdsAtt: false,
            passRtg: false,
            passRtg: false,
            thirdDownPerc: false,
            firstDowns: false,
            penalties: false        
        }

		this.teams = [{
        team: 'ARI',
        passYds: 3200,
        rushYds: 1200,
        score: 320,
        tds: 15,
        toDiff: 5,
        opponentPassingYards: 3100,
        opponentRushingYards: 1300,
        takeways: 25,
        offYds: 4500,
        offYdsPlay: 7,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      },{
        team: 'ATL',
        passYds: 3100,
        rushYds: 1100,    
        score: 390,
        tds: 12,
        toDiff: -3, 
        opponentPassingYards: 3700,
        opponentRushingYards: 1200,
        takeways: 28,
        offYds: 4500,
        offYdsPlay: 8,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      },{
        team: 'BAL',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CIN',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CHI',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'CAR',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'MIA',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NYJ',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DET',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DAL',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'DEN',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NO',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'TB',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'SEA',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'STL',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NE',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'KC',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'OAK',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'IND',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90       
      }, {
        team: 'JAX',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'TEN',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'BUF',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'PIT',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90   
      }, {
        team: 'CLE',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'HOU',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'NYG',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'WAS',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90      
      }, {
        team: 'PHI',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'GB',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'MIN',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90
      }, {
        team: 'SF',
        passYds: 3800,
        rushYds: 1500,  
        score: 450,
        tds: 18,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90  
      }, {
        team: 'SD',
        passYds: 3900,
        rushYds: 2500,  
        score: 650,
        tds: 32,
        toDiff: 7,
        opponentPassingYards: 4120,
        opponentRushingYards: 1600,
        takeways: 30,
        offYds: 4500,
        offYdsPlay:5.5,
        passYdsAtt: 7.5,
        passRtg: 87.5,
        thirdDownPerc: 50,
        firstDowns: 500,
        penalties: 90              
      }]

	this.calculateRank();
}

getStatsFields() {
    return this.statsFields;
}

getAllTeams() {
	return this.teams;
}

getTeam(index) {
    for (let i in this.teams) {
        if (this.teams[i].team === index) {
            return this.teams[i];
        }
    }
}

/*Calculates the rank in each statistical category of a given team against other teams*/
calculateRank() {
	/*Passing yards rank*/
	this.teams.sort((a, b) => {
        return b.passYds - a.passYds
    });
    	for(let i in this.teams) {
    		this.teams[i].passYdsRank = +i + 1;
    	}
	/*Rushing yards rank*/
	this.teams.sort((a, b) => {
        return b.rushYds - a.rushYds
    });
    	for(let i in this.teams) {
    		this.teams[i].rushYdsRank = +i + 1;
    	}
	/*Total scoring rank*/
	this.teams.sort((a, b) => {return a.score < b.score});
	for(let i in this.teams) {
		this.teams[i].scoreRank =+ i + 1;
	}
	/*Total TD's rank*/
	this.teams.sort((a, b) => {return a.tds < b.tds});
	for(let i in this.teams) {
		this.teams[i].tdsRank =+ i + 1;
	}
	/*Turnover differential rank*/
	this.teams.sort((a, b) => {return a.toDiff < b.toDiff});
	for(let i in this.teams) {
		this.teams[i].toDiffRank =+ i + 1;
	}
	/*Passing yards allowed rank*/
	this.teams.sort((a, b) => {return a.opponentPassingYards > b.opponentPassingYards});
	for(let i in this.teams) {
		this.teams[i].opponentPassingYardsRank =+ i + 1;
	}
	/*Rushing yards allowed rank*/
	this.teams.sort((a, b) => {return a.opponentRushingYards > b.opponentRushingYards});
	for(let i in this.teams) {
		this.teams[i].opponentRushingYardsRank =+ i + 1;
	}
	/*Total takeaways rank*/
	this.teams.sort((a, b) => {return a.takeaways < b.takeaways});
	for(let i in this.teams) {
		this.teams[i].takeawaysRank =+ i + 1;
	}
	/*Total takeaways rank*/
	this.teams.sort((a, b) => {return a.offYds < b.offYds});
	for(let i in this.teams) {
		this.teams[i].offYdsRank =+ i + 1;
	}
	/*Total takeaways rank*/
	this.teams.sort((a, b) => {return a.offYdsPlay < b.offYdsPlay});
	for(let i in this.teams) {
		this.teams[i].offYdsPlayRank =+ i + 1;
	}
	/*Total takeaways rank*/
	this.teams.sort((a, b) => {return a.passYdsAtt < b.passYdsAtt});
	for(let i in this.teams) {
		this.teams[i].passYdsAttRank =+ i + 1;
	}
	/*Total takeaways rank*/
	this.teams.sort((a, b) => {return a.passRtg < b.passRtg});
	for(let i in this.teams) {
		this.teams[i].passRtgRank =+ i + 1;
	}
	/*Total takeaways rank*/
	this.teams.sort((a, b) => {return a.thirdDownPerc < b.thirdDownPerc});
	for(let i in this.teams) {
		this.teams[i].thirdDownPercRank =+ i + 1;
	}
	/*Total takeaways rank*/
	this.teams.sort((a, b) => {return a.firstDowns < b.firstDowns});
	for(let i in this.teams) {
		this.teams[i].firstDownsRank =+ i + 1;
	}
	/*Total takeaways rank*/
	this.teams.sort((a, b) => {return a.penalties > b.penalties});
	for(let i in this.teams) {
		this.teams[i].penaltiesRank =+ i + 1;
	}
}

/*
getAllTeams() {
	const { $resource } = this;

	var temp = $resource('https://api.fantasydata.net/nfl/v2/JSON/TeamSeasonStats/2015', 
		{
			callback: 'JSON_CALLBACK'
		}, 
		{ get: {
			method: 'JSONP',
			data:false,
			headers: {'Ocp-Apim-Subscription-Key':'c5a2574a06ce45ab89299fbc37c11ee4'}			
		}});
	console.log(temp.get());
	}
*/
}

export default StatsService;