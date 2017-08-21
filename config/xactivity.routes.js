// Detailed information in bookitin.numbers User Story
var activityCtrl = require('../models/activity/activity.ctrl');
app.get('/activity', activityCtrl.findAll);
app.get('/activity/cities', activityCtrl.findActivityCities);
app.get('/activity/city/:city', activityCtrl.findCityActivities);
app.get('/activity/cost/:id/:date', activityCtrl.findActivityCost);
