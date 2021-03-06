﻿interface JQueryStatic {

	/**
	 * Perform an asynchronous HTTP (Ajax) request.
	 *
	 * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup().
	 */
	ajax(settings: JQueryAjaxSettings): JQueryXHR;
	/**
	 * Perform an asynchronous HTTP (Ajax) request.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup().
	 */
	ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR;

	/**
	 * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
	 *
	 * @param dataTypes An optional string containing one or more space-separated dataTypes
	 * @param handler A handler to set default values for future Ajax requests.
	 */
	ajaxPrefilter(dataTypes: string,
		handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;
	/**
	 * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
	 *
	 * @param handler A handler to set default values for future Ajax requests.
	 */
	ajaxPrefilter(handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;

	ajaxSettings: JQueryAjaxSettings;

	/**
	 * Set default values for future Ajax requests. Its use is not recommended.
	 *
	 * @param options A set of key/value pairs that configure the default Ajax request. All options are optional.
	 */
	ajaxSetup(options: JQueryAjaxSettings): void;

	/**
	 * Load data from the server using a HTTP GET request.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param success A callback function that is executed if the request succeeds.
	 * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
	 */
	get(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
	/**
	 * Load data from the server using a HTTP GET request.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param data A plain object or string that is sent to the server with the request.
	 * @param success A callback function that is executed if the request succeeds.
	 * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
	 */
	get(url: string,
		data?: Object | string,
		success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
		dataType?: string): JQueryXHR;
	/**
	 * Load JSON-encoded data from the server using a GET HTTP request.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param success A callback function that is executed if the request succeeds.
	 */
	getJSON(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
	/**
	 * Load JSON-encoded data from the server using a GET HTTP request.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param data A plain object or string that is sent to the server with the request.
	 * @param success A callback function that is executed if the request succeeds.
	 */
	getJSON(url: string,
		data?: Object | string,
		success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
	/**
	 * Load a JavaScript file from the server using a GET HTTP request, then execute it.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param success A callback function that is executed if the request succeeds.
	 */
	getScript(url: string, success?: (script: string, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;

	/**
	 * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
	 */
	param: JQueryParam;

	/**
	 * Load data from the server using a HTTP POST request.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.
	 * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
	 */
	post(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
	/**
	 * Load data from the server using a HTTP POST request.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param data A plain object or string that is sent to the server with the request.
	 * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.
	 * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
	 */
	post(url: string,
		data?: Object | string,
		success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
		dataType?: string): JQueryXHR;

	/**
	 * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
	 *
	 * @param flags An optional list of space-separated flags that change how the callback list behaves.
	 */
	Callbacks(flags?: string): JQueryCallback;

	/**
	 * Holds or releases the execution of jQuery's ready event.
	 *
	 * @param hold Indicates whether the ready hold is being requested or released
	 */
	holdReady(hold: boolean): void;

	/**
	 * Accepts a string containing a CSS selector which is then used to match a set of elements.
	 *
	 * @param selector A string containing a selector expression
	 * @param context A DOM Element, Document, or jQuery to use as context
	 */
	(selector: string, context?: Element | JQuery): JQuery;

	/**
	 * Accepts a string containing a CSS selector which is then used to match a set of elements.
	 *
	 * @param element A DOM element to wrap in a jQuery object.
	 */
	(element: Element): JQuery;

	/**
	 * Accepts a string containing a CSS selector which is then used to match a set of elements.
	 *
	 * @param elementArray An array containing a set of DOM elements to wrap in a jQuery object.
	 */
	(elementArray: Element[]): JQuery;

	/**
	 * Binds a function to be executed when the DOM has finished loading.
	 *
	 * @param callback A function to execute after the DOM is ready.
	 */
	(callback: (jQueryAlias?: JQueryStatic) => any): JQuery;

	/**
	 * Accepts a string containing a CSS selector which is then used to match a set of elements.
	 *
	 * @param object A plain object to wrap in a jQuery object.
	 */
	(object: {}): JQuery;

	/**
	 * Accepts a string containing a CSS selector which is then used to match a set of elements.
	 *
	 * @param object An existing jQuery object to clone.
	 */
	(object: JQuery): JQuery;

	/**
	 * Specify a function to execute when the DOM is fully loaded.
	 */
	(): JQuery;

	/**
	 * Creates DOM elements on the fly from the provided string of raw HTML.
	 *
	 * @param html A string of HTML to create on the fly. Note that this parses HTML, not XML.
	 * @param ownerDocument A document in which the new elements will be created.
	 */
	(html: string, ownerDocument?: Document): JQuery;

	/**
	 * Creates DOM elements on the fly from the provided string of raw HTML.
	 *
	 * @param html A string defining a single, standalone, HTML element (e.g. <div/> or <div></div>).
	 * @param attributes An object of attributes, events, and methods to call on the newly-created element.
	 */
	(html: string, attributes: Object): JQuery;

	/**
	 * Relinquish jQuery's control of the $ variable.
	 *
	 * @param removeAll A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
	 */
	noConflict(removeAll?: boolean): Object;

	/**
	 * Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.
	 *
	 * @param deferreds One or more Deferred objects, or plain JavaScript objects.
	 */
	when<T>(...deferreds: Array<T | JQueryPromise<T> /* as JQueryDeferred<T> */>): JQueryPromise<T>;

	/**
	 * Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties.
	 */
	cssHooks: { [key: string]: any; };
	cssNumber: any;

	/**
	 * Store arbitrary data associated with the specified element. Returns the value that was set.
	 *
	 * @param element The DOM element to associate with the data.
	 * @param key A string naming the piece of data to set.
	 * @param value The new data value.
	 */
	data<T>(element: Element, key: string, value: T): T;
	/**
	 * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.
	 *
	 * @param element The DOM element to associate with the data.
	 * @param key A string naming the piece of data to set.
	 */
	data(element: Element, key: string): any;
	/**
	 * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.
	 *
	 * @param element The DOM element to associate with the data.
	 */
	data(element: Element): any;

	/**
	 * Execute the next function on the queue for the matched element.
	 *
	 * @param element A DOM element from which to remove and execute a queued function.
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 */
	dequeue(element: Element, queueName?: string): void;

	/**
	 * Determine whether an element has any jQuery data associated with it.
	 *
	 * @param element A DOM element to be checked for data.
	 */
	hasData(element: Element): boolean;

	/**
	 * Show the queue of functions to be executed on the matched element.
	 *
	 * @param element A DOM element to inspect for an attached queue.
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 */
	queue(element: Element, queueName?: string): any[];
	/**
	 * Manipulate the queue of functions to be executed on the matched element.
	 *
	 * @param element A DOM element where the array of queued functions is attached.
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 * @param newQueue An array of functions to replace the current queue contents.
	 */
	queue(element: Element, queueName: string, newQueue: Function[]): JQuery;
	/**
	 * Manipulate the queue of functions to be executed on the matched element.
	 *
	 * @param element A DOM element on which to add a queued function.
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 * @param callback The new function to add to the queue.
	 */
	queue(element: Element, queueName: string, callback: Function): JQuery;

	/**
	 * Remove a previously-stored piece of data.
	 *
	 * @param element A DOM element from which to remove data.
	 * @param name A string naming the piece of data to remove.
	 */
	removeData(element: Element, name?: string): JQuery;

	/**
	 * A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.
	 *
	 * @param beforeStart A function that is called just before the constructor returns.
	 */
	Deferred<T>(beforeStart?: (deferred: JQueryDeferred<T>) => any): JQueryDeferred<T>;

	/**
	 * Effects
	 */
	fx: {
		tick: () => void;
		/**
		 * The rate (in milliseconds) at which animations fire.
		 */
		interval: number;
		stop: () => void;
		speeds: { slow: number; fast: number; };
		/**
		 * Globally disable all animations.
		 */
		off: boolean;
		step: any;
	};

	/**
	 * Takes a function and returns a new one that will always have a particular context.
	 *
	 * @param fnction The function whose context will be changed.
	 * @param context The object to which the context (this) of the function should be set.
	 * @param additionalArguments Any number of arguments to be passed to the function referenced in the function argument.
	 */
	proxy(fnction: (...args: any[]) => any, context: Object, ...additionalArguments: any[]): any;
	/**
	 * Takes a function and returns a new one that will always have a particular context.
	 *
	 * @param context The object to which the context (this) of the function should be set.
	 * @param name The name of the function whose context will be changed (should be a property of the context object).
	 * @param additionalArguments Any number of arguments to be passed to the function named in the name argument.
	 */
	proxy(context: Object, name: string, ...additionalArguments: any[]): any;

	Event: JQueryEventConstructor;

	/**
	 * Takes a string and throws an exception containing it.
	 *
	 * @param message The message to send out.
	 */
	error(message: any): JQuery;

	expr: any;
	fn: any; //TODO: Decide how we want to type this

	isReady: boolean;

	// Properties
	support: JQuerySupport;

	/**
	 * Check to see if a DOM element is a descendant of another DOM element.
	 * 
	 * @param container The DOM element that may contain the other element.
	 * @param contained The DOM element that may be contained by (a descendant of) the other element.
	 */
	contains(container: Element, contained: Element): boolean;

	/**
	 * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
	 * 
	 * @param collection The object or array to iterate over.
	 * @param callback The function that will be executed on every object.
	 */
	each<T>(
		collection: T[],
		callback: (indexInArray: number, valueOfElement: T) => any
	): any;

	/**
	 * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
	 * 
	 * @param collection The object or array to iterate over.
	 * @param callback The function that will be executed on every object.
	 */
	each(
		collection: any,
		callback: (indexInArray: any, valueOfElement: any) => any
	): any;

	/**
	 * Merge the contents of two or more objects together into the first object.
	 *
	 * @param target An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
	 * @param object1 An object containing additional properties to merge in.
	 * @param objectN Additional objects containing properties to merge in.
	 */
	extend(target: any, object1?: any, ...objectN: any[]): any;
	/**
	 * Merge the contents of two or more objects together into the first object.
	 *
	 * @param deep If true, the merge becomes recursive (aka. deep copy).
	 * @param target The object to extend. It will receive the new properties.
	 * @param object1 An object containing additional properties to merge in.
	 * @param objectN Additional objects containing properties to merge in.
	 */
	extend(deep: boolean, target: any, object1?: any, ...objectN: any[]): any;

	/**
	 * Execute some JavaScript code globally.
	 *
	 * @param code The JavaScript code to execute.
	 */
	globalEval(code: string): any;

	/**
	 * Finds the elements of an array which satisfy a filter function. The original array is not affected.
	 *
	 * @param array The array to search through.
	 * @param func The function to process each item against. The first argument to the function is the item, and the second argument is the index. The function should return a Boolean value.  this will be the global window object.
	 * @param invert If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true. If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.
	 */
	grep<T>(array: T[], func: (elementOfArray: T, indexInArray: number) => boolean, invert?: boolean): T[];

	/**
	 * Search for a specified value within an array and return its index (or -1 if not found).
	 *
	 * @param value The value to search for.
	 * @param array An array through which to search.
	 * @param fromIndex he index of the array at which to begin the search. The default is 0, which will search the whole array.
	 */
	inArray<T>(value: T, array: T[], fromIndex?: number): number;

	/**
	 * Determine whether the argument is an array.
	 *
	 * @param obj Object to test whether or not it is an array.
	 */
	isArray(obj: any): boolean;
	/**
	 * Check to see if an object is empty (contains no enumerable properties).
	 *
	 * @param obj The object that will be checked to see if it's empty.
	 */
	isEmptyObject(obj: any): boolean;
	/**
	 * Determine if the argument passed is a Javascript function object.
	 *
	 * @param obj Object to test whether or not it is a function.
	 */
	isFunction(obj: any): boolean;
	/**
	 * Determines whether its argument is a number.
	 *
	 * @param obj The value to be tested.
	 */
	isNumeric(value: any): boolean;
	/**
	 * Check to see if an object is a plain object (created using "{}" or "new Object").
	 *
	 * @param obj The object that will be checked to see if it's a plain object.
	 */
	isPlainObject(obj: any): boolean;
	/**
	 * Determine whether the argument is a window.
	 *
	 * @param obj Object to test whether or not it is a window.
	 */
	isWindow(obj: any): boolean;
	/**
	 * Check to see if a DOM node is within an XML document (or is an XML document).
	 *
	 * @param node he DOM node that will be checked to see if it's in an XML document.
	 */
	isXMLDoc(node: Node): boolean;

	/**
	 * Convert an array-like object into a true JavaScript array.
	 * 
	 * @param obj Any object to turn into a native Array.
	 */
	makeArray(obj: any): any[];

	/**
	 * Translate all items in an array or object to new array of items.
	 * 
	 * @param array The Array to translate.
	 * @param callback The function to process each item against. The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, this refers to the global (window) object.
	 */
	map<T, U>(array: T[], callback: (elementOfArray: T, indexInArray: number) => U): U[];
	/**
	 * Translate all items in an array or object to new array of items.
	 * 
	 * @param arrayOrObject The Array or Object to translate.
	 * @param callback The function to process each item against. The first argument to the function is the value; the second argument is the index or key of the array or object property. The function can return any value to add to the array. A returned array will be flattened into the resulting array. Within the function, this refers to the global (window) object.
	 */
	map(arrayOrObject: any, callback: (value: any, indexOrKey: any) => any): any;

	/**
	 * Merge the contents of two arrays together into the first array.
	 * 
	 * @param first The first array to merge, the elements of second added.
	 * @param second The second array to merge into the first, unaltered.
	 */
	merge<T>(first: T[], second: T[]): T[];

	/**
	 * An empty function.
	 */
	noop(): any;

	/**
	 * Return a number representing the current time.
	 */
	now(): number;

	/**
	 * Takes a well-formed JSON string and returns the resulting JavaScript object.
	 * 
	 * @param json The JSON string to parse.
	 */
	parseJSON(json: string): any;

	/**
	 * Parses a string into an XML document.
	 *
	 * @param data a well-formed XML string to be parsed
	 */
	parseXML(data: string): XMLDocument;

	/**
	 * Remove the whitespace from the beginning and end of a string.
	 * 
	 * @param str Remove the whitespace from the beginning and end of a string.
	 */
	trim(str: string): string;

	/**
	 * Determine the internal JavaScript [[Class]] of an object.
	 * 
	 * @param obj Object to get the internal JavaScript [[Class]] of.
	 */
	type(obj: any): string;

	/**
	 * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
	 * 
	 * @param array The Array of DOM elements.
	 */
	unique(array: Element[]): Element[];

	/**
	 * Parses a string into an array of DOM nodes.
	 *
	 * @param data HTML string to be parsed
	 * @param context DOM element to serve as the context in which the HTML fragment will be created
	 * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
	 */
	parseHTML(data: string, context?: HTMLElement, keepScripts?: boolean): any[];

	/**
	 * Parses a string into an array of DOM nodes.
	 *
	 * @param data HTML string to be parsed
	 * @param context DOM element to serve as the context in which the HTML fragment will be created
	 * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
	 */
	parseHTML(data: string, context?: Document, keepScripts?: boolean): any[];
}