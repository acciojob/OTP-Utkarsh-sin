//your JS code here. If required.
function clickEvent(first,last){
    if(first.value.length){
      document.getElementById(last).focus();
    }
	if(first.value.length==0){
		document.getElementById(last).focus();
	}
  }

  // function deleteEvent(last,first){
  //   if(last.value.length==0){
  //     document.getElementById(first).focus();
  //   }
  // }