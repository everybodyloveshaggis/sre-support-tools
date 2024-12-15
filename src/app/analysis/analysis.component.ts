import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService } from '../services/analysis/analysis.service';

@Component({
  selector: 'app-analysis',
  imports: [CommonModule],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent {
  data: { customerReference: string; holdType: string; holdReason: string; comment: string; year: number }[] = [];
  paginatedData: { customerReference: string; holdType: string; holdReason: string; comment: string; year: number }[] = [];
  pageSize = 5;
  currentPage = 0;

  constructor() {
    // this.analysisService.getData().subscribe((result) => {
    //   this.data = result;
    //   this.updatePaginatedData();
    // });

    this.data = [
      { customerReference: 'C001', holdType: 'Type A', holdReason: 'Reason 1', comment: 'Sample comment 1', year: 2021 },
      { customerReference: 'C002', holdType: 'Type B', holdReason: 'Reason 2', comment: 'Sample comment 2', year: 2022 },
      { customerReference: 'C003', holdType: 'Type C', holdReason: 'Reason 3', comment: 'Sample comment 3', year: 2023 },
      { customerReference: 'C004', holdType: 'Type A', holdReason: 'Reason 4', comment: 'Sample comment 4', year: 2020 },
      { customerReference: 'C005', holdType: 'Type B', holdReason: 'Reason 5', comment: 'Sample comment 5', year: 2019 },
      { customerReference: 'C006', holdType: 'Type C', holdReason: 'Reason 6', comment: 'Sample comment 6', year: 2021 },
      { customerReference: 'C007', holdType: 'Type A', holdReason: 'Reason 7', comment: 'Sample comment 7', year: 2022 },
      { customerReference: 'C008', holdType: 'Type B', holdReason: 'Reason 8', comment: 'Sample comment 8', year: 2023 },
      { customerReference: 'C009', holdType: 'Type C', holdReason: 'Reason 9', comment: 'Sample comment 9', year: 2020 },
      { customerReference: 'C010', holdType: 'Type A', holdReason: 'Reason 10', comment: 'Sample comment 10', year: 2019 },
      { customerReference: 'C011', holdType: 'Type B', holdReason: 'Reason 11', comment: 'Sample comment 11', year: 2021 },
      { customerReference: 'C012', holdType: 'Type C', holdReason: 'Reason 12', comment: 'Sample comment 12', year: 2022 },
    ];
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedData = this.data.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage() {
    this.currentPage++;
    this.updatePaginatedData();
  }

  previousPage() {
    this.currentPage--;
    this.updatePaginatedData();
  }
}