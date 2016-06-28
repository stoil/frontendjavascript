/**
 * Lecture 7 Homework
 * Exercise 7
 *
 * Write a script that parses an URL address given in the format:
 * [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements. Return the elements in a JSON object.
 *
 *
 * For example from the URL http://www.devbg.org/forum/index.php the following information should be extracted:
 * {
 * protocol: 'http',
 * server: 'www.devbg.org',
 * resource: '/forum/index.php'
 * }

 *
 */

"use strict";
var url = 'http://www.devbg.org/forum/index.php';
function linkFormatter( link ) {
    var json = new Object();
    json.protocol = link.match( /^(?:(ht|f)tp(s?)|file|mail)?/g )[0];
    json.server = link.match( /(?:[a-zA-Z]{3}\.)?(?:[a-zA-Z0-9]+\.[a-zA-Z]{2,})/gi )[0];
    json.resource = link.match( /(?:(\/[a-zA-Z0-9-]+(\/)?)+([a-zA-Z0-9-]+)(\.[a-zA-Z]+)?\/?$)/gi )[0];
    return json;
}
console.log( linkFormatter( url ) );