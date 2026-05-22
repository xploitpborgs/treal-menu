const menuSearch = document.getElementById('menu-search');
const menuContentContainer = document.getElementById('menu-content-container');
const noResultsMessage = document.getElementById('no-results-msg');
const welcomeScreen = document.getElementById('welcome-screen');
const detailPage = document.getElementById('detail-page');
const topNav = document.getElementById('top-nav');
const navCategoryTitle = document.getElementById('nav-category-title');
const qrPanel = document.getElementById('qr-panel');
const qrCodeContainer = document.getElementById('qrcode-admin');

// Switcher & Selection Elements
const switcherContainer = document.getElementById('category-switcher-container');
const categorySwitcher = document.getElementById('category-switcher');
const floatingSelectionBtn = document.getElementById('floating-selection-btn');
const selectionCount = document.getElementById('selection-count');
const selectionDrawer = document.getElementById('selection-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const selectionItemsContainer = document.getElementById('selection-items-container');
const selectionTotal = document.getElementById('selection-total');
const clearSelectionBtn = document.getElementById('clear-selection-btn');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const closeDrawerAction = document.getElementById('close-drawer-action');

// Breadcrumb Elements
const breadcrumbCategory = document.getElementById('breadcrumb-category');
const breadcrumbNav = document.getElementById('breadcrumb-nav');

// Category Navigation Drawer (hamburger)
const catNavDrawer = document.getElementById('cat-nav-drawer');
const catNavOverlay = document.getElementById('cat-nav-overlay');
const catNavLinks = document.getElementById('cat-nav-links');

// Active category tracker
let currentCategory = '';

// Selection State
let selection = [];

/* ─────────────────────────────────────────────
   Allergen Parsing & Formatter
───────────────────────────────────────────── */
function formatItemName(rawName) {
  const codes = [];
  const allowedAllergens = ['N', 'D', 'E', 'F', 'SH', 'G', 'GF', 'S', 'SE', 'V'];
  const clean = rawName.replace(/\(([^)]+)\)/g, (match, code) => {
    const trimmedCode = code.trim();
    if (allowedAllergens.includes(trimmedCode)) {
      codes.push(trimmedCode);
      return '';
    }
    return match;
  }).trim();
  const badges = codes.map((code) => `<span class="allergen-tag">${code}</span>`).join('');
  return `${clean}${badges}`;
}

/* ─────────────────────────────────────────────
   Price Helpers
───────────────────────────────────────────── */
function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const clean = priceStr.replace(/[^\d]/g, '');
  return parseInt(clean, 10) || 0;
}

function formatPrice(number) {
  return '₦' + number.toLocaleString('en-US');
}



/* ─────────────────────────────────────────────
   Selection State Management
───────────────────────────────────────────── */
function loadSelection() {
  const saved = localStorage.getItem('treal_menu_selection');
  if (saved) {
    try {
      selection = JSON.parse(saved);
    } catch (e) {
      selection = [];
    }
  }
  updateSelectionUI();
}

function saveSelection() {
  localStorage.setItem('treal_menu_selection', JSON.stringify(selection));
  updateSelectionUI();
}

function addToSelection(name, variant, priceStr) {
  const price = parsePrice(priceStr);
  const id = `${name}-${variant || ''}`;
  
  const existing = selection.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    selection.push({
      id,
      name,
      variant,
      price,
      quantity: 1
    });
  }
  saveSelection();
  animateFloatingButton();
}

function updateQuantity(id, delta) {
  const item = selection.find(item => item.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      selection = selection.filter(i => i.id !== id);
    }
    saveSelection();
  }
}

function clearSelection() {
  selection = [];
  saveSelection();
}

function animateFloatingButton() {
  if (floatingSelectionBtn) {
    floatingSelectionBtn.classList.remove('scale-100', 'is-visible');
    void floatingSelectionBtn.offsetWidth; // Trigger reflow
    floatingSelectionBtn.classList.add('is-visible', 'scale-110');
    setTimeout(() => {
      floatingSelectionBtn.classList.remove('scale-110');
    }, 200);
  }
}

