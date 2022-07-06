---
title: 2018 - 2019 EPL teams
layout: base.njk
pagination:
  data: teams
  size: 3
---

# {{ title }}  

<table class="table" style="margin-left:auto;margin-right:auto;">
<tbody >
<tr>
{% for item in pagination.items %}
  <td>
  <a href="/GoalStats?name={{ item.name }}|{{ item.img }}">
  <img src="{{item.img}}" alt="{{item.name}}" width="200" height = "300"/>
  </a>
  </td>
    {% endfor %}
  </tr>
  <tr>
  {% for item in pagination.items %}
  <td>
  <a href="/GoalStats?name={{ item.name }}|{{ item.img }}">{{ item.name }}</a>
  <!-- <a href="/{{ item.name }}_teamstats?name={{ item.name }}">{{ item.name }}</a> -->
 
  </td>
  {% endfor %}
  </tr>
</tbody>
</table>

<!-- {% if pagination.href.previous %}<a href= "{{pagination.href.previous}}">Previous Page </a>{% endif %} {% if pagination.href.next %}<a href= "{{pagination.href.next}}">Next Page</a>{% endif %} -->

<div class="paging d-flex justify-content-center" id = "paging" >
  <ul class="list-group list-group-horizontal" style="list-style: none">
  <li class="list-group-item">{% if page.url != pagination.href.first %}<a class="nav-link" href="{{ pagination.href.first }}">1</a>{% else %}1{% endif %}</li>
    <li class="list-group-item">{% if pagination.href.previous %}<a class="nav-link" href="{{ pagination.href.previous }}"class="left arrow">&#8678;Prev</a>{% endif %}</li>
<!-- {%- for pageEntry in pagination.pages %}
    <li><a href="{{ pagination.hrefs[ loop.index0 ] }}"{% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page"{% endif %}>Page {{ loop.index }}</a></li>
{%- endfor %} -->
    <li class="list-group-item">{% if pagination.href.next %}<a class="nav-link" href="{{ pagination.href.next }}"class="right arrow">Next&#8680;</a>{% endif %}</li>
    <li class="list-group-item">{% if page.url != pagination.href.last %}<a class="nav-link" href="{{ pagination.href.last }}">{{pagination.links.length}}</a>{% else %}{{pagination.links.length}}{% endif %}</li>
  </ul>
</div>
