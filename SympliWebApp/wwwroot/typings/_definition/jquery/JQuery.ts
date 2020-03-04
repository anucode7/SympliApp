﻿interface JQuery {
	/**
	 * Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
	 *
	 * @param handler The function to be invoked.
	 */
	ajaxComplete(handler: (event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: any) => any): JQuery;
	/**
	 * Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
	 *
	 * @param handler The function to be invoked.
	 */
	ajaxError(handler: (event: JQueryEventObject, jqXHR: JQueryXHR, ajaxSettings: JQueryAjaxSettings, thrownError: any) =>
		any): JQuery;
	/**
	 * Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
	 *
	 * @param handler The function to be invoked.
	 */
	ajaxSend(handler: (event: JQueryEventObject, jqXHR: JQueryXHR, ajaxOptions: JQueryAjaxSettings) => any): JQuery;
	/**
	 * Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
	 *
	 * @param handler The function to be invoked.
	 */
	ajaxStart(handler: () => any): JQuery;
	/**
	 * Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
	 *
	 * @param handler The function to be invoked.
	 */
	ajaxStop(handler: () => any): JQuery;
	/**
	 * Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
	 *
	 * @param handler The function to be invoked.
	 */
	ajaxSuccess(handler: (event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: JQueryAjaxSettings) =>
		any): JQuery;

	/**
	 * Load data from the server and place the returned HTML into the matched element.
	 *
	 * @param url A string containing the URL to which the request is sent.
	 * @param data A plain object or string that is sent to the server with the request.
	 * @param complete A callback function that is executed when the request completes.
	 */
	load(url: string,
		data?: string | Object,
		complete?: (responseText: string, textStatus: string, XMLHttpRequest: XMLHttpRequest) => any): JQuery;

	/**
	 * Encode a set of form elements as a string for submission.
	 */
	serialize(): string;
	/**
	 * Encode a set of form elements as an array of names and values.
	 */
	serializeArray(): JQuerySerializeArrayElement[];

	/**
	 * Adds the specified class(es) to each of the set of matched elements.
	 *
	 * @param className One or more space-separated classes to be added to the class attribute of each matched element.
	 */
	addClass(className: string): JQuery;
	/**
	 * Adds the specified class(es) to each of the set of matched elements.
	 *
	 * @param function A function returning one or more space-separated class names to be added to the existing class name(s). Receives the index position of the element in the set and the existing class name(s) as arguments. Within the function, this refers to the current element in the set.
	 */
	addClass(func: (index: number, className: string) => string): JQuery;

	/**
	 * Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
	 */
	addBack(selector?: string): JQuery;

	/**
	 * Get the value of an attribute for the first element in the set of matched elements.
	 *
	 * @param attributeName The name of the attribute to get.
	 */
	attr(attributeName: string): string;
	/**
	 * Set one or more attributes for the set of matched elements.
	 *
	 * @param attributeName The name of the attribute to set.
	 * @param value A value to set for the attribute.
	 */
	attr(attributeName: string, value: string | number): JQuery;
	/**
	 * Set one or more attributes for the set of matched elements.
	 *
	 * @param attributeName The name of the attribute to set.
	 * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old attribute value as arguments.
	 */
	attr(attributeName: string, func: (index: number, attr: string) => string | number): JQuery;
	/**
	 * Set one or more attributes for the set of matched elements.
	 *
	 * @param attributes An object of attribute-value pairs to set.
	 */
	attr(attributes: Object): JQuery;

	/**
	 * Determine whether any of the matched elements are assigned the given class.
	 *
	 * @param className The class name to search for.
	 */
	hasClass(className: string): boolean;

	/**
	 * Get the HTML contents of the first element in the set of matched elements.
	 */
	html(): string;
	/**
	 * Set the HTML contents of each element in the set of matched elements.
	 *
	 * @param htmlString A string of HTML to set as the content of each matched element.
	 */
	html(htmlString: string): JQuery;
	/**
	 * Set the HTML contents of each element in the set of matched elements.
	 *
	 * @param func A function returning the HTML content to set. Receives the index position of the element in the set and the old HTML value as arguments. jQuery empties the element before calling the function; use the oldhtml argument to reference the previous content. Within the function, this refers to the current element in the set.
	 */
	html(func: (index: number, oldhtml: string) => string): JQuery;
	/**
	 * Set the HTML contents of each element in the set of matched elements.
	 *
	 * @param func A function returning the HTML content to set. Receives the index position of the element in the set and the old HTML value as arguments. jQuery empties the element before calling the function; use the oldhtml argument to reference the previous content. Within the function, this refers to the current element in the set.
	 */

	/**
	 * Get the value of a property for the first element in the set of matched elements.
	 *
	 * @param propertyName The name of the property to get.
	 */
	prop(propertyName: string): any;
	/**
	 * Set one or more properties for the set of matched elements.
	 *
	 * @param propertyName The name of the property to set.
	 * @param value A value to set for the property.
	 */
	prop(propertyName: string, value: string | number | boolean): JQuery;
	/**
	 * Set one or more properties for the set of matched elements.
	 *
	 * @param properties An object of property-value pairs to set.
	 */
	prop(properties: Object): JQuery;
	/**
	 * Set one or more properties for the set of matched elements.
	 *
	 * @param propertyName The name of the property to set.
	 * @param func A function returning the value to set. Receives the index position of the element in the set and the old property value as arguments. Within the function, the keyword this refers to the current element.
	 */
	prop(propertyName: string, func: (index: number, oldPropertyValue: any) => any): JQuery;

	/**
	 * Remove an attribute from each element in the set of matched elements.
	 *
	 * @param attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
	 */
	removeAttr(attributeName: string): JQuery;

	/**
	 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
	 *
	 * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
	 */
	removeClass(className?: string): JQuery;
	/**
	 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
	 *
	 * @param function A function returning one or more space-separated class names to be removed. Receives the index position of the element in the set and the old class value as arguments.
	 */
	removeClass(func: (index: number, className: string) => string): JQuery;

	/**
	 * Remove a property for the set of matched elements.
	 *
	 * @param propertyName The name of the property to remove.
	 */
	removeProp(propertyName: string): JQuery;

	/**
	 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
	 *
	 * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
	 * @param swtch A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
	 */
	toggleClass(className: string, swtch?: boolean): JQuery;
	/**
	 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
	 *
	 * @param swtch A boolean value to determine whether the class should be added or removed.
	 */
	toggleClass(swtch?: boolean): JQuery;
	/**
	 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
	 *
	 * @param func A function that returns class names to be toggled in the class attribute of each element in the matched set. Receives the index position of the element in the set, the old class value, and the switch as arguments.
	 * @param swtch A boolean value to determine whether the class should be added or removed.
	 */
	toggleClass(func: (index: number, className: string, swtch: boolean) => string, swtch?: boolean): JQuery;

	/**
	 * Get the current value of the first element in the set of matched elements.
	 */
	val(): any;
	/**
	 * Set the value of each element in the set of matched elements.
	 *
	 * @param value A string of text, an array of strings or number corresponding to the value of each matched element to set as selected/checked.
	 */
	val(value: string | string[] | number): JQuery;
	/**
	 * Set the value of each element in the set of matched elements.
	 *
	 * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
	 */
	val(func: (index: number, value: string) => string): JQuery;


	/**
	 * Get the value of style properties for the first element in the set of matched elements.
	 *
	 * @param propertyName A CSS property.
	 */
	css(propertyName: string): string;
	/**
	 * Set one or more CSS properties for the set of matched elements.
	 *
	 * @param propertyName A CSS property name.
	 * @param value A value to set for the property.
	 */
	css(propertyName: string, value: string | number): JQuery;
	/**
	 * Set one or more CSS properties for the set of matched elements.
	 *
	 * @param propertyName A CSS property name.
	 * @param value A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
	 */
	css(propertyName: string, value: (index: number, value: string) => string | number): JQuery;
	/**
	 * Set one or more CSS properties for the set of matched elements.
	 *
	 * @param properties An object of property-value pairs to set.
	 */
	css(properties: Object): JQuery;

	/**
	 * Get the current computed height for the first element in the set of matched elements.
	 */
	height(): number;
	/**
	 * Set the CSS height of every matched element.
	 *
	 * @param value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
	 */
	height(value: number | string): JQuery;
	/**
	 * Set the CSS height of every matched element.
	 *
	 * @param func A function returning the height to set. Receives the index position of the element in the set and the old height as arguments. Within the function, this refers to the current element in the set.
	 */
	height(func: (index: number, height: number) => number | string): JQuery;

	/**
	 * Get the current computed height for the first element in the set of matched elements, including padding but not border.
	 */
	innerHeight(): number;

	/**
	 * Sets the inner height on elements in the set of matched elements, including padding but not border.
	 *
	 * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
	 */
	innerHeight(height: number | string): JQuery;

	/**
	 * Get the current computed width for the first element in the set of matched elements, including padding but not border.
	 */
	innerWidth(): number;

	/**
	 * Sets the inner width on elements in the set of matched elements, including padding but not border.
	 *
	 * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
	 */
	innerWidth(width: number | string): JQuery;

	/**
	 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
	 */
	offset(): JQueryCoordinates;
	/**
	 * An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
	 *
	 * @param coordinates An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
	 */
	offset(coordinates: JQueryCoordinates): JQuery;
	/**
	 * An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
	 *
	 * @param func A function to return the coordinates to set. Receives the index of the element in the collection as the first argument and the current coordinates as the second argument. The function should return an object with the new top and left properties.
	 */
	offset(func: (index: number, coords: JQueryCoordinates) => JQueryCoordinates): JQuery;

	/**
	 * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without "px") representation of the value or null if called on an empty set of elements.
	 *
	 * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
	 */
	outerHeight(includeMargin?: boolean): number;

	/**
	 * Sets the outer height on elements in the set of matched elements, including padding and border.
	 *
	 * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
	 */
	outerHeight(height: number | string): JQuery;

	/**
	 * Get the current computed width for the first element in the set of matched elements, including padding and border.
	 *
	 * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
	 */
	outerWidth(includeMargin?: boolean): number;

	/**
	 * Sets the outer width on elements in the set of matched elements, including padding and border.
	 *
	 * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
	 */
	outerWidth(width: number | string): JQuery;

	/**
	 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
	 */
	position(): JQueryCoordinates;

	/**
	 * Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.
	 */
	scrollLeft(): number;
	/**
	 * Set the current horizontal position of the scroll bar for each of the set of matched elements.
	 *
	 * @param value An integer indicating the new position to set the scroll bar to.
	 */
	scrollLeft(value: number): JQuery;

	/**
	 * Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
	 */
	scrollTop(): number;
	/**
	 * Set the current vertical position of the scroll bar for each of the set of matched elements.
	 *
	 * @param value An integer indicating the new position to set the scroll bar to.
	 */
	scrollTop(value: number): JQuery;

	/**
	 * Get the current computed width for the first element in the set of matched elements.
	 */
	width(): number;
	/**
	 * Set the CSS width of each element in the set of matched elements.
	 *
	 * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
	 */
	width(value: number | string): JQuery;
	/**
	 * Set the CSS width of each element in the set of matched elements.
	 *
	 * @param func A function returning the width to set. Receives the index position of the element in the set and the old width as arguments. Within the function, this refers to the current element in the set.
	 */
	width(func: (index: number, width: number) => number | string): JQuery;

	/**
	 * Remove from the queue all items that have not yet been run.
	 *
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 */
	clearQueue(queueName?: string): JQuery;

	/**
	 * Store arbitrary data associated with the matched elements.
	 *
	 * @param key A string naming the piece of data to set.
	 * @param value The new data value; it can be any Javascript type including Array or Object.
	 */
	data(key: string, value: any): JQuery;
	/**
	 * Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.
	 *
	 * @param key Name of the data stored.
	 */
	data(key: string): any;
	/**
	 * Store arbitrary data associated with the matched elements.
	 *
	 * @param obj An object of key-value pairs of data to update.
	 */
	data(obj: { [key: string]: any; }): JQuery;
	/**
	 * Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.
	 */
	data(): any;

	/**
	 * Execute the next function on the queue for the matched elements.
	 *
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 */
	dequeue(queueName?: string): JQuery;

	/**
	 * Remove a previously-stored piece of data.
	 *
	 * @param name A string naming the piece of data to delete or space-separated string naming the pieces of data to delete.
	 */
	removeData(name: string): JQuery;
	/**
	 * Remove a previously-stored piece of data.
	 *
	 * @param list An array of strings naming the pieces of data to delete.
	 */
	removeData(list: string[]): JQuery;
	/**
	 * Remove all previously-stored piece of data.
	 */
	removeData(): JQuery;

	/**
	 * Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.
	 *
	 * @param type The type of queue that needs to be observed. (default: fx)
	 * @param target Object onto which the promise methods have to be attached
	 */
	promise(type?: string, target?: Object): JQueryPromise<any>;

	/**
	 * Perform a custom animation of a set of CSS properties.
	 *
	 * @param properties An object of CSS properties and values that the animation will move toward.
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	animate(properties: Object, duration?: string | number, complete?: Function): JQuery;
	/**
	 * Perform a custom animation of a set of CSS properties.
	 *
	 * @param properties An object of CSS properties and values that the animation will move toward.
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition. (default: swing)
	 * @param complete A function to call once the animation is complete.
	 */
	animate(properties: Object, duration?: string | number, easing?: string, complete?: Function): JQuery;
	/**
	 * Perform a custom animation of a set of CSS properties.
	 *
	 * @param properties An object of CSS properties and values that the animation will move toward.
	 * @param options A map of additional options to pass to the method.
	 */
	animate(properties: Object, options: JQueryAnimationOptions): JQuery;

	/**
	 * Set a timer to delay execution of subsequent items in the queue.
	 *
	 * @param duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 */
	delay(duration: number, queueName?: string): JQuery;

	/**
	 * Display the matched elements by fading them to opaque.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	fadeIn(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Display the matched elements by fading them to opaque.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	fadeIn(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Display the matched elements by fading them to opaque.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	fadeIn(options: JQueryAnimationOptions): JQuery;

	/**
	 * Hide the matched elements by fading them to transparent.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	fadeOut(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Hide the matched elements by fading them to transparent.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	fadeOut(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Hide the matched elements by fading them to transparent.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	fadeOut(options: JQueryAnimationOptions): JQuery;

	/**
	 * Adjust the opacity of the matched elements.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param opacity A number between 0 and 1 denoting the target opacity.
	 * @param complete A function to call once the animation is complete.
	 */
	fadeTo(duration: string | number, opacity: number, complete?: Function): JQuery;
	/**
	 * Adjust the opacity of the matched elements.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param opacity A number between 0 and 1 denoting the target opacity.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	fadeTo(duration: string | number, opacity: number, easing?: string, complete?: Function): JQuery;

	/**
	 * Display or hide the matched elements by animating their opacity.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	fadeToggle(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Display or hide the matched elements by animating their opacity.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	fadeToggle(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Display or hide the matched elements by animating their opacity.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	fadeToggle(options: JQueryAnimationOptions): JQuery;

	/**
	 * Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.
	 *
	 * @param queue The name of the queue in which to stop animations.
	 */
	finish(queue?: string): JQuery;

	/**
	 * Hide the matched elements.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	hide(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Hide the matched elements.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	hide(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Hide the matched elements.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	hide(options: JQueryAnimationOptions): JQuery;

	/**
	 * Display the matched elements.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	show(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Display the matched elements.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	show(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Display the matched elements.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	show(options: JQueryAnimationOptions): JQuery;

	/**
	 * Display the matched elements with a sliding motion.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	slideDown(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Display the matched elements with a sliding motion.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	slideDown(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Display the matched elements with a sliding motion.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	slideDown(options: JQueryAnimationOptions): JQuery;

	/**
	 * Display or hide the matched elements with a sliding motion.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	slideToggle(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Display or hide the matched elements with a sliding motion.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	slideToggle(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Display or hide the matched elements with a sliding motion.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	slideToggle(options: JQueryAnimationOptions): JQuery;

	/**
	 * Hide the matched elements with a sliding motion.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	slideUp(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Hide the matched elements with a sliding motion.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	slideUp(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Hide the matched elements with a sliding motion.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	slideUp(options: JQueryAnimationOptions): JQuery;

	/**
	 * Stop the currently-running animation on the matched elements.
	 *
	 * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
	 * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
	 */
	stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery;
	/**
	 * Stop the currently-running animation on the matched elements.
	 *
	 * @param queue The name of the queue in which to stop animations.
	 * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
	 * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
	 */
	stop(queue?: string, clearQueue?: boolean, jumpToEnd?: boolean): JQuery;

	/**
	 * Display or hide the matched elements.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param complete A function to call once the animation is complete.
	 */
	toggle(duration?: number | string, complete?: Function): JQuery;
	/**
	 * Display or hide the matched elements.
	 *
	 * @param duration A string or number determining how long the animation will run.
	 * @param easing A string indicating which easing function to use for the transition.
	 * @param complete A function to call once the animation is complete.
	 */
	toggle(duration?: number | string, easing?: string, complete?: Function): JQuery;
	/**
	 * Display or hide the matched elements.
	 *
	 * @param options A map of additional options to pass to the method.
	 */
	toggle(options: JQueryAnimationOptions): JQuery;
	/**
	 * Display or hide the matched elements.
	 *
	 * @param showOrHide A Boolean indicating whether to show or hide the elements.
	 */
	toggle(showOrHide: boolean): JQuery;

	/**
	 * Attach a handler to an event for the elements.
	 * 
	 * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	bind(eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Attach a handler to an event for the elements.
	 * 
	 * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
	 * @param handler A function to execute each time the event is triggered.
	 */
	bind(eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Attach a handler to an event for the elements.
	 * 
	 * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
	 */
	bind(eventType: string, eventData: any, preventBubble: boolean): JQuery;
	/**
	 * Attach a handler to an event for the elements.
	 * 
	 * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
	 * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
	 */
	bind(eventType: string, preventBubble: boolean): JQuery;
	/**
	 * Attach a handler to an event for the elements.
	 * 
	 * @param events An object containing one or more DOM event types and functions to execute for them.
	 */
	bind(events: any): JQuery;

	/**
	 * Trigger the "blur" event on an element
	 */
	blur(): JQuery;
	/**
	 * Bind an event handler to the "blur" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	blur(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "blur" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	blur(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "change" event on an element.
	 */
	change(): JQuery;
	/**
	 * Bind an event handler to the "change" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	change(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "change" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	change(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "click" event on an element.
	 */
	click(): JQuery;
	/**
	 * Bind an event handler to the "click" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 */
	click(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "click" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	click(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "dblclick" event on an element.
	 */
	dblclick(): JQuery;
	/**
	 * Bind an event handler to the "dblclick" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	dblclick(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "dblclick" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	dblclick(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

	delegate(selector: any, eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
	delegate(selector: any, eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "focus" event on an element.
	 */
	focus(): JQuery;
	/**
	 * Bind an event handler to the "focus" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	focus(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "focus" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	focus(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "focusin" event on an element.
	 */
	focusin(): JQuery;
	/**
	 * Bind an event handler to the "focusin" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	focusin(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "focusin" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	focusin(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "focusout" event on an element.
	 */
	focusout(): JQuery;
	/**
	 * Bind an event handler to the "focusout" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	focusout(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "focusout" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	focusout(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
	 *
	 * @param handlerIn A function to execute when the mouse pointer enters the element.
	 * @param handlerOut A function to execute when the mouse pointer leaves the element.
	 */
	hover(handlerIn: (eventObject: JQueryEventObject) => any, handlerOut: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
	 *
	 * @param handlerInOut A function to execute when the mouse pointer enters or leaves the element.
	 */
	hover(handlerInOut: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "keydown" event on an element.
	 */
	keydown(): JQuery;
	/**
	 * Bind an event handler to the "keydown" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	keydown(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "keydown" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	keydown(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

	/**
	 * Trigger the "keypress" event on an element.
	 */
	keypress(): JQuery;
	/**
	 * Bind an event handler to the "keypress" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	keypress(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "keypress" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	keypress(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

	/**
	 * Trigger the "keyup" event on an element.
	 */
	keyup(): JQuery;
	/**
	 * Bind an event handler to the "keyup" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	keyup(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "keyup" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	keyup(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

	/**
	 * Bind an event handler to the "load" JavaScript event.
	 *
	 * @param handler A function to execute when the event is triggered.
	 */
	load(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "load" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	load(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "mousedown" event on an element.
	 */
	mousedown(): JQuery;
	/**
	 * Bind an event handler to the "mousedown" JavaScript event.
	 *
	 * @param handler A function to execute when the event is triggered.
	 */
	mousedown(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "mousedown" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	mousedown(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

	/**
	 * Trigger the "mouseenter" event on an element.
	 */
	mouseenter(): JQuery;
	/**
	 * Bind an event handler to be fired when the mouse enters an element.
	 *
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseenter(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
	/**
	 * Bind an event handler to be fired when the mouse enters an element.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseenter(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

	/**
	 * Trigger the "mouseleave" event on an element.
	 */
	mouseleave(): JQuery;
	/**
	 * Bind an event handler to be fired when the mouse leaves an element.
	 *
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseleave(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
	/**
	 * Bind an event handler to be fired when the mouse leaves an element.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseleave(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

	/**
	 * Trigger the "mousemove" event on an element.
	 */
	mousemove(): JQuery;
	/**
	 * Bind an event handler to the "mousemove" JavaScript event.
	 *
	 * @param handler A function to execute when the event is triggered.
	 */
	mousemove(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "mousemove" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	mousemove(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

	/**
	 * Trigger the "mouseout" event on an element.
	 */
	mouseout(): JQuery;
	/**
	 * Bind an event handler to the "mouseout" JavaScript event.
	 *
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseout(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "mouseout" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseout(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

	/**
	 * Trigger the "mouseover" event on an element.
	 */
	mouseover(): JQuery;
	/**
	 * Bind an event handler to the "mouseover" JavaScript event.
	 *
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseover(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "mouseover" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseover(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

	/**
	 * Trigger the "mouseup" event on an element.
	 */
	mouseup(): JQuery;
	/**
	 * Bind an event handler to the "mouseup" JavaScript event.
	 *
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseup(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "mouseup" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	mouseup(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

	/**
	 * Remove an event handler.
	 */
	off(): JQuery;
	/**
	 * Remove an event handler.
	 *
	 * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
	 * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
	 * @param handler A handler function previously attached for the event(s), or the special value false.
	 */
	off(events: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Remove an event handler.
	 *
	 * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
	 * @param handler A handler function previously attached for the event(s), or the special value false.
	 */
	off(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Remove an event handler.
	 *
	 * @param events An object where the string keys represent one or more space-separated event types and optional namespaces, and the values represent handler functions previously attached for the event(s).
	 * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
	 */
	off(events: { [key: string]: any; }, selector?: string): JQuery;

	/**
	 * Attach an event handler function for one or more events to the selected elements.
	 *
	 * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
	 * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
	 */
	on(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
	/**
	 * Attach an event handler function for one or more events to the selected elements.
	 *
	 * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
	 * @param data Data to be passed to the handler in event.data when an event is triggered.
	 * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
	*/
	on(events: string, data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
	/**
	 * Attach an event handler function for one or more events to the selected elements.
	 *
	 * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
	 * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
	 * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
	 */
	on(events: string, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
	/**
	 * Attach an event handler function for one or more events to the selected elements.
	 *
	 * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
	 * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
	 * @param data Data to be passed to the handler in event.data when an event is triggered.
	 * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
	 */
	on(events: string,
		selector: string,
		data: any,
		handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
	/**
	 * Attach an event handler function for one or more events to the selected elements.
	 *
	 * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
	 * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.
	 * @param data Data to be passed to the handler in event.data when an event occurs.
	 */
	on(events: { [key: string]: any; }, selector?: string, data?: any): JQuery;
	/**
	 * Attach an event handler function for one or more events to the selected elements.
	 *
	 * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
	 * @param data Data to be passed to the handler in event.data when an event occurs.
	 */
	on(events: { [key: string]: any; }, data?: any): JQuery;

	/**
	 * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
	 *
	 * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
	 * @param handler A function to execute at the time the event is triggered.
	 */
	one(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
	 *
	 * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
	 * @param data An object containing data that will be passed to the event handler.
	 * @param handler A function to execute at the time the event is triggered.
	 */
	one(events: string, data: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
	 *
	 * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
	 * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
	 * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
	 */
	one(events: string, selector: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
	 *
	 * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
	 * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
	 * @param data Data to be passed to the handler in event.data when an event is triggered.
	 * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
	 */
	one(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
	 *
	 * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
	 * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.
	 * @param data Data to be passed to the handler in event.data when an event occurs.
	 */
	one(events: { [key: string]: any; }, selector?: string, data?: any): JQuery;

	/**
	 * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
	 *
	 * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
	 * @param data Data to be passed to the handler in event.data when an event occurs.
	 */
	one(events: { [key: string]: any; }, data?: any): JQuery;


	/**
	 * Specify a function to execute when the DOM is fully loaded.
	 *
	 * @param handler A function to execute after the DOM is ready.
	 */
	ready(handler: (jQueryAlias?: JQueryStatic) => any): JQuery;

	/**
	 * Trigger the "resize" event on an element.
	 */
	resize(): JQuery;
	/**
	 * Bind an event handler to the "resize" JavaScript event.
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	resize(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "resize" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	resize(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "scroll" event on an element.
	 */
	scroll(): JQuery;
	/**
	 * Bind an event handler to the "scroll" JavaScript event.
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	scroll(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "scroll" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	scroll(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "select" event on an element.
	 */
	select(): JQuery;
	/**
	 * Bind an event handler to the "select" JavaScript event.
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	select(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "select" JavaScript event.
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	select(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Trigger the "submit" event on an element.
	 */
	submit(): JQuery;
	/**
	 * Bind an event handler to the "submit" JavaScript event
	 *
	 * @param handler A function to execute each time the event is triggered.
	 */
	submit(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "submit" JavaScript event
	 *
	 * @param eventData An object containing data that will be passed to the event handler.
	 * @param handler A function to execute each time the event is triggered.
	 */
	submit(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Execute all handlers and behaviors attached to the matched elements for the given event type.
	 * 
	 * @param eventType A string containing a JavaScript event type, such as click or submit.
	 * @param extraParameters Additional parameters to pass along to the event handler.
	 */
	trigger(eventType: string, extraParameters?: any[] | Object): JQuery;
	/**
	 * Execute all handlers and behaviors attached to the matched elements for the given event type.
	 * 
	 * @param event A jQuery.Event object.
	 * @param extraParameters Additional parameters to pass along to the event handler.
	 */
	trigger(event: JQueryEventObject, extraParameters?: any[] | Object): JQuery;

	/**
	 * Execute all handlers attached to an element for an event.
	 * 
	 * @param eventType A string containing a JavaScript event type, such as click or submit.
	 * @param extraParameters An array of additional parameters to pass along to the event handler.
	 */
	triggerHandler(eventType: string, ...extraParameters: any[]): Object;

	/**
	 * Execute all handlers attached to an element for an event.
	 * 
	 * @param event A jQuery.Event object.
	 * @param extraParameters An array of additional parameters to pass along to the event handler.
	 */
	triggerHandler(event: JQueryEventObject, ...extraParameters: any[]): Object;

	/**
	 * Remove a previously-attached event handler from the elements.
	 * 
	 * @param eventType A string containing a JavaScript event type, such as click or submit.
	 * @param handler The function that is to be no longer executed.
	 */
	unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Remove a previously-attached event handler from the elements.
	 * 
	 * @param eventType A string containing a JavaScript event type, such as click or submit.
	 * @param fls Unbinds the corresponding 'return false' function that was bound using .bind( eventType, false ).
	 */
	unbind(eventType: string, fls: boolean): JQuery;
	/**
	 * Remove a previously-attached event handler from the elements.
	 * 
	 * @param evt A JavaScript event object as passed to an event handler.
	 */
	unbind(evt: any): JQuery;

	/**
	 * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
	 */
	undelegate(): JQuery;
	/**
	 * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
	 * 
	 * @param selector A selector which will be used to filter the event results.
	 * @param eventType A string containing a JavaScript event type, such as "click" or "keydown"
	 * @param handler A function to execute at the time the event is triggered.
	 */
	undelegate(selector: string, eventType: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
	 * 
	 * @param selector A selector which will be used to filter the event results.
	 * @param events An object of one or more event types and previously bound functions to unbind from them.
	 */
	undelegate(selector: string, events: Object): JQuery;
	/**
	 * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
	 * 
	 * @param namespace A string containing a namespace to unbind all events from.
	 */
	undelegate(namespace: string): JQuery;

	/**
	 * Bind an event handler to the "unload" JavaScript event. (DEPRECATED from v1.8)
	 * 
	 * @param handler A function to execute when the event is triggered.
	 */
	unload(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "unload" JavaScript event. (DEPRECATED from v1.8)
	 * 
	 * @param eventData A plain object of data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	unload(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document. (DEPRECATED from v1.10)
	 */
	context: Element;

	jquery: string;

	/**
	 * Bind an event handler to the "error" JavaScript event. (DEPRECATED from v1.8)
	 * 
	 * @param handler A function to execute when the event is triggered.
	 */
	error(handler: (eventObject: JQueryEventObject) => any): JQuery;
	/**
	 * Bind an event handler to the "error" JavaScript event. (DEPRECATED from v1.8)
	 * 
	 * @param eventData A plain object of data that will be passed to the event handler.
	 * @param handler A function to execute when the event is triggered.
	 */
	error(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

	/**
	 * Add a collection of DOM elements onto the jQuery stack.
	 * 
	 * @param elements An array of elements to push onto the stack and make into a new jQuery object.
	 */
	pushStack(elements: any[]): JQuery;
	/**
	 * Add a collection of DOM elements onto the jQuery stack.
	 * 
	 * @param elements An array of elements to push onto the stack and make into a new jQuery object.
	 * @param name The name of a jQuery method that generated the array of elements.
	 * @param arguments The arguments that were passed in to the jQuery method (for serialization).
	 */
	pushStack(elements: any[], name: string, arguments: any[]): JQuery;

	/**
	 * Insert content, specified by the parameter, after each element in the set of matched elements.
	 * 
	 * param content1 HTML string, DOM element, array of elements, or jQuery object to insert after each element in the set of matched elements.
	 * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
	 */
	after(content1: JQuery | any[] | Element | Text | string, ...content2: any[]): JQuery;
	/**
	 * Insert content, specified by the parameter, after each element in the set of matched elements.
	 * 
	 * param func A function that returns an HTML string, DOM element(s), or jQuery object to insert after each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
	 */
	after(func: (index: number, html: string) => string | Element | JQuery): JQuery;

	/**
	 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
	 * 
	 * param content1 DOM element, array of elements, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
	 * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
	 */
	append(content1: JQuery | any[] | Element | Text | string, ...content2: any[]): JQuery;
	/**
	 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
	 * 
	 * param func A function that returns an HTML string, DOM element(s), or jQuery object to insert at the end of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.
	 */
	append(func: (index: number, html: string) => string | Element | JQuery): JQuery;

	/**
	 * Insert every element in the set of matched elements to the end of the target.
	 * 
	 * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
	 */
	appendTo(target: JQuery | any[] | Element | string): JQuery;

	/**
	 * Insert content, specified by the parameter, before each element in the set of matched elements.
	 * 
	 * param content1 HTML string, DOM element, array of elements, or jQuery object to insert before each element in the set of matched elements.
	 * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
	 */
	before(content1: JQuery | any[] | Element | Text | string, ...content2: any[]): JQuery;
	/**
	 * Insert content, specified by the parameter, before each element in the set of matched elements.
	 * 
	 * param func A function that returns an HTML string, DOM element(s), or jQuery object to insert before each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
	 */
	before(func: (index: number, html: string) => string | Element | JQuery): JQuery;

	/**
	 * Create a deep copy of the set of matched elements.
	 * 
	 * param withDataAndEvents A Boolean indicating whether event handlers and data should be copied along with the elements. The default value is false.
	 * param deepWithDataAndEvents A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to false).
	 */
	clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): JQuery;

	/**
	 * Remove the set of matched elements from the DOM.
	 * 
	 * param selector A selector expression that filters the set of matched elements to be removed.
	 */
	detach(selector?: string): JQuery;

	/**
	 * Remove all child nodes of the set of matched elements from the DOM.
	 */
	empty(): JQuery;

	/**
	 * Insert every element in the set of matched elements after the target.
	 * 
	 * param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
	 */
	insertAfter(target: JQuery | any[] | Element | Text | string): JQuery;

	/**
	 * Insert every element in the set of matched elements before the target.
	 * 
	 * param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
	 */
	insertBefore(target: JQuery | any[] | Element | Text | string): JQuery;

	/**
	 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
	 * 
	 * param content1 DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
	 * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
	 */
	prepend(content1: JQuery | any[] | Element | Text | string, ...content2: any[]): JQuery;
	/**
	 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
	 * 
	 * param func A function that returns an HTML string, DOM element(s), or jQuery object to insert at the beginning of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.
	 */
	prepend(func: (index: number, html: string) => string | Element | JQuery): JQuery;

	/**
	 * Insert every element in the set of matched elements to the beginning of the target.
	 * 
	 * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
	 */
	prependTo(target: JQuery | any[] | Element | string): JQuery;

	/**
	 * Remove the set of matched elements from the DOM.
	 * 
	 * @param selector A selector expression that filters the set of matched elements to be removed.
	 */
	remove(selector?: string): JQuery;

	/**
	 * Replace each target element with the set of matched elements.
	 * 
	 * @param target A selector string, jQuery object, DOM element, or array of elements indicating which element(s) to replace.
	 */
	replaceAll(target: JQuery | any[] | Element | string): JQuery;

	/**
	 * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
	 * 
	 * param newContent The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.
	 */
	replaceWith(newContent: JQuery | any[] | Element | Text | string): JQuery;
	/**
	 * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
	 * 
	 * param func A function that returns content with which to replace the set of matched elements.
	 */
	replaceWith(func: () => Element | JQuery): JQuery;

	/**
	 * Get the combined text contents of each element in the set of matched elements, including their descendants.
	 */
	text(): string;
	/**
	 * Set the content of each element in the set of matched elements to the specified text.
	 * 
	 * @param text The text to set as the content of each matched element. When Number or Boolean is supplied, it will be converted to a String representation.
	 */
	text(text: string | number | boolean): JQuery;
	/**
	 * Set the content of each element in the set of matched elements to the specified text.
	 * 
	 * @param func A function returning the text content to set. Receives the index position of the element in the set and the old text value as arguments.
	 */
	text(func: (index: number, text: string) => string): JQuery;

	/**
	 * Retrieve all the elements contained in the jQuery set, as an array.
	 */
	toArray(): any[];

	/**
	 * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
	 */
	unwrap(): JQuery;

	/**
	 * Wrap an HTML structure around each element in the set of matched elements.
	 * 
	 * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
	 */
	wrap(wrappingElement: JQuery | Element | string): JQuery;
	/**
	 * Wrap an HTML structure around each element in the set of matched elements.
	 * 
	 * @param func A callback function returning the HTML content or jQuery object to wrap around the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
	 */
	wrap(func: (index: number) => string | JQuery): JQuery;

	/**
	 * Wrap an HTML structure around all elements in the set of matched elements.
	 * 
	 * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
	 */
	wrapAll(wrappingElement: JQuery | Element | string): JQuery;
	wrapAll(func: (index: number) => string): JQuery;

	/**
	 * Wrap an HTML structure around the content of each element in the set of matched elements.
	 * 
	 * @param wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
	 */
	wrapInner(wrappingElement: JQuery | Element | string): JQuery;
	/**
	 * Wrap an HTML structure around the content of each element in the set of matched elements.
	 * 
	 * @param func A callback function which generates a structure to wrap around the content of the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
	 */
	wrapInner(func: (index: number) => string): JQuery;

	/**
	 * Iterate over a jQuery object, executing a function for each matched element.
	 * 
	 * @param func A function to execute for each matched element.
	 */
	each(func: (index: number, elem: Element) => any): JQuery;

	/**
	 * Retrieve one of the elements matched by the jQuery object.
	 * 
	 * @param index A zero-based integer indicating which element to retrieve.
	 */
	get(index: number): HTMLElement;
	/**
	 * Retrieve the elements matched by the jQuery object.
	 */
	get(): any[];

	/**
	 * Search for a given element from among the matched elements.
	 */
	index(): number;
	/**
	 * Search for a given element from among the matched elements.
	 * 
	 * @param selector A selector representing a jQuery collection in which to look for an element.
	 */
	index(selector: string | JQuery | Element): number;

	/**
	 * The number of elements in the jQuery object.
	 */
	length: number;
	/**
	 * A selector representing selector passed to jQuery(), if any, when creating the original set.
	 * version deprecated: 1.7, removed: 1.9
	 */
	selector: string;
	[index: string]: any;
	[index: number]: HTMLElement;

	/**
	 * Add elements to the set of matched elements.
	 * 
	 * @param selector A string representing a selector expression to find additional elements to add to the set of matched elements.
	 * @param context The point in the document at which the selector should begin matching; similar to the context argument of the $(selector, context) method.
	 */
	add(selector: string, context?: Element): JQuery;
	/**
	 * Add elements to the set of matched elements.
	 * 
	 * @param elements One or more elements to add to the set of matched elements.
	 */
	add(...elements: Element[]): JQuery;
	/**
	 * Add elements to the set of matched elements.
	 * 
	 * @param html An HTML fragment to add to the set of matched elements.
	 */
	add(html: string): JQuery;
	/**
	 * Add elements to the set of matched elements.
	 * 
	 * @param obj An existing jQuery object to add to the set of matched elements.
	 */
	add(obj: JQuery): JQuery;

	/**
	 * Get the children of each element in the set of matched elements, optionally filtered by a selector.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	children(selector?: string): JQuery;

	/**
	 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	closest(selector: string): JQuery;
	/**
	 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 * @param context A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
	 */
	closest(selector: string, context?: Element): JQuery;
	/**
	 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
	 * 
	 * @param obj A jQuery object to match elements against.
	 */
	closest(obj: JQuery): JQuery;
	/**
	 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
	 * 
	 * @param element An element to match elements against.
	 */
	closest(element: Element): JQuery;

	/**
	 * Get an array of all the elements and selectors matched against the current element up through the DOM tree.
	 * 
	 * @param selectors An array or string containing a selector expression to match elements against (can also be a jQuery object).
	 * @param context A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
	 */
	closest(selectors: any, context?: Element): any[];

	/**
	 * Get the children of each element in the set of matched elements, including text and comment nodes.
	 */
	contents(): JQuery;

	/**
	 * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
	 */
	end(): JQuery;

	/**
	 * Reduce the set of matched elements to the one at the specified index.
	 * 
	 * @param index An integer indicating the 0-based position of the element. OR An integer indicating the position of the element, counting backwards from the last element in the set.
	 *  
	 */
	eq(index: number): JQuery;

	/**
	 * Reduce the set of matched elements to those that match the selector or pass the function's test.
	 * 
	 * @param selector A string containing a selector expression to match the current set of elements against.
	 */
	filter(selector: string): JQuery;
	/**
	 * Reduce the set of matched elements to those that match the selector or pass the function's test.
	 * 
	 * @param func A function used as a test for each element in the set. this is the current DOM element.
	 */
	filter(func: (index: number, element: Element) => any): JQuery;
	/**
	 * Reduce the set of matched elements to those that match the selector or pass the function's test.
	 * 
	 * @param element An element to match the current set of elements against.
	 */
	filter(element: Element): JQuery;
	/**
	 * Reduce the set of matched elements to those that match the selector or pass the function's test.
	 * 
	 * @param obj An existing jQuery object to match the current set of elements against.
	 */
	filter(obj: JQuery): JQuery;

	/**
	 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	find(selector: string): JQuery;
	/**
	 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
	 * 
	 * @param element An element to match elements against.
	 */
	find(element: Element): JQuery;
	/**
	 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
	 * 
	 * @param obj A jQuery object to match elements against.
	 */
	find(obj: JQuery): JQuery;

	/**
	 * Reduce the set of matched elements to the first in the set.
	 */
	first(): JQuery;

	/**
	 * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	has(selector: string): JQuery;
	/**
	 * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
	 * 
	 * @param contained A DOM element to match elements against.
	 */
	has(contained: Element): JQuery;

	/**
	 * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	is(selector: string): boolean;
	/**
	 * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
	 * 
	 * @param func A function used as a test for the set of elements. It accepts one argument, index, which is the element's index in the jQuery collection.Within the function, this refers to the current DOM element.
	 */
	is(func: (index: number, element: Element) => boolean): boolean;
	/**
	 * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
	 * 
	 * @param obj An existing jQuery object to match the current set of elements against.
	 */
	is(obj: JQuery): boolean;
	/**
	 * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
	 * 
	 * @param elements One or more elements to match the current set of elements against.
	 */
	is(elements: any): boolean;

	/**
	 * Reduce the set of matched elements to the final one in the set.
	 */
	last(): JQuery;

	/**
	 * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
	 * 
	 * @param callback A function object that will be invoked for each element in the current set.
	 */
	map(callback: (index: number, domElement: Element) => any): JQuery;

	/**
	 * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	next(selector?: string): JQuery;

	/**
	 * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	nextAll(selector?: string): JQuery;

	/**
	 * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
	 * 
	 * @param selector A string containing a selector expression to indicate where to stop matching following sibling elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	nextUntil(selector?: string, filter?: string): JQuery;
	/**
	 * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
	 * 
	 * @param element A DOM node or jQuery object indicating where to stop matching following sibling elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	nextUntil(element?: Element, filter?: string): JQuery;
	/**
	 * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
	 * 
	 * @param obj A DOM node or jQuery object indicating where to stop matching following sibling elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	nextUntil(obj?: JQuery, filter?: string): JQuery;

	/**
	 * Remove elements from the set of matched elements.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	not(selector: string): JQuery;
	/**
	 * Remove elements from the set of matched elements.
	 * 
	 * @param func A function used as a test for each element in the set. this is the current DOM element.
	 */
	not(func: (index: number, element: Element) => boolean): JQuery;
	/**
	 * Remove elements from the set of matched elements.
	 * 
	 * @param elements One or more DOM elements to remove from the matched set.
	 */
	not(elements: Element | Element[]): JQuery;
	/**
	 * Remove elements from the set of matched elements.
	 * 
	 * @param obj An existing jQuery object to match the current set of elements against.
	 */
	not(obj: JQuery): JQuery;

	/**
	 * Get the closest ancestor element that is positioned.
	 */
	offsetParent(): JQuery;

	/**
	 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	parent(selector?: string): JQuery;

	/**
	 * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	parents(selector?: string): JQuery;

	/**
	 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
	 * 
	 * @param selector A string containing a selector expression to indicate where to stop matching ancestor elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	parentsUntil(selector?: string, filter?: string): JQuery;
	/**
	 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
	 * 
	 * @param element A DOM node or jQuery object indicating where to stop matching ancestor elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	parentsUntil(element?: Element, filter?: string): JQuery;
	/**
	 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
	 * 
	 * @param obj A DOM node or jQuery object indicating where to stop matching ancestor elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	parentsUntil(obj?: JQuery, filter?: string): JQuery;

	/**
	 * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	prev(selector?: string): JQuery;

	/**
	 * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	prevAll(selector?: string): JQuery;

	/**
	 * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
	 * 
	 * @param selector A string containing a selector expression to indicate where to stop matching preceding sibling elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	prevUntil(selector?: string, filter?: string): JQuery;
	/**
	 * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
	 * 
	 * @param element A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	prevUntil(element?: Element, filter?: string): JQuery;
	/**
	 * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
	 * 
	 * @param obj A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
	 * @param filter A string containing a selector expression to match elements against.
	 */
	prevUntil(obj?: JQuery, filter?: string): JQuery;

	/**
	 * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
	 * 
	 * @param selector A string containing a selector expression to match elements against.
	 */
	siblings(selector?: string): JQuery;

	/**
	 * Reduce the set of matched elements to a subset specified by a range of indices.
	 * 
	 * @param start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
	 * @param end An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
	 */
	slice(start: number, end?: number): JQuery;

	/**
	 * Show the queue of functions to be executed on the matched elements.
	 * 
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 */
	queue(queueName?: string): any[];
	/**
	 * Manipulate the queue of functions to be executed, once for each matched element.
	 * 
	 * @param newQueue An array of functions to replace the current queue contents.
	 */
	queue(newQueue: Function[]): JQuery;
	/**
	 * Manipulate the queue of functions to be executed, once for each matched element.
	 * 
	 * @param callback The new function to add to the queue, with a function to call that will dequeue the next item.
	 */
	queue(callback: Function): JQuery;
	/**
	 * Manipulate the queue of functions to be executed, once for each matched element.
	 * 
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 * @param newQueue An array of functions to replace the current queue contents.
	 */
	queue(queueName: string, newQueue: Function[]): JQuery;
	/**
	 * Manipulate the queue of functions to be executed, once for each matched element.
	 * 
	 * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 * @param callback The new function to add to the queue, with a function to call that will dequeue the next item.
	 */
	queue(queueName: string, callback: Function): JQuery;
}