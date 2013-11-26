Appfurance RequireJs Starter Kit
========================

This repository contains a working application for develop large application with Appfurance.

1. Install node.js (http://nodejs.org/)
2. install Mimosa with $ npm install -g Mimosa on your command line
3. Clone this repository copy on your disk
4. Switch with your command line tool (CMD) into your project folder

==Start development==
 1. Use `make start` to start up an asset server and begin coding immediately.
 2. Create your application on the Appfurance Website
 3. Go to the "Code" tab in you application and overwrite all with the following code
 4. Choose your configuration
```javascript
    /*Debug Configuration - BEGIN */
    (function(){
      var t=document.createElement("script");
      t.src="http://localhost:3000/javascripts/vendor/requirejs/require.js";
      t.onload=function(){start();};
      $("body").append(t);
    })();

    start = function (){
        //Load main file
        require(['http://localhost:3000/javascripts/app/main.js'],function(app) {
            return app;
        });
    };
    /*Debug Configuration - END */

    /*REMOTE BUILD Configuration - BEGIN */
  /*
    (function(){
      var t=document.createElement("script");
      t.src="http://localhost:3000/javascripts/vendor/requirejs/require.js";
      t.onload=function(){start();};
      $("body").append(t);
    })();

    start = function (){
        //Load main file
        require(['http://localhost:3000/javascripts/app/main-built.js'],function(app) {
            return app;
        });
    };
       */
    /*REMOTE BUILD Configuration - END */

    /*LOCAL BUILD  Configuration - BEGIN */
        /*
        (function(){
          var t=document.createElement("script");
          t.src="javascripts/vendor/requirejs/require.js";
          t.onload=function(){start();};
          $("body").append(t);
        })();

        start = function (){
            //Load main file
            require(['javascripts/app/main-built.js'],function(app) {
                return app;
            });
        };
    */

    /*LOCAL BUILD Configuration - END */
```

==Build your application==
 1. Use `make build-opt` to create your optimized application. The deployable source will be output to 'public/app/main-built.js' folder.
 2. Upload your public/app/main-built.js and maybe some other Data
 3. Change your configuration
 See the [Mimosa](http://mimosajs.com/) project for details on how to customize the solution and use other features.

