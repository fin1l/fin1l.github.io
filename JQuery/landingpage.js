function createProjects(data) {
    let lines = data.split("\n");
    for (const project of lines) {
        let info = project.split("|");
        $("#projectReel").prepend('<div class="projectReelItem"><div class="projectContainer"><img src="./imgs/'+info[0]+'" class="projectImage"><p class="projectTitle">'+info[1]+'</p><p class="projectDescription">'+info[2]+'</p></div></div>');
    }
}

function choosePage(ind) {
    let pages = ["#aboutPage", "#projectPage", "#contactPage"];
    let classes = ["#AboutMe", "#Projects", "#Contact"];
    console.log(classes[ind]);
    for (let i = 0; i < 3; i++) {
        if (i==ind) {
            $(classes[i]).removeClass("unlit");
            $(pages[i]).css('display','');
            $(pages[i]).css('animation','fadeInAnimation ease 1s 1 forwards');
        } else {
            $(classes[i]).addClass("unlit");
            $(pages[i]).css('display','none');
        }
    }
}

$("document").ready(function () {
    // About page
    $("#aboutPage").css('display','none');

    // Load project information
    data = `particleSystem.png|Vulkan Particle System|A 3D particle system in Vulkan written in C++ from scratch using a compute shader for the particle physics.
raytrace.jpg|Forward Raytracer|A CUDA core multithreaded forward raytracer written in C++ supporting dielectric, metallic, and lambertian materials. Additionally, it contains features such as camera aperture and focal point.
sudokucapture.PNG|(Killer) Sudoku Game|An Python application to play Sudoku and Killer Sudoku with the ability to generate and solve killer and regular sudoku grids. Games can be saved and loaded with account functionality and statistics tracking.`;
    //$.get('./resources/projInfo', function(data) { createProjects(data) }, 'text');
    createProjects(data);
    
    // Contact page
    $("#contactPage").css('display','none');

    // Navigation buttons
    $("#AboutMe").click( (e) => {
        //window.location.href='about.html';
        choosePage(0);
        return false;
    });
    $("#Projects").click( (e) => {
        //window.location.href='about.html';
        choosePage(1);
        return false;
    });
    $("#Contact").click( (e) => {
        //window.location.href='about.html';
        choosePage(2);
        return false;
    });
});