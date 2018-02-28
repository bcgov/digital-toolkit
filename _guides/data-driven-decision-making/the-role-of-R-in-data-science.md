---
title: The Role of R in Data Science
guide: Data-Driven Decision Making
---

[R](https://www.r-project.org/about.html) won't help you formulate your hypothesis or collect your data, but in the subsequent steps R is a great tool. Having been designed initially to facilitate exploratory data analysis and statistical modeling (i.e. statistics), packages have subsequently been created that provide the tools to quickly and efficiently undertake data carpentry and data visualization.

As Roger D. Peng has put it, "The R programming language has become the de facto programming language for data science." (From the book "jacket blurb" for [_R Programming for Data Science_](https://leanpub.com/rprogramming).)

<!-- TOC -->

- [1. Defining the research question](#1-defining-the-research-question)
- [2. Collecting data](#2-collecting-data)
- [3. Data carpentry](#3-data-carpentry)
- [4. Exploratory data analysis[](#4-exploratory-data-analysis)](#4-exploratory-data-analysis4-exploratory-data-analysis)
- [5. Data modeling](#5-data-modeling)
- [6. Communication](#6-communication)
- [7. Data visualization](#7-data-visualization)

<!-- /TOC -->

Let's look at each of the five components separately:

### 1. Defining the research question

Too often overlooked!

### 2. Collecting data

- Three sources:
- Pre-packaged
- Administrative or business data
- Original (e.g. survey)

Pre-packaged data: whether in the text book or from open data source (Statistics Canada, Data BC)

### 3. Data carpentry

> Raw data is rarely usable for analysis without significant work. (Peter Mimno, ["Data carpentry"](http://www.mimno.org/articles/carpentry/))

Sometimes called "data hacking", "data wrangling", or "data munging", a better term is "data carpentry". Peter Mimno rightly points out that the other terms either mischaracterize the nature of the work, or are essentially meaningless. He continues:

> the process is more like deciding how to cut into a piece of material, or how much to plane down a surface. It’s not that there’s any real distinction between good and bad, it’s more that some parts are softer or knottier than others. Judgement is critical.

The other key point is that data are often messy. [The Quartz guide to bad data](https://github.com/Quartz/bad-data-guide) provides a rather comprehensive list of all the problems you might encounter on your road to the analysis.

There's a whole sub-topic on tidy vs. non-tidy (different than untidy!) data (see for instance Roger Peng's [blog entry of 2016-02-17](http://simplystatistics.org/2016/02/17/non-tidy-data/). That's a tangent for another day.

R is very good for pulling your data from other sources. There's a wealth of tools for querying SQL databases, importing Excel files (e.g. `readr`).

There are also many tools available for effectively working with dates (date formatting is a favourite pet peeve of mine).

And finally, data carpentry is facilitated with packages such as `dplyr`, which contain straight-forward verb-based syntax (such as `filter`, `group_by` and `summarise`) to create permutations of your existing data.

I can't say enough good things about `dplyr`. It has become my go-to tool for things I used to do in other software, including completely replacing my use of pivot tables in Excel. And it addressess many of the criticisms that "R is slow"--for one of the

### 4. Exploratory data analysis[](#4-exploratory-data-analysis)

The ideas of "exploratory data analysis" (EDA) was first presented by Tukey, and he presented a set of tools for EDA in his seminal book (1977). In the book he writes:

> Exploratory data analysis is detective work--numerical detective work--or counting detective work--or graphical detective work. ...the analyst of data needs both tools and understanding." (p.1)

Tukey also emphasizes the importance of data visualization in exploring data; the book is the source of the quote:

> ... pictures based on exploration of data should _force_ their messages upon us. Pictures that emphasize what we already know--"security blankets" to reassure us--are frequently not worth the space they take. Pictures that have to be gone over with a reading glass to see the main point are wasteful of time and inadequate of effect. **The greatest value of a picture-* is when it _forces_ us to notice **what we never expected to see.*- (p.vi) _\[emphasis in original\]_

Plenty has been written about using R as a tool for exploratory data analysis; Roger Peng's leanpub book _Exploratory Data Analysis with R_ is a great place to start. Other resources include Eric Cai's [Chemical Statistician blog series](https://chemicalstatistician.wordpress.com/tag/exploratory-data-analysis/).

### 5. Data modeling

Advanced statistical methods

Where computing power has really changed the game; expanded possibilities of techniques such as K-NN and Monte Carlo

(add machine learning, K-NN etc)

### 6. Communication

Shiny!

Link to data journalism -- Jonathan Stray, Alberto Cairo

### 7. Data visualization

An important component of understanding your data at the EDA and modeling stages (#4 and 5), and in how the data's meaning is communicated

And as the dataviz and web display packages improve (e.g. the recent release of `ggplot2` v.2 was a big leap forward; yes it broke some of my code but the additional functionality is worth the trouble) R will only get better.

Another sidebar: ggplot2 2.0.0 was released on 2016-01-01. Since then there have been enough additions to warrant a 2.1.0 release; and meanwhile there are new extensions being added in the development version (e.g. [sub-title functionality by Bob Rudis](http://rud.is/b/2016/03/12/ggplot2%E3%81%A7%E5%AD%97%E5%B9%95-subtitles-in-ggplot2/?utm_content=buffer42831&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer).)

Data visualization is also an important component of the last stage of the data science process: communication.
