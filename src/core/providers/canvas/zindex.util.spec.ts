import { ShapeModel } from '@/core/model';
import {
  moveZIndexDownOneLevel,
  moveZIndexToBottom,
  moveZIndexTopOneLevel,
  moveZIndexToTop,
} from './zindex.util';

describe('moveZIndexToTop', () => {
  it('should move the shape to the end of the array', () => {
    // Arrange
    const selectedShapeId: string = '2';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexToTop(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual<ShapeModel[]>([
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
    ]);
  });

  it('should return the same array if the shape is already at the end', () => {
    // Arrange
    const selectedShapeId: string = '2';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
    ];
    // Act
    const result = moveZIndexToTop(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual(shapes);
  });

  it('should return an empty array if there is no shapes created', () => {
    // Arrange
    const selectedShapeId: string = '2';
    const shapes: ShapeModel[] = [];
    // Act
    const result = moveZIndexToTop(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual<ShapeModel[]>([]);
  });

  it('should return the same array if the shape is not found', () => {
    // Arrange
    const selectedShapeId: string = '5';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexToTop(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual(shapes);
  });
});

describe('moveZIndexToBottom', () => {
  it('should move the shape to the head of the array', () => {
    // Arrange
    const selectedShapeId: string = '3';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexToBottom(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual<ShapeModel[]>([
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ]);
  });

  it('should return the same array if the shape is already at the head', () => {
    // Arrange
    const selectedShapeId: string = '2';
    const shapes: ShapeModel[] = [
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexToBottom(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual(shapes);
  });

  it('should return an empty array if there is no shapes created', () => {
    // Arrange
    const selectedShapeId: string = '2';
    const shapes: ShapeModel[] = [];
    // Act
    const result = moveZIndexToBottom(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual<ShapeModel[]>([]);
  });

  it('should return the same array if the shape is not found', () => {
    // Arrange
    const selectedShapeId: string = '5';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexToBottom(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual(shapes);
  });
});

describe('moveZIndexDownOneLevel', () => {
  it('should move the shape one level towards the start of the array', () => {
    // Arrange
    const selectedShapeId: string = '3';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexDownOneLevel(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual<ShapeModel[]>([
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ]);
  });

  it('should return the same array if the shape is already at the start', () => {
    // Arrange
    const selectedShapeId: string = '1';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexDownOneLevel(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual(shapes);
  });

  it('should return an empty array if there is no shapes created', () => {
    // Arrange
    const selectedShapeId: string = '2';
    const shapes: ShapeModel[] = [];
    // Act
    const result = moveZIndexDownOneLevel(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual<ShapeModel[]>([]);
  });

  it('should return the same array if the shape is not found', () => {
    // Arrange
    const selectedShapeId: string = '5';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexDownOneLevel(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual(shapes);
  });
});

describe('moveZIndexTopOneLevel', () => {
  it('should move the shape one level towards the end of the array', () => {
    // Arrange
    const selectedShapeId: string = '2';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexTopOneLevel(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual<ShapeModel[]>([
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ]);
  });

  it('should return the same array if the shape is already at the end', () => {
    // Arrange
    const selectedShapeId: string = '4';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexTopOneLevel(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual(shapes);
  });

  it('should return an empty array if there is no shapes created', () => {
    // Arrange
    const selectedShapeId: string = '2';
    const shapes: ShapeModel[] = [];
    // Act
    const result = moveZIndexTopOneLevel(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual<ShapeModel[]>([]);
  });

  it('should return the same array if the shape is not found', () => {
    // Arrange
    const selectedShapeId: string = '5';
    const shapes: ShapeModel[] = [
      { id: '1', x: 0, y: 0, width: 0, height: 0, type: 'button' },
      { id: '2', x: 0, y: 0, width: 0, height: 0, type: 'input' },
      { id: '3', x: 0, y: 0, width: 0, height: 0, type: 'combobox' },
      { id: '4', x: 0, y: 0, width: 0, height: 0, type: 'checkbox' },
    ];
    // Act
    const result = moveZIndexTopOneLevel(selectedShapeId, shapes);
    // Assert
    expect(result).toStrictEqual(shapes);
  });
});
