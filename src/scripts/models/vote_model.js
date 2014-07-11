// pivot model
App.Vote = DS.Model.extend({
	user: DS.belongsTo('user', {
//		async: false
	}),
	issue: DS.belongsTo('issue', {
		async: false
	}),
    dateCreated: DS.attr('date', {
		defaultValue: function() { return new Date(); }
	})
});


App.Vote.FIXTURES = [{
	id: 1,
	user: 1,
	issue: 1,
    "dateCreated": "2014-07-09T15:05:00"
},{
	id: 2,
	user: 2,
	issue: 1,
    "dateCreated": "2014-07-09T15:05:00"
},{
	id: 3,
	user: 1,
	issue: 3,
    "dateCreated": "2014-07-09T15:05:00"
}];



