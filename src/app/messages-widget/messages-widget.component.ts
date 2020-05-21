import { Component, OnInit } from '@angular/core';
import { GuildService } from 'src/app/services/guild.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'messages-widget',
  templateUrl: './messages-widget.component.html',
  styleUrls: ['./messages-widget.component.css']
})
export class MessagesWidgetComponent implements OnInit {
  messages: any;

  chartReady = false;
  
  barChartOptions: ChartOptions = {
    responsive: false,
    scales: {
      yAxes: [{ display: false }],
      xAxes: [{ display: false }]
    },
    plugins: {
      datalabels: { anchor: 'end', align: 'end' }
    }
  };
  barChartLabels = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [pluginDataLabels];

  barChartData: ChartDataSets[] = [];

  constructor(
    private guildService: GuildService,
    private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.paramMap.subscribe(async(val) => {
      const id = val.get('id');
      
      const log = await this.guildService.getSavedLog(id);
      this.messages = log.messages;
  
      this.barChartLabels = this.buildLabels();
      this.barChartData = this.buildDataSets();
      
      this.chartReady = true;
    });
  }

  buildLabels() {
    const labels: string[] = [];
    for (let i = 6; i >= 0; i--) {		
      const date = new Date();
      date.setDate(date.getDate() - i);

      labels.push(this.ddMM(date));
    }    
    return labels;
  }

  buildDataSets() {
    const sets = [
      { data: [0,0,0,0,0,0,0], label: 'Valid' },
      { data: [0,0,0,0,0,0,0], label: 'Invalid' }];
      
    for (const message of this.messages) {
      const ddMM = this.ddMM(new Date(message.at));      
      const dayIndex = this.barChartLabels.indexOf(ddMM);

      sets[0].data[dayIndex]++;
      if (message.validation?.filter)
        sets[1].data[dayIndex]++;
    }
    return sets;
  }

  private ddMM(date: Date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;   
  }
}
