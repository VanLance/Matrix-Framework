import { Canvas, Container, GridUnit } from './index';

export default class Component {
  private static _classId: number = 1;
  
  constructor(
    private _canvas: Canvas,
    private _id: number = Component._classId,
    private _shape: Container = new Container(),
    private _width: GridUnit = 2,
    private _height: GridUnit = 2,
    private _locationTop: GridUnit = 1,
    private _locationLeft: GridUnit = 1,
    private _content: HTMLElement = document.createElement('div')
  ) {
    Component._classId++;
  }

  public get content(): HTMLElement {
    return this._content;
  }
  public set content(value: HTMLElement) {
    this._content = value;
  }
  public get locationLeft(): GridUnit {
    return this._locationLeft;
  }
  public set locationLeft(value: GridUnit) {
    this._locationLeft = value;
  }
  public get locationTop(): GridUnit {
    return this._locationTop;
  }
  public set locationTop(value: GridUnit) {
    this._locationTop = value;
  }
  public get height(): GridUnit {
    return this._height;
  }
  public set height(value: GridUnit) {
    this._height = value;
  }
  public get width(): GridUnit {
    return this._width;
  }
  public set width(value: GridUnit) {
    this._width = value;
  }
  public get shape(): Container {
    return this._shape;
  }
  public set shape(value: Container) {
    this._shape = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get canvas(): Canvas {
    return this._canvas;
  }
  public set canvas(value: Canvas) {
    this._canvas = value;
  }
 

  
}
