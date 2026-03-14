// ==UserScript==
// @name         Paywall Bypass Script
// @namespace    https://tampermonkey.net/
// @version      2.0.0
// @description  Smart paywall helper with quick-try routing, paywall detection, local reliability tracking, shortcuts, and mobile-friendly controls.
// @author       sharmanhall
// @license      MIT
// @homepageURL  https://github.com/tyhallcsu/paywall-bypass-script
// @supportURL   https://github.com/tyhallcsu/paywall-bypass-script/issues
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABIUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKuErJsAAAAXdFJOUwAQIDBAUF9gb3B/gI+Qn6CvsL/P0N/vIiFUiwAABbVJREFUeJztW9m2mzAMNNvlkhR64xR04P9/ac0wIXmZABtqnzFvAWLakkeQl5oMPPvjggw8++OBilFXTtm3b1nVp/jeKtn9O4uH509XmWtT9JALfVLenIExDY66Cky7yTN8UrRWO8fsKa7yki8gjflXcJtnGeDPnsEoXkXv0st0TLyIynnCGQLqIhDYtt5Tv46ASYukiUvnvvzXTn/FTmFwA6RKQoPiRDDzzRoClByQoR8lCxgiY9IAEufJFBqPChnSfBPnyRTqzi23pHgmOyJdpJyTtSl9JUByRv20EjfSVBL/kGCqDoZT+JkErB9Fj+TiTIcwkKPXxJ8KEqShqzCT4zRs8h2GwGw4Ck0IlajgSUANM99cEa6pTaING1HBOxCboh/s7aTOiAfSihtlQQJioWZ5ATqBNqS8SEPVGhUJBHBXFojwS1PhVotsHbgdqxELUuHMKJDMjlmrTAZApITTUBVPvLgUCDKATNSo63NS0RLFgAHkkwK1RlhEIMABEAvsHffyklEEBTiCAE8Z8mfqmwD78AK0dUHghJqi3G062mzMmpOadhe2HSUECfJqQV68a+/odp+DHDfNBVGuRAJ82nEkw2c53ZDz8irEbuQCOF2Bp2YdTn4GHb4zpRgBYcON4Aehy70rwEH0MRs9B4oV2tU5JoAaJ2NrFCSOBGiQQW6MD5nDOZgdRQGt0wAZkNTUAUQCshxBwfjJ6kBrnl1ECZpwMEnwLhnq3CE5ATwK2btB78XTqc7ZwHNUKOEkCtnDUUuAsCW6CoY0BZ0nA5E8Z+5VnSPAlBIrtkTdOkIDKV24QzThOAip/zNmkw9WIhgRUfo4DsGpEQQIqPyuPsaX1/ndcfk4iZ9XIPgmI/NEOOQQwrBrZJQHiv1ti5EMQ9rQI5I/tEekHSZDKn3IV/8YREgxJ+/H4SREkwbT1RZHK/1O8X1buIDGjnoMk2EplRbqUXuQXtzWsqyuqXBKUqfyX/sMDtU0lesDVCPcotHFfojdaDeBqhJ67IfkzZasop2kLElyNMB+qgPw58yUj0yZkWI0w+1Uoc8+1XzIybUKA1QhR3xesHJwHpBsJzo2+hzdYmIR9YhLg9DO3TU3jYqlHMYORQQJSfjoLBAqwXVVWjVPM+pCRQk8CVv46f/Wjmbce8PIMiyxqEiD5bds281jJeXuDH/vQkmAAzVatejMNluRe7yy96khQDNvNvJkGqvZ6Z5FFRYIC7uR6Wu3Qw6B3GllgzxEJSizf0ypRtUcxFphxNRKSgJ4bO6321lrr6fFprbX2x9ystV4UmNzjlF24JA/sxc+t3Wu8OWFxlk8dAVYjgb0qKt+RgGyS97jUNQngOH17VfzY1rkb2SHtoHMBR4BfeyT42pHPDoBq6FxpNNwjAV99LXQjB0AFdK40xeyQgIV/j+54h3DCzpVLAoX8PBKkJcEmCTbk/9S1V/mzeOOZh9WYWySA4d/D6lE1ehiah5RDmMTzqeiefJwJAjdbzZNXjbhO9k+Y16Dv7dX7qlZkgo0jqf0T5tUHiKq9LshlFkJi14nuhHn21zjpvszjdZFVjcyd6E6YnWqr9HdjdCSAJJ7tpbtm4VY/XjTrX78rc5oEumsWzl/v6e9oegdIoLxr5FT7SH7HiTqvJHedKO8aOdU+k99OoDe9rJJ87kR312hx+gWuJC8uIQG7mBQCkqBOSZBVks8kIJdyIixOH/xuX1b0pkfkYzvPJNCxMCbBMnNnxXMk0F3gi0nwor+WBNjOrlPlZaeYBK+xL66wgJEA29l1qrvstDj9gmXmiyssyNy9zwSrRjz9slx4Ddi61BvA1FZlmbF3mwe2BRCH2YxzzDywLYA4lmad4+XAI2zwPCbSv/LEmAQrolh2+DxjB4wECZWv+/tNCFaSJ4Hu6v8gLdgq/IIRXPHnH4TNwq9cL/tqjy+uRtnc+2G4t/8sDH2Qi78rE2kubw+WUAAAAABJRU5ErkJggg==
// @match       *://*.adelaidenow.com.au/*
// @match       *://*.adweek.com/*
// @match       *://*.afr.com/*
// @match       *://*.ambito.com/*
// @match       *://*.americanbanker.com/*
// @match       *://*.ampproject.org/*
// @match       *://*.apnews.com/*
// @match       *://*.arstechnica.com/*
// @match       *://*.avclub.com/*
// @match       *://*.axios.com/*
// @match       *://*.baltimoresun.com/*
// @match       *://*.barrons.com/*
// @match       *://*.bbc.co.uk/*
// @match       *://*.bizjournals.com/*
// @match       *://*.bloomberg.com/*
// @match       *://*.bloombergquint.com/*
// @match       *://*.bostonglobe.com/*
// @match       *://*.brisbanetimes.com.au/*
// @match       *://*.britannica.com/*
// @match       *://*.businessinsider.com/*
// @match       *://*.buzzfeed.com/*
// @match       *://*.buzzfeednews.com/*
// @match       *://*.caixinglobal.com/*
// @match       *://*.cbsnews.com/*
// @match       *://*.cen.acs.org/*
// @match       *://*.centralwesterndaily.com.au/*
// @match       *://*.chicagobusiness.com/*
// @match       *://*.chicagotribune.com/*
// @match       *://*.clickhole.com/*
// @match       *://*.cnbc.com/*
// @match       *://*.cnn.com/*
// @match       *://*.corriere.it/*
// @match       *://*.courant.com/*
// @match       *://*.couriermail.com.au/*
// @match       *://*.crunchbase.com/*
// @match       *://*.dailybeast.com/*
// @match       *://*.dailymail.co.uk/*
// @match       *://*.dailypress.com/*
// @match       *://*.dailytelegraph.com.au/*
// @match       *://*.deadline.com/*
// @match       *://*.deadspin.com/*
// @match       *://*.delfi.ee/*
// @match       *://*.demorgen.be/*
// @match       *://*.denverpost.com/*
// @match       *://*.df.cl/*
// @match       *://*.discovermagazine.com/*
// @match       *://*.dynamed.com/*
// @match       *://*.economist.com/*
// @match       *://*.elmercurio.com/*
// @match       *://*.elmundo.es/*
// @match       *://*.elpais.com/*
// @match       *://*.elu24.ee/*
// @match       *://*.engadget.com/*
// @match       *://*.english.elpais.com/*
// @match       *://*.entertainment.ie/*
// @match       *://*.entreprenal.com/*
// @match       *://*.espn.com/*
// @match       *://*.ew.com/*
// @match       *://*.examiner.com.au/*
// @match       *://*.expansion.com/*
// @match       *://*.faz.net/*
// @match       *://*.fd.nl/*
// @match       *://*.financialpost.com/*
// @match       *://*.fnlondon.com/*
// @match       *://*.forbes.pl/*
// @match       *://*.foreignpolicy.com/*
// @match       *://*.fortune.com/*
// @match       *://*.foxnews.com/*
// @match       *://*.ft.com/*
// @match       *://*.gelocal.it/*
// @match       *://*.genomeweb.com/*
// @match       *://*.gizmodo.com/*
// @match       *://*.glassdoor.com/*
// @match       *://*.globes.co.il/*
// @match       *://*.google.com/news/*
// @match       *://*.groene.nl/*
// @match       *://*.haaretz.co.il/*
// @match       *://*.haaretz.com/*
// @match       *://*.harpers.org/*
// @match       *://*.hbr.org/*
// @match       *://*.hbrchina.org/*
// @match       *://*.heraldsun.com.au/*
// @match       *://*.historyextra.com/*
// @match       *://*.hollywoodreporter.com/*
// @match       *://*.huffpost.com/*
// @match       *://*.humo.be/*
// @match       *://*.ilmanifesto.it/*
// @match       *://*.inc.com/*
// @match       *://*.independent.co.uk/*
// @match       *://*.independent.ie/*
// @match       *://*.inkl.com/*
// @match       *://*.inquirer.com/*
// @match       *://*.insight.kontan.co.id/*
// @match       *://*.interest.co.nz/*
// @match       *://*.investorschronicle.co.uk/*
// @match       *://*.ipolitics.ca/*
// @match       *://*.irishtimes.com/*
// @match       *://*.jalopnik.com/*
// @match       *://*.japantimes.co.jp/*
// @match       *://*.jezebel.com/*
// @match       *://*.journalnow.com/*
// @match       *://*.kansascity.com/*
// @match       *://*.kotaku.com/*
// @match       *://*.labusinessjournal.com/*
// @match       *://*.lanacion.com.ar/*
// @match       *://*.lastampa.it/*
// @match       *://*.latercera.com/*
// @match       *://*.latimes.com/*
// @match       *://*.lavoixdunord.fr/*
// @match       *://*.lecho.be/*
// @match       *://*.leparisien.fr/*
// @match       *://*.lesechos.fr/*
// @match       *://*.lifehacker.com/*
// @match       *://*.loebclassics.com/*
// @match       *://*.lrb.co.uk/*
// @match       *://*.marketwatch.com/*
// @match       *://*.mcall.com/*
// @match       *://*.medium.com/*
// @match       *://*.medscape.com/*
// @match       *://*.mercurynews.com/*
// @match       *://*.motherboard.vice.com/*
// @match       *://*.motherjones.com/*
// @match       *://*.mv-voice.com/*
// @match       *://*.nationalpost.com/*
// @match       *://*.nbcnews.com/*
// @match       *://*.netdna-ssl.com/*
// @match       *://*.news-gazette.com/*
// @match       *://*.newstatesman.com/*
// @match       *://*.newyorker.com/*
// @match       *://*.nrc.nl/*
// @match       *://*.ntnews.com.au/*
// @match       *://*.nydailynews.com/*
// @match       *://*.nymag.com/*
// @match       *://*.nypost.com/*
// @match       *://*.nytimes.com/*
// @match       *://*.nzherald.co.nz/*
// @match       *://*.nzz.ch/*
// @match       *://*.ocregister.com/*
// @match       *://*.onet.pl/*
// @match       *://*.orlandosentinel.com/*
// @match       *://*.outbrain.com/*
// @match       *://*.pagesix.com/*
// @match       *://*.paloaltoonline.com/*
// @match       *://*.parool.nl/*
// @match       *://*.people.com/*
// @match       *://*.piano.io/*
// @match       *://*.pitchbook.com/*
// @match       *://*.politico.com/*
// @match       *://*.poool.fr/*
// @match       *://*.postimees.ee/*
// @match       *://*.propublica.org/*
// @match       *://*.qiota.com/*
// @match       *://*.qz.com/*
// @match       *://*.repubblica.it/*
// @match       *://*.republic.ru/*
// @match       *://*.reuters.com/*
// @match       *://*.rollingstone.com/*
// @match       *://*.rp-online.de/*
// @match       *://*.rp.pl/*
// @match       *://*.salon.com/*
// @match       *://*.sandiegouniontribune.com/*
// @match       *://*.scientificamerican.com/*
// @match       *://*.scmp.com/*
// @match       *://*.seattletimes.com/*
// @match       *://*.seekingalpha.com/*
// @match       *://*.slate.com/*
// @match       *://*.smh.com.au/*
// @match       *://*.sofrep.com/*
// @match       *://*.spectator.co.uk/*
// @match       *://*.spectator.com.au/*
// @match       *://*.spectator.us/*
// @match       *://*.speld.nl/*
// @match       *://*.spiegel.de/*
// @match       *://*.startribune.com/*
// @match       *://*.statista.com/*
// @match       *://*.stuff.co.nz/*
// @match       *://*.sueddeutsche.de/*
// @match       *://*.sun-sentinel.com/*
// @match       *://*.tagesanzeiger.ch/*
// @match       *://*.tagesspiegel.de/*
// @match       *://*.techcrunch.com/*
// @match       *://*.techinasia.com/*
// @match       *://*.technologyreview.com/*
// @match       *://*.telegraaf.nl/*
// @match       *://*.telegraph.co.uk/*
// @match       *://*.the-tls.co.uk/*
// @match       *://*.theadvocate.com.au/*
// @match       *://*.theage.com.au/*
// @match       *://*.theathletic.co.uk/*
// @match       *://*.theathletic.com/*
// @match       *://*.theatlantic.com/*
// @match       *://*.theaustralian.com.au/*
// @match       *://*.thedailybeast.com/*
// @match       *://*.thediplomat.com/*
// @match       *://*.theglobeandmail.com/*
// @match       *://*.theguardian.com/*
// @match       *://*.theherald.com.au/*
// @match       *://*.thehindu.com/*
// @match       *://*.theintercept.com/*
// @match       *://*.thejournal.ie/*
// @match       *://*.themarker.com/*
// @match       *://*.themercury.com.au/*
// @match       *://*.thenation.com/*
// @match       *://*.thenational.scot/*
// @match       *://*.theolivepress.es/*
// @match       *://*.theonion.com/*
// @match       *://*.theroot.com/*
// @match       *://*.thesaturdaypaper.com.au/*
// @match       *://*.thestar.com/*
// @match       *://*.theverge.com/*
// @match       *://*.thewrap.com/*
// @match       *://*.tijd.be/*
// @match       *://*.time.com/*
// @match       *://*.tinypass.com/*
// @match       *://*.tmz.com/*
// @match       *://*.towardsdatascience.com/*
// @match       *://*.trouw.nl/*
// @match       *://*.usatoday.com/*
// @match       *://*.usmagazine.com/*
// @match       *://*.vanityfair.com/*
// @match       *://*.variety.com/*
// @match       *://*.vice.com/*
// @match       *://*.vn.nl/*
// @match       *://*.volkskrant.nl/*
// @match       *://*.vox.com/*
// @match       *://*.washingtonpost.com/*
// @match       *://*.welt.de/*
// @match       *://*.wired.com/*
// @match       *://*.wsj.com/*
// @match       *://*.wyborcza.pl/*
// @match       *://*.wz.de/*
// @match       *://*.zeit.de/*
// @grant        GM.registerMenuCommand
// @grant        GM.addStyle
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.setClipboard
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_setClipboard
// @noframes
// @run-at       document-idle
// @downloadURL  https://raw.githubusercontent.com/tyhallcsu/paywall-bypass-script/main/paywall-bypass.user.js
// @updateURL    https://raw.githubusercontent.com/tyhallcsu/paywall-bypass-script/main/paywall-bypass.user.js
// ==/UserScript==

