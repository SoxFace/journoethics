import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';
import './main.html';
import { Mongo } from 'meteor/mongo';

Answers = new Mongo.Collection("answers");
Answers.insert({questionNumber: 1, answer: "disagree"});

Template.question.onCreated(function questionOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.question.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.question.events({
  'click .toggle'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    var x = template.$('input').is(":checked").val();
    Session.set("statevalue", x);
    console.log(Session.get("statevalue"));
  },
});



// Template.results.helpers({
//     topGenresChart: function() {
//         return {
//             chart: {
//                 backgroundColor: null,
//                 renderTo: 'container',
//                 type: 'bar'
//             },
//             title: {
//                 text: ''
//             },
//             xAxis: {
//                 gridLineWidth: 0,
//                 enabled: false,
//                 lineWidth: -1,
//                 categories: [''],
//                 labels: {
//                     enabled: false
//                 }
//             },
//             yAxis: {
//                 enabled: false,
//                 gridLineWidth: 0,
//                 lineWidth: 0,
//                 min: 0,
//                 title: {
//                     text: '',
//                     margin: 0
//                 },
//                 labels: {
//                     enabled: false
//                 }
//             },
//             legend: {
//                 enabled: false,
//             },
//             tooltip: {
//                 formatter: function() {
//                     return '' +
//                         this.series.name + ': ' + this.y + '';
//                 }
//             },
//             credits: {
//                 enabled: false,
//                 position: {
//                     align: 'left',
//                     x: 10
//                 }
//             },
//             plotOptions: {
//                 series: {
//                     stacking: 'normal'
//                 }
//             },
//             series: [{
//                 name: 'Disagree',
//                 data: [50]
//             }, {
//                 name: 'Agree',
//                 data: [4]
//             }],
//             exporting: {
//                 enabled: false
//             }
//         }
//         $('.highcharts-axis').css('display','none');
//     }
// });
