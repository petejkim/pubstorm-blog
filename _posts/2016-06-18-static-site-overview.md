---
layout: post
title:  "Getting Started with Static Sites"
date:   2016-06-18 14:25:08 -0700
categories: static-sites general
image: https://nitrous-community.s3.amazonaws.com/images/twitter-nitrous-jekyll-2@2x.png
---

Static web content is delivered to the user the same way it’s stored on the server. This means every visitor to your website sees the same content. Static websites are built using HTML, CSS and JavaScript.

Dynamic web apps differ since they have a database and backend that generates and serves different content based on information the client sends the web server. For example, when you sign into Facebook, your newsfeed is dynamically generated based on your friends’ newest content. Since they are more robust, dynamic websites are usually referred to as web _applications_ where static are referred to as web _sites_.  Dynamic web applications are built with popular languages like PHP, Ruby, Python, NodeJS and Java, and include databases like MySQL, PostgreSQL and MongoDB. Of course, dynamic applications still use HTML, CSS and Javascript to render the user interface in the browser.

Static websites offer benefits over their dynamic counterparts for a variety of use cases. Some use cases include:

Your company’s landing pages; e.g., your homepage, about, contact, press pages etc...

* Marketing “microsites” with lead capture forms
* Blogs generated with static site generators like [Jekyll](https://jekyllrb.com/), [Middleman](https://middlemanapp.com/) and [Hugo](https://gohugo.io/)
* Technical documentation sites using doc generators like [MkDocs](http://www.mkdocs.org/)
* “Launchrock” style coming-soon pages with mailing list functionality
* Single page web applications built with front-end javascript frameworks like [Ember](http://emberjs.com/), [React](https://facebook.github.io/react/) and [AngularJS](https://angularjs.org/).

So why use static sites? Let’s take a look at some of the benefits:

## Page speed

In the battle for attention online, [page load speed is king](http://googleresearch.blogspot.com/2009/06/speed-matters.html). The difference between a page that takes 5 seconds to load vs. 1 second can mean unbelievable differences in customer conversion. With 10,000 visitors a month, you could be losing thousands of customers a month due to slow page load times.

Since all URLs return the same content with static sites, it is considerably easier to serve these assets via a [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network). [PubStorm](http://www.pubstorm.com) provides its own CDN in 5 points of presence around the globe. Your site is served up in milliseconds and your customers get what they’re looking for immediately.

## Security

The top 3 Content Management Systems (Wordpress, Drupal & Joomla) [comprise over 30%](http://w3techs.com/technologies/history_overview/content_management/all) of the total websites on the entire internet.

These CMS’s are complex, fragmented pieces of software. Most Wordpress applications utilize 3rd party plugins which can contain exploits that [can open your data to hackers](http://arstechnica.com/security/2015/04/just-released-wordpress-0day-makes-it-easy-to-hijack-millions-of-websites/). Patching Wordpress and Drupal takes regular monitoring and a significant investment of time -- and most businesses simply cannot commit the resources required to ensure their applications are completely secure.

Static web applications have fewer components to exploit, and therefore do not suffer from 99% of the security issues to which dynamic applications like CMS’s often fall victim.

## Stability

Fewer services mean that your site is less likely to go down. And since your static site is being served up via a Content Delivery Network, servers can go down but your site will still be served as long as one of our points of presence is still up. The likelihood that all of our points of presence around the globe would be down simultaneously is extremely low.

So the next time AWS is down in US-East and 20% of the internet is suffering, you can rest assured that your static website will still be served and your customers can still find you.

## Simplicity and Speed to Market

Deploying your project to [PubStorm](http://www.pubstorm.com) is incredibly simple. We host [Nitrous](https://www.nitrous.io) on PubStorm and deploy changes to our landing pages multiple times per day.

Made a mistake or want to revert a deploy? It’s incredibly easy to [Rollback](http://help.pubstorm.com/documentation/publishing-and-rollbacks/) to a previous version of the site.

Or if you’re working on a team, you can add [any number of collaborators](http://help.pubstorm.com/documentation/collaborating-on-a-project/) via the PubStorm CLI to add publish privileges on a per-project basis.


## How do I start building a static site?

Building a static site is incredibly easy. You can create some HTML, CSS, and JavaScript yourself, or you can utilize one of the many popular Static Site Generators like  [Jekyll](https://jekyllrb.com/), [Middleman](https://middlemanapp.com/) and [Hugo](https://gohugo.io/).

* Read the [PubStorm Help Documentation](http://help.pubstorm.com/)
* [Create a “Coming Soon” landing page with mailing list signup](http://help.pubstorm.com/tutorials/launch-page-tutorial/)

You can quickly spin up a Jekyll development environment and start building with this Nitrous Quickstart:

<div class="repo" style="margin:12px 0 36px !important;position:relative !important;padding:20px !important;background:#fff !important;border:1px solid #ddd;border-radius:4px;box-sizing: border-box;">
  <div class="qs-meta" style="clear:all;padding: 0 !important;">
    <div class="meta-left" style="float: left;width:64px;">
      <img src="https://nitrous-image-icons-update.s3.amazonaws.com/jekyll.png" style="width:60px;height:60px;"/>
    </div>
    <div class="meta-right" style="margin: 0 0 0 72px !important;">
      <h3 style="margin:2px 0 0 0 !important;font-size:20px;line-height:22px;font-weight:600;display:inline-block;padding:0;vertical-align:top;">
        <a href="https://github.com/nitrous-io/jekyll" style="display:block;color:#0099ed;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Jekyll</a>
      </h3>
      <p class="who" style="margin:3px 0 5px 0 !important;color:#393c44;font-size:16px;line-height:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Jekyll</p>
    </div>
  </div>
  <p class="description" style="clear:both !important;padding:10px 0;color:#8696a0;font-size:16px;line-height:28px;overflow:hidden;margin: 0 0 8px !important;">A blog-aware, static site generator written in Ruby.</p>
  <a class="button" href="https://www.nitrous.io/quickstart?repo=https%3A%2F%2Fgithub.com%2Fnitrous-io%2Fjekyll" style="text-decoration:none !important;display:inline-block;padding:10px 20px;color:#fff !important;font-size:14px;line-height:20px;font-weight:600;background:#0099ed !important;border-radius: 4px !important;">
    Nitrous Quickstart
  </a>
</div>
