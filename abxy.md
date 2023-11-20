---
title: ABXY ● Gaming thoughts, reviews and something in between.
title_meta: ABXY
description: Gaming thoughts, reviews and something in between.
thumbnail: abxy-thumbnail.jpg
layout: abxy-home
---
<header class="u-p-2 u-p-3-md">
  <h1 class="u-hidden">
    ABXY
  </h1>
  <div class="c-abxy-logo">
    {% include shapes/abxy.html %}
  </div>
  <h2 class="u-ft-display u-fw-500 u-ts-4 u-mb-8 u-mt-0">
    Gaming thoughts, reviews and something in between.
  </h2>
</header>
<section class="grid">
  {% assign counter = 0 %}
  {% for post in site.abxy reversed %}
  {% assign counter = counter | plus: 1 %}
  {% if counter == 1 %}
    <a href="{{ post.url }}" class="col-12 c-postcard" title="{{ post.title }}">
      {% if post.thumbnail %}
        <img src="/assets/images/{{ post.thumbnail }}" class="c-postcard__img"/>
      {% endif %}
      <article class="c-postcard__content">
        <div>
          <p class="c-tag u-mb-2">{{ post.tag }}</p>
          <h3 class="u-ft-display u-fw-700 u-ts-3 u-m-0">{{ post.title }}</h3>
          <p class="u-ft-serif u-ts-4">{{ post.subtitle }}</p>
        </div>
        <div>
          <p class="u-ft-display u-ts-6 u-mt-8">{{ post.date | date_to_long_string: "ordinal" }}</p>
        </div>
      </article>
    </a>
  {% else %}
    <a href="{{ post.url }}" class="col-12 col-md-6 c-postcard c-postcard--small" title="{{ post.title }}">
      {% if post.thumbnail %}
        <img src="/assets/images/{{ post.thumbnail }}" class="c-postcard__img"/>
      {% endif %}
      <article class="c-postcard__content">
        <div>
          <p class="c-tag u-mb-2">{{ post.tag }}</p>
          <h3 class="u-ft-sans u-ts-3 u-m-0 u-fw-500">{{ post.title }}</h3>
          <p class="u-ft-serif u-ts-4">{{ post.subtitle }}</p>
        </div>
        <div>
          <p class="u-ft-display u-ts-6 u-mt-8">{{ post.date | date_to_long_string: "ordinal" }}</p>
        </div>
      </article>
    </a>
  {% endif %}
  {% endfor %}
  <div class="col-12 col-md-6 u-p-2 u-p-3-md u-bc-gray-1">
    <p class="u-ft-display u-fw-700 u-ts-5">That's all for now</p>
    <p class="u-ft-sans u-ts-6">More content coming soon.</p>
  </div>
</section>
