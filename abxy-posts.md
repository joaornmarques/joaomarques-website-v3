---
title: All posts ● ABXY
title_meta: All posts ● ABXY
description: Gaming thoughts, reviews and something in between.
thumbnail: abxy-thumbnail.jpg
layout: abxy-home
---
<header class="u-p-2 u-p-3-md">
  <h1 class="u-ft-display u-fw-500 u-ts-4 c-abxy-logo-container">
    <div class="c-abxy-logo c-abxy-logo--inline">
      {% include shapes/abxy.html %}
    </div>
    All posts
  </h1>
</header>
<section class="grid">
  {% assign counter = 0 %}
  {% for post in site.abxy reversed %}
    <a href="{{ post.url }}" class="col-12 c-postcard c-postcard--compact" title="{{ post.title }}">
      <article class="u-p-2 u-p-3-md">
        <div>
          <h3 class="u-ft-sans u-ts-4 u-fw-500 u-m-0">{{ post.title }} <span class="c-postcard__arrow">↗</span></h3>
          <p class="u-ft-serif u-ts-5">{{ post.subtitle }}</p>
          <div class="c-postcard__header u-mt-1">
            <p class="c-tag u-mr-1">{{ post.tag }}</p>
            <p class="u-ft-display u-ts-6">{{ post.date | date: "%d/%m/%Y" }}</p>
          </div>
        </div>
      </article>
    </a>
  {% endfor %}
</section>
<div class="u-p-2 u-p-3-md">
  <a class="c-button c-button--gray-3" href="{{'abxy' | absolute_url}}" title="Back to ABXY home"><< Back to ABXY home</a>
</div>
