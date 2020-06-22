//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function(){} //treat .css file like an empty function
