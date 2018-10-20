---
id: pds-planning-meet
title: Meet weekly to discuss successes, failures, and future plans
sidebar_label: Meet weekly to discuss successes, failures, and future plans
---

Once a week, usually on Monday, everyone meets in-person or via video conference. This replaces Monday's daily standup and is an opportunity for the entire team to discuss achievements, hurdles, and concerns with the goal of everyone leaving excited and empowered for the week of work to come.

The advisor runs this meeting.

*   Understand how the team feels about last week's progress and what's to come. Ask each team member from both thoughtbot and the client, "How did you feel about last week? How do you feel coming into this week?" This is less a recap of the completed work (a better place being during [daily standup](/#daily-standups)) and more a pulse of how each person feels. Take notes.
*   Have each member of the team voice any risks or concerns; after everyone has had the opportunity to bring these up, work together as a group to mitigate these concerns. Encourage everyone to voice the same concerns even if they've already been mentioned; it helps prioritize what the team is most concerned about and should spend the most time fixing. This is an opportunity to discuss how to improve the process and product we're building together. Note who had which concerns and track how we'll be addressing these concerns.
*   Celebrate success. Review the work that shipped last week, showing the actual product, and congratulate those who made it happen.
*   After the retro is done, share the notes with the team and ensure anything actionable from the retro is captured. This allows teammates to view progress, understand how feelings on the project change over time, and accomplish anything we set out to do given the outcomes of the retro.

Notes from a retro may look something like this:

> Joel
> 
> *   last week
>     *   felt like it went by extremely fast
>         *   first couple days, thinking through the project, understanding
>         *   didn't feel like we got much implemented in code
>         *   feel great about knowing what we're building
> *   this week
>     *   feeling confident
> 
> Ryan
> 
> *   last week
>     *   fast-paced with understanding, overwhelmed with the complexity
>     *   towards the end of the week with prototyping and iteration, it helped a lot
> *   this week
>     *   feel much better than start of last week
>     *   brainstorming + prototype helps a lot
> 
> Yadid
> 
> *   last week
>     *   flew by, felt like it didn't happen
>     *   progressed a lot
>     *   defining the interaction was really important
>     *   confident moving forward with what we decided upon
> *   this week
>     *   time is worrying
>     *   user study, potentially risky
> 
> Concerns
> 
> *   timeline - it's a tight project (JQ, RC, YA)
> *   concerned with choice of technology with vanilla Rails (JQ, YA)
>     *   lots of state involved
> *   concerns around interaction and not specifically the visual design (RC)
> *   testing (potentially won't change outcome) (YA)
> *   need a staging server (JQ)
>     *   don't want to connect to real API
>     *   in dev+test we've created a fake API that we're connecting to
>     *   can't do that on Heroku
> 
> Addressing concerns
> 
> *   Yadid to set up a staging server for the app to interact with
> *   Ryan to do a quick run-through with Yadid re: interactions
> *   Josh to look into Omar rotating on

The stage of the product should guide the planning meeting. For example:

1.  Research and Validation: Is a user interface flow validated enough to start making a minimal working version?
2.  Product Availability: Can users accomplish the flow with working, deployed software?
3.  User Engagement: What do numbers look like for that flow?

Tell customer stories. Do people love this product? Show numbers. Are more people using the product this week than last? Are the same people using the product more this week than last?

In all stages, we should be asking:

*   Are we building the right product?
*   How much time remains based on the budget?

Based on the answers to these questions, we record our plans in the task management system:

*   Archive the two-week old "Live (Week of \[date\])" list.
*   Review product design priorities. Pull what we estimate to be an appropriate amount for this week into Next Up.
*   Review bugs. Pull any important bugs into Next Up and prioritize them at the top of the queue before everything else. We want to always be fixing what's broken first.
*   Review engineering and refactoring tasks. Pull cards into Next Up based on what the designers and developers believe is appropriate given the previously stated product design and bug tasks.
*   Re-sort the entire Next Up queue according to priority. Cards that were at the top of the list last week may be moved to the bottom or back to other boards or lists.

The task management system is the canonical repository for plans.

When things are only said on the phone, in person, in emails that don't include the whole group, or in one-on-one chats, information gets lost, forgotten, or misinterpreted. The problems expand when someone joins or leaves the project.

During this meeting, seek discussion with, not instruction from, clients. We can't talk about solutions until we identify the underlying problems.

We've been called "aggressive" with our approach cutting features, budgets, and schedules. We say "no" a lot. It's hard to say "no." "No" is usually not well-received. There's a reason someone requested the feature.

We have to battle sometimes in the face of "yes". We do so armed with knowledge of [the history of software success and failure](https://tbot.io/history-of-project-failure): in 2004, only 34% of software projects were considered successes. The good news is that was 100% better than the stats in 1994. "The primary reason is the projects have gotten a lot smaller."

Few software projects fail because they aren't complicated enough. Saying "no" means keeping the software we're building as simple as possible. Every line of code we write is an asset and a liability.

Simple software, once launched, is better suited to meeting the demands of customers. Complex software, if it ever even launches, is not as able to respond to customer demands quickly.
