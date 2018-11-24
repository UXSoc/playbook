---
id: css-basics
title: CSS Basics
sidebar_label: CSS Basics
---
'CSS' stands for Cascading Style Sheets and like HTML it is not a programming language either. Style Sheets just means that it controls the appearance of the website. It is called Cascading because elements can have many styles applied to them and priority determines which one truly styles the element.

### How to write

Start by writing the selector the of the element, in this case 'p' and then the style that should associated with it in curly brackets:
```
p {
    color: #008ED4;
}
```
Each style should be on a new line and end with a semi-colon.

#### Selectors

There are three main types of selectors
- `div`, `p`, `a` - Tag selectors which are based off the name of the HTML tag in the HTML document. It isn't recommend to use these because they change the style for all of the same element.
- `#my-div`, `#title-text`, `#first-link` - ID based selectors starting with `#`, which are also not recommended to be used because they are not reusable.
- `.big-div`, `bold-text`, `primary-link` - Class based selector, which apply to any element with the class. Elements can have many classes and classes can be reused between elements so this is the best to use!

#### How classes work

In *index.html* file where the HTML is:
```$xslt
<p class="blue-text">I am blue 😔 </p>
<p class="">I'm not 🙃</p> 
``` 

And in *style.css* file where CSS is:
```$xslt
.blue-text {    /* Don't forget the dot (.) */ 
    color: #008ED4;
}
```
Will cause only the first text to be styled, like this:
<!-- Rendered HTML block to show off CSS -->
<style>
    .blue-text {    /* Don't forget the dot (.) */ 
        color: #008ED4;
}
</style>
<p class="blue-text">I am blue 😔 </p>
<p class="">I'm not 🙃</p> 

#### Great resources to start learning more about CSS:
- [Mozilla Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Google](https://www.google.com/search?q=css&) there are a huge number of css styles possible, just search. 
- [CSS Tricks](https://css-tricks.com/) for some cool CSS.

![](/img/waterfall.jpg)

#### Like a waterfall, CSS determines an element's style from priority.  