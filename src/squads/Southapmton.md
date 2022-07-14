---
layout: squad.njk
title: Southampton 2018-2019 Squad
description: Southampton 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/southampton.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10063.865235898878!2d-1.3909515!3d50.9058395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c60fdf6c8f2e919!2sSaint%20Marys%20Stadium!5e0!3m2!1sen!2sza!4v1657777249908!5m2!1sen!2sza
data: southampton
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in southampton %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>