---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: joaomarques.website [v3]
layout: default
---

# Test 1
## Test 2
### Test 3
#### Test 4
##### Test 5
###### Test 6

This is an example. **How about** *this*, ***and this***

<p class="f-sans">Another text example, now on a geometric font</p>

<div class="u-bc-neon-2">
  <p class="f-sans ts-1">More text, now on another background</p>
</div>
<div class="u-bc-gray-2">
  <p class="f-sans u-c-gray-3">More text, now on another background</p>
</div>
<div class="u-bc-neon-3">
  <p class="f-sans u-c-gray-1">More text, now on another background</p>
</div>

<br>

##### Typescale

<div class="row">
  <div class="col-12 col-md-6 u-bc-gray-2 u-c-gray-3">
    <div class="u-p-2">
      <p class="u-ft-display u-ts-1 u-m-0">Font size 1</p>
      <p class="u-ft-display u-ts-2 u-m-0">Font size 2</p>
      <p class="u-ft-display u-ts-3 u-m-0">Font size 3</p>
      <p class="u-ft-display u-ts-4 u-m-0">Font size 4</p>
      <p class="u-ft-display u-ts-5 u-m-0">Font size 5</p>
    </div>
  </div>
  <div class="col-12 col-md-6 u-bc-neon-2">
    <div class="u-p-2">
      <p class="u-ts-1 u-m-0">Font size 1</p>
      <p class="u-ts-2 u-m-0">Font size 2</p>
      <p class="u-ts-3 u-m-0">Font size 3</p>
      <p class="u-ts-4 u-m-0">Font size 4</p>
      <p class="u-ts-5 u-m-0">Font size 5</p>
    </div>
  </div>
  <div class="col-12 col-md-6 u-bc-neon-3 u-c-gray-1">
    <div class="u-p-2">
      <p class="u-ft-sans u-ts-1 u-m-0">Font size 1</p>
      <p class="u-ft-sans u-ts-2 u-m-0">Font size 2</p>
      <p class="u-ft-sans u-ts-3 u-m-0">Font size 3</p>
      <p class="u-ft-sans u-ts-4 u-m-0">Font size 4</p>
      <p class="u-ft-sans u-ts-5 u-m-0">Font size 5</p>
    </div>
  </div>
</div>

##### Shapes

<div class="row u-mb-8">
  <div class="col-12 col-md-6">
    <div class="row row--nowrap">
      <div class="u-bc-neon-1 u-cf-gray-1 u-flex-2">
        <div class="c-shape-motion-wheel">
          {% include shapes/wheel.html %}
        </div>
      </div>
      <div class="u-bc-neon-2 u-cf-gray-1 u-flex-0_9">
        {% include shapes/accordion.html %}
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="row row--nowrap">
      <div class="col-6 u-bc-gray-2 u-cf-gray-3">
        <div class="c-shape-motion-target">
          {% include shapes/target.html %}
        </div>
      </div>
      <div class="col-6 u-bc-neon-3 u-cf-gray-1 u-pos-relative">
        <div class="c-shape-motion-crown">
          {% include shapes/crown.html %}
        </div>
        <div class="c-shape-motion-crown">
          {% include shapes/crown.html %}
        </div>
        <div class="c-shape-motion-crown">
          {% include shapes/crown.html %}
        </div>
      </div>
    </div>
  </div>
</div>