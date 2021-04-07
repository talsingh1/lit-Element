function addScript( src, type, add ) {
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', src );
  s.setAttribute( 'type', type );
  if(add)
  s.setAttribute( add, true );
  document.querySelector('body').appendChild( s );
}

setTimeout(() => {
    addScript('../my-element.js', 'module', '');
    addScript('../my-element-two.js', 'module', '');

    const tooltip = document.createElement('my-element');
    tooltip.setAttribute('color', "red");

    const tooltip2 = document.createElement('my-element-two');
    tooltip2.setAttribute('color', "brown");

    const tooltip3 = document.createElement('my-element');
    tooltip3.setAttribute('color', "orange");


    const tooltip4 = document.createElement('my-element-two');
    tooltip4.setAttribute('color', "blue");


    document.querySelector('#box1').appendChild(tooltip); 
    document.querySelector('#box2').appendChild(tooltip2); 
    document.querySelector('#box3').appendChild(tooltip3); 
    document.querySelector('#box4').appendChild(tooltip4); 
}, 0);

