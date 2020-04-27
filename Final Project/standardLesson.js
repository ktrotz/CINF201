/* ***** Global JavaScript Functions *************************************************** */
function build(i) {
	return document.write(i);
}

function element(x) {
	return document.getElementById(x);
}



/* ***** List of [filename, Nav Bar Name] *********************************** */ 
navigationLinks = [
	['home','Home'],
	['sun','Sun'],
	['planets','Planets'],
	['galactic-objects','Galactic Objects'],
	['milky-way','Milky Way'],
	['black-holes','Black Holes'],
	['','']
]; // end navigationLinks[ ]



/* ***** Builds the HTML that goes insides of the <nav> ******************************** */
/*function buildNavigationMenu( )
 {
	for (x in navigationLinks) 
	 {
		output = '<a href="' + navigationLinks[x][0] + '.html">' + navigationLinks[0][x] + '</a>';
		build(output);
	 } // end for x
	 return;
 } // end buildNavigationLinks( )
*/

function buildNavigationMenu()
{
	for(x in navigationLinks){
		output = '<a href="' + navigationLinks[x][0] + '.html">' + navigationLinks[0][x] + '</a>';
	}
}

 
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
	build('h')
	build('<h1> Space Talk </h1>');

   /* build('<h1> webpage design: ' + navigationLinks[currentPageNumber][0] + '</h1>');
	build(navigationLinks[currentPageNumber][1]); */
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
	output += today.getDate() + ' &ndash; Space Talk';
    build(output);
	return;
 } // end buildFooter( )