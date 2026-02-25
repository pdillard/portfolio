particlesJS("particles-js", {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 500
            }
        },
        size: {
            value: 1,
            random: true
        },
        color: {
            value: "#F57A89"
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#F57A89",
            opacity: 0.4,
            width: 1.5
        },
        move: {
            enable: true,
            move: 2
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opactiry: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

const element = document.getElementById("type")

const correctText = 'print("Hello World"), I\'m Preston Dillard a Software Engineer"';
const wrongText = 'print("Helo Wor';

let index = 0;

function typeText (text, speed, callback) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(() => typeText(text, speed, callback), speed);
    } else if (callback) {
        setTimeout(callback, 800);
    }
}

function deleteText(speed, callback) {
    if (index > 0) {
        element.textContent = element.textContent.slice(0, -1);
        index--;
        setTimeout(() => deleteText(speed, callback), speed);
    } else if (callback) {
        setTimeout(callback, 300);
    }
}

function start() {
    index = 0;
    typeText(wrongText, 50, () => {
        deleteText(50, () => {
            index = 0;
            typeText(correctText, 80);
        });
    });
}

start();