function updateSelectionUI() {
  const totalQty = selection.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = selection.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (selectionCount) {
    selectionCount.textContent = totalQty;
  }
  
  if (floatingSelectionBtn) {
    if (totalQty > 0) {
      floatingSelectionBtn.classList.add('is-visible');
      floatingSelectionBtn.classList.remove('scale-0');
    } else {
      floatingSelectionBtn.classList.remove('is-visible');
      floatingSelectionBtn.classList.add('scale-0');
      closeDrawer();
    }
  }
  
  if (selectionItemsContainer) {
    if (selection.length === 0) {
      selectionItemsContainer.innerHTML = `
        <div class="text-center py-16 text-warm-brown/60 font-gelasio text-[15px]">
          Your selection is empty
        </div>
      `;
    } else {
      selectionItemsContainer.innerHTML = selection.map(item => `
        <div class="flex items-center justify-between border-b border-primary/5 pb-3">
          <div class="flex-grow pr-4">
            <h5 class="text-[15px] font-gelasio-semibold text-on-surface leading-tight">${formatItemName(item.name)}</h5>
            ${item.variant ? `<span class="text-[11px] text-warm-brown font-lato mt-0.5 block">${item.variant}</span>` : ''}
            <span class="block text-[12px] text-primary font-lato mt-1">${formatPrice(item.price * item.quantity)}</span>
          </div>
          <div class="flex items-center border border-primary/20 rounded overflow-hidden h-8 bg-background flex-shrink-0">
            <button class="px-2.5 text-primary hover:bg-primary/5 transition-colors decrement-btn font-bold font-lato focus:outline-none cursor-pointer" data-id="${item.id}">-</button>
            <span class="px-3 text-[12px] text-on-surface font-bold font-lato min-w-[20px] text-center">${item.quantity}</span>
            <button class="px-2.5 text-primary hover:bg-primary/5 transition-colors increment-btn font-bold font-lato focus:outline-none cursor-pointer" data-id="${item.id}">+</button>
          </div>
        </div>
      `).join('');
      
      // Bind increment/decrement buttons
      selectionItemsContainer.querySelectorAll('.decrement-btn').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn.dataset.id, -1));
      });
      selectionItemsContainer.querySelectorAll('.increment-btn').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn.dataset.id, 1));
      });
    }
  }
  
  if (selectionTotal) {
    selectionTotal.textContent = formatPrice(totalPrice);
  }
}

function openDrawer() {
  if (selectionDrawer) {
    selectionDrawer.classList.remove('pointer-events-none');
    selectionDrawer.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }
}

function closeDrawer() {
  if (selectionDrawer) {
    selectionDrawer.classList.remove('is-visible');
    selectionDrawer.classList.add('pointer-events-none');
    document.body.style.overflow = '';
  }
}

/* ─────────────────────────────────────────────
   Category Navigation Drawer (hamburger)
───────────────────────────────────────────── */
function openCategoryNav() {
  if (!catNavDrawer) return;
  renderCategoryNavLinks(currentCategory);
  catNavDrawer.classList.remove('pointer-events-none');
  catNavDrawer.setAttribute('aria-hidden', 'false');
  catNavDrawer.classList.add('is-visible');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeCategoryNav() {
  if (!catNavDrawer) return;
  catNavDrawer.classList.remove('is-visible');
  catNavDrawer.setAttribute('aria-hidden', 'true');
  setTimeout(() => catNavDrawer.classList.add('pointer-events-none'), 300);
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function renderCategoryNavLinks(activeCategory) {
  if (!catNavLinks) return;
  const categories = Object.keys(menuData);
  catNavLinks.innerHTML = categories.map(cat => {
    const isActive = cat === activeCategory;
    return `
      <button class="cat-nav-item${isActive ? ' is-active' : ''}" data-nav-cat="${cat}">
        <span class="cat-nav-item-name">${cat}</span>
        <span class="material-symbols-outlined cat-nav-item-check">check_circle</span>
      </button>
    `;
  }).join('');

  catNavLinks.querySelectorAll('[data-nav-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.navCat;
      closeCategoryNav();
      if (target !== currentCategory) {
        showCategory(target);
      }
    });
  });
}

