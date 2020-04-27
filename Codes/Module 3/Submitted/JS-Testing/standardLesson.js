/* ***** Global JavaScript Functions *************************************************** */
function build( item ) { return document.write( item ); }
function element( idValue ) { return document.getElementById( idValue ); }



/* ***** List of [short filename, brief description] *********************************** */ 
navigationLinks = [
	['Home','Introduction to Webpage Design Lessons'],
	['HTML-intro','Introduction to HTML: Hyper Text Markup Language'],
	['HTML-basics','HTML Elements and Attributes'],
	['HTML-images','HTML Images and Considering Alternatives'],
	['HTML-links','HTML hyperlinks and File Hierarchies'],
	['HTML-other','Considerations of HTML'],
	['CSS-intro','Introduction to CSS: Cascading Style Sheets'],
	['CSS-external','How to externalize the CSS for reusability'],
	['CSS-selections','How to select targets for CSS declarations'],
	['CSS-cascade','The CSS cascade'],
	['CSS-animations','(Optional) How to build a CSS animation'],
	['JS-intro','Introduction to JavaScript'],
	['JS-testing','How to Test JavaScript'],
	['JS-if','Conditional Programming in JavaScript'],
	['JS-arrays','Making an array variable in JavaScript'],
	['JS-loops','Using loops in JavaScript'],
	['JS-functions','How to Build Your Own JS Functions'],
	['DOM-intro','Introduction to the Documnet Object Model'],
	['','']
]; // end navigationLinks[ ]



/* ***** Builds the HTML that goes insides of the <nav> ******************************** */
function buildNavigationMenu( )
 {
	for (x in navigationLinks) 
	 {
		output = '<a href="' + navigationLinks[x][0] + '.html">' + navigationLinks[x][0] + '</a>';
		build(output);
	 } // end for x
	 return;
 } // end buildNavigationLinks( )


 
/* ***** This generates the short filename and description **************************** */
currentPage = location.href;
currentPage = currentPage.substring(currentPage.lastIndexOf('/') + 1,currentPage.lastIndexOf('.'));
for (x in navigationLinks)
 {
	if ( currentPage == navigationLinks[x][0] )
	 {
		currentPageNumber = x;
	 }
 }
currentPageName = navigationLinks[currentPageNumber][0];
currentPageDescription = navigationLinks[currentPageNumber][1];



/* ***** Redefines <title> *********************************************************** */
theTitle.innerHTML = 'mutford webpage design: ' + currentPageName;



/* ***** Build the webpage <header> ************************************************** */
function buildHeader( )
 {
    build('<h1> webpage design: ' + navigationLinks[currentPageNumber][0] + '</h1>');
	build(navigationLinks[currentPageNumber][1]);
	return;
 } // end buildHeader( )


 
 /* ***** Build the webpage <footer> ************************************************** */
function buildFooter( )
 {
	var today = new Date( );
	output = '&copy; ' + today.getFullYear() + '.';
	if ( today.getMonth() < 9 )
	 { output += '0' + (1 + today.getMonth()) + '.'; }
    else
	 { output += (1 + today.getMonth()) + '.'; }
	output += today.getDate() + ' &ndash; Webpage Design';
    build(output);
	return;
 } // end buildFooter( )