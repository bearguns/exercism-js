var Gigasecond = function(date) {
  this.start = date;
  this.date = function() {
    var d = new Date(this.start);
    return new Date(d.setUTCSeconds(d.getUTCSeconds() + 1000000000));
  }
};

module.exports = Gigasecond;
