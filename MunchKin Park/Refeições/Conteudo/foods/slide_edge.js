/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'imagesVLU3WWEY3',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imagesVLU3WWEY.jpg",'0px','0px']
            },
            {
                id: 'imagesKUUHVXA73',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imagesKUUHVXA7.jpg",'0px','0px']
            },
            {
                id: 'download3',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"download.jpg",'0px','0px']
            },
            {
                id: 'download_73',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"download%20%287%29.jpg",'0px','0px']
            },
            {
                id: 'download_53',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"download%20%285%29.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_imagesVLU3WWEY3}": [
                ["style", "opacity", '1']
            ],
            "${_imagesKUUHVXA73}": [
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '400px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_download_53}": [
                ["style", "opacity", '1']
            ],
            "${_download3}": [
                ["style", "opacity", '1']
            ],
            "${_download_73}": [
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_download_73}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
                { id: "eid8", tween: [ "style", "${_download_53}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
                { id: "eid18", tween: [ "style", "${_imagesVLU3WWEY3}", "opacity", '1', { fromValue: '1'}], position: 14500, duration: 0 },
                { id: "eid19", tween: [ "style", "${_imagesVLU3WWEY3}", "opacity", '1', { fromValue: '1'}], position: 15000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_imagesKUUHVXA73}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 500 },
                { id: "eid12", tween: [ "style", "${_download3}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4692336");
