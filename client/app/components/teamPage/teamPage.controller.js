class TeamPageController {
  constructor(StatsService, $stateParams) {
    this.name = 'teamPage';
    this.teamIndex = $stateParams.index;
    this.team = StatsService.getTeam(this.teamIndex);
    this.teamName = this.team.team;
    this.statsFields = StatsService.getStatsFields();

    console.log(this.statsFields);

    this.passYdsRank = this.team.passYdsRank;
    this.rushYdsRank = this.team.rushYdsRank;
    this.scoreRank = this.team.scoreRank;
    this.tdsRank = this.team.tdsRank;

    console.log(this.passYdsRank);
    console.log(this.teamName);
  }
}

export default TeamPageController;

