class BP {
    static phonePortrait = {
        name: 'phonePortrait',
        min: 320,
        max: 414,
        template: 320
    };
    static phoneLandscape = {
        name: 'phoneLandscape',
        min: 415,
        max: 667,
        template: 568
    };
    static tabletPortrait = {
        name: 'tabletPortrait',
        min: 668,
        max: 768,
        template: 768
    };
    static tabletLandscape = {
        name: 'tabletLandscape',
        min: 769,
        max: 1024,
        template: 1024
    };
    static desktop = {
        name: 'desktop',
        min: 1025,
        max: 1366,
        template: 1026
    };
    static desktopWide = {
        name: 'desktopWide',
        min: 1367,
        max: 1680,
        template: 1368
    };
    static desktopHD = {
        name: 'desktopHD',
        min: 1681,
        max: 1920,
        template: 1682
    };
    static desktopMega = {
        name: 'desktopMega',
        min: 1921,
        max: 2560,
        template: 1922
    };

    static isMobile(mediaType) {
        return [
            BP.phonePortrait.name,
            BP.phoneLandscape.name
        ].indexOf(mediaType) !== -1;
    }

    static isDesktop(mediaType) {
        return [
            BP.tabletLandscape.name,
            BP.desktop.name,
            BP.desktopHD.name,
            BP.desktopMega.name,
            BP.desktopWide.name
        ].indexOf(mediaType) !== -1;
    }

    static isTabletPortrait(mediaType) {
        return [
            BP.tabletPortrait.name
        ].indexOf(mediaType) !== -1;
    }
}

export default BP;
