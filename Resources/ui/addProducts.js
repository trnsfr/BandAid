exports.addProducts = function(args) {
  var win = Ti.UI.createWindow(args);

  var addBtn = Ti.UI.createButton({ title: 'Add' });
  win.rightNavButton = addBtn;

  var cancelBtn = Ti.UI.createButton({ title: 'Cancel' });
  win.leftNavButton = cancelBtn;
  
  var products = [
    { name: 'Dream Get Together CD', price: '$14.00', quantity: 85 },
    { name: 'Dream Get Together LP', price: '$17.00', quantity: 43 },
    { name: 'Standard T: Small', price: '$10.00', quantity: 12 },
    { name: 'Standard T: Medium', price: '$10.00', quantity: 14 },
    { name: 'Standard T: Large', price: '$10.00', quantity: 9 },
  ]
  
  var tableView = Ti.UI.createTableView();
  win.add(tableView);
  
  var data = [];
  for(i=0;i<products.length;i++) {
    var row = Ti.UI.createTableViewRow({ title: products[i].name });
    data.push(row);
  }
  tableView.setData(data);
  
  tableView.addEventListener('click', function(e) {
    e.rowData.hasCheck = !e.rowData.hasCheck;
  });

  addBtn.addEventListener('click', function(e) {
    win.close();
  });
  
  cancelBtn.addEventListener('click', function(e) {
    win.close();
  });
  
  return win;
};
