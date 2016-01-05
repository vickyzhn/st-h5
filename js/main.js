(function(){
	//banner部分
	var i = 1,j,k;
	$('.banner').swipeLeft(function(){
		// clearInterval(timer);
		autoChange();
		
	});
	$('.banner').swipeRight(function(){
		// clearInterval(timer);
		k = i - 1;
		if(i > 1) {
			toRight(i,j,1);
		}else {
			k = 4;
			toRight(i,j,0);
		}
		i=k;
		
	});	
	function autoChange(){
		j = i + 1;
		if( j < 5) {
			toLeft(i,j,1);
		}else {
			j = 1;
			toLeft(i,j,0);
		}
		i = j;
	};
	function toLeft(i,j,a) {
		var pre = util.$('ban'+i),
			next = util.$('ban'+j),
			circle_pre = util.$('circle'+i),
			circle_next = util.$('circle'+j);
		pre.className = 'fadeOutL';
		if(a == 1) {
			next.className = 'fadeInL';
		}else if(a == 0) {
			next.className = 'fadeInL zIndexUp';
		}
		circle_pre.className = '';
		circle_next.className = 'circle-active';
		setTimeout(function(){
			pre.className = 'hide';
			next.className = '';
		},500);
	}
	function toRight(i,j,a) {
		var pre = util.$('ban'+i),
			next = util.$('ban'+k),
			circle_pre = util.$('circle'+i),
			circle_next = util.$('circle'+k);
		pre.className = 'fadeOutR';
		if(a == 1) {
			next.className = 'fadeInR zIndexUp';
		}else if(a == 0) {
			next.className = 'fadeInR';
		}
		circle_pre.className = '';
		circle_next.className = 'circle-active';
		setTimeout(function(){
			pre.className = 'hide';
			next.className = '';
		},500);
	}
	var timer = setInterval(function(){
		autoChange();
	},3000);

	//点击跳转部分
	for(var b=0; b<10; b++) {
		$('#con'+b).tap(function(){
			alert('暂时还没有内容呢！');
		});
	}
	$('#btn_app').tap(function(){
		alert('暂时还没有链接呢！');
	});
	$('#btn_call').tap(function(){
		alert('暂时还没有链接呢！');
	});
})();