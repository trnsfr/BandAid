exports.now = function(args) {
  var win = Ti.UI.createWindow(args);
  win.backgroundColor = '#333';
  // win.backgroundImage = 'images/wood.jpg';
  
  var today = Ti.UI.createView({
    backgroundGradient: { type: 'linear', colors: ['#ddd','#999'] },
    borderRadius: 5,
    height: 320,
    width: 300,
    top: 10
  });
  today.add(Ti.UI.createLabel({
    text: 'Club Dada',
    color: '#000',
    font: { fontSize: 24, fontWeight: 'bold' },
    shadowColor: '#fff',
    shadowOffset: { x: 0, y: 1 },
    top: 12, left: 12,
    size: { width: 'auto', height: 'auto' }
  }));
  today.add(Ti.UI.createLabel({
    text: 'Dallas, TX',
    color: '#666',
    font: { fontSize: 12, fontWeight: 'bold' },
    shadowColor: '#fff',
    shadowOffset: { x: 0, y: 1 },
    top: 40, left: 12,
    size: { width: 'auto', height: 'auto' }
  }));
  today.add(Ti.UI.createLabel({
    text: 'Load In:\nSound Check:\nDoors:\nSet Time:',
    font: { fontSize: 15, fontWeight: 'bold' },
    color: '#666',
    textAlign: 'right',
    left: 12,
    top: 90,
    height: 'auto',
    width: 130,
    shadowColor: '#fff',
    shadowOffset: { x: 0, y: 1 },
  }));
  today.add(Ti.UI.createLabel({
    text: '5:00 PM\n5:30 PM\n7:00 PM\n10:00 PM',
    font: { fontSize: 15, fontWeight: 'bold' },
    color: '#666',
    textAlign: 'left',
    left: 150,
    top: 90,
    height: 'auto',
    width: 130,
    shadowColor: '#fff',
    shadowOffset: { x: 0, y: 1 },
  }));
  
  var viewBtn = Ti.UI.createButton({
    title: 'View Details',
    backgroundGradient: { type: 'linear', colors: ['#333','#000'] },
    backgroundSelectedColor: '#333',
    style: 0,
    left: 0, right: 0,
    bottom: 0,
    height: 45
  })
  today.add(viewBtn);

  var callBtn = Ti.UI.createButton({
    title: 'Call',
    backgroundColor: '#ccc',
    borderRadius: 6,
    color: "#333",
    font: { fontWeight: 'bold', fontSize: 16 },
    style: 0,
    left: 12,
    width: 133,
    bottom: 45+12,
    height: 40
  })
  today.add(callBtn);

  var mapBtn = Ti.UI.createButton({
    title: 'Map',
    backgroundColor: '#ccc',
    borderRadius: 6,
    color: "#333",
    font: { fontWeight: 'bold', fontSize: 16 },
    style: 0,
    right: 12,
    width: 133,
    bottom: 45+12,
    height: 40
  })
  today.add(mapBtn);
  
  var scrollableView = Ti.UI.createScrollableView({
    backgroundColor: 'transparent',
    views: [today, today, today],
    pagingControlColor: 'transparent',
    showPagingControl: true,
    top: 0,
    height: 350
  });
  win.add(scrollableView)
  
  viewBtn.addEventListener('click', function(e) {
    globals.tabs.currentTab.open(new require('ui/scheduleShow')({
      title: globals.events[0].date,
      barColor:'#222',
      event: globals.events[0]
		}));
  });
  
  return win;
}
