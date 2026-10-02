'use strict';
// One original letter for each photo, in the order in assets/photos.js.
const letters = [
['My favorite story', 'Every page, still you.', 'Happy anniversary, my love. If I could gather all the little moments that made me fall for you, I would keep them right here, between these pages.', 'This book is a small way of saying something my heart knows every day: I am so happy that my life has you in it.'],
['A little closer', 'My favorite place is beside you.', 'There are so many places I hope we get to see together. But even before we go anywhere, I already know my favorite part will be having you beside me.', 'A beautiful view is lovely. Sharing it with you is what makes it a memory I want to keep.'],
['The everyday magic', 'You make ordinary days lovely.', 'I love the thought of all the ordinary days we still have ahead of us. The small conversations, the little updates, the moments that would seem like nothing to anyone else.', 'With you, those little things become the things I look forward to most. Thank you for making everyday life feel sweeter.'],
['That smile of yours', 'A little sunshine, saved.', 'I hope you know how much I love seeing you happy. Your smile has a way of making me pause, forget whatever was on my mind, and smile right back.', 'If this little book gives you even one of those smiles, then it has done exactly what I hoped it would.'],
['Always worth it', 'I would choose you again.', 'If I could turn back the pages and begin our story again, I would still want them to lead to you. I would still want this love, these memories, and this chance to know you.', 'On our anniversary, and on an ordinary day with nothing special planned, my answer is the same: you.'],
['A soft place to land', 'Come as you are, my love.', 'You do not have to have the perfect words or the brightest smile every day. I want to know the quiet you, the tired you, and the you who just needs a little gentleness.', 'I hope my love always feels like a place where you can breathe, be yourself, and feel welcome.'],
['The little things', 'Nothing small about this love.', 'Sometimes love is a big, beautiful moment. Sometimes it is simply remembering something you said, wondering how your day is going, or wishing I could share a tiny thing with you.', 'I love those quiet reminders that you have become such a precious part of my world.'],
['My sweetest thought', 'You cross my mind. I smile.', 'You find your way into my thoughts in the middle of the most ordinary things. I see something lovely, and a part of me immediately wants to show you.', 'I think that is one of my favorite things about loving you: the world keeps giving me little reasons to think of us.'],
['More laughter, please', 'Here’s to being silly together.', 'I hope we never run out of reasons to laugh together. I want the silly moments, the smiles we cannot quite explain, and the kind of happiness that does not need a special occasion.', 'Life asks us to be serious often enough. With you, I hope there is always room to be playful.'],
['Thank you for you', 'You are a gift in my days.', 'Today, I want to say thank you. For being part of my life. For the time we share. For every little bit of yourself you let me know and love.', 'You do not have to do something extraordinary to be precious to me. I am grateful for the person you already are.'],
['Growing together', 'There is more of us to discover.', 'I love that our story is still being written. There are things we will learn, places we will go, and versions of ourselves we have not met yet.', 'I hope we keep getting curious about each other, keep listening, and keep finding new reasons to fall in love along the way.'],
['A moment to keep', 'If only a page could hold a hug.', 'A photograph can keep a moment, but it cannot quite hold everything I feel when I look at you. There is always a little more affection than the picture knows how to show.', 'So let this letter add what the photo cannot: a very long hug, and a quiet reminder that you are loved.'],
['Still falling for you', 'Familiar, and still so special.', 'I love the comfort of knowing you, and I love that you can still make my heart feel a little fluttery. There is something so sweet about having both.', 'You are someone I want to feel close to today, and someone I want to keep discovering tomorrow.'],
['Through every season', 'A hand to hold along the way.', 'I know every day will not look like a photograph worth framing. Some days will be busy, messy, or a little harder than we expected.', 'On those days, I want us to remember we can slow down, speak gently, and reach for each other. Love belongs in the ordinary and difficult moments, too.'],
['Our kind of beautiful', 'A story that feels like us.', 'Our love does not have to look like anybody else’s to be beautiful. I treasure the small things that make it ours: our way of talking, our way of laughing, our way of caring.', 'I hope we keep making room for a love that feels honest, warm, and entirely our own.'],
['A thousand little wishes', 'More days. More memories. More us.', 'When I think about what I want next, it is not only the big adventures. I want more conversations, more shared smiles, and more moments when I get to feel close to you.', 'Here is my anniversary wish: may we keep making memories we will someday look back on with full hearts.'],
['You matter to me', 'In more ways than a letter can say.', 'I hope I never get so used to having you in my life that I forget to tell you how much you mean to me. You deserve to hear it, in words and in little acts of care.', 'So here it is, simply: I love you. I appreciate you. I am glad we have each other.'],
['Room for your dreams', 'I’m cheering for you, always.', 'I love thinking about all the things that make your eyes light up. I hope you keep finding what excites you, what gives you peace, and what makes you proud of yourself.', 'I want to celebrate your little victories and remind you, when you need it, that I believe in you.'],
['No need to rush', 'Let’s enjoy this chapter.', 'There is so much ahead to look forward to, but I do not want to rush past the sweetness of now. This version of us deserves to be remembered, too.', 'So let us pause here for a moment. Look at how lovely it is that we found someone to share these pages with.'],
['The words I mean', 'Love, in the little things we do.', 'I want my love to be more than a beautiful sentence in an anniversary letter. I want it to show up in the way I listen, the time I make, and the care I give.', 'I will keep learning how to love you well, one small, thoughtful choice at a time.'],
['A heart full of memories', 'Little moments, held close.', 'Looking through these photos reminds me how lovely it is to have pieces of our story to return to. Each one gives me a reason to pause and feel grateful.', 'One day, I hope we look back at this book and smile at how much more of our story we have lived since then.'],
['My favorite tomorrow', 'There are more pages waiting.', 'I cannot tell you exactly what the next chapter will look like. But I know what I hope we bring into it: kindness, laughter, patience, and plenty of reasons to hold each other close.', 'Whatever new memories we make, I am happy we get the chance to make them together.'],
['Just one more thing', 'You are so very loved.', 'If you ever return to these pages on a day when you need a little extra love, I hope you find it here. Not only in the pretty pictures, but in every word I wrote for you.', 'You matter to me on our anniversary. You matter just as much on all the days in between.'],
['To be continued…', 'Forever starts with another day.', 'Happy anniversary, my love. Thank you for being part of a story I am so happy to call ours. These pages may end here, but there are so many moments I still hope to share with you.', 'Here is to another day of choosing each other, another memory to treasure, and another page of us.']
];
const photos = window.anniversaryPhotos;
const spread = document.getElementById('spread');
const book = document.getElementById('book');
const coverScene = document.getElementById('cover-scene');
const openScene = document.getElementById('open-book-scene');
const openBook = document.getElementById('open-book');
const chapter = document.getElementById('chapter');
const status = document.getElementById('page-status');
const music = document.getElementById('music');
const musicLabel = document.getElementById('music-label');
const viewer = document.getElementById('page-viewer');
const viewerContent = document.getElementById('viewer-content');
const originalSize = document.getElementById('original-size');
function enlargePage(page) {
  if (turning) return;
  const sourceImage = page.querySelector('img');
  viewerContent.replaceChildren();
  viewerContent.classList.remove('original-size');
  originalSize.hidden = !sourceImage;
  originalSize.setAttribute('aria-pressed', 'false');
  originalSize.textContent = 'Original size';
  document.getElementById('viewer-title').textContent = sourceImage ? `Memory ${current + 1} · A closer look` : letters[current][0];
  if (sourceImage) {
    const image = new Image();
    image.src = sourceImage.src;
    image.alt = sourceImage.alt;
    image.className = 'original-photo';
    viewerContent.append(image);
  } else {
    const letter = page.cloneNode(true);
    letter.className = 'enlarged-letter';
    letter.querySelectorAll('button, .page-number').forEach(element => element.remove());
    viewerContent.append(letter);
  }
  viewer.showModal();
  document.body.classList.add('viewing-page');
  viewerContent.scrollTop = viewerContent.scrollLeft = 0;
}
document.getElementById('close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('close', () => document.body.classList.remove('viewing-page'));
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
originalSize.addEventListener('click', () => {
  const original = viewerContent.classList.toggle('original-size');
  originalSize.setAttribute('aria-pressed', String(original));
  originalSize.textContent = original ? 'Fit to screen' : 'Original size';
});
let current = 0;
let turning = false;
let opened = false;
const finale = document.getElementById('anniversary-finale');
function animateBouquet() {
  const bouquet = finale.querySelector('.bouquet');
  bouquet.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  bouquet.animate([
    { opacity: 0, transform: 'translateY(34px) scale(.76) rotate(-7deg)' },
    { opacity: 1, transform: 'translateY(-3px) scale(1.035) rotate(1deg)', offset: .72 },
    { opacity: 1, transform: 'translateY(0) scale(1) rotate(0)' }
  ], { duration: 1500, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });

  const stems = bouquet.querySelector('g[stroke="#68836c"]');
  stems.style.transformBox = 'fill-box';
  stems.style.transformOrigin = '50% 100%';
  stems.animate([
    { opacity: 0, transform: 'scaleY(.08)' },
    { opacity: 1, transform: 'scaleY(1)' }
  ], { duration: 950, delay: 160, easing: 'cubic-bezier(.22,.7,.25,1)', fill: 'both' });

  const wrapper = bouquet.querySelector('path[fill="url(#wrap)"]');
  wrapper.style.transformBox = 'fill-box';
  wrapper.style.transformOrigin = '50% 100%';
  wrapper.animate([
    { opacity: 0, transform: 'scaleY(.72)' },
    { opacity: 1, transform: 'scaleY(1)' }
  ], { duration: 800, delay: 380, easing: 'ease-out', fill: 'both' });

  bouquet.querySelectorAll('use[href="#leaf"]').forEach((leaf, index) => {
    leaf.style.transformBox = 'fill-box';
    leaf.style.transformOrigin = 'center';
    leaf.animate([
      { opacity: 0, scale: .16 },
      { opacity: 1, scale: 1.08, offset: .76 },
      { opacity: 1, scale: 1 }
    ], { duration: 680, delay: 520 + index * 42, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });
  });

  bouquet.querySelectorAll('use[href="#bloom"], use[href="#darkbloom"], use[href="#daisy"]').forEach((flower, index) => {
    flower.style.transformBox = 'fill-box';
    flower.style.transformOrigin = 'center';
    flower.animate([
      { opacity: 0, scale: .08 },
      { opacity: 1, scale: 1.12, offset: .74 },
      { opacity: 1, scale: 1 }
    ], { duration: 760, delay: 850 + index * 92, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });
  });

  bouquet.animate(
    [{ rotate: '-.7deg' }, { rotate: '.7deg' }],
    { duration: 2600, delay: 1750, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }
  );
}
function showFinale() {
  if (turning) return;
  opened = false;
  openScene.hidden = true;
  coverScene.hidden = true;
  finale.hidden = false;
  animateBouquet();
  status.textContent = 'Happy Anniversary, my love! A bouquet, just for you.';
  document.getElementById('finale-title').focus({preventScroll:true});
  finale.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',block:'start'});
}
document.getElementById('return-last-page').addEventListener('click', () => {
  finale.hidden = true;
  openScene.hidden = false;
  opened = true;
  spread.querySelector('[data-side="1"]').focus({preventScroll:true});
});
document.getElementById('read-again').addEventListener('click', () => { finale.hidden = true; closeBook(); });
function closeBook() {
  if (turning) return;
  opened = false;
  openScene.hidden = true;
  coverScene.hidden = false;
  status.textContent = 'Our anniversary book is closed. Open it to begin again.';
  openBook.focus({ preventScroll: true });
}
openBook.addEventListener('click', async () => {
  if (turning) return;
  startMusic();
  turning = true;
  openBook.disabled = true;
  const coverBounds = openBook.getBoundingClientRect();
  let openingStage;
  try {
    current = 0;
    opened = true;
    render();
    coverScene.hidden = true;
    openScene.hidden = false;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const bounds = spread.getBoundingClientRect();
      const halfWidth = bounds.width / 2;
      openingStage = document.createElement('div');
      openingStage.className = 'opening-stage';
      openingStage.setAttribute('aria-hidden', 'true');
      openingStage.inert = true;
      Object.assign(openingStage.style, { left: `${bounds.left}px`, top: `${bounds.top}px`, width: `${bounds.width}px`, height: `${bounds.height}px` });
      const restingPage = spread.children[1].cloneNode(true);
      restingPage.classList.add('opening-resting-page');
      const leaf = document.createElement('div');
      leaf.className = 'opening-cover-leaf';
      const front = document.createElement('div');
      front.className = 'closed-book opening-cover-front';
      front.innerHTML = openBook.innerHTML;
      const inside = spread.children[0].cloneNode(true);
      inside.classList.add('opening-cover-inside');
      leaf.append(front, inside);
      openingStage.append(restingPage, leaf);
      openingStage.querySelectorAll('button').forEach(button => button.remove());
      document.body.append(openingStage);
      book.style.visibility = 'hidden';
      openScene.classList.add('book-is-opening');
      const start = `translate(${coverBounds.left - bounds.left - halfWidth}px, ${coverBounds.top - bounds.top}px) scale(${coverBounds.width / halfWidth}, ${coverBounds.height / bounds.height})`;
      await Promise.all([
        openingStage.animate([{ transform: start }, { transform: 'translate(0, 0) scale(1)' }], { duration: 1600, easing: 'cubic-bezier(.22,.7,.25,1)', fill: 'forwards' }).finished,
        leaf.animate([{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(-180deg)' }], { duration: 1600, easing: 'cubic-bezier(.35,.05,.25,1)', fill: 'forwards' }).finished
      ]);
    }
    spread.querySelector('[data-side="1"]').focus({preventScroll:true});
  } finally {
    openingStage?.remove();
    book.style.visibility = '';
    openScene.classList.remove('book-is-opening');
    turning = false;
    openBook.disabled = false;
    if (opened) spread.querySelector('[data-side="1"]').focus({preventScroll:true});
  }
});
document.getElementById('close-book').addEventListener('click', closeBook);
function render() {
  const [title, caption, first, second] = letters[current];
  const letter = document.createElement('article');
  letter.className = 'paper letter-page';
  letter.innerHTML = `<p class="chapter-label">DEAR YOU · LETTER ${String(current + 1).padStart(2, '0')}</p><h2>${title}</h2><p class="salutation">My love,</p><p class="letter-copy">${first}</p><p class="letter-copy">${second}</p><p class="signature">Always yours,</p><span class="little-heart" aria-hidden="true">♡</span>`;
  const photo = document.createElement('div');
  photo.className = 'paper photo-page';
  const figure = document.createElement('figure');
  figure.className = 'photo-frame';
  const img = document.createElement('img');
  img.src = `assets/photos/${photos[current]}`;
  img.alt = `A cherished photograph from our anniversary collection, ${current + 1} of ${photos.length}`;
  img.decoding = 'async';
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = caption;
  figure.append(img, figcaption);
  photo.append(figure);
  const pages = current % 2 === 0 ? [letter, photo] : [photo, letter];
  pages.forEach((page, side) => {
    const number = document.createElement('span');
    number.className = 'page-number';
    number.textContent = String(current * 2 + side + 1).padStart(2, '0');
    page.append(number);
    const zoom = document.createElement('button');
    zoom.type = 'button';
    zoom.className = 'page-zoom';
    zoom.setAttribute('aria-label', page === photo ? 'Enlarge photo' : 'Enlarge letter');
    zoom.innerHTML = '<span aria-hidden="true">↗ view closer</span>';
    zoom.addEventListener('click', () => enlargePage(page));
    page.append(zoom);
    const turn = document.createElement('button');
    turn.type = 'button';
    turn.className = 'page-turn';
    turn.dataset.side = side;
    const closes = side === 0 && current === 0;
    const lastPage = side === 1 && current === photos.length - 1;
    turn.setAttribute('aria-label', lastPage ? 'Open your anniversary surprise' : closes ? 'Close our anniversary book' : side === 0 ? 'Turn to previous spread' : 'Turn to next spread');
    turn.innerHTML = `<span aria-hidden="true">${lastPage ? 'a surprise →' : closes ? '♡ close' : side === 0 ? '← turn back' : 'turn page →'}</span>`;
    turn.addEventListener('click', () => lastPage ? showFinale() : closes ? closeBook() : turnTo(current + (side === 0 ? -1 : 1)));
    page.append(turn);
  });
  spread.replaceChildren(...pages);
  chapter.textContent = `${String(current + 1).padStart(2, '0')} / ${photos.length}`;
  status.textContent = `Spread ${current + 1} of ${photos.length}: ${title}.`;
  if (current + 1 < photos.length) {
    const upcoming = new Image();
    upcoming.src = `assets/photos/${photos[current + 1]}`;
  }
}
async function turnTo(target) {
  if (!opened || turning || target < 0 || target >= photos.length || target === current) return;
  turning = true;
  const forward = target > current;
  const animate = !matchMedia('(prefers-reduced-motion: reduce)').matches && !matchMedia('(max-width: 540px)').matches;
  let leaf;
  if (animate) {
    leaf = spread.children[forward ? 1 : 0].cloneNode(true);
    leaf.classList.add('turning-page', forward ? 'forward' : 'backward');
    leaf.setAttribute('aria-hidden', 'true');
    leaf.inert = true;
    book.append(leaf);
  }
  current = target;
  render();
  spread.inert = true;
  try {
    if (leaf) await leaf.animate([
      { transform: 'rotateY(0deg)', filter: 'brightness(1)' },
      { transform: `rotateY(${forward ? -180 : 180}deg)`, filter: 'brightness(.87)' }
    ], { duration: 650, easing: 'ease-in-out', fill: 'forwards' }).finished;
  } finally {
    leaf?.remove();
    turning = false;
    spread.inert = false;
    spread.querySelector(`[data-side="${forward ? 1 : 0}"]`).focus({preventScroll:true});
  }
}
document.addEventListener('keydown', (event) => {
  if (viewer.open) return;
  if (!opened) return;
  if (event.key === 'Escape') { closeBook(); return; }
  if (event.target.closest('select, input, textarea') || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    if (event.key === 'ArrowRight' && current === photos.length - 1) { showFinale(); return; }
    turnTo(current + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
const soundtrack = document.getElementById('background-music');
const musicStatus = document.getElementById('music-status');
let musicPausedByUser = false;
soundtrack.volume = 0.45;
async function startMusic(force = false) {
  if (musicPausedByUser && !force) return;
  if (force) musicPausedByUser = false;
  try {
    await soundtrack.play();
  } catch (error) {
    music.setAttribute('aria-pressed', 'false');
    musicLabel.textContent = 'Play our song';
    musicStatus.textContent = error.name === 'NotAllowedError'
      ? 'Open the book or tap anywhere to start our song.'
      : 'The song could not load. Tap Play our song to retry.';
  }
}
soundtrack.addEventListener('playing', () => {
  music.setAttribute('aria-pressed', 'true');
  musicLabel.textContent = 'Pause our song';
  musicStatus.textContent = 'Our anniversary music is playing.';
});
soundtrack.addEventListener('pause', () => {
  music.setAttribute('aria-pressed', 'false');
  musicLabel.textContent = 'Play our song';
});
soundtrack.addEventListener('error', () => {
  musicLabel.textContent = 'Retry our song';
  musicStatus.textContent = 'The music file could not be loaded.';
});
music.addEventListener('click', () => {
  if (!soundtrack.paused) {
    musicPausedByUser = true;
    soundtrack.pause();
  } else {
    if (soundtrack.error) soundtrack.load();
    startMusic(true);
  }
});
// Browsers may require a genuine gesture before allowing audible playback.
function startOnInteraction(event) {
  if (event.target.closest('#music') || musicPausedByUser || !soundtrack.paused) return;
  startMusic();
}
document.addEventListener('click', startOnInteraction);
document.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') startOnInteraction(event);
});
status.textContent = 'A little book of us. Click the cover to open.';
startMusic();
