class Activity {
  constructor(activityInfo, user) {
    this.activityInfo = activityInfo;
    this.strideLength = user.strideLength;
    this.date = {};
  }

  getActivityInfoByDate(date) {
    this.date = this.activityInfo.find(loggedActivity => loggedActivity.date === date);
    return this.date;
  }

  getMilesWalked(date) {
    this.getActivityInfoByDate(date);
    return Math.round(this.date.numSteps * this.strideLength / 5280 *10) / 10;
  }

  getUserActivityStatForDate(activity, date) {
    this.getActivityInfoByDate(date);
    return this.date[activity];
  }

  getAverageByWeek(activity, date) {
    let dateIndex = this.activityInfo.findIndex((loggedActivity, index) => loggedActivity.date === date);
    let weekArray = this.activityInfo.filter((loggedActivity, index) => (index <= dateIndex && index >= (dateIndex -6)));
    let average = weekArray.reduce((acc, loggedActivity) => acc += loggedActivity[activity] / 7, 0);
    return Math.round(average);
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
