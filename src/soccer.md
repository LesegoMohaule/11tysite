---
title: Soccer teams
layout: base.njk
pagination:
  data: teams.clubs
  size: 4
---

# {{ title }}  

<table class="table table-bordered table-striped" style="margin-left:auto;margin-right:auto;">
<tbody>
<tr>
{% for item in pagination.items %}
  <td>
  <img src="{{item.img}}" alt="{{item.name}}" width="200" height = "300"/>
  </td>
    {% endfor %}
  </tr>
  <tr>
  {% for item in pagination.items %}
  <td>
  
  {{ item.name }}

  </td>
  {% endfor %}
  </tr>

  

  
  
  
  


</tbody>
</table>

<!-- {% if pagination.href.previous %}<a href= "{{pagination.href.previous}}">Previous Page </a>{% endif %} {% if pagination.href.next %}<a href= "{{pagination.href.next}}">Next Page</a>{% endif %} -->

<nav class="paging">
  <ul style="list-style: none;">
  <li>{% if page.url != pagination.href.first %}<a href="{{ pagination.href.first }}">1</a>{% else %}1{% endif %}</li>
    <li>{% if pagination.href.previous %}<a href="{{ pagination.href.previous }}"class="left arrow">&#8678;Prev</a>{% endif %}</li>
<!-- {%- for pageEntry in pagination.pages %}
    <li><a href="{{ pagination.hrefs[ loop.index0 ] }}"{% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page"{% endif %}>Page {{ loop.index }}</a></li>
{%- endfor %} -->
    <li>{% if pagination.href.next %}<a href="{{ pagination.href.next }}"class="right arrow">Next&#8680;</a>{% endif %}</li>
    <li>{% if page.url != pagination.href.last %}<a href="{{ pagination.href.last }}">{{pagination.links.length}}</a>{% else %}{{pagination.links.length}}{% endif %}</li>
  </ul>
</nav>