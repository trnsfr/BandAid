exports.ledgerIndex = function(args) {
  var win = Ti.UI.createWindow(args);
  
  var header = Ti.UI.createView({
    height: 35,
    backgroundGradient: { type: 'linear', colors: ['#ccc','#999'] },
    top: 0
  });
  header.add(Ti.UI.createLabel({
    text: '$3,207.14',
    color: '#fff',
    font: { fontSize: 18, fontWeight: 'bold' },
    width: 'auto',
    right: 10,
    shadowColor: '#444',
    shadowOffset: { x: 0, y: -1 },
  }));
  
  var tableView = Ti.UI.createTableView({ headerView: header });
  win.add(tableView);
  
  var transactions = globals.transactions;
  
  var data = [];
  for(i=0;i<transactions.length;i++) {
    for(j=0;j<transactions[i].items.length;j++) {
      var item = transactions[i].items[j];
      
      colors = ['#95BE82', '#569838'];
      if(item.type == "outgoing") colors = ['#A1717D', '#5F192A'];
    
      var row = Ti.UI.createTableViewRow();
      
      if (j==0) row.header = transactions[i].date;
      
      row.add(Ti.UI.createLabel({
        text: item.title,
        font: { fontSize: 20, fontWeight: 'bold' },
        left: 10,
        top: 10,
        bottom: 10
      }));
      
      var amountBox = Ti.UI.createView({
        backgroundGradient: { type: 'linear', colors: colors },
        borderRadius: 4,
        right: 10,
        width: 'auto',
        height: 23
      });
      amountBox.add(Ti.UI.createLabel({
        text: item.amount,
        color: '#fff',
        textAlign: 'center',
        font: { fontSize: 14, fontWeight: 'bold' },
        right: 8,
        left: 8,
        width: 'auto',
        height: 23,
        shadowColor: "#666",
        shadowOffset: { x: 0, y: -1 }
      }));
      row.add(amountBox);
      data.push(row);
    }
  }
  tableView.setData(data);
  
  return win;
}
