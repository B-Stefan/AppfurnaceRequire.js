 define(['require', 'parse'], function(require, Parse) {
  return Parse.Object.extend("Player", {
    initialize: function(attrs, options) {
      this.set("firstName", "John");
      return this.set("lastName", "Dow");
    },
    getFullName: function() {
      return this.get("firstName") + " " + this.get("lastName");
    }
  }, {
    login: function(player) {}
  });
});
