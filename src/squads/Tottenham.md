---
layout: squad.njk
title: Tottenham Hotspur 2018-2019 Squad
description: Tottenham Hotspur 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/tottenham.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9912.1432935163!2d-0.0662152!3d51.6042322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x572dd66a0e5f79bf!2sTottenham%20Hotspur%20Stadium!5e0!3m2!1sen!2sza!4v1657777454854!5m2!1sen!2sza
data: tottenham
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in tottenham %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>