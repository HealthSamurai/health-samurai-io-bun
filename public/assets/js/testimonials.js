/**
 * Testimonials carousel with slide animation
 */

document.addEventListener('DOMContentLoaded', function() {
  const testimonialsSection = document.querySelector('[data-testimonials-carousel]');
  if (!testimonialsSection) return;
  
  const track = testimonialsSection.querySelector('[data-testimonials-track]');
  const slides = testimonialsSection.querySelectorAll('[data-testimonial-slide]');
  
  if (!track || !slides.length) return;
  
  let currentIndex = 0;
  
  function updateSlide(newIndex) {
    currentIndex = newIndex;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }
  
  // Listen for prev button clicks
  const prevBtn = testimonialsSection.querySelector('[data-testimonials-prev]');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide(newIndex);
    });
  }
  
  // Listen for next button clicks
  const nextBtn = testimonialsSection.querySelector('[data-testimonials-next]');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIndex = (currentIndex + 1) % slides.length;
      updateSlide(newIndex);
    });
  }
});
