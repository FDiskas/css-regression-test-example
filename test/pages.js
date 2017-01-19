Succss.options = {
    imgType: 'png',
    imgQuality: 100,
    diff: true,
    imagediff: true,
    resemble: false,
    diffQuality: 95,
    tolerancePixels: 50,
    diffLightness: 100,
    report: true,
    exitOnError: true,
    pageSettings: {
        loadImages: true,
        loadPlugins: true,
        webSecurityEnabled: false,
        ignoreSslErrors: true,
        userAgent: "Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
        outputEncoding: "utf8",
        scriptEncoding: "utf8",
        localToRemoteUrlAccessEnabled: true,
        resourceTimeout: 1000
    }
};

// data.js
Succss.pages = {
    'home': {
        url: 'http://localhost:3000/index.html',
        directory: 'test/img',
        captures: {
            hello: {
                selector: '.ts-hello',
                hidden: '#__bs_notify__',
                before: function () {
                    this.wait(2500);
                }
            },
            button: {
                selector: '.ts-button',
                hidden: '#__bs_notify__',
                before: function () {
                    this.wait(2500);
                }
            }
        }
    }
};

Succss.viewports = {
    'mobile-small': {
        width: 320,
        height: 480
    },
    'mobile-big': {
        width: 480,
        height: 800
    },
    'phablet': {
        width: 720,
        height: 1280
    },
    'tablet': {
        width: 960,
        height: 600
    },
    'laptop': {
        width: 1024,
        height: 768
    },
    'notebook': {
        width: 1280,
        height: 800
    }
};
