import {Component, OnInit} from '@angular/core';
import {EstimationService} from '../data-services/estimation.service';
import {Estimation} from '../model/estimation.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent implements OnInit {


  estimations = this.estimationService.getEstimations();

  constructor(private estimationService: EstimationService) {
  }

  ngOnInit() {
    $(document).ready(function () {

      $('#printButton').on('click', function () {
        // var divToPrint = document.getElementById('estTable');
        // var newWin = window.open('');
        // // alert(thead +divToPrint.outerHTML);
        // newWin.document.write(thead + divToPrint.outerHTML);
        // newWin.print();
        // newWin.close();
        print();
      });

      function print(){
        var pageTitle = "tesT";
        var contents = $("#estTable").html();
        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();
        //Create a new HTML document.
        var headContent = "<title>"+pageTitle+"</title>";
        headContent +="";
        frameDoc.document.write('<html><head>' + headContent);
        frameDoc.document.write('</head><body>');
        //Append the external CSS file.
        frameDoc.document.write('<link href="src/app/estimation/estimation.component.css" rel="stylesheet" type="text/css" />');
       frameDoc.document.write('<link href="../../../node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />');
       frameDoc.document.write('<script src="../../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>');

        //Append the DIV contents.
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        setTimeout(function () {
          window.frames["frame1"].focus();
          window.frames["frame1"].print();
          frame1.remove();
        }, 500);
      }
    });
  }

}
