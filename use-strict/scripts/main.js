/*
"use strict";

// a = 1;

// function test() {
//     a = 1;
// }

// test();
*/

a = 1;

(function() {
    "use strict";

    // b = 2;

    delete a;
})();