/* ─────────────────────────────────────────────
   Category Switcher & Anchors UI
───────────────────────────────────────────── */
function renderCategorySwitcher(activeCategory) {
  if (!categorySwitcher || !switcherContainer) return;
  
  switcherContainer.classList.remove('hidden');
  
  const categories = Object.keys(menuData);
  categorySwitcher.innerHTML = categories.map(cat => {
    const isActive = cat === activeCategory;
    const btnClass = isActive 
      ? 'category-tab text-[11px] md:text-[12px] uppercase tracking-[2px] font-bold py-3 text-primary border-b-2 border-primary flex-shrink-0 cursor-pointer focus:outline-none'
      : 'category-tab text-[11px] md:text-[12px] uppercase tracking-[2px] font-bold py-3 text-on-surface-variant hover:text-primary transition-colors flex-shrink-0 cursor-pointer focus:outline-none';
    return `<button class="${btnClass}" data-switcher-cat="${cat}">${cat}</button>`;
  }).join('');
  
  categorySwitcher.querySelectorAll('[data-switcher-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.dataset.switcherCat;
      if (targetCat !== activeCategory) {
        showCategory(targetCat);
      }
    });
    
    if (btn.dataset.switcherCat === activeCategory) {
      setTimeout(() => {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }, 50);
    }
  });
}


/* ─────────────────────────────────────────────
   Menu Rendering
───────────────────────────────────────────── */
function renderTableSection(section) {
  return `
    <div class="w-full overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-primary/20">
            <th class="text-[10px] font-label-caps text-primary tracking-[3px] pb-3 pr-4 font-lato-bold">ITEM</th>
            <th class="text-[10px] font-label-caps text-primary tracking-[3px] pb-3 text-right px-4 font-lato-bold">BOTTLE</th>
            <th class="text-[10px] font-label-caps text-primary tracking-[3px] pb-3 text-right pl-4 font-lato-bold">TOT / GLASS</th>
          </tr>
        </thead>
        <tbody>
          ${section.items.map((item) => {
            const hasBottle = item.bottle && item.bottle !== '—';
            const hasTot = item.tot && item.tot !== '—';
            
            const bottleHtml = hasBottle ? `
              <div class="flex items-center justify-end gap-2">
                <span class="font-lato">${item.bottle}</span>
                <button class="add-to-selection-btn text-[9px] tracking-[1px] uppercase font-bold text-primary border border-primary/20 hover:bg-primary hover:text-white px-2 py-0.5 transition-all duration-200 cursor-pointer focus:outline-none" 
                  data-item-name="${item.name.replace(/"/g, '&quot;')}" 
                  data-variant-name="Bottle" 
                  data-price="${item.bottle}">+ ADD</button>
              </div>
            ` : '—';
            
            const totHtml = hasTot ? `
              <div class="flex items-center justify-end gap-2">
                <span class="font-lato">${item.tot}</span>
                <button class="add-to-selection-btn text-[9px] tracking-[1px] uppercase font-bold text-primary border border-primary/20 hover:bg-primary hover:text-white px-2 py-0.5 transition-all duration-200 cursor-pointer focus:outline-none" 
                  data-item-name="${item.name.replace(/"/g, '&quot;')}" 
                  data-variant-name="Tot / Glass" 
                  data-price="${item.tot}">+ ADD</button>
              </div>
            ` : '—';
            
            return `
              <tr class="menu-item border-b border-primary/5 cursor-default text-[14px]" data-name="${item.name.toLowerCase()}" data-desc="">
                <td class="py-3 pr-4 text-[16px] text-on-surface font-gelasio-semibold">${formatItemName(item.name)}</td>
                <td class="py-3 px-4 text-right text-[11px] text-primary whitespace-nowrap font-lato ${!hasBottle ? 'is-empty' : ''}">${bottleHtml}</td>
                <td class="py-3 pl-4 text-right text-[11px] text-primary whitespace-nowrap font-lato ${!hasTot ? 'is-empty' : ''}">${totHtml}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderItemVariants(parentItem, variants) {
  if (!variants || variants.length === 0) {
    return '';
  }

  return `
    <div class="pl-4 md:pl-6 mt-3 space-y-2 border-l border-primary/20">
      ${variants.map((variant) => `
        <div class="menu-grid-row">
          <span class="text-[13px] text-on-surface-variant font-lato">${variant.name}</span>
          <div class="flex items-center gap-3">
            <span class="text-[11px] text-primary whitespace-nowrap text-right menu-price font-lato">${variant.price}</span>
            <button class="add-to-selection-btn text-[10px] tracking-[1px] uppercase font-bold text-primary border border-primary/20 hover:bg-primary hover:text-white px-2.5 py-1 transition-all duration-200 cursor-pointer focus:outline-none" 
              data-item-name="${parentItem.name.replace(/"/g, '&quot;')}" 
              data-variant-name="${variant.name.replace(/"/g, '&quot;')}" 
              data-price="${variant.price}">+ ADD</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderStandardSection(section) {
  return `
    <div class="space-y-0">
      ${section.items.map((item) => {
        const priceHtml = item.price ? `
          <div class="flex items-center gap-3">
            <span class="text-[11px] text-primary whitespace-nowrap text-right menu-price font-lato">${item.price}</span>
            <button class="add-to-selection-btn text-[10px] tracking-[1px] uppercase font-bold text-primary border border-primary/20 hover:bg-primary hover:text-white px-2.5 py-1 transition-all duration-200 cursor-pointer focus:outline-none" 
              data-item-name="${item.name.replace(/"/g, '&quot;')}" 
              data-variant-name="" 
              data-price="${item.price}">+ ADD</button>
          </div>
        ` : '';
        
        return `
          <article class="menu-item py-4 border-b border-primary/5 px-2 -mx-2 cursor-default" data-name="${item.name.toLowerCase()}" data-desc="${(item.desc || '').toLowerCase()}">
            <div class="menu-grid-row w-full mb-1">
              <h4 class="text-[20px] text-on-surface leading-snug font-gelasio-semibold">${formatItemName(item.name)}</h4>
              ${priceHtml}
            </div>
            ${item.desc ? `<p class="text-[12px] text-warm-brown max-w-2xl mt-1 font-lato">${item.desc}</p>` : ''}
            ${renderItemVariants(item, item.variants)}
          </article>
        `;
      }).join('')}
    </div>
  `;
}

