# Description
#   A Hubot script that display the blog.bouzuya.net minutes in bar graph
#
# Configuration:
#   None
#
# Commands:
#   hubot bbn graph [<query>] - display blog.bouzuya.minutes in bar graph
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  request = require 'request-b'

  repeat = (s, n) ->
    [0..n].map(-> '').join s

  lpad = (s, n) ->
    [0..(n - s.toString().length)].map(-> '').join(' ') + s

  print = (post, max) ->
    n = lpad(post.minutes, 3)
    bar = repeat '|', (78 - 'yyyy-mm-dd nnn '.length) * post.minutes / max
    "#{post.date} #{n} #{bar}"

  robot.respond /bbn graph\s*(\S*)\s*$/i, (res) ->
    filter = res.match[1]
    url = 'http://blog.bouzuya.net/posts.json'
    request(url).then (r) ->
      json = JSON.parse r.body
      filtered = json.filter (p) ->
        return true unless filter?
        p.date.match(filter)
      max = filtered.reduce(((c, i) -> Math.max(c, i.minutes)), 0)
      message = filtered
        .map (p) ->
          print p, max
        .join '\n'
      res.send message
