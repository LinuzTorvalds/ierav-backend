import excel, { Column, Workbook, Worksheet } from 'exceljs'

export default class SheetFactory {
  private workbook: Workbook

  private currentWorksheet: Worksheet

  constructor(title = 'Report') {
    this.workbook = new excel.Workbook()
    this.workbook.creator = 'back-end node'
    this.currentWorksheet = this.workbook.addWorksheet(title)
  }

  addEmptyRow() {
    this.currentWorksheet.addRow([])
  }

  setColumnSizes(size: number[]) {
    this.currentWorksheet.columns = size.map(
      (size) => ({ width: size } as Column)
    )
  }

  addTitleRow(data: any[]) {
    this.addEmptyRow()

    const row = this.currentWorksheet.addRow(data)

    row.font = { size: 18, bold: true }
    row.height = 22
  }

  addSubtitleRow(data: any[]) {
    this.addEmptyRow()

    const row = this.currentWorksheet.addRow(data)

    row.font = { size: 17 }
    row.height = 20
  }

  addRows(rows: any[]) {
    this.currentWorksheet.addRows(rows)
  }

  async finishSheet() {
    const buffer = await this.workbook.xlsx.writeBuffer()
    return buffer
  }
}
