import { Component } from './index'

export default class Canvas{
  private _widgets: Component[] = []
  
  constructor(
    private parent: HTMLElement,
  ){
    this.parent.innerHTML = ''
    this.parent.id = 'canvas'
    const canvasStyle: Partial<CSSStyleDeclaration> = {
      display:"grid",
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateRows: 'repeat(12, 1fr)',
      height: '100vh',
      columnGap: '5px',
      rowGap: '5px',
      aspectRatio: '1/1',
      border: '2px hotpink solid'
    }
    Object.assign(this.parent.style, canvasStyle)
  }
  public get widgets(): Component[] {
    return this._widgets
  }
  public set widgets(value: Component[]) {
    this._widgets = value
  }

  addWidget(widget: Component):void{
    this.widgets.push(widget)
    this.buildWidget(widget)
  }

  private initializeElement(widget:Component):HTMLDivElement{
    const div = document.createElement('div')
    div.id = widget.id.toString()
    const centerStyle: Partial<CSSStyleDeclaration> = {
      margin: "auto",
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      padding:'3%',
      aspectRatio:'1/1'
    }
    Object.assign(div.style, centerStyle)
    return div
  }

  private buildShape(widget:Component, div: HTMLDivElement):void{
    Object.assign(div.style, widget.shape.attributes)
  }

  private placeShape(widget:Component, div:HTMLDivElement):void{
    const locationStyle : Partial<CSSStyleDeclaration> = {
      gridColumnStart:widget.locationLeft.toString(),
      gridColumnEnd: `span ${widget.width}`,
      gridRowStart:widget.locationTop.toString(),
      gridRowEnd: `span ${widget.height}`
    }
    Object.assign(div.style, locationStyle)
  }

  private buildWidget(widget:Component):void{
    const div = this.initializeElement(widget)
    this.buildShape(widget,div)
    this.placeShape(widget,div)
    div.appendChild(widget.content)
    this.parent.appendChild(div)
  }
}

