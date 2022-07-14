---
layout: squad.njk
title: Manchester City 2018-2019 Squad
description: Manchester City 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/manchestercity.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9496.714507355964!2d-2.2003953!3d53.4831381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x549a8dcce67a876a!2sEtihad%20Stadium!5e0!3m2!1sen!2sza!4v1657775578608!5m2!1sen!2sza
data: manchestercity
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in manchestercity %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>