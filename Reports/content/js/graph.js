/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 489.0, "minX": 0.0, "maxY": 2943.0, "series": [{"data": [[0.0, 489.0], [0.1, 489.0], [0.2, 489.0], [0.3, 489.0], [0.4, 489.0], [0.5, 489.0], [0.6, 489.0], [0.7, 495.0], [0.8, 495.0], [0.9, 495.0], [1.0, 495.0], [1.1, 495.0], [1.2, 495.0], [1.3, 497.0], [1.4, 497.0], [1.5, 497.0], [1.6, 497.0], [1.7, 497.0], [1.8, 497.0], [1.9, 498.0], [2.0, 498.0], [2.1, 498.0], [2.2, 498.0], [2.3, 498.0], [2.4, 498.0], [2.5, 499.0], [2.6, 499.0], [2.7, 499.0], [2.8, 499.0], [2.9, 499.0], [3.0, 499.0], [3.1, 499.0], [3.2, 499.0], [3.3, 499.0], [3.4, 499.0], [3.5, 499.0], [3.6, 499.0], [3.7, 500.0], [3.8, 500.0], [3.9, 500.0], [4.0, 500.0], [4.1, 500.0], [4.2, 500.0], [4.3, 503.0], [4.4, 503.0], [4.5, 503.0], [4.6, 503.0], [4.7, 503.0], [4.8, 503.0], [4.9, 503.0], [5.0, 503.0], [5.1, 503.0], [5.2, 503.0], [5.3, 503.0], [5.4, 503.0], [5.5, 505.0], [5.6, 505.0], [5.7, 505.0], [5.8, 505.0], [5.9, 505.0], [6.0, 505.0], [6.1, 507.0], [6.2, 507.0], [6.3, 507.0], [6.4, 507.0], [6.5, 507.0], [6.6, 507.0], [6.7, 509.0], [6.8, 509.0], [6.9, 509.0], [7.0, 509.0], [7.1, 509.0], [7.2, 509.0], [7.3, 510.0], [7.4, 510.0], [7.5, 510.0], [7.6, 510.0], [7.7, 510.0], [7.8, 510.0], [7.9, 511.0], [8.0, 511.0], [8.1, 511.0], [8.2, 511.0], [8.3, 511.0], [8.4, 511.0], [8.5, 512.0], [8.6, 512.0], [8.7, 512.0], [8.8, 512.0], [8.9, 512.0], [9.0, 512.0], [9.1, 512.0], [9.2, 512.0], [9.3, 512.0], [9.4, 512.0], [9.5, 512.0], [9.6, 512.0], [9.7, 512.0], [9.8, 512.0], [9.9, 512.0], [10.0, 512.0], [10.1, 512.0], [10.2, 512.0], [10.3, 513.0], [10.4, 513.0], [10.5, 513.0], [10.6, 513.0], [10.7, 513.0], [10.8, 513.0], [10.9, 513.0], [11.0, 513.0], [11.1, 513.0], [11.2, 513.0], [11.3, 513.0], [11.4, 513.0], [11.5, 514.0], [11.6, 514.0], [11.7, 514.0], [11.8, 514.0], [11.9, 514.0], [12.0, 514.0], [12.1, 516.0], [12.2, 516.0], [12.3, 516.0], [12.4, 516.0], [12.5, 516.0], [12.6, 516.0], [12.7, 516.0], [12.8, 516.0], [12.9, 516.0], [13.0, 516.0], [13.1, 516.0], [13.2, 516.0], [13.3, 517.0], [13.4, 517.0], [13.5, 517.0], [13.6, 517.0], [13.7, 517.0], [13.8, 517.0], [13.9, 517.0], [14.0, 517.0], [14.1, 517.0], [14.2, 517.0], [14.3, 517.0], [14.4, 517.0], [14.5, 517.0], [14.6, 517.0], [14.7, 517.0], [14.8, 517.0], [14.9, 517.0], [15.0, 517.0], [15.1, 518.0], [15.2, 518.0], [15.3, 518.0], [15.4, 518.0], [15.5, 518.0], [15.6, 518.0], [15.7, 518.0], [15.8, 518.0], [15.9, 518.0], [16.0, 518.0], [16.1, 518.0], [16.2, 518.0], [16.3, 519.0], [16.4, 519.0], [16.5, 519.0], [16.6, 519.0], [16.7, 519.0], [16.8, 519.0], [16.9, 520.0], [17.0, 520.0], [17.1, 520.0], [17.2, 520.0], [17.3, 520.0], [17.4, 520.0], [17.5, 520.0], [17.6, 520.0], [17.7, 520.0], [17.8, 520.0], [17.9, 520.0], [18.0, 520.0], [18.1, 521.0], [18.2, 521.0], [18.3, 521.0], [18.4, 521.0], [18.5, 521.0], [18.6, 521.0], [18.7, 522.0], [18.8, 522.0], [18.9, 522.0], [19.0, 522.0], [19.1, 522.0], [19.2, 522.0], [19.3, 523.0], [19.4, 523.0], [19.5, 523.0], [19.6, 523.0], [19.7, 523.0], [19.8, 523.0], [19.9, 523.0], [20.0, 523.0], [20.1, 523.0], [20.2, 523.0], [20.3, 523.0], [20.4, 523.0], [20.5, 523.0], [20.6, 523.0], [20.7, 523.0], [20.8, 523.0], [20.9, 523.0], [21.0, 523.0], [21.1, 524.0], [21.2, 524.0], [21.3, 524.0], [21.4, 524.0], [21.5, 524.0], [21.6, 524.0], [21.7, 524.0], [21.8, 524.0], [21.9, 524.0], [22.0, 524.0], [22.1, 524.0], [22.2, 524.0], [22.3, 524.0], [22.4, 524.0], [22.5, 524.0], [22.6, 524.0], [22.7, 524.0], [22.8, 524.0], [22.9, 526.0], [23.0, 526.0], [23.1, 526.0], [23.2, 526.0], [23.3, 526.0], [23.4, 526.0], [23.5, 527.0], [23.6, 527.0], [23.7, 527.0], [23.8, 527.0], [23.9, 527.0], [24.0, 527.0], [24.1, 528.0], [24.2, 528.0], [24.3, 528.0], [24.4, 528.0], [24.5, 528.0], [24.6, 528.0], [24.7, 528.0], [24.8, 528.0], [24.9, 528.0], [25.0, 528.0], [25.1, 528.0], [25.2, 528.0], [25.3, 528.0], [25.4, 529.0], [25.5, 529.0], [25.6, 529.0], [25.7, 529.0], [25.8, 529.0], [25.9, 529.0], [26.0, 529.0], [26.1, 529.0], [26.2, 529.0], [26.3, 529.0], [26.4, 529.0], [26.5, 529.0], [26.6, 531.0], [26.7, 531.0], [26.8, 531.0], [26.9, 531.0], [27.0, 531.0], [27.1, 531.0], [27.2, 531.0], [27.3, 531.0], [27.4, 531.0], [27.5, 531.0], [27.6, 531.0], [27.7, 531.0], [27.8, 532.0], [27.9, 532.0], [28.0, 532.0], [28.1, 532.0], [28.2, 532.0], [28.3, 532.0], [28.4, 536.0], [28.5, 536.0], [28.6, 536.0], [28.7, 536.0], [28.8, 536.0], [28.9, 536.0], [29.0, 537.0], [29.1, 537.0], [29.2, 537.0], [29.3, 537.0], [29.4, 537.0], [29.5, 537.0], [29.6, 537.0], [29.7, 537.0], [29.8, 537.0], [29.9, 537.0], [30.0, 537.0], [30.1, 537.0], [30.2, 537.0], [30.3, 537.0], [30.4, 537.0], [30.5, 537.0], [30.6, 537.0], [30.7, 537.0], [30.8, 538.0], [30.9, 538.0], [31.0, 538.0], [31.1, 538.0], [31.2, 538.0], [31.3, 538.0], [31.4, 538.0], [31.5, 538.0], [31.6, 538.0], [31.7, 538.0], [31.8, 538.0], [31.9, 538.0], [32.0, 539.0], [32.1, 539.0], [32.2, 539.0], [32.3, 539.0], [32.4, 539.0], [32.5, 539.0], [32.6, 540.0], [32.7, 540.0], [32.8, 540.0], [32.9, 540.0], [33.0, 540.0], [33.1, 540.0], [33.2, 540.0], [33.3, 540.0], [33.4, 540.0], [33.5, 540.0], [33.6, 540.0], [33.7, 540.0], [33.8, 541.0], [33.9, 541.0], [34.0, 541.0], [34.1, 541.0], [34.2, 541.0], [34.3, 541.0], [34.4, 542.0], [34.5, 542.0], [34.6, 542.0], [34.7, 542.0], [34.8, 542.0], [34.9, 542.0], [35.0, 546.0], [35.1, 546.0], [35.2, 546.0], [35.3, 546.0], [35.4, 546.0], [35.5, 546.0], [35.6, 546.0], [35.7, 546.0], [35.8, 546.0], [35.9, 546.0], [36.0, 546.0], [36.1, 546.0], [36.2, 547.0], [36.3, 547.0], [36.4, 547.0], [36.5, 547.0], [36.6, 547.0], [36.7, 547.0], [36.8, 547.0], [36.9, 547.0], [37.0, 547.0], [37.1, 547.0], [37.2, 547.0], [37.3, 547.0], [37.4, 547.0], [37.5, 547.0], [37.6, 547.0], [37.7, 547.0], [37.8, 547.0], [37.9, 547.0], [38.0, 551.0], [38.1, 551.0], [38.2, 551.0], [38.3, 551.0], [38.4, 551.0], [38.5, 551.0], [38.6, 552.0], [38.7, 552.0], [38.8, 552.0], [38.9, 552.0], [39.0, 552.0], [39.1, 552.0], [39.2, 552.0], [39.3, 552.0], [39.4, 552.0], [39.5, 552.0], [39.6, 552.0], [39.7, 552.0], [39.8, 553.0], [39.9, 553.0], [40.0, 553.0], [40.1, 553.0], [40.2, 553.0], [40.3, 553.0], [40.4, 554.0], [40.5, 554.0], [40.6, 554.0], [40.7, 554.0], [40.8, 554.0], [40.9, 554.0], [41.0, 555.0], [41.1, 555.0], [41.2, 555.0], [41.3, 555.0], [41.4, 555.0], [41.5, 555.0], [41.6, 557.0], [41.7, 557.0], [41.8, 557.0], [41.9, 557.0], [42.0, 557.0], [42.1, 557.0], [42.2, 560.0], [42.3, 560.0], [42.4, 560.0], [42.5, 560.0], [42.6, 560.0], [42.7, 560.0], [42.8, 561.0], [42.9, 561.0], [43.0, 561.0], [43.1, 561.0], [43.2, 561.0], [43.3, 561.0], [43.4, 561.0], [43.5, 561.0], [43.6, 561.0], [43.7, 561.0], [43.8, 561.0], [43.9, 561.0], [44.0, 562.0], [44.1, 562.0], [44.2, 562.0], [44.3, 562.0], [44.4, 562.0], [44.5, 562.0], [44.6, 565.0], [44.7, 565.0], [44.8, 565.0], [44.9, 565.0], [45.0, 565.0], [45.1, 565.0], [45.2, 566.0], [45.3, 566.0], [45.4, 566.0], [45.5, 566.0], [45.6, 566.0], [45.7, 566.0], [45.8, 566.0], [45.9, 566.0], [46.0, 566.0], [46.1, 566.0], [46.2, 566.0], [46.3, 566.0], [46.4, 567.0], [46.5, 567.0], [46.6, 567.0], [46.7, 567.0], [46.8, 567.0], [46.9, 567.0], [47.0, 567.0], [47.1, 567.0], [47.2, 567.0], [47.3, 567.0], [47.4, 567.0], [47.5, 567.0], [47.6, 567.0], [47.7, 567.0], [47.8, 567.0], [47.9, 567.0], [48.0, 567.0], [48.1, 567.0], [48.2, 567.0], [48.3, 567.0], [48.4, 567.0], [48.5, 567.0], [48.6, 567.0], [48.7, 567.0], [48.8, 567.0], [48.9, 567.0], [49.0, 567.0], [49.1, 567.0], [49.2, 567.0], [49.3, 567.0], [49.4, 568.0], [49.5, 568.0], [49.6, 568.0], [49.7, 568.0], [49.8, 568.0], [49.9, 568.0], [50.0, 569.0], [50.1, 569.0], [50.2, 569.0], [50.3, 569.0], [50.4, 569.0], [50.5, 569.0], [50.6, 569.0], [50.7, 571.0], [50.8, 571.0], [50.9, 571.0], [51.0, 571.0], [51.1, 571.0], [51.2, 571.0], [51.3, 571.0], [51.4, 571.0], [51.5, 571.0], [51.6, 571.0], [51.7, 571.0], [51.8, 571.0], [51.9, 572.0], [52.0, 572.0], [52.1, 572.0], [52.2, 572.0], [52.3, 572.0], [52.4, 572.0], [52.5, 574.0], [52.6, 574.0], [52.7, 574.0], [52.8, 574.0], [52.9, 574.0], [53.0, 574.0], [53.1, 574.0], [53.2, 574.0], [53.3, 574.0], [53.4, 574.0], [53.5, 574.0], [53.6, 574.0], [53.7, 575.0], [53.8, 575.0], [53.9, 575.0], [54.0, 575.0], [54.1, 575.0], [54.2, 575.0], [54.3, 575.0], [54.4, 575.0], [54.5, 575.0], [54.6, 575.0], [54.7, 575.0], [54.8, 575.0], [54.9, 576.0], [55.0, 576.0], [55.1, 576.0], [55.2, 576.0], [55.3, 576.0], [55.4, 576.0], [55.5, 576.0], [55.6, 576.0], [55.7, 576.0], [55.8, 576.0], [55.9, 576.0], [56.0, 576.0], [56.1, 577.0], [56.2, 577.0], [56.3, 577.0], [56.4, 577.0], [56.5, 577.0], [56.6, 577.0], [56.7, 580.0], [56.8, 580.0], [56.9, 580.0], [57.0, 580.0], [57.1, 580.0], [57.2, 580.0], [57.3, 582.0], [57.4, 582.0], [57.5, 582.0], [57.6, 582.0], [57.7, 582.0], [57.8, 582.0], [57.9, 582.0], [58.0, 582.0], [58.1, 582.0], [58.2, 582.0], [58.3, 582.0], [58.4, 582.0], [58.5, 582.0], [58.6, 582.0], [58.7, 582.0], [58.8, 582.0], [58.9, 582.0], [59.0, 582.0], [59.1, 582.0], [59.2, 582.0], [59.3, 582.0], [59.4, 582.0], [59.5, 582.0], [59.6, 582.0], [59.7, 584.0], [59.8, 584.0], [59.9, 584.0], [60.0, 584.0], [60.1, 584.0], [60.2, 584.0], [60.3, 585.0], [60.4, 585.0], [60.5, 585.0], [60.6, 585.0], [60.7, 585.0], [60.8, 585.0], [60.9, 585.0], [61.0, 585.0], [61.1, 585.0], [61.2, 585.0], [61.3, 585.0], [61.4, 585.0], [61.5, 587.0], [61.6, 587.0], [61.7, 587.0], [61.8, 587.0], [61.9, 587.0], [62.0, 587.0], [62.1, 588.0], [62.2, 588.0], [62.3, 588.0], [62.4, 588.0], [62.5, 588.0], [62.6, 588.0], [62.7, 589.0], [62.8, 589.0], [62.9, 589.0], [63.0, 589.0], [63.1, 589.0], [63.2, 589.0], [63.3, 591.0], [63.4, 591.0], [63.5, 591.0], [63.6, 591.0], [63.7, 591.0], [63.8, 591.0], [63.9, 591.0], [64.0, 591.0], [64.1, 591.0], [64.2, 591.0], [64.3, 591.0], [64.4, 591.0], [64.5, 592.0], [64.6, 592.0], [64.7, 592.0], [64.8, 592.0], [64.9, 592.0], [65.0, 592.0], [65.1, 593.0], [65.2, 593.0], [65.3, 593.0], [65.4, 593.0], [65.5, 593.0], [65.6, 593.0], [65.7, 595.0], [65.8, 595.0], [65.9, 595.0], [66.0, 595.0], [66.1, 595.0], [66.2, 595.0], [66.3, 596.0], [66.4, 596.0], [66.5, 596.0], [66.6, 596.0], [66.7, 596.0], [66.8, 596.0], [66.9, 596.0], [67.0, 596.0], [67.1, 596.0], [67.2, 596.0], [67.3, 596.0], [67.4, 596.0], [67.5, 596.0], [67.6, 596.0], [67.7, 596.0], [67.8, 596.0], [67.9, 596.0], [68.0, 596.0], [68.1, 597.0], [68.2, 597.0], [68.3, 597.0], [68.4, 597.0], [68.5, 597.0], [68.6, 597.0], [68.7, 597.0], [68.8, 597.0], [68.9, 597.0], [69.0, 597.0], [69.1, 597.0], [69.2, 597.0], [69.3, 597.0], [69.4, 597.0], [69.5, 597.0], [69.6, 597.0], [69.7, 597.0], [69.8, 597.0], [69.9, 598.0], [70.0, 598.0], [70.1, 598.0], [70.2, 598.0], [70.3, 598.0], [70.4, 598.0], [70.5, 598.0], [70.6, 598.0], [70.7, 598.0], [70.8, 598.0], [70.9, 598.0], [71.0, 598.0], [71.1, 598.0], [71.2, 598.0], [71.3, 598.0], [71.4, 598.0], [71.5, 598.0], [71.6, 598.0], [71.7, 598.0], [71.8, 598.0], [71.9, 598.0], [72.0, 598.0], [72.1, 598.0], [72.2, 598.0], [72.3, 601.0], [72.4, 601.0], [72.5, 601.0], [72.6, 601.0], [72.7, 601.0], [72.8, 601.0], [72.9, 603.0], [73.0, 603.0], [73.1, 603.0], [73.2, 603.0], [73.3, 603.0], [73.4, 603.0], [73.5, 604.0], [73.6, 604.0], [73.7, 604.0], [73.8, 604.0], [73.9, 604.0], [74.0, 604.0], [74.1, 606.0], [74.2, 606.0], [74.3, 606.0], [74.4, 606.0], [74.5, 606.0], [74.6, 606.0], [74.7, 608.0], [74.8, 608.0], [74.9, 608.0], [75.0, 608.0], [75.1, 608.0], [75.2, 608.0], [75.3, 608.0], [75.4, 609.0], [75.5, 609.0], [75.6, 609.0], [75.7, 609.0], [75.8, 609.0], [75.9, 609.0], [76.0, 610.0], [76.1, 610.0], [76.2, 610.0], [76.3, 610.0], [76.4, 610.0], [76.5, 610.0], [76.6, 611.0], [76.7, 611.0], [76.8, 611.0], [76.9, 611.0], [77.0, 611.0], [77.1, 611.0], [77.2, 613.0], [77.3, 613.0], [77.4, 613.0], [77.5, 613.0], [77.6, 613.0], [77.7, 613.0], [77.8, 618.0], [77.9, 618.0], [78.0, 618.0], [78.1, 618.0], [78.2, 618.0], [78.3, 618.0], [78.4, 618.0], [78.5, 618.0], [78.6, 618.0], [78.7, 618.0], [78.8, 618.0], [78.9, 618.0], [79.0, 625.0], [79.1, 625.0], [79.2, 625.0], [79.3, 625.0], [79.4, 625.0], [79.5, 625.0], [79.6, 631.0], [79.7, 631.0], [79.8, 631.0], [79.9, 631.0], [80.0, 631.0], [80.1, 631.0], [80.2, 633.0], [80.3, 633.0], [80.4, 633.0], [80.5, 633.0], [80.6, 633.0], [80.7, 633.0], [80.8, 634.0], [80.9, 634.0], [81.0, 634.0], [81.1, 634.0], [81.2, 634.0], [81.3, 634.0], [81.4, 636.0], [81.5, 636.0], [81.6, 636.0], [81.7, 636.0], [81.8, 636.0], [81.9, 636.0], [82.0, 644.0], [82.1, 644.0], [82.2, 644.0], [82.3, 644.0], [82.4, 644.0], [82.5, 644.0], [82.6, 680.0], [82.7, 680.0], [82.8, 680.0], [82.9, 680.0], [83.0, 680.0], [83.1, 680.0], [83.2, 686.0], [83.3, 686.0], [83.4, 686.0], [83.5, 686.0], [83.6, 686.0], [83.7, 686.0], [83.8, 689.0], [83.9, 689.0], [84.0, 689.0], [84.1, 689.0], [84.2, 689.0], [84.3, 689.0], [84.4, 705.0], [84.5, 705.0], [84.6, 705.0], [84.7, 705.0], [84.8, 705.0], [84.9, 705.0], [85.0, 737.0], [85.1, 737.0], [85.2, 737.0], [85.3, 737.0], [85.4, 737.0], [85.5, 737.0], [85.6, 766.0], [85.7, 766.0], [85.8, 766.0], [85.9, 766.0], [86.0, 766.0], [86.1, 766.0], [86.2, 769.0], [86.3, 769.0], [86.4, 769.0], [86.5, 769.0], [86.6, 769.0], [86.7, 769.0], [86.8, 776.0], [86.9, 776.0], [87.0, 776.0], [87.1, 776.0], [87.2, 776.0], [87.3, 776.0], [87.4, 797.0], [87.5, 797.0], [87.6, 797.0], [87.7, 797.0], [87.8, 797.0], [87.9, 797.0], [88.0, 841.0], [88.1, 841.0], [88.2, 841.0], [88.3, 841.0], [88.4, 841.0], [88.5, 841.0], [88.6, 852.0], [88.7, 852.0], [88.8, 852.0], [88.9, 852.0], [89.0, 852.0], [89.1, 852.0], [89.2, 923.0], [89.3, 923.0], [89.4, 923.0], [89.5, 923.0], [89.6, 923.0], [89.7, 923.0], [89.8, 1042.0], [89.9, 1042.0], [90.0, 1042.0], [90.1, 1042.0], [90.2, 1042.0], [90.3, 1042.0], [90.4, 1244.0], [90.5, 1244.0], [90.6, 1244.0], [90.7, 1244.0], [90.8, 1244.0], [90.9, 1244.0], [91.0, 1308.0], [91.1, 1308.0], [91.2, 1308.0], [91.3, 1308.0], [91.4, 1308.0], [91.5, 1308.0], [91.6, 1339.0], [91.7, 1339.0], [91.8, 1339.0], [91.9, 1339.0], [92.0, 1339.0], [92.1, 1339.0], [92.2, 1392.0], [92.3, 1392.0], [92.4, 1392.0], [92.5, 1392.0], [92.6, 1392.0], [92.7, 1392.0], [92.8, 1394.0], [92.9, 1394.0], [93.0, 1394.0], [93.1, 1394.0], [93.2, 1394.0], [93.3, 1394.0], [93.4, 1397.0], [93.5, 1397.0], [93.6, 1397.0], [93.7, 1397.0], [93.8, 1397.0], [93.9, 1397.0], [94.0, 1399.0], [94.1, 1399.0], [94.2, 1399.0], [94.3, 1399.0], [94.4, 1399.0], [94.5, 1399.0], [94.6, 1447.0], [94.7, 1447.0], [94.8, 1447.0], [94.9, 1447.0], [95.0, 1447.0], [95.1, 1447.0], [95.2, 1826.0], [95.3, 1826.0], [95.4, 1826.0], [95.5, 1826.0], [95.6, 1826.0], [95.7, 1826.0], [95.8, 1860.0], [95.9, 1860.0], [96.0, 1860.0], [96.1, 1860.0], [96.2, 1860.0], [96.3, 1860.0], [96.4, 1879.0], [96.5, 1879.0], [96.6, 1879.0], [96.7, 1879.0], [96.8, 1879.0], [96.9, 1879.0], [97.0, 1917.0], [97.1, 1917.0], [97.2, 1917.0], [97.3, 1917.0], [97.4, 1917.0], [97.5, 1917.0], [97.6, 1933.0], [97.7, 1933.0], [97.8, 1933.0], [97.9, 1933.0], [98.0, 1933.0], [98.1, 1933.0], [98.2, 1965.0], [98.3, 1965.0], [98.4, 1965.0], [98.5, 1965.0], [98.6, 1965.0], [98.7, 1965.0], [98.8, 2034.0], [98.9, 2034.0], [99.0, 2034.0], [99.1, 2034.0], [99.2, 2034.0], [99.3, 2034.0], [99.4, 2943.0], [99.5, 2943.0], [99.6, 2943.0], [99.7, 2943.0], [99.8, 2943.0], [99.9, 2943.0], [100.0, 2943.0]], "isOverall": false, "label": "Class 10 Book API", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 114.0, "series": [{"data": [[600.0, 20.0], [700.0, 6.0], [2900.0, 1.0], [800.0, 2.0], [900.0, 1.0], [1000.0, 1.0], [1200.0, 1.0], [1300.0, 6.0], [1400.0, 1.0], [400.0, 6.0], [1800.0, 3.0], [1900.0, 3.0], [500.0, 114.0], [2000.0, 1.0]], "isOverall": false, "label": "Class 10 Book API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 151.0, "series": [{"data": [[0.0, 7.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 151.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.74152832E12, "maxY": 3.0, "series": [{"data": [[1.74152844E12, 1.0], [1.74152832E12, 3.0], [1.74152838E12, 2.337423312883435]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74152844E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 604.9416666666664, "minX": 1.0, "maxY": 1879.0, "series": [{"data": [[2.0, 604.9416666666664], [4.0, 1298.142857142857], [1.0, 1879.0], [5.0, 766.0], [3.0, 778.9166666666666], [6.0, 1447.0]], "isOverall": false, "label": "Class 10 Book API", "isController": false}, {"data": [[2.3373493975903634, 685.6204819277109]], "isOverall": false, "label": "Class 10 Book API-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2.183333333333333, "minX": 1.74152832E12, "maxY": 12936.766666666666, "series": [{"data": [[1.74152844E12, 79.36666666666666], [1.74152832E12, 158.73333333333332], [1.74152838E12, 12936.766666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74152844E12, 2.183333333333333], [1.74152832E12, 4.366666666666666], [1.74152838E12, 355.8833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74152844E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 676.8220858895701, "minX": 1.74152832E12, "maxY": 1879.0, "series": [{"data": [[1.74152844E12, 1879.0], [1.74152832E12, 806.0], [1.74152838E12, 676.8220858895701]], "isOverall": false, "label": "Class 10 Book API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74152844E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 676.7546012269939, "minX": 1.74152832E12, "maxY": 1879.0, "series": [{"data": [[1.74152844E12, 1879.0], [1.74152832E12, 798.0], [1.74152838E12, 676.7546012269939]], "isOverall": false, "label": "Class 10 Book API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74152844E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 390.7546012269941, "minX": 1.74152832E12, "maxY": 1528.0, "series": [{"data": [[1.74152844E12, 1528.0], [1.74152832E12, 579.0], [1.74152838E12, 390.7546012269941]], "isOverall": false, "label": "Class 10 Book API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74152844E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 489.0, "minX": 1.74152832E12, "maxY": 2943.0, "series": [{"data": [[1.74152844E12, 1879.0], [1.74152832E12, 923.0], [1.74152838E12, 2943.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74152844E12, 1879.0], [1.74152832E12, 923.0], [1.74152838E12, 965.9999999999989]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74152844E12, 1879.0], [1.74152832E12, 923.0], [1.74152838E12, 2361.2399999999866]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74152844E12, 1879.0], [1.74152832E12, 923.0], [1.74152838E12, 1437.3999999999992]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74152844E12, 1879.0], [1.74152832E12, 689.0], [1.74152838E12, 489.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74152844E12, 1879.0], [1.74152832E12, 806.0], [1.74152838E12, 567.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74152844E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 560.0, "minX": 1.0, "maxY": 1879.0, "series": [{"data": [[2.0, 566.5], [4.0, 597.0], [1.0, 1879.0], [5.0, 1276.0], [3.0, 560.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 560.0, "minX": 1.0, "maxY": 1879.0, "series": [{"data": [[2.0, 566.5], [4.0, 597.0], [1.0, 1879.0], [5.0, 1276.0], [3.0, 560.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.74152832E12, "maxY": 2.7, "series": [{"data": [[1.74152832E12, 0.06666666666666667], [1.74152838E12, 2.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74152838E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74152832E12, "maxY": 2.716666666666667, "series": [{"data": [[1.74152844E12, 0.016666666666666666], [1.74152832E12, 0.03333333333333333], [1.74152838E12, 2.716666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74152844E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74152832E12, "maxY": 2.716666666666667, "series": [{"data": [[1.74152844E12, 0.016666666666666666], [1.74152832E12, 0.03333333333333333], [1.74152838E12, 2.716666666666667]], "isOverall": false, "label": "Class 10 Book API-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74152844E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74152832E12, "maxY": 2.716666666666667, "series": [{"data": [[1.74152844E12, 0.016666666666666666], [1.74152832E12, 0.03333333333333333], [1.74152838E12, 2.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74152844E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

