---
layout: squad.njk
title: Watford 2018-2019 Squad
description: Watford 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/watford.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9902.173315857104!2d-0.4015015!3d51.6498879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9781a1803f93563!2sVicarage%20Road%20Stadium!5e0!3m2!1sen!2sza!4v1657777620928!5m2!1sen!2sza
data: watford
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in watford %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>