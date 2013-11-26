
/**
 * Some configs for require.js
 *
 * **/
requirejs.config({
    baseUrl : "http://localhost:3000/javascripts/app/",
    paths: {
        'text': '../vendor/requirejs-text/text',
        'parse': '../vendor/parse/parse-1.2.12'
    },
    shim: {
      'parse': {
          exports: "Parse",
          init: function(){
              //Get your Application ID and JavaScript key from https://parse.com/apps/quickstart
              Parse.initialize("YOURCODE", "YOURCODE");
          }
      }
    }
});

/**
 * @module main
 * @desc called by appfurnace to start the application. Do some init stuff
 */
define(['require', 'classes/Player'], function(require,Player) {
    p1 = new Player();
    popup(p1.getFullName(), "Player");
});