# Before and after image slider

Before and after image slider is a common element seen in a lot of webpages. This code snippet remakes that effect with very few lines of JS. 

Final result -

![Result](./assets/result.gif)



### Next Actions

- [ ] Make this work with any width and height image (The only assurance we will need is to have both the images have the same aspect ratio)
- [ ] Add comments to make things more understandble
- [ ] Make another slider which is drag rather than mousemove (as this current effect will not work on mobile devices)


### Related good to read

1. **Clip Path** - I have used the clip path css property to clip the top image and show the bottom image. Read more about clip path from -  https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
2. **Mousemove event:** In JS we can handle different events. As here the clip is changing based on the mouse position that is why we are using the mousemove event. Read more on https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event