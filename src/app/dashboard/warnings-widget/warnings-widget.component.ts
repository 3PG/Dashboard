import { Component, OnInit } from '@angular/core';
import { GuildService } from 'src/app/services/guild.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'warnings-widget',
  templateUrl: './warnings-widget.component.html',
  styleUrls: ['./warnings-widget.component.css']
})
export class WarningsWidgetComponent implements OnInit {
  warnings: any;

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

      this.warnings = await this.guildService.getWarnings(id);
  
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
      { data: [0,0,0,0,0,0,0], label: 'All' },];
      
    for (const warning of this.warnings) {
      const ddMM = this.ddMM(new Date(warning.at));      
      const dayIndex = this.barChartLabels.indexOf(ddMM);

      sets[0].data[dayIndex]++;
    }
    return sets;
  }

  private ddMM(date: Date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;   
  }
}
