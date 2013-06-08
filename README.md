<h2>DP_QueryString</h2>

<ul>	<li>Author: Jim Davis, the Depressed Press</li>
	<li>Created: June 28, 2006</li>
	<li><b>Documentation</b>: http://depressedpress.com/javascript-extensions/dp_querystring/</li>
	<li>Contact: http://depressedpress.com/about/contact-me/</li>
	<li>Other Components: http://depressedpress.com/javascript-extensions/</li>
</ul>

<p>The DP_AJAX library provides simple methods to manage multiple HTTP requests and XML responses.</p>
<ul>	<li>The library has a very small footprint (only two global objects are created).</li>
	<li>Multiple (but still asynchronous) HTTP calls can be joined together and fire a single handler when complete.</li>
	<li>Multiple request pools can be instantiated in the same application if required (for example a "fast" pool might be created for user interface interaction while a "slow" pool might be created for automated logging).</li>
	<li>Supports both adding custom HTTP headers (needed for many web services) to requests and accessing returned headers.</li>
	<li>Supports GET, POST and both SOAP 1.0 and 1.2 calls.</li>
	<li>Highly configurable.  The number of request objects in the pool, the interval at which the request queue is checked, the timeout and the number of retry attempts for requests are user-configurable on a per-instance basis.</li>
	<li>Optional Debugging and logging via <a href="http://depressedpress.com/javascript-extensions/dp_debug/">DP_Debug</a> (if available).</li>
</ul>
<p>This component requires a JavaScript (ECMAScript) 1.3 (or better) run-time environment and has been tested successfully on Internet Explorer 8+, Firefox 13+ and Google Chrome but should function on any modern browser.</p>

<blockquote style="background: #dedede;">
Copyright (c) 1996-2013, The Depressed Press (depressedpress.com)
<br />
All rights reserved.
<br />
Covered under the BSD Open Source License (included in the code).  Full legal information here: http://depressedpress.com/about/source-code-policy/
</blockquote>