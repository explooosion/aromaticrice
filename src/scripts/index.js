import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');


// import '@/styles/index.scss'

const gopTop = document.getElementById('gotop');

gopTop.addEventListener('click', () => {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.nav-item').forEach((nav) => {
  nav.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((n) => {
      if (n === nav) {
        n.classList.add('active');
      } else {
        n.classList.remove('active');
      }
    });

    document
      .getElementById(nav.getAttribute('data-target'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

window.onscroll = () => {
  const opacity = document.documentElement.scrollTop * 0.0005;
  gopTop.style.opacity = opacity < 0.3 ? opacity : 0.3;
};
