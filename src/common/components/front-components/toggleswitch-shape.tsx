import { ShapeSizeRestrictions } from '@/core/model';
import { forwardRef, useState } from 'react';
import { ShapeProps } from './shape.model';
import { fitSizeToShapeSizeRestrictions } from '@/common/utils/shapes/shape-restrictions';
import { Circle, Group, Rect } from 'react-konva';

const toggleSwitchShapeRestrictions: ShapeSizeRestrictions = {
  minWidth: 50,
  minHeight: 25,
  maxWidth: 100,
  maxHeight: 35,
  defaultWidth: 60,
  defaultHeight: 25,
};

export const getToggleSwitchShapeSizeRestrictions = (): ShapeSizeRestrictions =>
  toggleSwitchShapeRestrictions;

export const ToggleSwitch = forwardRef<any, ShapeProps>(
  ({ x, y, width, height, id, onSelected, ...shapeProps }, ref) => {
    const { width: restrictedWidth, height: restrictedHeight } =
      fitSizeToShapeSizeRestrictions(
        toggleSwitchShapeRestrictions,
        width,
        height
      );

    const [isOn, setIsOn] = useState(false);

    const handleSwitch = () => {
      //TODO: Only available when shape is selected
      setIsOn(!isOn);
    };

    const circleX = isOn ? width - height / 2 : height / 2;

    return (
      <Group
        x={x}
        y={y}
        ref={ref}
        width={restrictedWidth}
        height={restrictedHeight}
        {...shapeProps}
        onClick={() => onSelected(id, 'toggleswitch')}
      >
        <Rect
          x={0}
          y={0}
          width={restrictedWidth}
          height={restrictedHeight}
          cornerRadius={50}
          stroke="black"
          strokeWidth={2}
          fill={isOn ? 'lightgreen' : 'lightgray'}
        />
        <Circle
          onClick={handleSwitch}
          x={circleX}
          y={restrictedHeight / 2}
          radius={restrictedHeight / 2}
          stroke="black"
          strokeWidth={2}
          fill="white"
        />
      </Group>
    );
  }
);
