export const SHOW_LIGHTBOX = 'SHOW_LIGHTBOX';
export const HIDE_LIGHTBOX = 'HIDE_LIGHTBOX';

export const showLightbox = (giphy) => ({
    type: SHOW_LIGHTBOX,
    giphy,
});

export const hideLightbox = () => ({
    type: HIDE_LIGHTBOX,
});