// private functions

function _getNavigatorLanguage() {
    if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0];
    }
    else {
        return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
}

/*
* PUBLIC FUNCTIONS
*/

// *
// JS object sorting
// *
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
// Demo call: ArrayOfObjects.sort(dynamicSort("Name")); / ArrayOfObjects.sort(dynamicSort("-Name"));

export function sortBy(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export function sortByMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while (result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

// *
// JS string utils
// *

export function getTerm(route) {

    let term = route;

    const lastChar = term.substr(-1);
    if (lastChar === '/') {
        term = term.substring(0, term.length - 1);
    }

    const index = term.indexOf('/');
    if (index > -1) {
        const arr = term.split('/');

        const last = function (array, n) {
            if (array == null)
                return void 0;
            if (n == null)
                return array[array.length - 1];
            return array.slice(Math.max(array.length - n, 0));
        };

        term = last(arr);
    }

    //console.log('term', term);
    return term;
}

export function setTitle(ctname) {
    if (ctname === "timelines") {
        return (<h1><span className="scribe">Adventures in...</span> Time</h1>);
    }
    ctname = ctname.replace("-", ' ');
    return (<h1><span className="scribe">Evolution of... </span> {ctname}</h1>);
}


// *
// JS array utils
// *

export function randomWord() {
    const words = ["Fabulous", "Fruity", "Fast", "Damn Hot"];
    //const randomWord = words[Math.floor(Math.random() * words.length)];
    const randomWord = words[0];

    return randomWord;
}

export function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export function shuffle(arr, n) {
    // Shuffle array
    const shuffled = arr.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, n);
    
    return selected;
}







// formatter functions

export function formatPercent(value, decimalPlaces) {
    if (undefined === decimalPlaces) decimalPlaces = 0;
    return Number.parseFloat(value).toFixed(decimalPlaces) + '%';
}

export function formatSeconds(value, decimalPlaces) {
    if (undefined === decimalPlaces) decimalPlaces = 1;
    return Number.parseFloat(value).toFixed(decimalPlaces) + 's';
}

export function formatMinuteAndSeconds(value, decimalPlacesSeconds) {
    if (undefined === decimalPlacesSeconds) decimalPlacesSeconds = 0;
    const num = Number.parseFloat(value);
    const minutes = Math.floor(num / 60);
    const seconds = (num % 60);

    // console.log(`num=${num} minutes=${minutes} seconds=${seconds} `);

    if (0 !== minutes) {
        return minutes.toFixed(0) + 'm ' + seconds.toFixed(decimalPlacesSeconds) + 's';
    }
    else {
        return seconds.toFixed(decimalPlacesSeconds) + 's';
    }
}

export function formatFraction(value) {
    // console.log(`formatFraction(${JSON.stringify(value)})`);
    return `${value.numerator} / ${value.denominator}`;
}
