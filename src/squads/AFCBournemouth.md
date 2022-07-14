---
layout: squad.njk
title: AFC Bournemouth 2018-2019 Squad
description: AFC Bournemouth 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/bournemouth.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2585779.8862253106!2d-4.0707352!3d50.7352306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95f99d19f249ebd9!2sVitality%20Stadium!5e0!3m2!1sen!2sza!4v1657695527147!5m2!1sen!2sza
data: afcbournemouth
---

<table class="table" style="margin-left:auto;margin-right:auto;margin-top:10%;">
<tr>
<th>Player Name</th><th>Player Position</th><th>Goals Scored</th>
</tr>
{% for player in afcbournemouth %}
<tr>
<td>{{ player.full_name }}</td><td>{{ player.position }}</td><td>{{ player.goals_overall }}
</tr>
{% endfor %}
</table>