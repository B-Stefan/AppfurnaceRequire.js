
/**
 * Some configs for require.js
 *
 * **/
requirejs.config({
    baseUrl : "http://localhost:3000/javascripts/app/",
    paths: {
        'text': '../vendor/requirejs-text/text',
        'jquery':'../vendor/jquery/jquery',
        'parse': '../vendor/parse/parse-1.2.12',
        'pusher': '../vendor/pusher/2.1-pusher.min'
    },
    shim: {
      'parse': {
        exports: "Parse",
        init: function(){
            //Get your Application ID and JavaScript key from https://parse.com/apps/quickstart
            Parse.initialize("YOURCODE", "YOURCODE");
        }
      },
      'pusher': {
        exports: 'Pusher'
        }
    }
});

/**
 * @module main
 * @desc called by appfurnace to start the application. Do some init stuff
 */
define(['require', 'classes/Player', 'classes/RealTimeCommunicationChannel'], function(require,Player, RealTimeCommunicationChannel) {
    //Class example
    p1 = new Player();
    popup(p1.getFullName(), "Player");

    //Realtime communication with pusher.com

    realTimeChannel = new RealTimeCommunicationChannel('presence-my-channel')

    //IMPORTANT: You can only trigger client events after the Subscription successful established
    realTimeChannel.channelSubscription.done(function(){
        //Trigger some custom client events
    })

    //Simple, local override the 'memberAdd' function
    /**
    realTimeChannel.memberAdd = function(){
        //Do some popup stuff
    }
    */
});