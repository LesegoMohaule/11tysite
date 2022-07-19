---
layout: squad.njk
title: AFC Bournemouth 2018-2019 Squad
description: AFC Bournemouth 2018-2019 squad and stadium
date: 2022-07-13
TeamLogo: /_data/images/EPL/bournemouth.png
StadiumLocation: https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2585779.8862253106!2d-4.0707352!3d50.7352306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95f99d19f249ebd9!2sVitality%20Stadium!5e0!3m2!1sen!2sza!4v1657695527147!5m2!1sen!2sza
data: afcbournemouth
---
<script src="https://www.w3schools.com/lib/w3.js"></script>


<table class="table" id="sortTable" style="margin-left:auto;margin-right:auto;margin-top:10%; 
border: 1px solid black;">
<strong>
<tr style="text-decoration: underline;background: silver;color:blue">
<th style="cursor: pointer; border: 1px solid black;" onclick="w3.sortHTML('#sortTable','.item', 'td:nth-child(1)')">Player Name</th>
<th style="cursor: pointer;border: 1px solid black;" onclick="w3.sortHTML('#sortTable','.item', 'td:nth-child(2)')">Player Position</th>
<th style="cursor: pointer;border: 1px solid black;" onclick="sort1(2)">Goals Scored</th>
</tr>
</strong>
{% for player in afcbournemouth %}
<tr class="item">
<td style="border: 1px solid black;">{{ player.full_name }}</td><td style="border: 1px solid black;">{{ player.position }}</td><td style="border: 1px solid black;">{{ player.goals_overall }}</td>
</tr>
{% endfor %}
</table>
<script>
function sort1(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("sortTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
</script>
