/**
 * Lecture 7 Homework
 * Exercise 12
 *
 * Write a function that creates a HTML UL using a template for every HTML LI.
 * The source of the list should be an array of elements.
 * Replace all placeholders marked with –{…}–   with the value of the corresponding property of the object.
 *
 * Example:
 * <div data-type="template" id="list-item">
 *      <strong>-{name}-</strong> <span>-{age}-</span>
 * </div>
 *
 * var people = [{name: 'Peter', age: 14},…];
 * var tmpl = document.getElementById('list-item').innerHtml;
 * var peopleList = generateList(people, template);
 * //peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'
 *
 */

"use strict";

function generateList() {
    let regex = /-{(\w+)}-/g,
        template = document.getElementById( 'list-item' ).innerHTML,
        result = '',
        people = [
            {
                name: 'Peter',
                age: 14
            },
            {
                name: 'Ivan',
                age: 24
            },
            {
                name: 'Georgi',
                age: 34
            }
        ]
    ;

    result += '<ul>';


    for ( let key in people ) {

        if ( !people.hasOwnProperty( key ) ) {
            continue;
        }

        let personObj = people[key];
        
        result += '<li>';

        result += template.replace( regex, function( match, p1 ) {
            return personObj[p1];
        } );
        result += '</li>';

    }

    result += '</ul>';

    document.getElementById( 'container' ).innerHTML = result;
}

document.getElementById( 'actionBtn' ).onclick = generateList;