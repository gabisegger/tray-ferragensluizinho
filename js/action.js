var pageLink = window.location.href;
var splitPageLink = pageLink.split('/').pop();
$('body').addClass(splitPageLink);