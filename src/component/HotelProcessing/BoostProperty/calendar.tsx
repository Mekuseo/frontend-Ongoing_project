// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';

const { RangePicker } = DatePicker;

interface CalendarProps {
  rangePickerValue: [Dayjs | null, Dayjs | null] | null;
  onRangePickerChange: (value: [Dayjs | null, Dayjs | null] | null, formatString: [string, string]) => void;
}

const Calendar: React.FC<CalendarProps> = ({ rangePickerValue, onRangePickerChange }) => {
  const convertedValue = rangePickerValue
    ? [rangePickerValue[0] ?? null, rangePickerValue[1] ?? null]
    : null;

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        value={convertedValue}
        onChange={(dates, dateStrings) => onRangePickerChange(dates, dateStrings)}
      />
    </Space>
  );
};

export default Calendar;