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
                id: 'image62',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"image6.jpg",'0px','0px']
            },
            {
                id: 'image53',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"image5.jpg",'0px','0px']
            },
            {
                id: 'image33',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"image3.jpg",'0px','0px']
            },
            {
                id: 'image23',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"image2.jpg",'0px','0px']
            },
            {
                id: 'image3',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"image.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_image3}": [
                ["style", "opacity", '1']
            ],
            "${_image23}": [
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '400px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_image62}": [
                ["style", "opacity", '1']
            ],
            "${_image53}": [
                ["style", "opacity", '1']
            ],
            "${_image33}": [
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
                { id: "eid11", tween: [ "style", "${_image33}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500 },
                { id: "eid5", tween: [ "style", "${_image3}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
                { id: "eid9", tween: [ "style", "${_image23}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
                { id: "eid16", tween: [ "style", "${_image62}", "opacity", '1', { fromValue: '1'}], position: 14500, duration: 0 },
                { id: "eid17", tween: [ "style", "${_image62}", "opacity", '1', { fromValue: '1'}], position: 15000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_image53}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-7049926");
