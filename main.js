// Fire animation
const animateFire = () => {
const tl = gsap.timeline({yoyo: true, repeat: -1});
tl.to(".flame_1", {fill: "#791c17", duration: .8, y: 10, x: 1})
.to(".flame_1", {fill: "#791c17", duration: .6, y: 4, x: -1})
.to(".flame_2", { duration: .5, y: -1, x: -1})
}

// Fire shadow animation
const animateFireShadow = () => {
const tl = gsap.timeline({yoyo: true, repeat: -1});
tl.to(".fireShadow", {opacity: .7, duration: 3, x: 6, y:-10, rotation: "+=5", ease: "rough({ template: power0.none, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})
.to(".fireShadow", {opacity: .3, duration: 3, x: 6, y:-10, rotation: "-=5", ease: "rough({ template: power0.none, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})   
.to(".fireShadow", {opacity: .6, duration: 1, x: 6, y:-10, rotation: "-=5", ease: "rough({ template: power0.none, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})   
}

// Fire smoke animation
const animateFireSmoke = () => {
const tl = gsap.timeline({ repeat: -1});
tl.to(".fireSmoke", {opacity: 1, duration: .1})   
.to(".fireSmoke", {opacity: 0, duration: 6, x: 30, y: -40})    
}

// Tree lights animation
const christmasLights = () => {
const tl = gsap.timeline({ repeat: -1, yoyo: true});
tl.to(".red path", {fill: "#ff1a1a", duration: 2, ease:"power2.easeInOut"}, "-=0.5") 
.to(".blue path", {fill: "#006afd", duration: 2, ease:"power2.easeInOut"}, "+=0.2")  
.to(".yellow path", {fill: "#ffff66", duration: 2, ease:"power2.easeInOut"}, "+=0.3")  
}

// Waves animation
const waves = () => {
const tl = gsap.timeline({ repeat: -1});
tl.to(".wave_2", {opacity: 1, duration: .1, ease:"power2.easeInOut"})
.to(".wave_1", {opacity: 1, duration: .1, ease:"power2.easeInOut"})
.to(".wave_3", {opacity: 1, duration: .1, ease:"power2.easeInOut"}) 
.to(".wave_2", {opacity: 0, duration: 1, y:10, ease:"power2.easeInOut"})
.to(".wave_1", {opacity: 0, duration: 1, y:10, ease:"power2.easeInOut"})
.to(".wave_3", {opacity: 0, duration: 1, y:10, ease:"power2.easeInOut"})   
}

// Plant animation 
const plant = () => {
const tl = gsap.timeline({ repeat: -1, yoyo: true});
tl.to(".plant_1", {duration: 1, x: 1.5, ease:"power2.easeInOut"}, "-=0.5") 
.to(".plant_2", {duration: 2, x: 1.2, ease:"power2.easeInOut"}, "+=0.2")  
.to(".plant_3", {duration: 2, x: 1.5, ease:"power2.easeInOut"}, "+=0.3")  
}
  
    
// Animation init
window.addEventListener("load", (e) => {
animateFire();
animateFireShadow();
animateFireSmoke();
christmasLights();
waves();
plant();
});