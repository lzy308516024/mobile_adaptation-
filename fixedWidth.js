(function(){
	fixwLayou()
	window.addEventListener('resize',fixwLayou)
	function fixwLayou(){
		const width = window.screen.width;
		const fixW = 750;// 移动试图的宽度 Width of design drawing
		const scale = width / fixW;
		const meta = document.createElement('meta')
		meta.setAttribute('name','viewport')
		meta.setAttribute('content','width='+fixW+',initial-scale='+scale+',maximum-scale='+scale+',user-scalable=no');
		document.head.appendChild(meta);
		console.log(scale)
	}
})()