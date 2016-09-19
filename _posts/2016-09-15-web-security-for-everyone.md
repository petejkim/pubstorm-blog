---
layout: post
title:  "Security: How important is it to Separate Front and Back End for Web Development?"
date:   2016-09-15 12:30:08 -0700
categories: web security
image: /images/security.png
---

It’s a grim scene when it comes to online security. Almost on a weekly basis, we hear about massive data breaches where hundreds of millions of consumer records are exposed. News items like the [Panama Papers](http://www.forbes.com/sites/thomasbrewster/2016/04/05/panama-papers-amazon-encryption-epic-leak/#666ce9411df5) and the now-classic [Target Data Breach](http://www.forbes.com/sites/paularosenblum/2014/01/17/the-target-data-breach-is-becoming-a-nightmare/#e0e9eaf4b29b) make developers and consumers alike want to bury their personal information in a deep pit for a few decades. 
 
Based on these reports, most front end developers who are not working for finance or multibillion dollar e-commerce sites might think that security is only an issue for big banks and retailers. Unfortunately, this is patently not true! Hundreds of thousands of individual web developers deploy vulnerable sites every day, and have no idea they’re doing so.  A [report from the US Small Business Administration](https://www.sbir.gov/tutorials/cyber-security/tutorial-1) notes that in the last five years there has been a steady increase in attacks targeting businesses with less than 250 employees, with 43 percent of all attacks targeted at small businesses in 2015. 

The good news is, deploying secure web sites has never been easier.  Here’s a few things to keep in mind when building your site for the best security.

1.  **Beware Wordpress and Drupal vulnerabilities.**  
   
    As mentioned before, the [Panama Papers breach](http://www.forbes.com/sites/thomasbrewster/2016/04/05/panama-papers-amazon-encryption-epic-leak/#27a9457d1df5) was the largest data leak in history, with 2.6 terabytes of data, 11.5 million documents, and more than 214,000 shell companies exposed. The report identified outdated WordPress and Drupal installations as security holes that may have led to the breach. Dynamic CSS platforms often lack patches and include unsecured third party apps, both of which make sites vulnerable. 

2.  **Make sure the web server is secure.**  
 
    If a server is vulnerable, so are all the websites it hosts. Static servers are much more likely to be secure. Unlike dynamic CSS platforms such as WordPress and Drupal, static servers only serve static assets which are not vulnerable to common exploits like cross site scripting and sql injection.

3.  **Stay up to date.**  

    If you choose to run on a dynamic platform you must patch the software. Over the past three years, more than three quarters of websites scanned contained unpatched vulnerabilities, one in seven [(15 percent)](http://www.pcworld.com/article/3092859/security/you-have-a-website-you-have-cybersecurity-risk.html) of which were deemed critical. You can also eliminate the patching risk if you choose to run on a static web server. Because when deploying sites, do you really want to keep patching for potentially years after you’ve launched?

4.  **Be proactive around SSL/TLS implementation.**  

    Secure Sockets Layer and Transport Layer Security (SSL/TLS) are open source protocols behind the most popular implementations. Adopting the SSL protocol establishes credibility with your users, and more importantly protects your users with a secure connection for their transactions.

5.  **Try to spot threats ahead of time.**  

    Knowing that your site is more than likely going to face an attack someday,automation tools can help you identify vulnerabilities in advance. Source code analysis tools are designed to analyze source code and/or compiled version of code in order to help find security flaws. Automation tools that can continually monitor your site for signs of vulnerability, block attacks, and, if you choose to build a dynamic site patch accordingly. There are dozens of [free source code analysis tools](https://www.owasp.org/index.php/Source_Code_Analysis_Tools) available online.

Static site hosting and free SSL Certificates baked into projects give front end developers huge security advances over dynamic sites with expensive SSL options. Free and easy-to-implement SSL helps make sites more secure because if certs can be attached in a few keystrokes to your custom domains, you are saving yourself from potentially years of headaches (and maybe lawsuits!) over not securing your sites for your users. If it’s free in addition to easy to secure your static sites, it’s pretty dumb to not implement SSL. 

Every site you deploy comes with SSL baked in, and if you’re rolling with a custom domain, you can attach Let’s Encrypt SSL certs in seconds. Best of all, you can [get started for free](https://www.pubstorm.com/signup), and after your first 10 sites, every additional site deployed is only 5 dollars a month.
