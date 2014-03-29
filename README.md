SimplePopup.js
===========

A lightweight responsively-behaving jQuery popup plugin, without all of the extra junk.

All you have to do is give a container element the CSS class of .simplePopup. Then on whatever event you like simply call simplePopup on this element.

```javascript
$(document).ready(function(){

    $('a.show1').click(function(){
        $('#pop1').simplePopup();
    }); 
  
});
```

