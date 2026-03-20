// toggle bubbles; close on outside click or Escape
const wrap = document.getElementById('circleWrap');
const big = document.getElementById('bigCircle');

// When the big circle is clicked
big.onclick = (event) => {
    event.stopPropagation();
    if (wrap.classList.contains('expanded')) {
        wrap.classList.remove('expanded');
    } 
    else {
        wrap.classList.add('expanded');
    }
};

// When clicking anywhere else on the document
document.onclick = () => {
    wrap.classList.remove('expanded');
};
