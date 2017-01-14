/*** SET BUTTON'S FOLDER HERE ***/
var buttonFolder = "buttons/";

/*** SET BUTTONS' FILENAMES HERE ***/
upSources = new Array("about1up.gif","about2up.gif","about3up.gif","about4up.gif","about5up.gif","about6up.gif","about7up.gif","about8up.gif","about9up.gif","about10up.gif","about11up.gif");

overSources = new Array("about1over.gif","about2over.gif","about3over.gif","about4over.gif","about5over.gif","about6over.gif","about7over.gif","about8over.gif","about9over.gif","about10over.gif","about11over.gif");

// SUB MENUS DECLARATION, YOU DONT NEED TO EDIT THIS
subInfo = new Array();
subInfo[1] = new Array();
subInfo[2] = new Array();
subInfo[3] = new Array();
subInfo[4] = new Array();
subInfo[5] = new Array();
subInfo[6] = new Array();
subInfo[7] = new Array();
subInfo[8] = new Array();
subInfo[9] = new Array();
subInfo[10] = new Array();
subInfo[11] = new Array();


//*** SET SUB MENUS TEXT LINKS AND TARGETS HERE ***//

subInfo[2][1] = new Array("History","history.html","");
subInfo[2][2] = new Array("Education Centre","educentre.html","");

subInfo[3][1] = new Array("The Alpine House","alpine.html","");
subInfo[3][2] = new Array("Offshore Islands Collection","offshore.html","");
subInfo[3][3] = new Array("Dracophyllum Collection","dracophyll.html","");
subInfo[3][4] = new Array("Fern Collection","fern_coll.html","");
subInfo[3][5] = new Array("Ben\'s Ridge","bensridge.html","");

subInfo[4][1] = new Array("Dicotyledons","dicots.html","");
subInfo[4][2] = new Array("Monocotyledons","monocots.html","");
subInfo[4][3] = new Array("Ferns","ferns.html","");

subInfo[8][1] = new Array("Resources","resource.html","");





//*** SET SUB MENU POSITION ( RELATIVE TO BUTTON ) ***//
var xSubOffset = 115;
var ySubOffset = 5;



//*** NO MORE SETTINGS BEYOND THIS POINT ***//
var overSub = false;
var delay = 1000;
totalButtons = upSources.length;

// GENERATE SUB MENUS
for ( x=0; x<totalButtons; x++) {
	// SET EMPTY DIV FOR BUTTONS WITHOUT SUBMENU
	if ( subInfo[x+1].length < 1 ) { 
		document.write('<div id="submenu' + (x+1) + '">');
	// SET DIV FOR BUTTONS WITH SUBMENU
	} else {
		document.write('<div id="submenu' + (x+1) + '" class="dropmenu" ');
		document.write('onMouseOver="overSub=true;');
		document.write('setOverImg(\'' + (x+1) + '\',\'\');"');
		document.write('onMouseOut="overSub=false;');
		document.write('setTimeout(\'hideSubMenu(\\\'submenu' + (x+1) + '\\\')\',delay);');
		document.write('setOutImg(\'' + (x+1) + '\',\'\');">');


		document.write('<ul>');
		for ( k=0; k<subInfo[x+1].length-1; k++ ) {
			document.write('<li>');
			document.write('<a href="' + subInfo[x+1][k+1][1] + '" ');
			document.write('target="' + subInfo[x+1][k+1][2] + '">');
			document.write( subInfo[x+1][k+1][0] + '</a>');
			document.write('</li>');
		}
		document.write('</ul>');
	}
	document.write('</div>');
}





//*** MAIN BUTTONS FUNCTIONS ***//
// PRELOAD MAIN MENU BUTTON IMAGES
function preload() {
	for ( x=0; x<totalButtons; x++ ) {
		buttonUp = new Image();
		buttonUp.src = buttonFolder + upSources[x];
		buttonOver = new Image();
		buttonOver.src = buttonFolder + overSources[x];
	}
}

// SET MOUSEOVER BUTTON
function setOverImg(But, ID) {
	document.getElementById('about' + But + ID).src = buttonFolder + overSources[But-1];
}

// SET MOUSEOUT BUTTON
function setOutImg(But, ID) {
	document.getElementById('about' + But + ID).src = buttonFolder + upSources[But-1];
}



//*** SUB MENU FUNCTIONS ***//
// GET ELEMENT ID MULTI BROWSER
function getElement(id) {
	return document.getElementById ? document.getElementById(id) : document.all ? document.all(id) : null; 
}

// GET X COORDINATE
function getRealLeft(id) { 
	var el = getElement(id);
	if (el) { 
		xPos = el.offsetLeft;
		tempEl = el.offsetParent;
		while (tempEl != null) {
			xPos += tempEl.offsetLeft;
			tempEl = tempEl.offsetParent;
		} 
		return xPos;
	} 
} 

// GET Y COORDINATE
function getRealTop(id) {
	var el = getElement(id);
	if (el) { 
		yPos = el.offsetTop;
		tempEl = el.offsetParent;
		while (tempEl != null) {
			yPos += tempEl.offsetTop;
			tempEl = tempEl.offsetParent;
		}
		return yPos;
	}
}

// MOVE OBJECT TO COORDINATE
function moveObjectTo(objectID,x,y) {
	var el = getElement(objectID);
	el.style.left = x;
	el.style.top = y;
}

// MOVE SUBMENU TO CORRESPONDING BUTTON
function showSubMenu(subID, buttonID) {
	hideAllSubMenus();
	butX = getRealLeft(buttonID);
	butY = getRealTop(buttonID);
	moveObjectTo(subID,butX+xSubOffset, butY+ySubOffset);
}

// HIDE ALL SUB MENUS
function hideAllSubMenus() {
	for ( x=0; x<totalButtons; x++) {
		moveObjectTo("submenu" + (x+1) + "",-500, -500 );
	}
}

// HIDE ONE SUB MENU
function hideSubMenu(subID) {
	if ( overSub == false ) {
		moveObjectTo(subID,-500, -500);
	}
}



//preload();
