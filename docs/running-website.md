---
id: running-website
title: Running A Website 
sidebar_label: Run A Website
---
HTML, CSS, and JavaScript are universal because all web browsers render them, but the way to distribute these documents to the user has a lot of different ways. This is called a 'server' because it servers up documents like a waiter servers up food. 

![](/img/server.jpg)
#### "I'll take the index.html, style.css and style.js on the side, please."

#### Language
There are a lot of languages available for servers, with popular ones being [PHP](http://www.php.net/), [Java](https://spring.io/), and [Ruby](https://rubyonrails.org/).
Languages will many different pros/cons so consider:
- Speed: some languages are compiled with generally makes them faster. Languages can also be dedicated to a certain task and be faster as a result.
- Accessibility: How easy is a language to write? How easy is it to start writing in? As a developer making your life easier is important so a project is maintainable and something people want to use in the future.
- Ecosystem: Most languages have a package manager which heavily reduces the workload of a developer. These packages are bundled software like a library that you can incorporate into your code. Languages with many well developed packages are best.

### Node.js
Javascript is the recommenced server language, but how is that possible if it used in browser? That is where [Node.js](https://nodejs.org/en/about/) comes in, it allows you to run JavaScript directly in your computer. Here is why it is recommended (in order of benefit):
- Accessible: Because JavaScript is also used in browser a developer only needs to learn one programming language. It is also available cross-platform and is easy to set-up.
- Fast: Node.js uses the same JavaScript engine as in Chrome, which is heavily optimized by Google.
- Mature: It has plenty of great packages which you can check out at [npmjs.com](https://www.npmjs.com/)

See [Mozilla's tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) for a great dive into Node.js.  