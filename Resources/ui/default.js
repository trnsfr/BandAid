function defaultTableViewLabel(text) {
  return {text:text, font:{fontSize:12,fontWeight:'bold'}, color:'#888', highlightedColor:'#fff', left:10, textAlign:'right',width:70,minimumFontSize:9};
}

function defaultTableViewDetail(text) {
  return {text:text, font:{fontSize:14,fontWeight: 'bold'}, color:'#000', highlightedColor:'#fff', left:95};
}

function addInfoRow(container, label, info, child) {
  var row = Ti.UI.createTableViewRow({backgroundColor: '#fff',selectionStyle:'none',hasChild:child});
	row.add(Ti.UI.createLabel(defaultTableViewLabel(label)));
	row.add(Ti.UI.createLabel(defaultTableViewDetail(info)));
  container.add(row);
}
