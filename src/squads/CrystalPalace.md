---
layout: squad.njk
title: Crystal Palace 2018-2019 Squad
description: Crystal Palace 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/crystalpalace.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.2764848022684!2d-0.0860576!3d51.3979743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876012de369f8cf%3A0x9587b7222f2816b2!2sSelhurst%20Park%20Stadium%2C%20Holmesdale%20Rd%2C%20London%20SE25%206PU%2C%20UK!5e0!3m2!1sen!2sza!4v1657723553222!5m2!1sen!2sza
data: crystalpalace
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in crystalpalace %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>