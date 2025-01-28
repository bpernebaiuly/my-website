// Байланыс формасын өңдеу
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Форманы жіберуді тоқтату

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  if (name && email && message) {
    alert(`Рахмет, ${name}! Сіздің хабарыңыз жіберілді.`);
    contactForm.reset(); // Форманы тазалау
  } else {
    alert('Барлық өрістерді толтырыңыз!');
  }
});
