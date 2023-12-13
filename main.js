// const position = { x: 0, y: 0 }
const cameraposition = { x: 0, y: 0 }
const bottleposition = { x: 0, y: 0 }
const hairclipposition = { x: 0, y: 0 }
const candyposition = { x: 0, y: 0 }
const chapstickposition = { x: 0, y: 0 }
const cookieposition = { x: 0, y: 0 }
const crochetposition = { x: 0, y: 0 }
const crystalsposition = { x: 0, y: 0 }
const forkposition = { x: 0, y: 0 }
const handlotionposition = { x: 0, y: 0 }
const hellokittyposition = { x: 0, y: 0 }
const lippencilposition = { x: 0, y: 0 }
const lipstickposition = { x: 0, y: 0 }
const markerpensposition = { x: 0, y: 0 }
const mirrorposition = { x: 0, y: 0 }
const mymelodystickerposition = { x: 0, y: 0 }
const nailfileposition = { x: 0, y: 0 }
const nailpolishposition = { x: 0, y: 0 }
const nailsposition = { x: 0, y: 0 }
const numberpagerposition = { x: 0, y: 0 }
const penposition = { x: 0, y: 0 }
const receiptposition = { x: 0, y: 0 }
const smallpurseposition = { x: 0, y: 0 }
const soysauceposition = { x: 0, y: 0 }




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

  //candy
  interact('#candy').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
                // Show paragraph
      const paragraph = document.getElementById('candytext');
      paragraph.style.display = 'inline';

      },
      move (event) {
        candyposition.x += event.dx
        candyposition.y += event.dy
  
        event.target.style.transform =
          `translate(${candyposition.x}px, ${candyposition.y}px)`
      },
      end(event){
        console.log(event.type, event.target);
          //hide paragraph
        const paragraph = document.getElementById('candytext');
        paragraph.style.display = 'none';
      }
    }
    
  })

  //chapstick
  interact('#chapstick').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
                // Show paragraph
      const paragraph = document.getElementById('chapsticktext');
      paragraph.style.display = 'inline';

      },
      move (event) {
        chapstickposition.x += event.dx
        chapstickposition.y += event.dy
  
        event.target.style.transform =
          `translate(${chapstickposition.x}px, ${chapstickposition.y}px)`
      },
      end(event){
        console.log(event.type, event.target);
          //hide paragraph
        const paragraph = document.getElementById('chapsticktext');
        paragraph.style.display = 'none';
      }
    }
    
  })

 //cookie
 interact('#cookie').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('cookietext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      cookieposition.x += event.dx
      cookieposition.y += event.dy

      event.target.style.transform =
        `translate(${cookieposition.x}px, ${cookieposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('cookietext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //crystals
 interact('#crystals').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('crystalstext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      crystalsposition.x += event.dx
      crystalsposition.y += event.dy

      event.target.style.transform =
        `translate(${crystalsposition.x}px, ${crystalsposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('crystalstext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //fork
 interact('#fork').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('forktext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      forkposition.x += event.dx
      forkposition.y += event.dy

      event.target.style.transform =
        `translate(${forkposition.x}px, ${forkposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('forktext');
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

 //handlotion
 interact('#handlotion').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('handlotiontext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      handlotionposition.x += event.dx
      handlotionposition.y += event.dy

      event.target.style.transform =
        `translate(${handlotionposition.x}px, ${handlotionposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('handlotiontext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //hellokitty
 interact('#hellokitty').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('hellokittytext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      hellokittyposition.x += event.dx
      hellokittyposition.y += event.dy

      event.target.style.transform =
        `translate(${hellokittyposition.x}px, ${hellokittyposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('hellokittytext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //lippencil
 interact('#lippencil').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('lippenciltext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      lippencilposition.x += event.dx
      lippencilposition.y += event.dy

      event.target.style.transform =
        `translate(${lippencilposition.x}px, ${lippencilposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('lippenciltext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //lipstick
 interact('#lipstick').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('lipsticktext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      lipstickposition.x += event.dx
      lipstickposition.y += event.dy

      event.target.style.transform =
        `translate(${lipstickposition.x}px, ${lipstickposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('lipsticktext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //markerpens
 interact('#markerpens').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('markerpenstext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      markerpensposition.x += event.dx
      markerpensposition.y += event.dy

      event.target.style.transform =
        `translate(${markerpensposition.x}px, ${markerpensposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('markerpenstext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //mirror
 interact('#mirror').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('mirrortext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      mirrorposition.x += event.dx
      mirrorposition.y += event.dy

      event.target.style.transform =
        `translate(${mirrorposition.x}px, ${mirrorposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('mirrortext');
      paragraph.style.display = 'none';
    }
  }
  
})


 //mymelodysticker
 interact('#mymelodysticker').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('mymelodystickertext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      mymelodystickerposition.x += event.dx
      mymelodystickerposition.y += event.dy

      event.target.style.transform =
        `translate(${mymelodystickerposition.x}px, ${mymelodystickerposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('mymelodystickertext');
      paragraph.style.display = 'none';
    }
  }
  
})


 //nailfile
 interact('#nailfile').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('nailfiletext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      nailfileposition.x += event.dx
      nailfileposition.y += event.dy

      event.target.style.transform =
        `translate(${nailfileposition.x}px, ${nailfileposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('nailfiletext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //nailpolish
 interact('#nailpolish').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('nailpolishtext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      nailpolishposition.x += event.dx
      nailpolishposition.y += event.dy

      event.target.style.transform =
        `translate(${nailpolishposition.x}px, ${nailpolishposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('nailpolishtext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //nails
 interact('#nails').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('nailstext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      nailsposition.x += event.dx
      nailsposition.y += event.dy

      event.target.style.transform =
        `translate(${nailsposition.x}px, ${nailsposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('nailstext');
      paragraph.style.display = 'none';
    }
  }
  
})


 //numberpager
 interact('#numberpager').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('numberpagertext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      numberpagerposition.x += event.dx
      numberpagerposition.y += event.dy

      event.target.style.transform =
        `translate(${numberpagerposition.x}px, ${numberpagerposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('numberpagertext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //pen
 interact('#pen').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('pentext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      penposition.x += event.dx
      penposition.y += event.dy

      event.target.style.transform =
        `translate(${penposition.x}px, ${penposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('pentext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //receipt
 interact('#receipt').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('receipttext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      receiptposition.x += event.dx
      receiptposition.y += event.dy

      event.target.style.transform =
        `translate(${receiptposition.x}px, ${receiptposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('receipttext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //smallpurse
 interact('#smallpurse').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('smallpursetext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      smallpurseposition.x += event.dx
      smallpurseposition.y += event.dy

      event.target.style.transform =
        `translate(${smallpurseposition.x}px, ${smallpurseposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('smallpursetext');
      paragraph.style.display = 'none';
    }
  }
  
})

 //soysauce
 interact('#soysauce').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
              // Show paragraph
    const paragraph = document.getElementById('soysaucetext');
    paragraph.style.display = 'inline';

    },
    move (event) {
      soysauceposition.x += event.dx
      soysauceposition.y += event.dy

      event.target.style.transform =
        `translate(${soysauceposition.x}px, ${soysauceposition.y}px)`
    },
    end(event){
      console.log(event.type, event.target);
        //hide paragraph
      const paragraph = document.getElementById('soysaucetext');
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


  