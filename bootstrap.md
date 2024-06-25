
### Div

* `row` créer une ligne.
* `col` créer une colonne.

    * `-lg-4` spécifier la largeur.


* `bg-` couleur de fond.

    * `light` gris clair.
    * `dark` sombre.

### Marge et padding

* `m-1` for classes that set margin
* `p-1` for classes that set paddin


t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
l - for classes that set margin-left or padding-left
r - for classes that set margin-right or padding-right

!!! example

    `mt-2` marge en haut.

### Img

* `w-100` mettre en plein écran.


## Lightbox

Les images en CSS 

``` html
<!-- Lightbox thumbnail, visible on page at all times -->
<a href="#abribus">
<img src="img/abribus.jpg" class="img-thumbnail">
</a>

<!-- Include lightbox (position on page doesn't matter) -->
<a href="#_" class="lightbox" id="abribus">
<span style="background-image: url('img/abribus.jpg')"></span>
</a>
```


``` html
<!-- Lightbox thumbnail, visible on page at all times -->
<a href="#abribus">
<img src="img/abribus.jpg" class="img-thumbnail">
</a>

<!-- Include lightbox (position on page doesn't matter) -->
<a href="#_" class="lightbox" id="abribus">
<span style="background-image: url('img/abribus.jpg')"></span>
</a>
```

```css
img:target {
    border: 5px solid red;
  }

.lightbox {
  /* Default to hidden */
  display: none;

  /* Overlay entire screen */
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* A bit of padding around image */
  padding: 1em;

  /* Translucent background */
  background: rgba(0, 0, 0, 0.8);
}

/* Unhide the lightbox when it's the target */
.lightbox:target {
  display: block;
}

.lightbox span {
  /* Full width and height */
  display: block;
  width: 100%;
  height: 100%;

  /* Size and position background image */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
```