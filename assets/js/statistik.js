document.addEventListener('DOMContentLoaded' , () => {
    const LabelStockBlue = document.getElementById('LabelStockBlue');
    const LabelStockRed = document.getElementById('LabelStockRed');

    const graphBlue = document.querySelectorAll('.rect-container.blue');
    const graphRed = document.querySelectorAll('.rect-container.red');

    LabelStockBlue.addEventListener('mouseover', () => {
        graphBlue.forEach(rect => rect.classList.add('rect-highlight-active'));
        graphRed.forEach(rect => rect.classList.add('rect-highlight-inactive'));
    });

    LabelStockBlue.addEventListener('mouseout', () => {
        graphBlue.forEach(rect => rect.classList.remove('rect-highlight-active'));
        graphRed.forEach(rect => rect.classList.remove('rect-highlight-inactive'));
    });

    LabelStockRed.addEventListener('mouseover', () => {
        graphBlue.forEach(rect => rect.classList.add('rect-highlight-inactive'));
        graphRed.forEach(rect => rect.classList.add('rect-highlight-active'));
    });

    LabelStockRed.addEventListener('mouseout', () => {
        graphBlue.forEach(rect => rect.classList.remove('rect-highlight-inactive'));
        graphRed.forEach(rect => rect.classList.remove('rect-highlight-active'));
    });

    const svg = document.getElementById('WaveGraph');
    const graph = svg.querySelectorAll('.rect-container');

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