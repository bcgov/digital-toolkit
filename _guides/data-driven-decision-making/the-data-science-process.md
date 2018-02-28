---
title: The Data Science Process
guide: Data-Driven Decision Making
---

So what does it take to make sense of all of this data? To collect it, shape it, analyze it, and draw from it intelligence and knowledge?

"Data scientist" is a term increasingly used to describe an individual with a range of skills necessary to make this happen. But what do data scientists _do_?

It turns out that Tukey was prescient. "Data science" as currently understood is a process that is essentially what he'd described over 50 years ago. My own thinking about this is:

1. Defining the research question
1. Collecting data
1. Data carpentry (a.k.a. tidying, munging, hacking)
1. Exploratory data analysis
1. Data modeling
1. Communication

A common element to #4-6 is a seventh piece: Data visualization

Grolemund & Wickham's forthcoming book [_R for Data Science_](http://r4ds.had.co.nz/do-science-with-data.html) has the following diagram:

![A data science project](http://r4ds.had.co.nz/diagrams/data-science.png)

While this diagram is a good place to start thinking about how to approach the data science, it has some shortcomings. They have a) skipped the important first step of collecting data (it has to come from somewhere), b) assumed that the "Understanding" phase won't send you back to the "Tidy" step, and c) looped the "Understanding" phase. I would also argue that visualization is an important tool that applies to exploring, modeling, and communicating...it's not constrained to the "Understanding" phase.

_Note: Statistics, as in the academic discipline, is one of the subject areas that a data scientist absolutely **needs** to know. Knowledge of robust statistical methods supports accurate and informed EDA and modeling. These techniques and tools applied in these two phases of the data science process **are** statistics, and a good practitioner of data science will benefit from advances in statistics. Contrary to some writers you may encounter, I don't believe that it is a "versus" thing, or that one is better than the other. Statistics makes good data science, and data science is one place that someone trained in statistics can become a practioner._
