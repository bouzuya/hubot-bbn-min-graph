// Description
//   A Hubot script that display the blog.bouzuya.net minutes in bar graph
//
// Configuration:
//   None
//
// Commands:
//   hubot bbn graph [<query>] - display blog.bouzuya.minutes in bar graph
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var lpad, print, repeat, request;
  request = require('request-b');
  repeat = function(s, n) {
    var _i, _results;
    return (function() {
      _results = [];
      for (var _i = 0; 0 <= n ? _i <= n : _i >= n; 0 <= n ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function() {
      return '';
    }).join(s);
  };
  lpad = function(s, n) {
    var _i, _ref, _results;
    return (function() {
      _results = [];
      for (var _i = 0, _ref = n - s.toString().length; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function() {
      return '';
    }).join(' ') + s;
  };
  print = function(post, max) {
    var bar, n;
    n = lpad(post.minutes, 3);
    bar = repeat('|', (78 - 'yyyy-mm-dd nnn '.length) * post.minutes / max);
    return "" + post.date + " " + n + " " + bar;
  };
  return robot.respond(/bbn graph\s*(\S*)\s*$/i, function(res) {
    var filter, url;
    filter = res.match[1];
    url = 'http://blog.bouzuya.net/posts.json';
    return request(url).then(function(r) {
      var filtered, json, max, message;
      json = JSON.parse(r.body);
      filtered = json.filter(function(p) {
        if (filter == null) {
          return true;
        }
        return p.date.match(filter);
      });
      max = filtered.reduce((function(c, i) {
        return Math.max(c, i.minutes);
      }), 0);
      message = filtered.map(function(p) {
        return print(p, max);
      }).join('\n');
      return res.send(message);
    });
  });
};
