---
layout: squad.njk
title: Chelsea 2018-2019 Squad
description: Chelsea 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/chelsea.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39755.51186267343!2d-0.190956!3d51.481663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48aa38781ea565f8!2sStamford%20Bridge!5e0!3m2!1sen!2sza!4v1657780959587!5m2!1sen!2sza
data: chelsea
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in chelsea %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>