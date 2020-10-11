import React from 'react';
import RPECalc from './RPECalc';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import './RPECalcTour.css';






const tour = new Shepherd.Tour({
    defaultStepOptions: {
      scrollTo: true,
      cancelIcon: {
        enabled: false
      }
    },
    useModalOverlay:true,
    exitOnEsc: true
});

const PREVIOUS_BTN =  {
    text:'🡸',
    action:tour.back,
    classes:'previous-tour-btn'
};

const CANCEL_BTN = {
    text:'✖',
    action:tour.cancel,
    classes:'cancel-tour-btn'
}

const NEXT_BTN = {
    text: '➔',
    action: tour.next,
    classes:'next-tour-btn'
}

const OK_BTN = {
    text:'OK',
    action:tour.cancel,
    classes:'cancel-tour-btn' 
}

const BUTTONS = [
    PREVIOUS_BTN,
    CANCEL_BTN,
    NEXT_BTN
]

const STEPS = [
    {
      id:'intro',
      text:'Welcome to RPE Matrix Calculator! This allows you to calculate multiple Rep/RPE Combinations at once',
      attachTo: {
        element: '.number-of-reps > .number-of-reps-span',
        on: 'bottom' as any
      },
      buttons:[CANCEL_BTN,NEXT_BTN]
    },
    {
        id:'weight-input',
        text:'Input the weight lifted at the given RPE/Rep combination (eg. 295 for 3 reps at RPE 9.5). Then press Enter/Go',
        attachTo:{
            element:"#root > table > tbody > tr:nth-child(2) > td:nth-child(7) > input",
            on: 'right'
        },
        buttons:BUTTONS
    },
    {
        id:'rounding-to',
        text:'Round to the nearest 5, 2.5, or 1 increment using this input',
        attachTo:{
            element:'.round-to-the-nearest',
            on:'left'
        },
        buttons:BUTTONS
    },
    {
        id:'redo-tour',
        text:"If you'd like to see this tour again, just click this button",
        attachTo:{
            element:'.left-help-button',
            on:'bottom'
        },
        buttons:[PREVIOUS_BTN, OK_BTN]
    }
];

tour.addSteps(STEPS);

const TOUR_KEY = "rpe-tour-completed";

const onHelp = () => tour.start();


export default class RPECalcTour extends React.PureComponent {
    componentDidMount(){
        if(!localStorage.getItem(TOUR_KEY)){
            tour.start();
            localStorage.setItem(TOUR_KEY,"true");
        }
    }
    render(){
        return (
                <RPECalc onHelp={onHelp}/>
        );
    }
}

