---
layout: squad.njk
title: Manchester United 2018-2019 Squad
description: Manchester United 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/manunited.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9501.208834126772!2d-2.2913401!3d53.4630589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c930e96df4455fe!2sOld%20Trafford!5e0!3m2!1sen!2sza!4v1657775760009!5m2!1sen!2sza
data: manchesterunited
---



<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in manchesterunited %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>