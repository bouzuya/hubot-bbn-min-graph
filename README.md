# hubot-bbn-min-graph

A Hubot script that display the blog.bouzuya.net minutes in bar graph

## Installation

    $ npm install https://github.com/bouzuya/hubot-bbn-min-graph/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-bbn-min-graph/archive/{VERSION}.tar.gz

## Example

    bouzuya> hubot bbn graph
      hubot> 2014-11-01  40 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
             2014-11-02  20 |||||||||||||||||||||||||||||||
             2014-11-03  15 |||||||||||||||||||||||
             2014-11-04  15 |||||||||||||||||||||||
             2014-11-05   5 |||||||
             2014-11-06   5 |||||||
             2014-11-07   5 |||||||
             2014-11-08  40 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
             2014-11-09   3 ||||


## Configuration

See [`src/scripts/bbn-min-graph.coffee`](src/scripts/bbn-min-graph.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-bbn-min-graph
[travis-badge]: https://travis-ci.org/bouzuya/hubot-bbn-min-graph.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-bbn-min-graph
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-bbn-min-graph.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-bbn-min-graph
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-bbn-min-graph.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
