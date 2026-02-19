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
                id: 'sor_ve_te2',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sor%20ve%20te.jpg",'0px','0px']
            },
            {
                id: 'pipoca2',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pipoca.jpg",'0px','0px']
            },
            {
                id: 'hotdog2',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hotdog.jpg",'0px','0px']
            },
            {
                id: 'churros2',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"churros.jpg",'0px','0px']
            },
            {
                id: 'algo_dao2',
                type: 'image',
                rect: ['0', '0','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"algo%20dao.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_churros2}": [
                ["style", "opacity", '1']
            ],
            "${_algo_dao2}": [
                ["style", "opacity", '1']
            ],
            "${_hotdog2}": [
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '300px'],
                ["style", "width", '400px']
            ],
            "${_pipoca2}": [
                ["style", "opacity", '1']
            ],
            "${_sor_ve_te2}": [
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
                { id: "eid10", tween: [ "style", "${_hotdog2}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500 },
                { id: "eid2", tween: [ "style", "${_algo_dao2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
                { id: "eid6", tween: [ "style", "${_churros2}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
                { id: "eid12", tween: [ "style", "${_pipoca2}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 500 },
                { id: "eid15", tween: [ "style", "${_sor_ve_te2}", "opacity", '1', { fromValue: '1'}], position: 14500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_sor_ve_te2}", "opacity", '1', { fromValue: '1'}], position: 15000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-4743702");
