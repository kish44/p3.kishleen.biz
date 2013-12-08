  /*
  Drag/Drop Function
*/  
$(function() {
    console.log("document ready");
	 
	$( "#tabs" ).tabs();
	var html = $("html").html();
		
		
		$(".selectorField").draggable({ helper: "clone",stack: "#containerTable div",cursor: "move"  });
		
		$( ".droppedFields" ).droppable({
			  greedy: true,
			  activeClass: "ui-state-hover",
			  hoverClass: "ui-state-active",
			  accept: ":not(.ui-sortable-helper)",
			drop: function( event, ui ) {
				var fieldtype = $(ui.draggable).attr("fieldtype");
				$( "<div  class='selectorField' fieldtype='"+fieldtype+"'></div>").html( ui.draggable.html()).appendTo( this );
			}
		});		

		$( ".droppedFields" ).sortable();
		$( ".droppedFields" ).disableSelection();
		
  });
  
  /*
  Preview Function
*/  
   function preview() {
                console.log('Preview clicked');
                
                // Sample preview - opens in a new window by copying content -- use something better in production code

                
                var selected_content = $(".droppedFields").clone();
                selected_content.find("div").each(function(i,o) {
                                                                var obj = $(o)
                                                                obj.removeClass("draggableField ui-draggable well ui-droppable ui-sortable");
                                                        });
                
                
                var selected_content_html = selected_content.html();
                
                console.log(selected_content_html);
				
				
				var html = selected_content.html();
				console.log(html);
				var dialogContent  ='<!DOCTYPE HTML>\n<html lang="en-US">\n<head>\n<meta charset="UTF-8">\n<title></title>\n';
                
                
                dialogContent+= '</head>\n<body>';
               
                dialogContent+= selected_content_html;
                dialogContent+= '\n</body></html>';

                dialogContent+='<br/><br/><b>Source code: </b><pre>'+$('<div/>').text(dialogContent).html();+'</pre>\n\n';

                dialogContent = dialogContent.replace('\n</body></html>','');
                dialogContent+= '\n</body></html>';
                
                

                var win = window.open("about:blank");
                win.document.write(dialogContent);
				
        }
		
		
		
 		
		
	
		
		