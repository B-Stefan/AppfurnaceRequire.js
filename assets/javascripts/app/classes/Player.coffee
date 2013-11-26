define ['require', 'parse'],
(require, Parse)->

  #@desc  A complex subclass of Parse.Object
  #@class Player
  Parse.Object.extend("Player",
    #@constructor
    initialize: (attrs, options) ->
      @set "firstName", "John"
      @set "lastName", "Dow"

    #@method
    #@public
    getFullName: ->
      @get("firstName") + " " + @get("lastName")


  ,
  ##Static Methods: ###

    #@static
    #@method
    login: (player) ->
      #Do something with the player
  )