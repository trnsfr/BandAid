require('lib/require_patch').monkeypatch(this);
// Ti.include('functions.js');

var globals = {
  events: [
    {venue: "Club Dada", city: "Dallas, TX", date: "Wed, Mar 3", time: "5:30 PM", lat: "37.767", lon: "-122.430825"},
    {venue: "Day Off", city: "Austin, TX", date: "Thu, Mar 4", lat: "37.767", lon: "-122.430825"},
    {venue: "Interview", city: "Austin, TX", date: "Fri, Mar 5", time: '1:00 PM', lat: "30.265813", lon: "-97.73695"},
    {venue: "Emo's", city: "Austin, TX", date: "Fri, Mar 5", time: "6:00 PM", lat: "30.265813", lon: "-97.73695"},
    {venue: "Travel", city: "Austin ▶ San Francisco", date: "Sat, Mar 6", time: '8:00 AM', lat: "37.767", lon: "-122.430825"},
    {venue: "Cafe Du Nord", city: "San Francisco, CA", date: "Sat, Mar 6", time: '6:30 PM', lat: "37.767", lon: "-122.430825"},
    {venue: "Travel", city: "San Francisco ▶ Los Angeles", date: "Sun, Mar 7", time: '10:00 AM', lat: "37.767", lon: "-122.430825"},
    {venue: "The Echo", city: "Los Angeles, CA", date: "Sun, Mar 7", time: '7:00 PM', lat: "37.767", lon: "-122.430825"},
    {venue: "Travel", city: "Los Angeles ▶ Tucson", date: "Mon, Mar 8", time: "9:00 AM", lat: "37.767", lon: "-122.430825"},
    {venue: "Plush", city: "Tucson, AZ", date: "Mon, Mar 8", time: "6:00 PM", lat: "37.767", lon: "-122.430825"},
    {venue: "Travel", city: "Tucson, AZ ▶ Santa Fe, NM", date: "Tue, Mar 9", time: "9:00 AM", lat: "37.767", lon: "-122.430825"},
    {venue: "The Matador", city: "Santa Fe, NM", date: "Tue, Mar 9", time: "5:00 PM", lat: "40.724787", lon:"-73.992105"},
    {venue: "Travel", city: "Santa Fe, MN ▶ Oklahoma City, OK", date: "Wed, Mar 10", time: "9:00 AM", lat: "37.767", lon: "-122.430825"},
    {venue: "Belle Isle Brewery", city: "Oklahoma City, OK", date: "Wed, Mar 10", time: "5:00 PM", lat: "40.724787", lon:"-73.992105"},
    {venue: "Travel", city: "Oklahoma City, OK  ▶ Dallas, TX", date: "Thu, Mar 11", time: "11:00 AM", lat: "40.724787", lon:"-73.992105"}
  ],
  transactions: [
    {
      date: "Mar 28",
      items: [
        {title: "Merch Sales", date: "Mar 28", amount: '$500.00', type: 'incoming'},
        {title: "Gas", date: "Mar 28", amount: '$67.00', type: 'outgoing'}
      ]
    },
    {
      date: "Mar 24",
      items: [
        {title: "Gig Pay", amount: '$750.00', type: 'incoming'},
        {title: "Food", amount: '$35.76', type: 'outoing'},
        {title: "Gas", amount: '$44.32', type: 'outgoing'}
      ]
    },
    {
      date: "Mar 23",
      items: [
        {title: "Car work", amount: '$217.33', type: 'outgoing'},
        {title: "Food", amount: '$42.75', type: 'outoing'},
      ]
    }
  ]
};

Ti.UI.setBackgroundColor('#fff');

Ti.include('ui/default.js');

(function() {
  var tabgroup = require('ui/tabgroup'),
      now = require('ui/now'),
	    scheduleIndex = require('ui/scheduleIndex'),
	    ledgerIndex = require('ui/ledgerIndex'),
	    posIndex = require('ui/posIndex'),
	    settingsShow = require('ui/settingsShow');
	
	//create our global tab group	
	globals.tabs = new tabgroup(
	  {
		  icon:'images/icons/81-dashboard.png',
      title:'The Now',
      window: new now({
        title:'The Now',
        backgroundColor:'#fff',
        barColor: '#222'
      })
	  },
		{
		  icon:'images/icons/83-calendar.png',
      title:'Tour Book',
      window: new scheduleIndex({
        title:'Tour Book',
        backgroundColor:'#fff',
        barColor: '#222'
      })
		},
		{
      icon:'images/icons/119-piggy-bank.png',
      title:'Ledger',
      window: new ledgerIndex({
        title:'Ledger',
        backgroundColor:'#fff',
        barColor:'#222'
      })
		},
		{
      icon:'images/icons/192-credit-card.png',
      title:'POS',
      window: new posIndex({
        title:'Point of Sale',
        backgroundColor:'#fff',
        barColor:'#222'
      })
		},
		{
      icon:'images/icons/19-gear.png',
      title:'Settings',
      window: new settingsShow({
        title:'Settings',
        backgroundColor:'#fff',
        barColor:'#222'
      })
		}
	);
	
	globals.tabs.open();
})();
