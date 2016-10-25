import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';
import './main.html';
import {
    Mongo
} from 'meteor/mongo';

Template.question.onCreated(function questionOnCreated() {
    // counter starts at 0
    this.agreeCounter = new ReactiveVar(0);
    this.disagreeCounter = new ReactiveVar(0);
});

Template.question.helpers({
    agreeCounter() {
        return Template.instance().agreeCounter.get();
    },
    disagreeCounter() {
        return Template.instance().disagreeCounter.get();
    }
});

Template.question.events({
    'change input': function(event, instance) {
        // increment the counter when button is clicked
        var agree = event.target.checked;
        var disagree = event.target.unchecked;

        if (agree === true) {
          instance.agreeCounter.set(instance.agreeCounter.get() + 1);
        }

        if (agree !== true) {
          instance.disagreeCounter.set(instance.disagreeCounter.get() + 1);
        }

        Session.set("statevalue", agree, disagree);
        console.log(Session.get("statevalue"));
        console.log("Answers to question")
    }
});

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
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
