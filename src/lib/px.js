const k = {
    phonePortrait: 0.1562500,
    phoneLandscape: 0.08803,
    tabletPortrait: 0.065106,
    tabletLandscape: 0.04882826,
    desktop: 0.03660322,
    desktopWide: 0.03125,
    desktopHD: 0.028935,
    desktopMega: 0.022978
};

export default (px, mediaType) => {
    return k[mediaType] ? px * k[mediaType] : 0;
};
