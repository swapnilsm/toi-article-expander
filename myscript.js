(function () {
     function toArray(obj) {
	 return Array.prototype.slice.call(obj);
     }
     document.getElementsByTagName('frameset')[1].cols = "100%, 0%";
     toArray(document.getElementsByName('ArticleContent')).forEach(
	 function(frame) {
	     toArray(frame.contentDocument.getElementsByTagName('table')).forEach(
		 function(table) {
		     table.style.width = '100%';		
		 }
	     );
	 }
     );    
 }
) ();


