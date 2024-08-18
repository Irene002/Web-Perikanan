document.addEventListener('DOMContentLoaded' , () => {

    /// Const
    const svg = document.getElementById('graph');
    const graph = svg.querySelectorAll('.rect-container');

    //Label
    const labelOne = document.getElementById('labelOne');
    const labelTwo = document.getElementById('labelTwo');
    const labelThree = document.getElementById('labelThree');
    const labelFour = document.getElementById('labelFour');
    const labelFive = document.getElementById('labelFive');
    const labelSix = document.getElementById('labelSix');

    //Rect Color
    const rectOne= document.getElementById('rectOne');
    const rectTwo= document.getElementById('rectTwo');
    const rectThree= document.getElementById('rectThree');
    const rectFour= document.getElementById('rectFour');
    const rectFive= document.getElementById('rectFive');
    const rectSix= document.getElementById('rectSix');

    // Highlight Function

    //1 

    labelOne.addEventListener('mouseover', () => {
        rectTwo.classList.add('in-active');
        rectThree.classList.add('in-active');
        rectFour.classList.add('in-active');
        rectFive.classList.add('in-active');
        rectSix.classList.add('in-active');
    });

    labelOne.addEventListener('mouseleave', () => {
        rectTwo.classList.remove('in-active');
        rectThree.classList.remove('in-active');
        rectFour.classList.remove('in-active');
        rectFive.classList.remove('in-active');
        rectSix.classList.remove('in-active');

    });

    //2 

    labelTwo.addEventListener('mouseover', () => {
        rectOne.classList.add('in-active');
        rectThree.classList.add('in-active');
        rectFour.classList.add('in-active');
        rectFive.classList.add('in-active');
        rectSix.classList.add('in-active');
    });

    labelTwo.addEventListener('mouseleave', () => {
        rectOne.classList.remove('in-active');
        rectThree.classList.remove('in-active');
        rectFour.classList.remove('in-active');
        rectFive.classList.remove('in-active');
        rectSix.classList.remove('in-active');

    });

    //3 

    labelThree.addEventListener('mouseover', () => {
        rectOne.classList.add('in-active');
        rectTwo.classList.add('in-active');
        rectFour.classList.add('in-active');
        rectFive.classList.add('in-active');
        rectSix.classList.add('in-active');
    });

    labelThree.addEventListener('mouseleave', () => {
        rectOne.classList.remove('in-active');
        rectTwo.classList.remove('in-active');
        rectFour.classList.remove('in-active');
        rectFive.classList.remove('in-active');
        rectSix.classList.remove('in-active');
    });

    //4

    labelFour.addEventListener('mouseover', () => {
        rectOne.classList.add('in-active');
        rectTwo.classList.add('in-active');
        rectThree.classList.add('in-active');
        rectFive.classList.add('in-active');
        rectSix.classList.add('in-active');
    });

    labelFour.addEventListener('mouseleave', () => {
        rectOne.classList.remove('in-active');
        rectTwo.classList.remove('in-active');
        rectThree.classList.remove('in-active');
        rectFive.classList.remove('in-active');
        rectSix.classList.remove('in-active');
    });

    //5
    
    labelFive.addEventListener('mouseover', () => {
        rectOne.classList.add('in-active');
        rectTwo.classList.add('in-active');
        rectThree.classList.add('in-active');
        rectFour.classList.add('in-active');
        rectSix.classList.add('in-active');
    });

    labelFive.addEventListener('mouseleave', () => {
        rectOne.classList.remove('in-active');
        rectTwo.classList.remove('in-active');
        rectThree.classList.remove('in-active');
        rectFour.classList.remove('in-active');
        rectSix.classList.remove('in-active');
    });

    //6

    labelSix.addEventListener('mouseover', () => {
        rectOne.classList.add('in-active');
        rectTwo.classList.add('in-active');
        rectThree.classList.add('in-active');
        rectFour.classList.add('in-active');
        rectFive.classList.add('in-active');
    });

    labelSix.addEventListener('mouseleave', () => {
        rectOne.classList.remove('in-active');
        rectTwo.classList.remove('in-active');
        rectThree.classList.remove('in-active');
        rectFour.classList.remove('in-active');
        rectFive.classList.remove('in-active');
    });



    /// Animation Graph

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                graph.forEach((rect, index) => {
                    rect.style.animationDelay = `${index * 0.2}s`;
                    rect.classList.remove('animate-down');
                    rect.classList.add('animate-up');
                });
            } else{
                graph.forEach((rect, index) => {
                    rect.style.animationDelay = `${index * 0.2}s`;
                    rect.classList.remove('animate-up');
                    rect.classList.add('animate-down');
                });
            }
        });
    }, { threshhold: 0.5 });

    observer.observe(svg);



    

});