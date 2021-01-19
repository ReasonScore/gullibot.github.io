---
layout: page.html
title: "Reason Score"
permalink: covid/
---
<div class="content">
  {% include feedback.html %}
  <rs-score score-tree-id="ScoreTree"></rs-score>
</div>
<script> //Settings for this page
  window.RsSettings = {
    disableExternalDb: false,
    numbers: true,
    largeNumbers: true,
    lines: false,
    editable: false,
    startClosed: false,
    portData: false,
    scoreDescription: false,
    saveToCloud: false,
    moreInfo: true,
    dbCollection: "f-covid",
  }
</script>
<script src="/static/js/ReasonScoreFull.js"></script>