this.App || (this.App = {});
this.App.scripts = {};
this.App.global_variables = {
    animating: false,
    interval_present: false,
    overlay_visible: false,
    skills_animating: false,
    skill_elements_animating: []
};
this.App.easing_functions = {
    quad_ease_out: function (t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    },
    ease_in_out: function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }
}
for (var counter = 0; counter < 8; counter +=1 ) {
    App.global_variables.skill_elements_animating.push(true);
}