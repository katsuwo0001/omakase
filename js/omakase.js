$(document).ready(function() {
	console.log("ready start");

	// 旅程リスト clickイベント
	$('#tbl-itin-list tbody').on('click', '#air-summary', function(event) {
		console.log($(this));
		$(this).next("#air-detail").toggle();
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
// function crateAirDetail(target){
// 	// 行
// 	var row = $('<tr>');
// 	// 列
// 	var col = $('<td>',{colspan:3}).appendTo(row);
// 	// AIR詳細
// 	// var air_detail = $('<div>',{id:'air-detail-panel'}).appendTo(col);
// 	// var title = $('<div>',{text:'フライト詳細'}).appendTo(col);
// 	var title = $('<div>',{text:'フライト詳細'}).appendTo(col);
// 	var detail = $('<div>',{style:'margin:10px 10px 10px 10px;padding-right:10px;'}).appendTo(col);
// 	$('<label>',{text:'予約番号'}).appendTo(detail);
// 	$('<input>',{'type':'text'}).appendTo(detail);

// 	// 更新ボタン
// 	var buttons = $('<div>',{style:'margin:10px 10px 10px 10px;text-align:right;'}).appendTo(col);
// 	$('<button>',{text:'更新',type:'button','class':'btn btn-primary btn-sm',id:'modify'}).appendTo(buttons);

// 	row.insertAfter(target);
// }


//詳細表示チェックボックスイベント
$('#detail-display').click(function () {

	//詳細表示を閉じたり開いたり
  	itineraryDetailDisplay();

});

//air表示チェックボックスイベント
$('#air-display').click(function () {

 	if($('#air-display').prop('checked')) {
	  	$('.itinerary-air').show();
	  	itineraryDetailDisplay();

 	} else {
 		$('.itinerary-air').hide();
 		itineraryDetailDisplay();

 	}
	
});

//trns表示チェックボックスイベント
$('#trns-display').click(function () {

 	if($('#trns-display').prop('checked')) {
	  	$('.itinerary-trns').show();
	  	itineraryDetailDisplay();

 	} else {
 		$('.itinerary-trns').hide();
 		itineraryDetailDisplay();

 	}
	
});

// 詳細表示処理
function itineraryDetailDisplay() {

	if($('#detail-display').prop('checked')) {
		// 詳細表示の場合
		if($('#air-display').prop('checked')) {
			$('.itinerary-air-detail').show();
		} else {
			$('.itinerary-air-detail').hide();
		}

		if($('#trns-display').prop('checked')) {
			$('.itinerary-trns-detail').show();
		} else {
			$('.itinerary-trns-detail').hide();
		}

	} else {
		// 詳細非表示の場合
		$('.itinerary-air-detail').hide();
		$('.itinerary-trns-detail').hide();
	}

}

// 登録部表示処理
$('#entry-display').click(function (){
	if($('#entry-display').text() == "▼表示") {
		$('#entry-tab-cotent').show();
		$('#entry-display').text("▲非表示");
	
	} else {
		$('#entry-tab-cotent').hide();
		$('#entry-display').text("▼表示");
	}

});

$('.entry-tab').click(function (){
	$('#entry-tab-cotent').show();
	$('#entry-display').text("▲非表示");
});

// カレンダー表示(JquryUI)
$(function() {
  // 2日本語を有効化
  $.datepicker.setDefaults($.datepicker.regional['ja']);
  // 3日付選択ボックスを生成
  $('.calendar').datepicker({ dateFormat: 'yy/mm/dd' });
});

function detailClose(targetId) {
	$("#" + targetId).toggle();
}