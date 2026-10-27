export type SoundName =
  | 'click'
  | 'chest-open'
  | 'chest-close'
  | 'item-select'
  | 'back';

const SOUND_FILES: Record<SoundName, string> = {
  click: '/audio/click_002.ogg',
  'chest-open': '/audio/open_002.ogg',
  'chest-close': '/audio/close_002.ogg',
  'item-select': '/audio/select_001.ogg',
  back: '/audio/back_001.ogg',
};

const STORAGE_KEY = 'eli-exe-sound-enabled';

let enabled = false;
let initialized = false;

const audioCache = new Map<SoundName, HTMLAudioElement>();

function getAudio(name: SoundName): HTMLAudioElement {
  const cached = audioCache.get(name);

  if (cached) return cached;

  const audio = new Audio(SOUND_FILES[name]);
  audio.preload = 'auto';
  audio.volume = 1.0;

  audioCache.set(name, audio);

  return audio;
}

function notifySoundChange() {
  window.dispatchEvent(
    new CustomEvent('eli:sound-change', {
      detail: { enabled },
    })
  );
}

export function initializeSound() {
  if (initialized || typeof window === 'undefined') return;

  initialized = true;

  try {
    enabled = localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    enabled = false;
  }

  notifySoundChange();
}

export function isSoundEnabled(): boolean {
  return enabled;
}

export function setSoundEnabled(value: boolean) {
  enabled = value;

  try {
    localStorage.setItem(STORAGE_KEY, String(value));
  } catch {
    // Sound still works if storage is unavailable.
  }

  notifySoundChange();
}

export function toggleSound() {
  setSoundEnabled(!enabled);
}

export function playSound(name: SoundName) {
  if (!enabled) return;

  const source = getAudio(name);

  // Clone the audio so repeated clicks can overlap naturally.
  const audio = source.cloneNode(true) as HTMLAudioElement;

  audio.volume = source.volume;

  void audio.play().catch(() => {
    // Browser restrictions or unavailable audio files
    // should never interrupt website interactions.
  });
}