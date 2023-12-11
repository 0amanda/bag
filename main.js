// const position = { x: 0, y: 0 }
const cameraposition = { x: 0, y: 0 }
const bottleposition = { x: 0, y: 0 }
const hairclipposition = { x: 0, y: 0 }


//camera
interact('#camera').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
                // Show paragraph
      const paragraph = document.getElementById('cameratext');
      paragraph.style.display = 'inline';

      },
      move (event) {
        cameraposition.x += event.dx
        cameraposition.y += event.dy
  
        event.target.style.transform =
          `translate(${cameraposition.x}px, ${cameraposition.y}px)`
      },
      end(event){
        console.log(event.type, event.target);
          //hide paragraph
        const paragraph = document.getElementById('cameratext');
        paragraph.style.display = 'none';
      }
    }
    
  })

  //bottle
  interact('#bottle').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
                // Show paragraph
      const paragraph = document.getElementById('bottletext');
      paragraph.style.display = 'inline';

      },
      move (event) {
        bottleposition.x += event.dx
        bottleposition.y += event.dy
  
        event.target.style.transform =
          `translate(${bottleposition.x}px, ${bottleposition.y}px)`
      },
      end(event){
        console.log(event.type, event.target);
          //hide paragraph
        const paragraph = document.getElementById('bottletext');
        paragraph.style.display = 'none';
      }
    }
    
  })

  //hairclip
  interact('#hairclip').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
                // Show paragraph
      const paragraph = document.getElementById('haircliptext');
      paragraph.style.display = 'inline';

      },
      move (event) {
        hairclipposition.x += event.dx
        hairclipposition.y += event.dy
  
        event.target.style.transform =
          `translate(${hairclipposition.x}px, ${hairclipposition.y}px)`
      },
      end(event){
        console.log(event.type, event.target);
          //hide paragraph
        const paragraph = document.getElementById('haircliptext');
        paragraph.style.display = 'none';
      }
    }
    
  })




  



  //dropzone


  interact('.dropzone')
  .dropzone({
    accept: '.draggable',
    ondropactivate: function (event) {
      event.target.classList.add('drop-active');


    },
    ondropdeactivate: function (event) {
      event.target.classList.remove('drop-active');
    },
    ondrop: handleDrop,
    ondragleave: function (event) {
      var draggableElement = event.relatedTarget;
      

      draggableElement.style.opacity = 1;
    }
  });

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}


function handleDrop(event) {
  var draggableElement = event.relatedTarget;
  var dropzoneElement = event.target;

  draggableElement.style.opacity = 0;

  
// console.log($('.draggable'));
//   $('.draggable').css('transform', 'translate(0px, 0px)');

  // Do something when a draggable element is dropped into a drop zone
  console.log('Dropped into dropzone:', dropzoneElement);
  console.log("draggable element: ", draggableElement)
}

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 50
});
  