---
id: pds-planning-manage
title: Manage priorities and visualize progress with a lightweight process
sidebar_label: Manage priorities and visualize progress with a lightweight process
---

We have used JIRA, Pivotal Tracker, Lighthouse, Basecamp, Trajectory, Unfuddle, and other task management systems over the years. The following section details a process using Trello but the overall process remains relatively similar across different systems.

No two products are the same, so flexibility in the product development process is important. Trello responds well to changing the structure of the process "on the fly."

A Trello board is a software equivalent of a physical wall with columns of sticky notes. In Trello terminology, the wall is called a "board." The columns are called "lists." The sticky notes in columns are called "cards."

In the following image, "Current" is an example of a project board. "In Progress" is an example of a list. "Confirm Internet Explorer support" is an example of a card.

![Next Up Trello board](../images/next-up-trello_small.jpg)

In any task management system, it's important to have a view into the product development process like this. The **Next Up** list is the single prioritized list to which the product team refers in order to know what to work on next. It represents one week of work.

A card represents a story, bug fix, engineering task, or general todo.

Cards start out as a simple idea, 1-2 sentences long. As they are pulled through boards, detail is added, explaining why (from a business perspective) we're focusing on it, and maybe notes on suggested implementation (though designers and developers may take or leave it at their discretion; it's supposed to be helpful, not prescriptive).

![Live Trello board](../images/live-trello_small.jpg)

Once the cards in the **Next Up** list have been prioritized and vetted, they are ready for design and development. A designer or developer "puts their face on it" by assigning it to themselves and pulling it into the **In Progress** list.

The cards in the **In Progress** list are actively being designed or developed. Etiquette is that you should never have your face on more than two cards at a time. Work is done in a [feature branch](https://github.com/thoughtbot/guides/tree/master/protocol).

When a designer or developer creates a pull request for their feature branch, they move the card to the **Code Review** list. Any reviewers "put their face on it" while reviewing.

There is no bottleneck for merging into master: everyone can do it.

The cards in the **Testing on Staging** (or **Testing on Ad Hoc** build for iPhone apps) list are deployed to staging (or distributed via [TestFlight](https://developer.apple.com/testflight/) for iPhone apps).

The card creator and a designer review it for accuracy and user experience.

There is no bottleneck for deploying to staging: everyone can do it.

The cards in the **Ready for Production** list include cards that have been accepted on staging and are ready to be deployed (but not necessarily rolled out).

There is no bottleneck for releasing to production: everyone can do it.

The cards in the **Live (Week of \[date\])** lists have been released. Each week has its own Live list so we can follow what got released when.