(function() {
    'use strict';

    const APP_INSTANCE_KEY = '__paywallBypassScriptActive';
    if (window[APP_INSTANCE_KEY]) {
        return;
    }
    window[APP_INSTANCE_KEY] = true;

    const GM_COMPAT = typeof GM === 'object' && GM ? GM : null;

    // --- User Configuration ---
    // Reorder these service IDs to change default priority.
    // The first supported entry becomes the fallback "first try" service when no site-specific rule applies.
    const DEFAULT_SERVICE_ORDER = [
        'archiveToday',
        'removePaywall',
        'archiveOrg',
        'paywallBuster',
        'smry',
        'archiveIs',
        'archivePh',
        'freedium',
        'similarWeb'
    ];

    const SCRIPT_VERSION = '2.0.0';
    const QUICK_TRY_LIMIT = 3;
    const PAYWALL_BADGE_DURATION_MS = 3000;
    const FEEDBACK_PROMPT_DELAY_MS = 1200;
    const FEEDBACK_EXPIRY_MS = 30 * 60 * 1000;
    const FEEDBACK_SNOOZE_MS = 60 * 1000;
    const MAX_HISTORY_ENTRIES = 100;
    const SHORTCUT_DEFAULT = 'Alt+Shift+B';
    const SHORTCUT_MENU = 'Alt+Shift+M';
    const PAYWALL_KEYWORDS = ['paywall', 'subscribe', 'premium', 'locked', 'gate', 'metered', 'limit', 'regwall', 'piano', 'tinypass', 'poool'];
    const ARTICLE_CONTAINER_SELECTOR = 'article, [role="article"], main article, main, .article-content, .story-body';
    const OPEN_SHADOW_ROOT_LIMIT = 24;
    const STORAGE_KEYS = {
        showFloatingButton: 'showFloatingButton',
        serviceOrder: 'serviceOrder',
        serviceHistory: 'serviceHistory',
        pendingFeedback: 'pendingFeedback'
    };

    // --- Service Catalog & Site-Specific Routing ---
    const SERVICE_DEFINITIONS = {
        archiveToday: {
            id: 'archiveToday',
            label: 'Archive.today',
            group: 'archive',
            hint: 'Snapshot lookup',
            buildUrl: (url) => `https://archive.today/submit/?url=${encodeURIComponent(url)}`
        },
        archiveIs: {
            id: 'archiveIs',
            label: 'Archive.is',
            group: 'archive',
            hint: 'Mirror snapshot',
            buildUrl: (url) => `https://archive.is/submit/?url=${encodeURIComponent(url)}`
        },
        archivePh: {
            id: 'archivePh',
            label: 'Archive.ph',
            group: 'archive',
            hint: 'Mirror snapshot',
            buildUrl: (url) => `https://archive.ph/submit/?url=${encodeURIComponent(url)}`
        },
        archiveOrg: {
            id: 'archiveOrg',
            label: 'Archive.org',
            group: 'archive',
            hint: 'Wayback Machine',
            buildUrl: (url) => `https://web.archive.org/web/*/${encodeURI(url)}`
        },
        removePaywall: {
            id: 'removePaywall',
            label: 'RemovePaywall',
            group: 'bypass',
            hint: 'Archive-backed lookup',
            buildUrl: (url) => `https://www.removepaywall.com/search?url=${encodeURIComponent(url)}`
        },
        paywallBuster: {
            id: 'paywallBuster',
            label: 'PaywallBuster',
            group: 'bypass',
            hint: 'Multi-tool launcher',
            buildUrl: (url) => `https://paywallbuster.com/articles?article=${encodeURIComponent(url)}`
        },
        smry: {
            id: 'smry',
            label: 'SMRY',
            group: 'bypass',
            hint: 'Reader mode + summary',
            buildUrl: (url) => `https://smry.ai/${toServicePath(url)}`
        },
        freedium: {
            id: 'freedium',
            label: 'Freedium',
            group: 'bypass',
            hint: 'Medium-specific reader',
            supports: (urlObject) => isMediumFamilyDomain(urlObject.hostname),
            buildUrl: (url) => `https://freedium.cfd/${encodeURIComponent(url)}`
        },
        similarWeb: {
            id: 'similarWeb',
            label: 'SimilarWeb',
            group: 'analysis',
            hint: 'Domain overview',
            buildUrl: (url) => `https://www.similarweb.com/website/${new URL(url).hostname.replace(/^www\./, '')}/`
        }
    };

    const SITE_BEST_SERVICE = {
        'medium.com': 'freedium',
        'towardsdatascience.com': 'freedium',
        'nytimes.com': 'archiveToday',
        'wsj.com': 'archiveToday',
        'washingtonpost.com': 'removePaywall',
        'bloomberg.com': 'archiveToday',
        'ft.com': 'archiveToday',
        'newyorker.com': 'archiveToday',
        'theatlantic.com': 'archiveToday',
        'reuters.com': 'smry'
    };

    // --- Persistent State ---
    let showFloatingButton = true;
    let serviceOrder = sanitizeServiceOrder(DEFAULT_SERVICE_ORDER);
    let serviceHistory = [];
    let pendingFeedback = null;
    let feedbackSnoozeUntil = 0;
    let detectionBadgeTimeout = null;
    let feedbackPromptTimeout = null;
    const ui = {
        root: null,
        buttonGroup: null,
        button: null,
        buttonSubtitle: null,
        menuButton: null,
        badge: null,
        dropdown: null,
        feedback: null,
        toast: null,
        feedbackTitle: null,
        feedbackActions: null,
        toastTimer: null
    };

    void bootstrap();

    async function bootstrap() {
        showFloatingButton = await getStoredValue(STORAGE_KEYS.showFloatingButton, true);
        serviceOrder = sanitizeServiceOrder(await getStoredValue(STORAGE_KEYS.serviceOrder, DEFAULT_SERVICE_ORDER));
        serviceHistory = sanitizeServiceHistory(await getStoredValue(STORAGE_KEYS.serviceHistory, []));
        pendingFeedback = sanitizePendingFeedback(await getStoredValue(STORAGE_KEYS.pendingFeedback, null));

        registerMenuCommands();
        addStyles();
        bindGlobalListeners();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeUi, { once: true });
        } else {
            initializeUi();
        }

        window.addEventListener('load', handleWindowLoad, { once: true });

        if (document.readyState === 'complete') {
            handleWindowLoad();
        }
    }

    function handleWindowLoad() {
        syncThemeState();
        runPaywallDetection();
        scheduleFeedbackPrompt();
    }

    // --- Menu Commands & Keyboard Shortcuts ---
    function registerMenuCommands() {
        registerMenuCommandCompat(showFloatingButton ? 'Hide Floating Button' : 'Show Floating Button', toggleFloatingButton);
        registerMenuCommandCompat(`Try All (${SHORTCUT_DEFAULT})`, () => runTryAll('menu'));
        registerMenuCommandCompat(`Open Service Menu (${SHORTCUT_MENU})`, () => toggleDropdown(true, true));

        getVisibleServices().forEach((service) => {
            registerMenuCommandCompat(`${service.label}${getReliabilitySuffix(service.id)}`, () => launchService(service.id, 'menu'));
        });

        registerMenuCommandCompat('Export Settings', exportSettings);
        registerMenuCommandCompat('Import Settings', importSettings);
    }

    function bindGlobalListeners() {
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('keydown', handleKeyboardShortcuts);
        window.addEventListener('resize', handleViewportChange, { passive: true });
        window.addEventListener('orientationchange', handleViewportChange, { passive: true });
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                markPendingFeedbackAsLeftPage();
            }
            if (document.visibilityState === 'visible') {
                syncThemeState();
                scheduleFeedbackPrompt();
            }
        });
        window.addEventListener('blur', markPendingFeedbackAsLeftPage);
        window.addEventListener('focus', scheduleFeedbackPrompt);

        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if (typeof mediaQuery.addEventListener === 'function') {
                mediaQuery.addEventListener('change', syncThemeState);
            } else if (typeof mediaQuery.addListener === 'function') {
                mediaQuery.addListener(syncThemeState);
            }
        }
    }

    function handleKeyboardShortcuts(event) {
        if (event.key === 'Escape') {
            setDropdownVisibility(false);
            hideFeedbackPrompt();
            if (ui.menuButton) {
                ui.menuButton.focus();
            }
            return;
        }

        if (event.defaultPrevented || event.repeat || !event.altKey || !event.shiftKey || isTypingTarget(event.target)) {
            return;
        }

        const key = event.key.toLowerCase();
        if (key === 'b') {
            event.preventDefault();
            runTryAll('keyboard');
        } else if (key === 'm') {
            event.preventDefault();
            toggleDropdown(undefined, true);
        }
    }

    function handleViewportChange() {
        setDropdownVisibility(false);
    }

    // --- Floating UI & Dark Mode Support ---
    function initializeUi() {
        ensureUiShell();
        renderFloatingButtonState();
        renderDropdown();
        schedulePaywallDetection();
        scheduleFeedbackPrompt();
    }

    function ensureUiShell() {
        if (ui.root) {
            return;
        }

        const root = document.createElement('div');
        root.id = 'paywallBypassRoot';

        const container = document.createElement('div');
        container.id = 'bypassContainer';

        const buttonGroup = document.createElement('div');
        buttonGroup.id = 'bypassButtonGroup';

        const button = document.createElement('button');
        button.id = 'bypassButton';
        button.type = 'button';
        button.title = 'Try all bypass services';
        button.setAttribute('aria-label', 'Try all bypass services');
        button.setAttribute('aria-keyshortcuts', SHORTCUT_DEFAULT);

        const buttonCopy = document.createElement('span');
        buttonCopy.className = 'bypass-button-copy';

        const buttonTitle = document.createElement('span');
        buttonTitle.className = 'bypass-button-title';
        buttonTitle.textContent = 'Try All';

        const buttonSubtitle = document.createElement('span');
        buttonSubtitle.className = 'bypass-button-subtitle';

        const badge = document.createElement('span');
        badge.className = 'bypass-badge';
        badge.textContent = 'Paywall Detected';
        badge.hidden = true;

        buttonCopy.appendChild(buttonTitle);
        buttonCopy.appendChild(buttonSubtitle);
        button.appendChild(buttonCopy);
        button.appendChild(badge);

        const menuButton = document.createElement('button');
        menuButton.id = 'bypassMenuButton';
        menuButton.type = 'button';
        menuButton.setAttribute('aria-label', 'Open bypass service menu');
        menuButton.setAttribute('aria-haspopup', 'menu');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-controls', 'bypassDropdown');
        menuButton.setAttribute('aria-keyshortcuts', SHORTCUT_MENU);
        menuButton.textContent = '▾';

        const dropdown = document.createElement('div');
        dropdown.id = 'bypassDropdown';
        dropdown.setAttribute('role', 'menu');
        dropdown.setAttribute('aria-label', 'Bypass services');
        dropdown.tabIndex = -1;
        dropdown.addEventListener('keydown', handleDropdownKeydown);

        const feedback = document.createElement('div');
        feedback.id = 'bypassFeedback';
        feedback.hidden = true;
        feedback.setAttribute('role', 'dialog');
        feedback.setAttribute('aria-modal', 'false');
        feedback.setAttribute('aria-live', 'polite');
        feedback.setAttribute('aria-labelledby', 'bypassFeedbackTitle');

        const feedbackTitle = document.createElement('div');
        feedbackTitle.id = 'bypassFeedbackTitle';
        feedbackTitle.className = 'bypass-feedback-title';

        const feedbackActions = document.createElement('div');
        feedbackActions.className = 'bypass-feedback-actions';

        feedback.appendChild(feedbackTitle);
        feedback.appendChild(feedbackActions);

        const toast = document.createElement('div');
        toast.id = 'bypassToast';
        toast.hidden = true;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');

        button.addEventListener('click', (event) => {
            event.stopPropagation();
            runTryAll('button');
        });

        menuButton.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleDropdown();
        });

        buttonGroup.appendChild(button);
        buttonGroup.appendChild(menuButton);
        container.appendChild(buttonGroup);
        container.appendChild(dropdown);
        root.appendChild(container);
        root.appendChild(feedback);
        root.appendChild(toast);
        document.body.appendChild(root);

        ui.root = root;
        ui.buttonGroup = buttonGroup;
        ui.button = button;
        ui.buttonSubtitle = buttonSubtitle;
        ui.menuButton = menuButton;
        ui.badge = badge;
        ui.dropdown = dropdown;
        ui.feedback = feedback;
        ui.feedbackTitle = feedbackTitle;
        ui.feedbackActions = feedbackActions;
        ui.toast = toast;

        syncThemeState();
    }

    function renderFloatingButtonState() {
        if (!ui.buttonGroup) {
            return;
        }

        ui.buttonGroup.hidden = !showFloatingButton;

        const prioritizedServices = getPrioritizedServices(false);
        const defaultService = prioritizedServices[0];
        const bestServiceId = getBestServiceForCurrentSite();
        const subtitle = defaultService
            ? (bestServiceId === defaultService.id
                ? `${defaultService.label} first for ${window.location.hostname.replace(/^www\./, '')}`
                : `Starts with ${defaultService.label}`)
            : 'Choose a bypass service';

        ui.buttonSubtitle.textContent = subtitle;
        ui.button.title = defaultService
            ? `Try the top ${Math.min(QUICK_TRY_LIMIT, prioritizedServices.length)} services. ${defaultService.label} is first in line.`
            : 'Try all configured bypass services.';
        ui.button.setAttribute(
            'aria-label',
            defaultService
                ? `Try all bypass services. ${defaultService.label} is first.`
                : 'Try all configured bypass services.'
        );
    }

    function renderDropdown() {
        if (!ui.dropdown) {
            return;
        }

        ui.dropdown.textContent = '';

        const groupedServices = {
            quick: [{
                id: 'tryAll',
                label: 'Try All',
                hint: `Open top ${Math.min(QUICK_TRY_LIMIT, getPrioritizedServices(false).length)} services`,
                group: 'quick'
            }],
            bypass: [],
            archive: [],
            analysis: []
        };

        const bestServiceId = getBestServiceForCurrentSite();
        getVisibleServices().forEach((service) => {
            groupedServices[service.group].push(service);
        });

        [
            { key: 'quick', label: 'Quick Actions' },
            { key: 'bypass', label: 'Bypass Services' },
            { key: 'archive', label: 'Archive / Cache Services' },
            { key: 'analysis', label: 'Analysis Tools' }
        ].forEach((group) => {
            const services = groupedServices[group.key];
            if (!services.length) {
                return;
            }

            const section = document.createElement('div');
            section.className = 'bypass-group';

            const title = document.createElement('div');
            title.className = 'bypass-group-title';
            title.textContent = group.label;
            section.appendChild(title);

            services.forEach((service) => {
                const option = document.createElement('button');
                option.type = 'button';
                option.className = 'bypass-option';
                option.setAttribute('role', 'menuitem');
                option.tabIndex = -1;

                const textWrapper = document.createElement('span');
                textWrapper.className = 'bypass-option-text';

                const label = document.createElement('span');
                label.className = 'bypass-option-label';
                label.textContent = service.label;

                const hint = document.createElement('span');
                hint.className = 'bypass-option-hint';
                hint.textContent = service.hint || 'Open this service';

                const badgeRow = document.createElement('span');
                badgeRow.className = 'bypass-option-badges';

                if (service.id === 'tryAll') {
                    badgeRow.appendChild(createChip('Default'));
                } else {
                    if (bestServiceId === service.id) {
                        badgeRow.appendChild(createChip('Recommended'));
                    }
                    badgeRow.appendChild(createChip(getReliabilityLabel(service.id), 'reliability'));
                }

                textWrapper.appendChild(label);
                textWrapper.appendChild(hint);
                option.appendChild(textWrapper);
                option.appendChild(badgeRow);
                option.addEventListener('click', (event) => {
                    event.stopPropagation();
                    service.id === 'tryAll' ? runTryAll('dropdown') : launchService(service.id, 'dropdown');
                    setDropdownVisibility(false);
                });

                section.appendChild(option);
            });

            ui.dropdown.appendChild(section);
        });
    }

    function toggleDropdown(forceVisible, focusFirstItem) {
        if (!ui.dropdown) {
            return;
        }
        const nextState = typeof forceVisible === 'boolean' ? forceVisible : !ui.dropdown.classList.contains('show');
        setDropdownVisibility(nextState, focusFirstItem);
    }

    function setDropdownVisibility(visible, focusFirstItem) {
        if (!ui.dropdown) {
            return;
        }

        ui.dropdown.classList.toggle('show', visible);
        if (ui.menuButton) {
            ui.menuButton.setAttribute('aria-expanded', visible ? 'true' : 'false');
        }

        if (visible && focusFirstItem) {
            focusMenuItem(0);
        }
    }

    function handleDocumentClick(event) {
        if (!ui.root || ui.root.contains(event.target)) {
            return;
        }

        setDropdownVisibility(false);
        hideFeedbackPrompt();
    }

    function syncThemeState() {
        const theme = resolveTheme();
        if (ui.root) {
            ui.root.setAttribute('data-theme', theme);
        }
    }

    function handleDropdownKeydown(event) {
        const items = getMenuItems();
        if (!items.length) {
            return;
        }

        const activeIndex = items.indexOf(document.activeElement);

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            focusMenuItem(activeIndex < 0 ? 0 : Math.min(activeIndex + 1, items.length - 1));
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            focusMenuItem(activeIndex <= 0 ? items.length - 1 : activeIndex - 1);
        } else if (event.key === 'Home') {
            event.preventDefault();
            focusMenuItem(0);
        } else if (event.key === 'End') {
            event.preventDefault();
            focusMenuItem(items.length - 1);
        } else if (event.key === 'Escape') {
            event.preventDefault();
            setDropdownVisibility(false);
            if (ui.menuButton) {
                ui.menuButton.focus();
            }
        } else if (event.key === 'Tab') {
            setDropdownVisibility(false);
        }
    }

    function getMenuItems() {
        return ui.dropdown ? Array.from(ui.dropdown.querySelectorAll('.bypass-option')) : [];
    }

    function focusMenuItem(index) {
        const items = getMenuItems();
        if (!items.length) {
            return;
        }

        const boundedIndex = Math.max(0, Math.min(index, items.length - 1));
        items[boundedIndex].focus();
    }

    // --- Quick-Try Cascade & Default Routing ---
    function runTryAll(source) {
        const prioritizedServices = getPrioritizedServices(false).slice(0, QUICK_TRY_LIMIT);
        if (!prioritizedServices.length) {
            showToast('No supported bypass services are configured for this page.');
            return;
        }

        const targets = prioritizedServices
            .map((service) => buildServiceTarget(service, window.location.href))
            .filter(Boolean);

        openTargets(targets, { source, mode: 'tryAll' });
    }

    function launchService(serviceId, source) {
        const service = SERVICE_DEFINITIONS[serviceId];
        if (!service) {
            showToast('That bypass service is not available.');
            return;
        }

        const target = buildServiceTarget(service, window.location.href);
        if (!target) {
            showToast(`Couldn't build a safe URL for ${service.label}.`);
            return;
        }

        const targets = [target];

        openTargets(targets, { source, mode: 'single' });
    }

    function openTargets(targets, context) {
        if (!isValidProtocol(window.location.href)) {
            showToast('This page URL is not supported by the bypass services.');
            return;
        }

        const openedTargets = [];
        targets.forEach((target, index) => {
            const newTab = window.open(target.url, '_blank', 'noopener,noreferrer');
            if (newTab) {
                openedTargets.push(target);
            } else if (targets.length === 1 && index === 0) {
                window.location.href = target.url;
                openedTargets.push(target);
            }
        });

        if (!openedTargets.length) {
            showToast('Your browser blocked the bypass tabs. Allow pop-ups for this site to use Try All.');
            return;
        }

        persistPendingFeedback({
            mode: context.mode,
            source: context.source,
            sourceUrl: window.location.href,
            domain: window.location.hostname.replace(/^www\./, ''),
            services: openedTargets.map((target) => target.serviceId),
            createdAt: Date.now(),
            leftPage: false
        });

        if (openedTargets.length !== targets.length) {
            showToast(`Opened ${openedTargets.length} of ${targets.length} services. Your browser blocked the rest.`);
        } else if (context.mode === 'tryAll') {
            showToast(`Opened ${openedTargets.length} services. Come back here to mark what worked.`);
        } else {
            showToast(`Opened ${openedTargets[0].label}. Come back here to mark whether it worked.`);
        }

        scheduleFeedbackPrompt();
    }

    function buildServiceTarget(service, sourceUrl) {
        try {
            const targetUrl = service.buildUrl(sourceUrl);
            const parsedTarget = new URL(targetUrl);
            if (parsedTarget.protocol !== 'https:') {
                return null;
            }

            return {
                serviceId: service.id,
                label: service.label,
                url: parsedTarget.toString()
            };
        } catch (error) {
            return null;
        }
    }

    // --- Success / Failure Tracking ---
    function scheduleFeedbackPrompt() {
        if (feedbackPromptTimeout) {
            window.clearTimeout(feedbackPromptTimeout);
        }

        feedbackPromptTimeout = window.setTimeout(maybeShowFeedbackPrompt, FEEDBACK_PROMPT_DELAY_MS);
    }

    function maybeShowFeedbackPrompt() {
        if (!pendingFeedback || !ui.feedback || document.visibilityState === 'hidden') {
            return;
        }

        if (!pendingFeedback.leftPage && !cameFromServiceReferrer()) {
            return;
        }

        if (Date.now() > feedbackSnoozeUntil && Date.now() - pendingFeedback.createdAt < FEEDBACK_EXPIRY_MS) {
            renderFeedbackPrompt();
        } else if (Date.now() - pendingFeedback.createdAt >= FEEDBACK_EXPIRY_MS) {
            clearPendingFeedback();
        }
    }

    function renderFeedbackPrompt() {
        const services = pendingFeedback.services
            .map((serviceId) => SERVICE_DEFINITIONS[serviceId])
            .filter(Boolean);

        if (!services.length) {
            clearPendingFeedback();
            return;
        }

        ui.feedbackTitle.textContent = services.length === 1
            ? `Did ${services[0].label} work on ${pendingFeedback.domain}?`
            : 'Which service worked best for this article?';

        ui.feedbackActions.textContent = '';

        services.forEach((service) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'bypass-feedback-button bypass-feedback-success';
            button.textContent = services.length === 1 ? 'Worked!' : `${service.label} worked`;
            button.addEventListener('click', () => {
                recordServiceOutcome(service.id, 'success', pendingFeedback.domain);
                clearPendingFeedback();
                hideFeedbackPrompt();
                renderDropdown();
                showToast(`${service.label} marked as working.`);
            });
            ui.feedbackActions.appendChild(button);
        });

        const failButton = document.createElement('button');
        failButton.type = 'button';
        failButton.className = 'bypass-feedback-button';
        failButton.textContent = services.length === 1 ? "Didn't work" : 'None worked';
        failButton.addEventListener('click', () => {
            services.forEach((service) => recordServiceOutcome(service.id, 'fail', pendingFeedback.domain));
            clearPendingFeedback();
            hideFeedbackPrompt();
            renderDropdown();
            showToast('Saved local reliability feedback.');
        });
        ui.feedbackActions.appendChild(failButton);

        const laterButton = document.createElement('button');
        laterButton.type = 'button';
        laterButton.className = 'bypass-feedback-button bypass-feedback-secondary';
        laterButton.textContent = 'Later';
        laterButton.addEventListener('click', () => {
            feedbackSnoozeUntil = Date.now() + FEEDBACK_SNOOZE_MS;
            hideFeedbackPrompt();
        });
        ui.feedbackActions.appendChild(laterButton);

        ui.feedback.hidden = false;
    }

    function hideFeedbackPrompt() {
        if (ui.feedback) {
            ui.feedback.hidden = true;
        }
    }

    function recordServiceOutcome(serviceId, status, domain) {
        serviceHistory.push({
            serviceId,
            domain,
            status,
            timestamp: Date.now()
        });

        serviceHistory = serviceHistory.slice(-MAX_HISTORY_ENTRIES);
        setStoredValue(STORAGE_KEYS.serviceHistory, serviceHistory);
    }

    function getServiceReliability(serviceId) {
        const entries = serviceHistory.filter((entry) => entry.serviceId === serviceId);
        if (!entries.length) {
            return null;
        }

        const successfulEntries = entries.filter((entry) => entry.status === 'success').length;
        return Math.round((successfulEntries / entries.length) * 100);
    }

    function getReliabilityLabel(serviceId) {
        const reliability = getServiceReliability(serviceId);
        return reliability === null ? 'No data' : `${reliability}%`;
    }

    function getReliabilitySuffix(serviceId) {
        const reliability = getServiceReliability(serviceId);
        return reliability === null ? '' : ` (${reliability}%)`;
    }

    // --- Paywall Auto-Detection ---
    function schedulePaywallDetection() {
        window.setTimeout(runPaywallDetection, 900);
        window.setTimeout(runPaywallDetection, 2500);
    }

    function runPaywallDetection() {
        const result = detectPaywall();
        if (result.detected) {
            highlightButtonForPaywall();
        }
    }

    function detectPaywall() {
        const reasons = [];
        let score = 0;
        const searchRoots = getSearchRoots();

        const keywordElement = findKeywordElement(searchRoots);
        if (keywordElement) {
            reasons.push('Keyword-matched paywall element');
            score += 2;
        }

        const bodyLocked = hasLockedOverflow(document.body);
        const articleContainer = getArticleContainer(searchRoots);
        if (bodyLocked || hasLockedOverflow(articleContainer)) {
            reasons.push('Page scrolling or article container is locked');
            score += 1;
        }

        const articleTextLength = getVisibleArticleLength(articleContainer);
        const articleParagraphCount = articleContainer ? articleContainer.getElementsByTagName('p').length : 0;
        if (articleContainer && articleTextLength > 0 && articleTextLength < 900 && articleParagraphCount <= 5) {
            reasons.push('Article content appears truncated');
            score += 1;
        }

        const overlay = findLikelyPaywallOverlay(searchRoots);
        if (overlay) {
            reasons.push('Large blocking overlay found');
            score += 1;
        }

        return {
            detected: score >= 2,
            score,
            reasons
        };
    }

    function highlightButtonForPaywall() {
        if (!ui.button || !showFloatingButton) {
            return;
        }

        ui.button.classList.remove('is-pulsing');
        void ui.button.offsetWidth;
        ui.button.classList.add('is-pulsing');

        ui.badge.hidden = false;
        ui.badge.classList.add('show');

        if (detectionBadgeTimeout) {
            window.clearTimeout(detectionBadgeTimeout);
        }

        detectionBadgeTimeout = window.setTimeout(() => {
            ui.badge.classList.remove('show');
            ui.badge.hidden = true;
        }, PAYWALL_BADGE_DURATION_MS);
    }

    function findKeywordElement(searchRoots) {
        for (const root of searchRoots) {
            const candidates = root.querySelectorAll('[class], [id], [data-testid]');
            for (const element of candidates) {
                if (ui.root && ui.root.contains(element)) {
                    continue;
                }

                const text = `${element.id || ''} ${element.className || ''} ${element.getAttribute('data-testid') || ''}`.toLowerCase();
                if (PAYWALL_KEYWORDS.some((keyword) => text.includes(keyword)) && isProbablyVisible(element)) {
                    return element;
                }
            }
        }
        return null;
    }

    function findLikelyPaywallOverlay(searchRoots) {
        for (const root of searchRoots) {
            const overlays = root.querySelectorAll('div, section, aside, dialog');
            for (const overlay of overlays) {
                if (!isProbablyVisible(overlay) || (ui.root && ui.root.contains(overlay))) {
                    continue;
                }

                const styles = window.getComputedStyle(overlay);
                const rect = overlay.getBoundingClientRect();
                const keywordText = `${overlay.textContent || ''} ${overlay.className || ''} ${overlay.id || ''}`.toLowerCase();
                const blocksViewport = (styles.position === 'fixed' || styles.position === 'sticky') && rect.width > window.innerWidth * 0.6 && rect.height > window.innerHeight * 0.2;

                if (blocksViewport && PAYWALL_KEYWORDS.some((keyword) => keywordText.includes(keyword))) {
                    return overlay;
                }
            }
        }
        return null;
    }

    // --- Settings Export / Import ---
    function exportSettings() {
        const payload = {
            version: SCRIPT_VERSION,
            exportedAt: new Date().toISOString(),
            showFloatingButton,
            serviceOrder,
            serviceHistory
        };

        const text = JSON.stringify(payload, null, 2);

        setClipboardCompat(text)
            .then(() => {
                showToast('Settings copied to your clipboard.');
            })
            .catch(() => {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text)
                        .then(() => showToast('Settings copied to your clipboard.'))
                        .catch(() => prompt('Copy your settings JSON:', text));
                } else {
                    prompt('Copy your settings JSON:', text);
                }
            });
    }

    function getStoredValue(key, defaultValue) {
        return runAsyncCompat(
            () => (typeof GM_getValue === 'function' ? GM_getValue(key, defaultValue) : undefined),
            () => (GM_COMPAT && typeof GM_COMPAT.getValue === 'function' ? GM_COMPAT.getValue(key, defaultValue) : undefined),
            defaultValue
        );
    }

    function setStoredValue(key, value) {
        void runAsyncCompat(
            () => (typeof GM_setValue === 'function' ? GM_setValue(key, value) : undefined),
            () => (GM_COMPAT && typeof GM_COMPAT.setValue === 'function' ? GM_COMPAT.setValue(key, value) : undefined),
            null
        );
    }

    function registerMenuCommandCompat(label, callback) {
        try {
            if (typeof GM_registerMenuCommand === 'function') {
                GM_registerMenuCommand(label, callback);
                return;
            }
            if (GM_COMPAT && typeof GM_COMPAT.registerMenuCommand === 'function') {
                GM_COMPAT.registerMenuCommand(label, callback);
            }
        } catch (error) {
            // Ignore menu registration failures in managers with partial API support.
        }
    }

    function setClipboardCompat(text) {
        return Promise.resolve()
            .then(() => {
                if (typeof GM_setClipboard === 'function') {
                    return GM_setClipboard(text, 'text');
                }
                if (GM_COMPAT && typeof GM_COMPAT.setClipboard === 'function') {
                    return GM_COMPAT.setClipboard(text, 'text');
                }
                throw new Error('Clipboard API unavailable');
            });
    }

    function runAsyncCompat(primary, secondary, defaultValue) {
        return Promise.resolve()
            .then(() => primary())
            .catch(() => undefined)
            .then((value) => {
                if (typeof value !== 'undefined') {
                    return value;
                }
                return Promise.resolve()
                    .then(() => secondary())
                    .catch(() => undefined);
            })
            .then((value) => (typeof value === 'undefined' ? defaultValue : value))
            .catch(() => defaultValue);
    }

    function addStyleCompat(styleText) {
        try {
            if (typeof GM_addStyle === 'function') {
                GM_addStyle(styleText);
                return;
            }
            if (GM_COMPAT && typeof GM_COMPAT.addStyle === 'function') {
                GM_COMPAT.addStyle(styleText);
                return;
            }
        } catch (error) {
            // Fall through to a regular style element when the userscript helper is unavailable.
        }

        const style = document.createElement('style');
        style.textContent = styleText;
        (document.head || document.documentElement).appendChild(style);
    }

    function importSettings() {
        const raw = prompt('Paste settings JSON exported from Paywall Bypass Script:');
        if (!raw) {
            return;
        }

        try {
            const parsed = JSON.parse(raw);

            if (typeof parsed.showFloatingButton === 'boolean') {
                showFloatingButton = parsed.showFloatingButton;
            }

            if (Array.isArray(parsed.serviceOrder)) {
                serviceOrder = sanitizeServiceOrder(parsed.serviceOrder);
            }

            if (Array.isArray(parsed.serviceHistory)) {
                serviceHistory = sanitizeServiceHistory(parsed.serviceHistory);
            }

            setStoredValue(STORAGE_KEYS.showFloatingButton, showFloatingButton);
            setStoredValue(STORAGE_KEYS.serviceOrder, serviceOrder);
            setStoredValue(STORAGE_KEYS.serviceHistory, serviceHistory);

            renderFloatingButtonState();
            renderDropdown();
            showToast('Settings imported.');
        } catch (error) {
            alert('Settings import failed. Please paste valid JSON exported by this script.');
        }
    }

    // --- Utilities ---
    function toggleFloatingButton() {
        showFloatingButton = !showFloatingButton;
        setStoredValue(STORAGE_KEYS.showFloatingButton, showFloatingButton);
        renderFloatingButtonState();
        showToast(`Floating button ${showFloatingButton ? 'enabled' : 'hidden'}.`);
    }

    function showToast(message) {
        if (!ui.toast) {
            return;
        }

        ui.toast.textContent = message;
        ui.toast.hidden = false;
        ui.toast.classList.add('show');

        if (ui.toastTimer) {
            window.clearTimeout(ui.toastTimer);
        }

        ui.toastTimer = window.setTimeout(() => {
            ui.toast.classList.remove('show');
            ui.toast.hidden = true;
        }, 3200);
    }

    function getVisibleServices() {
        const currentUrl = new URL(window.location.href);
        return serviceOrder
            .map((serviceId) => SERVICE_DEFINITIONS[serviceId])
            .filter(Boolean)
            .filter((service) => !service.supports || service.supports(currentUrl));
    }

    function getPrioritizedServices(includeAnalysis) {
        const services = getVisibleServices().filter((service) => includeAnalysis || service.group !== 'analysis');
        const bestServiceId = getBestServiceForCurrentSite();
        if (!bestServiceId) {
            return services;
        }

        const bestIndex = services.findIndex((service) => service.id === bestServiceId);
        if (bestIndex <= 0) {
            return services;
        }

        const reordered = services.slice();
        const [bestService] = reordered.splice(bestIndex, 1);
        reordered.unshift(bestService);
        return reordered;
    }

    function getBestServiceForCurrentSite() {
        const hostname = window.location.hostname.replace(/^www\./, '');
        const currentUrl = new URL(window.location.href);

        for (const [domain, serviceId] of Object.entries(SITE_BEST_SERVICE)) {
            if (hostname === domain || hostname.endsWith(`.${domain}`)) {
                const service = SERVICE_DEFINITIONS[serviceId];
                if (service && (!service.supports || service.supports(currentUrl))) {
                    return serviceId;
                }
            }
        }

        return null;
    }

    function sanitizeServiceOrder(value) {
        const orderedIds = Array.isArray(value) ? value : DEFAULT_SERVICE_ORDER;
        const seen = new Set();
        const sanitized = [];

        orderedIds.forEach((serviceId) => {
            if (SERVICE_DEFINITIONS[serviceId] && !seen.has(serviceId)) {
                seen.add(serviceId);
                sanitized.push(serviceId);
            }
        });

        DEFAULT_SERVICE_ORDER.forEach((serviceId) => {
            if (SERVICE_DEFINITIONS[serviceId] && !seen.has(serviceId)) {
                seen.add(serviceId);
                sanitized.push(serviceId);
            }
        });

        return sanitized;
    }

    function sanitizeServiceHistory(value) {
        if (!Array.isArray(value)) {
            return [];
        }

        return value
            .filter((entry) => entry && SERVICE_DEFINITIONS[entry.serviceId] && (entry.status === 'success' || entry.status === 'fail'))
            .map((entry) => ({
                serviceId: entry.serviceId,
                domain: typeof entry.domain === 'string' ? entry.domain : window.location.hostname.replace(/^www\./, ''),
                status: entry.status,
                timestamp: Number(entry.timestamp) || Date.now()
            }))
            .slice(-MAX_HISTORY_ENTRIES);
    }

    function sanitizePendingFeedback(value) {
        if (!value || !Array.isArray(value.services) || !value.services.length) {
            return null;
        }

        const services = value.services.filter((serviceId) => SERVICE_DEFINITIONS[serviceId]);
        if (!services.length) {
            return null;
        }

        return {
            mode: value.mode === 'tryAll' ? 'tryAll' : 'single',
            source: value.source || 'button',
            sourceUrl: typeof value.sourceUrl === 'string' ? value.sourceUrl : window.location.href,
            domain: typeof value.domain === 'string' ? value.domain : window.location.hostname.replace(/^www\./, ''),
            services,
            createdAt: Number(value.createdAt) || Date.now(),
            leftPage: Boolean(value.leftPage)
        };
    }

    function persistPendingFeedback(value) {
        pendingFeedback = sanitizePendingFeedback(value);
        setStoredValue(STORAGE_KEYS.pendingFeedback, pendingFeedback);
    }

    function markPendingFeedbackAsLeftPage() {
        if (!pendingFeedback || pendingFeedback.leftPage) {
            return;
        }

        pendingFeedback.leftPage = true;
        setStoredValue(STORAGE_KEYS.pendingFeedback, pendingFeedback);
    }

    function clearPendingFeedback() {
        pendingFeedback = null;
        setStoredValue(STORAGE_KEYS.pendingFeedback, null);
    }

    function getArticleContainer(searchRoots) {
        for (const root of searchRoots) {
            const articleContainer = root.querySelector(ARTICLE_CONTAINER_SELECTOR);
            if (articleContainer) {
                return articleContainer;
            }
        }
        return null;
    }

    function getVisibleArticleLength(articleContainer) {
        if (!articleContainer) {
            return 0;
        }

        const paragraphs = Array.from(articleContainer.querySelectorAll('p'))
            .map((paragraph) => paragraph.innerText.trim())
            .filter(Boolean);

        const text = paragraphs.length ? paragraphs.join(' ') : articleContainer.innerText.trim();
        return text.replace(/\s+/g, ' ').length;
    }

    function hasLockedOverflow(element) {
        if (!element) {
            return false;
        }

        const styles = window.getComputedStyle(element);
        return ['hidden', 'clip'].includes(styles.overflowY) || ['hidden', 'clip'].includes(styles.overflow);
    }

    function isProbablyVisible(element) {
        if (!element) {
            return false;
        }

        const styles = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return styles.display !== 'none' && styles.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    }

    function createChip(text, modifier) {
        const chip = document.createElement('span');
        chip.className = modifier ? `bypass-chip bypass-chip-${modifier}` : 'bypass-chip';
        chip.textContent = text;
        return chip;
    }

    function isMediumFamilyDomain(hostname) {
        const normalizedHost = hostname.replace(/^www\./, '');
        return normalizedHost === 'medium.com' ||
            normalizedHost.endsWith('.medium.com') ||
            normalizedHost === 'towardsdatascience.com' ||
            normalizedHost.endsWith('.towardsdatascience.com');
    }

    function toServicePath(url) {
        const normalizedUrl = encodeURI(url).replace(/^https?:\/\//, '');
        return normalizedUrl.replace(/\?/g, '%3F').replace(/#/g, '%23');
    }

    function resolveTheme() {
        const rootTheme = `${document.documentElement.getAttribute('data-theme') || ''} ${document.body ? document.body.getAttribute('data-theme') || '' : ''}`.toLowerCase();
        const classTheme = `${document.documentElement.className || ''} ${document.body ? document.body.className || '' : ''}`.toLowerCase();
        const computedScheme = String(window.getComputedStyle(document.documentElement).colorScheme || '').toLowerCase();

        if (rootTheme.includes('dark') || classTheme.includes('dark') || computedScheme.includes('dark')) {
            return 'dark';
        }

        if (rootTheme.includes('light') || classTheme.includes('light') || computedScheme.includes('light')) {
            return 'light';
        }

        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function isTypingTarget(target) {
        if (!target) {
            return false;
        }

        const tagName = target.tagName ? target.tagName.toLowerCase() : '';
        return tagName === 'input' || tagName === 'textarea' || target.isContentEditable;
    }

    function isValidProtocol(url) {
        try {
            return new URL(url).protocol.startsWith('http');
        } catch (error) {
            return false;
        }
    }

    function cameFromServiceReferrer() {
        if (!document.referrer) {
            return false;
        }

        return [
            'archive.today',
            'archive.is',
            'archive.ph',
            'web.archive.org',
            'removepaywall.com',
            'paywallbuster.com',
            'smry.ai',
            'freedium.cfd',
            'similarweb.com'
        ].some((host) => document.referrer.includes(host));
    }

    function getSearchRoots() {
        const roots = [document];
        if (!document.documentElement || !document.createTreeWalker) {
            return roots;
        }

        const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT);
        while (walker.nextNode() && roots.length <= OPEN_SHADOW_ROOT_LIMIT) {
            const currentNode = walker.currentNode;
            if (currentNode.shadowRoot) {
                roots.push(currentNode.shadowRoot);
            }
        }

        return roots;
    }

    function addStyles() {
        addStyleCompat(`
            #paywallBypassRoot {
                position: fixed;
                right: max(14px, env(safe-area-inset-right, 0px));
                bottom: calc(14px + env(safe-area-inset-bottom, 0px));
                z-index: 2147483647;
                font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
                pointer-events: none;
            }
            #paywallBypassRoot[data-theme="dark"] {
                --bypass-bg: linear-gradient(135deg, #1f2937, #111827);
                --bypass-bg-hover: linear-gradient(135deg, #111827, #0f172a);
                --bypass-fg: #f9fafb;
                --bypass-subtle: #cbd5e1;
                --bypass-panel: rgba(15, 23, 42, 0.96);
                --bypass-panel-border: rgba(148, 163, 184, 0.28);
                --bypass-panel-hover: rgba(30, 41, 59, 0.95);
                --bypass-chip-bg: rgba(96, 165, 250, 0.2);
                --bypass-chip-fg: #bfdbfe;
                --bypass-shadow: 0 18px 40px rgba(2, 6, 23, 0.42);
            }
            #paywallBypassRoot,
            #paywallBypassRoot[data-theme="light"] {
                --bypass-bg: linear-gradient(135deg, #0f766e, #155e75);
                --bypass-bg-hover: linear-gradient(135deg, #115e59, #164e63);
                --bypass-fg: #f8fafc;
                --bypass-subtle: rgba(240, 253, 250, 0.86);
                --bypass-panel: rgba(255, 255, 255, 0.97);
                --bypass-panel-border: rgba(15, 118, 110, 0.18);
                --bypass-panel-hover: rgba(240, 253, 250, 0.96);
                --bypass-chip-bg: rgba(20, 184, 166, 0.14);
                --bypass-chip-fg: #0f766e;
                --bypass-shadow: 0 16px 36px rgba(15, 23, 42, 0.18);
            }
            #bypassContainer,
            #bypassFeedback,
            #bypassToast {
                pointer-events: auto;
            }
            #bypassContainer {
                position: relative;
                min-width: 260px;
            }
            #bypassButtonGroup {
                display: flex;
                align-items: stretch;
                gap: 8px;
            }
            #bypassButton {
                position: relative;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                border: none;
                border-radius: 16px;
                background: var(--bypass-bg);
                color: var(--bypass-fg);
                padding: 12px 14px;
                min-height: 48px;
                box-shadow: var(--bypass-shadow);
                cursor: pointer;
                text-align: left;
                touch-action: manipulation;
                transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
            }
            #bypassButton:hover,
            #bypassButton:focus-visible,
            #bypassMenuButton:hover,
            #bypassMenuButton:focus-visible {
                transform: translateY(-1px);
            }
            #bypassButton:focus-visible,
            #bypassMenuButton:focus-visible,
            .bypass-option:focus-visible,
            .bypass-feedback-button:focus-visible {
                outline: 2px solid #f8fafc;
                outline-offset: 2px;
            }
            #paywallBypassRoot[data-theme="light"] #bypassButton:focus-visible,
            #paywallBypassRoot[data-theme="light"] #bypassMenuButton:focus-visible,
            #paywallBypassRoot[data-theme="light"] .bypass-option:focus-visible,
            #paywallBypassRoot[data-theme="light"] .bypass-feedback-button:focus-visible {
                outline-color: #0f766e;
            }
            #bypassButton:hover,
            #bypassButton:focus-visible {
                background: var(--bypass-bg-hover);
            }
            #bypassButton.is-pulsing {
                animation: bypassPulse 1.4s ease 2;
            }
            .bypass-button-copy {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }
            .bypass-button-title {
                font-size: 15px;
                font-weight: 700;
                letter-spacing: 0.01em;
            }
            .bypass-button-subtitle {
                font-size: 12px;
                color: var(--bypass-subtle);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            #bypassMenuButton {
                width: 48px;
                border: none;
                border-radius: 16px;
                background: var(--bypass-panel);
                color: var(--bypass-chip-fg);
                box-shadow: var(--bypass-shadow);
                cursor: pointer;
                font-size: 18px;
                line-height: 1;
                min-height: 48px;
                touch-action: manipulation;
            }
            .bypass-badge {
                position: absolute;
                top: -10px;
                right: 10px;
                border-radius: 999px;
                padding: 4px 8px;
                background: #f97316;
                color: white;
                font-size: 11px;
                font-weight: 700;
                opacity: 0;
                transform: translateY(4px);
                transition: opacity 0.2s ease, transform 0.2s ease;
                box-shadow: 0 8px 20px rgba(249, 115, 22, 0.28);
            }
            .bypass-badge.show {
                opacity: 1;
                transform: translateY(0);
            }
            #bypassDropdown {
                display: none;
                position: absolute;
                right: 0;
                bottom: calc(100% + 10px);
                width: min(320px, calc(100vw - 28px));
                max-height: 60vh;
                overflow-y: auto;
                border-radius: 18px;
                background: var(--bypass-panel);
                border: 1px solid var(--bypass-panel-border);
                box-shadow: var(--bypass-shadow);
                backdrop-filter: blur(12px);
                padding: 10px;
            }
            #bypassDropdown.show {
                display: block;
            }
            .bypass-group + .bypass-group {
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid var(--bypass-panel-border);
            }
            .bypass-group-title {
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                color: var(--bypass-chip-fg);
                padding: 2px 6px 8px;
            }
            .bypass-option {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                border: none;
                background: transparent;
                border-radius: 14px;
                padding: 10px 12px;
                min-height: 44px;
                cursor: pointer;
                text-align: left;
                color: inherit;
                touch-action: manipulation;
                transition: background 0.18s ease;
            }
            .bypass-option:hover,
            .bypass-option:focus-visible {
                background: var(--bypass-panel-hover);
            }
            .bypass-option-text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }
            .bypass-option-label {
                font-size: 14px;
                font-weight: 600;
                color: var(--bypass-chip-fg);
            }
            .bypass-option-hint {
                font-size: 12px;
                color: var(--bypass-subtle);
            }
            .bypass-option-badges {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                flex-wrap: wrap;
                justify-content: flex-end;
            }
            .bypass-chip {
                border-radius: 999px;
                padding: 4px 8px;
                background: var(--bypass-chip-bg);
                color: var(--bypass-chip-fg);
                font-size: 11px;
                font-weight: 700;
                white-space: nowrap;
            }
            .bypass-chip-reliability {
                background: rgba(59, 130, 246, 0.12);
            }
            #bypassFeedback {
                position: fixed;
                left: 50%;
                bottom: calc(86px + env(safe-area-inset-bottom, 0px));
                transform: translateX(-50%);
                width: min(520px, calc(100vw - 28px));
                border-radius: 18px;
                background: var(--bypass-panel);
                border: 1px solid var(--bypass-panel-border);
                box-shadow: var(--bypass-shadow);
                padding: 14px;
                backdrop-filter: blur(14px);
            }
            .bypass-feedback-title {
                font-size: 14px;
                font-weight: 700;
                color: var(--bypass-chip-fg);
                margin-bottom: 12px;
            }
            .bypass-feedback-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .bypass-feedback-button {
                border: none;
                border-radius: 999px;
                padding: 10px 14px;
                background: var(--bypass-chip-bg);
                color: var(--bypass-chip-fg);
                cursor: pointer;
                font-size: 13px;
                font-weight: 700;
                min-height: 44px;
                touch-action: manipulation;
            }
            .bypass-feedback-success {
                background: rgba(34, 197, 94, 0.16);
                color: #15803d;
            }
            #paywallBypassRoot[data-theme="dark"] .bypass-feedback-success {
                color: #86efac;
            }
            .bypass-feedback-secondary {
                background: rgba(148, 163, 184, 0.14);
            }
            #bypassToast {
                position: fixed;
                left: 50%;
                bottom: calc(24px + env(safe-area-inset-bottom, 0px));
                transform: translateX(-50%);
                max-width: min(420px, calc(100vw - 28px));
                border-radius: 999px;
                padding: 10px 14px;
                background: rgba(15, 23, 42, 0.92);
                color: #f8fafc;
                box-shadow: var(--bypass-shadow);
                opacity: 0;
                transition: opacity 0.2s ease;
            }
            #bypassToast.show {
                opacity: 1;
            }
            @keyframes bypassPulse {
                0% { box-shadow: var(--bypass-shadow); }
                35% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0.12), var(--bypass-shadow); }
                70% { box-shadow: 0 0 0 18px rgba(34, 197, 94, 0), var(--bypass-shadow); }
                100% { box-shadow: var(--bypass-shadow); }
            }
            @media (max-width: 768px) {
                #paywallBypassRoot {
                    right: max(12px, env(safe-area-inset-right, 0px));
                    bottom: calc(12px + env(safe-area-inset-bottom, 0px));
                    left: max(12px, env(safe-area-inset-left, 0px));
                }
                #bypassContainer {
                    min-width: 0;
                }
                #bypassButtonGroup {
                    gap: 6px;
                }
                #bypassButton {
                    padding: 13px 14px;
                }
                #bypassDropdown {
                    width: min(100%, 360px);
                    right: 0;
                }
                #bypassFeedback {
                    bottom: calc(94px + env(safe-area-inset-bottom, 0px));
                }
            }
        `);
    }
})();
