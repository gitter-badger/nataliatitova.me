var Metalsmith = require('metalsmith');
Metalsmith(__dirname)
    .destination('./build')
    .build(
        function(err){
            if (err) throw err;
        }
    );