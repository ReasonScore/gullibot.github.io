---
layout: page.html
title: "Should you take the COVID-19 Vaccine - Analysis"
description: "Help me understand if you should take the vaccine even if recommended by the CDC."
permalink: covid-vaccine/
---
<div class="content">
  <h2>Help Me Improve This Analysis</h2>
  <rs-score score-tree-id="ScoreTree"></rs-score>
  {% include feedback.html %}
</div>
<script> //Settings for this page
  window.RsSettings = {
    disableExternalDb: false,
    numbers: true,
    largeNumbers: true,
    lines: false,
    editable: false,
    startClosed: true,
    portData: false,
    scoreDescription: false,
    saveToCloud: false,
    moreInfo: true,
    hideMainScore: true,
    dbCollection: "f-covid",
  }
</script>
<script src="/static/js/ReasonScoreFull.js"></script>
