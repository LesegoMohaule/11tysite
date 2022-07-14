---
layout: squad.njk
title: West Ham 2018-2019 Squad
description: West Ham 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/westham.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9926.440690582334!2d-0.0166037!3d51.5387095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7fca44605b6ce94!2sLondon%20Stadium!5e0!3m2!1sen!2sza!4v1657777751985!5m2!1sen!2sza
data: westham
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in westham %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>