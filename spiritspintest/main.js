
$(function() {
  var frames = [
    '../../risobagframes/frame_01.jpg',
    '../../risobagframes/frame_02.jpg',
    '../../risobagframes/frame_03.jpg',
    '../../risobagframes/frame_04.jpg',
    '../../risobagframes/frame_05.jpg',
    '../../risobagframes/frame_06.jpg',
    '../../risobagframes/frame_07.jpg',
    '../../risobagframes/frame_08.jpg',
    '../../risobagframes/frame_09.jpg',
    '../../risobagframes/frame_10.jpg',
    '../../risobagframes/frame_11.jpg',
    '../../risobagframes/frame_12.jpg',
    '../../risobagframes/frame_13.jpg',
    '../../risobagframes/frame_14.jpg',
    '../../risobagframes/frame_15.jpg',
    '../../risobagframes/frame_16.jpg',
    '../../risobagframes/frame_17.jpg',
    '../../risobagframes/frame_18.jpg',
    '../../risobagframes/frame_19.jpg',
    '../../risobagframes/frame_20.jpg',
    '../../risobagframes/frame_21.jpg',
    '../../risobagframes/frame_22.jpg',
    '../../risobagframes/frame_23.jpg',
    '../../risobagframes/frame_24.jpg',
    '../../risobagframes/frame_25.jpg',
    '../../risobagframes/frame_26.jpg',
  ];

    var index = 9;

    $("#mySpriteSpin").spritespin({
      source: frames,
      width : 500,
      height : 400,
      frame : index,
      frames : 26,
      animate   : false,
      loop      : false,
      loopFrame : 27,
      wrap  :false,
      frameWrap : false,
      frameTime : 40,
      enableCanvas : false,
      currentFrame: function(){
        // console.log(this.data.frame);
        return this.data.frame;
      },
    });
  
    // console.log(frames);

})

        
        