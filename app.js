const moods = document.querySelectorAll('#moodBtns button');
const insight = document.getElementById('aiInsight');

moods.forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.dataset.mood;
    localStorage.setItem('moodToday', mood);
    insight.textContent = `AI Insight: You've logged ${mood}. Stay mindful and consistent!`;
  });
});

document.getElementById('breatheBtn').addEventListener('click', () =>
  alert('Inhale 4 sec... Hold 4 sec... Exhale 4 sec... Repeat for 1 minute.')
);
document.getElementById('focusBtn').addEventListener('click', () =>
  alert('Focus on one object. Breathe slowly. Reset your thoughts.')
);
document.getElementById('mindBtn').addEventListener('click', () =>
  alert('Take 60 seconds. Notice your breath and surroundings.')
);
