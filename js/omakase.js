$(document).ready(function() {
	console.log("ready start");

	// 旅程リスト clickイベント
	$('#tbl-itin-list tbody').on('click', 'tr', function(event) {
		console.log($(this));
		// 詳細入力領域チェック
		// if(hasDetailArea($(this))){
			crateAirDetail($(this));
		// }
	});
});
// 更新ボタン
$("#modify").click(function(event) {
	console.log("更新ボタン click");
	alert("test");
});

// 詳細入力領域を持っているかチェック
function hasDetailArea(target){
	console.log('hasDetailArea');
	// console.log($(target).next('tr td').children('#air-detail-panel').size());
	console.log($(target).next('tr td').children('#air-detail-panel'));
}

// AIR詳細Element生成
function crateAirDetail(target){
	// 行
	var row = $('<tr>');
	// 列
	var col = $('<td>',{colspan:3}).appendTo(row);
	// AIR詳細
	// var air_detail = $('<div>',{id:'air-detail-panel'}).appendTo(col);
	// var title = $('<div>',{text:'フライト詳細'}).appendTo(col);
	var title = $('<div>',{text:'フライト詳細'}).appendTo(col);
	var detail = $('<div>',{style:'margin:10px 10px 10px 10px;padding-right:10px;'}).appendTo(col);
	$('<label>',{text:'予約番号'}).appendTo(detail);
	$('<input>',{'type':'text'}).appendTo(detail);

	// 更新ボタン
	var buttons = $('<div>',{style:'margin:10px 10px 10px 10px;text-align:right;'}).appendTo(col);
	$('<button>',{text:'更新',type:'button','class':'btn btn-primary btn-sm',id:'modify'}).appendTo(buttons);

	row.insertAfter(target);
}