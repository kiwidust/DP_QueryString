/*  DepressedPress.com DP_QueryString

Author: Jim Davis, the Depressed Press of Boston
Date: June 28, 2006
Contact: webmaster@depressedpress.com
Website: www.depressedpress.com

Full documentation can be found at:
http://www.depressedpress.com/Content/Development/JavaScript/Extensions/

DP_QueryString abstracts query string (also called "URL variables" or "command line variables") processing and management into a simplified, object-oriented interface.

Copyright (c) 1996-2006, The Depressed Press of Boston (depressedpress.com)

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

+) Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 

+) Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 

+) Neither the name of the DEPRESSED PRESS OF BOSTON (DEPRESSEDPRESS.COM) nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

DP_QueryString = new Object();

DP_QueryString.get = function(Name, ReturnStyle, QueryString) {

	var AllElements, CurElement, CurName, CurVal, ReturnVal

		// Set the Name
	Name = Name.replace(/^\s*|\s*$/g,"");
		// Init the return
	ReturnVal = null;

		// Determine the string to use
	if ( !QueryString ) {
		QueryString = location.search;
	};
		// Split the query string on the ampersand (the substring removes the question mark)
	AllElements = QueryString.substring(1).split('&');

		// Loop over the string
	for( var Cnt = 0; Cnt < AllElements.length; Cnt++) {
			// Split the current element on the equals sign
		CurElement = AllElements[Cnt].split('=');
			// Unescape and Trim the returned name
		CurName = unescape(CurElement[0]).replace(/^\s*|\s*$/g,"");
		if ( Name == CurName ) {
				// Generate the array if needed
			if ( !ReturnVal ) { ReturnVal = new Array };
				// Get the Value
			CurVal = CurElement[1];
				// Determine how the value should be represented
			if ( CurVal ) {
				CurVal = unescape(CurVal);
			} else {
				CurVal = "";
			};
			ReturnVal[ReturnVal.length] = CurVal;
		};
	};

		// Return the value
	if ( ReturnVal ) {
		switch ( ReturnStyle ) {
			case "first":
				return ReturnVal[0];
				break;
			case "last":
				return ReturnVal[ReturnVal.length - 1];
				break;
			case "list":
				return ReturnVal.toString();
				break;
			default:
				return ReturnVal;
				break
		};
	} else {
		return ReturnVal;
	};

};

DP_QueryString.getAll = function(ReturnStyle, QueryString) {

	var QS, AllElements, CurElement, CurName, CurVal

	QS = new Object();

		// Determine the string to use
	if ( !QueryString ) {
		QueryString = location.search;
	};
		// Split the query string on the ampersand (the substring removes the question mark)
	AllElements = QueryString.substring(1).split('&');

		// Loop over the elements
	for( var Cnt = 0; Cnt < AllElements.length; Cnt++) {
			// Split the current element on the equals sign
		CurElement = AllElements[Cnt].split('=');
		CurName = unescape(CurElement[0]).replace(/^\s*|\s*$/g,"");
			// Call the get method to obtain the value
		if ( CurName.length > 0 ) {
			QS[CurName] = DP_QueryString.get(CurName, ReturnStyle);
		};
	};

		// Return the object
	return QS;

};

DP_QueryString.generate = function(Ob) {

	var QS = "?";

		// Sub Function to create the Params
	var generateParam = function(CurProp, CurVal) {
		if (!CurVal) {
			return escape(CurProp) + "&";
		} else {
			return CurProp + "=" + escape(CurVal) + "&";
		};
	};

		// Iterate over the passed object
	for ( var CurProp in Ob ) {
		if ( typeof Ob[CurProp] != "function" ) {
			var CurVal = Ob[CurProp];
			if ( typeof CurVal == "object" && CurVal.constructor == Array ) {
				for ( var Cnt = 0; Cnt < CurVal.length; Cnt++ ) {
					QS += generateParam(CurProp, CurVal[Cnt]);
				};
			} else {
				if ( CurVal != undefined ) {
					QS += generateParam(CurProp, CurVal);
				};
			};
		};
	};

		// Return the object (removing the last ampersand)
	return QS.substring(0, QS.length - 1);

};