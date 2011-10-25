exports.posIndex = function(args) {
  var win = Ti.UI.createWindow(args);
  
  var addBtn = Ti.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.ADD });
  win.rightNavButton = addBtn;

  var checkoutBtn = Ti.UI.createButton({ title: 'Checkout' });
  win.leftNavButton = checkoutBtn;

  var header = Ti.UI.createView({
    height: 60,
    top: 0,
    backgroundGradient: { type: 'linear', colors: ['#ccc','#aaa'] }
  });
  win.add(header);
  
  var total = Ti.UI.createLabel({
    text: 'Total: $49.13',
    color: '#000',
    right: 15,
    font: { fontSize: 28, fontWeight: 'bold' },
    shadowColor: '#fff',
    shadowOffset: { x: 0, y: 1 },
    width: 'auto'
  });
  header.add(total);
  header.add(Ti.UI.createView({ backgroundColor: '#999', height: 1, bottom: 0 }));
  
  var products = [
    { name: 'Dream Get Together CD', price: '$14.00', quantity: 85 },
    { name: 'Dream Get Together LP', price: '$17.00', quantity: 43 },
    { name: 'Standard T: Small', price: '$10.00', quantity: 12 },
    { name: 'Standard T: Medium', price: '$10.00', quantity: 14 },
    { name: 'Standard T: Large', price: '$10.00', quantity: 9 },
  ]
  
  var tableView = Ti.UI.createTableView({
    top: header.height
  });
  win.add(tableView);
  
  var data = [];
  for(i=0;i<products.length;i++) {
    var row = Ti.UI.createTableViewRow({ height: 50 });
    row.add(Ti.UI.createLabel({
      text: products[i].name,
      color: '#000',
      highlightedColor: '#fff',
      font: { fontSize: 18, fontWeight: 'bold' },
      top: 5, left: 10,
      height: 'auto', width: 'auto'
    }));
    row.add(Ti.UI.createLabel({
      text: products[i].price,
      color: '#666',
      highlightedColor: '#fff',
      font: { fontSize: 12, fontWeight: 'bold' },
      left: 10, top: 26,
      width: 'auto', height: 'auto'
    }));
    row.add(Ti.UI.createLabel({
      text: "Available: " + products[i].quantity,
      color: '#666',
      highlightedColor: '#fff',
      font: { fontSize: 12 },
      left: 75, top: 26,
      width: 'auto', height: 'auto'
    }));
    data.push(row);
  }
  tableView.setData(data);

  addBtn.addEventListener('click', function(e) {
    new require('ui/addProducts')({
      title: 'Add Products',
      barColor:'#222',
		}).open({ modal: true });
  });
  
  return win;
};