function renderMenu(categoryName) {
  Array.from(menuContentContainer.children).forEach((child) => {
    if (child.id !== 'no-results-msg') {
      menuContentContainer.removeChild(child);
    }
  });

  noResultsMessage.classList.add('hidden');

  const data = menuData[categoryName] || [];

  if (data.length === 0) {
    const message = document.createElement('div');
    message.className = 'text-center py-12 text-warm-brown text-[20px] font-gelasio';
    message.textContent = 'Menu coming soon.';
    menuContentContainer.appendChild(message);
    return;
  }

  data.forEach((section) => {
    const sectionElement = document.createElement('section');
    sectionElement.className = 'menu-section mb-14';
    
    const sectionId = `section-${section.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    sectionElement.id = sectionId;

    const header = `
      <div class="mb-6 flex items-center">
        <h3 class="text-[11px] font-label-caps text-primary tracking-[4px] font-lato-bold">${section.category}</h3>
        <div class="ml-4 flex-grow h-[1px] bg-primary/20"></div>
      </div>
    `;

    const content = section.isTable
      ? renderTableSection(section)
      : renderStandardSection(section);

    sectionElement.innerHTML = header + content;
    menuContentContainer.appendChild(sectionElement);
  });

  if (categoryName === 'Beverages') {
    const note = document.createElement('div');
    note.className = 'mt-12 text-center text-[10px] text-on-surface-variant font-lato';
    note.textContent = 'All beverage prices are subject to change due to market conditions.';
    menuContentContainer.appendChild(note);
  }

  bindAddToSelectionButtons();
}

function bindAddToSelectionButtons() {
  document.querySelectorAll('.add-to-selection-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemName = btn.dataset.itemName;
      const variantName = btn.dataset.variantName;
      const price = btn.dataset.price;
      addToSelection(itemName, variantName, price);
    });
  });
}

/* ─────────────────────────────────────────────
   Filtering
───────────────────────────────────────────── */
function filterMenuItems() {
  const term = menuSearch.value.toLowerCase().trim();
  
  if (term !== '') {
    menuSearch.classList.add('has-text');
    if (topNav) topNav.classList.add('search-active');
    const searchIcon = document.getElementById('search-icon');
    if (searchIcon) searchIcon.textContent = 'close';
  } else {
    menuSearch.classList.remove('has-text');
    if (document.activeElement !== menuSearch) {
      if (topNav) topNav.classList.remove('search-active');
      const searchIcon = document.getElementById('search-icon');
      if (searchIcon) searchIcon.textContent = 'search';
    }
  }

  const items = document.querySelectorAll('.menu-item');
  const sections = document.querySelectorAll('.menu-section');
  let hasVisible = false;

  items.forEach((item) => {
    const name = item.getAttribute('data-name') || '';
    const desc = item.getAttribute('data-desc') || '';
    const match = name.includes(term) || desc.includes(term);

    item.style.display = match ? '' : 'none';
    if (match) {
      hasVisible = true;
    }
  });

  sections.forEach((section) => {
    const sectionItems = section.querySelectorAll('.menu-item');
    const anyVisible = Array.from(sectionItems).some((item) => item.style.display !== 'none');
    section.style.display = sectionItems.length > 0 && !anyVisible ? 'none' : '';
  });

  if (!hasVisible && term !== '') {
    noResultsMessage.classList.remove('hidden');
  } else {
    noResultsMessage.classList.add('hidden');
  }
}

/* ─────────────────────────────────────────────
   Navigation Flow
───────────────────────────────────────────── */
function showCategory(name, pushState = true) {
  if (pushState) {
    history.pushState({ category: name }, '', '/' + slugify(name));
  }
  currentCategory = name;
  navCategoryTitle.textContent = name;
  if (breadcrumbCategory) breadcrumbCategory.textContent = name;
  menuSearch.value = '';
  menuSearch.classList.remove('has-text');
  if (topNav) {
    topNav.classList.remove('search-active');
    const searchIcon = document.getElementById('search-icon');
    if (searchIcon) searchIcon.textContent = 'search';
  }
  
  renderCategorySwitcher(name);
  renderMenu(name);

  welcomeScreen.style.opacity = '0';
  setTimeout(() => {
    welcomeScreen.classList.add('hidden');
    detailPage.classList.remove('hidden');
    topNav.classList.remove('hidden');
    
    // Adjust top padding dynamically to fit the category switcher and sub-anchors
    const containerHeight = switcherContainer ? switcherContainer.offsetHeight : 0;
    detailPage.style.paddingTop = `${80 + containerHeight + 24}px`;
    
    void detailPage.offsetWidth;
    detailPage.style.opacity = '1';
    window.scrollTo(0, 0);
  }, 400);
}

function showWelcomeScreen(pushState = true) {
  if (pushState) {
    history.pushState({ category: null }, '', '/');
  }
  detailPage.style.opacity = '0';
  setTimeout(() => {
    detailPage.classList.add('hidden');
    if (topNav) {
      topNav.classList.add('hidden');
      topNav.classList.remove('search-active');
      const searchIcon = document.getElementById('search-icon');
      if (searchIcon) searchIcon.textContent = 'search';
    }
    
    if (switcherContainer) {
      switcherContainer.classList.add('hidden');
    }
    
    welcomeScreen.classList.remove('hidden');
    void welcomeScreen.offsetWidth;
    welcomeScreen.style.opacity = '1';
    window.scrollTo(0, 0);
  }, 400);
}

/* ─────────────────────────────────────────────
   QR Code Panel (Admin)
───────────────────────────────────────────── */
function downloadQrCode() {
  const canvas = qrCodeContainer.querySelector('canvas');
  if (!canvas) return;

  const anchor = document.createElement('a');
  anchor.download = 'refresh-menu-qr.png';
  anchor.href = canvas.toDataURL('image/png');
  anchor.click();
}

function initQrAdmin() {
  if (window.location.hash !== '#admin' || !qrPanel) {
    return;
  }

  qrPanel.classList.add('is-visible');

  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
  script.onload = function onLoad() {
    new QRCode(qrCodeContainer, {
      text: window.location.origin + window.location.pathname.replace('index.html', ''),
      width: 256,
      height: 256,
      colorDark: '#A31E21',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  };
  document.head.appendChild(script);
}

/* ─────────────────────────────────────────────
   Event Binding
───────────────────────────────────────────── */
function bindEvents() {
  // Category clicks
  document.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      showCategory(button.dataset.category);
    });
  });

  // Search input
  menuSearch.addEventListener('input', filterMenuItems);

  // Search focus & blur states
  menuSearch.addEventListener('focus', () => {
    if (topNav) topNav.classList.add('search-active');
    const searchIcon = document.getElementById('search-icon');
    if (searchIcon) searchIcon.textContent = 'close';
  });

  menuSearch.addEventListener('blur', () => {
    if (!menuSearch.value.trim()) {
      if (topNav) topNav.classList.remove('search-active');
      const searchIcon = document.getElementById('search-icon');
      if (searchIcon) searchIcon.textContent = 'search';
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (selectionDrawer && selectionDrawer.classList.contains('is-visible')) {
        closeDrawer();
        return;
      }
      menuSearch.value = '';
      filterMenuItems();
      menuSearch.blur();
    }
  });

  // Search icon click/close
  const searchIcon = document.getElementById('search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', () => {
      if (topNav && topNav.classList.contains('search-active')) {
        menuSearch.value = '';
        filterMenuItems();
        menuSearch.blur();
      } else {
        menuSearch.focus();
      }
    });
  }

  // Back button (desktop)
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', showWelcomeScreen);
  }

  // Hamburger: open category nav drawer (mobile)
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openCategoryNav);
  }

  // Close category nav drawer
  const closeCatNavBtn = document.getElementById('close-cat-nav-btn');
  if (closeCatNavBtn) closeCatNavBtn.addEventListener('click', closeCategoryNav);
  if (catNavOverlay) catNavOverlay.addEventListener('click', closeCategoryNav);

  // Category nav: go home
  const catNavHomeBtn = document.getElementById('cat-nav-home-btn');
  if (catNavHomeBtn) {
    catNavHomeBtn.addEventListener('click', () => {
      closeCategoryNav();
      showWelcomeScreen();
    });
  }

  // QR actions
  const dlQr = document.getElementById('download-qr-btn');
  if (dlQr) dlQr.addEventListener('click', downloadQrCode);

  const closeQr = document.getElementById('close-qr-btn');
  if (closeQr) {
    closeQr.addEventListener('click', () => {
      qrPanel.classList.remove('is-visible');
    });
  }



  // Drawer controls
  if (floatingSelectionBtn) floatingSelectionBtn.addEventListener('click', openDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (closeDrawerAction) closeDrawerAction.addEventListener('click', closeDrawer);
  if (clearSelectionBtn) clearSelectionBtn.addEventListener('click', clearSelection);
}

// URL Routing Logic
function slugify(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
}

function getCategoryFromSlug(slug) {
  for (let i = 0; i < menuData.length; i++) {
    if (slugify(menuData[i].category) === slug) {
      return menuData[i].category;
    }
  }
  return null;
}

function handleInitialRoute() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (path && path !== 'index.html') {
    const matchedCategory = getCategoryFromSlug(path);
    if (matchedCategory) {
      // Small timeout ensures DOM layout completes before transition
      setTimeout(() => {
        showCategory(matchedCategory, false);
      }, 100);
    } else {
      history.replaceState({ category: null }, '', '/');
    }
  } else {
    history.replaceState({ category: null }, '', '/');
  }
}

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.category) {
    showCategory(e.state.category, false);
  } else {
    showWelcomeScreen(false);
  }
});

// Initializations
loadSelection();
bindEvents();
initQrAdmin();
handleInitialRoute();
