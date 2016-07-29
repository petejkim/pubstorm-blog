---
layout: post
title:  "Page load times and web development platforms"
date:   2016-07-08 8:25:03 -0700
categories: static-sites speed performance
---

An important - and sometimes overlooked - consideration when developing web pages, is how fast they will load. Today, more and more material is being included on pages. In fact, according to software engineer Ronan Cremin in this [Wired Magazine article](http://www.wired.com/2016/04/average-webpage-now-size-original-doom/), ‘today the average webpage is about the same size, data-wise, as the classic computer game Doom. A compressed copy of the installer for the shareware version of Doom takes up about 2.39MB of space. Today’s average webpage, meanwhile, requires users to download about 2.3MB worth of data.”

Meanwhile, consumers are impatient creatures, and even the slightest delay in page load time can drive a visitor to another site. [According to KissMetrics](https://blog.kissmetrics.com/loading-time/),

* 47% of consumers expect a web page to load in 2 seconds or less.
* 40% of people abandon a website that takes more than 3 seconds to load.

This impatience adds up. [According to Aberdeen Group](http://www.aberdeen.com/research/5136/ra-performance-web-application/content.aspx), a 1-second delay in page load time yields:

* 11% fewer page views
* 16% decrease in customer satisfaction
* 7% loss in conversions

Combine it all together, and if an e-commerce site is making $100,000 per day, a 1 second page delay could potentially cost $2.5 million in lost sales every year. Your site may not be generating $100,000 per day, but money is money. How much are you losing?

So what are some ways to optimize all of the content so that the page can load quickly?

1. **Pare down the content** – What do you really need on the page? Are designers including extra assets that don’t serve an actual purpose towards conversion?
2. **Lead with the most important message** - On Marketing pages, give people the “what’s up” really quickly. Get the main message in front of the visitor and then load the supporting messages and assets.
3. **Use a CDN** - If you are serving a big page and not using a Content Delivery Network like [PubStorm](https://www.pubstorm.com), you are missing out. Hosting your website  files on a CDN is one of the best ways to speed up your site, because they host files across a large network of globally distributed servers. Thus, users download files from servers closest to them, minimizing load times. By having your site hosted on PubStorm, you automatically get to leverage our robust CDN.
4. **Optimize your CSS** - Javascript and Cascading Style Sheets are opportunities for performance improvement through asset optimization. These files can be compressed file 25% or more by removing unnecessary characters. The reduced file size means a faster site. With PubStorm the asset optimization is automatic. One more thing you don’t have to worry about.
5. **Watch your plug-ins** - Minimize the amount of libraries like jQuery, or individual stand-alone JS plugins you use. These plugins and frameworks come bloated with extra options and features, and waste processing power.
6. **Order the page** - Remember that the browser renders whatever is at the top of a page’s source code first. So place JavaScript files, which can slow things down by stopping the browser from rendering your HTML until they’re loaded, down at the bottom.
7. **Optimize images** – The larger the image, the longer it takes to load, so it’s important that you keep your images as small as possible. It may seem easier to just set a width parameter rather than crop the image to the size you need, but this laziness adds extra load time.
8. **Use tools** - Google’s [PageSpeed Tools](https://developers.google.com/speed/pagespeed/) is a good resource to identify ways to make your site faster and more mobile-friendly.

If you have your own tricks or tools for minimizing page load speed, share them with the [PubStorm](https://www.pubstorm.com) community below in the comments section.
