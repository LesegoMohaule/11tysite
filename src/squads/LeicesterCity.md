---
layout: squad.njk
title: Leicester City 2018-2019 Squad
description: Leicester City 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/leicestercity.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9688.769811865703!2d-1.1421895!3d52.6203662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd89e0170e2399aa!2sKing%20Power%20Stadium!5e0!3m2!1sen!2sza!4v1657775118224!5m2!1sen!2sza
data: leicestercity
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in leicestercity %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>