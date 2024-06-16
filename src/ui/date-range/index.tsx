import { format, parse } from "date-fns";
import { useStrings } from "../../hooks";
import { Style } from "../../react-pdf";
import { IconText } from "../icon-text";

export interface DateRangeProps {
  style?: Style;
  startAt: string;
  endAt?: string;
}

export function formatDate(dateString: string, formatProp = "LL/yyyy") {
  const formatString = "yyyy-MM-dd";
  const referenceDate = new Date();

  return format(parse(dateString, formatString, referenceDate), formatProp);
}

export function DateRange({ startAt, endAt, style }: DateRangeProps) {
  const s = useStrings();

  const dateRangeText = [
    formatDate(startAt),
    endAt ? formatDate(endAt) : s["placeholder.endAt"],
  ].join(" - ");

  return <IconText style={style} text={dateRangeText} iconName="calendar" />;
}
