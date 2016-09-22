---
layout: post
title:  "Deploy a Website in 60 Seconds"
date:   2016-09-22 12:30:08 -0700
categories: web hosting and deployment
image: /images/timer.jpg
excerpt_separator: <!--more-->
---

PubStorm is the easiest and quickest way to get a website deployed. Here’s proof that you can deploy your first PubStorm site in less than 60 seconds. Use this walkthrough with the accompanying video to start deploying your own sites.
 
<!--more-->
   
   <iframe width="560" height="315" src="https://www.youtube.com/embed/xCDpXgWsuU4" frameborder="0" allowfullscreen></iframe>
 
Let’s start at the Command Line Interface.  If you don’t already have a project ready to deploy, there are some [open source HTML 5 templates](https://www.pubstorm.com/templates) on the site to get you started. 

### Before we begin:
   
We need to do the following simple tasks before we can get your site underway: 

1.  Make sure you have a recent version of [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your machine. 

2.  If this is the first time using Pubstorm, install PubStorm globally on your machine with `$ npm -g pubstorm`.

### Create an account and log in:

1.  There are 2 ways to create a PubStorm account.  Create an account on the website, or simply sign up from the CLI with `storm signup`. You’ll need to enter an email and password, then enter the confirmation code that is sent to your email. 

2.  Once you have a PubStorm account, log in with your email and password with `storm login`.

### Deploy your first PubStorm site:

1.  First make sure sure you are in the project root folder, where your static files are located.

2.  Initialize your pubstorm project with `storm init`
    
3.  Enter your Project Path. If you are in your project root directory, type a dot to indicate your current directory.

4.  Enter your Project Name. This will also be the subdomain of your website unless you have a custom domain.

    ![Project Name and Path](/images/project.name.png)

5.  Now you’ve created your project. When you are ready, it’s time to publish your website with `storm publish`.
   
6.  Wait for it . . . and that’s it, we’ve published the site!

    ![Project Deployment](/images/project.deploy.png)

You can see the [demo site](https://Eventualize.Pubstorm.site) we just deployed.  If you’re looking for more details about [adding your own custom domain](https://help.pubstorm.com/command-reference/storm-domains-add/), that’s free too.

PubStorm is free for your first 10 web sites, and easy to try. If you are looking for a clean, secure, reliable and FREE hosting solution [sign up here today](https://www.pubstorm.com/signup).  