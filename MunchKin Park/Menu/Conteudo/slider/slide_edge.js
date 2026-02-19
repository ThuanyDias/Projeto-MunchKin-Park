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
                id: 'balde',
                type: 'image',
                rect: ['0', '0','900px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"balde.jpg",'0px','0px']
            },
            {
                id: 'banho',
                type: 'image',
                rect: ['0', '0','900px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"banho.jpg",'0px','0px']
            },
            {
                id: 'fish',
                type: 'image',
                rect: ['0', '0','900px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fish.jpg",'0px','0px']
            },
            {
                id: 'kid',
                type: 'image',
                rect: ['0', '0','900px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"kid.jpg",'0px','0px']
            },
            {
                id: 'oba',
                type: 'image',
                rect: ['0', '0','900px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oba.jpg",'0px','0px']
            },
            {
                id: 'water',
                type: 'image',
                rect: ['0', '0','900px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"water.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_water}": [
                ["style", "opacity", '1']
            ],
            "${_kid}": [
                ["style", "opacity", '1']
            ],
            "${_fish}": [
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '900px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_balde}": [
                ["style", "opacity", '1']
            ],
            "${_oba}": [
                ["style", "opacity", '1']
            ],
            "${_banho}": [
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "style", "${_balde}", "opacity", '1', { fromValue: '1'}], position: 14000, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Stage}", "width", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Stage}", "height", '500px', { fromValue: '500px'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_oba}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
                { id: "eid23", tween: [ "style", "${_kid}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
                { id: "eid30", tween: [ "style", "${_banho}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 500 },
                { id: "eid25", tween: [ "style", "${_fish}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 500 },
                { id: "eid31", tween: [ "style", "${_fish}", "opacity", '0', { fromValue: '0'}], position: 12000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_water}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 575 }            ]
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
})(jQuery, AdobeEdge, "EDGE-4715555");
