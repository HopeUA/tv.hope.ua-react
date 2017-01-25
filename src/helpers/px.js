const k = {
    phonePortrait: 0.1562500,
    phoneLandscape: 0.08803,
    tabletPortrait: 0.065106,
    tabletLandscape: 0.04882826,
    desktop: 0.04687513,
    desktopWide: 0.04394543,
    desktopHD: 0.0390626,
    desktopMega: 0.0341797
};

export default (px, mediaType) => {
    return k[mediaType] ? px * k[mediaType] : 0;
};
