import { ShapeSizeRestrictions } from '@/core/model';
import { forwardRef } from 'react';
import { ShapeProps } from './shape.model';
import { fitSizeToShapeSizeRestrictions } from '@/common/utils/shapes/shape-restrictions';
import { Group, Rect, Line } from 'react-konva';

const datepickerInputShapeRestrictions: ShapeSizeRestrictions = {
  minWidth: 80,
  minHeight: 50,
  maxWidth: -1,
  maxHeight: 50,
  defaultWidth: 220,
  defaultHeight: 50,
};

export const getDatepickerInputShapeSizeRestrictions =
  (): ShapeSizeRestrictions => datepickerInputShapeRestrictions;

export const DatepickerInputShape = forwardRef<any, ShapeProps>(
  ({ x, y, width, height, id, onSelected, ...shapeProps }, ref) => {
    const { width: restrictedWidth, height: restrictedHeight } =
      fitSizeToShapeSizeRestrictions(
        datepickerInputShapeRestrictions,
        width,
        height
      );

    const separatorPadding = 12;
    const separator1X = restrictedWidth / 3;
    const separator2X = (2 * restrictedWidth) / 3;

    return (
      <Group
        x={x}
        y={y}
        ref={ref}
        width={restrictedWidth}
        height={restrictedHeight}
        {...shapeProps}
        onClick={() => onSelected(id, 'datepickerinput')}
      >
        {/* input frame */}
        <Rect
          x={0}
          y={0}
          width={restrictedWidth}
          height={restrictedHeight + 4}
          cornerRadius={10}
          stroke="black"
          strokeWidth={2}
          fill="white"
        />
        {/* Inverted diagonal spacers */}
        <Line
          points={[
            separator1X + separatorPadding,
            separatorPadding - 4,
            separator1X - separatorPadding,
            10 + restrictedHeight - separatorPadding,
          ]}
          stroke="black"
          strokeWidth={2}
        />
        <Line
          points={[
            separator2X + separatorPadding,
            separatorPadding - 4,
            separator2X - separatorPadding,
            10 + restrictedHeight - separatorPadding,
          ]}
          stroke="black"
          strokeWidth={2}
        />
      </Group>
    );
  }
);
