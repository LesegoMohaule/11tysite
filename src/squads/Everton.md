---
layout: squad.njk
title: Everton 2018-2019 Squad
description: Everton 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/everton.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9506.640054969035!2d-2.9663193!3d53.438787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3778ada7c9847359!2sGoodison%20Park!5e0!3m2!1sen!2sza!4v1657724399695!5m2!1sen!2sza
data: everton
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in everton %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>