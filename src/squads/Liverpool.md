---
layout: squad.njk
title: Liverpool 2018-2019 Squad
description: Liverpool 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/liverpool.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9508.420322301805!2d-2.96083!3d53.4308294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84576a57e21973ff!2sAnfield!5e0!3m2!1sen!2sza!4v1657775353379!5m2!1sen!2sza
data: liverpool
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in liverpool %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>