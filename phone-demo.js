// Scripted, local demonstration: no messages are sent and no systems are connected.
(() => {
  const dialog = document.querySelector('#demo-dialog');
  if (!dialog) return;
  const ui = {
    ru: {
      teaserEyebrow: 'АССИСТЕНТ В ДЕЛЕ', teaserTitle: 'Как идут продажи?<br>Ответ — в одном чате.',
      teaserPlay: 'Открыть демонстрацию', teaserDuration: '30 секунд · без звука',
      modalLabel: 'ОДИН РАБОЧИЙ ДЕНЬ ЗА 30 СЕКУНД', storyEyebrow: 'ВЫ ПОРУЧАЕТЕ. ОН ГОТОВИТ.',
      storyTitle: 'Один диалог.<br><em>Дела под контролем.</em>',
      storyDescription: 'От вопроса о продажах — до готовых задач для команды.',
      phase1: 'Увидеть продажи', phase1Detail: 'Выручка и диаграмма за неделю',
      phase2: 'Найти проблему', phase2Detail: 'Обращения, которые требуют внимания',
      phase3: 'Перейти к действию', phase3Detail: 'Задачи готовы. Подтверждение — за вами.',
      trial: 'Попробовать в своём бизнесе', assistantName: 'Цифровой ассистент',
      exampleLabel: 'Демонстрация · условные данные', today: 'Сегодня', replay: 'Повтор',
      legal: 'Пример сценария. Интеграции подключаются при полном внедрении. Темп демонстрации не отражает реальное время работы.',
      online: 'В сети', typing: 'печатает…', placeholder: 'Сообщение', pause: 'Пауза', resume: 'Продолжить', finished: 'Ещё раз',
      close: 'Закрыть демонстрацию', chat: 'Демонстрационная переписка с ассистентом', progress: 'Ход демонстрации', replayAria: 'Смотреть сначала',
      qSales: 'Как прошла неделя по продажам?', collect: 'Соберу выручку и проверю обращения.',
      qProblem: 'Что требует внимания?', qTasks: 'Подготовь задачи команде на сегодня.',
      reportTitle: 'Выручка за неделю', paid: 'Оплаченные заказы', source: 'CRM + таблица',
      days: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], peak: 'Лучший день', thursday: 'Четверг · 810 тыс. ₸',
      chartLabel: 'Выручка с понедельника по воскресенье: 420, 590, 510, 810, 700, 680 и 570 тысяч тенге. Всего 4 280 000 тенге.',
      insight: 'обращений без ответа.', insightMore: 'Ещё по 4 сделкам пропущен срок связи.',
      tasksTitle: 'Подготовлены 2 задачи', draft: 'Черновик',
      task1: 'Ответить на 9 обращений', task1Who: 'Менеджер · сегодня',
      task2: 'Проверить 4 сделки', task2Who: 'Руководитель · сегодня',
      confirm: 'Добавить задачи в Trello?', waiting: 'Ожидает вашего подтверждения',
      ending: 'Решение остаётся за вами', endingNote: 'Это пример диалога. Можно прокрутить и перечитать.'
    },
    kz: {
      teaserEyebrow: 'АССИСТЕНТ ІС ЖҮЗІНДЕ', teaserTitle: 'Сату қалай жүріп жатыр?<br>Жауабы — бір чатта.',
      teaserPlay: 'Демонстрацияны ашу', teaserDuration: '30 секунд · дыбыссыз',
      modalLabel: '30 СЕКУНДТА БІР ЖҰМЫС КҮНІ', storyEyebrow: 'СІЗ АЙТАСЫЗ. ОЛ ДАЙЫНДАЙДЫ.',
      storyTitle: 'Бір диалог.<br><em>Істер бақылауда.</em>',
      storyDescription: 'Сату туралы сұрақтан — командаға дайын тапсырмаларға дейін.',
      phase1: 'Сатуды көру', phase1Detail: 'Түсім және апталық диаграмма',
      phase2: 'Мәселені анықтау', phase2Detail: 'Назар аударуды қажет ететін өтінімдер',
      phase3: 'Әрекетке көшу', phase3Detail: 'Тапсырмалар дайын. Растау — сізден.',
      trial: 'Өз бизнесімде сынап көру', assistantName: 'Цифрлық ассистент',
      exampleLabel: 'Демонстрация · шартты деректер', today: 'Бүгін', replay: 'Қайта',
      legal: 'Мысал сценарий. Интеграциялар толық енгізу кезінде қосылады. Көрсетілім жылдамдығы нақты жұмыс уақытын білдірмейді.',
      online: 'Желіде', typing: 'жазып жатыр…', placeholder: 'Хабарлама', pause: 'Кідірту', resume: 'Жалғастыру', finished: 'Қайта көру',
      close: 'Демонстрацияны жабу', chat: 'Ассистентпен демонстрациялық диалог', progress: 'Демонстрация барысы', replayAria: 'Басынан көру',
      qSales: 'Апталық сатылымды көрсетші.', collect: 'Түсімді жинақтап, өтінімдерді тексеремін.',
      qProblem: 'Қай мәселеге көңіл бөлу керек?', qTasks: 'Командаға бүгінге тапсырмалар дайында.',
      reportTitle: 'Апталық түсім', paid: 'Төленген тапсырыстар', source: 'CRM + кесте',
      days: ['Дс','Сс','Ср','Бс','Жм','Сб','Жс'], peak: 'Ең табысты күн', thursday: 'Бейсенбі · 810 мың ₸',
      chartLabel: 'Дүйсенбіден жексенбіге дейінгі түсім: 420, 590, 510, 810, 700, 680 және 570 мың теңге. Барлығы 4 280 000 теңге.',
      insight: 'өтінім жауапсыз қалған.', insightMore: 'Тағы 4 мәміле бойынша хабарласу мерзімі өтіп кеткен.',
      tasksTitle: '2 тапсырма дайын', draft: 'Жоба',
      task1: '9 өтінімге жауап беру', task1Who: 'Менеджер · бүгін',
      task2: '4 мәмілені тексеру', task2Who: 'Басшы · бүгін',
      confirm: 'Тапсырмаларды Trello-ға қосайын ба?', waiting: 'Растауыңызды күтемін',
      ending: 'Шешім қабылдау — өзіңізде', endingNote: 'Бұл — диалог мысалы. Жоғары айналдырып, қайта оқуға болады.'
    }
  };
  const events = [
    { at: 1100, role: 'owner', key: 'qSales', typeAt: 0 },
    { at: 4300, role: 'assistant', key: 'collect', typeAt: 2600 },
    { at: 6500, role: 'assistant', card: 'report', typeAt: 5500 },
    { at: 11300, role: 'owner', key: 'qProblem', typeAt: 9600 },
    { at: 14400, role: 'assistant', card: 'insight', typeAt: 12700 },
    { at: 18100, role: 'owner', key: 'qTasks', typeAt: 16400 },
    { at: 21500, role: 'assistant', card: 'tasks', typeAt: 19500 },
    { at: 25600, role: 'assistant', key: 'confirm', typeAt: 24300 },
    { at: 28500, role: 'status' }
  ];
  const duration = 30000;
  const chat = dialog.querySelector('.pd-chat');
  const messages = dialog.querySelector('.pd-messages');
  const typing = dialog.querySelector('.pd-typing');
  const composer = dialog.querySelector('[data-phone-composer]');
  const status = dialog.querySelector('[data-phone-status]');
  const toggle = dialog.querySelector('[data-phone-toggle]');
  const progress = dialog.querySelector('.pd-progress');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let language = document.documentElement.lang === 'ru' ? 'ru' : 'kz';
  let elapsed = 0;
  let playing = false;
  let raf = 0;
  let previousTime = null;
  let shown = 0;
  let opener = null;
  let savedScroll = 0;
  let savedBodyStyle = null;
  let backdropDown = false;
  let followChat = true;
  let lastTouchY = null;
  let lastSecond = -1;

  const copy = () => ui[language];
  function messageContent(event) {
    const t = copy();
    if (event.key) return `<p>${t[event.key]}</p>`;
    if (event.card === 'report') {
      const values = [420, 590, 510, 810, 700, 680, 570];
      return `<div class="pd-card-eyebrow"><span>${t.reportTitle}</span><span>${t.source}</span></div>
        <strong class="pd-revenue">4 280 000 <small>₸</small></strong><span class="pd-revenue-note">${t.paid}</span>
        <div class="pd-chart" role="img" aria-label="${t.chartLabel}">${values.map((n, i) => `<div class="pd-chart-col" aria-hidden="true"><i style="--height:${n / 810 * 100};--i:${i}"></i><span>${t.days[i]}</span></div>`).join('')}</div>
        <div class="pd-chart-summary"><span>${t.peak}</span><strong>${t.thursday}</strong></div>`;
    }
    if (event.card === 'insight') return `<div class="pd-insight"><strong>9</strong><div><p>${t.insight}</p><small>${t.insightMore}</small></div></div>`;
    if (event.card === 'tasks') return `<div class="pd-card-eyebrow"><span>${t.tasksTitle}</span><span>${t.draft}</span></div><ul class="pd-task-list"><li><span class="pd-task-box" aria-hidden="true"></span><p>${t.task1}<small>${t.task1Who}</small></p></li><li><span class="pd-task-box" aria-hidden="true"></span><p>${t.task2}<small>${t.task2Who}</small></p></li></ul>`;
    return `<strong>${t.ending}</strong>${t.waiting}<br>${t.endingNote}`;
  }
  function scrollChat(smooth = true, revealLatest = false) {
    if (!followChat) return;
    const latest = messages.lastElementChild;
    // At large text sizes or on very short screens, show the top of a tall card first.
    const tall = revealLatest && latest && latest.offsetHeight > chat.clientHeight - 20;
    const top = tall ? latest.getBoundingClientRect().top - chat.getBoundingClientRect().top + chat.scrollTop - 10 : chat.scrollHeight;
    chat.scrollTo({ top, behavior: smooth && !reduced.matches ? 'smooth' : 'instant' });
  }
  function appendMessage(event, index, animate = true) {
    const node = document.createElement('div');
    node.dataset.message = String(index);
    node.className = event.role === 'status' ? 'pd-waiting' : `pd-message pd-message--${event.role}${event.card ? ' pd-message--card' : ''}`;
    node.innerHTML = messageContent(event) + (event.role !== 'status' ? `<span class="pd-stamp" aria-hidden="true">09:4${index < 4 ? '1' : '2'}${event.role === 'owner' ? '<span class="pd-ticks">✓✓</span>' : ''}</span>` : '');
    if (!animate) node.style.animation = 'none';
    messages.append(node);
  }
  function refreshControls() {
    const t = copy();
    const ended = elapsed >= duration;
    const running = playing && dialog.open && !document.hidden;
    dialog.dataset.paused = String(!running);
    dialog.dataset.state = !dialog.open ? 'closed' : ended ? 'ended' : playing ? 'playing' : 'paused';
    const label = ended ? t.finished : playing ? t.pause : t.resume;
    toggle.querySelector('[data-phone-toggle-label]').textContent = label;
    toggle.querySelector('[data-phone-toggle-icon]').textContent = ended ? '↺' : playing ? 'Ⅱ' : '▶';
    toggle.setAttribute('aria-label', label);
    const second = Math.min(30, Math.floor(elapsed / 1000));
    if (second !== lastSecond) {
      dialog.querySelector('.pd-clock').textContent = `0:${String(second).padStart(2, '0')} / 0:30`;
      progress.setAttribute('aria-valuenow', String(second));
      lastSecond = second;
    }
    progress.firstElementChild.style.transform = `scaleX(${elapsed / duration})`;
  }
  function renderFrame() {
    let added = false;
    while (shown < events.length && elapsed >= events[shown].at) {
      appendMessage(events[shown], shown);
      shown++;
      added = true;
    }
    const next = events[shown];
    const isTyping = !!next && next.role === 'assistant' && elapsed >= next.typeAt;
    const typingChanged = typing.hidden === isTyping;
    typing.hidden = !isTyping;
    status.textContent = isTyping ? copy().typing : copy().online;
    const writing = !!next && next.role === 'owner' && elapsed >= next.typeAt;
    composer.classList.toggle('is-writing', writing);
    if (writing) {
      const text = Array.from(copy()[next.key]);
      const fraction = reduced.matches ? 1 : Math.min(1, (elapsed - next.typeAt) / (next.at - next.typeAt) * 1.15);
      composer.textContent = text.slice(0, Math.ceil(text.length * fraction)).join('') || copy().placeholder;
    } else composer.textContent = copy().placeholder;
    const phase = elapsed < 11300 ? 0 : elapsed < 18100 ? 1 : 2;
    dialog.querySelectorAll('[data-phase]').forEach((item, index) => {
      item.classList.toggle('is-active', phase === index);
      item.classList.toggle('is-complete', phase > index);
      if (phase === index) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
    if (added || typingChanged) scrollChat(true, added);
    refreshControls();
  }
  function tick(time) {
    raf = 0;
    if (!dialog.open || !playing || document.hidden) { previousTime = null; return; }
    if (previousTime !== null) elapsed = Math.min(duration, elapsed + Math.min(time - previousTime, 100));
    previousTime = time;
    if (elapsed >= duration) playing = false;
    renderFrame();
    if (playing) raf = requestAnimationFrame(tick);
  }
  function schedule() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    previousTime = null;
    refreshControls();
    if (dialog.open && playing && !document.hidden) raf = requestAnimationFrame(tick);
  }
  function restart() {
    elapsed = 0;
    shown = 0;
    lastSecond = -1;
    followChat = true;
    messages.replaceChildren();
    typing.hidden = true;
    playing = true;
    chat.scrollTo({ top: 0, behavior: 'instant' });
    renderFrame();
    schedule();
  }
  function openDemo(event) {
    if (dialog.open) return;
    opener = event.currentTarget;
    savedScroll = window.scrollY;
    savedBodyStyle = document.body.getAttribute('style');
    document.documentElement.classList.add('pd-open');
    Object.assign(document.body.style, { position: 'fixed', top: `-${savedScroll}px`, left: '0', right: '0', width: '100%' });
    dialog.showModal();
    dialog.querySelector('[data-phone-close]').focus({ preventScroll: true });
    restart();
  }
  function closeDemo() { if (dialog.open) dialog.close(); }
  function onClose() {
    playing = false;
    schedule();
    document.documentElement.classList.remove('pd-open');
    if (savedBodyStyle === null) document.body.removeAttribute('style');
    else document.body.setAttribute('style', savedBodyStyle);
    window.scrollTo({ top: savedScroll, behavior: 'instant' });
    opener?.focus({ preventScroll: true });
  }
  function pauseToRead() {
    if (!dialog.open || !playing) return;
    playing = false;
    followChat = false;
    chat.scrollTo({ top: chat.scrollTop, behavior: 'instant' });
    schedule();
  }
  function localize() {
    language = document.documentElement.lang === 'ru' ? 'ru' : 'kz';
    const t = copy();
    document.querySelectorAll('[data-phone-copy]').forEach(element => { element.innerHTML = t[element.dataset.phoneCopy]; });
    dialog.querySelector('[data-phone-close]').setAttribute('aria-label', t.close);
    dialog.querySelector('[data-phone-replay]').setAttribute('aria-label', t.replayAria);
    typing.setAttribute('aria-label', t.typing);
    chat.setAttribute('aria-label', t.chat);
    progress.setAttribute('aria-label', t.progress);
    const previousPosition = chat.scrollTop;
    messages.replaceChildren();
    for (let i = 0; i < shown; i++) appendMessage(events[i], i, false);
    chat.scrollTop = previousPosition;
    lastSecond = -1;
    renderFrame();
  }
  document.querySelectorAll('[data-demo-open]').forEach(button => button.addEventListener('click', openDemo));
  dialog.querySelector('[data-phone-close]').addEventListener('click', closeDemo);
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDemo(); });
  dialog.addEventListener('close', onClose);
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')]
      .filter(element => element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  });
  dialog.addEventListener('pointerdown', event => { backdropDown = event.target === dialog; });
  dialog.addEventListener('click', event => {
    if (!backdropDown || event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDemo();
  });
  toggle.addEventListener('click', () => {
    if (elapsed >= duration) restart();
    else { playing = !playing; if (playing) { followChat = true; scrollChat(); } schedule(); }
  });
  dialog.querySelector('[data-phone-replay]').addEventListener('click', restart);
  chat.addEventListener('wheel', pauseToRead, { passive: true });
  chat.addEventListener('touchstart', event => { lastTouchY = event.touches[0]?.clientY ?? null; }, { passive: true });
  chat.addEventListener('touchmove', event => { if (lastTouchY !== null && Math.abs((event.touches[0]?.clientY ?? lastTouchY) - lastTouchY) > 6) pauseToRead(); }, { passive: true });
  chat.addEventListener('keydown', event => { if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) pauseToRead(); });
  document.addEventListener('visibilitychange', schedule);
  document.addEventListener('proposal:language', localize);
  reduced.addEventListener('change', () => { if (reduced.matches && dialog.open) { playing = false; schedule(); } });
  localize();
})();
