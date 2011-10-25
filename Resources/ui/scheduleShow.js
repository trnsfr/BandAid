exports.scheduleShow = function(args) {
  var win = Ti.UI.createWindow(args);
  
  event = args.event;
  
  var header = Ti.UI.createView({
    height:60,
    layout:'vertical',
    backgroundGradient: { type: 'linear', colors: ['#ccc','#aaa'] }
  });
  var venue = Ti.UI.createLabel({ text: event.venue, top: 10, left: 10, color: '#000', font: { fontSize: 18, fontWeight: 'bold' }, height: 'auto', shadowColor: '#fff', shadowOffset: { x: 0, y: 1 } });
  var city = Ti.UI.createLabel({ text: event.city, left: 10, color: '#000', font: { fontSize: 14 }, height:'auto', shadowColor: '#fff', shadowOffset: { x: 0, y: 1 } });
  header.add(venue,city);
  header.add(Ti.UI.createView({height:1, backgroundColor:'#999',top:9,width:320}));

  var tableView = Ti.UI.createTableView({
    backgroundColor: '#eee',
    headerView:header,
    style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
    headerPullView: Ti.UI.createView({ backgroundColor: '#ccc' })
  });

  var data = [];
  
  var section = Ti.UI.createTableViewSection({headerTitle:''});
  addInfoRow(section, "City", event.city, true);
  addInfoRow(section, "Venue", event.venue, true);
  addInfoRow(section, "Address", "209 State St.", true);
  data.push(section);
  
  section = Ti.UI.createTableViewSection({headerTitle:'Times'});
  addInfoRow(section, "Load In", "5:00 PM");
  addInfoRow(section, "Sound Check", "5:30 PM");
  addInfoRow(section, "Doors", "7:00 PM");
  addInfoRow(section, "Set Time", "10:00 PM");
  data.push(section);
  
  section = Ti.UI.createTableViewSection({headerTitle:'Status'});
  section.add(Ti.UI.createTableViewRow({ title: 'Offer', backgroundColor: '#fff' }));
  section.add(Ti.UI.createTableViewRow({ title: 'Unconfirmed', backgroundColor: '#fff' }));
  section.add(Ti.UI.createTableViewRow({ title: 'Confirmed', backgroundColor: '#fff', hasCheck: true }));
  section.add(Ti.UI.createTableViewRow({ title: 'Canceled', backgroundColor: '#fff' }));
  data.push(section);

  section = Ti.UI.createTableViewSection({headerTitle:'Club Contact'});
  addInfoRow(section, "Name", "Bernard Stadt", true);
  addInfoRow(section, "Phone", "(415) 555-1212", true);
  addInfoRow(section, "Email", "booker@mail.de", true);
  data.push(section);

  section = Ti.UI.createTableViewSection({headerTitle: 'Support'});
  addInfoRow(section, "Name", "Pedula", true);
  addInfoRow(section, "Type", "Band", true);
  addInfoRow(section, "Email", "pedula@mail.de", true);
  data.push(section);

  section = Ti.UI.createTableViewSection({headerTitle: 'Promoter Contact'});
  addInfoRow(section, "Name", "", true);
  addInfoRow(section, "Type", "", true);
  addInfoRow(section, "Email", "", true);
  data.push(section);

  section = Ti.UI.createTableViewSection({headerTitle: 'Accommodations'});
  
  section.add(Ti.UI.createTableViewRow({ title: 'Provided by Club', backgroundColor: '#fff', hasChild: true }));
  addInfoRow(section, "Reservation Name", "Tom Smith", true);
  addInfoRow(section, "Distance", "122m", true);
  addInfoRow(section, "Address", "400 Mission St", true);
  addInfoRow(section, "Parking", "Street", true);
  data.push(section);
  
  tableView.setData(data);
  win.add(tableView);
  
  return win;
};
