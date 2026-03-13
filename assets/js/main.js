const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("form-submit");
const reveals = document.querySelectorAll(".reveal");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

const setChatState = (open) => {
  chatWindow.classList.toggle("is-open", open);
  chatWindow.setAttribute("aria-hidden", String(!open));
  chatToggle.setAttribute("aria-expanded", String(open));
};

if (chatToggle && chatWindow && chatClose) {
  chatToggle.addEventListener("click", () => {
    const isOpen = chatWindow.classList.contains("is-open");
    setChatState(!isOpen);
  });

  chatClose.addEventListener("click", () => setChatState(false));
}

if (chatForm) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("chat-message");
    if (!input || !input.value.trim()) {
      return;
    }

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.textContent = "Dekuji. EMA je zatim pripravena jen jako prezentacni prvek a odpoved ulozime do dalsi iterace.";
    chatWindow.querySelector(".chat-body")?.appendChild(bubble);
    input.value = "";
  });
}

if (contactForm && submitButton) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const originalLabel = submitButton.textContent;
    submitButton.textContent = "Odesila se...";
    submitButton.disabled = true;

    window.setTimeout(() => {
      submitButton.textContent = "Zprava uspesne odeslana";
      contactForm.reset();

      window.setTimeout(() => {
        submitButton.textContent = originalLabel;
        submitButton.disabled = false;
      }, 2400);
    }, 1200);
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("is-visible"));
}
