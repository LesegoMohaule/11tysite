---
layout: squad.njk
title: Newcastle 2018-2019 Squad
description: Newcastle 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/newcastle.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9159.439604226209!2d-1.621667!3d54.975556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e911404fa537b88!2sSt.%20James%20Park!5e0!3m2!1sen!2sza!4v1657780207294!5m2!1sen!2sza
data: newcastle
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in newcastle %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>