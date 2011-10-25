exports.scheduleIndex = function(args) {
  var win = Ti.UI.createWindow(args);

  var toolbar = Ti.UI.createToolbar({ bottom: 0, barColor: '#333' });
  var tabbedBar = Ti.UI.createTabbedBar({
    labels: ['All', 'Gigs', 'Other'],
    style: Ti.UI.iPhone.SystemButtonStyle.BAR,
    height: 30,
    width: 280,
    index: 0,
    backgroundColor: '#333'
  });
  toolbar.add(tabbedBar);
  win.add(toolbar);

  var tableView = Ti.UI.createTableView({ top: 0, bottom: 44 });
  win.add(tableView);

  var data = [];
  var lastDate;
  for(i=0; i<globals.events.length;i++) {
    var event = globals.events[i]
    
    var row = Ti.UI.createTableViewRow({hasChild:true, event: event, height: 50 });
    if(lastDate != globals.events[i].date) row.header = event.date;
    lastDate = event.date;
    
    row.add(Ti.UI.createLabel({
      text: event.venue,
      highlightedColor: '#fff',
      font: { fontSize: 18, fontWeight: 'bold' },
      top: 6, left: 10,
      height: 'auto'
    }));
    
    row.add(Ti.UI.createLabel({
      text: event.city,
      color: '#666',
      highlightedColor: '#fff',
      font: { fontSize: 11 },
      top: 28, left: 10,
      height: 'auto'
    }));

    row.add(Ti.UI.createLabel({
      text: event.time,
      color: '#666',
      highlightedColor: '#fff',
      font: { fontSize: 12, fontWeight: 'bold' },
      right: 10,
      width: 'auto'
    }));
    
    data.push(row);
  }
  tableView.setData(data);
  
  tableView.addEventListener('click', function(e) {
    globals.tabs.currentTab.open(new require('ui/scheduleShow')({
      title: e.rowData.event.date,
      barColor:'#222',
      event: e.rowData.event
		}));
  });
  
  return win;
};
