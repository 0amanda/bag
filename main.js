const position = { x: 0, y: 0 }

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
        position.x += event.dx
        position.y += event.dy
  
        event.target.style.transform =
          `translate(${position.x}px, ${position.y}px)`
      },
      end(event){
        console.log(event.type, event.target);
          //hide paragraph
        const paragraph = document.getElementById('cameratext');
        paragraph.style.display = 'none';
      }
    }
    
  })

  //second object
  interact('#bottle').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
                // Show paragraph
      const paragraph = document.getElementById('bottletext');
      paragraph.style.display = 'inline';

      },
      move (event) {
        position.x += event.dx
        position.y += event.dy
  
        event.target.style.transform =
          `translate(${position.x}px, ${position.y}px)`
      },
      end(event){
        console.log(event.type, event.target);
          //hide paragraph
        const paragraph = document.getElementById('cameratext');
        paragraph.style.display = 'none';
      }
    }
    
  })

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

  
console.log($('.draggable'));
  $('.draggable').css('transform', 'translate(0px, 0px)');

  // Do something when a draggable element is dropped into a drop zone
  console.log('Dropped into dropzone:', dropzoneElement);
  console.log("draggable element: ", draggableElement)
}

    
  