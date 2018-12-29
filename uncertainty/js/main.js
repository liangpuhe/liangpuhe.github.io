function chunk(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

var data = [{
    img: "img/senate-race.png",
    title: "Forecasting the race for the Senate",
    description: "this is a description",
    link: "https://projects.fivethirtyeight.com/2018-midterm-election-forecast/senate/?ex_cid=rrpromo",
    button: "Read More",
    label: ["blog"]
  },
  {
    img: "img/bubble-treemap.png",
    title: "Bubble Treemap",
    description: "this is a description",
    link: "https://vimeo.com/230840520",
    button: "Read More",
    label: ["paper"]
  },
  {
    img: "img/vsup.png",
    title: "Value-Suppressing Uncertainty Palettes",
    description: "this is a description",
    link: "https://medium.com/@uwdata/value-suppressing-uncertainty-palettes-426130122ce9",
    button: "Read More",
    label: ["paper"]
  },
  {
    img: "https://twitter.com/IneffectiveMath",
    title: "Bracket Probabilities",
    description: "this is a description",
    link: "https://twitter.com/IneffectiveMath",
    button: "Read More",
    label: ["image"]
  },
  {
    img: "img/income-college.png",
    title: "College and Income",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2017/01/18/upshot/some-colleges-have-more-students-from-the-top-1-percent-than-the-bottom-60.html",
    button: "Read More",
    label: ["blog"]
  },
  {
    img: "img/misleading-job-report.png",
    title: "Misled by the Jobs Report",
    description: "this is a description",
    link: "https://www.nytimes.com/2014/05/02/upshot/how-not-to-be-misled-by-the-jobs-report.html",
    button: "Read More",
    label: ["blog"]
  },
  {
    img: "img/dither.png",
    title: "The dithering multivariate correlation matrix",
    description: "this is a description",
    link: "https://github.com/mjskay/uncertainty-examples/blob/master/multivariate-regression.md",
    button: "Read More",
    label: ["Github"]
  },
  {
    img: "img/mammography.png",
    title: "Classic mammography problem",
    description: "this is a description",
    link: "https://hal.inria.fr/hal-00717503v2/document",
    button: "Read More",
    label: ["paper"]
  },
  {
    img: "img/dotplot.png",
    title: "Quantile dotplot",
    description: "this is a description",
    link: "https://github.com/mjskay/when-ish-is-my-bus/blob/master/quantile-dotplots.md",
    button: "Read More",
    label: ["paper", "Github"]
  },
  {
    img: "img/product-plot.png",
    title: "Product Plot",
    description: "this is a description",
    link: "http://vita.had.co.nz/papers/prodplots.html",
    button: "Read More",
    label: ["paper"]
  },
  {
    img: "img/temperature-change.png",
    title: "Global temperature change",
    description: "this is a description",
    link: "https://www.theguardian.com/cities/ng-interactive/2017/nov/03/three-degree-world-cities-drowned-global-warming",
    button: "Read More",
    label: ["press"]
  },
  {
    img: "img/income-mobility.png",
    title: "Income mobility",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2018/03/27/upshot/make-your-own-mobility-animation.html",
    button: "Read More",
    label: ["press"]
  },
  {
    img: "img/measles.png",
    title: "Measles outbreak",
    description: "this is a description",
    link: "https://www.theguardian.com/society/ng-interactive/2015/feb/05/-sp-watch-how-measles-outbreak-spreads-when-kids-get-vaccinated",
    button: "Read More",
    label: ["press"]
  },
  {
    img: "img/risk-theatre.png",
    title: "Risk theatre",
    description: "this is a description",
    link: "https://www.washingtonpost.com/news/monkey-cage/wp/2016/11/29/how-to-better-communicate-election-forecasts-in-one-simple-chart/?noredirect=on&utm_term=.a6ef7e470ef6",
    button: "Read More",
    label: ["press"]
  },
  {
    img: "img/pictograph.png",
    title: "Pictogtaph/Icon Array",
    description: "this is a description",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2649664/figure/F1/",
    button: "Read More",
    label: ["paper"]
  },
  {
    img: "img/temporal-bracket-probability.png",
    title: "Temporal Bracket Probability",
    description: "this is a description",
    link: "https://xeno.graphics/bracket-probabilities/",
    button: "Read More",
    label: ["blog"]
  },
  {
    img: "img/hockey.png",
    title: "Hockey",
    description: "this is a description",
    link: "http://hockeyviz.com/txt/preview1819",
    button: "Read More",
    label: ["press"]
  },
  {
    img: "img/attacking-discrimination.png",
    title: "Attacking discrimination with smarter machine learning",
    description: "this is a description",
    link: "https://research.google.com/bigpicture/attacking-discrimination-in-ml/",
    button: "Read More",
    label: ["paper"]
  },
  {
    img: "img/seats.png",
    title: "Seats",
    description: "this is a description",
    link: "https://www.nytimes.com/interactive/2018/10/24/us/elections/2018-battle-for-congress.html",
    button: "Read More",
    label: ["press"]
  },
  {
    img: "img/facet-icon-array.png",
    title: "Faceted icon array",
    description: "this is a description",
    link: "http://www.wiwi.uni-bielefeld.de/lehrbereiche/statoekoinf/comet/wolf/pw_files/SOFTWARE/pic.plot_examples.pdf",
    button: "Read More",
    label: ["blog"]
  },
  {
    img: "img/risk-matrix.png",
    title: "Risk matrix chart",
    description: "this is a description",
    link: "https://community.powerbi.com/t5/Desktop/Risk-matrix-chart-in-Power-BI/td-p/161587",
    button: "Read More",
    label: ["blog"]
  },
  {
    img: "img/reproducibility-survey.png",
    title: "Results of a reproducibility survey",
    description: "this is a description",
    link: "https://twitter.com/babeheim/status/1063792960377053185",
    button: "Read More",
    label: ["blog"]
  }
];
var cards_in_a_row = 3;
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.chunkedData = chunk(data, cards_in_a_row);
});
